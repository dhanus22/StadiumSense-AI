from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "StadiumSense AI"
    DEBUG: bool = True
    DATABASE_URL: str = ""
    GEMINI_API_KEY: str = ""

    class Config:
        env_file = ".env"


settings = Settings()