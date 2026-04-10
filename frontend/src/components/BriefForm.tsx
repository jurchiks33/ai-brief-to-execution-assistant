import { useState } from "react";

interface BriefFormProps {
  onSubmit: (briefText: string) => Promise<void>;
  isLoading: boolean;
}

const sampleBrief = `We need a campaign for a new product launch aimed at young professionals in Oslo. The goal is to increase awareness and drive sign-ups. We want to use social media, paid ads, and landing page content. Budget is not finalized yet, and launch timing is sometime next month.`;

export default function BriefForm({ onSubmit, isLoading }: BriefFormProps) {
  const [briefText, setBriefText] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit(briefText);
  };

  return (
    <form className="brief-form" onSubmit={handleSubmit}>
      <label htmlFor="briefText">Paste the client brief</label>
      <textarea
        id="briefText"
        value={briefText}
        onChange={(e) => setBriefText(e.target.value)}
        placeholder="Paste a raw client brief here..."
        rows={12}
      />

      <div className="form-actions">
        <button
          type="button"
          className="secondary-button"
          onClick={() => setBriefText(sampleBrief)}
          disabled={isLoading}
        >
          Use Sample Brief
        </button>

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