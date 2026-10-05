import LegacyQuality from "../components/LegacyQuality";
const refs=[["Chapelure","Panade de blé : farine de blé, levure, sel"],["Chapelure jaune","Panade de blé : farine de blé, levure, sel, épices"],["Chapelure dorée","Blé, seigle, orge"],["Panade Toscane","Carotte, paprika, basilic"]];
export const metadata={title:"Les chapelures",alternates:{canonical:"/les-chapelures/"}};
export default function Page(){return <main>
<section className="pageHero"><div className="shell"><div className="breadcrumbs"><a href="/">Accueil</a><span>·</span><a href="/epices-epicenou/">Épices</a><span>·</span><span>Chapelures</span></div><div className="pageHeroGrid"><div><div className="eyebrow">Conditionnement : sac de 1 kg</div><h1>Les chapelures</h1></div></div></div></section>
<section className="section"><div className="shell productDetail"><div className="productMedia"><img src="/assets/chapelure.jpg" alt="Chapelures"/></div><div className="productCopy"><div className="eyebrow">Gamme</div><h2 className="catalogSubheading">Panades & chapelures</h2><div className="technicalTable compactTable">{refs.map(([n,d])=><div className="technicalTableRow" key={n}><strong>{n}</strong><span>{d}</span></div>)}</div><p>Emballage / Conditionnement : sac de 1 kg.</p></div></div></section>
<LegacyQuality/>
</main>}