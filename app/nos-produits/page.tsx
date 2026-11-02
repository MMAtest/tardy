import AnimalMap from "../components/AnimalMap";
import "./products-interactive.css";

/**
 * Le catalogue garde son texte et son visuel de conditionnement d'origine.
 * Les quatre liens texte sont remplacés par les anciennes vignettes illustrées
 * (chaque illustration et son cartouche sont cliquables).
 */
export const metadata = {
  title: "Nos produits",
  alternates: { canonical: "/nos-produits/" },
};

const categories = [
  {
    label: "Boyaux de porc et de truie",
    image: "/assets/Porc-1-1.png",
    alt: "Illustration de la catégorie boyaux de porc et de truie",
    href: "/nos-produits/boyaux-de-porc/",
    number: "01",
  },
  {
    label: "Boyaux de bœuf",
    image: "/assets/Boeuf-2-1.png",
    alt: "Illustration de la catégorie boyaux de bœuf",
    href: "/nos-produits/boyaux-de-boeuf/",
    number: "02",
  },
  {
    label: "Boyaux de mouton",
    image: "/assets/Mouton-2.png",
    alt: "Illustration de la catégorie boyaux de mouton",
    href: "/nos-produits/boyaux-de-mouton/",
    number: "03",
  },
  {
    label: "Boyaux reconstitués",
    image: "/assets/boyaux-porc-produit.png",
    alt: "Illustration des boyaux reconstitués et manufacturés",
    href: "/nos-produits/boyaux-manufactures/",
    number: "04",
  },
];

export default function Page() {
  return (
    <main className="wpRestored wpNaturalLanding">
      <section className="wpNaturalBody">
        <h1>Nos boyaux naturels :</h1>
        <p>
          La société Tardy vous propose une gamme complète de boyaux naturels
          calibrés en paquets et filets mais aussi dans des présentations plus
          élaborées : boyaux montés sur tubes souples ou rigides.
        </p>
        <h2>
          Nous proposons un large type de conditionnement adaptés à vos niveaux
          de consommation et à vos habitudes.
        </h2>
        <img
          className="wpConditioningImage"
          src="/assets/wp-reference/boyaux-naturels.png"
          alt="Formats de conditionnement : fûts, seaux et pots"
        />

        <nav
          className="wpNaturalLinks wpNaturalVisualLinks"
          aria-label="Choisir une famille de boyaux"
        >
          {categories.map((item) => (
            <a
              className="wpNaturalVisualCard"
              href={item.href}
              key={item.href}
              aria-label={`Découvrir les ${item.label}`}
            >
              <span className="wpNaturalVisualImage">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="wpNaturalVisualIndex" aria-hidden="true">
                  {item.number}
                </span>
              </span>
              <span className="wpNaturalVisualInfo">
                <span className="wpNaturalVisualName">{item.label}</span>
                <span className="wpNaturalVisualArrow" aria-hidden="true">
                  ↗
                </span>
              </span>
            </a>
          ))}
        </nav>

        <details className="wpNaturalInteractiveMaps">
          <summary>
            <span>Explorer les schémas interactifs des boyaux</span>
            <span aria-hidden="true" className="wpNaturalMapsChevron">⌄</span>
          </summary>
          <div className="wpNaturalMapsGrid">
            <section aria-label="Schéma interactif du porc">
              <h3>Porc et truie</h3>
              <AnimalMap kind="porc" />
              <a href="/nos-produits/boyaux-de-porc/">Voir tous les boyaux de porc ↗</a>
            </section>
            <section aria-label="Schéma interactif du bœuf">
              <h3>Bœuf</h3>
              <AnimalMap kind="boeuf" />
              <a href="/nos-produits/boyaux-de-boeuf/">Voir tous les boyaux de bœuf ↗</a>
            </section>
            <section aria-label="Schéma interactif du mouton">
              <h3>Mouton</h3>
              <AnimalMap kind="mouton" />
              <a href="/nos-produits/boyaux-de-mouton/">Voir tous les boyaux de mouton ↗</a>
            </section>
          </div>
        </details>
      </section>
    </main>
  );
}
