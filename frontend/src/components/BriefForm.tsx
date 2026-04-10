import { useState } from "react";

interface BriefFormProps {
  onSubmit: (briefText: string) => Promise<void>;
  isLoading: boolean;
}

const sampleBriefs = {
  productLaunch: `We need a campaign for a new product launch aimed at young professionals in Oslo. The goal is to increase awareness and drive sign-ups. We want to use social media, paid ads, and landing page content. Budget is not finalized yet, and launch timing is sometime next month.`,

  leadGeneration: `We are a regional home services company and want help generating more qualified leads for kitchen renovation projects in the Oslo and Akershus area. Our main goal is to increase incoming consultation requests over the next 2–3 months. We think Google Ads, Facebook/Instagram, and landing page improvements could be relevant, but budget is still being discussed internally.`,

  seoContent: `We are launching a B2B cybersecurity consultancy aimed at small and medium-sized businesses in Norway. We want to improve visibility, build trust, and generate leads through content and search. The goal is to position us as a credible expert and start generating inbound leads over the next quarter. We believe SEO, LinkedIn content, and downloadable guides could help, but we need a more structured plan.`,
};

export default function BriefForm({ onSubmit, isLoading }: BriefFormProps) {
  const [briefText, setBriefText] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit(briefText);
  };

  return (
    <form className="brief-form" onSubmit={handleSubmit}>
      <label htmlFor="briefText">Paste the client brief</label>

      <div className="sample-briefs">
        <button
          type="button"
          className="secondary-button"
          onClick={() => setBriefText(sampleBriefs.productLaunch)}
          disabled={isLoading}
        >
          Sample: Product Launch
        </button>

        <button
          type="button"
          className="secondary-button"
          onClick={() => setBriefText(sampleBriefs.leadGeneration)}
          disabled={isLoading}
        >
          Sample: Lead Generation
        </button>

        <button
          type="button"
          className="secondary-button"
          onClick={() => setBriefText(sampleBriefs.seoContent)}
          disabled={isLoading}
        >
          Sample: SEO / Content
        </button>
      </div>

      <textarea
        id="briefText"
        value={briefText}
        onChange={(e) => setBriefText(e.target.value)}
        placeholder="Paste a raw client brief here..."
        rows={12}
      />

      <div className="form-actions">
        <button
          type="submit"
          className="primary-button"
          disabled={isLoading || briefText.trim().length < 20}
        >
          {isLoading ? "Analyzing..." : "Generate Execution Plan"}
        </button>
      </div>
    </form>
  );
}