# Direction du nouveau site Pepro

Ce dossier est le point de référence avant toute implémentation. Il fixe ce que nous reprenons du modèle BrightHub, ce que nous écartons, l'ordre de construction et les contrôles qui empêchent d'inventer du contenu commercial.

## Décision directrice

Pepro doit apparaître comme une agence digitale et logicielle premium, claire et humaine : **Pepro Digital domine l'offre ; Pepro Engineering prouve la profondeur technique**.

La direction visuelle s'inspire de BrightHub — fond sombre, halos cyan/violet, typographie ample, grandes scènes éditoriales — sans reproduire son thème, son contenu ni sa pile WordPress/Elementor.

## Documents

- [Plan accéléré](./PLAN.md)
- [Prochaines étapes](./PROCHAINES-ETAPES.md)
- [Direction artistique](./DIRECTION-ARTISTIQUE.md)
- [Sélection ReactBits](./REACTBITS-SELECTION.md)
- [Architecture, SEO et performance](./ARCHITECTURE-SEO-PERFORMANCE.md)
- [Skills et bonnes pratiques](./SKILLS-ET-BONNES-PRATIQUES.md)
- [Informations à valider](./INFORMATIONS-A-VALIDER.md)
- [Sources et références](./SOURCES.md)
- [Images de référence](./references/README.md)

## État actuel

La V2 a été validée puis promue sur `/`. Les pages commerciales, réalisations, articles et pages légales utilisent désormais le même langage visuel. L'ancien site et ses dépendances ont été retirés ; son historique reste récupérable avec Git.

Première tranche implémentée :

- [Capture desktop du hero V2](./v2-hero-desktop.png)
- [Capture mobile du hero V2](./v2-hero-mobile.png)
- [Capture desktop des sections construites](./v2-home-desktop-full.png)
- [Capture mobile des sections construites](./v2-home-mobile-full.png)
- [Capture finale desktop](./v2-home-final-desktop.png)
- [Capture finale mobile](./v2-home-final-mobile.png)

## Règles non négociables

1. Une preuve réelle vaut mieux qu'un chiffre décoratif.
2. Une animation forte par écran maximum ; le contenu reste lisible sans JavaScript ni WebGL.
3. Les composants ReactBits sont adaptés à Pepro, jamais assemblés tels quels comme un catalogue.
4. Server Components par défaut ; composants clients uniquement autour des interactions.
5. Une ancienne route n'est supprimée qu'après validation de sa redirection ou de son retrait.
6. Si une information commerciale manque, l'implémentation s'arrête au composant concerné et demande confirmation.
