/**
 * Site-wide newsletter invitation displayed after the two shared trust bands.
 * The mailto action preserves the existing contact workflow (no newsletter API).
 */
export default function FooterNewsletter() {
  return (
    <section className="homeNewsletterEditorial tardyGlobalNewsletter" aria-labelledby="tardyNewsletterTitle">
      <div className="homeNewsletterEditorialImage">
        <img src="/assets/home-original/hero.jpg" alt="" aria-hidden="true" loading="lazy" />
      </div>
      <div className="homeNewsletterEditorialContent">
        <div className="eyebrow">Maison Tardy</div>
        <h2 id="tardyNewsletterTitle">
          Inscrivez-vous à notre newsletter<br />pour recevoir nouvelles &amp; promotions
        </h2>
        <a
          className="newsletterTextLink"
          href="mailto:commercial@casing-tardy.com?subject=Inscription%20newsletter%20Tardy"
        >
          <span>Souscrire</span><i aria-hidden="true">↗</i>
        </a>
      </div>
      <div className="homeNewsletterEditorialYear" aria-hidden="true">1894</div>
    </section>
  );
}
