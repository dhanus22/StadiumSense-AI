from pydantic import BaseModel


class CrowdResponse(BaseModel):
    id: int
    gate_name: str
    occupancy: int
    capacity: int

    class Config:
        from_attributes = True