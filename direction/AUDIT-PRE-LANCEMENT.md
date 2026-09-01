# Audit de pré-lancement V2

> Document historique de la phase de pré-lancement. La V2 a ensuite été promue localement sur `/` et rendue indexable. Les résultats après bascule sont consignés dans `RAPPORT-BASCULEMENT.md`.

Audit réalisé le 1er septembre 2026 sur le build de production local. L'ancien site reste servi sur `/` et la V2 reste volontairement non indexable.

## État fonctionnel

- 15 routes V2 contrôlées : réponse HTTP 200, un seul `h1`, titre et description présents.
- Tous les liens internes rencontrés sur ces routes répondent en 200.
- Les pages V2 déclarent `noindex`, `nofollow` et `nocache` tant que la bascule n'est pas validée.
- Les nouvelles routes ne sont pas encore ajoutées au sitemap.
- Le formulaire de contact conserve le consentement, le honeypot, Formspree et les événements analytiques existants.
- L'ancien site et ses anciennes URLs restent accessibles.

## Mesure Lighthouse mobile

Mesure initiale de `/nouveau-site` :

| Indicateur | Résultat |
| --- | ---: |
| Performance | 72 / 100 |
| Accessibilité | 96 / 100 |
| Bonnes pratiques | 100 / 100 |
| SEO | 66 / 100 |
| FCP | 2,9 s |
| LCP | 5,8 s |
| TBT | 80 ms |
| CLS | 0,005 |
| Transfert total | 648 Kio |

Mesure finale après suppression de l'apparition différée du `h1` et correction des contrastes :

| Indicateur | Résultat final |
| --- | ---: |
| Performance | 74 / 100 |
| Accessibilité | 100 / 100 |
| Bonnes pratiques | 100 / 100 |
| SEO | 66 / 100 |
| FCP | 3,8 s |
| LCP | 4,8 s |
| TBT | 60 ms |
| CLS | 0 |
| Transfert total | 643 Kio |

Le score SEO de 66 est attendu : Lighthouse pénalise le `noindex`, qui est ici une protection voulue avant validation.

Contrôles complémentaires sur `/digital/creation-site-internet` et `/contact` : accessibilité 100, bonnes pratiques 100, SEO 66 attendu pour la même raison.

## Points techniques connus

Le layout racine charge encore les feuilles de style historiques Bootstrap, Swiper, Animate et le thème de l'ancien site. Elles représentent environ 1 Mio non compressé dans le build et expliquent l'essentiel du CSS inutilisé et bloquant sur la V2. La séparation complète demanderait de déplacer les anciennes routes dans un groupe de layout dédié. Ce chantier est utile, mais il est reporté après validation visuelle afin de ne pas fragiliser le site actuel.

Le proxy applique actuellement `Cache-Control: no-store`, ce qui empêche le back-forward cache du navigateur. À revoir au lancement pour les pages publiques statiques.

## Décision de mise en ligne

La V2 peut être présentée et testée. La mise en production sur `/` reste conditionnée à :

1. la validation visuelle desktop et mobile ;
2. la suppression du `noindex` ;
3. l'ajout des canonicals, du sitemap et des données structurées sur les URLs finales ;
4. l'activation de la table de redirections validée ;
5. un nouveau Lighthouse sur le domaine réel après déploiement.
