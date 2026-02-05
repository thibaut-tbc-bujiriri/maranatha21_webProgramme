# Audit des Ressources (Maranatha 21)

## Pages
- index.html, about.html, program.html, resume-journalier.html, speakers.html, testimonials.html, album.html, contact.html

## CSS/JS
- CSS: css/styles.css (~22.6 KB)
- JS: js/scripts.js (~18.5 KB), js/album.js (~1.1 KB)

## Médias
- Images: assets/images/* et assets/images/Album/*
- Vidéo: assets/images/videos/invitation.mp4 (~54 MB)

## Chargement
- CSS/JS chargés et présents sur toutes les pages
- Scripts en defer pour réduire le blocage du rendu
- Images critiques préchargées (affiche_event.jpg)
- Images avec loading=\"lazy\" où pertinent

## Points d’attention
- Taille vidéo élevée: préférer streaming/CDN si public large
- Minification et cache-busting: paramètre v=1 ajouté; minification recommandée pour production
- Vérification de liens: script js/dev-link-check.js pour usage local

## Améliorations proposées
- Convertir images lourdes en WebP/AVIF
- Regrouper et minifier CSS/JS pour production
- Déployer avec compression HTTP (gzip/br) et headers cache
