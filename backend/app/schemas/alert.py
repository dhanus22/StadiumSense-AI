from pydantic import BaseModel


class AlertResponse(BaseModel):
    id: int
    alert_type: str
    location: str
    severity: str
    description: str

    class Config:
        from_attributes = True