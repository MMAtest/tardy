import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://casing-tardy.com"),
  title: { default: "Casing Tardy — Boyaux, épices, marinades & emballages", template: "%s | Casing Tardy" },
  description: "Casing Tardy accompagne les professionnels de la charcuterie depuis 1894 : boyaux naturels, épices, marinades et solutions de conditionnement.",
  alternates: { canonical: "/" },
  openGraph: { type:"website", locale:"fr_FR", siteName:"Casing Tardy", title:"Casing Tardy — L'expertise charcutière depuis 1894", description:"Boyaux naturels, épices, marinades et emballages pour les professionnels." },
  robots: { index:true, follow:true },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  const jsonLd={"@context":"https://schema.org","@type":"Organization","name":"Casing Tardy","url":"https://casing-tardy.com","foundingDate":"1894","areaServed":"FR","description":"Fournisseur professionnel de boyaux naturels, épices, marinades et emballages pour la charcuterie."};
  return <html lang="fr"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><Header/>{children}<Footer/></body></html>
}
function Header(){return <header className="header"><a className="brand" href="/">TARDY<span>1894</span></a><nav><a href="/nos-produits/boyaux-de-porc/">Boyaux</a><a href="/epices/">Épices</a><a href="/nos-produits/marinades/">Marinades</a><a href="/nos-produits/emballages-sacs/">Emballages</a><a className="navCta" href="/contactez-nous/">Nous contacter</a></nav></header>}
function Footer(){return <footer><div><div className="brand">TARDY<span>1894</span></div><p>L'expertise et le savoir-faire au service des professionnels de la charcuterie.</p></div><div><strong>Produits</strong><a href="/nos-produits/boyaux-de-porc/">Boyaux naturels</a><a href="/les-mixs-complets/">Épices</a><a href="/nos-produits/marinades/">Marinades</a><a href="/nos-produits/emballages-sacs/">Emballages</a></div><div><strong>Entreprise</strong><a href="/contactez-nous/">Contact</a><a href="/nos-produits/">Tous les produits</a></div></footer>}
