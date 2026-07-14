from sqlalchemy import Column, Integer, String

from app.database.database import Base


class WeatherStatus(Base):
    __tablename__ = "weather_status"

    id = Column(Integer, primary_key=True, index=True)
    condition = Column(String, nullable=False)
    temperature = Column(Integer, nullable=False)
    humidity = Column(Integer, nullable=False)
    wind_speed = Column(Integer, nullable=False)