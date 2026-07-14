from app.database.database import SessionLocal
from app.models.crowd import CrowdStatus

db = SessionLocal()

if db.query(CrowdStatus).count() == 0:
    db.add_all([
        CrowdStatus(gate_name="Gate A", occupancy=1200, capacity=2000),
        CrowdStatus(gate_name="Gate B", occupancy=1850, capacity=2000),
        CrowdStatus(gate_name="Gate C", occupancy=900, capacity=2000),
        CrowdStatus(gate_name="Gate D", occupancy=450, capacity=2000),
    ])
    db.commit()

print("Sample crowd data inserted!")

db.close()