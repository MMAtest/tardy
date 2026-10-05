import LegacyQuality from "../../components/LegacyQuality";
export const metadata={title:"Emballages, sacs",description:"Sacs sous vide PA/PE et sacs rétractables Tardy pour les professionnels.",alternates:{canonical:"/nos-produits/emballages-sacs/"}};
const refs=[
["SAC SOUS VIDE PA/PE 90µ","De la dimension 130 x 250 à 500 x 800"],
["SAC SOUS VIDE PA/PE 140µ","De la dimension 130 x 250 à 500 x 800"],
["SAC SOUS VIDE PA/PE 170µ","De la dimension 130 x 250 à 500 x 800"],
["SAC RÉTRACTABLE 60µ","De la dimension 130 x 250 à 500 x 800"]
];
export default function Page(){return <main>
<section className="pageHero"><div className="shell"><div className="breadcrumbs"><a href="/">Accueil</a><span>·</span><a href="/nos-produits/">Nos produits</a><span>·</span><span>Emballages</span></div><div className="pageHeroGrid"><div><div className="eyebrow">Emballages, sacs</div><h1>Nos sacs et emballages</h1></div><p>Idéal pour le conditionnement sous vide de votre charcuterie et de vos produits de salaison, la Société Tardy vous propose :</p></div></div></section>
<section className="section"><div className="shell packagingEditorial"><div className="packHeroVisual"><img src="/assets/packaging-vacuum.jpg" alt="Conditionnement sous vide en charcuterie"/></div><div className="packagingIntro"><div className="eyebrow">Livrables sous 48 heures</div><h2>Emballages, sacs</h2><p>Faites nous part de votre demande via notre formulaire ou contactez-nous directement pour plus d’informations sur nos produits.</p><a className="btn" href="/contactez-nous/">Contactez-nous →</a></div></div></section>
<section className="section pale"><div className="shell"><div className="technicalTable"><div className="technicalTableHead"><span>Référence</span><span>Dimensions</span></div>{refs.map(([name,size])=><div className="technicalTableRow" key={name}><strong>{name}</strong><span>{size}</span></div>)}</div></div></section>
<section className="section dark"><div className="shell homeQualityGrid"><div><div className="eyebrow homeDarkEyebrow">Conditionnement</div><h2 className="darkEditorialTitle">Livrables sous 48 heures</h2></div><div className="homeQualityMedia"><img src="/assets/packaging-butcher.jpg" alt="Préparation et emballage de viande en environnement professionnel"/></div></div></section>
<LegacyQuality/>
</main>}