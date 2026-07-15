from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.utils.dashboard_serializer import serialize_dashboard

from app.database.database import get_db
from app.services.dashboard_service import get_dashboard_data

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def dashboard(db: Session = Depends(get_db)):
    data = get_dashboard_data(db)
    return serialize_dashboard(data)