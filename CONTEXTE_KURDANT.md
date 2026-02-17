# 🌐 CONTEXTE COMPLET - SITE KURDANT.FR

**Projet :** Portfolio Cyberpunk Interactif  
**Propriétaire :** Hugo (Pseudonyme : Kurdant)  
**Date de création :** 2026  
**Statut :** En développement actif

---

## 🎯 VISION & OBJECTIFS DU PROJET

### Identité du Site

**Kurdant.fr** est un portfolio personnel hybride qui combine :
- **Portfolio professionnel** pour attirer recruteurs et opportunités
- **Blog technique** intégré via WISP CMS
- **Arcade de mini-jeux** développés en Canvas/WebGL
- **Plateforme évolutive** pour futures fonctionnalités

### Message Principal

> "Développeur junior motivé et passionné, spécialisé en React et développement web moderne"

### Objectifs Prioritaires

1. **Visibilité professionnelle** - Attirer l'attention des recruteurs
2. **Démo de compétences** - Projets concrets et mini-jeux interactifs
3. **Optimisation SEO** - Référencement pour opportunités d'emploi
4. **Expérience unique** - Design cyberpunk mémorable
5. **Performance** - Site rapide et accessible

---

## 🎨 IDENTITÉ VISUELLE - CYBERPUNK Y2K

### Style Artistique

**Genre principal :** Cyberpunk Y2K / Acid Graphics / Synthwave / Rétro-Futurisme

**Influences culturelles :**
- Streetwear design et culture urbaine
- Phonk et musique électronique underground
- Esthétique anime des années 90
- Culture arcade et jeux rétro
- Technologie futuriste dystopique

**Ambiance :** Technologique, futuriste, nostalgique, énergique

### Palette de Couleurs

#### Couleurs Principales
```css
/* Fonds */
--color-bg-primary: #000000        /* True Black - fond principal */
--color-bg-secondary: #0a0a0a      /* Noir légèrement relevé */
--color-bg-tertiary: #111111       /* Élévations et cards */

/* Néons Primaires (Signature Kurdant) */
--color-neon-red: #ff0040          /* Rouge vif - danger, accents forts */
--color-neon-pink: #ff00ff         /* Rose Magenta - énergie principale */
--color-neon-violet: #8b00ff       /* Violet Cyber - profondeur, mystère */

/* Néons Secondaires */
--color-neon-cyan: #00ffff         /* Bleu Cyan - tech, liens */
--color-neon-green: #00ff41        /* Vert Terminal - succès, code */

/* Texte */
--color-text-primary: #ffffff      /* Blanc pur */
--color-text-secondary: #b0b0b0    /* Gris clair */
--color-text-muted: #666666        /* Gris atténué */
```

### Typographie

1. **Titres Principaux (Hero)**
   - Police : **Orbitron** (large, étirée, style AKIRA/SATURN)
   - Usage : Logo KURDANT, titres de sections majeures
   - Style : Graisse forte, espacement large

2. **Texte Pixel/Bitmap**
   - Police : **Press Start 2P**
   - Usage : Accents rétro, badges, tags
   - Style : Pixelisé, 8-bit

3. **Corps de Texte**
   - Police : **Inter**
   - Usage : Paragraphes, descriptions, contenu
   - Style : Moderne, lisible, clean

4. **Code/Monospace**
   - Police : **JetBrains Mono**
   - Usage : Blocs de code, terminal
   - Style : Technique, professionnel

5. **Accents Exotiques**
   - Kanji, Cyrillique pour effet "tech étranger"
   - Usage : Décoratifs, ambiance cyberpunk

### Effets Visuels Clés

| Effet | Description | Usage | Priorité |
|-------|-------------|-------|----------|
| **Scanlines** | Lignes horizontales subtiles style CRT | Sur fond général | Haute |
| **Grain/Noise** | Texture photographique légère | Overlay global | Haute |
| **Glitch** | Distorsion VHS aléatoire | Sur titres au hover | Moyenne |
| **Wireframe 3D** | Objets fil de fer (globe, formes) | Hero section | Haute |
| **Néon Glow** | Lueur autour des éléments colorés | Boutons, textes, bordures | Haute |
| **Halftone** | Trame de points | Sur images | Basse |

### Motifs Récurrents Cyberpunk

- 🌐 **Globes terrestres quadrillés** (wireframe)
- ✚ **Croix de visée** (crosshairs)
- ▮▮▮ **Codes-barres**
- ▰▰▰▱▱ **Barres de chargement/progression**
- 🖥️ **Fenêtres d'interface système** (style Windows 95/terminal)
- 🆔 **Fiches d'identité** style "SUBJECT A-XX"
- ⚡ **Éclairs électriques**
- 📡 **Grilles et quadrillages**

---

## 🏗️ ARCHITECTURE DU SITE

### Structure des Pages

```
/                   → Page d'accueil (Hero + Sections principales)
/about              → À propos (Profil complet + Parcours)
/blog               → Liste des articles (intégration WISP)
/blog/:slug         → Article de blog individuel
/games              → Arcade de mini-jeux
/games/:game        → Jeu individuel (canvas fullscreen)
/contact            → Page de contact avec formulaire
```

### Page d'Accueil (Home) - Sections

1. **Hero Section**
   - Message d'accueil avec titre glitch "KURDANT"
   - Wireframe animé en arrière-plan (globe ou forme 3D)
   - CTA principal : "Découvrir mes projets"

2. **À Propos (Preview)**
   - Fiche d'identité style cyberpunk
   - Photo/Avatar
   - Phrase d'accroche
   - Skills principales (barres de progression néon)
   - Expériences clés

3. **Projets Phares**
   - 3-4 projets vedettes
   - Cards avec hover glitch
   - Technos utilisées (tags)
   - Liens démo + GitHub

4. **Blog Preview**
   - 2-3 derniers articles (via WISP API)
   - Cards simples avec image + titre + extrait
   - CTA "Voir tous les articles"

5. **Games Preview**
   - Carousel arcade
   - Thumbnails des jeux
   - CTA "Jouer maintenant"

6. **Contact CTA**
   - Appel à l'action pour recruteurs
   - Formulaire inline ou bouton vers page contact

7. **Footer**
   - Liens sociaux (GitHub, LinkedIn, Twitter)
   - Data Card (copyright, mentions légales)

### Composants Réutilisables

- **Navbar** : Fixed top, effet glitch on scroll
- **ThemeToggle** : Dark/Light mode switcher
- **ProjectCard** : Card projet avec hover effects
- **SkillBar** : Barre de progression avec glow néon
- **Timeline** : Timeline expérience style cyberpunk
- **GameCard** : Card mini-jeu avec preview
- **BlogCard** : Card article de blog
- **Button** : Boutons cyberpunk (primary, secondary, cyber)
- **Badge** : Tags technos avec couleurs néon
- **Terminal** : Frame terminal avec dots
- **Frame** : Cadres cyberpunk divers

---

## 🛠️ STACK TECHNIQUE

### Frontend

| Technologie | Version | Rôle |
|-------------|---------|------|
| **React** | 18.x | Framework principal UI |
| **Vite** | 5.x | Build tool et dev server |
| **React Router** | 6.x | Routing SPA |
| **CSS Modules** | - | Styling (variables CSS natives) |
| **Framer Motion** | Latest | Animations fluides |
| **Canvas API** | Native | Mini-jeux et effets 3D |

### Backend & Services

| Service | Rôle |
|---------|------|
| **Supabase** | BaaS (Database, Auth, Storage) |
| **WISP CMS** | API pour blog (articles) |
| **EmailJS** | Formulaire de contact |

### Hébergement & Déploiement

- **Hébergement :** Hostinger
- **Build :** Vite production build (`npm run build`)
- **CI/CD :** À définir (GitHub Actions potentiel)

### Outils de Développement

- **Git/GitHub** : Versioning et collaboration
- **VS Code** : Éditeur principal
- **Figma** : Design et prototypage
- **Chrome DevTools** : Debug et performance

---

## 📊 DONNÉES DU SITE

### Skills (Compétences)

```javascript
categories: [
  {
    name: "Frontend",
    icon: "💻",
    skills: [
      { name: "React", level: 75, icon: "⚛️" },
      { name: "JavaScript", level: 80, icon: "🟨" },
      { name: "HTML/CSS", level: 85, icon: "🎨" },
      { name: "Canvas/WebGL", level: 50, icon: "🖼️" }
    ]
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 40, icon: "🟢" },
      { name: "Supabase", level: 55, icon: "⚡" },
      { name: "REST API", level: 50, icon: "🔌" }
    ]
  },
  {
    name: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git/GitHub", level: 85, icon: "🐙" },
      { name: "Figma", level: 60, icon: "🎭" },
      { name: "VS Code", level: 95, icon: "💻" }
    ]
  }
]
```

### Projets

```javascript
{
  id: "kurdant-fr",
  title: "Kurdant.fr",
  description: "Portfolio personnel avec arcade de jeux - Style Cyberpunk Y2K",
  image: "/images/projects/kurdant.png",
  tech: ["React", "Canvas", "Supabase", "WISP"],
  featured: true,
  status: "En cours",
  links: {
    demo: "https://kurdant.fr",
    github: "https://github.com/kurdant/kurdant-fr"
  }
}
```

### Expériences

```javascript
{
  year: "2026",
  title: "Kurdant.fr",
  status: "En cours",
  description: "Portfolio cyberpunk + mini-jeux browser",
  tech: ["React", "Canvas", "WISP", "Supabase"],
  links: {
    demo: "https://kurdant.fr",
    github: "https://github.com/..."
  }
}
```

### Mini-Jeux (Arcade)

```javascript
{
  id: "game-1",
  title: "Nom du Jeu",
  description: "Description courte",
  thumbnail: "/images/games/game-1.png",
  type: "canvas",
  playable: true,
  component: "GameOne"
}
```

---

## ⚡ EXIGENCES DE PERFORMANCE

### Métriques Lighthouse

| Métrique | Objectif |
|----------|----------|
| Performance | > 90 |
| Accessibility | > 90 |
| Best Practices | > 90 |
| SEO | > 90 |

### Core Web Vitals

| Métrique | Objectif |
|----------|----------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| First Input Delay (FID) | < 100ms |

### Optimisations Requises

- ✅ **Lazy loading** obligatoire pour effets visuels lourds
- ✅ **Code splitting** par routes
- ✅ **Compression images** (WebP, formats modernes)
- ✅ **Minification CSS/JS** en production
- ✅ **Preload fonts** critiques
- ✅ **Defer scripts** non-critiques

---

## 🔍 STRATÉGIE SEO

### Meta Tags Essentiels

```html
<!-- Page Title -->
<title>Kurdant.fr - Portfolio de Hugo, Développeur Junior React</title>

<!-- Meta Description -->
<meta name="description" content="Portfolio cyberpunk de Hugo, développeur junior spécialisé en React, JavaScript et développement web moderne. Découvrez mes projets et mini-jeux.">

<!-- Keywords -->
<meta name="keywords" content="portfolio, développeur, react, cyberpunk, hugo, kurdant, javascript, web, frontend, backend">

<!-- Open Graph (Social Media) -->
<meta property="og:title" content="Kurdant.fr - Portfolio Cyberpunk">
<meta property="og:description" content="Développeur junior passionné">
<meta property="og:image" content="https://kurdant.fr/og-image.jpg">
<meta property="og:url" content="https://kurdant.fr">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Kurdant.fr">
<meta name="twitter:image" content="https://kurdant.fr/twitter-image.jpg">
```

### URLs Sémantiques

- ✅ `/` - Page d'accueil
- ✅ `/about` - À propos
- ✅ `/blog/[slug]` - Article de blog (slug descriptif)
- ✅ `/games/[game-name]` - Jeu spécifique
- ✅ `/contact` - Contact

### Sitemap & Robots

- **Sitemap.xml** : Automatique via plugin Vite
- **Robots.txt** : Autoriser tous les bots sauf contenu sensible

### Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hugo Kurdant",
  "jobTitle": "Développeur Junior",
  "url": "https://kurdant.fr",
  "sameAs": [
    "https://github.com/hugo-kurdant",
    "https://linkedin.com/in/hugo-kurdant"
  ]
}
```

---

## ♿ ACCESSIBILITÉ

### Contrastes WCAG

- **Niveau AA minimum** : Ratio 4.5:1 pour texte normal
- **Niveau AAA recommandé** : Ratio 7:1 pour éléments importants
- **Challenge** : Design dark avec néons → vérifier contrastes

### Navigation Clavier

- ✅ Tous les éléments interactifs accessibles au clavier
- ✅ Focus visible sur éléments (outline néon cyan)
- ✅ Ordre de tabulation logique

### ARIA Labels

```html
<!-- Exemple -->
<button aria-label="Ouvrir le menu de navigation">☰</button>
<nav aria-label="Navigation principale">...</nav>
<img src="..." alt="Description détaillée de l'image">
```

### Skip Links

```html
<a href="#main-content" class="skip-link">
  Aller au contenu principal
</a>
```

### Respect des Préférences Utilisateur

```css
/* Désactiver animations si préférence utilisateur */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

/* Améliorer contraste si préférence utilisateur */
@media (prefers-contrast: high) {
  :root {
    --color-text-primary: #ffffff;
    --color-bg-primary: #000000;
  }
}
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoints

| Nom | Taille | Usage |
|-----|--------|-------|
| `sm` | 480px | Mobiles petits |
| `md` | 768px | Tablettes portrait |
| `lg` | 1024px | Tablettes landscape / petits laptops |
| `xl` | 1280px | Desktop standard |
| `2xl` | 1536px | Grand écran |

### Approche Mobile-First

```css
/* Par défaut : mobile */
.element {
  font-size: 14px;
}

/* Tablette */
@media (min-width: 768px) {
  .element {
    font-size: 16px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    font-size: 18px;
  }
}
```

### Effets Allégés sur Mobile

- **Scanlines** : Désactivées sur mobile
- **Grain** : Allégé ou désactivé
- **Animations complexes** : Simplifiées
- **Wireframe 3D** : Version statique ou désactivée

---

## 🎮 ARCADE DE MINI-JEUX

### Concept

Section interactive dédiée aux mini-jeux développés en Canvas/WebGL pour démontrer compétences en développement de jeux browser.

### Types de Jeux Prévus

1. **Jeu de Plateforme** - Style rétro pixel art
2. **Puzzle Game** - Logique et réflexion
3. **Arcade Shooter** - Action rapide
4. **Interactive Demo** - Expérimentation visuelle

### Structure Technique

```javascript
// Composant GameCanvas générique
<GameCanvas
  gameId="game-1"
  width={800}
  height={600}
  controls={['keyboard', 'touch']}
/>
```

### Features des Jeux

- ✅ Système de score (localStorage)
- ✅ Leaderboard local
- ✅ Fullscreen mode
- ✅ Pause/Resume
- ✅ Instructions intégrées
- ✅ Responsive (touch sur mobile)

---

## 📝 BLOG (WISP CMS)

### Intégration WISP

**WISP** est un CMS headless spécialisé pour blogs de développeurs.

### Configuration

```javascript
apis: {
  wisp: {
    baseUrl: "https://wisp.blog/api",
    blogId: "kurdant-blog" // ID unique
  }
}
```

### Features Blog

- ✅ Liste des articles avec pagination
- ✅ Catégories et tags
- ✅ Recherche full-text
- ✅ Syntax highlighting pour code
- ✅ Images optimisées
- ✅ Partage social

### Types d'Articles Prévus

1. **Tutoriels techniques** (React, Canvas, etc.)
2. **DevLogs** du développement Kurdant.fr
3. **Retours d'expérience** apprentissage
4. **Analyses** de projets/technos

---

## 📧 CONTACT

### Formulaire de Contact

**Service utilisé :** EmailJS (gratuit, pas de backend requis)

### Champs du Formulaire

```javascript
{
  name: "Nom complet",
  email: "Email (requis)",
  subject: "Sujet",
  message: "Message (requis)"
}
```

### Validation

- ✅ Email format valide
- ✅ Champs requis remplis
- ✅ Protection anti-spam (honeypot)

### Réseaux Sociaux

- **GitHub** : https://github.com/hugo-kurdant
- **LinkedIn** : https://linkedin.com/in/hugo-kurdant
- **Twitter** : https://twitter.com/HugoKurdant
- **Email** : contact@kurdant.fr

---

## 🎭 PERSONNALITÉ DU SITE

### Ton & Voice

- **Professionnel mais accessible** - Sérieux sans être corporate
- **Passionné et motivé** - Enthousiasme visible
- **Techniquement compétent** - Termes techniques appropriés
- **Humble et en apprentissage** - Reconnaître statut junior

### Messages Clés à Transmettre

1. "Je suis un développeur junior **motivé** et **compétent**"
2. "J'ai des **compétences concrètes** (projets, jeux)"
3. "Je maîtrise **React et le développement web moderne**"
4. "J'ai une **personnalité créative** (design cyberpunk unique)"
5. "Je suis **ouvert aux opportunités** professionnelles"

### Points de Différenciation

✨ **Design cyberpunk unique** - Mémorable vs portfolios classiques  
🎮 **Mini-jeux interactifs** - Preuve de compétences techniques  
📝 **Blog technique** - Partage de connaissances  
⚡ **Performance optimale** - Professionnalisme technique  
🎨 **Attention aux détails** - Effets visuels soignés

---

## 🚀 ROADMAP

### Phase 1 - MVP (Actuel)
- [x] Setup projet React + Vite
- [x] Design system CSS complet
- [x] Structure pages principales
- [ ] Composants réutilisables
- [ ] Hero section avec wireframe animé
- [ ] Section projets
- [ ] Section skills
- [ ] Footer

### Phase 2 - Contenu
- [ ] Page About complète
- [ ] Intégration blog WISP
- [ ] Formulaire contact EmailJS
- [ ] Ajout projets réels
- [ ] Premier mini-jeu arcade

### Phase 3 - Optimisation
- [ ] SEO complet (meta tags, sitemap)
- [ ] Performance Lighthouse > 90
- [ ] Accessibilité WCAG AA
- [ ] Tests responsiveness
- [ ] Analytics

### Phase 4 - Avancé
- [ ] 2-3 mini-jeux supplémentaires
- [ ] Dark/Light mode switcher
- [ ] Animations Framer Motion
- [ ] Easter eggs cachés
- [ ] Blog actif (articles réguliers)

---

## 📚 RESSOURCES & INSPIRATIONS

### Design Inspirations

- **Akira** - Esthétique cyberpunk iconique
- **Y2K Aesthetic** - Couleurs vives, formes organiques
- **Phonk Culture** - Streetwear, neon, grilles
- **Synthwave** - Néons, grids, retro-futurisme
- **Arcade Games** - Pixel art, neon glow

### Fonts Utilisées

- **Orbitron** - Google Fonts (titres)
- **Press Start 2P** - Google Fonts (pixel)
- **Inter** - Google Fonts (corps)
- **JetBrains Mono** - Google Fonts (code)

### Outils & Plugins

- **Vite** - Build tool ultra-rapide
- **React Router** - Routing SPA
- **Framer Motion** - Animations fluides
- **EmailJS** - Formulaires sans backend
- **WISP** - CMS headless pour blog
- **Supabase** - Backend as a Service

---

## 🔐 CONFIGURATION & SECRETS

### Variables d'Environnement

```env
# .env.local (ne pas commit)
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxx
VITE_WISP_BLOG_ID=kurdant-blog
VITE_EMAILJS_SERVICE_ID=xxx
VITE_EMAILJS_TEMPLATE_ID=xxx
VITE_EMAILJS_PUBLIC_KEY=xxx
```

### Domaine

- **Production** : https://kurdant.fr (Hostinger)
- **Staging** : TBD
- **Dev local** : http://localhost:5173 (Vite default)

---

## 📞 INFORMATIONS DE CONTACT

### Propriétaire du Projet

- **Nom** : Hugo
- **Pseudonyme** : Kurdant
- **Statut** : Développeur Junior
- **Spécialités** : React, JavaScript, Canvas/WebGL

### Contact

- **Email principal** : contact@kurdant.fr
- **GitHub** : https://github.com/hugo-kurdant
- **LinkedIn** : https://linkedin.com/in/hugo-kurdant

---

_Document de contexte complet - Kurdant.fr - Février 2026_  
_Toutes les informations centralisées pour développement et maintenance du site_
