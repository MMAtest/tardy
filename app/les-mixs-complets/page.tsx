import EpicenouBrand from "../components/EpicenouBrand";
import LegacyQuality from "../components/LegacyQuality";
const cuire=[
["Préparation merguez","paprika, piment fort, coriandre","Sans allergènes","Seau 10 kg"],
["Préparation saucisse chipolata","poivre","Sans allergènes","Seau 10 kg"],
["Préparation Saucisse fraiche","sel rose","Sans allergènes","Seau 5 kg"],
["Préparation mix chipo aux herbes","persil, ail, muscade","Sans allergènes","Seau 4 kg"],
["Préparation saucisse aux Cèpes I","Cèpe 20%, poivre","Sans allergènes","Seau 5 kg"],
["Préparation saucisse villageoise","oignons, persil, ciboulette","Allergènes : Lait et produits à base de lait (y compris le lactose)","Seau 4 kg"],
["Mix saucisse au piment d’Espelette","piment d’Espelette, muscade, coriandre","Sans allergènes","Seau 5 kg"],
["Mix saucisse antillaise colombo","coriandre, moutarde, paprika, poivre, curcuma, piment fort, ciboulette, ail","Allergène : Moutarde et produits à base de moutarde","Seau 5kg"],
["Mix saucisse mexicaine","oignons, tomate, poivre","Sans allergènes","Seau 5 kg"],
["Mix saucisse volaille","panais, romarin, thym","Sans allergènes","Seau 5 kg"],
["Mix saucisse indienne","poivre, paprika, coriandre","Sans allergènes","Seau 5 kg"],
["Mix chorizo à cuire au piment fumé de la Vera","24% piment fumé de la Vera, paprika, ail","Sans allergènes","Seau 5 kg"],
["Epices rôtisserie tbv","oignons, paprika, romarin","Sans allergènes","Seau 5 kg"],
["Assaisonnement farces","persil, oignons, poireau","Allergènes : Céréales contenant du gluten, moutarde et produits à base de moutarde","Seau 5 kg"]
];
const sec=[
["Mix chorizo sec au piment fumé de la Vera","20% piment fumé de la Vera, paprika, ail","Sans allergènes","Seau 5 kg"],
["Mix complet saucisson sec","Poivre","Sans allergènes","Seau 5 kg"],
["Liant Saucisson sec","Pour une bonne acidification, ainsi qu’une couleur et un gout excellent.","Sans allergènes","Seau 5 kg"]
];
const mixVisuals:Record<string,string>={
"Préparation mix chipo aux herbes":"/assets/chipolata-herbes.jpg",
"Préparation saucisse villageoise":"/assets/saucisse-villageoise.jpg",
"Mix saucisse mexicaine":"/assets/mix-mexicaine.jpg",
"Mix saucisse volaille":"/assets/mix-volaille.jpg"
};
function List({items}:{items:string[][]}){return <div className="catalogLines">{items.map(([n,c,a,p],i)=>{const image=mixVisuals[n];return <article className={`catalogLine catalogLineDetailed ${image?"catalogLineWithMedia":""}`} key={n}><span className="catalogLineIndex">{String(i+1).padStart(2,"0")}</span><h3>{n}</h3>{image&&<figure className="catalogInlineMedia"><img src={image} alt={n}/></figure>}<div className="catalogLineData"><p>{n} : {c}</p><p>{a}</p><p>Emballage/Conditionnement : {p}</p></div></article>})}</div>}
export const metadata={title:"Les mixs complets",alternates:{canonical:"/les-mixs-complets/"}};
export default function Page(){return <main>
<section className="pageHero"><div className="shell"><div className="breadcrumbs"><a href="/">Accueil</a><span>·</span><a href="/epices-epicenou/">Épices</a><span>·</span><span>Mixs complets</span></div><div className="pageHeroGrid"><div><div className="eyebrow">Epicenou</div><h1>Les mixs complets</h1></div></div></div></section>
<EpicenouBrand compact/>
<section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Préparations à cuire</div><h2 className="technicalSectionTitle">MIXS COMPLETS POUR PREPARATION A CUIRE</h2></div></div><List items={cuire}/></div></section>
<section className="section pale"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Charcuterie sèche</div><h2 className="technicalSectionTitle">MIXS COMPLETS POUR CHARCUTERIE SECHE</h2></div></div><List items={sec}/></div></section>
<LegacyQuality/>
</main>}