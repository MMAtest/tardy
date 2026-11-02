import AnimalMap from "../components/AnimalMap";
import "./products-interactive.css";

export const metadata = {
  title: "Nos produits",
  alternates: { canonical: "/nos-produits/" },
};

/**
 * La quatrième famille n'a pas de schéma anatomique : les boyaux manufacturés
 * sont obtenus par mise en forme. Ce diagramme distingue leurs trois formes.
 * Chaque forme ouvre directement sa section descriptive existante.
 */
function ManufacturedDiagram() {
  return (
    <div className="manufacturedSchematic" aria-label="Schéma interactif des boyaux reconstitués">
      <div className="manufacturedSchematicGrid">
        <a href="/nos-produits/boyaux-manufactures/#fuseaux" aria-label="Découvrir les boyaux manufacturés en fuseaux">
          <svg viewBox="0 0 120 170" aria-hidden="true">
            <path d="M53 14 Q62 10 69 19 L94 150 Q61 163 26 150 Z" fill="#e8d7c9" stroke="#7c253f" strokeWidth="3" />
            <path d="M57 26 L36 140 M68 27 L84 140" fill="none" stroke="#b88f84" strokeWidth="2" strokeDasharray="4 8" />
          </svg>
          <span>Fuseaux</span>
        </a>
        <a href="/nos-produits/boyaux-manufactures/#cylindriques" aria-label="Découvrir les boyaux manufacturés cylindriques">
          <svg viewBox="0 0 120 170" aria-hidden="true">
            <rect x="30" y="14" width="60" height="142" rx="17" fill="#e8d7c9" stroke="#7c253f" strokeWidth="3" />
            <path d="M41 31 V140 M79 31 V140" fill="none" stroke="#b88f84" strokeWidth="2" strokeDasharray="5 8" />
          </svg>
          <span>Cylindriques</span>
        </a>
        <a href="/nos-produits/boyaux-manufactures/#mouchoirs" aria-label="Découvrir les boyaux manufacturés en feuilles">
          <svg viewBox="0 0 120 170" aria-hidden="true">
            <path d="M25 34 L83 25 L96 142 L36 152 Z" fill="#f3e9dc" stroke="#b88f84" strokeWidth="2" />
            <path d="M18 22 L80 22 L80 142 L18 142 Z" fill="#e8d7c9" stroke="#7c253f" strokeWidth="3" />
            <path d="M25 36 L72 36 M25 47 L72 47" fill="none" stroke="#b88f84" strokeWidth="2" />
          </svg>
          <span>Feuilles</span>
        </a>
      </div>
      <p>Choisissez une forme pour découvrir ses caractéristiques</p>
    </div>
  );
}

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

        <div className="wpNaturalMapsGrid" aria-label="Les quatre schémas interactifs des boyaux">
          <section aria-labelledby="diagram-porc">
            <h3 id="diagram-porc">Porc et truie</h3>
            <AnimalMap kind="porc" />
          </section>
          <section aria-labelledby="diagram-boeuf">
            <h3 id="diagram-boeuf">Bœuf</h3>
            <AnimalMap kind="boeuf" />
          </section>
          <section aria-labelledby="diagram-mouton">
            <h3 id="diagram-mouton">Mouton</h3>
            <AnimalMap kind="mouton" />
          </section>
          <section aria-labelledby="diagram-manufactures">
            <h3 id="diagram-manufactures">Boyaux reconstitués</h3>
            <ManufacturedDiagram />
          </section>
        </div>
      </section>
    </main>
  );
}
