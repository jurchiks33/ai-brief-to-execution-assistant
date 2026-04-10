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
      setError("Something went wrong while analyzing the brief.");
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
          Turn an unstructured client brief into a clearer execution plan with goals,
          deliverables, missing information, and suggested next steps.
        </p>
      </section>

      <BriefForm onSubmit={handleAnalyzeBrief} isLoading={isLoading} />

      {error && <div className="error-box">{error}</div>}

      {isLoading && <LoadingSpinner />}

      {result && !isLoading && <ResultCard result={result} />}
    </main>
  );
}