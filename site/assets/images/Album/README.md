# Album Photo - Instructions

## Comment ajouter des photos à l'album

### Étape 1 : Copier les images
1. Copiez vos photos depuis le dossier `images/Album` (dans le dossier racine du projet)
2. Collez-les dans ce dossier : `site/assets/images/album/`
3. Assurez-vous que les noms de fichiers ne contiennent pas d'espaces (utilisez des tirets ou underscores)

### Étape 2 : Ajouter les images dans la configuration
1. Ouvrez le fichier `site/js/album.js`
2. Dans le tableau `ALBUM_IMAGES`, ajoutez le chemin de chaque image
3. Format : `'assets/images/album/nom-de-votre-image.jpg'`

**Exemple :**
```javascript
const ALBUM_IMAGES = [
    'assets/images/album/photo1.jpg',
    'assets/images/album/photo2.jpg',
    'assets/images/album/photo3.jpg',
    'assets/images/album/evenement-2024.jpg',
];
```

### Étape 3 : Vérifier
1. Ouvrez `album.html` dans votre navigateur
2. Les images devraient maintenant s'afficher dans la galerie

## Formats d'images supportés
- JPG / JPEG
- PNG
- WebP
- GIF

## Optimisation des images
Pour de meilleures performances :
- Compressez vos images avant de les ajouter
- Utilisez des images de taille raisonnable (max 2-3 MB par image)
- Formats recommandés : JPG pour les photos, PNG pour les images avec transparence

## Note
Si l'album est vide, un message s'affichera indiquant que l'album est en préparation.

