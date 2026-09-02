# Plan complet avant lancement — Pepro V3

## 1. Décision de positionnement

Pepro sera présenté comme un **studio de produits numériques** capable de concevoir à la fois l'expérience publique et le système métier qui fonctionne derrière.

Promesse de travail :

> Pepro conçoit les sites, logiciels et plateformes qui font réellement fonctionner les entreprises.

Cette formulation remplace la séparation trop abstraite « Digital / Software / Engineering ». L'ingénierie reste une preuve de profondeur technique, mais elle n'est plus un intitulé que le visiteur doit interpréter.

### Architecture commerciale

1. **Sites & commerce**
   - Sites corporate et plateformes éditoriales
   - E-commerce B2B et B2C
   - SEO technique, contenu et conversion
   - Refonte et migration

2. **Logiciels & plateformes**
   - Logiciels métier
   - SaaS, extranets et portails
   - Tableaux de bord et simulateurs
   - Réservation, e-learning et espaces clients
   - API et intégrations

3. **IA, data & automatisation**
   - Automatisation de processus
   - Assistants et fonctions IA intégrées
   - Traitement, visualisation et exploitation des données
   - Outils d'aide à la décision et simulation

4. **Cloud & évolution**
   - Architecture, déploiement et observabilité
   - Hébergement, performance et sécurité
   - Maintenance corrective et évolutive
   - Reprise et modernisation d'applications existantes

La stratégie produit, la recherche, l'UX/UI, le prototypage et l'architecture technique sont présentés comme la méthode commune à ces quatre familles.

## 2. Enseignements des projets publics

### VoltPath — cas produit principal

Pages analysées :

- https://www.voltpath.fr/
- https://www.voltpath.fr/produit

Preuves visibles : pré-screening de raccordement, comparaison de scénarios, recommandations décisionnelles, exports et console destinée aux développeurs, consultants et investisseurs énergie.

Rôle Pepro confirmé par le client : **logiciel + site**.

Angle du cas : transformer une analyse énergétique complexe en décision exploitable.

Médias utilisables provisoirement : hero public et aperçu public de la console. Les données de performance, la durée du projet et la stack resteront en placeholders jusqu'à confirmation.

### Numidex Auto — cas logiciel métier + acquisition

Pages analysées :

- https://www.numidexauto.fr/
- https://www.numidexauto.fr/calculateur
- catalogue et fiches véhicules accessibles depuis le site

Preuves visibles : catalogue automobile, sourcing Europe/Chine, parcours France/Algérie, calculateur de budget d'import, variantes de régime douanier, estimation des frais, multilingue français/arabe et contact WhatsApp.

Rôle Pepro confirmé : **logiciel + site**.

Angle du cas : réunir acquisition, catalogue, estimation et accompagnement d'import dans un même parcours.

Informations à compléter : périmètre du logiciel interne, éventuel back-office, sources des véhicules, automatisations, résultats et stack.

### MadinahGuide — cas plateforme multiservice

Pages analysées :

- https://www.madinahguide.org/fr
- https://www.madinahguide.org/fr/reservation
- https://www.madinahguide.org/fr/cours-en-ligne

Preuves visibles : séjours linguistiques, sessions et acomptes, réservation, cours en ligne, bibliothèque pédagogique, espace élève, contenu multilingue et accompagnement WhatsApp.

Rôle Pepro confirmé : **e-learning + réservation voyage**, avec le site associé.

Angle du cas : faire cohabiter formation, contenu et réservation de séjours dans une expérience cohérente.

Informations à compléter : fonctionnement de l'espace élève, paiement, administration des sessions, stack, nombre d'apprenants/réservations et périmètre exact de Pepro.

### Sahara Cloud — cas commerce et opérations cloud

Pages analysées :

- https://sahara-cloud.com/
- offres d'hébergement, VPS et domaines
- espace client, panier, checkout et support visibles dans la navigation publique

Preuves visibles : recherche de domaine, offres d'hébergement, VPS, panier, compte client, tickets de support et contenus d'aide.

Angle provisoire : structurer une offre cloud locale et son parcours commercial en ligne.

Informations à compléter avant publication : rôle exact de Pepro — site seul, parcours marchand, espace client, automatisations, infrastructure ou ensemble de ces éléments. Aucune revendication non confirmée ne sera publiée.

### GFA Pro — cas e-commerce B2B

Preuves déjà documentées : catalogue de plus de 35 000 références, navigation métier, transporteurs et thème PrestaShop sur mesure.

Règle : GFA Pro n'apparaît qu'une fois sur l'accueil. L'étude de cas détaillée reste accessible depuis l'index des réalisations.

## 3. Architecture du site

### Navigation principale

- Accueil
- Services
- Réalisations
- Méthode
- À propos
- Conseils
- Demander une estimation

### Routes cibles

- `/`
- `/services`
- `/services/sites-ecommerce`
- `/services/logiciels-plateformes`
- `/services/ia-data-automatisation`
- `/services/cloud-maintenance`
- `/realisations`
- `/realisations/voltpath`
- `/realisations/numidex-auto`
- `/realisations/madinahguide`
- `/realisations/sahara-cloud`
- `/realisations/gfa-pro`
- `/methode`
- `/tarifs`
- `/a-propos`
- `/conseils`
- `/contact`

Les anciennes routes resteront redirigées. Le sitemap et les canonicals seront mis à jour seulement lorsque les nouvelles pages seront prêtes.

## 4. Homepage — ordre final

### 01. Navigation

Base envisagée : ReactBits Pro `navigation-13`, adaptée aux tokens Pepro.

- navigation stable et lisible au repos ;
- micro-animation des libellés au survol ;
- menu curtain uniquement sur mobile ou petit desktop ;
- focus clavier visible ;
- aucun effet magnétique gênant.

### 02. Hero

Objectif : faire comprendre l'offre en moins de cinq secondes.

Contenu :

- promesse « site + système métier » ;
- courte phrase de preuve ;
- CTA principal « Parler de votre projet » ;
- CTA secondaire « Voir nos réalisations » ;
- montage de 3 interfaces réelles : VoltPath, Numidex et MadinahGuide.

Animation : entrée typographique avec `staggered-text-tw`, profondeur légère des médias et un seul fond atmosphérique. Le contenu reste entièrement compréhensible sans animation.

### 03. Bande de preuves

- logos des projets autorisés ;
- types de produits livrés ;
- chiffres exclusivement vérifiés ;
- aucune note moyenne, faux badge ou volume de clients inventé.

### 04. Notre approche

Suppression du grand mot « Pepro » en arrière-plan.

Nouvelle séquence :

1. Cadrer le problème
2. Concevoir le parcours
3. Construire le produit
4. Déployer proprement
5. Mesurer et faire évoluer

Le bloc ReactBits `features-10` pourra fournir la logique d'un schéma de capacités reliées. Il sera simplifié : cinq nœuds maximum, icônes cohérentes, animation lente et arrêtée avec `prefers-reduced-motion`.

### 05. Services

Quatre scènes éditoriales, chacune constituée de :

- problème métier ;
- résultat recherché ;
- services associés ;
- projet servant de preuve ;
- capture réelle ou placeholder explicitement identifié.

Le composant `scroll-stack-tw` peut être utilisé sur desktop. Sur mobile et tablette, la section devient un flux vertical normal. Aucun déplacement horizontal ni contenu dépendant d'un hover.

### 06. Réalisations

Base envisagée : ReactBits Pro `showcase-7`.

Ordre :

1. VoltPath
2. Numidex Auto
3. MadinahGuide
4. Sahara Cloud
5. GFA Pro

À gauche : index, secteur, livrables et phrase résultat. À droite : aperçu sticky qui change au focus/survol. Sur mobile : cartes verticales avec image intégrée.

Pas de deuxième bloc « cas client vedette » utilisant le même projet. VoltPath pourra être visuellement dominant dans cet index sans être répété.

### 07. Méthode et collaboration

- atelier de cadrage ;
- conception et prototype ;
- livraison par étapes ;
- recette et mise en production ;
- maintenance et évolutions.

Cette section précisera aussi les livrables, la communication, la propriété des accès et la remise du code.

### 08. Modèles d'engagement

L'accueil ne présentera plus une grille assimilable à un catalogue low cost.

- Audit / cadrage
- Projet au forfait
- MVP par étapes
- Accompagnement mensuel

Les prix de départ validés restent sur `/tarifs`, avec explication du périmètre et des variables de coût.

### 09. Témoignages

Uniquement les témoignages autorisés de GFA Pro, MadinahGuide et Sahara Cloud. Chaque témoignage comporte le contexte du projet ; aucun carrousel automatique.

### 10. FAQ

Questions retenues :

1. Faut-il avoir un cahier des charges avant de vous contacter ?
2. Pouvez-vous reprendre un site ou un logiciel existant ?
3. Comment estimez-vous le budget et le délai ?
4. Pouvons-nous commencer par un prototype ou un MVP ?
5. À qui appartiennent le code, les données et les comptes techniques ?
6. Pouvez-vous connecter le produit à nos outils, API, CRM ou ERP ?
7. Comment évitez-vous une interruption lors d'une migration ?
8. Comment gérez-vous maintenance, sécurité et évolutions après lancement ?

La technologie PrestaShop peut être citée dans une réponse ou une page service, mais ne constitue pas une question principale.

### 11. CTA final

Base possible : ReactBits Pro `cta-12`, débarrassée de ses éléments décoratifs inutiles.

- une promesse ;
- un CTA ;
- formulaire court ;
- choix facultatif du type de projet ;
- alternative email/WhatsApp.

## 5. Modèle des études de cas

Chaque page suit le même récit :

1. Client, secteur et nature de la mission
2. Problème initial
3. Usagers et contraintes
4. Périmètre réalisé par Pepro
5. Décisions produit et techniques
6. Parcours ou fonctionnalité clé
7. Galerie réelle
8. Résultats vérifiés
9. Témoignage autorisé
10. CTA vers un projet comparable

Champs inconnus : `[À CONFIRMER]`. Média absent : placeholder avec ratio final. Aucun faux dashboard, résultat ou témoignage ne sera généré.

## 6. Direction artistique

Intention : **éditoriale, magnétique et crédible**.

- fond sombre Pepro conservé ;
- typographie forte, mais moins de titres géants superposés ;
- interfaces réelles comme matière visuelle principale ;
- accents colorés propres à chaque projet ;
- détails techniques discrets : grilles, repères, lignes et labels ;
- icônes Lucide pour les actions, SVG sur mesure uniquement pour les concepts propres à Pepro ;
- moins de cartes génériques et de halos décoratifs.

## 7. Système d'animation

### Moteur

Motion reste le moteur principal. GSAP n'est pas ajouté au démarrage.

GSAP sera évalué seulement si une séquence validée exige une timeline mutable ou un pinning complexe impossible à maintenir proprement avec Motion.

### Budget de mouvement

- une seule séquence sticky majeure ;
- un seul fond WebGL maximum ;
- animations de texte courtes ;
- transformations et opacité en priorité ;
- aucune inertie globale ni scroll hijacking ;
- aucun carrousel automatique ;
- aucun curseur personnalisé ;
- désactivation ou simplification sur mobile faible puissance ;
- version complète `prefers-reduced-motion`.

ReactBits est utilisé comme source de mécanismes, pas comme bibliothèque de blocs collés sans adaptation.

## 8. Stack de production

### Conservé

- Next.js 16
- React 19
- TypeScript
- Motion
- Tailwind CSS 4 et CSS Modules existants
- Lucide React
- Next/Image
- Three.js / React Three Fiber pour un seul fond si le test de performance le permet
- Formspree et gestion du consentement existante

### À ajouter au moment de l'implémentation

- Playwright pour les tests des routes et des largeurs critiques
- axe ou contrôle automatisé équivalent pour compléter la recette accessibilité
- script de contrôle des liens et métadonnées

### Non retenu avant lancement

- GSAP sans besoin démontré
- Lenis ou autre smooth-scroll global
- nouvelle bibliothèque de carrousel
- CMS, sauf besoin de publication autonome confirmé
- plusieurs scènes WebGL
- génération d'images IA imitant de faux produits clients

## 9. Gestion des médias provisoires

Les captures prises le 1er septembre 2026 sont des **références de travail**, pas encore des assets finaux.

Pour le prototype :

- captures publiques recadrées dans des cadres cohérents ;
- masquage de toute donnée personnelle ou sensible ;
- attribution interne de l'URL et de la date ;
- ratio fixe pour éviter les sauts de mise en page ;
- placeholder graphique si une fonctionnalité n'est pas publiquement visible ;
- remplacement ultérieur sans modifier la structure de la page.

Avant publication, confirmer le droit d'utiliser les logos et captures de chaque client dans le portfolio Pepro.

## 10. Phases de réalisation

### Phase A — vérité du contenu

- valider la promesse ;
- confirmer le rôle Pepro sur Sahara Cloud ;
- compléter les fonctionnalités internes de Numidex et MadinahGuide ;
- confirmer les stacks et résultats ;
- verrouiller les cinq projets publiables.

**Sortie :** contenu sans affirmation inventée, placeholders identifiés.

### Phase B — prototype visuel

- hero ;
- approche ;
- une scène service ;
- index des réalisations ;
- versions 1440 px et 390 px.

**Sortie :** validation du langage visuel et du niveau de mouvement avant reconstruction complète.

### Phase C — système et homepage

- tokens et primitives ;
- navigation ;
- homepage complète ;
- responsive ;
- reduced motion ;
- remplacement des anciens contenus et suppressions des répétitions.

**Sortie :** accueil complet compréhensible sans animation.

### Phase D — services et réalisations

- quatre pages service ;
- cinq études de cas ;
- page réalisations ;
- maillage interne et CTA contextuels.

**Sortie :** chaque promesse de service est soutenue par au moins une preuve.

### Phase E — contenus de confiance

- méthode ;
- à propos ;
- tarifs ;
- FAQ ;
- témoignages ;
- contact et pages légales.

### Phase F — recette pré-lancement

- 390, 768, 1024 et 1440 px ;
- absence totale de scroll horizontal ;
- clavier, focus, contrastes et formulaires ;
- reduced motion ;
- LCP, CLS, INP et poids JavaScript ;
- images, vidéos et polices ;
- titres, descriptions, canonicals et données structurées ;
- sitemap, robots, redirections et 404 ;
- consentement, analytics et test réel du formulaire.

### Phase G — lancement contrôlé

- sauvegarde Git et tag ;
- déploiement ;
- vérification des routes et redirections ;
- soumission du sitemap ;
- surveillance des erreurs, performances et conversions ;
- remplacement progressif des placeholders restants.

## 11. Critères bloquant la publication

- scroll horizontal sur une largeur testée ;
- projet présenté deux fois sur l'accueil ;
- capture ou logo non autorisé ;
- chiffre, résultat ou rôle non vérifié ;
- animation indispensable pour comprendre le contenu ;
- formulaire non reçu ;
- focus clavier invisible ;
- vidéo lourde chargée avant interaction sans nécessité ;
- échec du build ou route critique en erreur ;
- placeholder non explicitement recensé.

## 12. Informations laissées en placeholders

- rôle exact de Pepro sur Sahara Cloud ;
- fonctionnalités privées du logiciel Numidex Auto ;
- détail de l'espace élève et de l'administration MadinahGuide ;
- stacks de VoltPath, Numidex, MadinahGuide et Sahara Cloud ;
- dates, durées, composition des équipes ;
- résultats mesurables ;
- autorisations définitives des logos et captures ;
- photos de l'équipe Pepro.

Ces inconnues n'empêchent pas le prototype. Elles empêchent uniquement de publier l'affirmation ou le média concerné comme définitif.

