import random

from sqlalchemy.orm import Session

from app.models.crowd import CrowdStatus


def simulate_crowd(db: Session):
    gates = db.query(CrowdStatus).all()

    for gate in gates:
        change = random.randint(-100, 100)

        gate.occupancy += change

        if gate.occupancy < 0:
            gate.occupancy = 0

        if gate.occupancy > gate.capacity:
            gate.occupancy = gate.capacity

    db.commit()