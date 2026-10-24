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
"Préparation merguez":{src:"/assets/products/transparent/mixs/merguez.webp"},
"Préparation saucisse chipolata":{src:"/assets/editorial-external/sausages-butcher.webp",illustrative:true},
"Préparation Saucisse fraiche":{src:"/assets/editorial-external/sausage-making.webp",illustrative:true},
"Préparation mix chipo aux herbes":{src:"/assets/products/transparent/mixs/chipo-herbes.webp"},
"Préparation saucisse aux Cèpes I":{src:"/assets/marinades/Marinade-Aux-Cepes-_cut.webp",illustrative:true},
"Préparation saucisse villageoise":{src:"/assets/products/transparent/mixs/villageoise.webp"},
"Mix saucisse au piment d’Espelette":{src:"/assets/products/external/espelette.webp",illustrative:true},
"Mix saucisse antillaise colombo":{src:"/assets/products/transparent/mixs/antillaise-colombo.webp"},
"Mix saucisse mexicaine":{src:"/assets/products/transparent/mixs/mexicaine.webp"},
"Mix saucisse volaille":{src:"/assets/products/transparent/mixs/volaille.webp"},
"Mix saucisse indienne":{src:"/assets/products/transparent/mixs/indienne.webp"},
"Mix chorizo à cuire au piment fumé de la Vera":{src:"/assets/products/transparent/mixs/chorizo-vera.webp"},
"Epices rôtisserie tbv":{src:"/assets/editorial-external/spices-dark.webp",illustrative:true},
"Assaisonnement farces":{src:"/assets/products/transparent/mixs/assaisonnement-farces.webp"},
"Mix chorizo sec au piment fumé de la Vera":{src:"/assets/products/transparent/mixs/chorizo-vera.webp",illustrative:true},
"Mix complet saucisson sec":{src:"/assets/editorial-external/cured-sausage.webp",illustrative:true},
"Liant Saucisson sec":{src:"/assets/editorial-external/spices-rustic.webp",illustrative:true}
};
function List({items}:{items:string[][]}){return <div className="wpProductGallery wpMixGallery">{items.map(([name,composition,allergens,packing],i)=>{
 const visual=mixVisuals[name];
 return <article className="wpGalleryProduct" key={name}>
  <figure><img src={visual.src} loading={i<2?"eager":"lazy"} alt={visual.illustrative?`${name}, illustration`:name}/></figure>
  <h3>{name}</h3>
  <div className="wpGalleryProductCopy"><p>{composition}</p><p>{allergens}</p><p><strong>Emballage/Conditionnement :</strong> {packing}</p></div>
  {visual.illustrative&&<span className="wpIllustrationNote">Illustration</span>}
 </article>})}</div>}
export const metadata={title:"Les mixs complets",alternates:{canonical:"/les-mixs-complets/"}};
export default function Page(){return <main className="wpRestored wpMixProducts">
<section className="wpMixSection">
 <h1>MIXS COMPLETS POUR PREPARATION A CUIRE</h1>
 <List items={cuire}/>
</section>
<section className="wpMixSection">
 <h2>MIXS COMPLETS POUR CHARCUTERIE SECHE</h2>
 <List items={sec}/>
</section>
</main>}
