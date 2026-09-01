# Direction artistique

## Intention

Une présence sombre, lumineuse et précise : **studio numérique premium avec une vraie profondeur d'ingénierie**. Le site doit impressionner par sa composition, ses preuves et ses transitions, pas par une accumulation d'effets.

Trois qualificatifs : **éditorial, magnétique, crédible**.

## Ce que nous retenons de BrightHub

- Le fond quasi noir comme toile continue.
- Les halos diffus cyan, bleu et violet qui structurent les zones plutôt que de décorer chaque carte.
- Les grands titres à faible interlignage et les compositions asymétriques.
- Les scènes longues : texte d'un côté, démonstration ou capture réelle de l'autre.
- Les bordures fines, les surfaces sombres et les changements de rythme au scroll.
- Un CTA final ample qui répond visuellement au hero.

## Ce que nous ne copions pas

- Son logo, ses textes, ses illustrations et sa structure exacte.
- Les chiffres, avis et produits fictifs du template.
- Les dizaines de scripts Elementor, jQuery, GSAP, Swiper et WooCommerce chargés par le modèle.
- Les textes trop peu contrastés et les animations qui masquent le contenu avant leur déclenchement.
- La répétition de badges, cartes arrondies et halos sur chaque bloc.

## Traduction pour Pepro

### Couleurs

- Fond principal : `#050708`.
- Surface : `#0B1014` à `#111820`.
- Texte principal : `#F5F8FA`.
- Texte secondaire : `#9BA8B2` minimum, ajusté pour respecter le contraste.
- Cyan Pepro : `#21E6FF`.
- Bleu : `#00B2FF`.
- Vert signature : `#7CFF6B`, réservé aux micro-accents et états positifs.
- Violet de profondeur : autour de `#9B8CFF`, jamais utilisé comme nouvelle couleur de marque dominante.

Les halos mélangent cyan, bleu et violet à faible opacité. Le vert du logo reste rare afin de préserver sa valeur distinctive.

### Typographie

- Sans-serif contemporaine, nette et variable pour l'interface et les textes.
- Titres larges, entre 48 et 88 px sur desktop selon la section, avec une échelle fluide via `clamp()`.
- Paragraphes plus courts et contrastés que sur BrightHub.
- Le script historique du logo ne devient pas une police de titre.

Le choix final de police sera fait à l'implémentation parmi des fontes auto-hébergées ou `next/font`, en vérifiant les accents français et le coût de chargement.

### Formes et rythme

- Rayons modérés : 12 à 24 px selon la taille du bloc.
- Une grande scène vaut mieux que six petites cartes.
- Grille 12 colonnes sur desktop, avec ruptures asymétriques contrôlées.
- Espacement vertical généreux, mais sans vides artificiels dépendant du scroll.
- Captures de vrais projets dans des cadres sobres ; peu d'icônes décoratives.

## Grammaire de mouvement

1. Le hero porte l'effet « waouh » principal.
2. Les sections utilisent surtout translation, opacité et légère mise à l'échelle.
3. Une seule séquence épinglée/stackée sur la homepage, dans Pepro Digital.
4. Les interactions restent courtes : environ 160–450 ms.
5. `prefers-reduced-motion: reduce` supprime WebGL, parallax, compteurs animés et transitions non essentielles.
6. Aucun contenu SEO ou CTA ne dépend d'un canvas pour exister.

## Composition de la homepage

- **Hero :** halo/aurora en arrière-plan, H1 explicite, deux CTA, aperçu de réalisations plutôt que logos logiciels génériques.
- **Preuves :** bande horizontale sobre avec projets et résultats vrais.
- **Digital :** trois scènes éditoriales de formats différents ; une pile au scroll peut relier le récit.
- **GFA Pro :** grande capture réelle, légendes techniques, chiffre de catalogue seulement après validation.
- **Engineering :** rupture plus froide, diagramme ou visualisation scientifique légère, moins commerciale.
- **Prix :** lignes ou ledger, pas trois cartes SaaS.
- **Réalisations :** index éditorial avec aperçu sticky sur desktop et liste simple sur mobile.
- **Équipe :** portraits réels, composition humaine, aucune banque d'images.
- **CTA final :** retour du halo du hero, phrase courte, un bouton principal.

## Anti-patterns

- Pas de carousel automatique.
- Pas de curseur personnalisé.
- Pas de texte illisible pour obtenir un effet « cinématique ».
- Pas de trois cartes identiques répétées à chaque section.
- Pas de faux dashboard, faux témoignage ou faux compteur.
- Pas de WebGL dans plusieurs sections simultanément.

