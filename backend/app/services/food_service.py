from sqlalchemy.orm import Session

from app.models.food import FoodQueue


def get_all_food(db: Session):
    return db.query(FoodQueue).all()