from app.database.database import SessionLocal
from app.models.crowd import CrowdStatus
from app.models.parking import ParkingStatus
from app.models.food import FoodQueue
from app.models.weather import WeatherStatus
from app.models.volunteer import Volunteer

db = SessionLocal()

try:
    if db.query(CrowdStatus).count() == 0:
        db.add_all([
            CrowdStatus(gate_name="Gate A", occupancy=1200, capacity=2000),
            CrowdStatus(gate_name="Gate B", occupancy=1850, capacity=2000),
        ])

    if db.query(ParkingStatus).count() == 0:
        db.add_all([
            ParkingStatus(lot_name="Lot A", occupied=320, capacity=500),
            ParkingStatus(lot_name="Lot B", occupied=470, capacity=500),
        ])

    if db.query(FoodQueue).count() == 0:
        db.add_all([
            FoodQueue(food_court="North Court", queue_length=45, average_wait=12),
            FoodQueue(food_court="South Court", queue_length=18, average_wait=5),
        ])
    if db.query(WeatherStatus).count() == 0:
        db.add_all([
        WeatherStatus(
            condition="Sunny",
            temperature=31,
            humidity=62,
            wind_speed=12
            )
        ])
    if db.query(Volunteer).count() == 0:
        db.add_all([
            Volunteer(
                name="John",
                location="Gate A",
                status="Active",
                assigned_task="Crowd Guidance",
                available=True
            ),
            Volunteer(
                name="Sarah",
                location="Food Court",
                status="Busy",
                assigned_task="Queue Management",
                available=False
            ),
            Volunteer(
                name="Mike",
                location="Parking Lot B",
                status="Active",
                assigned_task="Parking Assistance",
                available=True
            ),
        ])
        db.commit()

finally:
    db.close()

print("Sample crowd data inserted!")

db.close()