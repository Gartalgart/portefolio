# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Dirigeants et responsables de petites structures : artisans, commerçants, TPE/PME, associations, mairies et collectivités. Ils ne sont pas techniques, cherchent un prestataire fiable pour créer ou refondre leur site, et jugent surtout sur la clarté, la confiance et la proximité. Zone : Hauts-de-France, Île-de-France, télétravail.

## Product Purpose
Portfolio d'un développeur full-stack freelance (Rémy Denimal) dont le but est de convertir un visiteur en prise de contact : formulaire ou appel de 15 min. Succès = une demande de projet qualifiée.

## Positioning
Ce qu'un voisin ne peut pas copier tel quel (confirmé) : un seul interlocuteur du devis à la maintenance, proximité Hauts-de-France / Île-de-France, tarifs lisibles et sans surprise.

## Capabilities and Constraints
- Domaine : rd-solutions.fr, email pro contact@rd-solutions.fr.
- Site Next.js (App Router) déployé avec ses actions serveur ; contenu centralisé dans `src/lib/content.ts`.
- Thème jour (papier crème) par défaut, hero et contact de nuit ; thème sombre en option, mémorisé.
- Formulaire envoyé par email via Resend (`src/app/actions.ts`, variable `RESEND_API_KEY`). « Réserver un appel » ouvre un email tant que le lien Calendly n'est pas renseigné.
- Pages `/mentions-legales` et `/confidentialite` en place ; forme juridique, SIRET et adresse restent à renseigner dans `legal` (`content.ts`).
- Décisions ouvertes : GitHub, LinkedIn, Calendly, stack réelle, HT ou TTC du prix d'appel, hébergeur et durée de conservation à confirmer.

## Brand Commitments
Nom : Rémy Denimal, marque RD-Solutions. Direction validée le 20/10/2026 (voir `DESIGN.md`) : la nuit bleu profond qui s'allume, puis le jour papier crème ; un seul bleu d'action, vert-citron réservé aux étiquettes. Photo : `public/images/profile.jpg` (pull vert, sourire).

## Evidence on Hand
- 4 sites en ligne avec aperçus (`public/images/projects/`) : Secur-Feu et Save Toiture sont des projets clients (confirmé), Maison Léa Coiffure et Braise des démonstrations, signalées comme telles.
- La boutique du hero (« Atelier Morel ») et le « vieux site » de l'avant/après sont fictifs ; les images de la boutique filmée sont générées par IA et la page le dit.
- Aucun témoignage réel à ce jour : ne rien fabriquer.
- Aucune statistique mesurée. Retirés : « < 1 s » et « 100 % responsive ». « Réponse sous 24 h » seulement si l'utilisateur la confirme.

## Product Principles
1. Prouver plutôt que promettre : n'afficher que des faits vrais et vérifiables.
2. Parler le langage du client (résultats, tarifs, délais), pas celui de la technique.
3. Un seul geste final : prendre contact. Tout converge vers lui.
4. Proximité et humain avant la vitrine : visage, lieu, interlocuteur unique.
5. Sobre et rapide : la performance fait partie du message.

## Accessibility & Inclusion
Public non technique, parfois peu à l'aise avec le numérique : contrastes AA, navigation clavier, textes lisibles, mouvement réduit respecté.
