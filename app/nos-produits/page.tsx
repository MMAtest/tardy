import AnimalMap from "../components/AnimalMap";
import LegacyQuality from "../components/LegacyQuality";

export const metadata = {
  title: "Nos produits",
  description: "Gamme complète de boyaux naturels Tardy : porc, bœuf, mouton et boyaux manufacturés.",
  alternates: { canonical: "/nos-produits/" },
};

const categories = [
  { name: "Boyaux de porc et de truie", image: "/assets/Porc-1-1.png", alt: "Présentation des boyaux de porc", href: "/nos-produits/boyaux-de-porc/", note: "Menus, chaudins, sacs, suivants, rosettes et fuseaux" },
  { name: "Boyaux de bœuf", image: "/assets/Boeuf-2-1.png", alt: "Présentation des boyaux de bœuf", href: "/nos-produits/boyaux-de-boeuf/", note: "Menus, gros de bœuf et baudruche" },
  { name: "Boyaux de mouton", image: "/assets/Mouton-2.png", alt: "Présentation des boyaux de mouton", href: "/nos-produits/boyaux-de-mouton/", note: "Menus de mouton, différentes qualités et calibres" },
  { name: "Boyaux manufacturés", image: "/assets/boyaux-porc-produit.png", alt: "Boyaux naturels pour la charcuterie", href: "/nos-produits/boyaux-manufactures/", note: "Fuseaux, cylindriques et feuilles" },
];

export default function Page() {
  return <main>
    <section className="pageHero legacyCategoryHero">
      <div className="shell">
        <div className="breadcrumbs"><a href="/">Accueil</a><span>·</span><span>Boyaux naturels</span></div>
        <div className="legacyNaturalIntro legacyNaturalIntroTextOnly">
          <div>
            <div className="eyebrow">Notre métier depuis 1894</div>
            <h1>Nos boyaux naturels</h1>
            <p>La société Tardy vous propose une gamme complète de boyaux naturels calibrés en paquets et filets, mais aussi dans des présentations plus élaborées : boyaux montés sur tubes souples ou rigides.</p>
            <p>Nous proposons un large choix de conditionnements adaptés à vos niveaux de consommation et à vos habitudes.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section legacyNaturalCatalog">
      <div className="shell">
        <div className="legacyCatalogHeader"><span>Les gammes Tardy</span><p>Retrouvez les familles de produits et leurs fiches techniques.</p></div>
        <div className="legacyCategoryGrid">
          {categories.map(category => <a className="legacyCategoryCard" href={category.href} key={category.href}>
            <div className="legacyCategoryCardImage"><img src={category.image} alt={category.alt}/></div>
            <div className="legacyCategoryCardText"><h2>{category.name}</h2><p>{category.note}</p><span>Découvrir la gamme <span aria-hidden="true">↗</span></span></div>
          </a>)}
        </div>
      </div>
    </section>

    <details className="legacyAnatomy shell"><summary>Consulter les schémas anatomiques interactifs <span aria-hidden="true">⌄</span></summary>
      <div className="legacyMapTriptych">
        <div><h2>Porc & truie</h2><AnimalMap kind="porc"/></div>
        <div><h2>Bœuf</h2><AnimalMap kind="boeuf"/></div>
        <div><h2>Mouton</h2><AnimalMap kind="mouton"/></div>
      </div>
    </details>
    <LegacyQuality/>
  </main>;
}
