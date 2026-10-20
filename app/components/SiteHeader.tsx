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
      <nav className="desktopNav" aria-label="Navigation principale">
        <div className="megaWrap">
          <a className="navTrigger" href="/nos-produits/" aria-haspopup="true">Boyaux naturels <span aria-hidden="true">⌄</span></a>
          <div className="mega megaProducts megaBoyaux">
            <div className="megaColumn">
              <a className="megaHeading" href="/nos-produits/boyaux-de-porc/">Porc & truie</a>
              <a href="/nos-produits/boyaux-de-porc/menu-de-porc/">Menu de porc</a>
              <a href="/nos-produits/boyaux-de-porc/menu-de-truie/">Menu de truie</a>
              <a href="/nos-produits/boyaux-de-porc/chaudin-de-porc/">Chaudin de porc</a>
              <a href="/nos-produits/boyaux-de-porc/sacs-de-porc/">Sacs de porc</a>
              <a href="/nos-produits/boyaux-de-porc/suivant-de-porc/">Suivant de porc</a>
              <a href="/nos-produits/boyaux-de-porc/suivant-de-truie/">Suivant de truie</a>
              <a href="/nos-produits/boyaux-de-porc/rosettes-de-porc/">Rosettes de porc</a>
            </div>
            <div className="megaColumn">
              <a className="megaHeading" href="/nos-produits/boyaux-de-mouton/">Mouton</a>
              <a href="/nos-produits/boyaux-de-mouton/menu-de-mouton/">Menus de mouton</a>
              <a className="megaHeading second" href="/nos-produits/boyaux-manufactures/">Boyaux manufacturés</a>
            </div>
            <div className="megaColumn">
              <a className="megaHeading" href="/nos-produits/boyaux-de-boeuf/">Bœuf</a>
              <a href="/nos-produits/boyaux-de-boeuf/menu-de-boeuf/">Menu de bœuf</a>
              <a href="/nos-produits/boyaux-de-boeuf/gros-de-boeuf/">Gros de bœuf</a>
              <a href="/nos-produits/boyaux-de-boeuf/baudruche-de-boeuf/">Baudruche de bœuf</a>
              <a href="/nos-produits/">Tous les boyaux →</a>
            </div>
          </div>
        </div>
        <div className="megaWrap">
          <a className="navTrigger" href="/epices-epicenou/" aria-haspopup="true">Épices <span aria-hidden="true">⌄</span></a>
          <div className="mega">
            <a href="/les-mixs-complets/"><b>Les mixs complets</b><span>Préparations à cuire et charcuterie sèche</span></a>
            <a href="/epices-naturelles/"><b>Épices naturelles</b><span>Épices en sacs de 1 kg</span></a>
            <a href="/les-chapelures/"><b>Les chapelures</b><span>Panades et chapelures</span></a>
          </div>
        </div>
        <a href="/nos-produits/marinades/">Marinades</a>
        <a href="/nos-produits/emballages-sacs/">Emballages</a>
        <a href="/qui-sommes-nous/">Qui sommes-nous ?</a>
      </nav>
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
