import type { BriefAnalysisResponse } from "../types/brief";
import SectionBlock from "./SectionBlock";

interface ResultCardProps {
  result: BriefAnalysisResponse;
}

export default function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="result-card">
      <section className="summary-block">
        <h2>Oppsummering av brief</h2>
        <p>{result.summary}</p>
      </section>

      <div className="results-grid">
        <SectionBlock title="Kampanjemål" items={result.objectives} />
        <SectionBlock title="Målgruppe" items={result.target_audience} />
        <SectionBlock title="Anbefalte kanaler" items={result.channels} />
        <SectionBlock title="Foreslåtte leveranser" items={result.deliverables} />
        <SectionBlock title="Manglende informasjon" items={result.missing_information} />
        <SectionBlock title="Gjennomføringsplan" items={result.execution_steps} />
        <SectionBlock title="Intern oppgavefordeling" items={result.suggested_tasks} />
      </div>
    </div>
  );
}