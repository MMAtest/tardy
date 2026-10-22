/**
 * Legacy product-page call to action, without duplicating the now-global
 * sourcing / hygiene / logistics block rendered before the shared footer.
 */
export default function LegacyQuality() {
  return (
    <aside className="section compact" aria-label="Conseil sur les boyaux naturels">
      <div className="shell">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">Un conseil pour votre fabrication ?</div>
            <h2>Notre équipe est à votre écoute.</h2>
          </div>
          <a className="btn" href="/contactez-nous/">Contactez-nous →</a>
        </div>
      </div>
    </aside>
  );
}
