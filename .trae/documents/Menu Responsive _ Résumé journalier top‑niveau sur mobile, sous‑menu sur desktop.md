## Objectif
- Mobile (≤768px): "Résumé journalier" devient un item principal (top‑niveau), cliquable directement
- Desktop/Tablette (>768px): "Résumé journalier" reste dans le sous‑menu de "Programme"

## Approche maintenable
- Conserver une seule source de vérité: on garde le dropdown existant en HTML pour desktop/tablette et on ajoute un item top‑niveau dédié pour mobile
- Basculer l’affichage avec CSS (media queries) et adapter la logique JS pour ne pas bloquer la navigation quand le dropdown est caché

## Modifs HTML (toutes les pages avec le header)
- Dans la liste de navigation (nav ul):
  1. Laisser le bloc dropdown tel que:
     - `<li class="has-dropdown">`
     - `  <a href="program.html">Programme</a>`
     - `  <ul class="dropdown-menu">`
     - `    <li><a href="resume-journalier.html">Résumé journalier</a></li>`
     - `  </ul>`
     - `</li>`
  2. Ajouter juste après:
     - `<li class="mobile-only"><a href="resume-journalier.html">Résumé journalier</a></li>`

## Modifs CSS (site/css/styles.css)
- Ajouter utilitaire et règles responsives:
```
.mobile-only{display:none}
@media (max-width:768px){
  .mobile-only{display:block}
  nav ul li.has-dropdown .dropdown-menu{display:none!important}
  nav ul li.has-dropdown > a::after{content:none}
}
```
- Optionnel: ajuster padding/espacement si nécessaire pour l’item mobile-only

## Modifs JS (site/js/scripts.js)
- Dans initNavigation(), lors du clic sur le lien parent du dropdown:
```
if (window.innerWidth <= 768) {
  const menu = item.querySelector('.dropdown-menu');
  // Si le dropdown est caché par les règles CSS, on laisse la navigation (pas de preventDefault)
  if (!menu || getComputedStyle(menu).display === 'none') {
    return;
  }
  e.preventDefault();
  item.classList.toggle('active');
}
```
- Ainsi, sur mobile, "Programme" navigue directement (dropdown masqué), et sur écrans plus larges, le toggle fonctionne

## Validation
- Mobile: "Résumé journalier" visible comme item principal; "Programme" ouvre program.html sans dropdown
- Desktop/Tablette: "Programme" affiche le dropdown avec "Résumé journalier" en sous‑menu

## Fichiers concernés
- HTML: index.html, about.html, program.html, resume-journalier.html, speakers.html, testimonials.html, album.html, contact.html
- CSS: site/css/styles.css
- JS: site/js/scripts.js

Souhaitez-vous que j’applique ces changements maintenant ?