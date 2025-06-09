# KAIROS

Application de location de véhicule.

## Structure du projet

```
src/
  components/
    layout/       # Header, Footer
    home/         # Sections de la page d'accueil
    ui/           # Composants réutilisables
  pages/          # Pages de l'application
  data/           # Données factices
  store/          # États gérés par zustand
  types/          # Interfaces TypeScript
  lib/            # Fonctions utilitaires
```

Le point d'entrée de l'application est `src/main.tsx` et la configuration Tailwind
recherche les fichiers dans `src/`.
