from apscheduler.schedulers.background import BackgroundScheduler

from app.database.database import SessionLocal
from app.simulation.crowd_simulator import simulate_crowd

scheduler = BackgroundScheduler()


def run_crowd_simulation():
    db = SessionLocal()
    try:
        simulate_crowd(db)
    finally:
        db.close()


def start_scheduler():
    scheduler.add_job(
        run_crowd_simulation,
        "interval",
        seconds=5,
        id="crowd_simulator",
        replace_existing=True,
    )
    scheduler.start()