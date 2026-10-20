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

// Le calendrier ne s'affiche que lorsqu'un vrai lien de réservation est renseigné.
export const bookingReady = !/^https:\/\/calendly\.com\/?$/.test(site.calendly);
// Sans lien de réservation, « Réserver un appel » ouvre un email pré-rempli.
export const bookingHref = bookingReady
  ? site.calendly
  : `mailto:${site.email}?subject=${encodeURIComponent("Appel de 15 min pour mon projet")}`;

export const nav = [
  { href: "#projets", label: "Réalisations" },
  { href: "#services", label: "Services" },
  { href: "#methode", label: "Méthode" },
  { href: "#apropos", label: "À propos" },
  { href: "#faq", label: "FAQ" },
];

// Hero raconté au scroll : le site s'allume étape par étape.
export const heroSteps = ["Invisible.", "Trouvé.", "Choisi.", "Contacté."];

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
    color: "#b42318", // couleur de la vitrine (texte blanc, contraste AA vérifié)
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
    color: "#b8500b", // couleur de la vitrine (texte blanc, contraste AA vérifié)
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
    color: "#a3245f", // couleur de la vitrine (texte blanc, contraste AA vérifié)
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
    color: "#3b1d12", // couleur de la vitrine (texte blanc, contraste AA vérifié)
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
  { title: "Accessible et rapide", text: "Pensé d'abord pour le mobile, utilisable au clavier, léger à charger." },
];

// Frise « Comment ça se passe ». Pas de durée tant qu'elle n'est pas confirmée.
export const steps = [
  { title: "Appel découverte", text: "15 minutes pour comprendre votre activité, vos clients et ce que le site doit leur faire faire." },
  { title: "Devis clair", text: "Un prix annoncé avant de commencer, avec ce qui est inclus noir sur blanc." },
  { title: "Maquette", text: "Vous voyez votre site avant qu'il soit développé et vous validez la direction." },
  { title: "Développement", text: "Le site prend vie. Vous suivez l'avancée sur une adresse de test." },
  { title: "Vos retours", text: "On ajuste les textes, les photos et les détails ensemble." },
  { title: "Mise en ligne", text: "Nom de domaine, hébergement, fiche Google : tout est branché." },
  { title: "Suivi", text: "Mises à jour et petites évolutions, avec le même interlocuteur." },
];

export const faq = [
  {
    q: "Combien coûte un site ?",
    a: `Un site vitrine démarre à ${site.startingPrice}. Une application sur-mesure ou une refonte se chiffre sur devis. Dans tous les cas, le prix est annoncé avant de commencer.`,
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
    a: "Oui. Je travaille en Hauts-de-France, en Île-de-France et à distance : un appel ou une visio suffit pour avancer.",
  },
];

// [À REMPLACER] Ajoutez ici de vrais avis clients : la section n'apparaît que s'il y en a.
// Exemple : { quote: "…", author: "Prénom Nom", role: "Gérant, Entreprise" }
export const testimonials: { quote: string; author: string; role: string }[] = [];
