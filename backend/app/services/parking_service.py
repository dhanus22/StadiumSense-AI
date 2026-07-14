from sqlalchemy.orm import Session

from app.models.parking import ParkingStatus


def get_all_parking(db: Session):
    return db.query(ParkingStatus).all()