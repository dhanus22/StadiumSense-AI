from sqlalchemy.orm import Session

from app.models.alert import Alert


def get_all_alerts(db: Session):
    return db.query(Alert).all()