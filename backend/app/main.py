from fastapi import FastAPI
from app.api.router import router
from app.core.config import settings
from app.database.database import Base, engine
from app.database import base
from contextlib import asynccontextmanager
from app.simulation.scheduler import start_scheduler
from app.core.exceptions import register_exception_handlers
from fastapi.middleware.cors import CORSMiddleware
from app.simulation.scheduler import start_scheduler, scheduler

@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)

    start_scheduler()

    yield

    scheduler.shutdown()


app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
    lifespan=lifespan
)



app.include_router(router, prefix="/api/v1")


@app.get("/")
def home():
    return {
        "application": settings.APP_NAME,
        "version": "1.0.0",
        "status": "Running",
        "docs": "/docs"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }

register_exception_handlers(app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://stadium-sense-ai-two.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
