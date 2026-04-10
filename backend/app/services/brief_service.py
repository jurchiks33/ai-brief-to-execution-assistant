import json
from typing import Any

from openai import OpenAI

from app.core.config import settings
from app.schemas.brief import BriefAnalysisResponse


client = OpenAI(api_key=settings.openai_api_key)


BRIEF_ANALYSIS_SCHEMA: dict[str, Any] = {
    "name": "brief_analysis_response",
    "strict": True,
    "schema": {
        "type": "object",
        "properties": {
            "summary": {
                "type": "string"
            },
            "objectives": {
                "type": "array",
                "items": {"type": "string"}
            },
            "target_audience": {
                "type": "array",
                "items": {"type": "string"}
            },
            "channels": {
                "type": "array",
                "items": {"type": "string"}
            },
            "deliverables": {
                "type": "array",
                "items": {"type": "string"}
            },
            "missing_information": {
                "type": "array",
                "items": {"type": "string"}
            },
            "execution_steps": {
                "type": "array",
                "items": {"type": "string"}
            },
            "suggested_tasks": {
                "type": "array",
                "items": {"type": "string"}
            }
        },
        "required": [
            "summary",
            "objectives",
            "target_audience",
            "channels",
            "deliverables",
            "missing_information",
            "execution_steps",
            "suggested_tasks"
        ],
        "additionalProperties": False
    }
}


def _fallback_response() -> BriefAnalysisResponse:
    return BriefAnalysisResponse(
        summary="The brief was received, but the AI analysis could not be completed. A fallback structure was returned so the demo keeps working.",
        objectives=[
            "Clarify the campaign goal",
            "Identify the target audience",
            "Create an execution-ready plan"
        ],
        target_audience=[
            "Audience not clearly defined in brief"
        ],
        channels=[
            "To be confirmed"
        ],
        deliverables=[
            "Execution outline",
            "Clarification questions",
            "Task breakdown"
        ],
        missing_information=[
            "Budget is not clearly defined",
            "Timeline is not clearly defined",
            "KPIs are not clearly defined",
            "Target audience needs clarification"
        ],
        execution_steps=[
            "Review incoming brief",
            "Identify missing details",
            "Propose deliverables",
            "Create execution sequence",
            "Prepare internal task list"
        ],
        suggested_tasks=[
            "Summarize client brief",
            "Clarify audience and goals",
            "Define deliverables by channel",
            "Prepare follow-up client questions",
            "Build first execution checklist"
        ]
    )


def analyze_brief(brief_text: str) -> BriefAnalysisResponse:
    """
    Analyze a raw client brief and return a structured execution plan.
    """

    if not settings.openai_api_key:
        return _fallback_response()

    system_prompt = """
You are an AI operations assistant for a marketing agency.

Your task is to turn a raw client brief into a practical agency-ready execution structure.

Be concise, practical, and business-oriented.
Write for an internal agency team handling multiple clients.
Do not use markdown.
Do not include commentary outside the JSON structure.

Very important language rule:
- If the client brief is written in Norwegian, return all fields in Norwegian.
- If the client brief is written in English, return all fields in English.
- Always match the language of the input brief.
- Do not translate to English unless the input is in English.

Focus on:
- what the client seems to want
- what the business goal appears to be
- likely audience
- likely channels
- likely deliverables
- what is missing or unclear
- sensible next execution steps
- actionable suggested tasks for the team

Rules:
- Keep summary to 2-4 sentences.
- Each list should be practical and concise.
- Infer likely channels and deliverables when reasonable, but do not overstate certainty.
- Missing information should be phrased as gaps or questions the team should clarify.
- Suggested tasks should feel like real internal agency execution tasks.
"""

    user_prompt = f"""
Analyze this raw client brief and return a structured response in the same language as the input brief.

CLIENT BRIEF:
{brief_text}
"""

    try:
        completion = client.chat.completions.create(
            model=settings.openai_model,
            temperature=0.3,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            response_format={
                "type": "json_schema",
                "json_schema": BRIEF_ANALYSIS_SCHEMA
            },
        )

        content = completion.choices[0].message.content
        data = json.loads(content)

        return BriefAnalysisResponse(**data)

    except Exception as exc:
        print(f"OpenAI brief analysis failed: {exc}")
        return _fallback_response()