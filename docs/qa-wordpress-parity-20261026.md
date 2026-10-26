# Tardy — conformité responsive WordPress (26 octobre 2026)

Branche : `fix/tardy-responsive-pixel-parity-20261026`

## Référence et méthode

- Source : `https://casing-tardy.com`, lecture seule.
- Cible de développement : Next.js statique, testé en local sur le port 3199.
- Mise en ligne **non effectuée** pendant cette passe ; pas de modification du WordPress.
- Test de non-régression : Playwright/Chromium sur les 28 routes publiques à 320, 390, 430, 768, 1024, 1440, 1920, 2560 et 3840 px : **252/252 contrôles sans débordement majeur ni image cassée**.
- Compilation : `npm run build` terminée avec succès.

## Relevés géométriques

À 1440px, la source WordPress a un bloc principal centré de 1290px (x=75), reproductible à 3840px (x=1275). Les quatre principales sections démarrent à :
- Bandeau : y=201, hauteur=793.
- Histoire : y=994, hauteur=880.
- Qualité : y=1874, hauteur=875.
- Fabrication : y=2749, hauteur=760.

Zone commune WordPress à 1440px :
- Engagements : y=3509–4150 (641px).
- Organismes professionnels : y=4150–4685 (535px).
- Newsletter sur photo : y=4685–5084 (399px).
- Pied de page : y=5084–5186 (102px).

Le correctif reproduit cette charpente (à environ 3px pour les limites du pied de page) et restaure la photo source de la section Histoire.

## Limites et suivi

La géométrie / le responsive **ne valent pas** certification pixel-perfect : la comparaison BackstopJS de l'accueil reste non conforme au seuil de 0,5 %. Les écarts résiduels concernent notamment fontes exactes, pixels des arrière-plans, style du menu et reproduction fine des blocs. Le test Backstop précédent au correctif identifiait environ 48–52 % de pixels différents sur l'accueil ; le correctif améliore la composition mais demande d'autres itérations visuelles.

Outils locaux :
- `~/Projects/.digigroupe-tooling/tardy-visual-qa` — configuration et rapports BackstopJS.
- `~/Projects/.digigroupe-tooling/screenshot-to-code` — application locale.
- `qa-all-routes-20261026.json` dans le répertoire de QA ci-dessus.

La newsletter ouvre un e-mail de demande d'inscription prérempli ; aucune inscription n'est simulée ni transmise silencieusement à un service non connecté.
