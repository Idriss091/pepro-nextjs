# Rapport de basculement

## État

La bascule est implémentée et validée dans le build local de production au 1er septembre 2026. Elle n'a pas été déployée sur un hébergement par cette opération.

- La V2 est servie sur `/`.
- L'ancien site et ses composants ont été supprimés après validation de la V2.
- `/nouveau-site` redirige définitivement vers `/`.
- Les anciennes routes principales redirigent directement vers les nouvelles destinations.
- Les pages V2 finales sont indexables et possèdent leur canonical.
- Le sitemap contient 22 URLs finales et aucune URL de travail ou ancienne URL remplacée.
- Les données structurées `WebSite` et `ProfessionalService` utilisent Ris-Orangis.

## Validation du build

- `pnpm lint` : réussi.
- `pnpm build` : réussi, 27 pages statiques générées.
- `git diff --check` : réussi.
- Les 22 URLs du sitemap : HTTP 200, un `h1` et une canonical correcte.
- 11 redirections représentatives contrôlées : HTTP 308 et destination directe.
- `/ancien-site` : HTTP 404, comme attendu après suppression.

## Lighthouse après bascule

| Indicateur | Résultat |
| --- | ---: |
| Performance | 95 / 100 |
| Accessibilité | 100 / 100 |
| Bonnes pratiques | 100 / 100 |
| SEO | 100 / 100 |
| FCP | 1,2 s |
| LCP | 2,8 s |
| TBT | 20 ms |
| CLS | 0 |
| Transfert total | 342 Kio |

## Retour arrière

Le retour arrière passe désormais par Git : rétablir un commit ou un tag antérieur au nettoyage. Il n'existe plus de copie publique de l'ancien accueil sous `/ancien-site`.
