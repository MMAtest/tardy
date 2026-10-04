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
  const jsonLd={"@context":"https://schema.org","@type":"Organization","name":"Casing Tardy","url":"https://casing-tardy.com","foundingDate":"1894","areaServed":"FR","description":"Fournisseur professionnel de boyaux naturels, épices, marinades et emballages pour la charcuterie."};
  return <html lang="fr"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><Topbar/><Header/>{children}<Footer/></body></html>
}
function Topbar(){return <div className="topbar"><div className="shell"><span>Maison fondée en 1894 · Marseille</span><span>Boyaux naturels · Épices · Marinades · Emballages</span></div></div>}
function Header(){return <header className="siteHeader"><div className="shell headerInner">
  <a className="logo" href="/"><img src="/assets/logo-tardy.png" alt="Tardy Boyaux Casings"/></a>
  <nav className="desktopNav" aria-label="Navigation principale">
    <div className="megaWrap"><a className="navTrigger" href="/nos-produits/">Nos produits <span>⌄</span></a><div className="mega megaProducts">
      <div className="megaColumn"><a className="megaHeading" href="/nos-produits/boyaux-de-porc/">Boyaux naturels</a><a href="/nos-produits/boyaux-de-porc/">Porc</a><a href="/nos-produits/boyaux-de-mouton/">Mouton</a><a href="/nos-produits/boyaux-de-boeuf/">Bœuf</a><a href="/nos-produits/boyaux-manufactures/">Boyaux manufacturés</a></div>
      <div className="megaColumn"><a className="megaHeading" href="/epices/">Épices</a><a href="/les-mixs-complets/">Les mixs complets</a><a href="/epices-naturelles/">Épices naturelles</a><a href="/les-chapelures/">Les chapelures</a></div>
      <div className="megaColumn"><a className="megaHeading" href="/nos-produits/marinades/">Marinades</a><a href="/nos-produits/emballages-sacs/">Emballages</a><a href="/nos-produits/">Voir tout le catalogue →</a></div>
    </div></div>
    <div className="megaWrap"><a className="navTrigger" href="/nos-produits/boyaux-de-porc/">Boyaux <span>⌄</span></a><div className="mega">
      <a href="/nos-produits/boyaux-de-porc/"><b>Porc</b><span>Menus, chaudins, sacs, suivants, rosettes et fuseaux</span></a>
      <a href="/nos-produits/boyaux-de-mouton/"><b>Mouton</b><span>Menus, calibres et qualités professionnelles</span></a>
      <a href="/nos-produits/boyaux-de-boeuf/"><b>Bœuf</b><span>Menus, gros de bœuf et baudruches</span></a>
    </div></div>
    <div className="megaWrap"><a className="navTrigger" href="/epices/">Épices <span>⌄</span></a><div className="mega">
      <a href="/les-mixs-complets/"><b>Mixs complets</b><span>Préparations prêtes à l'emploi</span></a>
      <a href="/epices-naturelles/"><b>Épices naturelles</b><span>Sélection en sacs professionnels</span></a>
      <a href="/les-chapelures/"><b>Chapelures</b><span>Panades et textures</span></a>
    </div></div>
    <a href="/nos-produits/marinades/">Marinades</a><a href="/qui-sommes-nous/">Qui sommes-nous ?</a>
  </nav>
  <div className="headerActions"><a className="headerCta" href="/contactez-nous/">Contact ↗</a><details className="mobileMenu"><summary>Menu</summary><div className="mobilePanel">
    <details><summary>Nos produits</summary><a href="/nos-produits/boyaux-de-porc/">Boyaux de porc</a><a href="/nos-produits/boyaux-de-mouton/">Boyaux de mouton</a><a href="/nos-produits/boyaux-de-boeuf/">Boyaux de bœuf</a><a href="/nos-produits/boyaux-manufactures/">Boyaux manufacturés</a><a href="/les-mixs-complets/">Mixs complets</a><a href="/epices-naturelles/">Épices naturelles</a><a href="/les-chapelures/">Chapelures</a><a href="/nos-produits/marinades/">Marinades</a><a href="/nos-produits/emballages-sacs/">Emballages</a></details>
    <a href="/qui-sommes-nous/">Qui sommes-nous ?</a><a href="/contactez-nous/">Contact</a>
  </div></details></div>
</div></header>}
function Footer(){return <footer className="siteFooter"><div className="shell"><div className="footerGrid"><div><a className="footerLogo" href="/"><img src="/assets/logo-tardy.png" alt="Tardy"/></a><p className="footerIntro">Depuis 1894, Casing Tardy sélectionne, transforme et commercialise des boyaux naturels à destination des grossistes, charcutiers et salaisonniers.</p></div><div className="footerCol"><b>Boyaux</b><a href="/nos-produits/boyaux-de-porc/">Porc</a><a href="/nos-produits/boyaux-de-mouton/">Mouton</a><a href="/nos-produits/boyaux-de-boeuf/">Bœuf</a><a href="/nos-produits/boyaux-manufactures/">Manufacturés</a></div><div className="footerCol"><b>Préparations</b><a href="/les-mixs-complets/">Mixs complets</a><a href="/epices-naturelles/">Épices naturelles</a><a href="/les-chapelures/">Chapelures</a><a href="/nos-produits/marinades/">Marinades</a></div><div className="footerCol"><b>Entreprise</b><a href="/qui-sommes-nous/">Qui sommes-nous ?</a><a href="/nos-produits/emballages-sacs/">Emballages</a><a href="/contactez-nous/">Contact</a></div></div><div className="footerBottom"><span>© 2026 Casing Tardy · Marseille</span><span>Maison fondée en 1894</span></div></div></footer>}