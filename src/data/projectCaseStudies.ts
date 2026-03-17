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
  proofPoints: string[];
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
    sliderTitleLast: "B2B",
    title: "Boutique B2B pour professionnels de l'outillage et des EPI",
    tag: "E-commerce B2B",
    thumb: "/assets/img/projects/ecommerce-storefront.png",
    thumbLight: "/assets/img/projects/ecommerce-storefront.png",
    heroImage: "/assets/img/projects/ecommerce-storefront.png",
    galleryImages: [
      "/assets/img/projects/ecommerce-storefront.png",
      "/assets/img/projects/ecommerce-catalog-admin.png",
    ],
    sectionImage: "/assets/img/projects/ecommerce-catalog-admin.png",
    client: "GFA Pro",
    sector: "Distribution B2B / Outillage & EPI",
    stack: [
      "PrestaShop",
      "PHP",
      "MariaDB",
      "Theme sur-mesure",
      "Chronopost",
      "Mondial Relay",
    ],
    summary:
      "Conception et developpement de A a Z d'une boutique B2B pour des acheteurs professionnels, avec grand catalogue produit, navigation metier, tunnel de commande adapte au terrain et outils permettant au vendeur de mieux piloter son offre et ses ventes.",
    proofPoints: [
      "35 000+ references a exploiter",
      "Parcours B2B pense pour vendre",
      "Transporteurs integres au parcours",
      "Back-office utile pour piloter l'offre",
    ],
    context: [
      "Le besoin etait de creer une vraie boutique B2B capable de presenter une offre tres large d'outillage, de pieces et d'equipements de protection a destination de clients professionnels.",
      "Le produit devait permettre de retrouver rapidement les bonnes references, valoriser les univers marchands, soutenir les achats recurrentes et donner au vendeur une base plus lisible pour suivre ce qui performe le mieux.",
    ],
    challenges: [
      "Rendre un catalogue tres dense plus simple a parcourir, avec des categories claires, des fiches visibles et une recherche utile pour des acheteurs presses.",
      "Mettre en avant les produits, les marques et les offres terrain de facon plus lisible afin d'aider a la decision et d'augmenter la confiance a l'achat.",
      "Consolider le parcours de commande pour des usages professionnels, avec un tunnel plus fluide, une logistique mieux integree et un socle capable d'aider le vendeur a mieux exploiter son catalogue dans le temps.",
    ],
    solution: [
      "Conception complete de la boutique autour de PrestaShop avec un theme sur-mesure, une homepage plus marchande, une navigation utile et des points d'entree pensés pour des acheteurs professionnels.",
      "Structuration du catalogue, des fiches et des univers produits pour mieux presenter l'offre, faire ressortir les marques, faciliter les mises en avant commerciales et conserver une lecture claire malgre un volume de references important.",
      "Mise en place d'un parcours d'achat robuste avec compte client, livraison, transporteurs et contenus de reassurance, sur un socle PHP / MariaDB qui aide aussi le vendeur a surveiller les produits les plus visibles, les univers les plus actifs et l'evolution de son catalogue.",
    ],
    deliverables: [
      "Boutique e-commerce B2B concue et developpee de A a Z",
      "Catalogue structure a grande echelle avec produits, categories et marques",
      "Pages d'accueil et univers marchands plus lisibles pour orienter les achats",
      "Tunnel de commande adapte aux besoins terrain et a la logistique",
      "Base exploitable pour enrichir l'offre, mettre en avant les meilleures ventes et faire evoluer la boutique",
    ],
    outcomes: [
      "Experience d'achat plus claire pour des clients professionnels qui doivent commander vite et bien",
      "Catalogue plus credibile et plus facile a exploiter commercialement malgre son volume",
      "Meilleure mise en valeur des offres, des marques et des produits prioritaires",
      "Socle e-commerce plus solide pour soutenir la croissance du catalogue, booster les ventes et aider le vendeur a mieux suivre ce qui se vend le mieux",
    ],
  },
  {
    id: 2,
    sliderTitleFirst: "Portail",
    sliderTitleLast: "Scolaire",
    title: "Portail scolaire pour eleves, parents et equipe educative",
    tag: "Logiciel scolaire",
    thumb: "/assets/img/projects/school-landing.png",
    thumbLight: "/assets/img/projects/school-landing.png",
    heroImage: "/assets/img/projects/school-landing.png",
    galleryImages: [
      "/assets/img/projects/school-dashboard.png",
      "/assets/img/projects/school-login.png",
    ],
    sectionImage: "/assets/img/projects/school-dashboard.png",
    client: "Etablissement scolaire",
    sector: "Education / Administration scolaire",
    stack: ["Next.js 16", "Prisma 7", "PostgreSQL", "Better Auth", "Supabase Storage", "React PDF"],
    summary:
      "Conception et developpement de A a Z d'un logiciel scolaire avec espaces dedies aux eleves, parents, professeurs, vie scolaire et direction, afin de centraliser le suivi quotidien de l'etablissement dans une interface plus claire et plus exploitable.",
    proofPoints: [
      "Espaces dedies a chaque profil",
      "Notes, absences, devoirs et messages",
      "Bulletins PDF et tableaux de bord",
      "Pilotage plus clair pour l'etablissement",
    ],
    context: [
      "Le besoin etait de concevoir un vrai logiciel scolaire capable de reunir dans un meme produit les usages quotidiens de l'etablissement, des equipes pedagogiques, de la vie scolaire et des familles.",
      "Le produit devait permettre de suivre plus simplement les notes, absences, devoirs, messages, bulletins et informations de vie scolaire, tout en donnant a l'administration une vision plus lisible du fonctionnement global.",
    ],
    challenges: [
      "Rassembler dans une seule interface des usages tres differents selon les profils, sans perdre en lisibilite pour les eleves, les parents, les professeurs et l'administration.",
      "Permettre a l'etablissement de mieux suivre son activite au quotidien, avec des informations plus claires sur les absences, les notes, les devoirs, les messages et les bulletins.",
      "Concevoir un logiciel suffisamment complet et robuste pour couvrir de vrais usages quotidiens dans l'etablissement, sans rester au stade d'outil partiel ou de simple prototype.",
    ],
    solution: [
      "Conception complete du produit avec des espaces dedies a chaque profil, des tableaux de bord lisibles et des parcours adaptes aux besoins de l'equipe educative, de la vie scolaire, des familles et de la direction.",
      "Structuration du logiciel pour centraliser les notes, absences, devoirs, messages, incidents, bulletins et informations de planning dans une meme experience produit.",
      "Mise en place d'un socle Next.js, PostgreSQL, Prisma et Better Auth, avec gestion documentaire et generation PDF, afin de soutenir un usage metier quotidien et une evolution durable du produit.",
    ],
    deliverables: [
      "Portail scolaire multi-espaces concu et developpe de A a Z",
      "Dashboards dedies aux eleves, parents, professeurs, administration et direction",
      "Suivi des notes, absences, devoirs, messages, incidents et planning",
      "Generation de bulletins PDF et vues de pilotage pour l'etablissement",
      "Logiciel complet exploitable par l'etablissement sur ses usages quotidiens",
    ],
    outcomes: [
      "Experience plus claire pour les familles, les eleves et les equipes qui consultent les informations au quotidien",
      "Vision plus unifiee de la vie de l'etablissement entre pedagogie, administration et vie scolaire",
      "Logiciel complet capable de couvrir des usages reels au quotidien",
      "Produit suffisamment solide pour soutenir l'organisation scolaire dans la duree",
    ],
  },
  {
    id: 3,
    sliderTitleFirst: "AI App",
    sliderTitleLast: "Builder",
    title: "Plateforme IA pour creer des applications web",
    tag: "Produit SaaS IA",
    thumb: "/assets/img/projects/ai-builder-hero.png",
    thumbLight: "/assets/img/projects/ai-builder-hero.png",
    heroImage: "/assets/img/projects/ai-builder-hero.png",
    galleryImages: [
      "/assets/img/projects/ai-builder-hero.png",
      "/assets/img/projects/ai-builder-editor.png",
    ],
    sectionImage: "/assets/img/projects/ai-builder-editor.png",
    client: "Northstar",
    sector: "SaaS / Developer tools / IA",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "tRPC",
      "Prisma",
      "Supabase Auth",
      "Stripe",
      "OpenAI",
      "E2B",
      "Inngest",
    ],
    summary:
      "Conception et developpement d'une plateforme SaaS qui permet de decrire une idee, generer une application avec l'IA, visualiser le resultat en direct, inspecter le code et piloter ses projets depuis un meme produit.",
    proofPoints: [
      "Generation par conversation",
      "Preview live du resultat",
      "Workspace projet + code",
      "Plans et abonnements integres",
    ],
    context: [
      "Le besoin etait de creer un vrai produit SaaS capable de transformer une intention en application web visible, modifiable et monnayable depuis une seule interface.",
      "Le produit devait permettre a l'utilisateur de lancer une generation, suivre l'avancement, previsualiser le resultat, relire le code et gerer ses projets sans quitter le workspace.",
    ],
    challenges: [
      "Transformer une experience de generation IA en produit vraiment utilisable, sans rester sur une simple demo conversationnelle.",
      "Rendre la creation fluide malgre la complexite en coulisses: generation asynchrone, preview, historique, projets, quotas et facturation.",
      "Concevoir une experience premium a la fois dans le site marketing et dans le workspace de production, avec un niveau de finition coherent sur l'ensemble du produit.",
    ],
    solution: [
      "Conception complete d'un produit SaaS avec espace projet, historique conversationnel, etapes de generation, preview live et lecture du code dans une seule interface.",
      "Structuration du workflow pour relier intelligemment l'IA, la sandbox de preview, la gestion des fichiers, les messages et la persistance projet sans casser l'experience utilisateur.",
      "Mise en place d'un socle Next.js, tRPC, Prisma, Supabase, OpenAI, E2B, Inngest et Stripe pour soutenir a la fois l'usage produit, la monetisation et la croissance du service.",
    ],
    deliverables: [
      "Plateforme SaaS complete avec auth, projets et historique conversationnel",
      "Workspace produit avec preview live, fichiers et inspection du code",
      "Workflow de generation IA relie a la creation et au suivi des projets",
      "Billing Stripe avec plans, quotas et gestion des abonnements",
      "Site marketing premium aligne sur la promesse du produit",
    ],
    outcomes: [
      "Produit plus credibile et plus abouti, avec un vrai workspace, un suivi des projets et une experience complete de creation",
      "Parcours unifie entre idee, generation, preview, lecture du code et gestion de compte",
      "Produit monnayable avec plans, quotas et abonnements deja integres",
      "Experience plus solide pour creer, suivre et faire evoluer des applications dans le temps",
    ],
  },
];

export function getProjectCaseStudyById(id: number) {
  return projectCaseStudies.find((project) => project.id === id);
}
