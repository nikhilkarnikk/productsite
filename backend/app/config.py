import os
from typing import Optional
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # AWS Configuration
    AWS_REGION: str = os.getenv("AWS_REGION", "us-east-1")
    
    # API Configuration
    API_KEY: Optional[str] = os.getenv("API_KEY")
    CORS_ORIGINS: list = ["*"]  # Configure this appropriately for production
    
    # WebSocket Configuration
    WS_PING_INTERVAL: int = 30  # seconds
    WS_PING_TIMEOUT: int = 10  # seconds
    
    # Session Configuration
    SESSION_CLEANUP_INTERVAL: int = 3600  # 1 hour
    SESSION_MAX_AGE: int = 7200  # 2 hours
    
    class Config:
        env_file = ".env"

settings = Settings() 