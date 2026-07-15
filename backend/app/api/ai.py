from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.services.dashboard_service import get_dashboard_data
from app.utils.dashboard_serializer import serialize_dashboard
from app.services.prompt_builder import build_summary_prompt, build_chat_prompt
from app.services.ai_service import generate_content
from app.schemas.ai import ChatRequest


router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.get("/summary")
def ai_summary(db: Session = Depends(get_db)):
    dashboard = get_dashboard_data(db)
    serialized = serialize_dashboard(dashboard)

    prompt = build_summary_prompt(serialized)

    summary = summary = generate_content(prompt)

    return {
        "summary": summary
    }

@router.post("/chat")
def ai_chat(request: ChatRequest, db: Session = Depends(get_db)):
    dashboard = get_dashboard_data(db)
    serialized = serialize_dashboard(dashboard)

    prompt = build_chat_prompt(
        request.question,
        serialized
    )

    response = generate_content(prompt)

    return {
        "response": response
    }