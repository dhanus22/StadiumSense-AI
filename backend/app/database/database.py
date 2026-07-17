from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from app.core.config import settings
import os

# print("Working Directory =", os.getcwd())
# print("DATABASE_URL =", settings.DATABASE_URL)
# print("Data folder exists:", os.path.exists("./data"))
# print("DB exists:", os.path.exists("./data/stadiumsense.db"))

engine = create_engine(
    settings.DATABASE_URL,
    connect_args={"check_same_thread": False}
    if settings.DATABASE_URL.startswith("sqlite")
    else {}
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
