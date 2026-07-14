from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.weather import WeatherStatus
from app.schemas.weather import WeatherResponse

router = APIRouter(
    prefix="/weather",
    tags=["Weather"]
)


@router.get("/", response_model=list[WeatherResponse])
def get_weather(db: Session = Depends(get_db)):
    return db.query(WeatherStatus).all()