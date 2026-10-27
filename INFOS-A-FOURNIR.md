# Informations à fournir

Réponds directement sous chaque question. Une fois rempli, ce fichier sert à compléter `legal` et `site` dans `src/lib/content.ts`, puis à déployer.

Contexte : le site publié sur rd-solutions.fr n'a pas encore de pages Mentions légales et Confidentialité. Elles sont prêtes dans le code et attendent ces informations (obligation LCEN et RGPD, le formulaire collecte des données personnelles).

## Juridique (bloquant pour la mise en ligne)

1. **Forme juridique** : entrepreneur individuel, micro-entreprise, société (laquelle) ?
   Si tu es entrepreneur individuel ou micro-entrepreneur, la mention « EI » doit suivre ton nom : elle sera ajoutée automatiquement.
   > Réponse :

2. **Numéro SIRET** :
   > Réponse :

3. **Adresse professionnelle** (une domiciliation convient si tu ne veux pas afficher ton domicile) :
   > Réponse :

4. **Durée de conservation des demandes restées sans suite** (proposition : trois ans après le dernier échange) :
   > Réponse :

5. **TVA** : franchise en base (« TVA non applicable, art. 293 B du CGI ») ou assujetti ? Le prix « à partir de 1 000 € » est-il HT ou TTC ?
   > Réponse :

## Contenu du site (non bloquant)

6. **Lien de réservation** Calendly ou Cal.com pour l'appel de 15 min (sinon le bouton ouvre un email) :
   > Réponse :

7. **GitHub et LinkedIn** (masqués tant qu'ils sont vides) :
   > Réponse :

8. **Stack réelle** (plus affichée sur le site depuis la refonte ; utile seulement pour un futur CV ou LinkedIn) :
   > Réponse :

9. **FAQ « Pourrai-je modifier mon site moi-même ? »** : oui, non, selon les projets ?
   > Réponse :

10. **Avis clients** : Secur-Feu et Save Toiture accepteraient-ils de donner un avis (nom, activité, ville, une ou deux phrases) ?
    > Réponse :

## À faire de ton côté (hors code)

- Vérifier dans la boîte contact@rd-solutions.fr la réception du message de test « Projet web — Test Claude (phase 0) » envoyé le 27/10, puis le supprimer.
- Chez OVH, ajouter un enregistrement TXT `_dmarc` avec la valeur `v=DMARC1; p=none; rua=mailto:contact@rd-solutions.fr`.
