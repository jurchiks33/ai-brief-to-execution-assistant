import type { BriefAnalysisResponse } from "../types/brief";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

export async function analyzeBrief(briefText: string): Promise<BriefAnalysisResponse> {
  const response = await fetch(`${API_BASE_URL}/api/v1/brief/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      brief_text: briefText,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze brief.");
  }

  return response.json();
}