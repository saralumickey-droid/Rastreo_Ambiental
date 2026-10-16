
import os
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "Rastreo Ambiental API"
    APP_VERSION: str = "1.0.0"
    API_PREFIX: str = "/api"

    DATABASE_URL: str = "postgresql+psycopg2://postgres:TU_CONTRASEÑA@localhost:5432/rastreo_ambiental"

    CLIENT_URL: str = "http://localhost:5173"

    SECRET_KEY: str = "CAMBIAR_POR_UNA_CLAVE_SEGURA"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    ALGORITHM: str = "HS256"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )


settings = Settings()
