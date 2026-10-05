import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://casing-tardy.com"),
  title: { default: "Casing Tardy — Boyaux, épices, marinades & emballages", template: "%s | Casing Tardy" },
  description: "Depuis 1894, Casing Tardy accompagne les professionnels de la charcuterie avec des boyaux naturels, épices, marinades et solutions de conditionnement.",
  openGraph: { type:"website", locale:"fr_FR", siteName:"Casing Tardy", title:"Casing Tardy — L'expertise charcutière depuis 1894", description:"Boyaux naturels, épices, marinades et emballages pour les professionnels." },
  robots: { index:true, follow:true },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  const jsonLd={"@context":"https://schema.org","@type":"Organization","name":"Casing Tardy","url":"https://casing-tardy.com","foundingDate":"1894","telephone":"+33 4 91 08 10 59","email":"commercial@casing-tardy.com","address":{"@type":"PostalAddress","streetAddress":"27 traverse Antoine Donaz","postalCode":"13015","addressLocality":"Marseille","addressCountry":"FR"},"areaServed":"FR","description":"Fournisseur professionnel de boyaux naturels, épices, marinades et emballages pour la charcuterie."};
  return <html lang="fr"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><Topbar/><Header/>{children}<Footer/></body></html>
}
function Topbar(){return <div className="topbar"><div className="shell"><span>Maison fondée en 1894 · Marseille</span><a href="tel:+33491081059">+33 4 91 08 10 59</a></div></div>}
function Header(){return <header className="siteHeader"><div className="shell headerInner">
  <a className="logo" href="/" aria-label="Casing Tardy - Accueil"><img src="/assets/logo-tardy.png" alt="Tardy Boyaux Casings"/></a>
  <nav className="desktopNav" aria-label="Navigation principale">
    <div className="megaWrap"><a className="navTrigger" href="/nos-produits/">Boyaux naturels <span>⌄</span></a><div className="mega megaProducts megaBoyaux">
      <div className="megaColumn"><a className="megaHeading" href="/nos-produits/boyaux-de-porc/">Porc & truie</a><a href="/nos-produits/boyaux-de-porc/menu-de-porc/">Menu de porc</a><a href="/nos-produits/boyaux-de-porc/menu-de-truie/">Menu de truie</a><a href="/nos-produits/boyaux-de-porc/chaudin-de-porc/">Chaudin de porc</a><a href="/nos-produits/boyaux-de-porc/sacs-de-porc/">Sacs de porc</a><a href="/nos-produits/boyaux-de-porc/suivant-de-porc/">Suivant de porc</a></div>
      <div className="megaColumn"><a className="megaHeading" href="/nos-produits/boyaux-de-mouton/">Mouton</a><a href="/nos-produits/boyaux-de-mouton/menu-de-mouton/">Menus de mouton</a><a className="megaHeading second" href="/nos-produits/boyaux-manufactures/">Boyaux manufacturés</a></div>
      <div className="megaColumn"><a className="megaHeading" href="/nos-produits/boyaux-de-boeuf/">Bœuf</a><a href="/nos-produits/boyaux-de-boeuf/menu-de-boeuf/">Menu de bœuf</a><a href="/nos-produits/boyaux-de-boeuf/gros-de-boeuf/">Gros de bœuf</a><a href="/nos-produits/boyaux-de-boeuf/baudruche-de-boeuf/">Baudruche de bœuf</a><a href="/nos-produits/">Tous les boyaux →</a></div>
    </div></div>
    <div className="megaWrap"><a className="navTrigger" href="/epices-epicenou/">Épices <span>⌄</span></a><div className="mega">
      <a href="/les-mixs-complets/"><b>Les mixs complets</b><span>Préparations à cuire et charcuterie sèche</span></a>
      <a href="/epices-naturelles/"><b>Épices naturelles</b><span>Épices en sacs de 1 kg</span></a>
      <a href="/les-chapelures/"><b>Les chapelures</b><span>Panades et chapelures</span></a>
    </div></div>
    <a href="/nos-produits/marinades/">Marinades</a>
    <a href="/nos-produits/emballages-sacs/">Emballages</a>
    <a href="/qui-sommes-nous/">Qui sommes-nous ?</a>
  </nav>
  <div className="headerActions"><a className="headerCta" href="/contactez-nous/">Contact ↗</a><details className="mobileMenu"><summary>Menu</summary><div className="mobilePanel">
    <details><summary>Boyaux naturels</summary><a href="/nos-produits/">Tous les boyaux</a><a href="/nos-produits/boyaux-de-porc/">Boyaux de porc</a><a href="/nos-produits/boyaux-de-mouton/">Boyaux de mouton</a><a href="/nos-produits/boyaux-de-boeuf/">Boyaux de bœuf</a><a href="/nos-produits/boyaux-manufactures/">Boyaux manufacturés</a></details>
    <details><summary>Épices</summary><a href="/epices-epicenou/">Épices</a><a href="/les-mixs-complets/">Les mixs complets</a><a href="/epices-naturelles/">Épices naturelles</a><a href="/les-chapelures/">Les chapelures</a></details>
    <a href="/nos-produits/marinades/">Marinades</a><a href="/nos-produits/emballages-sacs/">Emballages</a><a href="/qui-sommes-nous/">Qui sommes-nous ?</a><a href="/contactez-nous/">Contact</a>
  </div></details></div>
</div></header>}
function Footer(){return <footer className="siteFooter"><div className="shell">
  <div className="footerGrid footerGridFinal">
    <div><a className="footerLogo" href="/" aria-label="Casing Tardy - Accueil"><img src="/assets/logo-tardy.png" alt="Tardy"/></a><p className="footerIntro">Depuis 1894, Casing Tardy sélectionne, transforme et commercialise des boyaux naturels à destination des grossistes, charcutiers et salaisonniers.</p></div>
    <div className="footerCol"><b>Boyaux naturels</b><a href="/nos-produits/boyaux-de-porc/">Porc</a><a href="/nos-produits/boyaux-de-mouton/">Mouton</a><a href="/nos-produits/boyaux-de-boeuf/">Bœuf</a><a href="/nos-produits/boyaux-manufactures/">Manufacturés</a></div>
    <div className="footerCol"><b>Épices & préparations</b><a href="/les-mixs-complets/">Mixs complets</a><a href="/epices-naturelles/">Épices naturelles</a><a href="/les-chapelures/">Chapelures</a><a href="/nos-produits/marinades/">Marinades</a><a href="/nos-produits/emballages-sacs/">Emballages</a></div>
    <div className="footerCol footerContact"><b>Contact</b><a href="tel:+33491081059">+33 4 91 08 10 59</a><a href="mailto:commercial@casing-tardy.com">commercial@casing-tardy.com</a><span>27, traverse Antoine Donaz<br/>13015 Marseille · France</span><a href="/contactez-nous/">Contactez-nous →</a></div>
  </div>
  <div className="footerBottom"><span>© 2026 Casing Tardy · Marseille</span><span>Maison fondée en 1894</span></div>
</div></footer>}