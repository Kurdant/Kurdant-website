# TESTS VISUELS - PAGE BLOG

## Checklist de validation

### ✅ Hero Section
- [ ] Titre "BLOG" visible en Orbitron
- [ ] Effet glitch au hover du titre (cyan + rose)
- [ ] Sous-titre "Découvrez mes articles..." visible
- [ ] Border lavande en bas du hero
- [ ] Gradient background noir

### ✅ Filtres
- [ ] 5 boutons : Tout afficher / Dev / Jeux Vidéo / IA / Autres
- [ ] "Tout afficher" actif par défaut (background lavande)
- [ ] Click change le filtre actif (un seul actif)
- [ ] Hover : glow lavande + translateY(-2px)
- [ ] Animation de balayage lumineux au hover
- [ ] Border lavande sur tous les boutons

### ✅ Blog Grid
- [ ] 10 cartes visibles
- [ ] Layout 3 colonnes sur desktop (>1024px)
- [ ] Espacement uniforme entre cartes
- [ ] Animation fade-in échelonnée visible au chargement

### ✅ Blog Card
- [ ] Image square (aspect 1:1)
- [ ] Placeholder SVG visible si pas d'image
- [ ] Titre en Orbitron blanc
- [ ] Description grise (3 lignes max avec ...)
- [ ] 3 tags max en Press Start 2P
- [ ] Date en bas en JetBrains Mono
- [ ] Border lavande autour de la carte

### ✅ Blog Card Hover
- [ ] Glow lavande intense autour de la carte
- [ ] Transform translateY(-8px)
- [ ] Titre devient lavande avec text-shadow
- [ ] Image zoom scale(1.1)
- [ ] Tags changent de couleur/glow
- [ ] Transition fluide (0.3s)

### ✅ Blog Card Click
- [ ] Effet ripple visible au click
- [ ] Navigation vers /blog/[slug] (URL change)
- [ ] Pas d'erreur console

### ✅ Pagination
- [ ] Boutons ← 1 2 3 ... 10 → visibles
- [ ] Bouton "1" actif par défaut (background lavande)
- [ ] Flèche ← disabled (opacity 0.3)
- [ ] Click sur numéro change la page
- [ ] Smooth scroll vers le haut au changement de page
- [ ] Hover : glow lavande sur boutons

### ✅ Effets Globaux (Desktop)
- [ ] Scanlines horizontales visibles (subtiles)
- [ ] Grain/noise overlay visible (subtil)
- [ ] Background noir pur (#000000)

### ✅ Responsive Tablette (768-1024px)
- [ ] Grid passe à 2 colonnes
- [ ] Filtres wrap correctement
- [ ] Cartes conservent aspect ratio
- [ ] Pagination lisible

### ✅ Responsive Mobile (<768px)
- [ ] Grid passe à 1 colonne
- [ ] Titre "BLOG" réduit (2.5rem)
- [ ] Filtres plus petits et wrap
- [ ] Scanlines désactivées (pas visibles)
- [ ] Grain désactivé (pas visible)
- [ ] Cartes pleine largeur
- [ ] Pagination boutons plus petits

### ✅ Accessibilité Clavier
- [ ] Tab parcourt les filtres
- [ ] Focus visible sur filtres (outline lavande)
- [ ] Enter active un filtre
- [ ] Tab parcourt les cartes
- [ ] Focus visible sur cartes (outline lavande)
- [ ] Enter sur carte → navigation
- [ ] Tab parcourt pagination
- [ ] Enter sur numéro → change page

### ✅ États
- [ ] Loading : spinner + texte "Chargement..."
- [ ] Error : message d'erreur si API fail
- [ ] Empty : "Aucun article trouvé" si filtre vide
- [ ] Content : cartes affichées normalement

### ✅ Filtrage
- [ ] Click "Dev" → filtre les articles dev uniquement
- [ ] Click "Gaming" → filtre les articles gaming uniquement
- [ ] Click "IA" → filtre les articles IA uniquement
- [ ] Click "Autres" → filtre les articles autres uniquement
- [ ] Click "Tout afficher" → affiche tous les articles
- [ ] Pagination reset à page 1 au changement de filtre

### ✅ Performance
- [ ] Pas de lag au hover
- [ ] Animations fluides (60fps)
- [ ] Images lazy load
- [ ] Pas d'erreur console
- [ ] Temps de chargement < 2s

## Test Navigation

1. Ouvrir http://localhost:5173/blog
2. Vérifier tous les points ci-dessus
3. Ouvrir DevTools → Console (pas d'erreur)
4. Ouvrir DevTools → Network → Images (lazy loading)
5. Ouvrir DevTools → Performance (animations 60fps)
6. Toggle DevTools → Device Mode → Test mobile

## Bugs connus

Aucun bug connu actuellement.

## Ajustements possibles

Si besoin d'ajuster :
- **Glow trop intense** → réduire opacity dans `--glow-lavender-intense`
- **Animations trop lentes** → réduire `transition-duration` dans CSS
- **Grid trop serré** → augmenter `gap` dans `.grid`
- **Titre trop grand mobile** → réduire `font-size` dans media query

## Validation finale

Une fois tous les points cochés ✅ :
- Page prête pour production
- Prête pour intégration WISP réelle
- Prête pour ajout de contenu

---

Test effectué le : _____
Testé par : Hugo
Status : ⬜ En attente | ✅ Validé | ⚠️ Ajustements nécessaires

Notes :
_______________________________________
_______________________________________
_______________________________________
