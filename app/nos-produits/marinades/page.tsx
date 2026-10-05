const m=[
["Marinade thaï citronnelle","ail, citronnelle, coriandre","Sans allergènes","Marinade-Citronnelle_cut.webp","Seau 2,5 kg"],
["Marinade BBQ","tomate, poivre, ail","Sans allergènes","Mariande-BBQ-_cut.webp","Seau 2,5 kg"],
["Marinade orientale","sésame, carvi, ail","Allergènes : Graines de sésame et produits à base de graines de sésame","Marinade-Orientale-_cut.webp","Seau 2,5 kg"],
["Marinade provençale rouge","thym, romarin, tomate","Sans allergènes","Marinade-Provencale-_cut.webp","Seau 2,5 kg"],
["Marinade miel agrume","zeste d’orange, curcuma","Sans allergènes","Marinade-Miel-Agrumes_cut.webp","Seau 2,5"],
["Marinade paprika","paprika, piment fort, ail","Sans allergènes","2548548-Marinade-Paprika.webp","Seau 2,5 kg"],
["Marinade kebab","oignons, paprika, ail","Sans allergènes","2543165-Marinade-KEBAB.webp","Seau 2,5 kg"],
["Marinade citron poivre","3% poivre, citron","Sans allergènes","Marinade-Citron-Poivre-_cut.webp","Seau 2,5"],
["Marinade trois poivres rouge","poivre, coriandre","Sans allergènes","Marinade-Trois-Poivres-Rouges_cut.webp","Seau 2,5 kg"],
["Marinade romarin abricot","carotte, 2% romarin","Sans allergènes","Marinade-Romarin-Abricot_cut.webp","Seau 2,5"],
["Marinade citron chili gingembre","piment fort, gingembre, oignons","Sans allergènes","2548447-Marinade-CITRON-CHILI-GINGEMBRE.webp","Seau 2,5 kg"],
["Marinade provençale olive","poivre, ail, persil","Sans allergènes","Marinade-Provencale-Olive-_cut.webp","Seau 2,5 kg"],
["Marinade aux cèpes","poivre, piment, carvi","Allergènes : Lait et produits à base de lait (y compris le lactose)","Marinade-Aux-Cepes-_cut.webp","Seau 2,5 kg"],
["Marinade curry coco","curry, coco, oignons, poivre","Sans allergènes","Marinade-Curry-Coco_cut.webp","Seau 2,5 kg"],
["Marinade curry indienne","oignons, curcuma, ail","Sans allergènes","Marinade-Curry-Indienne-_cut.webp","Seau 2,5"],
["Marinade piri-piri","ail, poivre, piment fort","Sans allergènes","2541673-Marinade-Piri-Piri.webp","Seau 2,5"],
["Marinade maître d’hôtel","ail, persil, oignons","Sans allergènes","Maitre_HOTEL.webp","Seau 2,5"],
["Marinade oignon figue","poivre, piment, curcuma, figue","Sans allergènes","2541663-Marinade-OIGNON-FIGUE.webp","Seau 2,5 kg"],
["Marinade ail des ours","poireau, ail, ail des ours","Sans allergènes","Marinade-Ail-des-Ours-_cut.webp","Seau 2,5 kg"],
["Marinade mangue agrume","gingembre, ail, paprika, agrume","Sans allergènes","Marinade-Mangue-Agrumes-_cut.webp","Seau 2,5 kg"],
["Marinade citron vert piment","ail, paprika, piment fort, citron","Allergènes : Lait et produits à base de lait (y compris le Lactose)","Marinade-Citron-Vert-Piment_cut.webp","Seau 2,5 kg"],
["Marinade thym citron","zeste de citron, thym","Sans allergènes","Marinade-Thym-Citron-_cut.webp","Seau 2,5 kg"],
["Marinade échalote","échalote, poivre, paprika","Sans allergènes","Marinade-Echalote-_cut.webp","Seau 2,5 kg"],
["Marinade Tex Mex","oignons, ail, paprika","Sans allergènes","2551893-Marinade-Tex-Mex-NV-2-von-der-Seite.webp","Seau 2,5"],
["Marinade gyros","oignons, ail, thym, basilic","Sans allergènes","Marinade-Gyros-_cut.webp","Seau 2,5"],
["Marinade pikante","paprika, poivre","Sans allergènes","Marinade-Pikante_cut.webp","Seau 2,5"],
["Marinade à la truffe","truffe, poivre, piment","Allergènes : Lait et produits à base de lait, Moutarde et produits à base de moutarde","marinade-3-poivres-rouge.webp","Seau 2,5"],
["Marinade crème aux girolles","ciboulette, curcuma, girolle","Allergènes : Lait et produits à base de lait","marinades.webp","Seau 2,5"],
["3 Poivres","Truffes, poivre, ail, oignons","Sans allergènes","marinade-3-poivres-rouge.webp","Seau 2,5"]
];
export const metadata={title:"Marinades Epicenou",description:"Marinades Epicenou Tardy : compositions, allergènes et conditionnements professionnels.",alternates:{canonical:"/nos-produits/marinades/"}};
export default function Page(){return <main>
<section className="pageHero"><div className="shell"><div className="breadcrumbs"><a href="/">Accueil</a><span>·</span><a href="/nos-produits/">Nos produits</a><span>·</span><span>Marinades</span></div><div className="pageHeroGrid"><div><div className="eyebrow">Epicenou</div><h1>Marinades</h1></div><p>Tester nos marinades Epicenou et colorées vos vitrines. Fidéliser vos clients par leurs saveurs et la variété des mélanges proposés : Marinades d’hiver comme d’été</p></div></div></section>
<section className="section pale"><div className="shell"><div className="marinadeHoverGrid">{m.map(([name,ingredients,allergens,img,pack])=><article className="marinadeHoverCard" key={name} tabIndex={0}><div className="marinadeHoverMedia"><img src={"/assets/marinades/"+img} alt={name}/><div className="marinadeHoverOverlay"><p>{ingredients}</p><p>{allergens}</p><p>Emballage/Conditionnement : {pack}</p></div></div><div className="marinadeHoverName">{name}</div></article>)}</div><div className="marinadeFormats"><div className="marinadeFormat"><b>Doypack 175 mL</b></div><div className="marinadeFormat"><b>Squeezer 300 mL</b></div></div><p className="marinadeFootnote">Nos marinades sont aussi disponibles en doypack 175 mL et squeezer 300 mL</p></div></section>
</main>}