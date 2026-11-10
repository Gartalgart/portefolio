// Tout le contenu éditable est ici. Les valeurs marquées [À COMPLÉTER] sont à confirmer.
export const site = {
  brand: "RD-Solutions", // logo, titre de l'onglet, partages
  name: "Rémy Denimal",
  role: "Créateur de sites internet",
  url: "https://rd-solutions.fr",
  email: "contact@rd-solutions.fr",
  // [À COMPLÉTER] Les liens vides ne sont pas affichés : rien ne renvoie vers une page d'accueil générique.
  github: "",
  linkedin: "",
  location: "Hauts-de-France · Île-de-France · à distance",
  // Portrait de « À propos » (4:5, ex. "/images/profile.jpg" dans public/). Vide : un panneau lettré le remplace.
  photo: "/images/profile.webp",
};

// Réseaux affichés dans Contact : seulement ceux qui ont un vrai lien.
export const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
].filter((s) => s.href);

// Pages légales (pied de page). Les valeurs [À COMPLÉTER] s'affichent telles quelles tant qu'elles ne sont pas renseignées.
export const legalPages = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
];
export const legal = {
  updated: "27 octobre 2026",
  publisher: site.name, // éditeur et directeur de la publication
  // Micro-entrepreneur (confirmé le 10/11/2026) : la mention « EI » suit le nom dans les mentions légales.
  status: "Entrepreneur individuel (EI), sous le régime de la micro-entreprise",
  siret: "131 478 620 00019", // fourni le 10/11/2026, clé de contrôle vérifiée
  // Commune seule, choix du 10/11/2026 : l'adresse complète (domicile familial) n'est pas publiée.
  // Pas strictement conforme à la LCEN : à remplacer par une adresse de domiciliation dès qu'il y en a une.
  address: "Blincourt (60), adresse complète communiquée sur demande",
  // Hébergeur vérifié le 27/10/2026 (en-tête « Server: Vercel » sur rd-solutions.fr).
  host: { name: "Vercel Inc.", address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis", url: "https://vercel.com" },
  // Prestataire qui achemine les messages du formulaire (voir src/app/actions.ts).
  mailer: { name: "Resend, Inc.", url: "https://resend.com/legal/privacy-policy" },
  retention: "trois ans après notre dernier échange", // [À CONFIRMER] durée de conservation des demandes sans suite
};

// « Devis gratuit » mène au formulaire (envoyé par Resend) : un lien mailto ne fait rien chez un visiteur sans
// messagerie configurée. L'email déjà préparé reste proposé en second choix (quoteMailHref).
export const quoteHref = "#contact";
const quoteBody = [
  "Bonjour,",
  "",
  "Je souhaite recevoir un devis gratuit pour mon projet.",
  "",
  "Mon activité : ",
  "Ce que j'attends du site : ",
  "Mes délais : ",
  "",
  "Merci,",
].join("\n");
export const quoteMailHref = `mailto:${site.email}?subject=${encodeURIComponent("Demande de devis gratuit")}&body=${encodeURIComponent(quoteBody)}`;

export const nav = [
  { href: "#projets", label: "Réalisations" },
  { href: "#services", label: "Services" },
  { href: "#methode", label: "Méthode" },
  { href: "#apropos", label: "À propos" },
  { href: "#faq", label: "FAQ" },
];

// Ce qui est écrit sur la porte arrière, en abrégé, dans le premier écran.
export const offers = ["Sites vitrines", "Applications", "Refontes", "Maintenance"];

export const services = [
  {
    title: "Un site qui fait venir les clients",
    text: "Rapide, clair et bien référencé localement : vos horaires, vos prestations et un bouton d'appel visibles en deux secondes.",
  },
  {
    title: "Application web sur-mesure",
    text: "Réservation, devis en ligne, espace adhérents, back-office : des outils adaptés à votre activité plutôt qu'un abonnement de plus.",
  },
  {
    title: "Refonte, performance et SEO",
    text: "Votre site est lent, daté ou introuvable ? Je le reprends, le modernise et le rends accessible, mobile et mieux placé sur Google.",
  },
  {
    title: "Accompagnement et maintenance",
    text: "Hébergement, mises à jour, petites évolutions : un interlocuteur unique qui répond, sans jargon.",
  },
];

export const audiences = ["artisans", "commerçants", "TPE/PME", "associations", "mairies et collectivités"];

export const projects = [
  {
    name: "Secur-Feu",
    category: "Sécurité incendie",
    client: true,
    url: "https://secur-feu.com",
    host: "secur-feu.com",
    problem: "Une entreprise technique dont l'offre était difficile à comprendre pour ses clients.",
    solution: "Un site professionnel qui détaille les prestations et inspire confiance dès l'arrivée.",
    tags: ["Site vitrine", "Accessibilité", "SEO"],
    image: "/images/projects/secur-feu-camionnette.webp",
  },
  {
    name: "Save Toiture",
    category: "Étanchéité et toiture",
    client: true,
    url: "https://save-toiture.vercel.app/",
    host: "save-toiture.vercel.app",
    problem: "Un artisan qui perdait des demandes de devis faute d'un parcours simple et rassurant.",
    solution: "Un site orienté conversion : réalisations, zone d'intervention et demande de devis en un clic.",
    tags: ["Formulaire de devis", "Zone d'intervention", "SEO local"],
    image: "/images/projects/save-toiture.webp",
  },
  {
    name: "Maison Léa Coiffure",
    category: "Salon de coiffure",
    client: false,
    url: "https://maison-lea-coiffure.vercel.app/",
    host: "maison-lea-coiffure.vercel.app",
    problem: "Un salon doit montrer ses prestations et ses tarifs sans que chaque cliente ait à appeler.",
    solution: "Un site élégant avec prestations, tarifs et prise de contact immédiate, pensé pour le mobile.",
    tags: ["Prestations et tarifs", "Pensé mobile", "SEO local"],
    image: "/images/projects/maison-lea.webp",
  },
  {
    name: "Braise",
    category: "Restaurant",
    client: false,
    url: "https://braise-restaurant-plum.vercel.app/",
    host: "braise-restaurant-plum.vercel.app",
    problem: "Un restaurant doit mettre en valeur sa carte et son ambiance avant même la première visite.",
    solution: "Une vitrine gourmande avec carte, galerie et réservation facilitée.",
    tags: ["Carte", "Galerie", "Réservation"],
    image: "/images/projects/braise.webp",
  },
  // Démonstrations livrées le 6/11/2026 (sites-portfolio/_agence/RECAPITULATIF.md). Les clients sont fictifs.
  {
    name: "Maison de Santé des Tilleuls",
    category: "Cabinet médical",
    client: false,
    url: "https://cabinet-medical-theta.vercel.app/fr",
    host: "cabinet-medical-theta.vercel.app",
    problem: "Six praticiens, un secrétariat débordé par le téléphone et des patients qui ne savent pas qui consulter.",
    solution: "Un site rassurant avec prise de rendez-vous en ligne sans compte, et un outil de gestion pour le secrétariat.",
    tags: ["Rendez-vous en ligne", "Espace secrétariat", "Français / anglais"],
    image: "/images/projects/tilleuls.webp",
  },
  {
    name: "Kaolin",
    category: "Boutique de céramique",
    client: false,
    url: "https://kaolin-ceramique.vercel.app/",
    host: "kaolin-ceramique.vercel.app",
    problem: "Une céramiste qui vendait au marché et par messages, et avait déjà vendu deux fois la même pièce.",
    solution: "Une boutique en ligne avec un stock exact pièce par pièce, le paiement, le suivi de commande et un espace atelier.",
    tags: ["Boutique en ligne", "Stock en temps réel", "Suivi de commande"],
    image: "/images/projects/kaolin.webp",
  },
  {
    name: "Rustine",
    category: "Association de quartier",
    client: false,
    url: "https://rustine-repair-cafe.vercel.app/",
    host: "rustine-repair-cafe.vercel.app",
    problem: "Un repair café qui n'avait qu'une page Facebook : personne ne savait quand venir, et les adhésions se faisaient sur papier.",
    solution: "Un site qui affiche le prochain atelier tout seul, avec adhésion, don et inscription des bénévoles en ligne.",
    tags: ["Agenda automatique", "Adhésion et dons", "Bénévolat"],
    image: "/images/projects/rustine.webp",
  },
  {
    name: "Matos",
    category: "Location de matériel entre artisans",
    client: false,
    url: "https://matos-location.vercel.app/",
    host: "matos-location.vercel.app",
    problem: "Des artisans dont le matériel coûteux dort au dépôt, et qui se le prêtent par téléphone, sans planning ni caution.",
    solution: "Une plateforme de location avec carte autour du chantier, caution, messagerie et aucune double réservation possible.",
    tags: ["Carte et recherche", "Réservations", "Messagerie"],
    image: "/images/projects/matos.webp",
  },
  {
    name: "Camille Roux",
    category: "Photographe",
    client: false,
    url: "https://portfolio-photographe-gilt.vercel.app/",
    host: "portfolio-photographe-gilt.vercel.app",
    problem: "Une photographe dont le travail était écrasé par Instagram, avec des demandes reçues en messages privés incomplets.",
    solution: "Une galerie qui met les photos en valeur, un formulaire de réservation de séance et une boutique de tirages.",
    tags: ["Galerie", "Réservation de séance", "Vente de tirages"],
    image: "/images/projects/photographe.webp",
  },
  {
    name: "Relevé",
    category: "Tableau de bord pour PME",
    client: false,
    url: "https://releve-dashboard.vercel.app/",
    host: "releve-dashboard.vercel.app",
    problem: "Une PME dont les chiffres étaient éparpillés entre trois outils, et un rapport mensuel fait au copier-coller.",
    solution: "Un tableau de bord qui réunit ventes, trafic et activité sur une page, compare les périodes et exporte en PDF.",
    tags: ["Tableau de bord", "Exports PDF et Excel", "Accès par rôle"],
    image: "/images/projects/releve.webp",
  },
  {
    name: "Binôme",
    category: "Application collaborative",
    client: false,
    url: "https://binome-rd.vercel.app/",
    host: "binome-rd.vercel.app",
    problem: "Montrer qu'une petite équipe peut avoir son propre outil de travail partagé, pas seulement un site vitrine.",
    solution: "Une liste de tâches partagée : ce qu'écrit l'un apparaît à l'instant chez l'autre, avec comptes et invitations.",
    tags: ["Temps réel", "Comptes et partage", "Application web"],
    image: "/images/projects/binome.webp",
  },
  {
    name: "Allure",
    category: "Application mobile",
    client: false,
    url: "https://allure-training.vercel.app/",
    host: "allure-training.vercel.app",
    problem: "Un sportif dont les séances étaient éparpillées entre deux applications et un tableur.",
    solution: "Une application Android et web qui note une séance en une minute, calcule les records et marche sans réseau.",
    tags: ["Application Android", "Hors ligne", "Synchronisation"],
    image: "/images/projects/allure.webp",
  },
  {
    name: "Rebord",
    category: "Boutique de plantes",
    client: false,
    url: "https://rebord.vercel.app/",
    host: "rebord.vercel.app",
    problem: "Une boutique de plantes dont les clients choisissent au coup de cœur, puis voient la plante dépérir à la mauvaise fenêtre.",
    solution: "Une boutique qui part de l'exposition de la fenêtre et du rythme d'arrosage pour montrer les plantes qui y vivront, avec panier et commande.",
    tags: ["Boutique en ligne", "Conseil par exposition", "Panier"],
    image: "/images/projects/rebord.webp",
  },
];

export const method = [
  { title: "Communication claire", text: "Un point régulier, des mots simples, aucune surprise sur le calendrier ou le budget." },
  { title: "Code propre et fiable", text: "Un code lisible et maintenable, que n'importe quel développeur pourra reprendre." },
  { title: "Accessible et rapide", text: "Pensé d'abord pour le mobile, utilisable au clavier, léger à charger." },
];

// Frise « Comment ça se passe ». Pas de durée tant qu'elle n'est pas confirmée.
export const steps = [
  { title: "Votre demande", text: "Vous m'écrivez votre activité et ce que le site doit faire faire à vos clients. Je reviens vers vous avec mes questions." },
  { title: "Devis gratuit", text: "Un prix annoncé avant de commencer, avec ce qui est inclus noir sur blanc." },
  { title: "Maquette", text: "Vous voyez votre site avant qu'il soit développé et vous validez la direction." },
  { title: "Développement", text: "Le site prend vie. Vous suivez l'avancée sur une adresse de test." },
  { title: "Vos retours", text: "On ajuste les textes, les photos et les détails ensemble." },
  { title: "Mise en ligne", text: "Nom de domaine, hébergement, fiche Google : tout est branché." },
  { title: "Suivi", text: "Mises à jour et petites évolutions, avec le même interlocuteur." },
];

export const faq = [
  {
    q: "Combien coûte un site ?",
    a: "Cela dépend de ce dont votre activité a besoin : le nombre de pages, les fonctions, les contenus à préparer. Écrivez-moi votre besoin et je vous envoie un devis gratuit et détaillé : le prix est annoncé avant de commencer, avec ce qui est inclus.",
  },
  {
    q: "Combien de temps faut-il pour créer mon site ?",
    a: "Cela dépend du nombre de pages et des contenus à préparer. Le délai est fixé ensemble et écrit dans le devis.",
  },
  {
    q: "Qui s'occupe de mon site après la mise en ligne ?",
    a: "Moi. Hébergement, mises à jour et petites évolutions : vous gardez le même interlocuteur du devis à la maintenance.",
  },
  {
    q: "Mon site sera-t-il visible sur Google ?",
    a: "Chaque site est construit pour être bien référencé localement : pages rapides, textes structurés, fiche Google reliée. Personne ne peut honnêtement garantir une place précise, mais tout est fait pour que vos clients vous trouvent.",
  },
  {
    q: "Pourrai-je modifier mon site moi-même ?", // [À CONFIRMER] selon les projets
    a: "Si vous le souhaitez, on prévoit dès le devis un moyen simple de changer vos textes, vos photos ou vos horaires.",
  },
  {
    q: "Je ne suis pas près de chez vous, est-ce possible ?",
    a: "Oui. Je travaille en Hauts-de-France, en Île-de-France et à distance : tout peut se faire par email ou en visio.",
  },
];

// [À REMPLACER] Ajoutez ici de vrais avis clients : la section n'apparaît que s'il y en a.
// Exemple : { quote: "…", author: "Prénom Nom", role: "Gérant, Entreprise" }
export const testimonials: { quote: string; author: string; role: string }[] = [];
