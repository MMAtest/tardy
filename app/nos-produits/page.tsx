/**
 * Catalogue hierarchy as in the source Wordpress website: centered heading,
 * authentic conditioning photograph, four category links, shared quality band.
 */
export const metadata={title:"Nos produits",alternates:{canonical:"/nos-produits/"}};
const categories=[
  {label:"Boyaux de Porc",href:"/nos-produits/boyaux-de-porc/"},
  {label:"Boyaux de Bœuf",href:"/nos-produits/boyaux-de-boeuf/"},
  {label:"Boyaux de Mouton",href:"/nos-produits/boyaux-de-mouton/"},
  {label:"Boyaux Reconstitués",href:"/nos-produits/boyaux-manufactures/"}
];
export default function Page(){
 return <main className="wpRestored wpNaturalLanding">
  <section className="wpNaturalBody">
   <h1>Nos boyaux naturels :</h1>
   <p>La société Tardy vous propose une gamme complète de boyaux naturels calibrés en paquets et filets mais aussi dans des présentations plus élaborées : boyaux montés sur tubes souples ou rigides.</p>
   <h2>Nous proposons un large type de conditionnement adaptés à vos niveaux de consommation et à vos habitudes.</h2>
   <img className="wpConditioningImage" src="/assets/wp-reference/boyaux-naturels.png" alt="Formats de conditionnement : fûts, seaux et pots" />
   <nav className="wpNaturalLinks" aria-label="Nos gammes de boyaux">
    {categories.map(item=><a href={item.href} key={item.href}>{item.label}</a>)}
   </nav>
  </section>
 </main>;
}
