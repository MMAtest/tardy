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
const mixVisuals:Record<string,{src:string,illustrative?:boolean}>={
"Préparation merguez":{src:"/assets/products/mixs/merguez.webp"},
"Préparation saucisse chipolata":{src:"/assets/editorial-external/sausages-butcher.webp",illustrative:true},
"Préparation Saucisse fraiche":{src:"/assets/editorial-external/sausage-making.webp",illustrative:true},
"Préparation mix chipo aux herbes":{src:"/assets/products/mixs/chipo-herbes.webp"},
"Préparation saucisse aux Cèpes I":{src:"/assets/marinades/Marinade-Aux-Cepes-_cut.webp",illustrative:true},
"Préparation saucisse villageoise":{src:"/assets/products/mixs/villageoise.webp"},
"Mix saucisse au piment d’Espelette":{src:"/assets/products/external/espelette.webp",illustrative:true},
"Mix saucisse antillaise colombo":{src:"/assets/products/mixs/antillaise-colombo.webp"},
"Mix saucisse mexicaine":{src:"/assets/products/mixs/mexicaine.webp"},
"Mix saucisse volaille":{src:"/assets/products/mixs/volaille.webp"},
"Mix saucisse indienne":{src:"/assets/products/mixs/indienne.webp"},
"Mix chorizo à cuire au piment fumé de la Vera":{src:"/assets/products/mixs/chorizo-vera.webp"},
"Epices rôtisserie tbv":{src:"/assets/editorial-external/spices-dark.webp",illustrative:true},
"Assaisonnement farces":{src:"/assets/products/mixs/assaisonnement-farces.webp"},
"Mix chorizo sec au piment fumé de la Vera":{src:"/assets/products/mixs/chorizo-vera.webp",illustrative:true},
"Mix complet saucisson sec":{src:"/assets/editorial-external/cured-sausage.webp",illustrative:true},
"Liant Saucisson sec":{src:"/assets/editorial-external/spices-rustic.webp",illustrative:true}
};
function List({items,start=0}:{items:string[][],start?:number}){return <div className="catalogLines">{items.map(([n,c,a,p],i)=>{const visual=mixVisuals[n];return <article className="catalogLine catalogLineDetailed catalogLineWithMedia" key={n}><span className="catalogLineIndex">{String(start+i+1).padStart(2,"0")}</span><h3>{n}</h3><figure className="catalogInlineMedia"><img src={visual.src} alt={visual.illustrative?`${n}, illustration`:n}/>{visual.illustrative&&<figcaption>Illustration</figcaption>}</figure><div className="catalogLineData"><p>{n} : {c}</p><p>{a}</p><p>Emballage/Conditionnement : {p}</p></div></article>})}</div>}
export const metadata={title:"Les mixs complets",alternates:{canonical:"/les-mixs-complets/"}};
export default function Page(){return <main>
<section className="pageHero"><div className="shell"><div className="breadcrumbs"><a href="/">Accueil</a><span>·</span><a href="/epices-epicenou/">Épices</a><span>·</span><span>Mixs complets</span></div><div className="pageHeroGrid"><div><div className="eyebrow">Epicenou</div><h1>Les mixs complets</h1></div></div></div></section>
<EpicenouBrand compact/>
<section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Préparations à cuire</div><h2 className="technicalSectionTitle">MIXS COMPLETS POUR PREPARATION A CUIRE</h2></div></div><List items={cuire}/></div></section>
<section className="section pale"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Charcuterie sèche</div><h2 className="technicalSectionTitle">MIXS COMPLETS POUR CHARCUTERIE SECHE</h2></div></div><List items={sec} start={cuire.length}/></div></section>
<LegacyQuality/>
</main>}
