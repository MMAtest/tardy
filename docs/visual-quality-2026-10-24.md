# Casing Tardy — passe visuelle catalogue et responsive (24 octobre 2026)

## Périmètre

- Les pages existantes, menus déroulants desktop, accordéons mobiles et footer sont conservés.
- 10 photographies de mélanges, la chapelure classique et la chapelure dorée possèdent maintenant des variantes transparentes, sans toucher aux originaux.
- L'illustration « menu de mouton » est réexportée sans son fond blanc.
- Les trois visuels Epicenou (mix, épices, chapelure) sont harmonisés ; les listings sont recentrés et plus lisibles sur mobile.
- Les fonds blancs intentionnels de photos de charcuterie ne sont pas supprimés (décor de prise de vue).
- Aucune image publicitaire ou marque partenaire n'est passée en détourage automatique.

## Contrôles

- Compilation `next build` : réussie, 28 routes publiques exportées, plus page 404.
- Audit Chrome : 28 routes × 390, 768 et 1440 px = 84 tests.
- Pas de débordement horizontal du document, pas d'image cassée chargée.
- Un débordement transitoire est détecté sur le H1 animé de la home à 390/768 px pendant son animation d'entrée ; le conteneur reste correctement clippé et la largeur de document reste identique au viewport.
- 74 références directes à des images d'assets contrôlées sans manquant, avant ajout des deux variantes finales.

## Réversibilité

Les originaux dans `/public/assets/` sont conservés. Tous les fichiers détourés sont placés dans `/public/assets/products/transparent/`, sauf le pictogramme de mouton (`/public/assets/menu-mouton-produit-clean.webp`). `scripts/clean_product_backgrounds.py` reproduit leur génération localement. Les changements d'espacement sont isolés dans `app/catalog-visual-polish.css`.
