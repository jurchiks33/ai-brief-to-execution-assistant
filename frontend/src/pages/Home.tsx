import { useState } from "react";
import BriefForm from "../components/BriefForm";
import LoadingSpinner from "../components/LoadingSpinner";
import ResultCard from "../components/ResultCard";
import { analyzeBrief } from "../services/api";
import type { BriefAnalysisResponse } from "../types/brief";

export default function Home() {
  const [result, setResult] = useState<BriefAnalysisResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyzeBrief = async (briefText: string) => {
    try {
      setIsLoading(true);
      setError("");
      const data = await analyzeBrief(briefText);
      setResult(data);
    } catch (err) {
      setError("The brief could not be analyzed right now. Please try again or use another sample brief.");
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Moodgruppen MVP Demo</p>
        <h1>AI Brief-to-Execution Assistant</h1>
        <p className="hero-text">
            Designed to help agency teams turn messy client briefs into clearer internal execution plans.
            The demo extracts key goals, likely deliverables, missing client inputs, and suggested next steps.
        </p>
        </section>

      <BriefForm onSubmit={handleAnalyzeBrief} isLoading={isLoading} />

      {error && <div className="error-box">{error}</div>}

      {isLoading && <LoadingSpinner />}

      {result && !isLoading && <ResultCard result={result} />}
    </main>
  );
}