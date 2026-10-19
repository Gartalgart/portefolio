// Tout le contenu éditable est ici. Les valeurs marquées [À COMPLÉTER] sont à confirmer.
export const site = {
  name: "Rémy Denimal",
  role: "Développeur Full-Stack Freelance",
  url: "https://remy-denimal.fr", // [À COMPLÉTER] domaine final
  email: "remy.denimal@gmail.com", // [À CONFIRMER] email pro
  github: "https://github.com/", // [À COMPLÉTER]
  linkedin: "https://www.linkedin.com/", // [À COMPLÉTER]
  calendly: "https://calendly.com/", // [À COMPLÉTER] lien de prise de RDV
  location: "Hauts-de-France · Île-de-France · à distance",
  startingPrice: "1 000 €", // site vitrine. [À PRÉCISER] HT ou TTC
};

export const nav = [
  { href: "#projets", label: "Projets" },
  { href: "#services", label: "Services" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

// Bande de faits sous le hero : uniquement des éléments vrais et vérifiables.
export const facts = [
  { label: "Zone", value: "Hauts-de-France, Île-de-France, à distance" },
  { label: "Interlocuteur", value: "Un seul, du devis à la maintenance" },
  { label: "Sites vitrine", value: `À partir de ${site.startingPrice}` },
];

export const ticker = ["Site vitrine", "Application sur-mesure", "Refonte et SEO", "Maintenance", "Hauts-de-France", "Île-de-France", "À distance"];

export const services = [
  {
    title: "Un site qui fait venir les clients",
    text: "Rapide, clair et bien référencé localement : vos horaires, vos prestations et un bouton d'appel visibles en deux secondes.",
    price: `À partir de ${site.startingPrice}`,
  },
  {
    title: "Application web sur-mesure",
    text: "Réservation, devis en ligne, espace adhérents, back-office : des outils adaptés à votre activité plutôt qu'un abonnement de plus.",
    price: "Sur devis",
  },
  {
    title: "Refonte, performance et SEO",
    text: "Votre site est lent, daté ou introuvable ? Je le reprends, le modernise et le rends accessible, mobile et mieux placé sur Google.",
    price: "Sur devis",
  },
  {
    title: "Accompagnement et maintenance",
    text: "Hébergement, mises à jour, petites évolutions : un interlocuteur unique qui répond, sans jargon.",
    price: "Sur devis",
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
    live: false,
    problem: "Une entreprise technique dont l'offre était difficile à comprendre pour ses clients.",
    solution: "Un site professionnel qui détaille les prestations et inspire confiance dès l'arrivée.",
    tags: ["Site vitrine", "Accessibilité", "SEO"],
    image: "/images/projects/secur-feu.webp",
  },
  {
    name: "Save Toiture",
    category: "Étanchéité et toiture",
    client: true,
    url: "https://save-toiture.vercel.app/",
    host: "save-toiture.vercel.app",
    live: true,
    problem: "Un artisan qui perdait des demandes de devis faute d'un parcours simple et rassurant.",
    solution: "Un site orienté conversion : réalisations, zone d'intervention et demande de devis en un clic.",
    tags: ["Next.js", "Formulaire de devis", "SEO local"],
    image: "/images/projects/save-toiture.webp",
  },
  {
    name: "Maison Léa Coiffure",
    category: "Salon de coiffure",
    client: false,
    url: "https://maison-lea-coiffure.vercel.app/",
    host: "maison-lea-coiffure.vercel.app",
    live: true,
    problem: "Un salon doit montrer ses prestations et ses tarifs sans que chaque cliente ait à appeler.",
    solution: "Un site élégant avec prestations, tarifs et prise de contact immédiate, pensé pour le mobile.",
    tags: ["Next.js", "Tailwind CSS", "SEO local"],
    image: "/images/projects/maison-lea.webp",
  },
  {
    name: "Braise",
    category: "Restaurant",
    client: false,
    url: "https://braise-restaurant-plum.vercel.app/",
    host: "braise-restaurant-plum.vercel.app",
    live: true,
    problem: "Un restaurant doit mettre en valeur sa carte et son ambiance avant même la première visite.",
    solution: "Une vitrine gourmande avec carte, galerie et réservation facilitée.",
    tags: ["Next.js", "Framer Motion", "Réservation"],
    image: "/images/projects/braise.webp",
  },
];

// [À COMPLÉTER] stack réelle
export const stack = ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker", "Vercel"];

export const method = [
  { title: "Communication claire", text: "Un point régulier, des mots simples, aucune surprise sur le calendrier ou le budget." },
  { title: "Code propre et fiable", text: "Un code lisible et maintenable, que n'importe quel développeur pourra reprendre." },
  { title: "Livraisons par étapes", text: "Vous voyez le site avancer et vous ajustez en cours de route." },
  { title: "Accessible et rapide", text: "Pensé d'abord pour le mobile, utilisable au clavier, léger à charger." },
];

// [À REMPLACER] Ajoutez ici de vrais avis clients : la section n'apparaît que s'il y en a.
// Exemple : { quote: "…", author: "Prénom Nom", role: "Gérant, Entreprise" }
export const testimonials: { quote: string; author: string; role: string }[] = [];
