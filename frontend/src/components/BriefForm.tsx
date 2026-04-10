import { useState } from "react";

interface BriefFormProps {
  onSubmit: (briefText: string) => Promise<void>;
  isLoading: boolean;
}

const sampleBriefs = {
  productLaunch: `Vi skal lansere et nytt premium kosttilskudd rettet mot unge yrkesaktive i Oslo og Bergen. Målet er å bygge kjennskap i forkant av lansering og samtidig drive trafikk til en landingsside med ventelistepåmelding. Vi ser for oss at sosiale medier, betalt annonsering og innholdsproduksjon vil være relevante kanaler, men vi ønsker hjelp til å strukturere dette bedre.
Vi har noe visuelt materiell klart, men budskap, kampanjestruktur og publiseringsplan er ikke definert ennå. Budsjettet er heller ikke endelig avklart, og vi trenger hjelp til å forstå hvilke leveranser som bør prioriteres først, hva som mangler i briefen, og hvordan teamet bør gå frem for å komme raskt i gang.`,

  leadGeneration: `Vi er en regional aktør innen oppussing og ønsker hjelp til å generere flere kvalifiserte leads for kjøkkenrenovering i Oslo og Akershus. Hovedmålet er å øke antall henvendelser de neste 2–3 månedene. Vi tror Google Ads, Facebook/Instagram og forbedringer på landingssiden kan være relevante tiltak, men budsjettet er fortsatt til intern vurdering.`,

  seoContent: `Vi lanserer et B2B-selskap innen cybersikkerhet rettet mot små og mellomstore bedrifter i Norge. Vi ønsker å styrke synligheten digitalt og få flere relevante henvendelser gjennom nettsiden. Målet er å bygge tillit og skape inbound leads de neste månedene. Vi tror SEO, LinkedIn-innhold og faglig innholdsproduksjon kan være riktig, men vi trenger hjelp til å strukturere en konkret plan.`,
};

export default function BriefForm({ onSubmit, isLoading }: BriefFormProps) {
  const [briefText, setBriefText] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit(briefText);
  };

  return (
    <form className="brief-form" onSubmit={handleSubmit}>
      <label htmlFor="briefText">Lim inn kundebriefen</label>

      <div className="sample-briefs">
        <button
          type="button"
          className="secondary-button"
          onClick={() => setBriefText(sampleBriefs.productLaunch)}
          disabled={isLoading}
        >
          Eksempel: Produktlansering
        </button>

        <button
          type="button"
          className="secondary-button"
          onClick={() => setBriefText(sampleBriefs.leadGeneration)}
          disabled={isLoading}
        >
          Eksempel: Leadgenerering
        </button>

        <button
          type="button"
          className="secondary-button"
          onClick={() => setBriefText(sampleBriefs.seoContent)}
          disabled={isLoading}
        >
          Eksempel: SEO / Innhold
        </button>
      </div>

      <textarea
        id="briefText"
        value={briefText}
        onChange={(e) => setBriefText(e.target.value)}
        placeholder="Lim inn en rå kundebrief her..."
        rows={12}
      />

      <div className="form-actions">
        <button
          type="submit"
          className="primary-button"
          disabled={isLoading || briefText.trim().length < 20}
        >
          {isLoading ? "Analyserer..." : "Generer gjennomføringsplan"}
        </button>
      </div>
    </form>
  );
}