import type { BriefAnalysisResponse } from "../types/brief";
import SectionBlock from "./SectionBlock";

interface ResultCardProps {
  result: BriefAnalysisResponse;
}

export default function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="result-card">
      <section className="summary-block">
        <h2>Brief Summary</h2>
        <p>{result.summary}</p>
      </section>

      <div className="results-grid">
        <SectionBlock title="Objectives" items={result.objectives} />
        <SectionBlock title="Target Audience" items={result.target_audience} />
        <SectionBlock title="Channels" items={result.channels} />
        <SectionBlock title="Deliverables" items={result.deliverables} />
        <SectionBlock title="Missing Information" items={result.missing_information} />
        <SectionBlock title="Execution Steps" items={result.execution_steps} />
        <SectionBlock title="Suggested Tasks" items={result.suggested_tasks} />
      </div>
    </div>
  );
}