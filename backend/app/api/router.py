from fastapi import APIRouter
from app.api.crowd import router as crowd_router

router = APIRouter()


@router.get("/health")
def health_check():
    return {
        "status": "healthy",
        "message": "StadiumSense AI Backend is running"
    }


router.include_router(crowd_router)