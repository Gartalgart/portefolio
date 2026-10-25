# DESIGN.md — Portfolio Rémy Denimal

## Direction (validée le 2026-10-20)
Inspirée de seen-agency.fr : **la nuit qui s'allume, puis le jour**. Le site raconte comment une activité invisible en ligne devient trouvée, choisie, contactée. Ton direct, phrases courtes, langage du client.
- **Nuit** (`.night`) : hero, panneau 3D, contact, pied de page. Bleu profond `#070d1c`.
- **Jour** (thème par défaut) : papier crème `#f3eee4`, encre marine `#0c1a3a`.
- **Un bleu d'action** `#1f4fd6` (boutons, liens). **Vert-citron** `#d7f36b` réservé aux étiquettes.
- Thème sombre en option (bascule mémorisée) : le jour passe en bleu nuit `#0a1226`.

## Moments signature
0. **Intro 3D « rd-solutions »** (`BrandIntro`, premier écran, validée le 2026-10-23) : le nom en chrome bleuté (Space Grotesk Bold), découpé en fragments dans Blender. Les fragments arrivent de la nuit et s'assemblent (~2,8 s, vague de gauche à droite, reflet blanc qui balaie), s'écartent autour du curseur, puis se dispersent vers le visiteur au défilement (section de 140svh, canvas collant). Nom seul à l'écran + « Défiler ». Un seul `<h1>` (masqué visuellement) porte le nom ; le hero raconté passe en `<h2>`.
   - Ordinateur : `rd-desktop.glb` (192 fragments, ~320 Ko gzippé), verni + halo (bloom). Écran étroit ou portrait : `rd-mobile.glb` sur deux lignes (« rd- / solutions », 144 fragments), sans verni ni halo.
   - Tout le mouvement est dans le vertex shader (un seul appel de rendu) ; rendu suspendu hors écran.
   - Avant que la scène soit prête : le nom « éteint » (`.outline-text`, trait `--line-strong`), présent dès le HTML, qui s'efface quand les fragments arrivent. Le modèle est préchargé depuis `<head>` (script inline, même condition d'écran que `compact`). Si la scène n'est pas prête après 2,5 s, l'image fixe prend le relais puis s'efface au démarrage.
   - Mouvement réduit, pas de WebGL ou échec de chargement : image fixe `rd-solutions.webp` / `rd-solutions-mobile.webp` (rendu Cycles).
   - Source : `assets/3d/rd-solutions.blend` (collections `D` et `M`, studio de panneaux lumineux), police `assets/3d/fonts/SpaceGrotesk-Bold.ttf` (OFL). Fond du canvas = `--night` exact (pas de courbe de tons) pour se fondre dans la section suivante.
1. **Hero raconté au scroll** (`Hero`, `ShopVideo`) : une boutique filmée en plan fixe (images générées par IA, signalées) s'allume puis se remplit au fil du défilement, avec un mot géant en contour : Invisible → Trouvé → Choisi → Contacté (rempli en bleu). Vidéo `public/videos/boutique.mp4` : 1280 × 720, 12 i/s, 20 s, ~1,4 Mo (H.264 crf 31, image clé chaque seconde pour le défilement image par image) ; source non compressée dans `assets/video/`. Téléchargée seulement quand le visiteur descend dans l'intro (hero à moins d'un demi-écran). Mouvement réduit : état final directement.
2. **Avant / après** (`BeforeAfter`) : un vieux site fictif est remplacé par Maison Léa au fil du défilement (masque `clip-path`). Mouvement réduit : curseur.
3. **Vitrines** (`Projects`) : galerie horizontale (scroll-snap natif + flèches), une carte aux couleurs de chaque projet (`color` dans `content.ts`, texte blanc AA). Sites testables en direct. Dernière carte : « Emplacement disponible ».

## Composants
- **Note papier** (`.paper`) : fond `--surface`, ombre douce, légèrement de travers (rotation ≤ 1°). Méthode, FAQ, photo, « Ce qui est compris ».
- **Jour forcé** (`.day`) : remappe les tokens sur les couleurs du jour quel que soit le thème, miroir de `.night`, sans fond imposé. Pour une note papier posée sur la nuit (Contact, dernière vitrine). Sur une vitrine colorée, un bouton blanc utilise `text-night`.
- **Image de partage** (`src/app/opengraph-image.tsx`, 1200 × 630, générée au build) : le nom en dégradé chromé sur la nuit, accroche et zone, police Space Grotesk Bold.
- **Étiquette** (`.tag`) : sticker vert-citron, sur les cartes uniquement (statut, prix, étape), jamais en surtitre de section.
- **Frise méthode** (`Method`) : 7 étapes, chacune signée du même visage (un seul interlocuteur).
- **FAQ** (`Faq`) : `<details>` natifs.
- **Réservation** : `bookingReady` / `bookingHref` dans `content.ts`. Sans vrai lien Calendly, « Réserver un appel » ouvre un email pré-rempli ; avec un lien, le calendrier s'intègre dans Contact.
- **Réseaux** : `socials` dans `content.ts` ne liste que les liens renseignés ; rien ne pointe vers une page d'accueil générique.
- **Pages de lecture** (`LegalPage`) : `/mentions-legales` et `/confidentialite`. En-tête réduit (logo + « Retour au site », pas d'ancres), colonne de 68 ch sur le papier du jour, `h2` en gras simple, pied de page de nuit. Contenu dans `legal` (`content.ts`), valeurs `[À COMPLÉTER]` affichées telles quelles.

## Typographie
- Titres : **Bricolage Grotesque** condensée (`.display` : 800, `font-stretch: 75%`, interligne 0,92).
- Texte : **Schibsted Grotesk**.
- Contour (`.outline-text`) : trait `clamp(1.5px, 0.035em, 3px)` + remplissage couleur du fond (`paint-order`) pour masquer les chevauchements de la police variable.

## Objet 3D (Blender)
Boutique miniature (`Boutique3D`, `public/models/boutique.glb`, 1,9 Mo / ~465 Ko gzippé) dans un panneau de nuit entre Projets et Services : façade bleue, store rayé, vitrine garnie, lampadaire, vélo, terrasse, ~770 pièces jointes par matériau (31 maillages).
- La nuit s'allume à l'arrivée à l'écran : lampadaire qui grésille, lampes d'enseigne, boutique, étage, lucarne (émission des matériaux `Ampoule_*`, `Lumiere_Etage`, `Lumiere_Lucarne` + lumières ponctuelles sur les repères `Lumiere_*`). Un bouton « Éteindre / Allumer les lumières » rejoue la séquence.
- Glisser fait tourner, le pointeur incline ; l'enseigne drapeau (`Enseigne_Drapeau`) se balance. Ombres de la lune et du lampadaire, halo (bloom) sur les ampoules.
- Chargé en différé, image de repli `boutique-poster.webp` (rendu EEVEE) si mouvement réduit ou sans WebGL. Source : `assets/3d/boutique.blend` (objets séparés ; l'export joint par matériau).

## Règles
- Tout vient des tokens de `globals.css`. Exceptions assumées : les illustrations fictives (mini-site, vieux site, carte de recherche) et les couleurs des projets.
- Pas de surtitre, pas de bloc de gros chiffres. Un mouvement par zone.
- Pistes de défilement (raccourcies le 2026-10-25) : intro 140svh, hero 240svh sur grand écran (piste vidéo 200svh sur mobile), avant/après 180svh. Les Réalisations arrivent au sixième écran (5,6 à 1440 × 900, 6,1 à 375 × 812) au lieu du neuvième.
- Cibles tactiles d'au moins 44 px pour les boutons de la barre ; les liens de texte ont un `py` qui les amène à 36 px au moins.
- Toute boucle d'animation (`requestAnimationFrame`) s'arrête hors écran ou au repos : scène 3D, vidéo, lampe torche. La barre détecte les zones de nuit par `IntersectionObserver`, jamais en sondant le DOM au défilement.
- Aucun chiffre ou promesse non vérifié ; tout exemple est signalé comme fictif. « Projet client » = Secur-Feu et Save Toiture seulement.
- Prix : « à partir de 1 000 € » (site vitrine) — [À PRÉCISER] HT ou TTC.

## À compléter (`src/lib/content.ts`)
Lien Calendly, GitHub, LinkedIn (masqués tant qu'ils sont vides), stack réelle, avis clients (section masquée tant qu'il n'y en a pas), mentions légales (`legal` : forme juridique, SIRET, adresse ; hébergeur et durée de conservation à confirmer), réponse FAQ « modifier mon site moi-même » [À CONFIRMER].
