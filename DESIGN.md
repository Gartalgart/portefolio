# DESIGN.md — Portfolio Rémy Denimal

## Direction (validée le 2026-10-20)
Inspirée de seen-agency.fr : **la nuit qui s'allume, puis le jour**. Le site raconte comment une activité invisible en ligne devient trouvée, choisie, contactée. Ton direct, phrases courtes, langage du client.
- **Nuit** (`.night`) : hero, panneau 3D, contact, pied de page. Bleu profond `#070d1c`.
- **Jour** (thème par défaut) : papier crème `#f3eee4`, encre marine `#0c1a3a`.
- **Un bleu d'action** `#1f4fd6` (boutons, liens). **Vert-citron** `#d7f36b` réservé aux étiquettes.
- Thème sombre en option (bascule mémorisée) : le jour passe en bleu nuit `#0a1226`.

## Moments signature
0. **Intro 3D « rd-solutions »** (`BrandIntro`, premier écran, validée le 2026-10-23) : le nom en chrome bleuté (Space Grotesk Bold), découpé en fragments dans Blender. Les fragments arrivent de la nuit et s'assemblent (~2,8 s, vague de gauche à droite, reflet blanc qui balaie), s'écartent autour du curseur, puis se dispersent vers le visiteur au défilement (section de 200svh, canvas collant). Nom seul à l'écran + « Défiler ». Un seul `<h1>` (masqué visuellement) porte le nom ; le hero raconté passe en `<h2>`.
   - Ordinateur : `rd-desktop.glb` (192 fragments, ~320 Ko gzippé), verni + halo (bloom). Écran étroit ou portrait : `rd-mobile.glb` sur deux lignes (« rd- / solutions », 144 fragments), sans verni ni halo.
   - Tout le mouvement est dans le vertex shader (un seul appel de rendu) ; rendu suspendu hors écran.
   - Mouvement réduit, pas de WebGL ou échec de chargement : image fixe `rd-solutions.webp` / `rd-solutions-mobile.webp` (rendu Cycles).
   - Source : `assets/3d/rd-solutions.blend` (collections `D` et `M`, studio de panneaux lumineux), police `assets/3d/fonts/SpaceGrotesk-Bold.ttf` (OFL). Fond du canvas = `--night` exact (pas de courbe de tons) pour se fondre dans la section suivante.
1. **Hero raconté au scroll** (`Hero`, `HeroScene`) : un site fictif (« Atelier Morel », signalé comme exemple) s'allume en 4 étapes, avec un mot géant en contour : Invisible → Trouvé → Choisi → Contacté (rempli en bleu). Mouvement réduit : état final directement.
2. **Avant / après** (`BeforeAfter`) : un vieux site fictif est remplacé par Maison Léa au fil du défilement (masque `clip-path`). Mouvement réduit : curseur.
3. **Vitrines** (`Projects`) : galerie horizontale (scroll-snap natif + flèches), une carte aux couleurs de chaque projet (`color` dans `content.ts`, texte blanc AA). Sites testables en direct. Dernière carte : « Emplacement disponible ».

## Composants
- **Note papier** (`.paper`) : fond `--surface`, ombre douce, légèrement de travers (rotation ≤ 1°). Méthode, FAQ, photo, « Ce qui est compris ».
- **Étiquette** (`.tag`) : sticker vert-citron, sur les cartes uniquement (statut, prix, étape), jamais en surtitre de section.
- **Frise méthode** (`Method`) : 7 étapes, chacune signée du même visage (un seul interlocuteur).
- **FAQ** (`Faq`) : `<details>` natifs.
- **Réservation** : `bookingReady` / `bookingHref` dans `content.ts`. Sans vrai lien Calendly, « Réserver un appel » ouvre un email pré-rempli ; avec un lien, le calendrier s'intègre dans Contact.

## Typographie
- Titres : **Bricolage Grotesque** condensée (`.display` : 800, `font-stretch: 75%`, interligne 0,92).
- Texte : **Schibsted Grotesk**.
- Contour (`.outline-text`) : trait `clamp(1.5px, 0.035em, 3px)` + remplissage couleur du fond (`paint-order`) pour masquer les chevauchements de la police variable.

## Objet 3D (Blender)
Gyroscope (`public/models/artefact.glb`, 425 Ko) dans un panneau de nuit entre Projets et Services. Chargé en différé, image de repli si mouvement réduit ou sans WebGL. Source : `assets/3d/artefact.blend`.

## Règles
- Tout vient des tokens de `globals.css`. Exceptions assumées : les illustrations fictives (mini-site, vieux site, carte de recherche) et les couleurs des projets.
- Pas de surtitre, pas de bloc de gros chiffres. Un mouvement par zone.
- Aucun chiffre ou promesse non vérifié ; tout exemple est signalé comme fictif. « Projet client » = Secur-Feu et Save Toiture seulement.
- Prix : « à partir de 1 000 € » (site vitrine) — [À PRÉCISER] HT ou TTC.

## À compléter (`src/lib/content.ts`)
Lien Calendly, GitHub, LinkedIn, email pro, stack réelle, avis clients (section masquée tant qu'il n'y en a pas), mentions légales, réponse FAQ « modifier mon site moi-même » [À CONFIRMER].
