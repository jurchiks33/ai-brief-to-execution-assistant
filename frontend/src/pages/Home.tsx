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
      setError("Briefen kunne ikke analyseres akkurat nå. Prøv igjen eller test med en annen eksempelbrief.");
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
            Laget for å hjelpe byråteam med å gjøre utydelige kundebriefs om til tydeligere interne
            gjennomføringsplaner. Demoen trekker ut mål, sannsynlige leveranser, manglende informasjon
            og foreslåtte neste steg.
        </p>
        </section>

      <BriefForm onSubmit={handleAnalyzeBrief} isLoading={isLoading} />

      {error && <div className="error-box">{error}</div>}

      {isLoading && <LoadingSpinner />}

      {result && !isLoading && <ResultCard result={result} />}
    </main>
  );
}