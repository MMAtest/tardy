import EpicenouBrand from "../components/EpicenouBrand";
import LegacyQuality from "../components/LegacyQuality";
const refs=[
["Chapelure","Panade de blé : farine de blé, levure, sel","/assets/products/chapelures/chapelure.webp",false],
["Chapelure jaune","Panade de blé : farine de blé, levure, sel, épices","/assets/products/external/breadcrumbs.webp",true],
["Chapelure dorée","Blé, seigle, orge","/assets/products/chapelures/chapelure-doree.webp",false],
["Panade Toscane","Carotte, paprika, basilic","/assets/schnitzel-g9b1dff796_1920.jpg",true]
] as const;
export const metadata={title:"Les chapelures",alternates:{canonical:"/les-chapelures/"}};
export default function Page(){return <main>
<section className="pageHero"><div className="shell"><div className="breadcrumbs"><a href="/">Accueil</a><span>·</span><a href="/epices-epicenou/">Épices</a><span>·</span><span>Chapelures</span></div><div className="pageHeroGrid"><div><div className="eyebrow">Conditionnement : sac de 1 kg</div><h1>Les chapelures</h1></div></div></div></section>
<EpicenouBrand compact/>
<section className="section"><div className="shell chapelureProductIndex">{refs.map(([name,desc,image,illustrative],i)=><article className="chapelureProductRow" key={name}><span>{String(i+1).padStart(2,"0")}</span><figure><img src={image} alt={illustrative?`${name}, illustration`:name}/>{illustrative&&<figcaption>Illustration d’usage</figcaption>}</figure><div><h2>{name}</h2><p>{desc}</p><small>Emballage / Conditionnement : sac de 1 kg.</small></div></article>)}</div></section>
<LegacyQuality/>
</main>}
