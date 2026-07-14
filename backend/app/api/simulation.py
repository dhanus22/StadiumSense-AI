from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.simulation.crowd_simulator import simulate_crowd

router = APIRouter(
    prefix="/simulation",
    tags=["Simulation"]
)


@router.post("/crowd")
def run_simulation(db: Session = Depends(get_db)):
    simulate_crowd(db)

    return {
        "message": "Crowd simulation completed"
    }