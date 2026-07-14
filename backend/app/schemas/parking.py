from pydantic import BaseModel


class ParkingResponse(BaseModel):
    id: int
    lot_name: str
    occupied: int
    capacity: int

    class Config:
        from_attributes = True