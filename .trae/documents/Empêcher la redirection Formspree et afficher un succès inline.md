## Analyse
- Le formulaire redirige vers Formspree quand le JS n'intercepte pas le submit.
- scripts.js intercepte déjà (preventDefault + fetch) et affiche un message; la redirection se produit si le navigateur soumet via l'attribut action.

## Plan de correction
1. Supprimer l'attribut action du formulaire (Contact) pour forcer l'envoi AJAX seulement.
2. Conserver method="POST" pour cohérence.
3. Laisser scripts.js gérer l'envoi (fetch) + message de succès + reset.

## Validation
- Soumission affiche "message envoyé avec succès", reste sur la page, et réinitialise le formulaire.
- En cas d'erreur réseau: message d'erreur inline.

Souhaitez-vous que je applique ces modifications maintenant ?