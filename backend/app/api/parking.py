from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.parking import ParkingStatus
from app.schemas.parking import ParkingResponse

router = APIRouter(
    prefix="/parking",
    tags=["Parking"]
)


@router.get("/", response_model=list[ParkingResponse])
def get_parking(db: Session = Depends(get_db)):
    return db.query(ParkingStatus).all()