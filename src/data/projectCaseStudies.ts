export interface ProjectCaseStudy {
  id: number;
  sliderTitleFirst: string;
  sliderTitleLast: string;
  title: string;
  tag: string;
  thumb: string;
  thumbLight: string;
  heroImage: string;
  galleryImages: [string, string];
  sectionImage: string;
  client: string;
  sector: string;
  stack: string[];
  summary: string;
  context: string[];
  challenges: string[];
  solution: string[];
  deliverables: string[];
  outcomes: string[];
}

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: 1,
    sliderTitleFirst: "E-commerce",
    sliderTitleLast: "Outillage",
    title: "Boutique e-commerce outillage (35 000+ produits)",
    tag: "E-commerce / SEO",
    thumb: "/assets/img/banner/pepro-service-web.jpg",
    thumbLight: "/assets/img/banner/pepro-service-web.jpg",
    heroImage: "/assets/img/banner/pepro-service-web.jpg",
    galleryImages: ["/assets/img/portfolio/10-full.jpg", "/assets/img/portfolio/53-full.jpg"],
    sectionImage: "/assets/img/team/pepro-abstract-1.jpg",
    client: "Magasin d'outillage (France)",
    sector: "Retail / E-commerce",
    stack: ["PrestaShop", "SEO technique", "Structuration catalogue", "Optimisation performance"],
    summary:
      "Conception et mise en ligne d'une boutique e-commerce pour un magasin d'outillage avec un catalogue de plus de 35 000 produits, en mettant l'accent sur la qualite SEO, la navigabilite et la maintenabilite.",
    context: [
      "Le client avait besoin d'une plateforme capable de gerer un tres grand volume de references tout en restant exploitable par ses equipes commerciales et marketing.",
      "L'enjeu principal etait de concilier richesse catalogue, experience utilisateur et indexation SEO sur des milliers de pages categories et fiches produit.",
    ],
    challenges: [
      "Structurer un catalogue massif (35 000+ produits) avec une navigation claire, des categories robustes et des fiches homogenes.",
      "Eviter les problemes SEO frequents sur les gros catalogues: contenus dupliques, pages peu qualitatives, maillage insuffisant et performance degradee.",
      "Permettre une administration fluide du site et des evolutions futures sans remettre en cause le socle.",
    ],
    solution: [
      "Mise en place de la boutique sur PrestaShop avec une architecture catalogue pensee pour la recherche, le filtrage et la navigation par univers produit.",
      "Travail sur les fondamentaux SEO (structure des pages, balisage, templates, categories, fiches produit, maillage interne et bonnes pratiques d'indexation).",
      "Optimisations UX et techniques pour ameliorer la consultation du catalogue, les parcours d'achat et la performance globale du site.",
    ],
    deliverables: [
      "Boutique PrestaShop production-ready",
      "Architecture categorie / sous-categorie / fiches produit",
      "Templates SEO et bonnes pratiques editoriales",
      "Optimisations UX sur listing et fiches produit",
      "Documentation de prise en main",
    ],
    outcomes: [
      "Catalogue e-commerce exploitable a grande echelle",
      "Base SEO solide pour la croissance organique",
      "Parcours d'achat plus lisibles pour les clients finaux",
      "Socle maintenable pour evolutions metier futures",
    ],
  },
  {
    id: 2,
    sliderTitleFirst: "Gestion",
    sliderTitleLast: "Scolaire",
    title: "Logiciel de gestion scolaire",
    tag: "SaaS / EdTech",
    thumb: "/assets/img/banner/pepro-service-data.jpg",
    thumbLight: "/assets/img/banner/pepro-service-data.jpg",
    heroImage: "/assets/img/banner/pepro-service-data.jpg",
    galleryImages: ["/assets/img/portfolio/12-full.jpg", "/assets/img/portfolio/54-full.jpg"],
    sectionImage: "/assets/img/team/pepro-abstract-2.jpg",
    client: "Organisation educative (confidentiel)",
    sector: "Education / Administration",
    stack: ["Application web sur-mesure", "Gestion des roles", "Reporting", "UX metier"],
    summary:
      "Developpement d'un logiciel de gestion scolaire pour centraliser les operations administratives, fluidifier le suivi quotidien et ameliorer la visibilite sur l'activite de l'etablissement.",
    context: [
      "Les processus etaient fragmentes entre fichiers, outils disparates et echanges manuels, ce qui ralentissait les equipes administratives et pedagogiques.",
      "Le besoin etait un outil unique, simple a utiliser et adapte aux usages metier reels, avec des droits differencies selon les profils.",
    ],
    challenges: [
      "Concevoir une interface metier claire pour plusieurs profils (administration, encadrement, enseignants, etc.).",
      "Centraliser des donnees heterogenes dans un workflow coherent et exploitable au quotidien.",
      "Garantir la fiabilite des informations et la tracabilite des actions pour limiter les erreurs operationnelles.",
    ],
    solution: [
      "Cadrage fonctionnel des parcours critiques puis conception d'un logiciel web sur-mesure centre sur les operations recurrentes.",
      "Mise en place de modules de gestion et de suivi avec roles / permissions adaptes aux differents utilisateurs.",
      "Travail sur l'ergonomie et la priorisation des ecrans pour reduire le temps passe sur les taches administratives.",
    ],
    deliverables: [
      "Plateforme de gestion scolaire sur-mesure",
      "Gestion des utilisateurs et des droits",
      "Ecrans de suivi et tableaux de bord",
      "Parcours administratifs optimises",
      "Accompagnement de mise en service",
    ],
    outcomes: [
      "Centralisation des operations dans un outil unique",
      "Reduction des frictions administratives",
      "Meilleure visibilite pour la direction et les equipes",
      "Base evolutive pour modules complementaires",
    ],
  },
  {
    id: 3,
    sliderTitleFirst: "Website",
    sliderTitleLast: "Builder",
    title: "Plateforme de website builder (type Lovable / Replit)",
    tag: "SaaS / IA Produit",
    thumb: "/assets/img/banner/pepro-service-ai.jpg",
    thumbLight: "/assets/img/banner/pepro-service-ai.jpg",
    heroImage: "/assets/img/banner/pepro-service-ai.jpg",
    galleryImages: ["/assets/img/portfolio/11-full.jpg", "/assets/img/portfolio/50-full.jpg"],
    sectionImage: "/assets/img/team/pepro-abstract-3.jpg",
    client: "Produit digital en lancement",
    sector: "SaaS / Productivite",
    stack: ["Produit web", "Editeur visuel", "Generation assistee", "Architecture SaaS"],
    summary:
      "Conception d'une plateforme de website builder permettant de generer et personnaliser des sites web, dans une logique de creation rapide similaire a des experiences type Lovable ou Replit.",
    context: [
      "Le client souhaitait une experience de creation moderne, rapide et accessible, capable d'accelerer la production de pages et de prototypes web.",
      "Le projet devait combiner une couche produit claire (templates, edition, publication) et une architecture suffisamment flexible pour evoluer rapidement.",
    ],
    challenges: [
      "Definir un MVP pertinent sur un produit ambitieux (generation, edition, composants, publication).",
      "Concevoir une UX simple pour des utilisateurs non techniques tout en gardant une logique extensible.",
      "Structurer un socle technique permettant des iterations produit rapides.",
    ],
    solution: [
      "Cadrage du MVP et priorisation des parcours a plus forte valeur (creation, edition, personnalisation, publication).",
      "Conception d'une architecture produit modulaire pour separer les briques d'edition, de configuration et de rendu.",
      "Implementation d'une premiere version orientee vitesse d'execution et capacite d'iteration produit.",
    ],
    deliverables: [
      "MVP de plateforme website builder",
      "Parcours de creation et edition",
      "Socle modulaire pour evolutions futures",
      "Base de composants / templates",
      "Accompagnement produit & priorisation",
    ],
    outcomes: [
      "Acceleration du time-to-market du produit",
      "Base exploitable pour iterer sur les retours utilisateurs",
      "Architecture compatible avec une roadmap IA / automatisation",
      "Demonstrateur solide pour partenaires et investisseurs",
    ],
  },
];

export function getProjectCaseStudyById(id: number) {
  return projectCaseStudies.find((project) => project.id === id);
}

