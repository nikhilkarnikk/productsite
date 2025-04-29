import asyncio
import json
import logging
import base64
import tempfile
from pathlib import Path
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, APIRouter, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional, Dict
import uuid
from datetime import datetime, timedelta
from app.config import settings

realtime_router = APIRouter()

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# Store active sessions with timestamps
sessions: Dict[str, dict] = {}

class SessionStart(BaseModel):
    menu: str
    restaurant: str

class Message(BaseModel):
    session_id: str
    content: str

class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[WebSocket, dict] = {}
        self.temp_files: Dict[WebSocket, str] = {}
        self.cleanup_task = None

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections[websocket] = {
            "menu_file": None,
            "restaurant": None,
            "last_ping": datetime.now()
        }
        
        # Start cleanup task if not running
        if not self.cleanup_task:
            self.cleanup_task = asyncio.create_task(self.cleanup_old_sessions())

    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections:
            # Clean up temp file if it exists
            if websocket in self.temp_files:
                try:
                    Path(self.temp_files[websocket]).unlink()
                    logger.info(f"Deleted temp file for connection")
                except Exception as e:
                    logger.error(f"Error deleting temp file: {e}")
            del self.active_connections[websocket]
            if websocket in self.temp_files:
                del self.temp_files[websocket]

    async def cleanup_old_sessions(self):
        while True:
            try:
                current_time = datetime.now()
                # Clean up old sessions
                for session_id, session in list(sessions.items()):
                    if current_time - session["last_activity"] > timedelta(seconds=settings.SESSION_MAX_AGE):
                        try:
                            Path(session["menu_file"]).unlink()
                            logger.info(f"Cleaned up session {session_id}")
                        except Exception as e:
                            logger.error(f"Error cleaning up session {session_id}: {e}")
                        del sessions[session_id]
                
                # Clean up inactive connections
                for ws in list(self.active_connections.keys()):
                    if current_time - self.active_connections[ws]["last_ping"] > timedelta(seconds=settings.WS_PING_TIMEOUT):
                        await ws.close(code=1000)
                        self.disconnect(ws)
                        logger.info("Cleaned up inactive connection")
            except Exception as e:
                logger.error(f"Error in cleanup task: {e}")
            
            await asyncio.sleep(settings.SESSION_CLEANUP_INTERVAL)

    async def process_message(self, websocket: WebSocket, data: dict):
        try:
            # Update last activity
            self.active_connections[websocket]["last_ping"] = datetime.now()
            
            if data["type"] == "init":
                # Save menu file
                menu_data = base64.b64decode(data["menu"])
                with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
                    temp_file.write(menu_data)
                    self.temp_files[websocket] = temp_file.name
                
                self.active_connections[websocket]["restaurant"] = data["restaurant"]
                await websocket.send_json({
                    "type": "response",
                    "message": f"Welcome to {data['restaurant']}! How can I help you today?"
                })
            
            elif data["type"] == "message":
                # Process the message and generate response
                # This is where you'd integrate with your AI model
                response = {
                    "type": "response",
                    "message": "I received your message. This is a placeholder response.",
                    "order": []  # You would populate this with actual order items
                }
                await websocket.send_json(response)
            
            elif data["type"] == "ping":
                await websocket.send_json({"type": "pong"})
        
        except Exception as e:
            logger.error(f"Error processing message: {e}")
            await websocket.send_json({
                "type": "error",
                "message": "Error processing your request"
            })

manager = ConnectionManager()

@realtime_router.websocket("/ws/")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_json()
            await manager.process_message(websocket, data)
    except WebSocketDisconnect:
        manager.disconnect(websocket)
    except Exception as e:
        logger.error(f"Unexpected error in websocket endpoint: {e}")
        manager.disconnect(websocket)

@realtime_router.post("/session/start")
async def start_session(data: SessionStart):
    try:
        # Generate session ID
        session_id = str(uuid.uuid4())
        
        # Save menu file
        menu_data = base64.b64decode(data.menu)
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
            temp_file.write(menu_data)
            
            # Store session data
            sessions[session_id] = {
                "menu_file": temp_file.name,
                "restaurant": data.restaurant,
                "last_activity": datetime.now(),
                "messages": [{
                    "role": "assistant",
                    "content": f"Welcome to {data.restaurant}! How can I help you today?"
                }]
            }
            
        return {"session_id": session_id, "message": "Session started successfully"}
    except Exception as e:
        logger.error(f"Error starting session: {e}")
        raise HTTPException(status_code=500, detail="Error starting session")

@realtime_router.post("/message")
async def send_message(message: Message):
    if message.session_id not in sessions:
        raise HTTPException(status_code=404, detail="Session not found")
    
    try:
        # Update last activity
        sessions[message.session_id]["last_activity"] = datetime.now()
        
        # Add user message to history
        sessions[message.session_id]["messages"].append({
            "role": "user",
            "content": message.content
        })
        
        # Generate AI response (placeholder)
        ai_response = "I received your message. This is a placeholder response."
        
        # Add AI response to history
        sessions[message.session_id]["messages"].append({
            "role": "assistant",
            "content": ai_response
        })
        
        return {
            "message": ai_response,
            "order": []  # You would populate this with actual order items
        }
    except Exception as e:
        logger.error(f"Error processing message: {e}")
        raise HTTPException(status_code=500, detail="Error processing message")

@realtime_router.get("/messages/{session_id}")
async def get_messages(session_id: str):
    if session_id not in sessions:
        raise HTTPException(status_code=404, detail="Session not found")
    
    # Update last activity
    sessions[session_id]["last_activity"] = datetime.now()
    return {"messages": sessions[session_id]["messages"]}

@realtime_router.delete("/session/{session_id}")
async def end_session(session_id: str):
    if session_id in sessions:
        try:
            # Clean up temp file
            Path(sessions[session_id]["menu_file"]).unlink()
            logger.info(f"Ended session {session_id}")
        except Exception as e:
            logger.error(f"Error ending session {session_id}: {e}")
        
        del sessions[session_id]
        return {"message": "Session ended successfully"}
    
    raise HTTPException(status_code=404, detail="Session not found") 