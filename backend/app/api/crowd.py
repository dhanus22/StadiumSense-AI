from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.crowd import CrowdStatus
from app.schemas.crowd import CrowdResponse
from app.services.crowd_service import get_all_crowd

router = APIRouter(prefix="/crowd", tags=["Crowd"])


@router.get("/", response_model=list[CrowdResponse])
def get_crowd(db: Session = Depends(get_db)):
    return get_all_crowd(db)