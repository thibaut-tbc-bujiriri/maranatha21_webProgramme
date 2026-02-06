## Problème
- Sur mobile, "Résumé journalier" apparaît encore dans le sous‑menu de "Programme".

## Solution proposée
- Masquer totalement le dropdown "Programme" sur mobile et retirer l’indicateur de flèche.
- Conserver l’élément top‑niveau "Résumé journalier" déjà ajouté pour l’accès direct.

## Modifications CSS
- `@media (max-width:768px){ nav ul li.has-dropdown .dropdown-menu{display:none!important} nav ul li.has-dropdown > a::after{content:none} }`

## Impact
- Desktop: inchangé (dropdown visible).
- Mobile: dropdown caché; "Programme" reste cliquable vers program.html; "Résumé journalier" visible comme menu principal.

## Validation
- Ouvrir le menu sur mobile: voir "Résumé journalier" au niveau principal; cliquer "Programme" doit ouvrir program.html, sans sous‑menu.

Souhaitez-vous que j’applique ces règles maintenant ?