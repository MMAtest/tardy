"use client";

import { useEffect } from "react";

export default function HomeMotion() {
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      main.classList.add("homeMotionReduced");
      return;
    }

    main.classList.add("homeMotionEnabled");

    const groups: string[][] = [
      [".homeHistoryVisual", ".homeHistoryCopy"],
      [".homeQualityGrid > div", ".homeQualityMedia"],
      [".homeQualityNote > div"],
      [".homeProduction .sectionHead", ".homeProductionText"],
      [".qualityControlRail > div"],
      [".homeProcess .sectionHead"],
      [".homeProcessTimeline article"],
      [".homeCommitmentGrid > div"],
      [".homePartners > div"],
      [".homeNewsletterEditorialContent > *", ".homeNewsletterEditorialImage"],
    ];

    const targets: HTMLElement[] = [];
    groups.forEach((selectors) => {
      selectors.forEach((selector) => {
        document.querySelectorAll<HTMLElement>(selector).forEach((el, index) => {
          if (targets.includes(el)) return;
          el.classList.add("homeReveal");
          el.style.setProperty("--reveal-delay", `${Math.min(index * 90, 270)}ms`);
          targets.push(el);
        });
      });
    });

    const revealVisible = () => {
      const limit = window.innerHeight * 0.92;
      targets.forEach((el) => {
        if (el.classList.contains("is-visible")) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < limit && rect.bottom > 0) el.classList.add("is-visible");
      });
    };

    const updateParallax = () => {
      const y = window.scrollY;
      const hero = document.querySelector<HTMLElement>(".homeHeroImage");
      const history = document.querySelector<HTMLElement>(".historyMain");
      const inset = document.querySelector<HTMLElement>(".historyInset");
      const newsletter = document.querySelector<HTMLElement>(".homeNewsletterEditorialImage img");

      if (hero) hero.style.setProperty("--parallax-y", `${Math.min(y * 0.045, 30)}px`);

      if (history) {
        const rect = history.getBoundingClientRect();
        const delta = Math.max(-18, Math.min(18, (window.innerHeight / 2 - rect.top) * 0.025));
        history.style.setProperty("--parallax-y", `${delta}px`);
      }

      if (inset) {
        const rect = inset.getBoundingClientRect();
        const delta = Math.max(-12, Math.min(12, (window.innerHeight / 2 - rect.top) * -0.02));
        inset.style.setProperty("--parallax-y", `${delta}px`);
      }

      if (newsletter) {
        const rect = newsletter.getBoundingClientRect();
        const delta = Math.max(-22, Math.min(22, (window.innerHeight / 2 - rect.top) * 0.025));
        newsletter.style.setProperty("--parallax-y", `${delta}px`);
      }
    };

    const updateMotion = () => {
      revealVisible();
      updateParallax();
    };

    let lastUpdate = 0;
    const onScroll = () => {
      const now = performance.now();
      if (now - lastUpdate < 32) return;
      lastUpdate = now;
      updateMotion();
    };

    updateMotion();
    const initialTimer = window.setTimeout(updateMotion, 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateMotion);

    return () => {
      window.clearTimeout(initialTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateMotion);
      main.classList.remove("homeMotionEnabled");
    };
  }, []);

  return null;
}
