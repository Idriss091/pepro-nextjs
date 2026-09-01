# Skills et bonnes pratiques

## Skills nécessaires

### `frontend-design` — utilisé pour cette direction

Pilote la composition originale, la hiérarchie, les choix typographiques et l'évitement des interfaces génériques. À réutiliser lors de la construction de chaque grande section.

### `next-best-practices` — utilisé pour cette direction

Cadre les conventions App Router, les Server Components, les métadonnées, les images, les polices, les erreurs et les routes. À appliquer pendant toute l'implémentation.

### `vercel-react-best-practices` — utilisé pour cette direction

Cadre le coût client, les imports, les waterfalls, le rendu et le bundle. Indispensable pour que ReactBits ne transforme pas l'effet « waouh » en régression de performance.

### `shadcn` — utilisé pour interroger ReactBits

Le MCP shadcn accède aux registres ReactBits Starter et Pro déclarés dans `components.json`. Il sert à rechercher, inspecter et installer les composants un par un. Le token reste lu depuis l'environnement et n'est jamais inscrit dans la documentation.

## Skills conditionnels

- `imagegen` : seulement si une texture ou illustration bitmap originale est réellement nécessaire ; pas pour recréer des captures ou le logo.
- `diagnose` : si une animation provoque un bug, une fuite mémoire ou une régression mesurable.
- `tdd` : utile pour une logique métier ou un formulaire complexe, pas nécessaire pour le premier concept visuel sauf demande explicite.

## Skills non nécessaires à ce stade

- Figma : aucune maquette Figma n'a été fournie et le prototype direct en code est plus rapide ici.
- Supabase : aucune fonctionnalité de base de données ou d'authentification n'est dans le périmètre.
- Image generation : les preuves visuelles doivent d'abord venir des projets et de l'équipe réels.

## Pratiques de réalisation

1. Installer un composant uniquement au moment où sa section est codée.
2. Lire son code, retirer les démos, données fictives et dépendances inutiles.
3. Garder le contenu sémantique côté serveur ; isoler la couche d'effet côté client.
4. Tester le fallback statique avant de peaufiner l'animation.
5. Vérifier mobile, clavier et mouvement réduit à chaque section, pas à la fin.
6. Ne jamais remplacer une preuve manquante par une formulation plausible.
7. Utiliser des images réelles optimisées et des dimensions stables pour éviter le CLS.
8. Faire une seule grande décision de mouvement par écran.

