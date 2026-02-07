## Objectif
- Mobile (≤768px): déplacer "Résumé journalier" hors du sous‑menu pour le rendre menu principal
- Desktop/Tablette (>768px): conserver "Résumé journalier" dans le sous‑menu "Programme"

## Changements structurants
- Ajouter des classes sémantiques au DOM: `.main-menu` (ul principal), `.programme-submenu` (ul du dropdown), `.resume-item` (li de Résumé)
- Supprimer les doublons `li.mobile-only` (on déplace le même nœud avec JS)

## Logique JS maintenable
- Au chargement + resize: si largeur ≤768px → insérer `.resume-item` juste après `li.has-dropdown` dans `.main-menu`; sinon → replacer `.resume-item` dans `.programme-submenu`
- Corriger la sélection directe de l’ancre dropdown avec `:scope > a` pour éviter l’erreur `'> a' is not a valid selector`

## CSS
- Garder les règles qui masquent le dropdown sur mobile (facultatif); le déplacement évite la duplication

## Fichiers à modifier
- HTML: index.html, about.html, program.html, resume-journalier.html, speakers.html, testimonials.html, album.html, contact.html
- JS: site/js/scripts.js

## Validation
- Mobile: "Programme" clique direct; "Résumé journalier" au niveau principal
- Desktop: Dropdown présent avec "Résumé journalier" en sous‑menu

J’applique ces changements maintenant.