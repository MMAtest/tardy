export const metadata={title:"Emballages & sacs",description:"Sacs sous vide PA/PE et sacs rétractables Tardy pour les professionnels.",alternates:{canonical:"/nos-produits/emballages-sacs/"}};
const refs=[
["SAC SOUS VIDE PA/PE 90µ","130 × 250 à 500 × 800","Sous vide","Pour le conditionnement de charcuterie et produits de salaison."],
["SAC SOUS VIDE PA/PE 140µ","130 × 250 à 500 × 800","Sous vide renforcé","Épaisseur supérieure pour les besoins nécessitant davantage de résistance."],
["SAC SOUS VIDE PA/PE 170µ","130 × 250 à 500 × 800","Sous vide haute résistance","Pour les usages professionnels exigeant une protection renforcée."],
["SAC RÉTRACTABLE 60µ","130 × 250 à 500 × 800","Rétractable","Une solution de présentation et de conservation complémentaire."]
];
export default function Page(){return <main>
<section className="pageHero"><div className="shell"><div className="breadcrumbs"><a href="/">Accueil</a><span>·</span><a href="/nos-produits/">Nos produits</a><span>·</span><span>Emballages</span></div><div className="pageHeroGrid"><div><div className="eyebrow">Conditionnement professionnel</div><h1>Nos sacs & emballages</h1></div><p>Idéal pour le conditionnement sous vide de votre charcuterie et de vos produits de salaison, la Société Tardy vous propose plusieurs épaisseurs et formats.</p></div></div></section>

<section className="section"><div className="shell"><div className="productDetail">
<div className="packHeroVisual"><img src="/assets/emballage-vacuum.jpg" alt="Illustration de conditionnement sous vide en charcuterie"/></div>
<div className="productCopy"><div className="eyebrow">Livrables sous 48 heures</div><h1 style={{fontSize:"58px"}}>Une gamme simple à lire, adaptée aux contraintes d’atelier.</h1><p>Le contenu technique d’origine est conservé : épaisseurs, familles de sacs et dimensions disponibles. La présentation a simplement été refondue pour rendre le choix plus immédiat.</p><div className="packFacts"><div><b>90 à 170µ</b><span>Trois épaisseurs PA/PE</span></div><div><b>60µ</b><span>Une référence rétractable</span></div><div><b>48 h</b><span>Délai annoncé sur le site d’origine</span></div></div></div>
</div></div></section>

<section className="section pale"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Les références</div><h2>Quatre familles,<br/>une même logique.</h2></div><p>Retrouvez les principales épaisseurs et dimensions disponibles pour le conditionnement professionnel.</p></div><div className="packGrid">{refs.map(([name,size,type,desc])=><article className="packCard" key={name}><div><small>{type}</small><h3>{name}</h3><p className="muted">{desc}</p></div><div><span className="packSize">{size}</span><p className="muted">Dimensions disponibles selon référence.</p></div></article>)}</div></div></section>

<section className="section dark"><div className="shell homeQualityGrid"><div><div className="eyebrow homeDarkEyebrow">Illustration métier</div><h2 style={{fontFamily:"Baskerville,Georgia,serif",fontSize:"clamp(46px,5vw,72px)",fontWeight:400,lineHeight:.95}}>Pensé pour la conservation, la présentation et la manutention.</h2><p>Des solutions pensées pour protéger les produits, faciliter leur manutention et valoriser leur présentation.</p></div><div className="homeQualityMedia"><img src="/assets/home-original/fabrication.jpg" alt="Illustration d’un environnement professionnel de préparation alimentaire"/></div></div></section>

<section className="section"><div className="shell"><div className="ctaBand"><h2>Besoin d’un format précis ?</h2><div><p>Indiquez les dimensions, l’épaisseur et le type de produit à conditionner. L’équipe Tardy pourra vous orienter vers la référence adaptée.</p><a className="btn" href="/contactez-nous/">Demander un format →</a></div></div></div></section>
</main>}