from fastapi import FastAPI
from app.api.router import router
from app.core.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0"
)

app.include_router(router, prefix="/api/v1")


@app.get("/")
def home():
    return {
        "message": f"Welcome to {settings.APP_NAME}"
    }