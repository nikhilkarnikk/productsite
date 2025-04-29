from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.realtime import realtime_router

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Local development
        "https://productsite-pwqiev0u1-nikhil-karniks-projects.vercel.app"  # Production frontend
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(realtime_router) 