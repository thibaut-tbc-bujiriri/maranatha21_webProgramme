## Objectif
- Desktop: garder "Résumé journalier" dans le sous-menu "Programme"
- Mobile: afficher "Résumé journalier" comme item principal, et "Programme" doit naviguer directement

## Changements
1. Restaurer le HTML du dropdown "Programme" sur toutes les pages (avec entrée "Résumé journalier")
2. Conserver l'item top-niveau `.mobile-only` vers `resume-journalier.html`
3. Adapter scripts.js: sur mobile, si le dropdown est caché (display:none), ne pas empêcher la navigation sur "Programme"
4. Garder le CSS mobile qui masque le dropdown et la flèche

## Validation
- Desktop: voir le dropdown "Programme" avec l’entrée "Résumé journalier"
- Mobile: voir "Résumé journalier" au niveau principal, et le lien "Programme" ouvre program.html sans dropdown

J’applique ces corrections maintenant.