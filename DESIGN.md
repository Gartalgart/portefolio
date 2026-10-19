# DESIGN.md — Portfolio Rémy Denimal

## Direction (validée)
- **Mode** : Persuade. Un seul geste final : prendre contact.
- **Base** : Linear (surfaces étagées, accent rare), Cal.com (cadres d'aperçu arrondis, air), Webdesign29 (bande de faits et lieu).
- **Thème** : sombre par défaut + clair, choix mémorisé (`localStorage`).
- **Accent** : ambre, réservé aux actions (boutons, liens, focus, sélection). Pas d'ambre décoratif.

## Tokens (`src/app/globals.css`)
`--bg --surface --surface-2 --fg --muted --line --accent --accent-fg --accent-soft --glass --shadow`.
Aucune couleur en dur dans les composants.
Élévation : une bordure 1px **ou** une ombre, jamais les deux. Rayons : 12 px (cadres internes), 16 px (cartes), pilules pour les petits contrôles.

## Typographie
Geist (sans) ; Geist Mono uniquement pour l'URL dans les cadres d'aperçu. Titres `tracking-[-0.025em]`, `text-balance`, mesure du corps ≤ 60 ch. Pas de surtitres.

## Mouvement
Un moment écrit : l'entrée du hero. Apparition au scroll uniquement sur la grille de projets. `prefers-reduced-motion` respecté.

## Structure
Navbar flottante (verre) → Hero + bande de faits → Projets (client / démonstration) → Services en liste avec prix → À propos (outils, zone, méthode) → Témoignages (masqués tant qu'il n'y a pas de vrai avis) → Contact → Footer.

## Règles de contenu
Aucun chiffre ou promesse non vérifié. Un projet est « client » seulement si confirmé (Secur-Feu, Save Toiture). Prix : « à partir de 1 000 € » pour un site vitrine ([À PRÉCISER] HT ou TTC).

## À compléter (`src/lib/content.ts`)
GitHub, LinkedIn, Calendly, email pro, domaine, stack réelle, avis clients, mentions légales.
