from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "StadiumSense AI"
    DEBUG: bool = True
    DATABASE_URL: str = "sqlite:///./stadiumsense.db"
    GEMINI_API_KEY: str = ""

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()