from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.routes.brief import router as brief_router

# Oppretter FastAPI-applikasjonen og bruker prosjektnavnet fra config.
app = FastAPI(title=settings.app_name)

# Aktiverer CORS slik at frontend kan kommunisere med backend under utvikling.
# Her er alt åpent for enkel lokal testing av MVP-en.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registrerer brief-rutene under versjonert API-prefix fra settings.
app.include_router(brief_router, prefix=settings.api_v1_prefix)


@app.get("/")
def root() -> dict[str, str]:
    """
    Enkel rot-endepunkt for å bekrefte at backend-applikasjonen kjører.
    """
    return {"message": "AI Brief-to-Execution Assistant backend is running"}


@app.get("/health")
def health_check() -> dict[str, str]:
    """
    Lett health check-endepunkt for testing av status og miljø.
    """
    return {"status": "ok", "environment": settings.app_env}