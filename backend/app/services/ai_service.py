from google import genai

from app.core.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)
print(settings.GEMINI_API_KEY)

def test_ai():
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents="Reply with only: StadiumSense AI is ready."
    )

    return response.text