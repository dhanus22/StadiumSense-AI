from fastapi import APIRouter

router = APIRouter(prefix="/crowd", tags=["Crowd"])


@router.get("/")
def get_crowd():
    return {
        "message": "Crowd API is working"
    }