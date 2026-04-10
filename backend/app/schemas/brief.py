from pydantic import BaseModel, Field
from typing import List


class BriefRequest(BaseModel):
    """
    Innkommende request-modell fra frontend.

    Inneholder den rå kundebriefen som brukeren limer inn i skjemaet.
    """
    brief_text: str = Field(..., min_length=20, description="Rå kundebrief som skal analyseres og struktureres")


class BriefAnalysisResponse(BaseModel):
    """
    Strukturert responsmodell som brukes både til validering i backend
    og som kontrakt mot frontend.

    Feltene er valgt for å passe visningen i MVP-en:
    oppsummering, mål, målgruppe, kanaler, leveranser,
    manglende informasjon, gjennomføringssteg og foreslåtte oppgaver.
    """
    summary: str
    objectives: List[str]
    target_audience: List[str]
    channels: List[str]
    deliverables: List[str]
    missing_information: List[str]
    execution_steps: List[str]
    suggested_tasks: List[str]