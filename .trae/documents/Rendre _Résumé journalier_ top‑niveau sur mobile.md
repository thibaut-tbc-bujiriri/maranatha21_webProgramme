## Objectif
- Sur mobile, "Résumé journalier" doit apparaître comme un élément principal du menu, et non dans le sous‑menu "Programme"
- Sur desktop, garder le comportement actuel (sous‑menu de "Programme")

## Approche HTML/CSS (sans impacter le contenu)
- Ajouter un item top‑niveau visible uniquement sur mobile
  - Dans chaque page (index.html, about.html, program.html, resume-journalier.html, speakers.html, testimonials.html, album.html, contact.html):
  - Après l’élément "Programme", insérer:
    - `<li class="mobile-only resume-topitem"><a href="resume-journalier.html">Résumé journalier</a></li>`
- Marquer l’item existant du sous‑menu comme cachable sur mobile
  - Changer l’élément sous‑menu: `<li class="resume-subitem"><a href="resume-journalier.html">Résumé journalier</a></li>`
- CSS dans styles.css
  - `.mobile-only{display:none}`
  - `@media (max-width:768px){ .mobile-only{display:block} nav ul li.has-dropdown .dropdown-menu .resume-subitem{display:none} }`

## Effet attendu
- Desktop: "Résumé journalier" reste dans le dropdown de "Programme"
- Mobile: un item principal "Résumé journalier" apparaît dans la liste; l’entrée du dropdown est masquée

## Validation
- Ouvrir le menu en desktop et mobile; vérifier:
  - Desktop: dropdown "Programme" contient "Résumé journalier"
  - Mobile: item "Résumé journalier" visible au même niveau que "Accueil", "À propos", etc., sans duplication

Souhaitez-vous que je mette en œuvre ces modifications maintenant ?