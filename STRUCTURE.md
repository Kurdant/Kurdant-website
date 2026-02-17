# KURDANT.FR - STRUCTURE COMPLÈTE

## 📁 Architecture créée

```
KurdantWebsite/
├── public/
│   └── image/
│       └── backgroud_images/
│           └── image_background_official_1.png
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.module.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       └── Hero.module.css
│   │
│   ├── pages/
│   │   ├── Home.jsx + Home.module.css
│   │   ├── About.jsx + About.module.css
│   │   ├── Blog.jsx + Blog.module.css
│   │   ├── BlogPost.jsx + BlogPost.module.css
│   │   ├── Games.jsx + Games.module.css
│   │   ├── GamePlay.jsx + GamePlay.module.css
│   │   ├── Contact.jsx + Contact.module.css
│   │
│   ├── hooks/ (vide, prêt pour custom hooks)
│   ├── styles/
│   │   └── global.css
│   ├── utils/ (vide, prêt pour helpers)
│   ├── assets/ (vide, prêt pour images/icons)
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
└── package.json

```

## ✅ Composants créés

### Layout
- **Navbar** : Navigation fixed top avec liens (Accueil, À propos, Blog, Arcade, Contact)
- **Footer** : Footer avec data card, copyright et liens sociaux

### Sections
- **Hero** : Section Hero complète avec background image, titre "KURDANT DEV", effets visuels

### Common
- **Button** : Bouton avec 3 variants (primary, secondary, cyber)

### Pages
- **Home** : Page d'accueil avec Hero + sections preview
- **About** : Page À propos
- **Blog** : Liste des articles
- **BlogPost** : Article individuel (dynamique avec slug)
- **Games** : Page Arcade
- **GamePlay** : Jeu individuel (dynamique avec game param)
- **Contact** : Page contact

## 🎨 Design System

### Couleurs
- Lavender soft/medium/light/dark (DA principale)
- Neon pink/violet/cyan/red/green (accents)
- Background noir profond

### Typographies
- Orbitron (titres)
- Press Start 2P (pixel)
- Inter (corps)
- JetBrains Mono (code)

### Effets
- Scanlines (global)
- Grain/noise (global)
- Neon glow sur éléments clés
- Transitions fluides

## 🚀 Prochaines étapes

1. Installer dépendances : `npm install`
2. Lancer dev server : `npm run dev`
3. Développer sections manquantes (À propos preview, Projets, Blog preview, etc.)
4. Créer composants réutilisables (ProjectCard, SkillBar, GameCard, BlogCard)
5. Intégrer services externes (WISP, Supabase, EmailJS)

## 📦 Installation

```bash
cd C:\Users\hugop\Desktop\Kurdant-Perso\KurdantWebsite
npm install
npm run dev
```

Ouvre http://localhost:5173
