## Objectif
- Harmoniser tout le site en bleu et blanc, avec une identité propre et professionnelle
- Améliorer tous les boutons (états, accessibilité, cohérence)
- Garder le contenu inchangé, ne modifier que le style et micro-composants

## Palette et Tokens
- Définir des variables CSS globales dans styles.css
  - Bleu principal: #0B3D91 (navy) – --blue-900
  - Bleu secondaire: #1955D1 – --blue-700
  - Bleu clair: #E6F0FF – --blue-50
  - Blanc: #FFFFFF – --white
  - Gris texte: #1A1A1A – --text-dark; gris clair: #6B7280 – --text-muted
  - Ombres et rayons: --radius-8, --shadow-md, --shadow-lg
- Remplacer les couleurs hardcodées par variables (header, footer, sections, cartes, liens, icônes)

## Header/Nav
- Arrière-plan: --blue-900; texte: --white; liens: --white avec hover en --blue-50
- Actif/hover: indicateur sous forme de pilule
- Bouton thème: icônes Boxicons existantes, couleur héritée (currentColor)
- Hamburger (si mobile): icône blanche, fond en bleu-700 au focus

## Sections et Layout
- Body: fond --white; texte par défaut --text-dark
- Titres: couleur --blue-900; sous-titres --text-muted
- Cartes: fond --blue-50 ou --white; bordure subtile; ombre md; coins 8px
- Espacements uniformes (variables d’espacement)

## Footer
- Arrière-plan: --blue-900; texte: --white
- Liens: --blue-50 au hover; icônes sociales Boxicons en currentColor
- Pastilles réseaux: cercle semi-transparent (rgba(255,255,255,0.15)) au hover -> rgba(255,255,255,0.25)

## Boutons (Refonte complète)
- .btn (base): padding 0.75rem 1.25rem; radius 8px; font-weight 600; transition 180ms; focus visible outline 3px (AA)
- .btn-primary: fond --blue-700; texte --white; hover: --blue-900; active: assombrir 6%; disabled: 60%
- .btn-secondary: fond --white; bordure --blue-700; texte --blue-700; hover: fond --blue-50; active: bordure --blue-900
- .btn-large/.btn-small: tailles prédéfinies; icônes Boxicons alignées avec gap

## Formulaires
- Inputs: bordures --blue-700 au focus; fond --white; placeholder --text-muted
- Labels: --blue-900; message d’erreur --blue-700 avec icône bx-error-circle
- Bouton submit: .btn-primary

## Icônes
- Utiliser Boxicons en “currentColor” partout; couleur héritée des éléments parents
- Remplacer les derniers emojis restants par Boxicons (map/envelope/phone) si encore présents

## Accessibilité et Contraste
- Contraste ≥ 4.5:1 pour texte et icônes
- États focus visibles (outline non masqué)
- Hit area ≥ 44px pour boutons/icônes cliquer

## Implémentation (précis)
1. Ajouter/mettre à jour :root dans css/styles.css avec la palette et tokens
2. Header/footer: remplacer couleurs par variables; ajuster hover/active
3. .btn, .btn-primary, .btn-secondary, .btn-*sizes: définir styles, transitions, focus
4. Cartes/sections: unifier fonds, bordures, ombres via variables
5. Formulaires: focus et placeholders
6. Icônes: s’assurer de currentColor et héritage; corriger couleurs de pastilles sociales
7. Nettoyer styles inline: basculer vers classes utilitaires lorsque nécessaire

## Fichiers concernés
- css/styles.css (principal)
- index.html, about.html, program.html, resume-journalier.html, speakers.html, testimonials.html, album.html (réduction styles inline et application classes)

## Validation
- Vérifier toutes les pages en desktop/mobile
- Contrôle contraste via outil; tester focus/clavier sur tous les boutons
- Vérifier Boxicons affichés et colorés correctement

## Livrables
- styles.css refactorisé avec palette bleu/blanc et design tokens
- Boutons cohérents et professionnels (documentation rapide des classes)
- Pages homogènes sans perte de contenu ni fonctionnalité

Souhaitez-vous que je mette en œuvre ces changements maintenant ?