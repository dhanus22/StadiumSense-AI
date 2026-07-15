from sqlalchemy import Boolean, Column, Integer, String

from app.database.database import Base


class Volunteer(Base):
    __tablename__ = "volunteers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)
    status = Column(String, nullable=False)
    assigned_task = Column(String, nullable=False)
    available = Column(Boolean, default=True)