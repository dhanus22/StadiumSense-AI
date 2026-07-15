from google import genai

from app.core.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)


def generate_summary(prompt: str):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text

def generate_chat_response(prompt: str):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text