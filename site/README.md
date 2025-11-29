# Maranatha 21 - Site Web

Site frontend pour le programme annuel **Maranatha 21** organisé par la **Communauté des églises chrétiennes pour le Nouveau Départ (CECND)**.

## 📋 Description

Site web moderne, responsive et accessible en HTML, CSS et JavaScript pur (sans framework) pour présenter la 2ème édition du programme Maranatha 21 à Goma, République Démocratique du Congo.

## 🚀 Installation et Utilisation Locale

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un éditeur de texte (optionnel, pour modifier le code)

### Installation

1. **Télécharger ou cloner le projet**
   ```bash
   # Si vous avez le projet en local, naviguez vers le dossier
   cd site
   ```

2. **Ouvrir le site**
   - Double-cliquez sur `index.html` dans votre explorateur de fichiers
   - OU ouvrez `index.html` dans votre navigateur
   - OU utilisez un serveur local (voir ci-dessous)

### Serveur Local (Optionnel)

Pour tester avec un serveur local (recommandé pour éviter les problèmes CORS) :

**Avec Python :**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Avec Node.js (http-server) :**
```bash
npx http-server -p 8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

## ⚙️ Configuration de Formspree

Le formulaire de contact utilise Formspree pour envoyer les emails. Voici comment le configurer :

### Étapes

1. **Créer un compte Formspree**
   - Allez sur [https://formspree.io](https://formspree.io)
   - Créez un compte gratuit (ou connectez-vous)

2. **Créer un nouveau formulaire**
   - Cliquez sur "New Form"
   - Donnez un nom à votre formulaire (ex: "Maranatha 21 Contact")
   - Copiez l'endpoint fourni (format: `https://formspree.io/f/XXXXX`)

3. **Configurer l'endpoint dans le code**
   - Ouvrez le fichier `js/scripts.js`
   - Trouvez la ligne :
     ```javascript
     const FORMSPREEE_ENDPOINT = 'https://formspree.io/f/XXXXX';
     ```
   - Remplacez `XXXXX` par votre identifiant Formspree réel
   - Exemple : `const FORMSPREEE_ENDPOINT = 'https://formspree.io/f/xpzgkqwe';`

4. **Tester le formulaire**
   - Ouvrez `contact.html` dans votre navigateur
   - Remplissez et soumettez le formulaire
   - Vérifiez votre boîte email Formspree pour recevoir le message

### Limites du plan gratuit Formspree

- 50 soumissions par mois
- Les emails sont envoyés à l'adresse associée à votre compte Formspree
- Pour plus de fonctionnalités, consultez les plans payants sur le site Formspree

## 📁 Structure du Projet

```
site/
├── index.html              # Page d'accueil
├── about.html              # À propos + présentation de l'apôtre
├── program.html            # Détails du programme
├── speakers.html           # Liste des intervenants
├── testimonials.html       # Témoignages
├── contact.html            # Formulaire de contact/inscription
├── css/
│   └── styles.css          # Styles CSS principaux
├── js/
│   └── scripts.js          # JavaScript (validation, interactions)
├── assets/
│   └── images/             # Images et placeholders
│       ├── favicon.ico
│       ├── apotre-placeholder.jpg
│       ├── speaker1-placeholder.jpg
│       ├── speaker2-placeholder.jpg
│       └── speaker3-placeholder.jpg
├── sample-data.json        # Données d'exemple (intervenants, témoignages)
└── README.md               # Ce fichier
```

## 🌐 Déploiement

### GitHub Pages

1. Créez un dépôt GitHub
2. Poussez tous les fichiers du dossier `site/` dans le dépôt
3. Allez dans Settings > Pages
4. Sélectionnez la branche `main` et le dossier `/ (root)`
5. Votre site sera disponible à `https://votre-username.github.io/nom-du-repo/`

### Netlify

1. Créez un compte sur [Netlify](https://www.netlify.com)
2. Glissez-déposez le dossier `site/` dans Netlify
3. Votre site sera déployé automatiquement
4. Vous pouvez configurer un nom de domaine personnalisé

### Vercel

1. Créez un compte sur [Vercel](https://vercel.com)
2. Importez votre projet GitHub ou uploadez le dossier
3. Vercel détectera automatiquement les fichiers statiques
4. Cliquez sur "Deploy"

## 📝 Contenu Personnalisable

### Informations à mettre à jour

- **Nom de l'apôtre** : Dans `about.html`, remplacez `[Nom]` par le nom réel
- **Dates du programme** : Dans `program.html`, mettez à jour les dates exactes
- **Coordonnées** : Remplacez les placeholders (email, téléphone) dans tous les fichiers HTML
- **Images** : Remplacez les placeholders dans `assets/images/` par vos vraies images
- **Réseaux sociaux** : Mettez à jour les liens dans le footer de chaque page

### Images

Les images placeholders doivent être remplacées par vos propres images :
- `apotre-placeholder.jpg` : Photo de l'apôtre
- `speaker1-placeholder.jpg`, `speaker2-placeholder.jpg`, `speaker3-placeholder.jpg` : Photos des intervenants
- `favicon.ico` : Icône du site (16x16 ou 32x32 pixels)

## 🎨 Personnalisation du Design

Les couleurs principales sont définies dans `css/styles.css` via les variables CSS :

```css
:root {
    --color-primary: #1a365d;    /* Bleu marine */
    --color-secondary: #d4af37;   /* Or */
    --color-accent: #2c5282;
    /* ... */
}
```

Modifiez ces valeurs pour changer les couleurs du site.

## 📧 Modèle d'Email Reçu par les Organisateurs

Quand quelqu'un soumet le formulaire de contact, voici le format de l'email reçu via Formspree :

```
De: noreply@formspree.io
À: votre-email@exemple.com
Sujet: Nouvelle soumission depuis Maranatha 21

Nouvelle soumission de formulaire :

Prénom: [Prénom du visiteur]
Nom: [Nom du visiteur]
Email: [email@exemple.com]
Téléphone: [+243 XXX XXX XXX]
Ville: [Ville]
Souhaite s'inscrire: [Oui/Non]
Message: [Message du visiteur]

---
Soumis le: [Date et heure]
```

## 🔧 Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation avec menu hamburger sur mobile
- ✅ Formulaire de contact avec validation JavaScript
- ✅ Intégration Formspree pour l'envoi d'emails
- ✅ Page de témoignages avec ajout local (localStorage)
- ✅ Animations CSS légères
- ✅ Accessibilité (ARIA, labels, contraste)
- ✅ SEO (meta tags, structure sémantique)

## 📱 Compatibilité Navigateurs

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Navigateurs mobiles (iOS Safari, Chrome Mobile)

## 🐛 Dépannage

### Le formulaire ne s'envoie pas
- Vérifiez que vous avez configuré correctement l'endpoint Formspree dans `js/scripts.js`
- Vérifiez la console du navigateur (F12) pour les erreurs
- Assurez-vous que tous les champs requis sont remplis

### Les images ne s'affichent pas
- Vérifiez que les fichiers images existent dans `assets/images/`
- Vérifiez les chemins dans les fichiers HTML
- Utilisez un serveur local si vous testez en local

### Le menu hamburger ne fonctionne pas
- Vérifiez que `js/scripts.js` est bien chargé
- Ouvrez la console du navigateur pour voir les erreurs JavaScript

## 📄 Licence

Ce projet est créé pour la Communauté des églises chrétiennes pour le Nouveau Départ (CECND).

## 👥 Crédits

- **Organisation** : Communauté des églises chrétiennes pour le Nouveau Départ (CECND)
- **Programme** : Maranatha 21 - 2ème Édition
- **Localisation** : Goma, Katoyi, RDC (en face de l'église Sebeka Osokato)

## 📞 Support

Pour toute question ou problème technique, contactez :
- Email : cefnouveaudepart@gmail.com
- Téléphone : +243 XXX XXX XXX

---

**Note** : N'oubliez pas de remplacer tous les placeholders (XXXXX, [Nom], etc.) par les vraies informations avant de déployer le site en production.

