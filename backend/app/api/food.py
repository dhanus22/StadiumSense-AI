from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.food import FoodQueue
from app.schemas.food import FoodResponse
from app.services.food_service import get_all_food

router = APIRouter(
    prefix="/food",
    tags=["Food Queue"]
)


@router.get("/", response_model=list[FoodResponse])
def get_food(db: Session = Depends(get_db)):
    return get_all_food(db)