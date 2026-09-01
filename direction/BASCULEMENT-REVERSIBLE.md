# Basculement réversible

## Avant la bascule

1. Valider la V2 localement sur desktop et mobile.
2. Créer un commit de sauvegarde et un tag de la version publique actuelle.
3. Conserver la V2 dans un commit distinct afin que la promotion soit facile à annuler.
4. Vérifier les contenus, tarifs, avis, coordonnées et formulaires une dernière fois.

## Commit de lancement

Le lancement doit rester concentré dans un seul commit :

- promouvoir la page V2 sur `/` ;
- retirer `noindex`, `nofollow` et `nocache` des routes finales ;
- ajouter les canonicals et les données structurées sur leurs URLs définitives ;
- remplacer le sitemap par les routes V2 indexables ;
- activer les redirections de `MIGRATION-ROUTES.md` ;
- rediriger ou retirer `/nouveau-site` ;
- ne supprimer aucun ancien composant dans ce commit.

## Contrôles juste après déploiement

- Tester `/`, les six offres, les réalisations, tarifs, à-propos et contact.
- Vérifier chaque redirection avec son code 301 et l'absence de chaîne.
- Envoyer un formulaire réel et confirmer sa réception.
- Contrôler robots, sitemap, canonicals et JSON-LD sur le domaine public.
- Lancer Lighthouse mobile sur `/`, `/digital/creation-site-internet` et `/contact`.
- Surveiller les erreurs 404 et les conversions pendant les premières 48 heures.

## Retour arrière après nettoyage

Si un problème bloquant apparaît, redéployer le tag de sauvegarde ou rétablir le commit antérieur au nettoyage. Les anciens composants ne sont plus présents dans l'arbre de travail actuel : Git est maintenant la source de restauration.

Les redirections 301 ne doivent pas être publiées plusieurs jours avant la V2 : elles font partie du même commit de lancement et disparaissent avec son rollback.
