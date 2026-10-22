/**
 * Shared Tardy quality and standards bands.
 * Kept outside page content so they appear exactly once immediately before
 * the footer on every route, including the home page and product detail pages.
 */
const standards = [
  {
    src: "/assets/home-original/insca.png",
    alt: "INSCA — International Natural Sausage Casing Association",
    name: "INSCA",
  },
  {
    src: "/assets/home-original/sbf.png",
    alt: "SBF — Chambre syndicale de la boyauderie française",
    name: "SBF",
  },
  {
    src: "/assets/home-original/ensca.png",
    alt: "ENSCA — European Natural Sausage Casing Association",
    name: "ENSCA",
  },
];

function ProvenanceIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M17 45c-9-6-9-21 1-28 8-6 22-4 26 6 3 9-2 17-11 20-9 3-18-2-19-11-2-8 5-14 12-12 6 2 8 9 4 13-3 3-9 3-11-1" />
      <path d="M41 38c1-8 6-13 11-14 3 6 2 13-2 17-4 4-9 4-13 2" />
      <path d="M45 43c-2 5-1 9 2 12m-7-13-5 9m8-9 8 7" />
    </svg>
  );
}
function HygieneIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M12 26h40l-4 27H16l-4-27Z" />
      <path d="M19 26V17l9-4 8 5 9-3v11" />
      <path d="M15 33c6 1 7 4 14 4s8-4 15-4c3 0 5 1 7 2" />
      <path d="M24 37v16m16-16v16M9 26h46" />
    </svg>
  );
}
function DeliveryIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M10 23h30v24H10V23Zm30 7h9l6 8v9H40V30Z" />
      <path d="M16 47a5 5 0 1 0 10 0 5 5 0 0 0-10 0Zm25 0a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z" />
      <path d="M17 16h18m-15-6h12" />
    </svg>
  );
}

const stages = [
  {
    title: "Sélection des meilleures provenances",
    Icon: ProvenanceIcon,
    lines: ["Expertise et Savoir-faire centenaire", "Sourcing maîtrisé", "Produits standardisés"],
  },
  {
    title: "Hygiène et sécurité",
    Icon: HygieneIcon,
    lines: ["Traçabilité garantie", "Contrôles qualité et analyses bactériologiques", "Food défense"],
  },
  {
    title: "Service de livraison",
    Icon: DeliveryIcon,
    lines: ["Livraison dans toute la France de 24h à 48h", "Transport par la STEF", "Transport frigorifique"],
  },
];

export default function PreFooterTrust() {
  return (
    <div className="tardyTrustBands" aria-label="Savoir-faire et engagements de Casing Tardy">
      <section className="tardyTrustProcess" aria-labelledby="tardyTrustProcessTitle">
        <div className="tardyTrustInner">
          <p className="tardyTrustEyebrow">Un processus complet pour la préparation de vos commandes</p>
          <h2 id="tardyTrustProcessTitle">La qualité et l’innovation pour un service client optimal</h2>
          <div className="tardyTrustSteps">
            {stages.map(({ title, Icon, lines }) => (
              <article className="tardyTrustStep" key={title}>
                <span className="tardyTrustIcon"><Icon /></span>
                <h3>{title}</h3>
                <p>{lines.map((line) => <span key={line}>{line}</span>)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="tardyTrustStandards" aria-labelledby="tardyTrustStandardsTitle">
        <div className="tardyTrustInner">
          <h2 id="tardyTrustStandardsTitle">
            Contribuer aux développements d’une charcuterie de qualité
          </h2>
          <p className="tardyTrustLead">
            En apportant le meilleur soin à toute notre gamme de boyaux naturels,
            nous espérons contribuer activement à la qualité des produits de
            charcuterie et à la valorisation du terroir.
          </p>
          <div className="tardyTrustLogos" aria-label="Organisations professionnelles et normes">
            {standards.map((item) => (
              <div className="tardyTrustLogo" key={item.name}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <h3>Respect des normes</h3>
          <p className="tardyTrustStandardsCopy">
            Étant membres de la chambre syndicale de la boyauderie française,
            de l’ENSCA (European Natural Sausage Casings Association)
            et de l’INSCA (International Natural Sausage Casing Association),
            nous nous assurons du respect des normes en permanence.
          </p>
        </div>
      </section>
    </div>
  );
}
