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
export default function Page(){return <main className="wpRestored wpSpiceProducts">
<section className="wpSpiceCatalog">
 <h1 className="wpVisuallyHidden">Épices naturelles</h1>
 <h2 className="wpSpiceNotice">Toutes nos épices sont vendues en sacs de 1 kg</h2>
 <div className="wpProductGallery wpSpiceGallery">
 {spices.map(([name,image,illustrative],i)=><article className="wpGalleryProduct" key={name}>
    <figure><img src={image} loading={i<2?"eager":"lazy"} alt={illustrative?`${name}, illustration`:name}/></figure>
    <h3>{name}</h3>{illustrative&&<span className="wpIllustrationNote">Illustration</span>}
 </article>)}
 </div>
</section>
</main>}
