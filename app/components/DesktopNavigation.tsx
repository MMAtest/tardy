/**
 * Desktop navigation only. Keep the established product taxonomy and URL map.
 * CSS hover + :focus-within avoids JS delays and supports keyboard navigation.
 * Mobile navigation remains in SiteHeader, unchanged.
 */
const casings = [
  {
    number: "01",
    name: "Porc & truie",
    url: "/nos-produits/boyaux-de-porc/",
    links: [
      ["Menu de porc", "/nos-produits/boyaux-de-porc/menu-de-porc/"],
      ["Menu de truie", "/nos-produits/boyaux-de-porc/menu-de-truie/"],
      ["Chaudin de porc", "/nos-produits/boyaux-de-porc/chaudin-de-porc/"],
      ["Sacs de porc", "/nos-produits/boyaux-de-porc/sacs-de-porc/"],
      ["Suivant de porc", "/nos-produits/boyaux-de-porc/suivant-de-porc/"],
      ["Suivant de truie", "/nos-produits/boyaux-de-porc/suivant-de-truie/"],
      ["Rosettes de porc", "/nos-produits/boyaux-de-porc/rosettes-de-porc/"],
    ],
  },
  {
    number: "02",
    name: "Mouton",
    url: "/nos-produits/boyaux-de-mouton/",
    links: [
      ["Menu de mouton", "/nos-produits/boyaux-de-mouton/menu-de-mouton/"],
      ["Boyaux manufacturés", "/nos-produits/boyaux-manufactures/"],
    ],
  },
  {
    number: "03",
    name: "Bœuf",
    url: "/nos-produits/boyaux-de-boeuf/",
    links: [
      ["Menu de bœuf", "/nos-produits/boyaux-de-boeuf/menu-de-boeuf/"],
      ["Gros de bœuf", "/nos-produits/boyaux-de-boeuf/gros-de-boeuf/"],
      ["Baudruche de bœuf", "/nos-produits/boyaux-de-boeuf/baudruche-de-boeuf/"],
    ],
  },
];

const spices = [
  {
    number: "01",
    title: "Les mixs complets",
    description: "Préparations à cuire et charcuterie sèche",
    src: "/assets/products/mixs/merguez.webp",
    href: "/les-mixs-complets/",
  },
  {
    number: "02",
    title: "Épices naturelles",
    description: "Épices et aromates pour vos recettes",
    src: "/assets/products/epices/paprika.webp",
    href: "/epices-naturelles/",
  },
  {
    number: "03",
    title: "Les chapelures",
    description: "Panades et chapelures",
    src: "/assets/products/chapelures/chapelure.webp",
    href: "/les-chapelures/",
  },
];

function Chevron() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m5.5 7.5 4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DesktopNavigation() {
  return (
    <nav className="tardyDesktopNav" aria-label="Navigation principale">
      <div className="tardyNavItem tardyNavItemWithMenu">
        <a className="tardyNavLink tardyNavTrigger" href="/nos-produits/" aria-haspopup="true" aria-controls="tardyMenuCasings">
          Boyaux naturels <span className="tardyNavChevron"><Chevron /></span>
        </a>
        <div id="tardyMenuCasings" className="tardyDropdown tardyDropdownCasings">
          <div className="tardyDropIntro">
            <div><span className="tardyDropKicker">La sélection Tardy <span aria-hidden="true">/</span> Depuis 1894</span>
              <h2>Boyaux naturels</h2>
            </div>
            <p>Notre savoir-faire au service des artisans, grossistes et salaisonniers.</p>
          </div>
          <div className="tardyDropColumns">
            {casings.map(({ number, name, url, links }) => (
              <section className="tardyDropColumn" aria-label={name} key={name}>
                <a href={url} className="tardyDropCategory">
                  <span className="tardyDropIndex">{number}</span>
                  <span>{name}</span>
                  <span className="tardyDropArrow" aria-hidden="true">↗</span>
                </a>
                <div className="tardyDropLinks">
                  {links.map(([title, href]) => (
                    <a href={href} key={href}>{title}<span aria-hidden="true">↗</span></a>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <a className="tardyDropFooter" href="/nos-produits/">
            <span>Découvrir tous nos boyaux naturels</span><span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="tardyNavItem tardyNavItemWithMenu">
        <a className="tardyNavLink tardyNavTrigger" href="/epices-epicenou/" aria-haspopup="true" aria-controls="tardyMenuSpices">
          Épices <span className="tardyNavChevron"><Chevron /></span>
        </a>
        <div id="tardyMenuSpices" className="tardyDropdown tardyDropdownSpices">
          <div className="tardyDropIntro">
            <div><span className="tardyDropKicker">L'atelier des saveurs <span aria-hidden="true">/</span> Collections</span>
              <h2>Épices & préparations</h2>
            </div>
            <p>Des ingrédients choisis pour la précision de vos recettes.</p>
          </div>
          <div className="tardySpiceGrid">
            {spices.map((item) => (
              <a className="tardySpiceCard" href={item.href} key={item.href}>
                <span className="tardySpiceNumber">{item.number}</span>
                <span className="tardySpiceImage"><img src={item.src} alt="" loading="lazy" width="130" height="130" /></span>
                <span className="tardySpiceTitle">{item.title}</span>
                <span className="tardySpiceDescription">{item.description}</span>
                <span className="tardySpiceArrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <a className="tardyDropFooter" href="/epices-epicenou/">
            <span>Voir toutes nos épices</span><span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <a className="tardyNavLink tardyNavPlain" href="/nos-produits/marinades/">Marinades</a>
      <a className="tardyNavLink tardyNavPlain" href="/nos-produits/emballages-sacs/">Emballages</a>
      <a className="tardyNavLink tardyNavPlain" href="/qui-sommes-nous/">Qui sommes-nous ?</a>
    </nav>
  );
}
