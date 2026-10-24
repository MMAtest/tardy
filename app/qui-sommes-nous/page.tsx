/**
 * Source-ordered history page: masthead, two archival photos, presentation,
 * logo and the three expertise commitments.
 */
export const metadata={title:"Qui sommes-nous ?",alternates:{canonical:"/qui-sommes-nous/"}};
export default function Page(){
 return <main className="wpRestored wpCompany">
   <section className="wpCompanyIntro">
     <h1>Société Tardy</h1>
     <p>Spécialiste du boyau naturel depuis 1894</p>
     <div className="wpCompanyPhotos">
       <img src="/assets/Downloader.la-621786f021532.jpg" alt="Charcuteries et boyaux naturels" loading="eager"/>
       <img src="/assets/wp-reference/Downloader.la-621786469ecff.jpg" alt="Installation de production et de conditionnement" loading="lazy"/>
     </div>
   </section>
   <section className="wpCompanyHistory">
     <h2>Présentation</h2>
     <p>La société Tardy, constituée en 1894, a pour vocation de sélectionner, transformer et commercialiser des boyaux naturels à destination de grossistes, charcutiers et salaisonniers.</p>
     <p>Notre expérience nous a permis d’acquérir un savoir-faire important quant au choix des boyaux ainsi qu’à leurs préparations et leurs conditionnements pour une qualité optimale.</p>
     <p>L’internationalisation des approvisionnements de boyaux de porc, bœuf et mouton nous a amenés à sélectionner les pays proposant les meilleures matières premières ainsi que les outils de transformation les plus appropriés pour garantir la qualité de nos produits.</p>
     <img src="/assets/wp-reference/logoPlan-de-travail-1.png" alt="Le savoir-faire Casing Tardy" loading="lazy"/>
   </section>
   <section className="wpCompanyPromises" aria-label="Nos engagements">
    <article><h3>Meilleures provenances</h3><p>Une sélection rigoureuse des matières premières et des produits standardisés.</p></article>
    <article><h3>Service de Livraison</h3><p>Livraison dans toute la France de 24h à 48h et transport frigorifique.</p></article>
    <article><h3>Traçabilité garantie</h3><p>Des contrôles qualité et des analyses bactériologiques régulières.</p></article>
   </section>
   <section className="wpCompanyHelp"><h2>À votre service depuis 1894</h2><p>Nous sommes à votre disposition pour répondre à vos besoins en boyaux naturels.</p><a href="/contactez-nous/">Contactez-nous</a></section>
 </main>;
}
