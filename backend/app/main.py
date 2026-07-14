from fastapi import FastAPI
from app.api.router import router
from app.core.config import settings
from app.database.database import Base, engine
from app.database import base

app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0"
)


Base.metadata.create_all(bind=engine)
app.include_router(router, prefix="/api/v1")


@app.get("/")
def home():
    return {
        "message": f"Welcome to {settings.APP_NAME}"
    }