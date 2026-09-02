# Pepro — site vitrine

Site commercial de [Pepro](https://pepro.fr), agence digitale et logicielle basée à Ris-Orangis. Il présente les offres, les tarifs, les réalisations et les conseils de l’agence, puis oriente les visiteurs vers le formulaire de contact ou WhatsApp.

## Stack

- Next.js 16 avec App Router
- React 19 et TypeScript strict
- CSS Modules et Tailwind CSS 4
- Formspree pour le formulaire de contact
- Google Tag Manager après consentement explicite

## Démarrage

Prérequis : une version récente de Node.js et pnpm 10.

```bash
pnpm install
pnpm dev
```

Le site est disponible sur <http://localhost:3000>.

```bash
pnpm lint
pnpm build
pnpm start
```

pnpm est l’unique gestionnaire de paquets du projet. Le fichier `pnpm-lock.yaml` doit rester versionné.

## Configuration

Créer un fichier `.env.local` pour activer les intégrations externes :

```env
NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT=https://formspree.io/f/...
NEXT_PUBLIC_GTM_ID=GTM-...
```

Sans endpoint Formspree, le site fonctionne mais le formulaire signale la configuration manquante. Sans identifiant GTM, aucun script analytique n’est chargé.

## Organisation

```text
src/app/                 Routes, métadonnées, sitemap et pages légales
src/components/v2/       Interface actuelle et composants interactifs
src/data/                Offres, projets et contenu structuré de l’accueil
src/lib/                 Configuration du site, consentement et analytics
src/assets/jsonData/     Articles et témoignages
public/                  Images, logos et captures des réalisations
direction/               Décisions de conception, SEO et migration
```

Les offres et réalisations sont générées statiquement depuis `src/data`. Le projet ne dépend d’aucune base de données ni d’un CMS.

## Routes principales

- `/` — accueil
- `/digital` et `/digital/[slug]` — offres
- `/realisations` et `/realisations/[slug]` — études de cas
- `/tarifs`, `/a-propos`, `/contact`
- `/blog` et `/blog/[id]`

Les anciennes URL sont redirigées dans `next.config.ts`. Le proxy `src/proxy.ts` normalise `www.pepro.fr` vers `pepro.fr` et laisse Next.js gérer le cache de chaque route.

## Modifier le contenu

- Accueil : `src/data/homeContent.ts` et `src/components/v2/V2HomePage.tsx`
- Offres : `src/data/digitalOffers.ts`
- Réalisations : `src/data/projectCaseStudies.ts` et `src/data/v2Projects.ts`
- Blog : `src/assets/jsonData/blog/BlogPeproData.json`
- Coordonnées et domaine : `src/lib/site.ts`

Avant livraison, exécuter `pnpm lint` et `pnpm build`.
