"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type MenuKey = "boyaux" | "epices" | "all";
type Preview = { label: string; href: string; meta: string; image: string; contain?: boolean };

const boyaux: Preview[] = [
  { label: "Porc & truie", href: "/nos-produits/boyaux-de-porc/", meta: "Menus, chaudins, sacs, suivants, rosettes", image: "/assets/Porc-1-1.png", contain: true },
  { label: "Mouton", href: "/nos-produits/boyaux-de-mouton/", meta: "Menus de mouton", image: "/assets/Mouton-2.png", contain: true },
  { label: "Bœuf", href: "/nos-produits/boyaux-de-boeuf/", meta: "Menus, gros & baudruches", image: "/assets/Boeuf-2-1.png", contain: true },
  { label: "Manufacturés", href: "/nos-produits/boyaux-manufactures/", meta: "Fuseaux, cylindriques, feuilles", image: "/assets/boyaux-porc-produit.png", contain: true },
];
const epices: Preview[] = [
  { label: "Mixs complets", href: "/les-mixs-complets/", meta: "Préparations à cuire & charcuterie sèche", image: "/assets/mix-indienne.jpg" },
  { label: "Épices naturelles", href: "/epices-naturelles/", meta: "Sélection d’épices en sacs de 1 kg", image: "/assets/comment-bien-utiliser-les-epices.jpeg" },
  { label: "Chapelures", href: "/les-chapelures/", meta: "Panades & chapelures", image: "/assets/chapelure.jpg" },
];
const direct: Preview[] = [
  { label: "Marinades", href: "/nos-produits/marinades/", meta: "La gamme Epicenou", image: "/assets/marinade-citronnelle.png" },
  { label: "Emballages", href: "/nos-produits/emballages-sacs/", meta: "Sacs sous vide & rétractables", image: "/assets/packaging-vacuum.jpg" },
  { label: "Qui sommes-nous ?", href: "/qui-sommes-nous/", meta: "Maison fondée à Marseille en 1894", image: "/assets/home-original/histoire.webp" },
];

function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = old; };
  }, [locked]);
}

export default function SiteHeader() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const currentItems = useMemo(() => open === "boyaux" ? boyaux : open === "epices" ? epices : [...boyaux, ...epices, ...direct], [open]);
  const [active, setActive] = useState<Preview>(boyaux[0]);
  const closeRef = useRef<HTMLButtonElement>(null);
  useLockBody(Boolean(open));

  useEffect(() => {
    if (!open) return;
    setActive(open === "epices" ? epices[0] : open === "all" ? direct[0] : boyaux[0]);
    const timer = window.setTimeout(() => closeRef.current?.focus(), 80);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    window.addEventListener("keydown", onKey);
    return () => { window.clearTimeout(timer); window.removeEventListener("keydown", onKey); };
  }, [open]);

  return <>
    <header className="siteHeader editorialHeader"><div className="shell headerInner editorialHeaderInner">
      <a className="logo" href="/" aria-label="Casing Tardy - Accueil"><img src="/assets/logo-tardy.png" alt="Tardy Boyaux Casings"/></a>
      <nav className="editorialNav" aria-label="Navigation principale">
        <button type="button" className="editorialNavTrigger" onClick={() => setOpen("boyaux")} aria-expanded={open === "boyaux"}><span>Boyaux naturels</span><i aria-hidden="true">01</i></button>
        <button type="button" className="editorialNavTrigger" onClick={() => setOpen("epices")} aria-expanded={open === "epices"}><span>Épices</span><i aria-hidden="true">02</i></button>
        <a href="/nos-produits/marinades/">Marinades</a>
        <a href="/nos-produits/emballages-sacs/">Emballages</a>
        <a href="/qui-sommes-nous/">Qui sommes-nous ?</a>
      </nav>
      <div className="editorialHeaderActions">
        <a className="headerContactLink" href="/contactez-nous/">Contact <span>↗</span></a>
        <button type="button" className="editorialMenuButton" onClick={() => setOpen("all")} aria-label="Ouvrir le menu" aria-expanded={open === "all"}><span>Menu</span><i aria-hidden="true"><b></b><b></b></i></button>
      </div>
    </div></header>

    <div className={`editorialMenuOverlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="editorialMenuTop">
        <a className="editorialMenuLogo" href="/" onClick={() => setOpen(null)} aria-label="Accueil"><img src="/assets/logo-tardy.png" alt="Tardy"/></a>
        <div className="editorialMenuTopMeta">Maison fondée en 1894 · Marseille</div>
        <button ref={closeRef} type="button" className="editorialMenuClose" onClick={() => setOpen(null)} aria-label="Fermer le menu"><span>Fermer</span><i aria-hidden="true"></i></button>
      </div>
      <div className="editorialMenuBody">
        <div className="editorialMenuRail">
          <div className="editorialMenuKicker">{open === "boyaux" ? "Boyaux naturels" : open === "epices" ? "Épices & préparations" : "Navigation"}</div>
          <div className="editorialMenuItems">
            {currentItems.map((item,index) => <a href={item.href} className={`editorialMenuItem ${active.href === item.href ? "is-active" : ""}`} key={item.href} onMouseEnter={() => setActive(item)} onFocus={() => setActive(item)} onClick={() => setOpen(null)}>
              <span className="editorialMenuIndex">{String(index + 1).padStart(2,"0")}</span><span className="editorialMenuLabel">{item.label}</span><span className="editorialMenuArrow">↗</span><small>{item.meta}</small>
            </a>)}
          </div>
          {open === "boyaux" && <a className="editorialMenuAllLink" href="/nos-produits/" onClick={() => setOpen(null)}>Voir tous les boyaux <span>→</span></a>}
          {open === "epices" && <a className="editorialMenuAllLink" href="/epices-epicenou/" onClick={() => setOpen(null)}>Voir l’univers Épices <span>→</span></a>}
        </div>
        <div className="editorialMenuPreview" aria-live="polite">
          <div className={`editorialMenuPreviewFrame ${active.contain ? "is-contain" : ""}`} key={active.image}><img src={active.image} alt=""/></div>
          <div className="editorialMenuPreviewCaption"><span>{active.label}</span><small>{active.meta}</small></div>
        </div>
      </div>
      <div className="editorialMenuBottom"><a href="tel:+33491081059">+33 4 91 08 10 59</a><a href="mailto:commercial@casing-tardy.com">commercial@casing-tardy.com</a><span>27 traverse Antoine Donaz · 13015 Marseille</span></div>
    </div>
  </>;
}
