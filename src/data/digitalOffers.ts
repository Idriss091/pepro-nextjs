export interface DigitalOffer {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  summary: string;
  price: string;
  priceNote: string;
  accent: string;
  accentSoft: string;
  image: string;
  imageAlt: string;
  visualLabel: string;
  problemTitle: string;
  problem: string;
  responseTitle: string;
  response: string;
  deliverables: string[];
  outcomes: string[];
  process: Array<{ title: string; copy: string }>;
  faqs: Array<{ question: string; answer: string }>;
  sibling: { label: string; href: string };
}

export const digitalOffers: DigitalOffer[] = [
  {
    slug: "creation-site-internet",
    number: "01",
    eyebrow: "Création & refonte de site",
    title: "Un site qui explique votre valeur avant que vous ayez à le faire.",
    summary:
      "Pepro conçoit des sites professionnels rapides, lisibles et structurés pour transformer votre visibilité en demandes utiles.",
    price: "890 € HT",
    priceNote: "Site vitrine à partir de",
    accent: "#21e6ff",
    accentSoft: "#bff7ff",
    image: "/assets/img/projects/school-landing.png",
    imageAlt: "Exemple d’interface web conçue par Pepro",
    visualLabel: "Design d’interface / Développement / Mise en ligne",
    problemTitle: "Être présent ne suffit plus.",
    problem:
      "Un visiteur doit comprendre rapidement votre activité, percevoir votre crédibilité et savoir quelle action entreprendre. Une interface agréable sans message clair ni structure technique solide reste une vitrine silencieuse.",
    responseTitle: "Nous alignons le fond, la forme et la technique.",
    response:
      "Architecture des pages, direction visuelle, contenus, performance et points de conversion sont pensés ensemble. Le résultat reste simple à parcourir et facile à faire évoluer.",
    deliverables: [
      "Cadrage de l’offre et de la hiérarchie des pages",
      "Direction visuelle et interfaces responsive",
      "Développement du site et intégration des contenus",
      "Fondations SEO techniques",
      "Formulaires et points de conversion",
      "Mise en ligne et prise en main",
    ],
    outcomes: [
      "Une offre comprise plus rapidement",
      "Une image cohérente et crédible",
      "Une base rapide et maintenable",
      "Des contenus structurés pour la recherche",
    ],
    process: [
      { title: "Cadrer", copy: "Objectifs, cibles, contenus et contraintes sont clarifiés avant la conception." },
      { title: "Donner forme", copy: "Nous construisons la hiérarchie, le parcours et la direction visuelle." },
      { title: "Développer", copy: "Les interfaces deviennent un site responsive, rapide et accessible." },
      { title: "Mettre en ligne", copy: "Nous contrôlons les contenus, la technique et les points de contact." },
    ],
    faqs: [
      {
        question: "Le référencement naturel est-il inclus ?",
        answer:
          "Le socle SEO technique et la structuration des pages sont inclus dans le périmètre d’un site vitrine. Une stratégie éditoriale ou locale plus large est chiffrée selon les objectifs.",
      },
      {
        question: "Pouvez-vous reprendre un site existant ?",
        answer:
          "Oui. Nous commençons par examiner les contenus, les URL utiles et les contraintes techniques afin de décider ce qui doit être conservé, amélioré ou reconstruit.",
      },
      {
        question: "Pourrai-je modifier mes contenus ?",
        answer:
          "Oui, lorsque le projet le nécessite nous prévoyons une gestion de contenu adaptée, accompagnée d’une prise en main lors de la livraison.",
      },
    ],
    sibling: { label: "Découvrir l’e-commerce", href: "/digital/e-commerce" },
  },
  {
    slug: "e-commerce",
    number: "02",
    eyebrow: "E-commerce",
    title: "Votre catalogue mérite mieux qu’une simple grille de produits.",
    summary:
      "Nous concevons des boutiques capables d’organiser votre offre, de rassurer l’acheteur et de simplifier le passage de la recherche à la commande.",
    price: "1 990 € HT",
    priceNote: "Boutique e-commerce à partir de",
    accent: "#c6a6ff",
    accentSoft: "#e4d7ff",
    image: "/assets/img/projects/ecommerce-storefront.png",
    imageAlt: "Boutique e-commerce B2B réalisée par Pepro",
    visualLabel: "Projet réel / GFA Pro / E-commerce B2B",
    problemTitle: "Un catalogue dense peut vite devenir un obstacle.",
    problem:
      "Catégories imprécises, recherche peu utile, informations dispersées ou tunnel trop long : chaque friction ralentit l’achat et complique aussi le travail des équipes qui administrent la boutique.",
    responseTitle: "Nous construisons autour de l’usage réel.",
    response:
      "Navigation, fiches produits, réassurance, paiement, livraison et administration forment un même parcours. Les intégrations sont choisies selon votre catalogue et vos opérations.",
    deliverables: [
      "Architecture du catalogue et navigation",
      "Direction visuelle et thème responsive",
      "Fiches produits et parcours de commande",
      "Paiement en ligne et règles de livraison",
      "Fondations SEO techniques",
      "Mise en ligne et prise en main",
    ],
    outcomes: [
      "Une offre plus simple à parcourir",
      "Un parcours d’achat plus lisible",
      "Une boutique adaptée à vos opérations",
      "Une base prête à faire évoluer le catalogue",
    ],
    process: [
      { title: "Cartographier", copy: "Catalogue, clients, commandes, paiement et logistique sont examinés ensemble." },
      { title: "Organiser", copy: "Nous définissons les catégories, les fiches et le parcours vers la commande." },
      { title: "Connecter", copy: "Paiement, livraison et outils nécessaires sont intégrés au bon niveau." },
      { title: "Lancer", copy: "La boutique est contrôlée, mise en ligne puis accompagnée dans son évolution." },
    ],
    faqs: [
      {
        question: "Travaillez-vous avec PrestaShop ?",
        answer:
          "Oui. Pepro conçoit et fait évoluer des boutiques PrestaShop, notamment pour des catalogues B2B importants et des besoins de livraison spécifiques.",
      },
      {
        question: "Le paiement et la livraison sont-ils compris ?",
        answer:
          "Le prix de départ comprend la mise en place du paiement en ligne et de la boutique. Les transporteurs, règles tarifaires ou connexions spécifiques sont cadrés selon votre fonctionnement.",
      },
      {
        question: "Pouvez-vous reprendre un catalogue existant ?",
        answer:
          "Oui, après examen de sa structure, de la qualité des données et du volume à migrer. Cette étape permet de sécuriser le périmètre avant tout engagement.",
      },
    ],
    sibling: { label: "Découvrir les sites vitrines", href: "/digital/creation-site-internet" },
  },
  {
    slug: "seo",
    number: "03",
    eyebrow: "Référencement naturel",
    title: "Être trouvé au moment où votre client vous cherche.",
    summary:
      "Pepro structure vos pages, vos contenus et leur socle technique pour rendre votre offre plus compréhensible par les visiteurs comme par les moteurs de recherche.",
    price: "Selon périmètre",
    priceNote: "Accompagnement SEO",
    accent: "#7af0bd",
    accentSoft: "#c9ffe7",
    image: "/assets/img/projects/school-landing.png",
    imageAlt: "Exemple de page web structurée par Pepro",
    visualLabel: "Architecture de contenu / SEO technique / Parcours",
    problemTitle: "Une page invisible ne peut pas convaincre.",
    problem:
      "Un site peut être bien conçu tout en répondant mal aux recherches de ses futurs clients. Des pages trop générales, une hiérarchie confuse ou des fondations techniques fragiles limitent sa capacité à émerger.",
    responseTitle: "Nous relions intention, contenu et technique.",
    response:
      "Les requêtes utiles guident l’architecture des pages. Titres, contenus, liens internes, performance et données structurées sont ensuite travaillés comme un ensemble cohérent.",
    deliverables: [
      "Analyse des objectifs et des recherches prioritaires",
      "Architecture des pages et intentions associées",
      "Recommandations éditoriales exploitables",
      "Optimisation des balises et du maillage interne",
      "Contrôle des fondations SEO techniques",
      "Plan d’amélioration priorisé",
    ],
    outcomes: [
      "Une offre mieux comprise par les moteurs",
      "Des pages alignées sur les recherches utiles",
      "Un maillage interne plus cohérent",
      "Une base mesurable et améliorable",
    ],
    process: [
      { title: "Observer", copy: "Nous clarifions les offres, les cibles et l’état actuel des pages." },
      { title: "Structurer", copy: "Chaque intention utile trouve sa place dans une architecture lisible." },
      { title: "Optimiser", copy: "Contenu, balises, liens et technique sont travaillés de concert." },
      { title: "Mesurer", copy: "Les priorités suivantes s’appuient sur les données disponibles." },
    ],
    faqs: [
      {
        question: "Le SEO est-il compris dans la création d’un site ?",
        answer:
          "Le socle SEO technique et la structuration initiale des pages sont compris dans le périmètre d’un site vitrine. Un travail éditorial ou local plus large fait l’objet d’un cadrage séparé.",
      },
      {
        question: "Pouvez-vous intervenir sur un site existant ?",
        answer:
          "Oui. Nous examinons d’abord les pages, les contenus et les contraintes techniques afin de produire des recommandations priorisées et réalistes.",
      },
      {
        question: "Pouvez-vous garantir une première position ?",
        answer:
          "Non. Aucun prestataire sérieux ne peut garantir une position précise. Nous nous engageons sur la qualité du travail, la clarté des priorités et leur mise en œuvre mesurable.",
      },
    ],
    sibling: { label: "Découvrir les sites vitrines", href: "/digital/creation-site-internet" },
  },
  {
    slug: "logiciel-metier",
    number: "04",
    eyebrow: "Outil métier / MVP",
    title: "Votre façon de travailler mérite son propre outil.",
    summary:
      "Nous transformons un processus, une idée ou un assemblage de fichiers dispersés en une interface métier claire et évolutive.",
    price: "1 490 € HT",
    priceNote: "Outil métier ou MVP à partir de",
    accent: "#ffba68",
    accentSoft: "#ffe0b8",
    image: "/assets/img/projects/school-dashboard.png",
    imageAlt: "Exemple de tableau de bord métier développé par Pepro",
    visualLabel: "Interface métier / Données / Rôles utilisateurs",
    problemTitle: "Les outils génériques finissent souvent par dicter le processus.",
    problem:
      "Tableurs, doubles saisies et logiciels déconnectés font perdre du temps et rendent l’information difficile à suivre. Un produit sur mesure devient pertinent lorsque cette friction est récurrente et clairement identifiable.",
    responseTitle: "Nous partons du travail réel, pas d’une liste de fonctions.",
    response:
      "Les rôles, les données et les décisions structurent l’interface. Une première version fonctionnelle permet de valider l’usage avant d’élargir progressivement le produit.",
    deliverables: [
      "Cadrage du processus et des utilisateurs",
      "Prototype des parcours prioritaires",
      "Interface responsive sur mesure",
      "Gestion des données et des accès",
      "Connexions utiles avec vos outils",
      "Première version fonctionnelle déployée",
    ],
    outcomes: [
      "Moins de manipulations répétitives",
      "Des informations mieux centralisées",
      "Une interface adaptée aux utilisateurs",
      "Un socle capable d’évoluer par étapes",
    ],
    process: [
      { title: "Observer", copy: "Nous suivons le processus, ses acteurs, ses données et ses exceptions." },
      { title: "Prototyper", copy: "Le parcours principal est matérialisé avant le développement complet." },
      { title: "Construire", copy: "La première version privilégie l’usage essentiel et une base maintenable." },
      { title: "Étendre", copy: "Les retours réels orientent les intégrations et fonctions suivantes." },
    ],
    faqs: [
      {
        question: "Qu’est-ce qui est compris dans le prix de départ ?",
        answer:
          "Le prix de départ correspond à un prototype fonctionnel et une interface sur mesure. Le périmètre exact dépend des rôles, données, règles métier et intégrations nécessaires.",
      },
      {
        question: "Pouvez-vous remplacer nos tableurs ?",
        answer:
          "Oui lorsque leurs usages et règles peuvent être clairement cartographiés. Nous vérifions d’abord les données existantes et les exceptions avant de proposer une migration.",
      },
      {
        question: "L’outil pourra-t-il évoluer ?",
        answer:
          "Oui. L’objectif d’un MVP est précisément de valider le cœur de l’usage puis de faire évoluer le produit à partir de besoins observés.",
      },
    ],
    sibling: { label: "Découvrir l’IA & automatisation", href: "/digital/ia-automatisation" },
  },
  {
    slug: "ia-automatisation",
    number: "05",
    eyebrow: "IA & automatisation",
    title: "Automatiser le répétitif. Garder l’humain là où il compte.",
    summary:
      "Pepro connecte l’IA et l’automatisation à vos documents, vos données et vos outils pour traiter un cas d’usage concret sans perdre le contrôle.",
    price: "590 € HT",
    priceNote: "Automatisation d’un processus à partir de",
    accent: "#ff86d8",
    accentSoft: "#ffd0ef",
    image: "/assets/img/projects/ai-builder-editor.png",
    imageAlt: "Interface d’un outil assisté par intelligence artificielle conçu par Pepro",
    visualLabel: "Projet réel / Assistant IA / Interface de contrôle",
    problemTitle: "L’IA isolée ajoute parfois une étape au lieu d’en retirer une.",
    problem:
      "Un outil générique, sans accès au bon contexte ni connexion au processus, produit des résultats difficiles à vérifier. L’enjeu n’est pas d’ajouter une IA, mais de choisir l’endroit où elle apporte réellement de la valeur.",
    responseTitle: "Nous commençons par un seul flux utile et contrôlable.",
    response:
      "Entrées, règles, données accessibles et validation humaine sont définies avant l’intégration. L’automatisation s’insère ensuite dans vos outils au niveau strictement nécessaire.",
    deliverables: [
      "Cadrage du processus à automatiser",
      "Cartographie des données et des contrôles",
      "Workflow ou assistant fonctionnel",
      "Connexion aux outils retenus",
      "Interface de suivi si nécessaire",
      "Documentation du fonctionnement",
    ],
    outcomes: [
      "Moins de tâches répétitives",
      "Un résultat plus facile à contrôler",
      "Une intégration dans le flux existant",
      "Un premier cas d’usage avant généralisation",
    ],
    process: [
      { title: "Choisir", copy: "Nous isolons un cas d’usage précis, fréquent et suffisamment vérifiable." },
      { title: "Sécuriser", copy: "Données, droits, règles et validation humaine sont explicités." },
      { title: "Connecter", copy: "Le workflow est intégré aux documents et outils réellement nécessaires." },
      { title: "Évaluer", copy: "Le fonctionnement est observé avant d’étendre l’automatisation." },
    ],
    faqs: [
      {
        question: "Que comprend le prix de départ ?",
        answer:
          "Il correspond à l’automatisation d’un processus clairement délimité et à son intégration aux outils nécessaires. Un système multi-processus ou une application complète demande un cadrage distinct.",
      },
      {
        question: "Travaillez-vous avec nos outils actuels ?",
        answer:
          "Oui lorsque leurs API, exports ou mécanismes d’intégration le permettent. Cette compatibilité est vérifiée pendant le cadrage.",
      },
      {
        question: "L’humain peut-il garder la validation finale ?",
        answer:
          "Oui. Pour les usages sensibles, nous prévoyons une étape de contrôle humain et une traçabilité adaptée au processus.",
      },
    ],
    sibling: { label: "Découvrir les outils métier", href: "/digital/logiciel-metier" },
  },
  {
    slug: "maintenance-support",
    number: "06",
    eyebrow: "Maintenance & support",
    title: "Un site en ligne n’est pas un site laissé seul.",
    summary:
      "Mises à jour, sauvegardes, surveillance et support : Pepro maintient votre socle numérique et vous donne un interlocuteur qui connaît son fonctionnement.",
    price: "290 € HT / mois",
    priceNote: "Forfait Essentiel à partir de",
    accent: "#8ca9ff",
    accentSoft: "#d3ddff",
    image: "/assets/img/projects/ecommerce-catalog-admin.png",
    imageAlt: "Interface d’administration d’une solution maintenue par Pepro",
    visualLabel: "Maintenance / Sauvegardes / Surveillance / Support",
    problemTitle: "Les petites alertes deviennent coûteuses lorsqu’elles sont ignorées.",
    problem:
      "Mises à jour reportées, sauvegardes non vérifiées et erreurs silencieuses fragilisent progressivement un site ou une application. Sans suivi clair, chaque incident commence par une nouvelle phase de découverte.",
    responseTitle: "Nous entretenons le contexte autant que la technique.",
    response:
      "Le forfait Essentiel couvre les besoins récurrents de mise à jour, sauvegarde, surveillance et support. Le forfait Pro ajoute un suivi plus complet selon les priorités du site.",
    deliverables: [
      "Mises à jour du socle couvert",
      "Sauvegardes selon l’environnement",
      "Surveillance des points convenus",
      "Support et suivi des demandes",
      "Signalement des risques identifiés",
      "Interventions cadrées selon le forfait",
    ],
    outcomes: [
      "Un interlocuteur qui connaît le contexte",
      "Des opérations récurrentes suivies",
      "Des risques signalés plus tôt",
      "Un cadre clair pour les demandes",
    ],
    process: [
      { title: "Reprendre", copy: "Nous examinons le périmètre, les accès et l’état technique initial." },
      { title: "Sécuriser", copy: "Sauvegardes, mises à jour et points de surveillance sont organisés." },
      { title: "Suivre", copy: "Les demandes et événements sont traités dans le cadre du forfait choisi." },
      { title: "Améliorer", copy: "Les corrections ou évolutions plus larges sont priorisées séparément." },
    ],
    faqs: [
      {
        question: "Quelle différence entre Essentiel et Pro ?",
        answer:
          "Essentiel débute à 290 € HT par mois et couvre mises à jour, sauvegardes, surveillance et support. Pro débute à 590 € HT par mois et ajoute maintenance complète, sécurité, corrections prioritaires, performance et suivi SEO.",
      },
      {
        question: "Pouvez-vous reprendre un site que vous n’avez pas créé ?",
        answer:
          "Oui, après un diagnostic technique. Celui-ci permet de vérifier l’état du site, ses accès, ses dépendances et les risques avant de confirmer le périmètre de maintenance.",
      },
      {
        question: "Les nouvelles fonctionnalités sont-elles incluses ?",
        answer:
          "Les évolutions importantes sont cadrées séparément. Le forfait définit les opérations récurrentes et le niveau de support couvert.",
      },
    ],
    sibling: { label: "Découvrir les outils métier", href: "/digital/logiciel-metier" },
  },
];

export function getDigitalOffer(slug: string) {
  return digitalOffers.find((offer) => offer.slug === slug);
}
