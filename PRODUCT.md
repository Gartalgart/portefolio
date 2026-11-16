# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Dirigeants et responsables de petites structures : artisans, commerçants, TPE/PME, associations, mairies et collectivités. Ils ne sont pas techniques, cherchent un prestataire fiable pour créer ou refondre leur site, et jugent surtout sur la clarté, la confiance et la proximité. Zone : Hauts-de-France, Île-de-France, télétravail.

## Product Purpose
Portfolio d'un développeur full-stack freelance (Rémy Denimal) dont le but est de convertir un visiteur en prise de contact : formulaire ou email de demande de devis gratuit. Succès = une demande de projet qualifiée.

## Positioning
Ce qu'un voisin ne peut pas copier tel quel (confirmé) : un seul interlocuteur du devis à la maintenance, proximité Hauts-de-France / Île-de-France, prix annoncé dans le devis avant de commencer, sans surprise.

## Capabilities and Constraints
- Domaine : rd-solutions.fr, email pro contact@rd-solutions.fr.
- Site Next.js (App Router) déployé avec ses actions serveur ; contenu centralisé dans `src/lib/content.ts`.
- Thème clair seul, pas de bascule de thème (décision du 27/10/2026). Pas de 3D ni de vidéo.
- Formulaire envoyé par email via Resend (`src/app/actions.ts`, variable `RESEND_API_KEY`). « Devis gratuit » mène au formulaire (`quoteHref` = `#contact`) ; l'email pré-rempli (`quoteMailHref`) reste proposé en second choix, car un lien mailto ne fait rien sans messagerie configurée (décision du 10/11/2026). Pas de réservation d'appel (décision du 09/11/2026).
- Pages `/mentions-legales` et `/confidentialite` en place ; forme juridique, SIRET et adresse restent à renseigner dans `legal` (`content.ts`).
- Aucun prix ni montant affiché sur le site (décision du 28/10/2026) : le prix se donne dans le devis gratuit, envoyé par email.
- Décisions ouvertes : GitHub, LinkedIn, régime de TVA pour les mentions légales, durée de conservation à confirmer. Hébergeur confirmé : Vercel.

## Brand Commitments
Marque : RD-Solutions. Le site parle au nom de la marque, en tournures neutres, sans « je » ni « nous » (décision du 16/11/2026) ; le fondateur, Rémy Denimal, n'est nommé que dans « À propos » et les mentions légales. Direction validée le 16/11/2026 (voir `DESIGN.md`) : « vitrine », minimaliste, beaucoup de blanc, palette bleu-gris imposée (#FFFFFF, #F1F3F5, #6C7A89, #2C3E50, #1A252F), les sites livrés montrés en grand. Elle remplace le « lettrage d'utilitaire » du 27/10/2026. Pas de numéro de téléphone affiché pour l'instant (reconfirmé le 10/11/2026). Photo : `public/images/profile.webp` (portrait 4:5, pull sombre, lunettes rondes), affichée dans « À propos » depuis le 10/11/2026.

## Evidence on Hand
- 14 sites et applications en ligne avec aperçus (`public/images/projects/`, liste dans `src/lib/content.ts`) : Secur-Feu et Save Toiture sont des projets clients (confirmé), les 12 autres des démonstrations autour de clients fictifs, signalées comme telles.
- Le premier écran montre l'aperçu du site Secur-Feu (projet client).
- Aucun témoignage réel à ce jour : ne rien fabriquer.
- Aucune statistique mesurée. Retirés : « < 1 s » et « 100 % responsive ». « Réponse sous 24 h » seulement si l'utilisateur la confirme.

## Product Principles
1. Prouver plutôt que promettre : n'afficher que des faits vrais et vérifiables.
2. Parler le langage du client (résultats, délais, ce qui est inclus), pas celui de la technique.
3. Un seul geste final : prendre contact. Tout converge vers lui.
4. Proximité et humain avant la vitrine : visage, lieu, interlocuteur unique.
5. Sobre et rapide : la performance fait partie du message.

## Accessibility & Inclusion
Public non technique, parfois peu à l'aise avec le numérique : contrastes AA, navigation clavier, textes lisibles, mouvement réduit respecté.
