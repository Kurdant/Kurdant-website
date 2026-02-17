# Guide de personnalisation - Page About

## 🎯 Modifier le contenu

### 1. Données personnelles
**Fichier:** `src/data/aboutData.js`

```javascript
export const profileData = {
  name: "TON NOM",              // Change ici
  role: "TON ROLE",             // Change ici
  tagline: "TA PHRASE",         // Change ici
  bio: "TA BIO...",             // Change ici
  location: "TA LOCALISATION",  // Change ici
  avatarUrl: "/images/ton-avatar.jpg",  // Change ici
  stats: {
    projectsCompleted: 42,      // Change ici
    coffeeConsumed: "∞",        // Change ici
    linesOfCode: "999,999+",    // Change ici
    nightsCoded: "Too many"     // Change ici
  }
};
```

### 2. Compétences
**Fichier:** `src/data/aboutData.js`

```javascript
export const skillsData = [
  {
    category: "Nom Catégorie",
    skills: [
      { name: "Compétence 1", level: 95 },  // 0-100
      { name: "Compétence 2", level: 90 },
      // Ajoute/supprime selon besoin
    ]
  },
  // Ajoute d'autres catégories...
];
```

### 3. Timeline
**Fichier:** `src/data/aboutData.js`

```javascript
export const timelineData = [
  {
    year: "2024",
    title: "Titre événement",
    description: "Description...",
    type: "project",  // ou "work" ou "achievement"
    highlight: true   // true pour mettre en valeur
  },
  // Ajoute d'autres événements...
];
```

### 4. Passions
**Fichier:** `src/data/aboutData.js`

```javascript
export const passionsData = [
  {
    icon: "🎮",              // Emoji
    title: "Titre",
    description: "Description..."
  },
  // Ajoute d'autres passions...
];
```

## 🎨 Ajuster les couleurs

### Couleur de la page About
**Fichier:** `src/styles/colors.css`

```css
[data-page="about"] {
  --color-primary: #FF00A5;         /* Couleur principale */
  --color-primary-dark: #CC0084;    /* Version foncée */
  --color-primary-light: #FF33B8;   /* Version claire */
  --color-primary-pale: #FF99D6;    /* Version très claire */
  --color-primary-glow: rgba(255, 0, 165, 0.5); /* Effet glow */
}
```

### Autres pages
```css
/* Home */
[data-page="home"] {
  --color-primary: #D1C4E9;  /* Violet lavande */
  /* ... */
}

/* Blog */
[data-page="blog"] {
  --color-primary: #FFFFFF;  /* Blanc */
  /* ... */
}

/* Arcade */
[data-page="arcade"] {
  --color-primary: #00FF41;  /* Vert matrix */
  /* ... */
}

/* Contact */
[data-page="contact"] {
  --color-primary: #30FAFF;  /* Cyan électrique */
  /* ... */
}
```

## 🖼️ Changer l'avatar

1. Ajoute ton image dans `public/images/`
2. Nomme-la (ex: `mon-avatar.jpg`)
3. Dans `src/data/aboutData.js`:
   ```javascript
   avatarUrl: "/images/mon-avatar.jpg"
   ```

## ⚙️ Ajuster les animations

### Timing global
**Fichier:** `src/styles/animations.css`

- Hover: 0.1s - 0.3s
- Transitions: 0.3s - 0.6s  
- Emphasis: 0.6s - 1.2s
- Ambient: 2s - 10s

### Désactiver les animations
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## 🎭 Éléments organiques

### Ajouter/retirer méduses/tentacules
**Fichier:** Sections (Hero, Profile, Skills, Passions)

```jsx
<OrganicElement
  type="jellyfish"        // ou "tentacle"
  position={{ 
    left: '10%',          // Position CSS
    top: '20%' 
  }}
  size="large"            // "small", "medium", "large"
  delay={0.2}             // Délai animation (secondes)
/>
```

### Position:
- `left` / `right`: 0% à 100%
- `top` / `bottom`: 0% à 100%
- Utilise un seul axe horizontal + un vertical

## 🔧 Navbar Orbital

### Changer les couleurs des orbes
**Fichier:** `src/components/Navigation/OrbitalNav.jsx`

```javascript
const pages = [
  { id: 'home', label: 'HOME', color: '#D1C4E9', path: '/' },
  { id: 'about', label: 'ABOUT', color: '#FF00A5', path: '/about' },
  // Modifie les couleurs ici
];
```

### Position de la navbar
**Fichier:** `src/components/Navigation/OrbitalNav.module.css`

```css
.orbitalNav {
  position: fixed;
  top: 24px;      /* Change ici */
  right: 24px;    /* Change ici */
}
```

## 🎨 Effets visuels

### Scanlines
**Fichier:** `src/components/Effects/Scanlines.jsx`
- Enlever: Retire `<Scanlines />` de About.jsx

### Grain
**Fichier:** `src/components/Effects/Grain.jsx`
- Enlever: Retire `<Grain />` de About.jsx

### Glitch Text
**Fichier:** Hero section
```jsx
<GlitchText text="TON TEXTE" className={styles.title} />
```

## 📱 Responsive

### Breakpoints
```css
@media (max-width: 480px) { /* Mobile small */ }
@media (max-width: 768px) { /* Mobile */ }
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 1280px) { /* Desktop small */ }
@media (max-width: 1536px) { /* Desktop */ }
```

## 🚀 Pour appliquer les changements

1. Modifie les fichiers
2. Sauvegarde
3. Vite recharge automatiquement
4. Vérifie dans le navigateur

## 💡 Tips

- **Trop d'éléments organiques?** Réduis le nombre dans les sections
- **Animations trop rapides?** Augmente les `duration` et `delay`
- **Couleur pas assez visible?** Ajuste opacity et glow
- **Mobile lent?** Désactive certains effets dans les media queries

---

**Questions fréquentes:**

**Q: Comment changer la couleur d'une autre page?**
A: Modifie `colors.css` avec `[data-page="nom"]` et ajoute `data-page` dans le composant

**Q: Les méduses bougent trop?**
A: Dans `OrganicElement.module.css`, réduis le `translateY` dans `@keyframes organicFloat`

**Q: Comment ajouter une nouvelle section?**
A: Crée un nouveau fichier dans `sections/`, copie la structure d'une section existante, et importe-le dans `About.jsx`

**Q: La navbar ne s'affiche pas?**
A: Vérifie que `OrbitalNav` est bien importé dans `App.jsx` et que le z-index est correct (1000)

**Q: Les animations ne fonctionnent pas?**
A: Vérifie que `animations.css` est bien importé dans `App.jsx`
