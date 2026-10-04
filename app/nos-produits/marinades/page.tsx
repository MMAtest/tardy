const m=[
["Thaï citronnelle","ail, citronnelle, coriandre","Sans allergènes","Marinade-Citronnelle_cut.webp"],
["BBQ","tomate, poivre, ail","Sans allergènes","Mariande-BBQ-_cut.webp"],
["Orientale","sésame, carvi, ail","Allergènes : graines de sésame et produits à base de graines de sésame","Marinade-Orientale-_cut.webp"],
["Provençale rouge","thym, romarin, tomate","Sans allergènes","Marinade-Provencale-_cut.webp"],
["Miel agrume","zeste d'orange, curcuma","Sans allergènes","Marinade-Miel-Agrumes_cut.webp"],
["Paprika","paprika, piment fort, ail","Sans allergènes","2548548-Marinade-Paprika.webp"],
["Kebab","oignons, paprika, ail","Sans allergènes","2543165-Marinade-KEBAB.webp"],
["Citron poivre","3% poivre, citron","Sans allergènes","Marinade-Citron-Poivre-_cut.webp"],
["Trois poivres rouge","poivre, coriandre","Sans allergènes","Marinade-Trois-Poivres-Rouges_cut.webp"],
["Romarin abricot","carotte, 2% romarin","Sans allergènes","Marinade-Romarin-Abricot_cut.webp"],
["Citron chili gingembre","piment fort, gingembre, oignons","Sans allergènes","2548447-Marinade-CITRON-CHILI-GINGEMBRE.webp"],
["Provençale olive","poivre, ail, persil","Sans allergènes","Marinade-Provencale-Olive-_cut.webp"],
["Aux cèpes","poivre, piment, carvi","Allergènes : lait et produits à base de lait, y compris lactose","Marinade-Aux-Cepes-_cut.webp"],
["Curry coco","curry, coco, oignons, poivre","Sans allergènes","Marinade-Curry-Coco_cut.webp"],
["Curry indienne","oignons, curcuma, ail","Sans allergènes","Marinade-Curry-Indienne-_cut.webp"],
["Piri-piri","ail, poivre, piment fort","Sans allergènes","2541673-Marinade-Piri-Piri.webp"],
["Maître d’hôtel","ail, persil, oignons","Sans allergènes","Maitre_HOTEL.webp"],
["Oignon figue","poivre, piment, curcuma, figue","Sans allergènes","2541663-Marinade-OIGNON-FIGUE.webp"],
["Ail des ours","poireau, ail, ail des ours","Sans allergènes","Marinade-Ail-des-Ours-_cut.webp"],
["Mangue agrume","gingembre, ail, paprika, agrume","Sans allergènes","Marinade-Mangue-Agrumes-_cut.webp"],
["Citron vert piment","ail, paprika, piment fort, citron","Allergènes : lait et produits à base de lait, y compris lactose","Marinade-Citron-Vert-Piment_cut.webp"],
["Thym citron","zeste de citron, thym","Sans allergènes","Marinade-Thym-Citron-_cut.webp"],
["Échalote","échalote, poivre, paprika","Sans allergènes","Marinade-Echalote-_cut.webp"],
["Tex Mex","oignons, ail, paprika","Sans allergènes","2551893-Marinade-Tex-Mex-NV-2-von-der-Seite.webp"],
["Gyros","oignons, ail, thym, basilic","Sans allergènes","Marinade-Gyros-_cut.webp"],
["Pikante","paprika, poivre","Sans allergènes","Marinade-Pikante_cut.webp"],
["À la truffe","truffe, poivre, piment","Allergènes : lait et produits à base de lait, moutarde et produits à base de moutarde","marinade-3-poivres-rouge.webp"],
["Crème aux girolles","ciboulette, curcuma, girolle","Allergènes : lait et produits à base de lait","marinades.webp"],
["Trois poivres","truffes, poivre, ail, oignons","Sans allergènes","marinade-3-poivres-rouge.webp"]
];
export const metadata={title:"Marinades Epicenou",description:"Marinades Epicenou Tardy : compositions, allergènes et conditionnements professionnels.",alternates:{canonical:"/nos-produits/marinades/"}};
export default function Page(){return <main>
<section className="pageHero"><div className="shell"><div className="breadcrumbs"><a href="/">Accueil</a><span>·</span><a href="/nos-produits/">Nos produits</a><span>·</span><span>Marinades</span></div><div className="pageHeroGrid"><div><div className="eyebrow">Epicenou</div><h1>Marinades</h1></div><p>Testez nos marinades Epicenou et colorez vos vitrines. Fidélisez vos clients par leurs saveurs et la variété des mélanges proposés : marinades d’hiver comme d’été.</p></div></div></section>
<section className="section pale"><div className="shell"><div className="sectionHead"><div><div className="eyebrow">La gamme</div><h2>Survolez pour découvrir chaque recette.</h2></div><p>Nous avons repris la logique du site d’origine : l’image reste au premier plan et les informations techniques apparaissent au survol. Sur mobile, elles restent visibles en permanence.</p></div><div className="marinadeHoverGrid">{m.map(([name,ingredients,allergens,img])=><article className="marinadeHoverCard" key={name} tabIndex={0}><div className="marinadeHoverMedia"><img src={"/assets/marinades/"+img} alt={"Marinade "+name}/><div className="marinadeHoverOverlay"><strong>{name}</strong><p><b>Composition :</b> {ingredients}</p><p>{allergens}</p><p><b>Emballage / Conditionnement :</b> Seau 2,5 kg</p></div></div><div className="marinadeHoverName">{name}</div></article>)}</div>
<div className="marinadeFormats"><div className="marinadeFormat"><b>Doypack 175 mL</b><span>Format complémentaire disponible sur la gamme.</span></div><div className="marinadeFormat"><b>Squeezer 300 mL</b><span>Format complémentaire disponible sur la gamme.</span></div></div></div></section>
<section className="section"><div className="shell"><div className="ctaBand"><h2>Besoin de choisir la bonne marinade ?</h2><div><p>Indiquez votre recette, votre viande ou votre profil aromatique. L’équipe Tardy peut vous orienter vers les références adaptées.</p><a className="btn" href="/contactez-nous/">Demander conseil →</a></div></div></div></section>
</main>}