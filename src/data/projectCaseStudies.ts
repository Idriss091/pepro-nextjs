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
      "Thème sur-mesure",
      "Chronopost",
      "Mondial Relay",
    ],
    summary:
      "Conception et développement de A à Z d'une boutique B2B pour des acheteurs professionnels, avec grand catalogue produit, navigation métier, tunnel de commande adapté au terrain et outils permettant au vendeur de mieux piloter son offre et ses ventes.",
    proofPoints: [
      "35 000+ références à exploiter",
      "Parcours B2B pensé pour vendre",
      "Transporteurs intégrés au parcours",
      "Back-office utile pour piloter l'offre",
    ],
    context: [
      "Le besoin était de créer une vraie boutique B2B capable de présenter une offre très large d'outillage, de pièces et d'équipements de protection à destination de clients professionnels.",
      "Le produit devait permettre de retrouver rapidement les bonnes références, valoriser les univers marchands, soutenir les achats récurrents et donner au vendeur une base plus lisible pour suivre ce qui performe le mieux.",
    ],
    challenges: [
      "Rendre un catalogue très dense plus simple à parcourir, avec des catégories claires, des fiches visibles et une recherche utile pour des acheteurs pressés.",
      "Mettre en avant les produits, les marques et les offres terrain de façon plus lisible afin d'aider à la décision et d'augmenter la confiance à l'achat.",
      "Consolider le parcours de commande pour des usages professionnels, avec un tunnel plus fluide, une logistique mieux intégrée et un socle capable d'aider le vendeur à mieux exploiter son catalogue dans le temps.",
    ],
    solution: [
      "Conception complète de la boutique autour de PrestaShop avec un thème sur-mesure, une homepage plus marchande, une navigation utile et des points d'entrée pensés pour des acheteurs professionnels.",
      "Structuration du catalogue, des fiches et des univers produits pour mieux présenter l'offre, faire ressortir les marques, faciliter les mises en avant commerciales et conserver une lecture claire malgré un volume de références important.",
      "Mise en place d'un parcours d'achat robuste avec compte client, livraison, transporteurs et contenus de réassurance, sur un socle PHP / MariaDB qui aide aussi le vendeur à surveiller les produits les plus visibles, les univers les plus actifs et l'évolution de son catalogue.",
    ],
    deliverables: [
      "Boutique e-commerce B2B conçue et développée de A à Z",
      "Catalogue structuré à grande échelle avec produits, catégories et marques",
      "Pages d'accueil et univers marchands plus lisibles pour orienter les achats",
      "Tunnel de commande adapté aux besoins terrain et à la logistique",
      "Base exploitable pour enrichir l'offre, mettre en avant les meilleures ventes et faire évoluer la boutique",
    ],
    outcomes: [
      "Expérience d'achat plus claire pour des clients professionnels qui doivent commander vite et bien",
      "Catalogue plus crédible et plus facile à exploiter commercialement malgré son volume",
      "Meilleure mise en valeur des offres, des marques et des produits prioritaires",
      "Socle e-commerce plus solide pour soutenir la croissance du catalogue, booster les ventes et aider le vendeur à mieux suivre ce qui se vend le mieux",
    ],
  },
  {
    id: 2,
    sliderTitleFirst: "Portail",
    sliderTitleLast: "Scolaire",
    title: "Portail scolaire pour élèves, parents et équipe éducative",
    tag: "Logiciel scolaire",
    thumb: "/assets/img/projects/school-landing.png",
    thumbLight: "/assets/img/projects/school-landing.png",
    heroImage: "/assets/img/projects/school-landing.png",
    galleryImages: [
      "/assets/img/projects/school-dashboard.png",
      "/assets/img/projects/school-login.png",
    ],
    sectionImage: "/assets/img/projects/school-dashboard.png",
    client: "Établissement scolaire",
    sector: "Éducation / Administration scolaire",
    stack: ["Next.js 16", "Prisma 7", "PostgreSQL", "Better Auth", "Supabase Storage", "React PDF"],
    summary:
      "Conception et développement de A à Z d'un logiciel scolaire avec espaces dédiés aux élèves, parents, professeurs, vie scolaire et direction, afin de centraliser le suivi quotidien de l'établissement dans une interface plus claire et plus exploitable.",
    proofPoints: [
      "Espaces dédiés à chaque profil",
      "Notes, absences, devoirs et messages",
      "Bulletins PDF et tableaux de bord",
      "Pilotage plus clair pour l'établissement",
    ],
    context: [
      "Le besoin était de concevoir un vrai logiciel scolaire capable de réunir dans un même produit les usages quotidiens de l'établissement, des équipes pédagogiques, de la vie scolaire et des familles.",
      "Le produit devait permettre de suivre plus simplement les notes, absences, devoirs, messages, bulletins et informations de vie scolaire, tout en donnant à l'administration une vision plus lisible du fonctionnement global.",
    ],
    challenges: [
      "Rassembler dans une seule interface des usages très différents selon les profils, sans perdre en lisibilité pour les élèves, les parents, les professeurs et l'administration.",
      "Permettre à l'établissement de mieux suivre son activité au quotidien, avec des informations plus claires sur les absences, les notes, les devoirs, les messages et les bulletins.",
      "Concevoir un logiciel suffisamment complet et robuste pour couvrir de vrais usages quotidiens dans l'établissement, sans rester au stade d'outil partiel ou de simple prototype.",
    ],
    solution: [
      "Conception complète du produit avec des espaces dédiés à chaque profil, des tableaux de bord lisibles et des parcours adaptés aux besoins de l'équipe éducative, de la vie scolaire, des familles et de la direction.",
      "Structuration du logiciel pour centraliser les notes, absences, devoirs, messages, incidents, bulletins et informations de planning dans une même expérience produit.",
      "Mise en place d'un socle Next.js, PostgreSQL, Prisma et Better Auth, avec gestion documentaire et génération PDF, afin de soutenir un usage métier quotidien et une évolution durable du produit.",
    ],
    deliverables: [
      "Portail scolaire multi-espaces conçu et développé de A à Z",
      "Dashboards dédiés aux élèves, parents, professeurs, administration et direction",
      "Suivi des notes, absences, devoirs, messages, incidents et planning",
      "Génération de bulletins PDF et vues de pilotage pour l'établissement",
      "Logiciel complet exploitable par l'établissement sur ses usages quotidiens",
    ],
    outcomes: [
      "Expérience plus claire pour les familles, les élèves et les équipes qui consultent les informations au quotidien",
      "Vision plus unifiée de la vie de l'établissement entre pédagogie, administration et vie scolaire",
      "Logiciel complet capable de couvrir des usages réels au quotidien",
      "Produit suffisamment solide pour soutenir l'organisation scolaire dans la durée",
    ],
  },
  {
    id: 3,
    sliderTitleFirst: "AI App",
    sliderTitleLast: "Builder",
    title: "Plateforme IA pour créer des applications web",
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
      "Conception et développement d'une plateforme SaaS qui permet de décrire une idée, générer une application avec l'IA, visualiser le résultat en direct, inspecter le code et piloter ses projets depuis un même produit.",
    proofPoints: [
      "Génération par conversation",
      "Preview live du résultat",
      "Workspace projet + code",
      "Plans et abonnements intégrés",
    ],
    context: [
      "Le besoin était de créer un vrai produit SaaS capable de transformer une intention en application web visible, modifiable et monnayable depuis une seule interface.",
      "Le produit devait permettre à l'utilisateur de lancer une génération, suivre l'avancement, prévisualiser le résultat, relire le code et gérer ses projets sans quitter le workspace.",
    ],
    challenges: [
      "Transformer une expérience de génération IA en produit vraiment utilisable, sans rester sur une simple démo conversationnelle.",
      "Rendre la création fluide malgré la complexité en coulisses: génération asynchrone, preview, historique, projets, quotas et facturation.",
      "Concevoir une expérience premium à la fois dans le site marketing et dans le workspace de production, avec un niveau de finition cohérent sur l'ensemble du produit.",
    ],
    solution: [
      "Conception complète d'un produit SaaS avec espace projet, historique conversationnel, étapes de génération, preview live et lecture du code dans une seule interface.",
      "Structuration du workflow pour relier intelligemment l'IA, la sandbox de preview, la gestion des fichiers, les messages et la persistance projet sans casser l'expérience utilisateur.",
      "Mise en place d'un socle Next.js, tRPC, Prisma, Supabase, OpenAI, E2B, Inngest et Stripe pour soutenir à la fois l'usage produit, la monétisation et la croissance du service.",
    ],
    deliverables: [
      "Plateforme SaaS complète avec auth, projets et historique conversationnel",
      "Workspace produit avec preview live, fichiers et inspection du code",
      "Workflow de génération IA relié à la création et au suivi des projets",
      "Billing Stripe avec plans, quotas et gestion des abonnements",
      "Site marketing premium aligné sur la promesse du produit",
    ],
    outcomes: [
      "Produit plus fiable et plus abouti, avec un vrai workspace, un suivi des projets et une expérience complète de création",
      "Parcours unifié entre idée, génération, preview, lecture du code et gestion de compte",
      "Produit monnayable avec plans, quotas et abonnements déjà intégrés",
      "Expérience plus solide pour créer, suivre et faire évoluer des applications dans le temps",
    ],
  },
];

export function getProjectCaseStudyById(id: number) {
  return projectCaseStudies.find((project) => project.id === id);
}
