from fastapi import FastAPI
from app.api.router import router
from app.core.config import settings
from app.database.database import Base, engine
from app.database import base
from contextlib import asynccontextmanager
from app.simulation.scheduler import start_scheduler
from app.core.exceptions import register_exception_handlers
from fastapi.middleware.cors import CORSMiddleware

@asynccontextmanager
async def lifespan(app: FastAPI):
    start_scheduler()
    yield


app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
    lifespan=lifespan
)


Base.metadata.create_all(bind=engine)
app.include_router(router, prefix="/api/v1")


@app.get("/")
def home():
    return {
        "success": True,
        "message": f"Welcome to {settings.APP_NAME}"
    }

register_exception_handlers(app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
