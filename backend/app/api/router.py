from fastapi import APIRouter
from app.api.crowd import router as crowd_router
from app.api.simulation import router as simulation_router
from app.api.parking import router as parking_router

router = APIRouter()


@router.get("/health")
def health_check():
    return {
        "status": "healthy",
        "message": "StadiumSense AI Backend is running"
    }


router.include_router(crowd_router)
router.include_router(simulation_router)
router.include_router(parking_router)