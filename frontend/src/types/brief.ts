export interface BriefRequest {
  brief_text: string;
}

export interface BriefAnalysisResponse {
  summary: string;
  objectives: string[];
  target_audience: string[];
  channels: string[];
  deliverables: string[];
  missing_information: string[];
  execution_steps: string[];
  suggested_tasks: string[];
}