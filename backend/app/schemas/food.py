from pydantic import BaseModel


class FoodResponse(BaseModel):
    id: int
    food_court: str
    queue_length: int
    average_wait: int

    class Config:
        from_attributes = True