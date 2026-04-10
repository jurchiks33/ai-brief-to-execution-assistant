from fastapi import APIRouter
from app.schemas.brief import BriefRequest, BriefAnalysisResponse
from app.services.brief_service import analyze_brief

router = APIRouter(prefix="/brief", tags=["Brief Analysis"])


@router.post("/analyze", response_model=BriefAnalysisResponse)
def analyze_brief_route(payload: BriefRequest) -> BriefAnalysisResponse:
    return analyze_brief(payload.brief_text)