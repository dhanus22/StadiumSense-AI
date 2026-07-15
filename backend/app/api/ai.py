from fastapi import APIRouter

from app.services.ai_service import test_ai

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.get("/test")
def ai_test():
    return {
        "response": test_ai()
    }