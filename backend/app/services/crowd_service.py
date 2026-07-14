from sqlalchemy.orm import Session

from app.models.crowd import CrowdStatus


def get_all_crowd(db: Session):
    return db.query(CrowdStatus).all()