export const metadata={alternates:{canonical:"/"}};

export default function Home(){
  return <main>
    <section className="homeHero">
      <img className="homeHeroImage" src="/assets/home-original/hero.jpg" alt="Charcuteries artisanales utilisant des boyaux naturels"/>
      <div className="homeHeroShade"/>
      <div className="shell homeHeroInner">
        <div className="homeHeroCopy">
          <div className="eyebrow homeHeroEyebrow">Bienvenue sur notre site</div>
          <h1>Spécialiste<br/>du boyau naturel<br/><em>depuis 1894.</em></h1>
          <p>La société Tardy accompagne les professionnels de la charcuterie avec plus d’un siècle de savoir-faire dans la sélection, la transformation et la commercialisation de boyaux naturels.</p>
          <div className="heroActions">
            <a className="btn" href="/nos-produits/">Nos boyaux naturels →</a>
            <a className="btn homeHeroGhost" href="/qui-sommes-nous/">En savoir plus</a>
          </div>
        </div>
        <div className="homeSince" aria-label="Maison Tardy depuis 1894"><small>since</small><strong>1894</strong></div>
      </div>
    </section>

    <section className="section homeHistory">
      <div className="shell">
        <div className="homeHistoryGrid">
          <div className="homeHistoryVisual">
            <img className="historyMain" src="/assets/home-original/histoire.webp" alt="Charcuteries traditionnelles"/>
            <img className="historyInset" src="/assets/home-original/hygiene.jpg" alt="Produits de charcuterie suspendus"/>
            <span className="historyStamp">1894</span>
          </div>
          <div className="homeHistoryCopy">
            <div className="eyebrow">Histoire</div>
            <h2>La société Tardy</h2>
            <p>La société Tardy, constituée en 1894 a pour vocation de sélectionner, transformer et commercialiser des boyaux naturels à destination de grossistes, charcutiers et salaisonniers.</p>
            <p>Notre expérience nous a permis d’acquérir un savoir-faire important quant aux choix des boyaux ainsi qu’à leurs préparations et leurs conditionnements pour une qualité optimale.</p>
            <a className="textLink" href="/qui-sommes-nous/">Découvrir notre histoire →</a>
          </div>
        </div>
      </div>
    </section>

    <section className="section dark homeQuality">
      <div className="shell">
        <div className="homeQualityGrid">
          <div>
            <div className="eyebrow homeDarkEyebrow">Qualité et hygiène</div>
            <h2>La sélection des meilleures provenances</h2>
            <p>L’internationalisation des approvisionnements de boyaux de porc, bœuf et mouton nous a amenés à sélectionner les pays proposant les meilleures matières premières ainsi que les outils de transformation les plus appropriés pour garantir la qualité de nos produits.</p>
          </div>
          <div className="homeQualityMedia">
            <img src="/assets/home-original/fabrication.jpg" alt="Atelier de fabrication et contrôle en environnement alimentaire"/>
          </div>
        </div>

        <div className="homeColdGrid">
          <div className="homeColdTitle">
            <span>01</span>
            <h3>Des entrepôts frigorifiques adaptés à nos ambitions en matière sanitaire</h3>
          </div>
          <div className="homeColdText">
            <p>Nos entrepôts frigorifiques permettent le stockage dans de bonnes conditions des différents produits et notamment des boyaux de mouton.</p>
            <p>Tous nos produits sont répertoriés et portent un numéro de lot qui nous assure leur traçabilité jusqu’à leurs consommations finales.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section homeProduction">
      <div className="shell">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">Contrôles et transformations des boyaux</div>
            <h2>Fabrication des boyaux</h2>
          </div>
          <p>Dans nos ateliers, nous effectuons les contrôles qualité de tous les produits réceptionnés et destinés à des fabrications différentes.</p>
        </div>

        <div className="homeProductionBody">
          <div className="homeProductionText">
            <p>Nous contrôlons le diamètre, la longueur, la résistance et l’état du boyau.</p>
            <p>Des prélèvements effectués sur tous les lots sont soumis aux analyses bactériologiques.</p>
            <p>L’adaptation permanente aux exigences des charcutiers et des salaisonniers est l’une de nos priorités. Ainsi, notre équipe de fabrication peut répondre à tout besoin spécifique.</p>
            <p>Nous proposons une gamme complète de boyaux naturels calibrés dans les présentations classiques : en paquets, en filets ainsi que dans des présentations plus élaborées, boyaux montés sur tubes ou plissés.</p>
            <a className="btn" href="/nos-produits/">Nos boyaux naturels →</a>
          </div>
          <div className="homeProductionFigures">
            <div><span className="qualityIcon" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="13"/><path d="M8 24h32"/><path d="m12 19-5 5 5 5M36 19l5 5-5 5"/></svg></span><span>Contrôle du diamètre</span></div>
            <div><span className="qualityIcon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M7 16h34v16H7z"/><path d="M13 16v8M19 16v5M25 16v8M31 16v5M37 16v8"/><path d="M11 38h26"/><path d="m15 34-4 4 4 4M33 34l4 4-4 4"/></svg></span><span>Contrôle de la longueur</span></div>
            <div><span className="qualityIcon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11L24 5Z"/><path d="m17 24 5 5 10-11"/></svg></span><span>Résistance & état du boyau</span></div>
            <div><span className="qualityIcon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M18 6h12"/><path d="M21 6v12L11 36c-2 4 1 7 5 7h16c4 0 7-3 5-7L27 18V6"/><path d="M16 32h16"/><circle cx="20" cy="36" r="1.5"/><circle cx="27" cy="29" r="1.5"/></svg></span><span>Analyses bactériologiques</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="section pale homeProcess">
      <div className="shell">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">Un processus complet pour la préparation de vos commandes</div>
            <h2>La qualité et l’innovation pour un service client optimal</h2>
          </div>
          <p>De la sélection des matières premières à la livraison, Tardy maîtrise chaque étape pour assurer régularité, sécurité et qualité de service.</p>
        </div>
        <div className="homeProcessGrid">
          <article>
            <span className="processIndex">01</span>
            <h3>Sélection des meilleures provenances</h3>
            <p>Expertise et savoir-faire centenaire.<br/>Sourcing maîtrisé.<br/>Produits standardisés.</p>
          </article>
          <article>
            <span className="processIndex">02</span>
            <h3>Hygiène et sécurité</h3>
            <p>Traçabilité garantie.<br/>Contrôles qualité et analyses bactériologiques.<br/>Food défense.</p>
          </article>
          <article>
            <span className="processIndex">03</span>
            <h3>Service de livraison</h3>
            <p>Livraison dans toute la France de 24h à 48h.<br/>Transport par la STEF.<br/>Transport frigorifique.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="section homeCommitment">
      <div className="shell">
        <div className="homeCommitmentGrid">
          <div>
            <div className="eyebrow">Notre engagement</div>
            <h2>Contribuer aux développements d’une charcuterie de qualité</h2>
          </div>
          <div>
            <p>En apportant le meilleur soin à toute notre gamme de boyaux naturels, nous espérons contribuer activement à la qualité des produits de charcuterie et à la valorisation du terroir.</p>
            <h3>Respect des normes</h3>
            <p>Étant membres de la chambre syndicale de la boyauderie française, de l’ENSCA (European Natural Sausage Casings Association) et de l’INSCA (International Natural Sausage Casing Association), nous nous assurons du respect des normes en permanence.</p>
          </div>
        </div>
        <div className="homePartners">
          <div><img src="/assets/home-original/sbf.png" alt="Chambre syndicale de la boyauderie française"/></div>
          <div><img src="/assets/home-original/ensca.png" alt="ENSCA"/></div>
          <div><img src="/assets/home-original/insca.png" alt="INSCA"/></div>
        </div>
      </div>
    </section>

    <section className="homeNewsletter">
      <img src="/assets/home-original/hero.jpg" alt="" aria-hidden="true"/>
      <div className="homeNewsletterShade"/>
      <div className="shell homeNewsletterInner">
        <div>
          <div className="eyebrow homeHeroEyebrow">Maison Tardy</div>
          <h2>Inscrivez-vous à notre newsletter<br/>pour recevoir nouvelles & promotions</h2>
        </div>
        <a className="btn homeNewsletterButton" href="mailto:commercial@casing-tardy.com?subject=Inscription%20newsletter%20Tardy">Souscrire →</a>
      </div>
    </section>
  </main>
}