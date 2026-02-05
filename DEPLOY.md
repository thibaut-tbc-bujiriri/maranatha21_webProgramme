# Instructions de déploiement sur Vercel

## Solution 1 : Configurer le Root Directory dans Vercel (Recommandé)

1. Allez sur votre projet Vercel : https://vercel.com/dashboard
2. Cliquez sur votre projet "maranatha21-web-programme"
3. Allez dans **Settings** (Paramètres)
4. Dans la section **General**, trouvez **Root Directory**
5. Changez le Root Directory de `/` (racine) à `site`
6. Cliquez sur **Save**
7. Redéployez votre projet

## Solution 2 : Utiliser le fichier vercel.json

Le fichier `vercel.json` a été créé à la racine du projet pour rediriger les requêtes vers le dossier `site/`.

Si la Solution 1 ne fonctionne pas, assurez-vous que :
- Le fichier `vercel.json` est bien présent à la racine
- Vous avez commité et pushé le fichier `vercel.json`
- Vous redéployez le projet après avoir ajouté le fichier

## Vérification

Après le déploiement, votre site devrait être accessible à :
- https://maranatha21-web-programme.vercel.app

Si vous obtenez toujours une erreur 404 :
1. Vérifiez que tous les fichiers sont dans le dossier `site/`
2. Vérifiez que `index.html` existe dans `site/index.html`
3. Vérifiez les logs de déploiement dans Vercel pour voir les erreurs


