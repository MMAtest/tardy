import "./epicenou.css";
/**
 * Wordpress-faithful public spice landing page.
 * The shared quality + standards + newsletter remain in RootLayout.
 */
export const metadata={title:"Épices Epicenou",alternates:{canonical:"/epices-epicenou/"}};
const choices=[
  {image:"/assets/products/epices/colombo.webp",name:"Les mixs complets",href:"/les-mixs-complets/"},
  {image:"/assets/products/epices/piment-doux.webp",name:"Épices naturelles",href:"/epices-naturelles/"},
  {image:"/assets/wp-reference/images-3.jpeg",name:"Les chapelures",href:"/les-chapelures/"}
];
export default function Page(){
 return <main className="wpRestored wpSpicesLanding">
   <section className="wpSpicesIntro" aria-label="Nos épices Epicenou">
     <img className="epicenouBrandLogo" src="/assets/epicenou/epicenou-logo.png" alt="Epicénou" width="648" height="199"/>
     <p>Les Epices sont au cœur de vos préparations et permettent d’amuser nos papilles. Avec cette sélection d’épices de qualités vous pourrez assaisonner et donner un goût inimitable à toutes les préparations que vous allez confectionner et cela pour le bonheur des plus gourmands.</p>
     <nav className="wpSpiceChoices" aria-label="Catégories d'épices">
       {choices.map(item=><a key={item.href} href={item.href}><img src={item.image} alt={item.name} width="420" height="280"/><span>{item.name}</span></a>)}
     </nav>
   </section>
 </main>;
}
