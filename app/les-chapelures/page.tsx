/**
 * Traditional Epicenou product copy/gallery matching the Wordpress source.
 * Clean product cutouts remain available within the spice catalogue.
 */
export const metadata={title:"Les chapelures",alternates:{canonical:"/les-chapelures/"}};
const captions=[
  {name:"Chapelure",detail:"Panade de blé (farine de blé, levure, sel)"},
  {name:"Chapelure Jaune",detail:"Panade de blé (farine de blé, levure, sel, épices)"},
  {name:"Chapelure Dorée",detail:"Chapelure : blé, seigle, orge"},
  {name:"Panade Toscane",detail:"carotte, paprika, basilic"},
];
export default function Page(){
 return <main className="wpRestored wpBreadcrumbsPage">
  <section className="wpBreadcrumbsContent">
    <h1 className="wpVisuallyHidden">Les chapelures</h1>
    <p><strong>Emballage/Conditionnement :</strong> Sac de 1 kg</p>
    {captions.map((c,i)=><p key={c.name}><strong>{c.name} :</strong> {c.detail}{i===1&&<> <span className="wpInlinePack">Emballage/Conditionnement : Sac de 1 kg</span></>}</p>)}
    <div className="wpChapelureGallery" aria-label="Photos des chapelures">
     <img src="/assets/wp-reference/images-1.jpeg" alt="Chapelure naturelle dans un récipient" loading="lazy"/>
     <img src="/assets/wp-reference/images-2.jpeg" alt="Panades et chapelures dans un récipient" loading="lazy"/>
     <img src="/assets/wp-reference/images-3.jpeg" alt="Chapelure traditionnelle" loading="lazy"/>
    </div>
  </section>
 </main>;
}
