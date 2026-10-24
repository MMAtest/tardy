# Tardy — refonte de fidélité WordPress (24/10/2026)

## Objectif

Rapprocher la structure visuelle du clone Vercel de `casing-tardy.com` en conservant les décisions de navigation déjà validées.

## Alignements opérés

- Barre supérieure supprimée ; en-tête blanc, menu mobile hamburger, deux dropdowns desktop conservés.
- Page Epicenou : introduction centrée et trois liens de catégories, suppression des sections décoratives ajoutées.
- Mixs et épices naturelles : retour à la grille photographique et aux fonds de cartes blancs de référence.
- Chapelures : copie en premier, galerie des trois photos d'origine, nettoyage des sections décoratives ajoutées.
- Nos boyaux naturels : bandeau des conditionnements original et quatre liens de familles, sans cartes éditoriales supplémentaires.
- Société Tardy : ordre historique (titre, deux photos, présentation, engagements), photos d'origine.
- Emballages : liste des quatre références, suppression de la section photo sombre et du bloc éditorial supplémentaire.
- Cartes Marinades : espaces et hauteurs mobile réduits pour retrouver le rythme de la grille historique.
- Feuilles de style ciblées `source-layout-parity.css`, sans suppression des sections de bas de page validées.

## Exceptions conservées délibérément

Les bandes mondiales de qualité/normes et la newsletter restent sur les pages, conformément aux décisions validées. Elles peuvent allonger les pages Vercel par rapport au WordPress. Le mega-menu desktop animé reste en place. Les pages techniques non réécrites ne sont pas revendiquées identiques au pixel près ; elles reçoivent seulement la correction générale du fond, de l'en-tête et des largeurs.

## Validation

`npm run build` : OK. 28 routes statiques générées. Références d'images locales contrôlées : aucun fichier manquant. Contrôle responsive Chrome sur 390, 768 et 1440 px à terminer après compilation.

## Retours arrière

Revenir au commit parent rétablit les sections réécrites. Le WordPress n'a pas été modifié.
