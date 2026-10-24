/**
 * Wordpress-faithful public spice landing page.
 * The shared quality + standards + newsletter remain in RootLayout.
 */
export const metadata={title:"Épices Epicenou",alternates:{canonical:"/epices-epicenou/"}};
const choices=[
  {name:"Les mixs complets",href:"/les-mixs-complets/"},
  {name:"Épices naturelles",href:"/epices-naturelles/"},
  {name:"Les chapelures",href:"/les-chapelures/"}
];
export default function Page(){
 return <main className="wpRestored wpSpicesLanding">
   <section className="wpSpicesIntro" aria-label="Nos épices Epicenou">
     <p>Les Epices sont au cœur de vos préparations et permettent d’amuser nos papilles. Avec cette sélection d’épices de qualités vous pourrez assaisonner et donner un goût inimitable à toutes les préparations que vous allez confectionner et cela pour le bonheur des plus gourmands.</p>
     <nav className="wpSpiceChoices" aria-label="Catégories d'épices">
       {choices.map(item=><a key={item.href} href={item.href}>{item.name}</a>)}
     </nav>
   </section>
 </main>;
}
