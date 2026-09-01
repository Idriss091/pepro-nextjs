# Plan accéléré

Ce plan retire volontairement l'audit Lighthouse initial et la configuration d'une Preview Vercel protégée. Nous privilégions un prototype local rapide, réversible et comparable à l'existant.

## Avancement au 1er septembre 2026

- Étapes 1 et 2 d'abord construites sous `/nouveau-site`, puis promues sur `/` après validation.
- Effet de révélation du manifeste ajouté : coloration au scroll et signature « Pepro » en arrière-plan.
- Première page de pôle créée sous `/digital`.
- Pages détaillées « Création/refonte de site » et « E-commerce » terminées sous `/digital`.
- Bandeau de consentement harmonisé avec la V2, sans modifier son apparence sur l'ancien site.
- Les six offres Pepro Digital disposent maintenant de leur page : site vitrine, e-commerce, SEO, logiciel métier, IA & automatisation et maintenance.
- Page `/realisations` et trois études de cas V2 terminées : GFA Pro, portail scolaire et Northstar.
- Les anciennes URLs projets redirigent maintenant vers les études de cas V2.
- Pages Tarifs, À propos et Contact V2 terminées.
- Le formulaire V2 réutilise l'envoi Formspree, le consentement, l'anti-spam et les événements déjà en place.
- `/a-propos` et `/contact` sont les URLs finales ; `/about-us` et `/contact-us` redirigent désormais vers elles.
- Validation transversale terminée sur les 15 routes V2 : statuts, titres, descriptions, `h1`, liens internes et protection `noindex` contrôlés.
- Audit de pré-lancement, table de migration et procédure de basculement réversible ajoutés dans ce dossier.
- Validation reçue : la V2 est promue localement sur `/`, les redirections permanentes et l'indexation des URLs finales sont activées.
- Après validation, l'ancien site, ses composants, ses styles, ses dépendances et ses médias inutilisés ont été supprimés.
- Le répertoire public est passé d'environ 55 Mo à 8,3 Mo.
- Le retour arrière passe désormais par Git ; `/ancien-site` n'est plus servi.
- Le déploiement sur l'hébergement reste une opération distincte.

## Étape 0 — Direction (faite dans ce dossier)

- Archiver les références visuelles.
- Fixer la hiérarchie commerciale et la grammaire graphique.
- Vérifier les composants ReactBits réellement disponibles via le registre MCP.
- Définir les limites d'animation, d'accessibilité, de SEO et de performance.

**Livrable :** ce dossier `direction/`.

## Étape 1 — Socle visuel isolé

- Construire les tokens V2 : couleurs, typographie, espacements, rayons, bordures et halos.
- Créer les primitives V2 : conteneur, bouton, eyebrow, titre de section, media frame et focus states.
- Construire une navbar responsive et accessible.
- Monter le prototype sous `/nouveau-site`, avec `noindex`, sans modifier `/`.

**Critère de sortie :** hero + navbar convaincants sur desktop et mobile, sans régression sur l'ancien site.

## Étape 2 — Homepage complète

Ordre de production :

1. Hero : promesse claire, estimation, réalisations.
2. Bande de preuves : clients et faits vérifiables.
3. Pepro Digital : trois grandes scènes éditoriales, pas une grille générique.
4. Cas GFA Pro : preuve principale, grande capture, résultat concret.
5. Pepro Engineering : section courte et visuellement distincte.
6. Repères de prix : format éditorial sobre.
7. Autres réalisations : trois projets maximum.
8. Témoignages : uniquement des citations autorisées.
9. Équipe : personnes réelles, rôle réel, contact direct.
10. FAQ, conseils, CTA final et footer.

**Critère de sortie :** contenu compréhensible sans animation, responsive, navigation clavier correcte, aucune affirmation inventée.

## Étape 3 — Validation rapide (faite)

- Relecture commerciale et validation des informations listées dans `INFORMATIONS-A-VALIDER.md`.
- Vérification visuelle aux largeurs 390, 768, 1024 et 1440 px.
- Test clavier et préférence `prefers-reduced-motion`.
- `pnpm lint` puis `pnpm build`.
- Contrôle ciblé du LCP, du CLS et du poids JavaScript de la homepage V2.

Ce contrôle de performance est fait **après** la première version utile, pas comme préalable bloquant.

## Étape 4 — Décision garder/revenir (V2 retenue, bascule locale faite)

### Résultat de la validation

- V2 promue sur `/`.
- Pages `/digital`, les six offres, `/realisations`, `/tarifs`, `/a-propos` et `/contact` rendues indexables.
- Table route actuelle → nouvelle route appliquée avec des redirections permanentes.
- Sitemap, canonicals, données structurées et maillage interne mis à jour.

### Retour arrière possible

- Rétablir le commit ou le tag antérieur au nettoyage avec Git.
- Les redirections historiques restent actives tant que la V2 est en production.

## Ce qui est volontairement reporté

- Preview Vercel protégée.
- Audit exhaustif de toutes les anciennes routes.
- Migration de toutes les pages en une seule fois.
- CMS, internationalisation et nouvelles intégrations métier.
- Multiplication de pages locales ou d'articles SEO.
