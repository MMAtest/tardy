import DesktopNavigation from "./DesktopNavigation";

/**
 * Navigation Casing Tardy : restaurée depuis la version antérieure au menu
 * éditorial plein écran (hiérarchie du commit bfb0f27^).
 *
 * Desktop : vrais sous-menus au survol et au focus clavier.
 * Mobile : accordéons avec sous-catégories et routes produits.
 * Aucun JavaScript ni plugin de navigation à charger.
 */
export default function SiteHeader() {
  return <header className="siteHeader">
    <div className="shell headerInner">
      <a className="logo" href="/" aria-label="Casing Tardy - Accueil">
        <img src="/assets/logo-tardy.png" alt="Tardy Boyaux Casings" />
      </a>
      <DesktopNavigation />
      <div className="headerActions">
        <a className="headerCta" href="/contactez-nous/">Contact ↗</a>
        <details className="mobileMenu">
          <summary>Menu</summary>
          <nav className="mobilePanel" aria-label="Menu mobile">
            <details>
              <summary>Boyaux naturels</summary>
              <a href="/nos-produits/">Tous les boyaux</a>
              <details>
                <summary>Porc & truie</summary>
                <a href="/nos-produits/boyaux-de-porc/">Tous les boyaux de porc</a>
                <a href="/nos-produits/boyaux-de-porc/menu-de-porc/">Menu de porc</a>
                <a href="/nos-produits/boyaux-de-porc/menu-de-truie/">Menu de truie</a>
                <a href="/nos-produits/boyaux-de-porc/chaudin-de-porc/">Chaudin de porc</a>
                <a href="/nos-produits/boyaux-de-porc/sacs-de-porc/">Sacs de porc</a>
                <a href="/nos-produits/boyaux-de-porc/suivant-de-porc/">Suivant de porc</a>
                <a href="/nos-produits/boyaux-de-porc/suivant-de-truie/">Suivant de truie</a>
                <a href="/nos-produits/boyaux-de-porc/rosettes-de-porc/">Rosettes de porc</a>
              </details>
              <details>
                <summary>Mouton</summary>
                <a href="/nos-produits/boyaux-de-mouton/">Tous les boyaux de mouton</a>
                <a href="/nos-produits/boyaux-de-mouton/menu-de-mouton/">Menu de mouton</a>
              </details>
              <details>
                <summary>Bœuf</summary>
                <a href="/nos-produits/boyaux-de-boeuf/">Tous les boyaux de bœuf</a>
                <a href="/nos-produits/boyaux-de-boeuf/menu-de-boeuf/">Menu de bœuf</a>
                <a href="/nos-produits/boyaux-de-boeuf/gros-de-boeuf/">Gros de bœuf</a>
                <a href="/nos-produits/boyaux-de-boeuf/baudruche-de-boeuf/">Baudruche de bœuf</a>
              </details>
              <a href="/nos-produits/boyaux-manufactures/">Boyaux manufacturés</a>
            </details>
            <details>
              <summary>Épices</summary>
              <a href="/epices-epicenou/">Toutes les épices</a>
              <a href="/les-mixs-complets/">Les mixs complets</a>
              <a href="/epices-naturelles/">Épices naturelles</a>
              <a href="/les-chapelures/">Les chapelures</a>
            </details>
            <a href="/nos-produits/marinades/">Marinades</a>
            <a href="/nos-produits/emballages-sacs/">Emballages</a>
            <a href="/qui-sommes-nous/">Qui sommes-nous ?</a>
            <a href="/contactez-nous/">Contact</a>
          </nav>
        </details>
      </div>
    </div>
  </header>;
}
