import finoviaDesktop from "../../direction/references/finovia-desktop.png";
import novaFlowDesktop from "../../direction/references/image copy.png";

export const homePractices = [
  { index: "01", title: "Sites & commerce", detail: "Visibilité · Vente" },
  { index: "02", title: "Logiciels", detail: "Métier · SaaS" },
  { index: "03", title: "IA & data", detail: "Automatisation · Décision" },
  { index: "04", title: "Cloud & évolution", detail: "Déploiement · Maintenance" },
] as const;

export const homeMethod = [
  { index: "01", title: "Cadrer", detail: "Le problème, les usagers et le résultat attendu." },
  { index: "02", title: "Concevoir", detail: "Les parcours, les écrans et la bonne première version." },
  { index: "03", title: "Construire", detail: "Un produit solide, lisible et réellement exploitable." },
  { index: "04", title: "Déployer", detail: "Une mise en ligne maîtrisée, sans angle mort technique." },
  { index: "05", title: "Faire évoluer", detail: "Mesurer, maintenir et améliorer ce qui compte." },
] as const;

export const homeDigitalServices = [
  {
    index: "01",
    title: "Sites & commerce",
    copy: "Des sites et boutiques qui rendent l’offre évidente, rassurent rapidement et transforment l’attention en action.",
    links: ["Sites corporate", "E-commerce", "SEO & conversion"],
    icon: "website",
    tone: "cyan",
    image: finoviaDesktop,
    imageAlt: "Interface de l’application financière Finovia",
    proof: "Finovia · Application financière",
  },
  {
    index: "02",
    title: "Logiciels & plateformes",
    copy: "Des outils métier, SaaS, portails et simulateurs conçus autour du travail réel de vos équipes.",
    links: ["Logiciels métier", "SaaS & portails", "API & intégrations"],
    icon: "software",
    tone: "violet",
    image: "/assets/img/projects/voltpath-console.png",
    imageAlt: "Console VoltPath comparant plusieurs scénarios de raccordement",
    proof: "VoltPath · Logiciel énergie",
  },
  {
    index: "03",
    title: "IA, data & automatisation",
    copy: "Des fonctions utiles pour calculer, comparer, automatiser et prendre de meilleures décisions — sans ajouter un gadget de plus.",
    links: ["Automatisation", "Aide à la décision", "Données & dashboards"],
    icon: "automation",
    tone: "green",
    image: novaFlowDesktop,
    imageAlt: "Interface de la plateforme SaaS NovaFlow",
    proof: "NovaFlow · Plateforme SaaS",
  },
  {
    index: "04",
    title: "Cloud & évolution",
    copy: "Déploiement, performance, sécurité et maintenance pour garder le produit fiable après sa mise en ligne.",
    links: ["Cloud & DevOps", "Maintenance", "Reprise & modernisation"],
    icon: "cloud",
    tone: "amber",
    image: "/assets/img/projects/sahara-cloud-home.png",
    imageAlt: "Plateforme publique Sahara Cloud",
    proof: "Sahara Cloud · Plateforme cloud",
  },
] as const;

export const homeShowcaseProjects = [
  {
    index: "01",
    client: "GFA Pro",
    sector: "Commerce B2B · E-commerce",
    title: "Une plateforme e-commerce B2B et B2C sur mesure avec plus de 35 000 produits.",
    summary: "Une boutique métier qui facilite la recherche, la compréhension et la commande d’un catalogue professionnel dense.",
    image: "/assets/img/projects/gfa-desktop.png",
    href: "/realisations/gfa-pro-boutique-b2b",
    accent: "lime",
  },
  {
    index: "02",
    client: "VoltPath",
    sector: "Énergie · Logiciel + site",
    title: "Transformer le raccordement en décision projet.",
    summary: "Une console de pré-faisabilité qui compare les scénarios et rend le risque réseau exploitable par les équipes énergie.",
    image: "/assets/img/projects/voltpath-desktop.png",
    href: "https://www.voltpath.fr/produit",
    accent: "blue",
  },
  {
    index: "03",
    client: "Sahara Cloud",
    sector: "Cloud · Plateforme commerciale",
    title: "Rendre l’hébergement local plus accessible.",
    summary: "Une présence publique structurée autour des domaines, de l’hébergement, des VPS et de l’accompagnement client.",
    image: "/assets/img/projects/sahara-cloud-home.png",
    href: "https://sahara-cloud.com/",
    accent: "gold",
  },
  {
    index: "04",
    client: "Numidex Auto",
    sector: "Export automobile · Logiciel + site",
    title: "Outiller un spécialiste de l’export automobile.",
    summary: "Un site et un outil métier réunissant catalogue, estimation budgétaire et accompagnement à l’export international.",
    image: "/assets/img/projects/numidexauto-desktop.png",
    href: "https://www.numidexauto.fr/",
    accent: "sand",
  },
  {
    index: "05",
    client: "MadinahGuide",
    sector: "Éducation & voyage · Plateforme",
    title: "Apprendre, réserver et partir depuis un même service.",
    summary: "Une expérience qui relie contenus pédagogiques, cours en ligne, sessions de séjour et réservation.",
    image: "/assets/img/projects/madinahguide-desktop.png",
    href: "https://www.madinahguide.org/fr/reservation",
    accent: "cyan",
  },
] as const;

export const portfolioShowcaseProjects = [
  ...homeShowcaseProjects,
  {
    index: "06",
    client: "Pepro Scolaire",
    sector: "Éducation · Logiciel métier",
    title: "Réunir la vie scolaire dans un même outil.",
    summary: "Un portail multi-espace qui relie enseignants, élèves, familles et administration autour des cours, notes, absences et échanges.",
    image: "/assets/img/projects/school-dashboard.png",
    href: "/realisations/portail-scolaire",
    accent: "violet",
  },
] as const;

export const homePrices = [
  { name: "Audit & conseil", price: "290 € HT", detail: "Analyse des besoins · Recommandations · Feuille de route" },
  { name: "IA & automatisation", price: "590 € HT", detail: "Automatisation d'un processus · Intégration à vos outils" },
  { name: "Site vitrine", price: "890 € HT", detail: "SEO technique · Mise en ligne" },
  { name: "E-commerce", price: "1 990 € HT", detail: "Paiement en ligne · Catalogue · Mise en ligne" },
  { name: "Outil métier / MVP", price: "1 490 € HT", detail: "Prototype fonctionnel · Interface sur mesure" },
] as const;

export const homeFaqs = [
  {
    question: "Faut-il avoir un cahier des charges avant de vous contacter ?",
    answer: "Non. Une idée, un problème métier ou un produit existant suffit pour commencer. Nous clarifions ensemble les usagers, les priorités, les contraintes et la première version utile avant de chiffrer la réalisation.",
  },
  {
    question: "Pouvez-vous reprendre un site ou un logiciel existant ?",
    answer: "Oui. Nous commençons par examiner le code, les données, l’infrastructure et les parcours critiques. Nous indiquons ensuite ce qui peut être conservé, corrigé ou remplacé et préparons une migration par étapes.",
  },
  {
    question: "Comment estimez-vous le budget et le délai ?",
    answer: "L’estimation dépend du périmètre, des risques techniques, des intégrations et du niveau de finition attendu. Elle est découpée en étapes et livrables pour rendre les arbitrages visibles avant le démarrage.",
  },
  {
    question: "Pouvons-nous commencer par un prototype ou un MVP ?",
    answer: "Oui. C’est souvent la meilleure façon de tester un parcours, réduire les inconnues et concentrer l’investissement sur la version qui apporte déjà une valeur réelle aux utilisateurs.",
  },
  {
    question: "À qui appartiennent le code, les données et les comptes techniques ?",
    answer: "Le périmètre de propriété et les accès sont définis avant le projet. Notre objectif est que vous gardiez la maîtrise de vos données, de vos comptes et des livrables prévus, sans dépendance cachée.",
  },
  {
    question: "Pouvez-vous connecter le produit à nos outils existants ?",
    answer: "Oui, lorsque les outils disposent des accès ou API nécessaires. Nous pouvons relier un site ou un logiciel à un CRM, un ERP, des services de paiement, des transporteurs ou des outils internes.",
  },
  {
    question: "Comment gérez-vous la maintenance, la sécurité et les évolutions ?",
    answer: "Après la mise en ligne, un accompagnement peut couvrir les sauvegardes, mises à jour, corrections, surveillance, performance et nouvelles fonctionnalités selon le niveau de service retenu.",
  },
] as const;
