from pydantic import BaseModel


class VolunteerResponse(BaseModel):
    id: int
    name: str
    location: str
    status: str
    assigned_task: str
    available: bool

    class Config:
        from_attributes = True