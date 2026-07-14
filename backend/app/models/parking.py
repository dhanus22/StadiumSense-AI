from sqlalchemy import Column, Integer, String

from app.database.database import Base


class ParkingStatus(Base):
    __tablename__ = "parking_status"

    id = Column(Integer, primary_key=True, index=True)
    lot_name = Column(String, nullable=False)
    occupied = Column(Integer, nullable=False)
    capacity = Column(Integer, nullable=False)