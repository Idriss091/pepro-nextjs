# Architecture, SEO et performance

## Stratégie appliquée

La V2 est construite avec des composants isolés sous `src/components/v2/` et servie sur `/`.

- `/nouveau-site` redirige définitivement vers `/`.
- Les styles V2 sont basés sur des tokens explicites et n'écrasent pas les classes historiques.
- L'ancien site et ses dépendances ont été supprimés après validation de la V2.
- La version précédente reste récupérable dans l'historique Git.
- Les redirections du plan de migration sont actives et testées sans chaîne.

Le prototype temporaire a donc été transformé en architecture de production, sans maintenir deux interfaces en parallèle.

## Architecture React/Next.js

- Next.js 16, React 19, TypeScript et Tailwind CSS 4 sont conservés.
- Server Components par défaut pour le contenu, les métadonnées et le JSON-LD.
- Frontières `"use client"` limitées aux animations, menus, accordéons et formulaires interactifs.
- Les animations lourdes sont importées dynamiquement au niveau de leur section.
- Les données de services, projets, prix et FAQ vivent dans des structures typées, séparées de la présentation.
- Les images utilisent `next/image`, avec dimensions explicites, `sizes` et priorité uniquement pour le média LCP.
- Les polices utilisent `next/font` ou des fichiers auto-hébergés avec peu de graisses.

## Architecture actuelle des URL

```text
/
/digital/
/digital/creation-site-internet/
/digital/e-commerce/
/digital/seo/
/digital/logiciel-metier/
/digital/ia-automatisation/
/digital/maintenance-support/
/realisations/
/realisations/[slug]/
/tarifs/
/a-propos/
/blog/
/blog/[id]/
/contact/
```

Le développement d'un pôle Engineering autonome reste une évolution éditoriale à venir.

## Contrat SEO par page

- Un H1 unique et visible.
- `title`, description, canonical et Open Graph spécifiques.
- URL descriptive et stable ; slugs, jamais identifiants numériques publics.
- Liens HTML textuels et ancres descriptives.
- Breadcrumb visible sur les pages profondes et JSON-LD cohérent.
- `Organization`/`ProfessionalService` avec uniquement des informations vraies.
- Sitemap couvrant pages commerciales, réalisations et conseils publiés.
- Contenu principal rendu côté serveur ; aucun texte important dans un canvas.
- Redirections 301 documentées route par route au moment de la bascule.

## Budget de performance proposé

Ces budgets continuent de guider les évolutions :

- LCP cible : ≤ 2,5 s au 75e percentile.
- CLS cible : ≤ 0,1.
- INP cible : ≤ 200 ms.
- Une seule scène WebGL active à la fois.
- Aucun autoplay vidéo lourd dans le hero.
- JavaScript initial réservé au shell et aux interactions visibles ; le reste est différé.

## Accessibilité

- Contraste WCAG AA pour le texte et les contrôles.
- Focus visible, ordre clavier logique, menu mobile refermable avec Échap.
- Boutons et liens correctement distingués.
- Respect de `prefers-reduced-motion` et équivalent statique pour chaque effet.
- Les captures de projets ont un texte alternatif informatif ; les halos décoratifs sont ignorés des technologies d'assistance.
