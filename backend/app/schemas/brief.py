from pydantic import BaseModel, Field
from typing import List


class BriefRequest(BaseModel):
    brief_text: str = Field(..., min_length=20, description="Raw client brief text")


class BriefAnalysisResponse(BaseModel):
    summary: str
    objectives: List[str]
    target_audience: List[str]
    channels: List[str]
    deliverables: List[str]
    missing_information: List[str]
    execution_steps: List[str]
    suggested_tasks: List[str]