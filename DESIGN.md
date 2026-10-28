---
name: RD-Solutions
description: Le site d'un artisan du web, lettré comme le flanc d'une camionnette d'artisan.
colors:
  vinyle: "#c8361b"
  vinyle-fonce: "#a92c15"
  anthracite: "#1d2125"
  jante: "#565d64"
  carrosserie: "#f1f2f0"
  tole: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 11.2vw, 9.6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 75"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 75"
  chiffre:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    fontFeature: "'tnum' 1, 'lnum' 1"
rounded:
  none: "0px"
  vitre: "72px"
  full: "9999px"
spacing:
  gouttiere-mobile: "20px"
  gouttiere: "32px"
  section-mobile: "80px"
  section: "112px"
  conteneur: "1360px"
components:
  button-primary:
    backgroundColor: "{colors.vinyle}"
    textColor: "{colors.tole}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.vinyle-fonce}"
    textColor: "{colors.tole}"
  button-zone-vinyle:
    backgroundColor: "{colors.anthracite}"
    textColor: "{colors.tole}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
  button-zone-vinyle-hover:
    backgroundColor: "{colors.tole}"
    textColor: "{colors.anthracite}"
  input-case:
    backgroundColor: "{colors.tole}"
    textColor: "{colors.anthracite}"
    rounded: "{rounded.none}"
    padding: "10px 16px 12px"
  panneau-chantier:
    backgroundColor: "{colors.tole}"
    textColor: "{colors.anthracite}"
    rounded: "{rounded.none}"
  panneau-chantier-entete:
    backgroundColor: "{colors.anthracite}"
    textColor: "{colors.tole}"
    padding: "12px 20px"
  cachet-client:
    backgroundColor: "{colors.vinyle}"
    textColor: "{colors.tole}"
    typography: "{typography.label}"
    padding: "6px 10px"
  arret-tournee:
    backgroundColor: "{colors.vinyle}"
    textColor: "{colors.tole}"
    rounded: "{rounded.full}"
    size: "50px"
  nav:
    backgroundColor: "{colors.carrosserie}"
    textColor: "{colors.anthracite}"
    height: "64px"
---

# Design System: RD-Solutions

## Overview

**Creative North Star: "Le lettrage d'utilitaire"**

Le site se lit comme le flanc lettré d'une camionnette d'artisan : le nom en vinyle rouge géant, le métier, la zone, les prestations et le contact, lisibles à vingt mètres. Tout vient de cet objet : la carrosserie blanc cassé comme fond, le vinyle découpé pour les capitales larges et lourdes, la bande de livrée qui structure, les filets épais, le macaron cerclé. Chaque section reprend une pièce du véhicule ou de son métier : panneaux de chantier pour les réalisations, portes arrière pour les services, tournée numérotée pour la méthode, portière conducteur pour l'à-propos, bon de demande pour le contact.

La densité est celle d'un affichage, pas d'une brochure : peu de mots, très gros, posés à plat. Le système est plat et graphique, sans profondeur simulée ; la hiérarchie passe par la taille du lettrage, l'épaisseur des filets (3px anthracite) et l'aplat rouge. Thème clair seul : un véhicule se lit en plein jour (décision du 27/10/2026, pas de bascule de thème). Pas de 3D, pas de vidéo, pas de numéro de téléphone affiché pour l'instant.

Rejets confirmés : le portfolio de développeur (titre + photo + trois cartes, mode sombre technique), les ombres douces, les cartes arrondies, les dégradés.

**Key Characteristics:**
- Une seule famille (Archivo variable) déclinée sur l'axe de largeur : large pour le lettrage, normale pour le texte, étroite pour les panneaux.
- Vinyle rouge réservé au nom, à l'action et à la bande de livrée.
- Filets anthracite de 3px partout, angles droits partout sauf trois exceptions nommées.
- Statuts lisibles par la forme, jamais par la couleur seule.
- Un seul mouvement signature : le film de pose qui se décolle une fois au chargement.

## Colors

Une carrosserie claire, un vinyle rouge vermillon, un anthracite de pneu : la palette d'un utilitaire lettré, rien de plus.

### Primary
- **Vinyle rouge** (vinyle) : le nom en lettrage géant, chaque bouton d'action, la bande de livrée, le filet vertical des prestations, les arrêts de la tournée, le cachet « Projet client », le « Un seul » du macaron et le fond entier de la zone contact. Contraste 4,73 sur carrosserie ; texte blanc sur vinyle 5,25.
- **Vinyle foncé** (vinyle-fonce) : survol des boutons rouges et texte d'erreur du formulaire.

### Neutral
- **Anthracite** (anthracite) : texte courant, tous les filets et bordures, en-têtes des panneaux de chantier et du bon de demande, bande fine de la livrée, pied de page, bouton d'action dans la zone rouge. Contraste 14,6 sur carrosserie.
- **Gris jante** (jante) : texte secondaire (chapôs de section, descriptions, libellés `dt` des panneaux, libellés des cases du formulaire). Contraste 6,0 sur carrosserie.
- **Carrosserie** (carrosserie) : fond de page, barre de navigation, barre d'appel mobile, fond du bon de demande, `theme-color` du navigateur.
- **Tôle** (tole) : panneaux posés sur la carrosserie (panneaux de chantier, portes arrière, cadre du portrait, cases du formulaire) et fond plein des sections Méthode et FAQ ; aussi le blanc du texte sur rouge et sur anthracite.

### Named Rules
**The Zone Vinyle Rule.** Une zone entièrement rouge se déclare par la classe `.vinyle`, qui remappe les rôles : texte et filets blancs, secondaire rosé, action anthracite, focus blanc. Les composants ne savent rien de leur fond ; on ne recolore jamais un composant à la main pour le poser sur le rouge.

**The Vinyle Rare Rule.** Le rouge sert le nom, l'action et la livrée. Il ne sert jamais de décor de fond pour une carte ou un bloc de texte en dehors de la zone contact.

**The Couleur Seule Rule.** Un statut ne repose jamais sur la couleur seule : la forme (aplat plein contre contour pointillé) porte la différence.

## Typography

**Display Font:** Archivo variable, axe `wdth` (avec ui-sans-serif, system-ui, sans-serif)
**Body Font:** Archivo, largeur normale (100%)
**Label Font:** Archivo étroit (75%)

**Character:** Une seule grotesque, trois largeurs : capitales larges et lourdes comme du vinyle découpé pour les titres, grotesque sobre pour lire, capitales étroites pour les mentions de panneau et de porte.

### Hierarchy
- **Display** (900, clamp(3.4rem, 11.2vw, 9.6rem), interligne 0,9, capitales, largeur 125% dès 48rem et 112% en dessous) : le nom dans le premier écran, en vinyle rouge, sur deux lignes. Le métier dessous reprend le même lettrage en anthracite à clamp(1.5rem, 3vw, 2.6rem).
- **Headline** (900, clamp(2.4rem, 6vw, 5rem), interligne 0,9, capitales, largeur 125%) : titres de section et titre des pages légales (en rouge sur celles-ci). Même lettrage pour la marque dans la navigation et le pied de page.
- **Title** (800, clamp(1.6rem, 2.6vw, 2.2rem) pour les portes arrière, 1.125 à 1.25rem ailleurs, interligne 1, capitales, largeur 75%) : intitulés de service, d'arrêt, de valeur, nom sous le portrait, liste des prestations, email lettré du premier écran (en casse normale).
- **Body** (400, 1.125rem, interligne 1.625, largeur 52 à 56ch) : chapôs et paragraphes ; les réponses de FAQ montent à 62ch.
- **Label** (800, 0.875rem, capitales, largeur 75%) : libellés Pour / Besoin / Travaux / Par, cachets de statut, libellés des cases du formulaire.

### Named Rules
**The Trois Largeurs Rule.** On ne charge pas de seconde famille : la variété vient de l'axe de largeur d'Archivo (125, 100, 75) et du poids (900, 800, 400-700).

**The Chiffre Épinglé Rule.** Les numéros d'arrêt sont en chiffres tabulaires et alignés (`tnum`, `lnum`). Aucun prix ni montant n'apparaît sur le site (décision du 28/10/2026).

**The Deux-Points Rule.** En titre, une espace insécable précède le deux-points (« Au volant : moi »).

## Layout

Conteneur unique de 1360px centré, gouttières de 20px sur mobile et 32px dès 48rem. Les sections se succèdent bord à bord, séparées par un filet anthracite de 3px en haut, avec 80px de marge verticale sur mobile et 112px dès 48rem. L'alternance de fond carrosserie / tôle (Méthode, FAQ) et la zone rouge du contact rythment la page, jamais une ombre.

Le premier écran est une composition de flanc : nom à gauche et macaron à droite (macaron visible dès 64rem, à côté du bouton sur mobile), puis zone et prestations derrière un filet rouge de 8px, puis la bande de livrée pleine largeur (aplat rouge de 36px, 48px dès 48rem ; 6px de carrosserie ; bande anthracite de 8px), puis texte d'accroche, bouton et email lettré. Sur mobile, l'action passe avant les prestations.

Grilles : deux colonnes égales pour les réalisations et les portes arrière dès 48rem ; 5/7 pour à-propos et contact, 4/7 pour la FAQ dès 64rem ; tournée en sept colonnes dès 80rem, verticale en dessous. Sur mobile, une barre d'appel fixée en bas (bouton rouge « Réserver un appel » + lien « Écrire »), qui glisse en place une fois le premier écran passé et s'efface sur la section contact, pour ne jamais couvrir l'email lettré ni le formulaire ; le pied de page réserve la place en dessous (112px).

## Elevation & Depth

Système plat : aucune ombre portée, aucune élévation. La profondeur se lit par superposition d'aplats et de filets : une plaque tôle bordée de 3px anthracite posée sur la carrosserie, un en-tête anthracite plein en haut d'un panneau. La navigation collante se détache par son filet bas de 3px, pas par une ombre.

### Named Rules
**The Plat-Vinyle Rule.** Pas d'ombre, pas de dégradé sur une surface, une carte ou un bouton. Seul le film de pose, qui imite un matériau translucide en train de se décoller, porte une ombre de bord et un liseré intérieur ; ils disparaissent avec lui.

## Shapes

Angles droits partout. Trois exceptions seulement, chacune tirée du véhicule : le macaron « Un seul interlocuteur » (cercle, bordure 5px anthracite), les arrêts de la tournée (cercles de 50px), le coin supérieur gauche du portrait arrondi à 72px comme une vitre de portière. Les bordures sont pleines et épaisses : 3px anthracite pour les contours, les filets de section et les règles de FAQ . Aucun filet fin : à l'intérieur d'une même plaque, les éléments se séparent par l'espacement ou par un aplat de carrosserie (pied des panneaux de chantier). Le pointillé de 2 à 3px signale ce qui n'est pas encore réel : la démonstration, le prochain panneau à venir.

## Components

### Buttons
Des aplats nets, lettrés en gras, sans arrondi.
- **Shape:** angles droits (0px).
- **Primary:** fond vinyle, texte blanc gras, 16px x 28px en premier écran (14px x 24px ailleurs), flèche de 20px trait 2,5 à droite quand l'action engage.
- **Hover / Focus:** survol en vinyle foncé (transition de couleur seule) ; focus clavier par un contour vinyle de 3px décalé de 3px (blanc en zone rouge).
- **Zone vinyle:** dans la zone rouge, bouton anthracite à texte blanc, qui s'inverse en blanc / anthracite au survol.

### Liens
Texte anthracite gras souligné en vinyle (2 à 3px, décalage 0,2em), qui passe en vinyle au survol. L'email du premier écran est lettré à l'échelle d'un panneau (lettrage étroit en casse normale, clamp(1.5rem, 2.3vw, 2.1rem)).

### Cachets de statut
- **Projet client:** aplat vinyle, lettrage étroit blanc.
- **Démonstration:** contour pointillé blanc de 2px, même lettrage, sans fond. La forme suffit à distinguer les deux.

### Panneau de chantier (réalisations)
- **Corner Style:** angles droits.
- **Background:** tôle, bordure 3px anthracite ; en-tête anthracite plein (« Chantier web » en lettrage étroit + cachet), capture 16/10 séparée par un filet de 3px.
- **Shadow Strategy:** aucune (voir Elevation & Depth).
- **Contenu:** liste de définitions Pour / Besoin / Travaux / Par, puis les éléments du site en mots de client et le lien « Voir [domaine] ».
- **Suite:** un panneau pointillé de 3px « Le prochain panneau peut porter votre nom » avec un bouton rouge ferme la série.

### Portes arrière (services)
Une plaque tôle unique, bordée de 3px, coupée en deux portes par une jointure de 3px ; les deux portes partagent les mêmes rangées pour que leurs filets s'alignent. Une poignée (15 x 64px, bordure 3px, fond carrosserie) est posée sur la jointure dès 48rem. Chaque porte porte deux prestations, titre lettré et description, sans prix.

### La tournée (méthode)
Une route anthracite de 6px, horizontale dès 80rem, verticale en dessous ; sept arrêts circulaires de 50px (vinyle, bordure 3px anthracite, numéro blanc en lettrage tabulaire).

### Portière conducteur (à propos)
Portrait 4/5 dans un cadre tôle bordé de 3px, avec la vitre arrondie à 72px en haut à gauche ; légende avec le nom en lettrage étroit et la zone en gris jante.

### Inputs / Fields (bon de demande)
- **Style:** chaque champ est une case de carnet de bons : cellule tôle bordée de 3px anthracite, libellé en lettrage étroit gris jante en haut, saisie 1.125rem en dessous, sans contour propre. Le formulaire entier est une plaque carrosserie bordée de 3px avec un en-tête anthracite « Bon de demande ».
- **Focus:** la bordure de la case passe en vinyle ; curseur de saisie vinyle.
- **Error:** message en vinyle foncé gras, annoncé en `alert` ; la confirmation passe en `status`.

### FAQ
`details` natifs séparés par des règles de 3px anthracite, question en gras 800, signe plus vinyle qui tourne de 45° à l'ouverture.

### Navigation
Plaque carrosserie collante de 64px, filet bas de 3px. Marque en lettrage à gauche, liens gras soulignés en vinyle au survol dès 64rem, bouton rouge « Réserver un appel » dès 40rem. Menu mobile : bouton carré bordé de 3px, liste en lettrage 1.5rem séparée par des filets fins. Les pages légales reprennent la plaque avec un simple lien « Retour au site ».

### Pied de page
Aplat anthracite, marque en lettrage blanc, liens légaux soulignés en vinyle.

### Film de pose (signature)
Au chargement, un film de transfert translucide crème couvre le nom puis se décolle une fois de gauche vers la droite (1,1 s, cubic-bezier(0.16, 1, 0.3, 1), 0,35 s de délai), avec une ombre de bord qui suit la découpe. Le nom reste lisible à travers le film dès la première image. Mouvement réduit : pas de film, état final directement.

## Do's and Don'ts

### Do:
- **Do** poser chaque nouvelle surface comme une plaque tôle bordée de 3px anthracite sur la carrosserie, angles droits.
- **Do** réserver le vinyle au nom, à l'action, à la bande de livrée et aux repères d'ordre (arrêts).
- **Do** déclarer une zone rouge par `.vinyle` et laisser les rôles se remapper.
- **Do** distinguer un statut par la forme (aplat plein contre pointillé), en plus de la couleur.
- **Do** composer les titres en lettrage large 900 et les mentions en lettrage étroit 800, avec chiffres tabulaires pour tout montant ou numéro.
- **Do** tirer chaque nouvelle section d'une pièce ou d'un document du métier (panneau, porte, bon, tournée).
- **Do** garder le film de pose comme seul mouvement d'entrée, et son absence sous mouvement réduit.

### Don't:
- **Don't** ajouter d'ombre portée, de dégradé ou de flou sur une surface ou un bouton.
- **Don't** arrondir un angle en dehors du macaron, des arrêts et de la vitre de portière.
- **Don't** réintroduire de thème sombre, de bascule de thème, de 3D ou de vidéo.
- **Don't** bâtir une section en grille de cartes à icône (le portfolio de développeur en trois cartes).
- **Don't** poser de surtitre en petites capitales au-dessus d'un titre de section.
- **Don't** charger une seconde famille de caractères.
- **Don't** afficher de numéro de téléphone tant qu'il n'est pas fourni.

## À compléter

Éléments en attente, listés dans INFOS-A-FOURNIR.md : lien Calendly, GitHub, LinkedIn, champs des mentions légales, régime de TVA pour les mentions légales, une réponse de FAQ, vrais témoignages (la section reste masquée tant qu'aucun avis n'est renseigné).
