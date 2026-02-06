## Problème
- Sur mobile, l’entrée "Résumé journalier" apparaît encore dans le sous‑menu "Programme" malgré l’ajout de l’item top‑niveau.

## Plan de correction
- Renforcer le CSS pour masquer toute occurrence du lien vers "resume-journalier.html" dans le dropdown lorsque la largeur ≤ 768px.
- Règle supplémentaire (attribut):
  - `@media (max-width:768px){ nav ul li.has-dropdown .dropdown-menu a[href$="resume-journalier.html"]{display:none!important} }`
- Conserver l’item top‑niveau `.mobile-only` déjà ajouté.

## Impact
- Desktop: inchangé (l’élément reste dans le sous‑menu)
- Mobile: seule l’entrée top‑niveau est visible; aucune duplication.

## Validation
- Ouvrir le menu en mode mobile; vérifier absence de l’élément dans le dropdown et présence de l’item principal.

Souhaitez-vous que je applique cette règle CSS maintenant ?