# Sélection ReactBits vérifiée

Sélection contrôlée via les registres `@reactbits-starter` et `@reactbits-pro` configurés dans `components.json`. Aucun composant n'est encore installé : la liste sert de direction, puis chaque élément sera importé uniquement lorsqu'il entre réellement dans la page.

## Choix recommandés

| Zone | Composant | Usage Pepro | Décision |
|---|---|---|---|
| Fond du hero | `@reactbits-starter/aurora-beam-tw` | Aurora cyan/bleu/violet derrière le contenu | Prototype A ; WebGL, donc fallback CSS obligatoire |
| Hero alternatif | `@reactbits-pro/hero-22` | Composition centrée et shader de gradient granuleux | Prototype B ; probablement plus simple à cadrer |
| Hero alternatif | `@reactbits-pro/hero-21` | Aurora GLSL plus spectaculaire | À comparer, pas à cumuler avec Aurora Beam |
| Navigation | `@reactbits-pro/navigation-13` | Navbar éditoriale et menu plein écran | Adapter fortement ; conserver un header plus direct sur desktop |
| Services Digital | `@reactbits-starter/scroll-stack-tw` | Trois scènes qui s'empilent au scroll | Une seule occurrence sur la page |
| Structure services | `@reactbits-pro/features-11` | Trois blocs éditoriaux indexés | Base principale si la pile au scroll est trop lourde |
| Réalisations | `@reactbits-pro/showcase-7` | Index de cas clients avec aperçu sticky | Très bon candidat desktop ; fallback liste mobile |
| Chiffres | `@reactbits-pro/stats-13` | Ledger de quelques métriques réelles | Maximum trois données vérifiables |
| Équipe | `@reactbits-pro/about-10` | Composition humaine autour des portraits | Adapter sans collage artificiel |
| Preuve sociale | `@reactbits-pro/social-proof-16` | Citation mise en avant + preuves secondaires | Seulement avec contenus et autorisations réels |
| CTA final | `@reactbits-pro/cta-12` | Grande conclusion graphique structurée | Réduire l'esthétique « terminal » si elle détourne du message |
| Contact | `@reactbits-pro/contact-11` | Routage vers les personnes et formulaire | Pertinent pour montrer le contact direct avec l'équipe |

## Choix de départ

Pour aller vite, la première version utilisera :

1. `hero-22` **ou** `aurora-beam-tw`, après comparaison visuelle dans la même route.
2. `features-11` comme structure stable des services.
3. `scroll-stack-tw` seulement si son coût et son comportement mobile restent maîtrisés.
4. `showcase-7` pour les réalisations.
5. `stats-13`, `about-10` et `cta-12` adaptés au contenu Pepro.

## Dépendances et risques

- `aurora-beam-tw`, `aurora-blur-tw` et `minimal-ripple-tw` utilisent `three` et `@react-three/fiber`.
- `hero-21` utilise `three` ; `hero-22` utilise `@paper-design/shaders-react`.
- Les blocs Pro sélectionnés utilisent principalement `motion` et `lucide-react`.
- Les composants WebGL seront chargés dynamiquement côté client, hors chemin critique, et désactivés pour mouvement réduit ou appareil contraint.
- Aucun composant n'est ajouté « au cas où » : le registre copie le code dans le projet, il faut donc en devenir propriétaire et le simplifier.

## Éléments écartés ou non validés

- `card-swap-tw` : introuvable sous ce nom dans le registre configuré.
- `gradient-waves-tw` : la démo publique « Gradient Waves » existe et sa capture est archivée, mais cet identifiant n'est pas exposé par le registre MCP actuel. Il ne doit pas être promis dans l'implémentation tant que son identifiant installable n'est pas confirmé.
- `aurora-blur-tw` et `minimal-ripple-tw` : bons fallbacks visuels, mais inutiles si un shader de hero est déjà retenu.

## Règle de combinaison

ReactBits fournit les gestes et les mécanismes, pas la direction artistique finale. Chaque bloc sera dépouillé de ses données de démonstration, remappé sur les tokens Pepro, rendu accessible et évalué dans la page complète avant conservation.

