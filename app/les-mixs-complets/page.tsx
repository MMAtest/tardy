import LegacyQuality from "../components/LegacyQuality";
const cuire=[
["Préparation merguez","Paprika, piment fort, coriandre · Sans allergènes · Seau 10 kg"],
["Préparation saucisse chipolata","Poivre · Sans allergènes · Seau 10 kg"],
["Préparation saucisse fraîche","Sel rose · Sans allergènes · Seau 5 kg"],
["Mix chipo aux herbes","Persil, ail, muscade · Sans allergènes · Seau 4 kg"],
["Saucisse aux Cèpes I","Cèpe 20%, poivre · Sans allergènes · Seau 5 kg"],
["Saucisse villageoise","Oignons, persil, ciboulette · Allergènes : lait et produits à base de lait, y compris lactose · Seau 4 kg"],
["Saucisse au piment d’Espelette","Piment d’Espelette, muscade, coriandre · Sans allergènes · Seau 5 kg"],
["Saucisse antillaise colombo","Coriandre, moutarde, paprika, poivre, curcuma, piment fort, ciboulette, ail · Allergène : moutarde · Seau 5 kg"],
["Saucisse mexicaine","Oignons, tomate, poivre · Sans allergènes · Seau 5 kg"],
["Saucisse volaille","Panais, romarin, thym · Sans allergènes · Seau 5 kg"],
["Saucisse indienne","Poivre, paprika, coriandre · Sans allergènes · Seau 5 kg"],
["Chorizo à cuire au piment fumé de la Vera","24% piment fumé de la Vera, paprika, ail · Sans allergènes · Seau 5 kg"],
["Épices rôtisserie TBV","Oignons, paprika, romarin · Sans allergènes · Seau 5 kg"],
["Assaisonnement farces","Persil, oignons, poireau · Allergènes : céréales contenant du gluten, moutarde et produits à base de moutarde · Seau 5 kg"],
];
const sec=[["Chorizo sec au piment fumé de la Vera","20% piment fumé de la Vera, paprika, ail · Sans allergènes · Seau 5 kg"],["Mix complet saucisson sec","Poivre · Sans allergènes · Seau 5 kg"],["Liant saucisson sec","Pour une bonne acidification ainsi qu’une couleur et un goût excellents · Sans allergènes · Seau 5 kg"]];
export const metadata={title:"Les mixs complets",alternates:{canonical:"/les-mixs-complets/"}};export default function Page(){return <main><section className="pageHero"><div className="shell"><div className="breadcrumbs"><a href="/">Accueil</a><span>·</span><a href="/epices/">Épices</a><span>·</span><span>Mixs complets</span></div><div className="pageHeroGrid"><div><div className="eyebrow">Epicenou</div><h1>Mixs complets</h1></div><p>Les formulations et conditionnements ci-dessous reprennent les informations du catalogue client d’origine.</p></div></div></section><section className="section"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Préparations à cuire</div><h2>Mixs complets pour préparation à cuire</h2></div></div><div className="refGrid">{cuire.map(([n,d])=><div className="refCard" key={n}><small>Préparation</small><h3>{n}</h3><p>{d}</p></div>)}</div></div></section><section className="section pale"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">Charcuterie sèche</div><h2>Mixs complets pour charcuterie sèche</h2></div></div><div className="refGrid">{sec.map(([n,d])=><div className="refCard" key={n}><small>Préparation</small><h3>{n}</h3><p>{d}</p></div>)}</div></div></section><LegacyQuality/></main>}
