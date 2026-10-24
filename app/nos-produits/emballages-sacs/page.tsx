export const metadata={title:"Emballages, sacs",description:"Sacs sous vide PA/PE et sacs rétractables pour professionnels.",alternates:{canonical:"/nos-produits/emballages-sacs/"}};
const refs=[
 ["SAC SOUS VIDE PA/PE 90µ","De la dimension 130 × 250 à 500 × 800"],
 ["SAC SOUS VIDE PA/PE 140µ","De la dimension 130 × 250 à 500 × 800"],
 ["SAC SOUS VIDE PA/PE 170µ","De la dimension 130 × 250 à 500 × 800"],
 ["SAC RÉTRACTABLE 60µ","De la dimension 130 × 250 à 500 × 800"]
];
export default function Page(){return <main className="wpRestored wpPackaging">
 <section className="wpPackagingContent">
  <h1>Emballages, sacs</h1>
  <h2>Nos sacs et emballages :</h2>
  <p>Idéal pour le conditionnement sous vide de votre charcuterie et de vos produits de salaison, la Société Tardy vous propose :</p>
  <div className="wpPackingList">{refs.map(([name,dimensions])=><article key={name}><h3>{name}</h3><p>{dimensions}</p></article>)}</div>
 </section>
</main>}
