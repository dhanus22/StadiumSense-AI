from sqlalchemy import Column, Integer, String

from app.database.database import Base


class FoodQueue(Base):
    __tablename__ = "food_queue"

    id = Column(Integer, primary_key=True, index=True)
    food_court = Column(String, nullable=False)
    queue_length = Column(Integer, nullable=False)
    average_wait = Column(Integer, nullable=False)