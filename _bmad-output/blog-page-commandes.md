# COMMANDES UTILES - BLOG PAGE

## Développement

### Démarrer le serveur
```bash
npm run dev
```
Accès : http://localhost:5173/blog

### Build production
```bash
npm run build
```

### Preview build
```bash
npm run preview
```

## Fichiers clés

### Modifier le design
```
src/pages/Blog.module.css
src/components/BlogCard/BlogCard.module.css
```

### Modifier les filtres
```javascript
// src/pages/Blog.jsx ligne 6-12
const FILTERS = [
  { id: 'all', label: 'Tout afficher' },
  { id: 'dev', label: 'Dev' },
  // Ajouter ici
];
```

### Modifier les données mock
```
src/data/mockBlogData.js
```

### Changer nombre d'articles par page
```javascript
// src/pages/Blog.jsx ligne 16
const postsPerPage = 10; // Changer ici
```

## Configuration

### Activer API WISP
```bash
# Créer .env.local
VITE_WISP_BLOG_ID=votre-blog-id
VITE_USE_MOCK_BLOG=false
```

### Désactiver effets (debug)
```css
/* src/pages/Blog.module.css */
.blogPage::before,
.blogPage::after {
  display: none !important; /* Désactive scanlines + grain */
}
```

### Désactiver animations (debug)
```css
/* src/pages/Blog.module.css */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## Ajustements rapides

### Changer couleur glow
```css
/* src/pages/Blog.module.css */
:root {
  --glow-lavender: 0 0 10px rgba(209, 196, 233, 0.4); /* Ajuster ici */
}
```

### Changer espacement grid
```css
/* src/pages/Blog.module.css ligne 248 */
.grid {
  gap: 3rem; /* Ajuster ici */
}
```

### Changer breakpoints responsive
```css
/* src/pages/Blog.module.css */
@media (max-width: 1024px) { /* Tablette */
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) { /* Mobile */
  .grid { grid-template-columns: 1fr; }
}
```

## Debugging

### Console errors
```
F12 → Console
```
Vérifier aucune erreur rouge.

### Network requests
```
F12 → Network → Filter "Fetch/XHR"
```
Vérifier calls API WISP si mode réel.

### Performance
```
F12 → Performance → Record → Stop
```
Vérifier animations 60fps.

### Lighthouse
```
F12 → Lighthouse → Analyze page load
```
Vérifier scores > 90.

## Git

### Commit changes
```bash
git add .
git commit -m "feat: implement blog page with filters and pagination"
git push
```

### Reset si besoin
```bash
git checkout -- src/pages/Blog.jsx
git checkout -- src/pages/Blog.module.css
```

## Images

### Ajouter image blog
```bash
# Placer dans public/images/blog/
portfolio-cyberpunk.webp
canvas-games.webp
ai-integration.webp
# etc.
```

### Optimiser images
```bash
# Installer sharp (optionnel)
npm install sharp

# Script d'optimisation (créer scripts/optimize-images.js)
# Convertir JPG → WebP 800x800px
```

## Maintenance

### Update dependencies
```bash
npm update
```

### Check vulnerabilities
```bash
npm audit
```

### Clean cache
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

## Troubleshooting

### Images ne chargent pas
- Vérifier chemin `/placeholder-blog.svg` existe
- Vérifier données mock ont `image` défini
- Ouvrir Network tab → voir 404

### Filtres ne fonctionnent pas
- Vérifier console errors
- Vérifier `activeFilter` state
- Vérifier mapping catégories dans `useWisp.js`

### Pagination ne fonctionne pas
- Vérifier `totalPages` calculé
- Vérifier `currentPage` state
- Console log `posts.length`

### Styles pas appliqués
- Vérifier import CSS module
- Vérifier className correct
- Hard refresh (Ctrl+Shift+R)

### Hover effects ne marchent pas
- Vérifier navigateur support (Chrome recommandé)
- Désactiver extensions (AdBlock peut bloquer)
- Tester en navigation privée

## Support

Si problème persistant :
1. Vérifier console errors
2. Vérifier Network tab
3. Hard refresh (Ctrl+Shift+R)
4. Redémarrer dev server
5. Clear cache navigateur

---

Quick Start :
```bash
npm run dev
# Ouvrir http://localhost:5173/blog
```
