# Table de migration appliquée localement

Cette table a été appliquée au build local. Next.js utilise une redirection permanente HTTP 308, équivalente à une 301 pour signaler durablement le changement d'URL tout en conservant la méthode HTTP.

| URL actuelle | URL V2 proposée | Action au lancement |
| --- | --- | --- |
| `/` | `/` | Remplacer uniquement le composant de page d'accueil |
| `/services` | `/digital` | Redirection permanente |
| `/services/sites-seo-parcours-digitaux` | `/digital` | Redirection permanente vers le pôle couvrant l'ensemble du sujet |
| `/services/developpement-web-logiciel` | `/digital/logiciel-metier` | Redirection permanente |
| `/services/integration-ia` | `/digital/ia-automatisation` | Redirection permanente |
| `/services/transformation-numerique` | `/digital` | Remplacer la redirection historique actuelle |
| `/services/migration-cloud` | `/digital/logiciel-metier` | Remplacer la redirection historique actuelle |
| `/services/maintenance-applicative` | `/digital/maintenance-support` | Remplacer la redirection historique actuelle |
| `/services/cybersecurite` | `/digital` | Redirection permanente vers la présentation générale des offres |
| `/project` | `/realisations` | Redirection permanente |
| `/project-details/1` | `/realisations/gfa-pro-boutique-b2b` | Redirection permanente |
| `/project-details/2` | `/realisations/portail-scolaire` | Redirection permanente |
| `/project-details/3` | `/realisations/northstar-plateforme-ia` | Redirection permanente |
| `/about-us` | `/a-propos` | Redirection permanente |
| `/contact-us` | `/contact` | Redirection permanente |
| `/faq` | `/#faq` | Redirection permanente vers la FAQ de l'accueil |
| Pages légales | URLs actuelles | Conserver |

## Règles SEO de bascule

- Chaque ancienne URL ne doit avoir qu'un seul saut vers sa destination finale.
- Les canonicals doivent viser les nouvelles URLs, jamais les anciennes ni `/nouveau-site`.
- Le sitemap doit contenir uniquement les URLs indexables finales.
- Les redirections restent en place au minimum un an ; idéalement sans date de retrait.
- `/nouveau-site` doit être supprimé ou redirigé vers `/` après la promotion de la V2.

Les anciennes pages d'ingénierie qui n'ont pas encore d'équivalent V2 autonome sont dirigées vers l'offre numérique la plus proche. Elles pourront recevoir une destination plus précise lorsqu'un pôle Engineering détaillé sera publié.
