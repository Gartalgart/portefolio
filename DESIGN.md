# DESIGN.md — Portfolio Rémy Denimal

## Monde visuel : la devanture de boutique
Le site est une façade de commerce. Public : artisans, commerçants, associations, mairies, qui reconnaissent immédiatement l'objet.
- **Nuit (défaut)** : façade vert bouteille, enseigne néon ambre allumée, halo réel autour du tube.
- **Jour** : façade plâtre, tubes éteints (verre coloré, sans halo). La bascule jour/nuit = enseigne allumée ou éteinte.
- **Mode** : Experience. Le travail (les sites réels) mène la page.

## Moments signature (un seul chacun)
1. **Rideau métallique** : se lève au chargement du hero, en CSS pur, supprimé en mouvement réduit.
2. **Enseigne néon** : « Rémy Denimal » en contour lumineux ; une seule lettre vacille.
3. **Vitrines** : sur grand écran, le scroll vertical fait défiler les vitrines horizontalement ; chaque site se teste en direct (iframe à la demande). Secur-Feu interdit l'affichage en cadre (`X-Frame-Options`), il reste en capture + lien.
4. **Bandeau lumineux** défilant ; **la carte** des services avec pointillés de menu et prix.

## Tokens (`src/app/globals.css`)
`--bg --surface --surface-2 --fg --muted --line --accent --accent-fg --tube --tube-glow --slat --awning-a/b --shadow`. Aucune couleur en dur.
Le halo n'existe que sur le tube (`.neon`, `.neon-fill`) ; ailleurs, élévation par bordure ou ombre, jamais les deux.

## Typographie
Bricolage Grotesque (affichage, 800, tracking −0.035em) + Geist (texte) ; Geist Mono uniquement pour l'URL dans la fenêtre de navigateur.

## Règles
- Pas de surtitres, pas de bloc de gros chiffres, pas de dégradé de texte.
- Aucun chiffre ou promesse non vérifié. « Projet client » = Secur-Feu et Save Toiture seulement.
- Prix : « à partir de 1 000 € » (site vitrine) — [À PRÉCISER] HT ou TTC.
- Accessibilité : thème AA dans les deux modes, mouvement réduit respecté, focus clavier ramène la vitrine à l'écran.

## À compléter (`src/lib/content.ts`)
GitHub, LinkedIn, Calendly, email pro, domaine, stack réelle, avis clients (la section se masque tant qu'il n'y en a pas), mentions légales.
