import "./packaging.css";

export const metadata={title:"Emballages, sacs",description:"Sacs sous vide PA/PE et sacs rétractables pour professionnels.",alternates:{canonical:"/nos-produits/emballages-sacs/"}};
const thicknesses=["90", "140", "170"];
export default function Page(){return <main className="wpRestored packagingPage">
  <section className="packagingIntro shell">
    <div className="packagingIntroCopy">
      <p className="packagingLabel">Conditionnement professionnel</p>
      <h1>Emballages,<br/>sacs sous vide</h1>
      <p>Pour le conditionnement sous vide de votre charcuterie et de vos produits de salaison, la Société Tardy vous propose des sacs PA/PE et des sacs rétractables.</p>
      <a className="packagingLink" href="#nos-sacs">Découvrir nos sacs <span aria-hidden="true">↓</span></a>
    </div>
    <figure><img src="/assets/home-original/hero.jpg" alt="Assortiment de charcuteries artisanales, comme sur la page d’accueil" width="1800" height="1200" fetchPriority="high"/></figure>
  </section>
  <section className="packagingRange shell" id="nos-sacs" aria-labelledby="vacuum-title">
    <div className="packagingRangeHeading"><p className="packagingLabel">01 / Sacs sous vide</p><h2 id="vacuum-title">Une gamme PA/PE,<br/>trois épaisseurs.</h2><p>Retrouvez les références et les dimensions disponibles.</p></div>
    <div className="packagingReferences">
      <div className="packagingTableHead" aria-hidden="true"><span>Épaisseur</span><span>Dimensions disponibles</span></div>
      {thicknesses.map(thickness=><article className="packagingReference" key={thickness}><h3><strong>{thickness}</strong> µ<span>Sac sous vide PA/PE</span></h3><p>De 130 × 250<br/>à 500 × 800</p></article>)}
    </div>
  </section>
  <section className="packagingShrink shell" aria-labelledby="shrink-title">
    <figure><img src="/assets/packaging-butcher.jpg" alt="Préparation et emballage de viande en boucherie" width="795" height="1200" loading="lazy"/><figcaption>Au service des professionnels de la boucherie et de la charcuterie.</figcaption></figure>
    <div><p className="packagingLabel">02 / Sacs rétractables</p><h2 id="shrink-title">Le sac rétractable<br/>60 µ.</h2><dl><div><dt>Épaisseur</dt><dd>60 µ</dd></div><div><dt>Dimensions disponibles</dt><dd>De 130 × 250 à 500 × 800</dd></div></dl><a className="packagingLink" href="/contactez-nous/">Nous contacter <span aria-hidden="true">↗</span></a></div>
  </section>
</main>}
