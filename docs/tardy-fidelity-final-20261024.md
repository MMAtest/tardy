# Tardy — finition fidélité WordPress (24 octobre 2026)

## Objectif et limites

Rapprocher le clone Vercel du WordPress original sur la home et les catégories principales, en conservant les deux menus déroulants desktop, le menu mobile et les bandes de bas de page déjà validées. Les blocs globaux supplémentaires approuvés restent volontairement présents : ils expliquent une partie de l'écart de hauteur totale avec WordPress.

## Changements

- Home : largeur/typo du titre desktop, repli sur trois lignes, taille de titre mobile, placement et taille du marquage « 1894 ». Import placé dans le bon ordre de cascade Next.js pour être effectif.
- Index Nos boyaux naturels : ajustement du titre mobile, ligne de conditionnement et espacement des quatre familles.
- Mixs et épices naturelles : trois colonnes sur tablette et desktop (conformément au catalogue WordPress), une colonne sur téléphone ; les images déjà détourées sont conservées.
- Les autres catégories, fiches techniques et blocs éditoriaux déjà validés ne sont pas modifiés.

## Contrôles

- Compilation Next.js et TypeScript : réussie, 28 routes statiques publiques.
- QA 28 routes × 390 / 768 / 1440 px : 84 chargements, aucune image cassée, aucun débordement horizontal du document.
- QA catégorie/home 8 routes × 320 / 1024 / 1920 px : 24 chargements supplémentaires, aucun débordement horizontal du document et aucune image cassée.
- Une alerte d'élément dépasse temporairement son propre rectangle lors de l'animation d'entrée du H1 de la home à 320 / 768 px, mais le conteneur est clippé et la largeur du document reste égale au viewport.
- Comparaison WordPress vs Vercel réalisée à 390 et 1440 px ; aucun chiffre « 100 % pixel perfect » n'est revendiqué, des écarts intentionnels de footer et des différences mineures subsistent.

## Retour arrière

Les réglages sont dans `app/pixel-parity-20261024.css` et le bloc final de `app/home-parity.css`. WordPress d'origine jamais modifié.
