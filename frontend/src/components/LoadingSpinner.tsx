export default function LoadingSpinner() {
  return (
    <div className="loading-box">
      <div className="spinner" />
      <div>
        <strong>Analyserer brief...</strong>
        <p className="loading-text">
          Genererer oppsummering, kanalvalg, manglende informasjon og foreslåtte gjennomføringssteg.        </p>
      </div>
    </div>
  );
}