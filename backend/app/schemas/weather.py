from pydantic import BaseModel


class WeatherResponse(BaseModel):
    id: int
    condition: str
    temperature: int
    humidity: int
    wind_speed: int

    class Config:
        from_attributes = True