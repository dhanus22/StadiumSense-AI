from sqlalchemy import Column, Integer, String

from app.database.database import Base


class CrowdStatus(Base):
    __tablename__ = "crowd_status"

    id = Column(Integer, primary_key=True, index=True)
    gate_name = Column(String, nullable=False)
    occupancy = Column(Integer, nullable=False)
    capacity = Column(Integer, nullable=False)