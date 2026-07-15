from sqlalchemy.orm import Session

from app.models.volunteer import Volunteer


def get_all_volunteers(db: Session):
    return db.query(Volunteer).all()