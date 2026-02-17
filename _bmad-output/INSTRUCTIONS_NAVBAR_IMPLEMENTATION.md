# INSTRUCTIONS POUR REACT DEVELOPER - Nouveau Navbar

## Mission

Remplacer l'OrbitalNav actuel par le nouveau Navbar classique avec scroll intelligent.

---

## Étapes d'implémentation

### 1. Supprimer l'ancien
- ❌ Supprimer `src/components/Navigation/OrbitalNav.jsx`
- ❌ Supprimer `src/components/Navigation/OrbitalNav.module.css`

### 2. Créer le nouveau
- ✅ Créer `src/components/Navigation/Navbar.jsx`
- ✅ Créer `src/components/Navigation/Navbar.module.css`
- ✅ Copier le code depuis `NAVBAR_CLASSIC_SPECS.md`

### 3. Remplacer dans App.jsx
```jsx
// Ancien
import OrbitalNav from './components/Navigation/OrbitalNav';

// Nouveau
import Navbar from './components/Navigation/Navbar';

// Dans le JSX
<Navbar /> // au lieu de <OrbitalNav />
```

### 4. Vérifications
- [ ] Navbar apparaît correctement
- [ ] Scroll rétractation fonctionne (60px)
- [ ] Hover expansion fonctionne (80px)
- [ ] Glitch logo au hover
- [ ] Glow coloré selon page (var(--color-primary))
- [ ] Menu burger responsive (<768px)
- [ ] Overlay fullscreen mobile
- [ ] Animation stagger items mobile
- [ ] Active link state
- [ ] Navigation entre pages

---

## Référence complète

Toutes les specs détaillées sont dans:
`_bmad-output/NAVBAR_CLASSIC_SPECS.md`

---

Hugo valide ce design - go pour implémentation! 🚀
