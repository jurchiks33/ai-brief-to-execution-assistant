from fastapi import APIRouter
from app.schemas.brief import BriefRequest, BriefAnalysisResponse
from app.services.brief_service import analyze_brief

# Oppretter egen router for brief-relaterte endepunkter.
# Prefix gjør at denne ruten blir tilgjengelig under /brief.
router = APIRouter(prefix="/brief", tags=["Briefanalyse"])


@router.post("/analyze", response_model=BriefAnalysisResponse)
def analyze_brief_route(payload: BriefRequest) -> BriefAnalysisResponse:
    return analyze_brief(payload.brief_text)