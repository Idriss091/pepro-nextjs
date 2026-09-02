import type { StaticImageData } from "next/image";
import finoviaDesktop from "../../direction/references/finovia-desktop.png";

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
  image: string | StaticImageData;
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
    image: finoviaDesktop,
    imageAlt: "Interface de l’application financière Finovia conçue par Pepro",
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
        question: "Combien de temps faut-il pour mettre le site en ligne ?",
        answer:
          "Un site vitrine resserré demande généralement quatre à huit semaines. Le calendrier dépend surtout du nombre de pages, de la disponibilité des contenus et de la rapidité des validations ; il est confirmé après le cadrage.",
      },
      {
        question: "Que devons-nous préparer avant de commencer ?",
        answer:
          "Vos objectifs, vos offres, les contenus déjà disponibles et les accès à l’existant constituent le meilleur point de départ. Si certains éléments manquent, nous vous aidons à les hiérarchiser pendant le cadrage.",
      },
      {
        question: "Le site et ses accès nous appartiendront-ils ?",
        answer:
          "Oui. Les livrables et accès prévus au devis vous sont remis à la livraison. Le domaine, l’hébergement et les comptes stratégiques sont autant que possible ouverts à votre nom pour éviter toute dépendance inutile.",
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
        question: "Peut-on migrer notre boutique sans perdre le catalogue ni le référencement ?",
        answer:
          "Oui, après un audit des produits, clients, commandes et URL existantes. Nous préparons la correspondance des données, les imports et les redirections ; les limites éventuelles sont identifiées avant la migration.",
      },
      {
        question: "La boutique peut-elle se connecter à notre stock, notre ERP ou nos transporteurs ?",
        answer:
          "Oui lorsque les outils disposent d’une API, d’un connecteur fiable ou d’un format d’échange exploitable. Nous vérifions les flux, les volumes et les cas d’erreur avant de chiffrer l’intégration.",
      },
      {
        question: "Quels coûts restent à prévoir après la mise en ligne ?",
        answer:
          "Selon la solution : hébergement, modules ou licences, commissions de paiement, maintenance et futures évolutions. Ces coûts récurrents sont distingués du budget de réalisation avant le démarrage.",
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
        question: "En combien de temps peut-on voir des résultats ?",
        answer:
          "Les corrections techniques peuvent produire des signaux rapidement, mais une progression durable se mesure généralement sur plusieurs mois. Le délai dépend de l’historique du domaine, de la concurrence et du travail éditorial nécessaire.",
      },
      {
        question: "Comment saurons-nous si le travail porte ses fruits ?",
        answer:
          "Nous suivons des indicateurs reliés à votre activité : visibilité sur les recherches prioritaires, pages qui progressent, trafic qualifié et prises de contact. Les actions réalisées et les prochaines priorités restent lisibles.",
      },
      {
        question: "Faut-il refaire le site avant de travailler le SEO ?",
        answer:
          "Pas systématiquement. Un audit permet de distinguer ce qui peut être corrigé sur l’existant de ce qui exige une refonte. Nous privilégions les améliorations utiles avant de recommander une reconstruction.",
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
        question: "Comment savoir si un logiciel sur mesure est vraiment nécessaire ?",
        answer:
          "Nous comparons d’abord le coût des tâches manuelles et des outils dispersés avec les solutions déjà disponibles. Le sur-mesure devient pertinent lorsqu’un processus stable et fréquent reste mal couvert par le marché.",
      },
      {
        question: "Serons-nous propriétaires du code et de nos données ?",
        answer:
          "Oui. La propriété des livrables, l’accès au dépôt de code, l’hébergement et la restitution des données sont précisés au contrat. Vous ne devez pas dépendre d’un prestataire pour récupérer votre propre produit.",
      },
      {
        question: "Comment éviter que le budget ne dérape ?",
        answer:
          "Nous séparons le besoin essentiel des fonctions secondaires, puis avançons par jalons démontrables. Toute demande qui modifie le périmètre est évaluée avant d’être développée.",
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
        question: "Quel processus vaut réellement la peine d’être automatisé ?",
        answer:
          "Un processus fréquent, répétitif, mesurable et suffisamment stable constitue un bon candidat. Nous commençons par le point de friction qui coûte réellement du temps, même si une automatisation classique suffit sans IA.",
      },
      {
        question: "Où vont les données utilisées par l’IA ?",
        answer:
          "Cela dépend du modèle et de l’architecture retenus. Avant tout développement, nous précisons les données transmises, leur durée de conservation et les prestataires impliqués, puis nous limitons le flux au strict nécessaire.",
      },
      {
        question: "Que se passe-t-il lorsque l’IA se trompe ?",
        answer:
          "Les cas incertains peuvent être bloqués, signalés ou transmis à une personne. Seuils de confiance, journalisation et validation humaine sont définis selon le risque métier au lieu de supposer que le modèle aura toujours raison.",
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
        question: "Dans quel délai intervenez-vous lorsqu’un problème survient ?",
        answer:
          "Le délai de prise en charge dépend de la criticité et du forfait retenu. Les horaires, canaux de contact et niveaux de priorité sont écrits dans la proposition ; une astreinte permanente n’est prévue que si elle est contractualisée.",
      },
      {
        question: "Les sauvegardes permettront-elles réellement de restaurer le site ?",
        answer:
          "Une sauvegarde utile doit couvrir les fichiers et les données, être conservée séparément et pouvoir être restaurée. La fréquence, la rétention et les contrôles possibles sont définis selon votre environnement.",
      },
      {
        question: "Qu’est-ce qui n’est pas compris dans le forfait ?",
        answer:
          "Les nouvelles fonctionnalités, refontes importantes, licences tierces et interventions hors périmètre sont chiffrées séparément. Le forfait détaille précisément les opérations récurrentes et le volume de support inclus.",
      },
    ],
    sibling: { label: "Découvrir les outils métier", href: "/digital/logiciel-metier" },
  },
];

export function getDigitalOffer(slug: string) {
  return digitalOffers.find((offer) => offer.slug === slug);
}
