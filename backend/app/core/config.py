from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "AI Brief-to-Execution Assistant"
    app_env: str = "development"
    debug: bool = True

    host: str = "127.0.0.1"
    port: int = 8000
    api_v1_prefix: str = "/api/v1"

    openai_api_key: str = ""
    openai_model: str = "gpt-4.1-mini"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )


settings = Settings()