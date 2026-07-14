from sqlalchemy.orm import Session

from app.services.crowd_service import get_all_crowd
from app.services.parking_service import get_all_parking
from app.services.food_service import get_all_food
from app.services.weather_service import get_weather


def get_dashboard_data(db: Session):
    return {
        "crowd": get_all_crowd(db),
        "parking": get_all_parking(db),
        "food": get_all_food(db),
        "weather": get_weather(db)
    }