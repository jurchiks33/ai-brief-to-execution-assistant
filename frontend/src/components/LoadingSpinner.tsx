export default function LoadingSpinner() {
  return (
    <div className="loading-box">
      <div className="spinner" />
      <div>
        <strong>Analyzing brief...</strong>
        <p className="loading-text">
          Generating summary, channel suggestions, missing inputs, and execution steps.
        </p>
      </div>
    </div>
  );
}