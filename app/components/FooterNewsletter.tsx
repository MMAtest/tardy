"use client";

import { useState, type FormEvent } from "react";

/**
 * Tardy newsletter — visual parity with the original WordPress banner.
 * The CTA opens a prefilled email request; it does NOT pretend to add the
 * visitor to an unconnected mailing list or transmit data to an API.
 */
export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  function requestSubscription(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitted = email.trim();
    if (!submitted) return;
    const subject = encodeURIComponent("Demande d'inscription à la newsletter Tardy");
    const body = encodeURIComponent("Bonjour,\n\nJe souhaite m'inscrire à la newsletter Casing Tardy.\nAdresse e-mail : " + submitted + "\n\nMerci.");
    window.location.href = `mailto:commercial@casing-tardy.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="tardyNewsletterReference" aria-labelledby="tardyNewsletterTitle">
      <div className="tardyNewsletterReferenceContent">
        <h2 id="tardyNewsletterTitle">Inscrivez-vous à notre newsletter<br />pour recevoir nouvelles &amp; promotions</h2>
        <form className="tardyNewsletterForm" onSubmit={requestSubscription}>
          <label className="sr-only" htmlFor="tardyNewsletterEmail">Votre adresse e-mail</label>
          <input
            id="tardyNewsletterEmail"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Saisir votre Email"
            required
          />
          <button type="submit">Souscrire</button>
        </form>
      </div>
    </section>
  );
}
