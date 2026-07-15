from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.volunteer import VolunteerResponse
from app.services.volunteer_service import get_all_volunteers

router = APIRouter(
    prefix="/volunteers",
    tags=["Volunteers"]
)


@router.get("/", response_model=list[VolunteerResponse])
def get_volunteers(db: Session = Depends(get_db)):
    return get_all_volunteers(db)