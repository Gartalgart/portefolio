# DESIGN.md — Portfolio Rémy Denimal

## Direction (validée)
Moderne, tech, très épuré (famille Vercel / Linear / Stripe). Le travail montré avant les mots.
- **Palette** : noir pur `#050505` + texte `#ededed`, un seul bleu (`#2563eb` boutons, `#6ea8fe` liens en sombre). Thème clair disponible (`#fafafa`), choix mémorisé.
- **Moment signature** : trois vrais sites en fenêtres de navigateur 3D dans le hero, qui suivent la souris (`HeroStage`). Mouvement réduit : pose fixe.
- **Projets** : grandes cartes qui s'empilent au scroll (sticky, CSS pur) ; chaque site se teste en direct (iframe à la demande). Secur-Feu interdit l'affichage en cadre (`X-Frame-Options`) : capture + lien.

## Tokens (`src/app/globals.css`)
`--bg --surface --surface-2 --fg --muted --line --line-strong --primary --primary-fg --link --glass --shadow`. Aucune couleur en dur.
Élévation : bordure 1px translucide **ou** ombre. Rayons : 12 px (fenêtres), 24 px (cartes), pilules pour boutons et étiquettes.

## Typographie
Geist (texte et titres, 600, tracking −0.04em), Geist Mono uniquement pour l'URL dans les fenêtres de navigateur.

## Règles
- Pas de surtitres, pas de bloc de gros chiffres, pas de dégradé, pas de décor sans fonction.
- Aucun chiffre ou promesse non vérifié. « Projet client » = Secur-Feu et Save Toiture seulement.
- Prix : « à partir de 1 000 € » (site vitrine) — [À PRÉCISER] HT ou TTC.
- Un seul mouvement par zone : entrée des fenêtres + tilt (hero), empilement (projets).

## À compléter (`src/lib/content.ts`)
GitHub, LinkedIn, Calendly, email pro, domaine, stack réelle, avis clients (section masquée tant qu'il n'y en a pas), mentions légales.
