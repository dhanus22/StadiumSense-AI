from sqlalchemy.orm import Session

from app.models.weather import WeatherStatus


def get_weather(db: Session):
    return db.query(WeatherStatus).all()