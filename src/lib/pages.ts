import { projects } from "./content";

/*
  Pages dédiées : une par métier et une par prestation. Chacune répond à une recherche précise
  (« création site internet artisan », « refonte site internet ») que la page d'accueil seule ne peut pas couvrir.
  Mêmes règles que le reste du site : aucun prix, aucun chiffre non mesuré, aucun témoignage inventé,
  tournures neutres sans « je » ni « nous » (voir PRODUCT.md). Textes à relire avant mise en ligne.
*/
export type Landing = {
  slug: string;
  kind: "metier" | "prestation";
  label: string; // libellé court : pied de page, fil d'Ariane, liens
  title: string; // balise <title>, sans la marque
  description: string; // meta description
  h1: string;
  intro: string;
  pointsTitle: string;
  points: { title: string; text: string }[];
  included: string[];
  projectsTitle: string;
  projectsIntro: string;
  projects: string[]; // slugs de `projects`, dans l'ordre d'affichage
  faq: { q: string; a: string }[];
};

export const landings: Landing[] = [
  {
    slug: "site-internet-artisan",
    kind: "metier",
    label: "Artisans",
    title: "Création de site internet pour artisan",
    description:
      "Un site internet pour artisan du bâtiment ou de service : réalisations, zone d'intervention et demande de devis en un clic. Devis gratuit, un seul interlocuteur.",
    h1: "Un site internet pour artisan, qui ramène des demandes de devis.",
    intro:
      "Couvreur, plombier, électricien, menuisier, paysagiste : un client qui cherche un artisan veut savoir en quelques secondes ce qui est fait, où, et comment demander un devis. Le site est construit pour ça.",
    pointsTitle: "Ce qu'un client cherche sur le site d'un artisan",
    points: [
      {
        title: "Les chantiers déjà réalisés",
        text: "Des photos de vrais chantiers, classées par type de travaux. C'est la première chose regardée, bien avant le texte.",
      },
      {
        title: "La zone d'intervention",
        text: "Les communes desservies sont écrites en toutes lettres : le client sait s'il est concerné, et Google sait où afficher le site.",
      },
      {
        title: "Une demande de devis simple",
        text: "Un formulaire court et un numéro cliquable, visibles sur chaque page, pensés pour être utilisés au téléphone, depuis un chantier ou un canapé.",
      },
      {
        title: "Des preuves de sérieux",
        text: "Assurance décennale, qualifications, labels : ce qui rassure avant d'appeler est mis en avant, pas caché en bas de page.",
      },
    ],
    included: [
      "Pages prestations, réalisations, zone d'intervention et contact",
      "Formulaire de demande de devis relié à votre boîte mail",
      "Fiche Google reliée au site à la mise en ligne",
      "Affichage pensé d'abord pour le téléphone",
    ],
    projectsTitle: "Exemples pour des métiers artisanaux",
    projectsIntro: "Deux projets clients et une démonstration, à ouvrir et à tester.",
    projects: ["save-toiture", "secur-feu", "matos"],
    faq: [
      {
        q: "Pas le temps d'écrire les textes ni de trier les photos, est-ce bloquant ?",
        a: "Non. Les textes sont rédigés à partir d'un échange sur votre activité, et vous envoyez vos photos de chantier telles quelles, même prises au téléphone : elles sont triées et recadrées.",
      },
      {
        q: "Une page Facebook ne suffit-elle pas ?",
        a: "Elle est utile, mais elle ne ressort presque pas sur Google quand quelqu'un cherche un métier et une commune. Le site et la fiche Google sont ce qui apparaît sur ces recherches ; la page Facebook peut y être reliée.",
      },
      {
        q: "Combien coûte un site pour un artisan ?",
        a: "Cela dépend du nombre de pages et des fonctions voulues. Le prix est annoncé dans un devis gratuit, avant de commencer, avec ce qui est inclus.",
      },
    ],
  },
  {
    slug: "site-internet-commerce",
    kind: "metier",
    label: "Commerces et restaurants",
    title: "Création de site internet pour commerce, salon et restaurant",
    description:
      "Site internet pour commerce de proximité, salon de coiffure ou restaurant : horaires, tarifs, carte, réservation ou boutique en ligne. Devis gratuit.",
    h1: "Un site internet pour votre commerce, à jour et facile à trouver.",
    intro:
      "Boutique, salon de coiffure, institut, restaurant : avant de pousser la porte, vos clients regardent les horaires, les prix et les photos sur leur téléphone. Le site leur donne ces réponses sans qu'ils aient à appeler.",
    pointsTitle: "Ce qu'un client attend du site d'un commerce",
    points: [
      {
        title: "Horaires, adresse, téléphone",
        text: "Visibles dès l'arrivée, avec un itinéraire et un appel en un geste. Les mêmes informations que sur la fiche Google, pour ne jamais se contredire.",
      },
      {
        title: "Prestations, tarifs ou carte",
        text: "Une page lisible sur téléphone, que vous pouvez faire évoluer : un PDF photographié de travers ne se lit pas et ne se trouve pas sur Google.",
      },
      {
        title: "Réserver ou commander",
        text: "Selon l'activité : demande de réservation, prise de rendez-vous, ou boutique en ligne avec un stock exact et le paiement.",
      },
      {
        title: "L'ambiance du lieu",
        text: "De grandes photos et une identité qui vous ressemble : un site de restaurant ne doit pas avoir l'air d'un site de garage.",
      },
    ],
    included: [
      "Pages accueil, prestations ou carte, infos pratiques et contact",
      "Réservation, rendez-vous ou vente en ligne selon le besoin",
      "Fiche Google reliée au site à la mise en ligne",
      "Affichage pensé d'abord pour le téléphone",
    ],
    projectsTitle: "Exemples pour des commerces",
    projectsIntro: "Cinq démonstrations complètes, construites autour de commerces fictifs, à ouvrir et à tester.",
    projects: ["maison-lea-coiffure", "braise", "yummy-nouilles", "kaolin", "rebord"],
    faq: [
      {
        q: "Est-il possible de changer soi-même les horaires ou la carte ?",
        a: "Oui, si vous le souhaitez : un moyen simple de modifier vos textes, vos photos ou vos horaires est prévu dès le devis.",
      },
      {
        q: "Faut-il forcément une boutique en ligne ?",
        a: "Non. Beaucoup de commerces ont surtout besoin d'être trouvés et de donner envie de venir. La vente en ligne s'ajoute seulement si elle sert vraiment l'activité.",
      },
      {
        q: "Le site remplace-t-il la fiche Google ?",
        a: "Non, les deux se complètent : la fiche apparaît sur la carte et dans les recherches locales, le site donne le détail. La fiche est reliée au site à la mise en ligne.",
      },
    ],
  },
  {
    slug: "site-internet-tpe-pme",
    kind: "metier",
    label: "TPE et PME",
    title: "Création de site internet pour TPE et PME",
    description:
      "Site internet et outils web pour TPE et PME : une offre expliquée clairement, des demandes de contact qualifiées, et des outils sur-mesure si besoin. Devis gratuit.",
    h1: "Un site internet pour TPE et PME, qui explique clairement votre offre.",
    intro:
      "Une entreprise de services ou une société technique a souvent une offre difficile à résumer. Le site la rend compréhensible pour quelqu'un qui ne connaît pas le métier, et l'amène à prendre contact.",
    pointsTitle: "Ce qu'un site doit faire pour une petite entreprise",
    points: [
      {
        title: "Dire ce que fait l'entreprise",
        text: "Chaque prestation a sa page, écrite dans les mots du client plutôt que dans le jargon du métier.",
      },
      {
        title: "Inspirer confiance",
        text: "Références, certifications, équipe, secteur couvert : les éléments qu'un acheteur vérifie avant de demander un devis.",
      },
      {
        title: "Recevoir des demandes utiles",
        text: "Un formulaire qui pose les bonnes questions, pour que la demande arrive déjà cadrée dans la bonne boîte mail.",
      },
      {
        title: "Grandir avec l'activité",
        text: "Espace client, devis en ligne, tableau de bord : un outil sur-mesure peut s'ajouter plus tard sur la même base, sans tout refaire.",
      },
    ],
    included: [
      "Une page par prestation, plus références et contact",
      "Formulaire de demande relié à votre boîte mail",
      "Référencement local et fiche Google reliée",
      "Un code lisible, qu'un autre développeur peut reprendre",
    ],
    projectsTitle: "Exemples pour des entreprises",
    projectsIntro: "Un projet client et deux démonstrations d'outils sur-mesure.",
    projects: ["secur-feu", "releve", "binome"],
    faq: [
      {
        q: "L'entreprise a déjà un site : faut-il repartir de zéro ?",
        a: "Pas forcément. Le site existant est regardé d'abord : ce qui fonctionne est gardé, ce qui est lent, daté ou introuvable est repris. Le choix est expliqué dans le devis.",
      },
      {
        q: "Qui s'occupe du site après la mise en ligne ?",
        a: "RD-Solutions. Hébergement, mises à jour et petites évolutions restent assurés par le même interlocuteur.",
      },
      {
        q: "Un outil interne peut-il être relié au site ?",
        a: "Oui. Un espace réservé, un tableau de bord ou un outil de gestion peuvent être développés sur-mesure et reliés au site.",
      },
    ],
  },
  {
    slug: "site-internet-association",
    kind: "metier",
    label: "Associations",
    title: "Création de site internet pour association",
    description:
      "Site internet pour association : agenda à jour, adhésion et don en ligne, inscription des bénévoles. Simple à tenir par une équipe qui change. Devis gratuit.",
    h1: "Un site internet pour association, simple à tenir à jour.",
    intro:
      "Club sportif, association culturelle, repair café, comité des fêtes : le site doit dire quand venir et comment rejoindre l'association, et rester à jour même quand le bureau change.",
    pointsTitle: "Ce qu'un site apporte à une association",
    points: [
      {
        title: "Le prochain rendez-vous, bien visible",
        text: "Un agenda qui affiche tout seul la prochaine date : plus besoin de fouiller une page Facebook pour savoir quand a lieu l'atelier ou le match.",
      },
      {
        title: "Adhérer et donner en ligne",
        text: "Un formulaire d'adhésion et de don à la place des bulletins papier, avec les informations rangées au même endroit pour le bureau.",
      },
      {
        title: "Accueillir les bénévoles",
        text: "Une page qui explique comment aider et un formulaire d'inscription, pour ne plus dépendre du bouche-à-oreille.",
      },
      {
        title: "Un site qui survit au changement de bureau",
        text: "Les accès et le mode d'emploi sont remis à l'association, pas à une seule personne : le site ne s'arrête pas quand le président change.",
      },
    ],
    included: [
      "Pages présentation, agenda, adhésion et contact",
      "Formulaires d'adhésion, de don ou de bénévolat selon le besoin",
      "Un moyen simple de mettre à jour les dates et les actualités",
      "Affichage pensé d'abord pour le téléphone",
    ],
    projectsTitle: "Exemple pour une association",
    projectsIntro: "Une démonstration complète, construite autour d'une association de quartier fictive.",
    projects: ["rustine"],
    faq: [
      {
        q: "L'association a peu de moyens : est-ce accessible ?",
        a: "Le devis est gratuit et adapté au besoin réel : un site d'association peut rester simple. Le prix est annoncé avant de commencer, avec ce qui est inclus.",
      },
      {
        q: "Qui pourra mettre le site à jour ?",
        a: "Les membres que l'association désigne. Un moyen simple de changer les dates, les textes et les photos est prévu dès le devis.",
      },
      {
        q: "Le paiement des adhésions en ligne est-il possible ?",
        a: "Oui, l'adhésion et le don peuvent se faire en ligne. Le prestataire de paiement est choisi avec l'association, selon ce qu'elle utilise déjà.",
      },
    ],
  },
  {
    slug: "site-internet-mairie",
    kind: "metier",
    label: "Mairies et collectivités",
    title: "Création de site internet pour mairie et collectivité",
    description:
      "Site internet pour mairie, commune ou collectivité : démarches, horaires, actualités et comptes rendus faciles à trouver, sur un site accessible. Devis gratuit.",
    h1: "Un site internet pour mairie, où chaque habitant trouve sa réponse.",
    intro:
      "Horaires de la mairie, ramassage des déchets, inscription à la cantine, compte rendu du conseil : les habitants viennent chercher une information précise. Le site la leur donne en deux gestes, sur téléphone comme sur ordinateur.",
    pointsTitle: "Ce qu'un habitant attend du site de sa commune",
    points: [
      {
        title: "Les démarches, en premier",
        text: "État civil, urbanisme, scolaire, location de salle : chaque démarche a sa page, avec les pièces à fournir et le bon contact.",
      },
      {
        title: "Les informations pratiques",
        text: "Horaires, permanences, numéros utiles et calendrier de collecte, à jour et visibles dès l'accueil.",
      },
      {
        title: "La vie de la commune",
        text: "Actualités, agenda, comptes rendus de conseil et bulletin municipal, publiés par la mairie sans passer par un prestataire.",
      },
      {
        title: "Un site accessible à tous",
        // [À CONFIRMER] niveau d'engagement sur le RGAA (audit, déclaration d'accessibilité) à préciser avant de le promettre.
        text: "Les sites publics sont soumis à une obligation d'accessibilité. Contrastes, navigation au clavier et structure lisible par un lecteur d'écran sont pris en compte dès la maquette.",
      },
    ],
    included: [
      "Pages démarches, infos pratiques, actualités et contact",
      "Un moyen simple pour le secrétariat de publier lui-même",
      "Contrastes, clavier et lecture d'écran pris en compte",
      "Un seul interlocuteur, joignable après la mise en ligne",
    ],
    projectsTitle: "Exemples de sites tournés vers le public",
    projectsIntro:
      "Deux démonstrations qui répondent aux mêmes besoins : informer vite, donner les horaires, permettre une démarche en ligne.",
    projects: ["maison-de-sante-des-tilleuls", "rustine"],
    faq: [
      {
        q: "Le secrétariat pourra-t-il publier sans aide ?",
        a: "Oui. Un moyen simple de publier une actualité, un compte rendu ou un changement d'horaire est prévu dès le devis, avec une prise en main à la livraison.",
      },
      {
        q: "Une petite commune a-t-elle besoin d'un site ?",
        a: "Les questions des habitants sont les mêmes quelle que soit la taille de la commune. Un site de quelques pages bien tenues suffit souvent à désengorger le téléphone du secrétariat.",
      },
      {
        q: "Comment se passe la commande pour une collectivité ?",
        a: "Un devis détaillé est envoyé gratuitement, avec le prix et ce qui est inclus, pour être présenté tel quel en conseil ou joint à un bon de commande.",
      },
    ],
  },
  {
    slug: "creation-site-vitrine",
    kind: "prestation",
    label: "Création de site vitrine",
    title: "Création de site vitrine sur-mesure",
    description:
      "Création de site vitrine sur-mesure : rapide, clair, pensé pour le téléphone et référencé localement. Maquette validée avant développement, devis gratuit.",
    h1: "Création de site vitrine : un site qui fait venir les clients.",
    intro:
      "Un site vitrine présente votre activité et donne envie de vous contacter. Il est dessiné pour vous, pas tiré d'un modèle : vos prestations, vos horaires et un bouton d'appel visibles en deux secondes.",
    pointsTitle: "Ce qui fait un bon site vitrine",
    points: [
      {
        title: "Clair dès la première seconde",
        text: "Qui vous êtes, ce que vous faites, où, et comment vous joindre : tout tient dans le premier écran.",
      },
      {
        title: "Rapide sur téléphone",
        text: "Des pages légères, qui s'affichent vite même avec un réseau moyen : un visiteur qui attend est un visiteur qui repart.",
      },
      {
        title: "Trouvable sur Google",
        text: "Une page par prestation, des textes structurés et une fiche Google reliée : le socle du référencement local.",
      },
      {
        title: "Dessiné pour votre activité",
        text: "Une maquette vous est montrée avant le développement : vous validez la direction, rien n'est imposé.",
      },
    ],
    included: [
      "Maquette validée avant le développement",
      "Rédaction des textes à partir de votre activité",
      "Nom de domaine, hébergement et fiche Google branchés",
      "Mentions légales et page de confidentialité",
    ],
    projectsTitle: "Exemples de sites vitrines",
    projectsIntro: "Deux projets clients et trois démonstrations, à ouvrir et à tester.",
    projects: ["secur-feu", "save-toiture", "maison-lea-coiffure", "braise", "camille-roux"],
    faq: [
      {
        q: "Combien de pages faut-il ?",
        a: "Autant que de sujets qu'un client peut chercher : en général l'accueil, une page par prestation, les réalisations et le contact. Le nombre est fixé dans le devis.",
      },
      {
        q: "Quelle différence avec un site fait sur un outil en ligne ?",
        a: "Un site sur-mesure n'embarque que ce dont vous avez besoin : il est plus léger, ne ressemble pas à ceux des voisins, et ne dépend pas d'un abonnement à un outil.",
      },
      {
        q: "Combien de temps faut-il pour créer le site ?",
        a: "Cela dépend du nombre de pages et des contenus à préparer. Le délai est fixé ensemble et écrit dans le devis.",
      },
    ],
  },
  {
    slug: "application-web-sur-mesure",
    kind: "prestation",
    label: "Application web sur-mesure",
    title: "Développement d'application web sur-mesure",
    description:
      "Application web sur-mesure pour petites structures : réservation, devis en ligne, espace adhérents, tableau de bord, back-office. Devis gratuit.",
    h1: "Application web sur-mesure : un outil fait pour votre activité.",
    intro:
      "Quand un tableur, des messages et trois abonnements ne suffisent plus, un outil sur-mesure fait exactement ce dont l'activité a besoin : réservation, devis en ligne, espace adhérents, suivi de commandes ou tableau de bord.",
    pointsTitle: "Ce qu'un outil sur-mesure change",
    points: [
      {
        title: "Il suit votre façon de travailler",
        text: "L'outil reprend vos étapes et votre vocabulaire, au lieu de vous obliger à contourner un logiciel pensé pour d'autres.",
      },
      {
        title: "Une seule source d'information",
        text: "Réservations, stock ou chiffres sont au même endroit et toujours à jour : plus de double saisie ni de double réservation.",
      },
      {
        title: "Des accès selon les rôles",
        text: "Clients, adhérents, secrétariat, gérant : chacun voit et modifie seulement ce qui le concerne.",
      },
      {
        title: "Utilisable partout",
        text: "L'application fonctionne dans le navigateur, sur ordinateur comme sur téléphone, sans rien installer.",
      },
    ],
    included: [
      "Un cadrage du besoin avant le devis",
      "Une adresse de test pour suivre l'avancée",
      "Comptes, rôles et sauvegarde des données",
      "Maintenance et évolutions par le même interlocuteur",
    ],
    projectsTitle: "Exemples d'applications",
    projectsIntro: "Cinq démonstrations complètes, à ouvrir et à tester.",
    projects: ["maison-de-sante-des-tilleuls", "matos", "releve", "binome", "allure"],
    faq: [
      {
        q: "Comment savoir si un outil sur-mesure est justifié ?",
        a: "Si un logiciel existant fait le travail, il est recommandé plutôt qu'un développement. Le sur-mesure se justifie quand aucun outil ne colle à l'activité ou que plusieurs abonnements se chevauchent.",
      },
      {
        q: "À qui appartiennent le code et les données ?",
        a: "À vous. Le code est lisible et documenté pour qu'un autre développeur puisse le reprendre, et vos données restent exportables.",
      },
      {
        q: "L'application peut-elle évoluer après la livraison ?",
        a: "Oui. Les évolutions sont chiffrées au fur et à mesure, par le même interlocuteur que pour la création.",
      },
    ],
  },
  {
    slug: "refonte-site-internet",
    kind: "prestation",
    label: "Refonte de site internet",
    title: "Refonte de site internet : performance et référencement",
    description:
      "Refonte de site internet lent, daté ou introuvable : modernisé, adapté au téléphone, rendu accessible et mieux placé sur Google. Devis gratuit.",
    h1: "Refonte de site internet : plus rapide, plus clair, mieux placé.",
    intro:
      "Un site lent, illisible sur téléphone ou introuvable sur Google coûte des clients sans que cela se voie. La refonte reprend ce qui existe, garde ce qui marche et corrige le reste.",
    pointsTitle: "Ce qu'une refonte corrige",
    points: [
      {
        title: "La lenteur",
        text: "Images trop lourdes, extensions empilées, hébergement à bout de souffle : les causes sont cherchées une par une avant de toucher au reste.",
      },
      {
        title: "L'affichage sur téléphone",
        text: "Le site est repensé d'abord pour un petit écran et un pouce, puis élargi à l'ordinateur, pas l'inverse.",
      },
      {
        title: "La place sur Google",
        text: "Titres, structure des pages et textes sont repris, et les anciennes adresses sont redirigées pour ne pas perdre ce qui était déjà acquis.",
      },
      {
        title: "L'accessibilité",
        text: "Contrastes, navigation au clavier et textes lisibles : le site devient utilisable par tous, y compris les visiteurs peu à l'aise avec le numérique.",
      },
    ],
    included: [
      "Un état des lieux du site actuel avant le devis",
      "Reprise des contenus existants qui méritent d'être gardés",
      "Redirection des anciennes adresses vers les nouvelles",
      "Fiche Google vérifiée et reliée au nouveau site",
    ],
    projectsTitle: "Sites livrés",
    projectsIntro: "Deux projets clients en ligne, à ouvrir et à tester.",
    projects: ["secur-feu", "save-toiture"],
    faq: [
      {
        q: "Faut-il tout refaire ou seulement corriger ?",
        a: "Cela dépend de l'état du site. L'état des lieux dit ce qui peut être gardé ; le devis précise ensuite s'il s'agit de corrections ou d'une reconstruction.",
      },
      {
        q: "Le site va-t-il perdre sa place sur Google pendant la refonte ?",
        a: "Les anciennes adresses sont redirigées vers les nouvelles pour conserver l'acquis. Personne ne peut honnêtement garantir une position, mais un site plus rapide et mieux structuré part avec de meilleures chances.",
      },
      {
        q: "Le nom de domaine et les adresses email sont-ils conservés ?",
        a: "Oui. Le nom de domaine reste le vôtre et les adresses email ne sont pas touchées par la refonte du site.",
      },
    ],
  },
  {
    slug: "maintenance-site-internet",
    kind: "prestation",
    label: "Maintenance de site internet",
    title: "Maintenance et hébergement de site internet",
    description:
      "Maintenance de site internet : hébergement, mises à jour, sauvegardes et petites évolutions par un interlocuteur unique qui répond, sans jargon. Devis gratuit.",
    h1: "Maintenance de site internet : quelqu'un qui répond.",
    intro:
      "Un site n'est pas terminé le jour de sa mise en ligne : il faut le tenir à jour, le garder en ligne et le faire évoluer. Tout cela est assuré par la personne qui l'a construit.",
    pointsTitle: "Ce que couvre la maintenance",
    points: [
      {
        title: "Hébergement et nom de domaine",
        text: "Le site reste en ligne et le nom de domaine est renouvelé à temps : pas de coupure découverte par un client.",
      },
      {
        title: "Mises à jour",
        text: "Les composants du site sont tenus à jour, pour qu'il reste sûr et continue de s'afficher correctement.",
      },
      {
        title: "Petites évolutions",
        text: "Un horaire qui change, une prestation à ajouter, une photo à remplacer : la demande se fait par simple email.",
      },
      {
        title: "Un interlocuteur qui connaît le site",
        text: "Pas de ticket ni de plateforme : la même personne du devis à la maintenance, qui explique sans jargon.",
      },
    ],
    included: [
      "Hébergement et renouvellement du nom de domaine",
      "Mises à jour et sauvegardes",
      "Petites modifications de contenu sur demande",
      "Le même interlocuteur que pour la création",
    ],
    projectsTitle: "",
    projectsIntro: "",
    projects: [],
    faq: [
      {
        q: "Le site n'a pas été créé par RD-Solutions : la maintenance est-elle possible ?",
        a: "Souvent, oui. Le site est d'abord examiné pour voir comment il est construit ; la réponse et les conditions sont données dans le devis.",
      },
      {
        q: "Que se passe-t-il si la collaboration s'arrête ?",
        a: "Le site, le nom de domaine et les accès vous appartiennent et vous sont remis. Le code est lisible pour qu'un autre développeur puisse le reprendre.",
      },
      {
        q: "Combien coûte la maintenance ?",
        a: "Cela dépend du site et du niveau de suivi voulu. Le prix est annoncé dans le devis, avant de commencer, avec ce qui est inclus.",
      },
    ],
  },
];

export const metiers = landings.filter((l) => l.kind === "metier");
export const prestations = landings.filter((l) => l.kind === "prestation");

export const getLanding = (slug: string) => landings.find((l) => l.slug === slug);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectHref = (slug: string) => `/realisations/${slug}`;

// Réalisations d'une page dédiée, dans l'ordre choisi. Un slug mal écrit casse la compilation plutôt que de passer inaperçu.
export const landingProjects = (l: Landing) =>
  l.projects.map((slug) => {
    const p = getProject(slug);
    if (!p) throw new Error(`Réalisation inconnue dans la page « ${l.slug} » : ${slug}`);
    return p;
  });

// Pages dédiées qui citent une réalisation : affichées en bas de sa page de détail.
export const projectLandings = (slug: string) => landings.filter((l) => l.projects.includes(slug));
