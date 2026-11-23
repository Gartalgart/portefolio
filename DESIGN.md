---
name: RD-Solutions
description: Une vitrine blanche et bleu-gris où les sites livrés sont montrés en grand, un par tuile.
colors:
  nuit: "#1a252f"
  marine: "#2c3e50"
  ardoise: "#6c7a89"
  ardoise-texte: "#55626f"
  ardoise-sur-nuit: "#a9b4bf"
  filet: "#dde1e5"
  brume: "#f1f3f5"
  blanc: "#ffffff"
typography:
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.6vw, 5.4rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
  chiffre:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    fontFeature: "'tnum' 1, 'lnum' 1"
rounded:
  focus: "4px"
  apercu: "12px"
  tuile: "16px"
  pastille: "999px"
spacing:
  marge-tuile: "12px"
  gouttiere-mobile: "20px"
  gouttiere: "48px"
  section-mobile: "80px"
  section: "128px"
  conteneur-tuile: "1200px"
  conteneur: "1296px"
components:
  bouton:
    backgroundColor: "{colors.nuit}"
    textColor: "{colors.blanc}"
    rounded: "{rounded.pastille}"
    padding: "0.8em 1.45em"
  bouton-hover:
    backgroundColor: "{colors.marine}"
    textColor: "{colors.blanc}"
  bouton-depliant:
    backgroundColor: "{colors.brume}"
    textColor: "{colors.nuit}"
    rounded: "{rounded.pastille}"
    padding: "12px 24px"
  bouton-depliant-hover:
    backgroundColor: "{colors.filet}"
    textColor: "{colors.nuit}"
  tuile-brume:
    backgroundColor: "{colors.brume}"
    textColor: "{colors.nuit}"
    rounded: "{rounded.tuile}"
  tuile-nuit:
    backgroundColor: "{colors.nuit}"
    textColor: "{colors.blanc}"
    rounded: "{rounded.tuile}"
  tuile-marine:
    backgroundColor: "{colors.marine}"
    textColor: "{colors.blanc}"
    rounded: "{rounded.tuile}"
  tuile-formulaire:
    backgroundColor: "{colors.blanc}"
    textColor: "{colors.nuit}"
    rounded: "{rounded.tuile}"
    padding: "32px"
  champ:
    backgroundColor: "{colors.brume}"
    textColor: "{colors.nuit}"
    rounded: "{rounded.apercu}"
    padding: "10px 16px 12px"
  nav:
    backgroundColor: "{colors.blanc}"
    textColor: "{colors.nuit}"
    height: "56px"
---

# Design System: RD-Solutions

## Overview

**Creative North Star: "La vitrine"**

Le site est une vitrine : une phrase, une action, puis les sites livrés montrés en grand, un par tuile. La page est blanche ; ce qui s'y pose est une tuile pleine, brume, marine ou bleu nuit, aux coins de 16px, sans bordure. Chaque tuile de réalisation porte un nom, une ligne de statut, une phrase, un lien, et l'aperçu du site coupé par son bord bas, comme un objet posé derrière une vitre.

La densité est faible et l'air fait le travail : sections espacées de 80px sur mobile et de 128px au-delà, titres demi-gras serrés, texte secondaire en ardoise. Une seule famille de caractères, une seule famille de bleu-gris, aucune couleur d'accent : l'action se reconnaît à sa forme (une pastille bleu nuit), pas à une teinte. Thème clair seul, sans bascule. Ni 3D, ni vidéo, ni numéro de téléphone, ni prix affiché.

Rejets confirmés : le portfolio de développeur (photo, liste de technos, trois cartes d'icônes) et l'ancien monde « lettrage d'utilitaire » (rouge vermillon, capitales larges, filets épais), remplacé le 16/11/2026.

**Key Characteristics:**
- Page blanche, tuiles pleines brume, marine ou bleu nuit à coins de 16px, sans bordure ni ombre.
- Une seule famille (Hanken Grotesk) : titres demi-gras serrés, texte normal.
- Aucune couleur d'accent : cinq tons de bleu-gris, l'action est une pastille bleu nuit.
- Les aperçus de sites sont les seules images de la page, et les seuls éléments à porter une ombre.
- Filets fins de 1px pour les listes ; statut d'une réalisation toujours écrit en toutes lettres.

## Colors

Une seule famille de bleu-gris, du blanc au bleu nuit, imposée par le client ; deux dérivés d'ardoise et un filet ont été ajoutés pour tenir le contraste.

### Primary
- **Bleu nuit** (nuit) : texte courant, boutons en pastille, grande tuile de réalisation, tuile de contact, monogramme de l'icône. Blanc sur nuit : 15,6:1.
- **Marine** (marine) : survol des boutons, liens d'action et liens de texte sur fond clair, tuiles de réalisation du damier, contour de focus, sélection, curseur de saisie. Blanc sur marine : 11:1.

### Neutral
- **Blanc** (blanc) : fond de page, tuile du formulaire, barre du haut et barre d'action mobile (translucides), texte sur tuile sombre.
- **Brume** (brume) : tuiles claires (réalisations, méthode, avis, repli sans portrait), champs du formulaire, bouton dépliant, survol du bouton de menu.
- **Ardoise** (ardoise) : repères non textuels sur fond clair : signe plus de la FAQ, puces des listes légales, barre de défilement. 4,4:1 sur blanc, 3,95:1 sur brume : trop claire pour du petit texte.
- **Ardoise texte** (ardoise-texte) : tout le texte secondaire sur fond clair (chapôs, descriptions, légendes, libellés de champ, liens de la barre du haut, pied de page). 6,2:1 sur blanc, 5,6:1 sur brume.
- **Ardoise sur nuit** (ardoise-sur-nuit) : le même rôle sur tuile sombre. 7,4:1 sur nuit, 5,2:1 sur marine.
- **Filet** (filet) : traits de 1px entre les lignes de liste, sous la barre du haut, sous l'aperçu du premier écran ; survol du bouton dépliant. Sur tuile sombre, le filet devient un blanc à 16 %.

### Named Rules
**The Sur-Nuit Rule.** Une tuile sombre se déclare par la classe `.sur-nuit`, qui passe le texte en blanc et remappe le ton secondaire, le filet, le focus et la sélection. Les composants ne savent rien de leur fond. Une tuile blanche posée dans une zone sombre (le formulaire) rétablit elle-même les valeurs claires.

**The Sans Accent Rule.** Aucune teinte hors de la famille bleu-gris. L'action se distingue par sa forme pleine en pastille, jamais par une couleur vive. Seule exception : le résultat d'envoi du formulaire, en encadré vert (`succes` #1c5b3a sur `succes-fond` #e6f2ea) ou rouge (`erreur` #8f1d17 sur `erreur-fond` #fbeceb), toujours doublé d'une icône et d'un titre.

**Fenêtre d'aperçu.** Dans le premier écran, le site montré en exemple est présenté dans une fenêtre de navigateur (barre brume, trois points, adresse du site), entière, large de 1040px au plus, coins de 16px et ombre d'aperçu : elle le sépare de la navigation du site.

**The Ardoise Repère Rule.** L'ardoise d'origine sert aux repères non textuels. Tout petit texte secondaire prend l'ardoise texte sur clair, l'ardoise sur nuit sur sombre.

**The Statut Écrit Rule.** Le statut d'une réalisation (« projet client » ou « démonstration ») est écrit en toutes lettres sous le nom ; il n'est jamais porté par la couleur de la tuile.

## Typography

**Display Font:** Hanken Grotesk (avec ui-sans-serif, system-ui, sans-serif)
**Body Font:** Hanken Grotesk

**Character:** Une grotesque unique, calme et lisible. Les titres sont demi-gras, serrés et équilibrés sur leurs lignes, en casse normale ; le texte reste en graisse normale. La hiérarchie vient de la taille et de la graisse, jamais des capitales.

### Hierarchy
- **Display** (600, clamp(2.5rem, 6.6vw, 5.4rem), interligne 1,06, approche -0,025em, 14ch au plus) : la phrase du premier écran, centrée.
- **Headline** (600, clamp(2rem, 4.6vw, 3.6rem), mêmes réglages) : titres de section centrés. Les titres de section en colonne descendent à clamp(2rem, 4.2vw, 3.2rem) ; celui du contact et celui des pages légales montent à 4rem.
- **Title** (600, clamp(1.3rem, 2.2vw, 1.75rem) pour les prestations, 1.25rem pour les étapes et les engagements, clamp(1.8rem, 3.4vw, 2.9rem) pour le nom d'une grande tuile, 1.5rem pour une petite tuile et le menu mobile).
- **Lead** (400, 1.125rem, ardoise texte, 40 à 52ch) : la phrase sous un titre de section. Celle du premier écran va de 1.1rem à 1.35rem.
- **Body** (400, 1.0625rem, interligne 1,55, 44 à 62ch, 68ch pour les pages légales).
- **Label** (600, 0.875rem) : libellés de champ ; les légendes d'image et le pied de page prennent la même taille en graisse normale. Marque dans la barre du haut : 700, 1.125rem, approche serrée.
- **Chiffre** (600, chiffres tabulaires alignés) : numéros d'étape à deux chiffres (01 à 07).

### Named Rules
**The Une Famille Rule.** Une seule famille, Hanken Grotesk, pour le site comme pour l'image de partage. Trois graisses : 400 pour lire, 600 pour les titres, les boutons et les liens d'action, 700 pour la marque.

**The Titre Rule.** Tout titre passe par l'utilitaire `titre` : demi-gras, approche -0,025em, interligne 1,06, lignes équilibrées. Pas de capitales, pas de graisse plus lourde.

## Layout

Deux largeurs cohabitent. Les sections de texte tiennent dans un conteneur centré de 1296px, avec des gouttières de 20px sur mobile et de 48px dès 48rem. Les tuiles, elles, vont presque d'un bord à l'autre de la fenêtre, avec 12px de marge et 12px entre elles ; leur contenu se recentre sur 1200px. Les sections s'espacent de 80px sur mobile et de 128px dès 48rem, sans filet ni changement de fond entre elles.

Le premier écran est centré : phrase, explication, bouton et lien, puis l'aperçu du premier projet client sur toute la largeur du conteneur (16/10, 16/8,5 dès 48rem), coins hauts arrondis, légende sous un filet. Les titres de Réalisations et Prestations sont centrés ; Méthode, À propos, FAQ et Contact se composent en deux colonnes 5/7 (4/7 pour la FAQ), dès 48rem ou 64rem selon la section, le titre restant collé en haut pendant la lecture dans Méthode et FAQ.

Réalisations : une grande tuile sur deux colonnes, puis un damier de quatre tuiles en deux colonnes dès 48rem ; les autres se déplient en petites tuiles brume sur deux colonnes dès 40rem et trois dès 64rem. Dans chaque tuile, l'aperçu reste collé au bord bas quelle que soit la longueur du texte.

Sur mobile, une barre d'action fixée en bas (bouton « Devis gratuit » et lien « Email ») glisse en place une fois le premier écran passé et s'efface sur la section contact ; le pied de page lui réserve 112px. Les ancres s'arrêtent 4,5rem sous le haut de la fenêtre pour dégager la barre collante.

## Elevation & Depth

Système plat. La profondeur vient de la superposition de tons : une tuile brume, marine ou nuit sur la page blanche, une tuile blanche sur la tuile nuit. Les deux barres collantes (haut et action mobile) sont blanches translucides (80 à 85 %) avec un flou d'arrière-plan et un filet de 1px ; c'est le seul usage du flou.

### Shadow Vocabulary
- **Aperçu** (`shadow-apercu`, `box-shadow: 0 24px 60px -18px rgb(26 37 47 / 0.38)`) : la seule ombre du site, sous chaque capture de site (premier écran et tuiles de réalisation).

### Named Rules
**The Ombre d'Aperçu Rule.** Seules les captures de sites portent une ombre : elle les détache comme un objet montré. Tuiles, boutons, champs et barres n'en portent jamais.

## Shapes

Tout est arrondi, à quatre rayons. Les tuiles et le portrait : 16px. Ce qui se pose dans une tuile (aperçu de site, coins hauts seulement ; champ de formulaire) : 12px. Les actions : pastille pleine (999px) pour les boutons, le bouton dépliant, le bouton de menu rond de 40px et le lien d'évitement. Le contour de focus : 2px marine décalé de 3px, coins de 4px, blanc sur tuile sombre.

Aucune bordure sur une tuile. Les seuls traits sont des filets de 1px : entre les lignes d'une liste (prestations, étapes, engagements, FAQ, menu mobile), sous la barre du haut, au-dessus de la barre d'action, sous l'aperçu du premier écran. Les aperçus sont coupés par le bord bas de leur tuile. L'icône du site reprend la forme : monogramme « RD » blanc sur un carré bleu nuit aux coins arrondis.

## Components

### Buttons
Une pastille pleine, calme, sans effet.
- **Shape:** pastille (999px).
- **Primary:** fond bleu nuit, texte blanc demi-gras, 0,8em x 1,45em, sans retour à la ligne ; flèche de 19px à droite sur le bouton d'envoi. Version compacte dans la barre du haut (0,5em x 1,1em, 0.9rem), pleine largeur dans le formulaire et la barre d'action mobile.
- **Hover / Focus:** survol en marine (transition de fond 0,2 s, aucun déplacement) ; focus par le contour global. En cours d'envoi : opacité 70 %, curseur d'attente.
- **Dépliant:** pastille brume à texte bleu nuit demi-gras et chevron qui se retourne à l'ouverture ; survol en filet. Ouvre le reste des réalisations.
- Un utilitaire `bouton-clair` (pastille blanche pour fond sombre, survol brume) est défini dans la feuille de styles mais n'est employé par aucune surface livrée.

### Liens
- **Lien d'action:** texte demi-gras marine (blanc sur tuile sombre), souligné au survol, suivi d'une flèche de 17px quand il mène ailleurs (flèche droite vers une ancre, flèche en diagonale vers un autre site).
- **Lien de texte:** demi-gras marine, souligné (pages légales, mention sous le formulaire).
- **Lien de barre et de pied:** ardoise texte, bleu nuit au survol.

### Tuile de réalisation
- **Corner Style:** 16px, contenu coupé au bord.
- **Background:** bleu nuit pour la grande tuile, puis damier brume / marine ; brume pour les petites tuiles dépliées.
- **Shadow Strategy:** aucune sur la tuile ; l'aperçu porte la sienne (voir Elevation & Depth).
- **Border:** aucune.
- **Contenu:** centré : nom en titre, ligne « catégorie · projet client » ou « démonstration » en ton secondaire, une phrase de 44ch au plus, lien « Voir le site », puis l'aperçu 16/10 (880px au plus, coins hauts de 12px) collé au bas.
- **Internal Padding:** 40px en haut et 20px sur les côtés sur mobile, 64px et 48px dès 48rem ; 36px et 24px pour une petite tuile.

### Lignes à filets
Prestations, étapes, engagements et questions sont des listes, pas des cartes : chaque ligne s'ouvre par un filet de 1px, avec 24 à 28px de marge verticale. Prestations : nom à gauche, bénéfice à droite (5/7). Étapes : numéro tabulaire à deux chiffres dans une colonne de 2,25rem, puis titre et texte. Les quatre points du contact s'ouvrent par une coche de 20px en ton secondaire.

### Inputs / Fields
- **Style:** cellule brume aux coins de 12px, sans bordure ; libellé demi-gras de 0.875rem en ardoise texte au-dessus, saisie de 1.125rem en bleu nuit sur fond transparent. Le formulaire est une tuile blanche (16px, 20px de marge intérieure, 32px dès 48rem) posée sur la tuile nuit du contact.
- **Focus:** anneau marine de 2px autour de la cellule ; curseur de saisie marine.
- **Error / Disabled:** message demi-gras sous le bouton, annoncé en `alert` ; la confirmation passe en `status`.

### FAQ
`details` natifs séparés par des filets de 1px ; question demi-grasse (1.125rem, 1.25rem dès 48rem), signe plus ardoise de 22px qui tourne de 45° à l'ouverture (0,2 s), réponse en ton secondaire sur 62ch.

### Navigation
Barre collante de 56px, blanche à 80 % avec flou d'arrière-plan, filet bas de 1px. Marque en gras à gauche ; ancres en ardoise texte (0.9rem) dès 64rem, bleu nuit au survol ; pastille « Devis gratuit » compacte dès 40rem. Sous 64rem, bouton de menu rond de 40px (survol brume) ; le menu s'ouvre sous la barre en liste de titres de 1.5rem séparés par des filets, et se ferme à Échap. Les pages légales gardent la barre, opaque, avec un seul lien « Retour au site ».

### Barre d'action mobile
Sous 48rem : barre fixée en bas, blanche à 85 % avec flou, filet haut de 1px ; bouton pastille pleine largeur et lien « Email ». Elle glisse en 0,3 s, sans transition sous mouvement réduit.

### Pied de page
Une ligne sur fond blanc, 0.875rem en ardoise texte : marque, zone, liens légaux soulignés au survol.

### Image de partage
1200 x 630, fond blanc : marque en gras, la phrase du premier écran en demi-gras bleu nuit, pied sous filet en ardoise texte avec le domaine en marine.

## Do's and Don'ts

### Do:
- **Do** poser chaque nouveau bloc fort comme une tuile pleine (brume, marine ou bleu nuit) aux coins de 16px, à 12px du bord de la fenêtre, sans bordure ni ombre.
- **Do** déclarer une tuile sombre par `.sur-nuit` et laisser le ton secondaire, le filet et le focus se remapper.
- **Do** composer tout titre avec `titre` (600, approche -0,025em, interligne 1,06), en casse normale.
- **Do** prendre l'ardoise texte pour le texte secondaire sur clair et l'ardoise sur nuit sur sombre.
- **Do** écrire le statut d'une réalisation en toutes lettres (« projet client », « démonstration »).
- **Do** présenter une énumération en lignes séparées par un filet de 1px plutôt qu'en cartes.
- **Do** garder les mouvements au changement de couleur, à la rotation d'un signe et au glissement de la barre d'action, tous coupés ou neutres sous mouvement réduit.

### Don't:
- **Don't** introduire de teinte hors de la famille bleu-gris, ni de couleur d'accent pour l'action.
- **Don't** mettre d'ombre ailleurs que sous une capture de site, ni de dégradé sur une surface.
- **Don't** border une tuile, ni épaissir un filet au-delà de 1px.
- **Don't** composer de petit texte dans l'ardoise d'origine : elle n'atteint pas 4,5:1.
- **Don't** charger une seconde famille de caractères, ni passer un titre en capitales.
- **Don't** bâtir une section en grille de cartes à icône (le portfolio de développeur en trois cartes).
- **Don't** réintroduire de thème sombre, de bascule de thème, de 3D ou de vidéo.
- **Don't** afficher de numéro de téléphone, de prix ni de montant.
