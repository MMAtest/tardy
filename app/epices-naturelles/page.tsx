import EpicenouBrand from "../components/EpicenouBrand";
import LegacyQuality from "../components/LegacyQuality";
const spices=[
["Persil","/assets/products/epices/persil.webp",false],
["Herbes de Provence","/assets/products/epices/herbes-de-provence.webp",false],
["Poivre blanc moulu","/assets/products/epices/poivre-blanc-moulu.webp",false],
["Poivre concassé","/assets/products/epices/poivre-concasse.webp",false],
["Piment de Cayenne","/assets/products/external/cayenne.webp",true],
["Paprika","/assets/products/epices/paprika.webp",false],
["Piment doux","/assets/products/epices/piment-doux.webp",false],
["Fenouille moulu","/assets/products/epices/fenouil-moulu.webp",false],
["Curry","/assets/products/external/curry.webp",true],
["Cumin en poudre","/assets/products/epices/cumin-en-poudre.webp",false],
["Colombo","/assets/products/epices/colombo.webp",false],
["Ail en poudre","/assets/products/epices/ail-en-poudre.webp",false],
["Ail en granule","/assets/products/epices/ail-en-granule.webp",false],
["Muscade moulue","/assets/products/external/nutmeg.webp",true],
["Oignons granule","/assets/products/epices/oignons-granule.webp",false],
["Oignons frits","/assets/products/epices/oignons-frits.webp",false],
["Oignons en lanières","/assets/products/epices/oignons-lanieres.webp",false],
["Échalote en poudre","/assets/products/epices/echalote-en-poudre.webp",false],
["Gingembre en poudre","/assets/products/epices/gingembre-en-poudre.webp",false]
] as const;
export const metadata={title:"Épices naturelles",alternates:{canonical:"/epices-naturelles/"}};
export default function Page(){return <main>
<section className="pageHero"><div className="shell"><div className="breadcrumbs"><a href="/">Accueil</a><span>·</span><a href="/epices-epicenou/">Épices</a><span>·</span><span>Naturelles</span></div><div className="pageHeroGrid"><div><h1>Épices naturelles</h1></div><p><strong>Toutes nos épices sont vendues en sacs de 1 kg.</strong></p></div></div></section>
<EpicenouBrand compact/>
<section className="section"><div className="shell"><div className="eyebrow spiceProductHeading">19 références</div><div className="spiceProductIndex">{spices.map(([name,image,illustrative],i)=><article className="spiceProductRow" key={name}><span className="spiceProductNumber">{String(i+1).padStart(2,"0")}</span><figure><img src={image} alt={illustrative?`${name}, illustration`:name}/>{illustrative&&<figcaption>Illustration libre</figcaption>}</figure><h2>{name}</h2></article>)}</div></div></section>
<LegacyQuality/>
</main>}
