import EpicenouBrand from "../components/EpicenouBrand";
import LegacyQuality from "../components/LegacyQuality";
const refs=["Persil","Herbes de Provence","Poivre blanc moulu","Poivre concassé","Piment de Cayenne","Paprika","Piment doux","Fenouille moulu","Curry","Cumin en poudre","Colombo","Ail en poudre","Ail en granule","Muscade moulue","Oignons granule","Oignons frits","Oignons en lanières","Échalote en poudre","Gingembre en poudre"];
const spiceChapters=[
{start:0,image:"/assets/poivre-concasse.png",alt:"Poivre concassé",items:refs.slice(0,5)},
{start:5,image:"/assets/epicenou/piment-doux.webp",alt:"Piment doux",items:refs.slice(5,10)},
{start:10,image:"/assets/epicenou/herbes-de-provence.webp",alt:"Herbes de Provence",items:refs.slice(10,15)},
{start:15,image:"/assets/epicenou/ail-en-poudre.webp",alt:"Ail en poudre",items:refs.slice(15)}
];
export const metadata={title:"Épices naturelles",alternates:{canonical:"/epices-naturelles/"}};
export default function Page(){return <main>
<section className="pageHero"><div className="shell"><div className="breadcrumbs"><a href="/">Accueil</a><span>·</span><a href="/epices-epicenou/">Épices</a><span>·</span><span>Naturelles</span></div><div className="pageHeroGrid"><div><h1>Épices naturelles</h1></div><p><strong>Toutes nos épices sont vendues en sacs de 1 kg.</strong></p></div></div></section>
<EpicenouBrand compact/>
<section className="section"><div className="shell"><div className="eyebrow spiceFlowHeading">19 références</div><div className="spiceFlow">{spiceChapters.map((group,gi)=><article className="spiceFlowRow" key={group.start}><figure><img src={group.image} alt={group.alt}/></figure><div className="spiceList">{group.items.map((x,i)=><div className="spiceListItem" key={x}><span>{String(group.start+i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div></article>)}</div></div></section>
<LegacyQuality/>
</main>}