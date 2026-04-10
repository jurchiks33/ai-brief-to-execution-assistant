from app.schemas.brief import BriefAnalysisResponse


def analyze_brief(brief_text: str) -> BriefAnalysisResponse:
    """
    Temporary mock analysis so the frontend/backend flow works first.
    We will replace this with OpenAI in the next step.
    """

    return BriefAnalysisResponse(
        summary="This brief appears to focus on a marketing initiative that needs a clearer execution structure.",
        objectives=[
            "Clarify the main campaign goal",
            "Define the target audience",
            "Prepare an execution-ready plan",
        ],
        target_audience=[
            "Potential customers",
            "Existing audience segments",
        ],
        channels=[
            "Social Media",
            "Paid Ads",
            "Website/Landing Page",
        ],
        deliverables=[
            "Campaign messaging direction",
            "Content plan",
            "Execution task list",
        ],
        missing_information=[
            "Campaign budget is not specified",
            "Timeline is unclear",
            "Main KPI is not clearly defined",
            "Target audience needs more specificity",
        ],
        execution_steps=[
            "Review and clean the incoming brief",
            "Identify goals, channels, and deliverables",
            "List missing questions for the client",
            "Generate a structured execution plan",
            "Break the work into actionable tasks",
        ],
        suggested_tasks=[
            "Write a clarified campaign summary",
            "Define target audience segments",
            "Draft deliverables by channel",
            "Create internal production checklist",
            "Prepare client follow-up questions",
        ],
    )