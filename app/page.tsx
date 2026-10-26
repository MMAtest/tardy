import "./home-parity.css";

export const metadata = { alternates: { canonical: "/" } };

/**
 * Homepage intentionally follows the published WordPress Tardy homepage.
 * The catalogue, navigation, trust bands and newsletter stay shared and intact.
 */
export default function Home() {
  return (
    <main className="tardyHomeParity">
      <section className="parityHero" aria-labelledby="parityHeroTitle">
        <img className="parityHeroPhoto" src="/assets/home-original/hero.jpg" alt="Assortiment de charcuteries artisanales" fetchPriority="high" />
        <div className="parityHeroVeil" aria-hidden="true" />
        <div className="parityHeroContent">
          <p className="parityEyebrow parityHeroEyebrow">Bienvenue sur notre site</p>
          <h1 id="parityHeroTitle">Spécialiste du boyau naturel depuis 1894</h1>
          <a className="parityHeroButton" href="/nos-produits/">En savoir plus</a>
        </div>
      </section>

      <section className="parityHistory" aria-labelledby="parityHistoryTitle">
        <div className="parityYearImage">
          <img src="/assets/home-original/histoire-source.webp" alt="Planche de charcuteries et de saucissons traditionnels" loading="eager" />
          <div className="parityYearMark" aria-label="Depuis 1894">
            <span>Since</span><strong>1894</strong>
          </div>
        </div>
        <div className="parityHistoryText">
          <p className="parityEyebrow">Histoire</p>
          <h2 id="parityHistoryTitle">La société Tardy</h2>
          <p>La société Tardy, constituée en 1894 a pour vocation de sélectionner, Transformer et commercialiser des boyaux naturels à destination de grossistes, charcutiers et salaisonniers.</p>
          <p>Notre expérience nous a permis d’acquérir un savoir-faire important quant aux choix des boyaux ainsi qu’à leurs préparations et leurs conditionnements pour une qualité optimale.</p>
        </div>
      </section>

      <section className="parityQuality" aria-labelledby="parityQualityTitle">
        <div className="parityPatternImage">
          <img src="/assets/home-original/hygiene.jpg" alt="Saucisses et charcuteries suspendues" loading="lazy" />
        </div>
        <div className="parityQualityText">
          <p className="parityEyebrow">Qualité et hygiène</p>
          <h2 id="parityQualityTitle">La sélection des meilleures provenances</h2>
          <p>L’internationalisation des approvisionnements de boyaux de porc, bœuf et mouton nous a amenés à sélectionner les pays proposant les meilleures matières premières ainsi que les outils de transformation les plus appropriés pour garantir la qualité de nos produits.</p>
          <h2>Des entrepôts frigorifiques adaptés à nos ambitions en matière sanitaire,</h2>
          <p>Nos entrepôts frigorifiques permettent le stockage dans de bonnes conditions des différents produits et notamment des boyaux de mouton.</p>
          <p>Tous nos produits sont répertoriés et portent un numéro de lot qui nous assure leur traçabilité jusqu’à leurs consommations finales.</p>
        </div>
      </section>

      <section className="parityFabrication" aria-labelledby="parityFabricationTitle">
        <div className="parityFabricationBackground" aria-hidden="true" />
        <div className="parityFabricationInner">
          <img className="parityFabricationPhoto" src="/assets/home-original/fabrication.jpg" alt="Contrôle et préparation des boyaux en atelier" loading="lazy" />
          <div className="parityFabricationCard">
            <p className="parityEyebrow">Contrôles et transformations des boyaux:</p>
            <h2 id="parityFabricationTitle">Fabrication des boyaux</h2>
            <p>Dans nos ateliers, nous effectuons les contrôles qualité de tous les produits réceptionnés et destinés à des fabrications différentes. (contrôle du diamètre, de la longueur, de la résistance et de l’état du boyau).</p>
            <p>Des prélèvements effectués sur tous les lots sont soumis aux analyses bactériologiques.</p>
            <p>L’adaptation permanente aux exigences des charcutiers et des salaisonniers est l’une de nos priorités. Ainsi, notre équipe de fabrication peut répondre à tout besoin spécifique.</p>
            <p>Nous proposons une gamme complète de boyaux naturels calibrés dans les présentations classiques.</p>
            <p>En paquets, en filets ainsi que dans des présentations plus élaborées, boyaux montés sur tubes ou plissés.</p>
            <a className="parityFabricationButton" href="/nos-produits/">Nos boyaux naturels</a>
          </div>
        </div>
      </section>
    </main>
  );
}
