# INSTRUCTIONS REACT DEVELOPER
## PAGE ABOUT - KURDANT.FR - VARIANTE ROSE MAGENTA

---

## CONTEXTE PROJET

Site: Kurdant.fr - Portfolio Cyberpunk Interactif
Tech Stack: React 18 + Vite 5 + CSS Modules + Framer Motion
Système: Multi-Color Pages (chaque page = couleur dominante différente)
Page actuelle: ABOUT (couleur rose magenta #FF00A5)

---

## OBJECTIF

Implémenter la page About avec:
- Couleur dominante rose magenta saturé (#FF00A5)
- Structure complète (Hero, Profile, Skills, Timeline, Passions, CTA)
- Éléments organiques bioluminescents (méduses/tentacules)
- Overlays UI riches (wireframes, barcodes, data cards)
- Animations fluides et immersives
- Transition inter-pages avec color morphing

---

## DOCUMENTS DE RÉFÉRENCE

Lire ces documents avant implémentation:
1. MOODBOARD_ABOUT_PINK.md - Palette couleur et style visuel
2. NAVBAR_CONCEPT.md - Système navigation orbital
3. PAGE_ABOUT_STRUCTURE.md - Structure HTML/CSS détaillée
4. ANIMATIONS_TRANSITIONS_SPECS.md - Toutes les animations

---

## STRUCTURE DOSSIERS

```
src/
├── pages/
│   └── About/
│       ├── About.jsx (page principale)
│       ├── About.module.css
│       ├── sections/
│       │   ├── AboutHero.jsx
│       │   ├── AboutHero.module.css
│       │   ├── ProfileSection.jsx
│       │   ├── ProfileSection.module.css
│       │   ├── SkillsSection.jsx
│       │   ├── SkillsSection.module.css
│       │   ├── TimelineSection.jsx
│       │   ├── TimelineSection.module.css
│       │   ├── PassionsSection.jsx
│       │   ├── PassionsSection.module.css
│       │   ├── CTASection.jsx
│       │   └── CTASection.module.css
│       └── components/
│           ├── OrganicElement.jsx (méduses/tentacules)
│           ├── Particles.jsx
│           ├── WireframeGrid.jsx
│           ├── DataCard.jsx
│           ├── Barcode.jsx
│           ├── SkillBar.jsx
│           ├── TimelineItem.jsx
│           └── PassionCard.jsx
├── components/
│   ├── Navigation/
│   │   ├── OrbitalNav.jsx
│   │   └── OrbitalNav.module.css
│   ├── Transitions/
│   │   ├── PageTransition.jsx
│   │   └── PageTransition.module.css
│   └── Effects/
│       ├── Scanlines.jsx
│       ├── Grain.jsx
│       └── GlitchText.jsx
└── styles/
    ├── colors.css (variables couleurs toutes pages)
    └── animations.css (keyframes réutilisables)
```

---

## PRIORITÉS D'IMPLÉMENTATION

### PHASE 1 - STRUCTURE DE BASE

1. Créer page About.jsx avec sections vides
2. Implémenter structure HTML selon PAGE_ABOUT_STRUCTURE.md
3. Setup CSS Modules avec variables couleur rose
4. Vérifier responsive (mobile, tablet, desktop)

### PHASE 2 - CONTENU ET STYLES

1. AboutHero avec titre, subtitle, data cards
2. ProfileSection avec avatar placeholder et infos
3. SkillsSection avec barres statiques (sans animation)
4. TimelineSection avec items statiques
5. PassionsSection avec cards
6. CTASection avec bouton

### PHASE 3 - EFFETS VISUELS

1. Scanlines globales
2. Grain texture overlay
3. Wireframe backgrounds (Canvas ou SVG)
4. Barcodes décoratifs
5. GlitchText component pour titres

### PHASE 4 - ÉLÉMENTS ORGANIQUES

1. OrganicElement component (SVG méduses)
2. Float animations
3. Pulse glow
4. Particles system

### PHASE 5 - ANIMATIONS

1. Hero entry animations
2. Scroll-triggered reveals (Intersection Observer)
3. Skills bars fill animation
4. Timeline items reveal
5. Hover effects tous éléments

### PHASE 6 - NAVIGATION & TRANSITIONS

1. OrbitalNav component
2. PageTransition component
3. Color morphing system
4. Intégration React Router

---

## SPECS TECHNIQUES CLÉS

### CSS VARIABLES (colors.css)

```css
/* Base colors */
:root {
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-gray-light: #CCCCCC;
  --color-gray-mid: #999999;
  --color-gray-dark: #666666;
}

/* Page-specific colors (data attribute) */
[data-page="about"] {
  --color-primary: #FF00A5;
  --color-primary-dark: #CC0084;
  --color-primary-light: #FF33B8;
  --color-primary-pale: #FF66CB;
  --color-primary-glow: rgba(255, 0, 165, 0.5);
  
  --color-secondary: #00FFFF; /* Cyan contrast */
}

[data-page="home"] {
  --color-primary: #D1C4E9;
  /* etc */
}

/* Utilisation dans composants */
.element {
  color: var(--color-primary);
  box-shadow: 0 0 20px var(--color-primary-glow);
}
```

### GLOW EFFECT MIXIN (CSS)

```css
/* Multi-layer glow rose */
.glow-rose {
  box-shadow: 
    0 0 10px rgba(255, 0, 165, 0.3),
    0 0 20px rgba(255, 0, 165, 0.2),
    0 0 30px rgba(255, 0, 165, 0.1),
    0 0 40px rgba(255, 0, 165, 0.05);
}

.glow-rose-intense {
  box-shadow: 
    0 0 15px rgba(255, 0, 165, 0.6),
    0 0 30px rgba(255, 0, 165, 0.4),
    0 0 45px rgba(255, 0, 165, 0.3),
    0 0 60px rgba(255, 0, 165, 0.2);
}
```

### GLITCH TEXT COMPONENT

```jsx
// GlitchText.jsx
import { useState, useEffect } from 'react';
import styles from './GlitchText.module.css';

export default function GlitchText({ text, className }) {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000); // Glitch every 5s
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <h1 
      className={`${styles.glitchText} ${className} ${isGlitching ? styles.glitching : ''}`}
      data-text={text}
    >
      {text}
    </h1>
  );
}
```

```css
/* GlitchText.module.css */
.glitchText {
  position: relative;
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  color: var(--color-primary);
  text-shadow: 
    0 0 20px var(--color-primary-glow),
    0 0 40px var(--color-primary-glow);
}

.glitchText::before,
.glitchText::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.glitching::before {
  animation: glitch1 0.2s infinite;
  color: cyan;
  z-index: -1;
}

.glitching::after {
  animation: glitch2 0.2s infinite;
  color: red;
  z-index: -2;
}

@keyframes glitch1 {
  0%, 100% { transform: translate(0); }
  33% { transform: translate(-2px, 2px); }
  66% { transform: translate(2px, -2px); }
}

@keyframes glitch2 {
  0%, 100% { transform: translate(0); }
  33% { transform: translate(2px, -2px); }
  66% { transform: translate(-2px, 2px); }
}
```

### SKILL BAR COMPONENT

```jsx
// SkillBar.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './SkillBar.module.css';

export default function SkillBar({ name, level }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  return (
    <div ref={ref} className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      
      <div className={styles.skillBar}>
        <motion.div 
          className={styles.skillFill}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.div 
            className={styles.skillGlow}
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </div>
  );
}
```

```css
/* SkillBar.module.css */
.skillItem {
  margin-bottom: 24px;
}

.skillHeader {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-family: 'Inter', sans-serif;
}

.skillName {
  font-weight: 500;
  color: var(--color-white);
}

.skillLevel {
  font-family: 'JetBrains Mono', monospace;
  color: var(--color-primary-pale);
  font-size: 14px;
}

.skillBar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.skillFill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  position: relative;
}

.skillGlow {
  position: absolute;
  top: 0;
  width: 30px;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  filter: blur(8px);
}
```

### ORGANIC ELEMENT COMPONENT

```jsx
// OrganicElement.jsx
import { motion } from 'framer-motion';
import styles from './OrganicElement.module.css';

export default function OrganicElement({ 
  position = { x: 0, y: 0 }, 
  size = 200,
  type = 'jellyfish' 
}) {
  const floatVariants = {
    animate: {
      y: [-20, 0, -20],
      x: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };
  
  const glowVariants = {
    animate: {
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };
  
  return (
    <motion.div 
      className={styles.organicElement}
      style={{ 
        left: position.x, 
        top: position.y,
        width: size,
        height: size 
      }}
      variants={floatVariants}
      animate="animate"
    >
      <motion.svg 
        viewBox="0 0 200 200" 
        className={styles.svg}
        variants={glowVariants}
        animate="animate"
      >
        {/* SVG jellyfish/tentacles paths */}
        <defs>
          <linearGradient id="organicGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CC0084" />
            <stop offset="50%" stopColor="#FF00A5" />
            <stop offset="100%" stopColor="#FF66CB" />
          </linearGradient>
        </defs>
        
        {/* Jellyfish body */}
        <ellipse cx="100" cy="60" rx="60" ry="40" fill="url(#organicGradient)" opacity="0.6" />
        
        {/* Tentacles (simplified) */}
        <path d="M 80 90 Q 75 120, 70 150" stroke="url(#organicGradient)" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M 90 95 Q 90 125, 85 155" stroke="url(#organicGradient)" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M 100 100 Q 105 130, 100 160" stroke="url(#organicGradient)" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M 110 95 Q 115 125, 120 155" stroke="url(#organicGradient)" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M 120 90 Q 130 120, 140 150" stroke="url(#organicGradient)" strokeWidth="3" fill="none" opacity="0.5" />
      </motion.svg>
    </motion.div>
  );
}
```

```css
/* OrganicElement.module.css */
.organicElement {
  position: absolute;
  pointer-events: none;
  filter: drop-shadow(0 0 20px var(--color-primary-glow));
  z-index: 1;
}

.svg {
  width: 100%;
  height: 100%;
}
```

### PAGE TRANSITION COMPONENT

```jsx
// PageTransition.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './PageTransition.module.css';

export default function PageTransition({ 
  isTransitioning, 
  fromColor, 
  toColor,
  onComplete 
}) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isTransitioning) {
      let start = 0;
      const duration = 700; // ms
      const interval = setInterval(() => {
        start += 16; // ~60fps
        const percent = Math.min((start / duration) * 100, 100);
        setProgress(percent);
        
        if (percent >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600); // Wait before exit
        }
      }, 16);
      
      return () => clearInterval(interval);
    }
  }, [isTransitioning, onComplete]);
  
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div 
          className={styles.transitionOverlay}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0 0 0)' }}
          exit={{ clipPath: 'inset(0 0 0 100%)' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className={styles.glitchLayer} />
          <div className={styles.scanlines} />
          
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}>
              <motion.div 
                className={styles.loadingFill}
                style={{ 
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${fromColor} 0%, ${toColor} 100%)`
                }}
              />
            </div>
            <div className={styles.loadingText}>
              <span>LOADING</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### INTERSECTION OBSERVER HOOK

```jsx
// hooks/useScrollReveal.js
import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.3) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Trigger once
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  
  return [ref, isVisible];
}
```

---

## ASSETS REQUIS

### IMAGES
- avatar.jpg (photo Hugo, placeholder 280x280px)
- Optional: Background textures (grain, scanlines)

### FONTS
Google Fonts à importer:
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Press+Start+2P&family=Inter:wght@400;500;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

### ICONS
Options:
- React Icons (react-icons)
- SVG custom
- Font Awesome (si déjà utilisé)

---

## DONNÉES CONTENT

### PROFILE INFO (placeholder)
```javascript
export const profileData = {
  name: "Hugo Kurdant",
  role: "Junior Developer",
  location: "France",
  experience: "2+ Years",
  specialization: "React / Frontend",
  status: "Open to Work",
  bio: "Développeur junior passionné par la création d'expériences web uniques et immersives. Spécialisé en React et développement frontend, avec un fort intérêt pour le design et les animations.",
  links: {
    github: "https://github.com/hugo-kurdant",
    linkedin: "https://linkedin.com/in/hugo-kurdant",
    twitter: "https://twitter.com/HugoKurdant"
  }
};
```

### SKILLS DATA
```javascript
export const skillsData = [
  {
    category: "Frontend",
    icon: "💻",
    skills: [
      { name: "React", level: 75 },
      { name: "JavaScript", level: 80 },
      { name: "HTML / CSS", level: 85 },
      { name: "Canvas / WebGL", level: 50 }
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 40 },
      { name: "Supabase", level: 55 },
      { name: "REST API", level: 50 }
    ]
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Figma", level: 60 },
      { name: "VS Code", level: 95 }
    ]
  }
];
```

### TIMELINE DATA
```javascript
export const timelineData = [
  {
    year: "2026",
    title: "Kurdant.fr",
    status: "En cours",
    description: "Portfolio personnel avec arcade de mini-jeux. Technologies: React, Canvas, WISP, Supabase.",
    tech: ["React", "Canvas", "Supabase", "WISP"],
    links: {
      demo: "https://kurdant.fr",
      github: "https://github.com/..."
    }
  },
  {
    year: "2025",
    title: "Projet X",
    status: "Terminé",
    description: "Description projet X",
    tech: ["React", "Node.js"],
    links: {
      demo: "#",
      github: "#"
    }
  }
];
```

### PASSIONS DATA
```javascript
export const passionsData = [
  {
    icon: "code",
    title: "Code",
    description: "Passion pour le développement et la création d'expériences web innovantes"
  },
  {
    icon: "design",
    title: "Design",
    description: "Sensibilité esthétique et souci du détail visuel"
  },
  {
    icon: "gaming",
    title: "Gaming",
    description: "Influence des jeux vidéo sur la créativité et l'interactivité"
  },
  {
    icon: "music",
    title: "Music",
    description: "Culture phonk et synthwave qui inspire l'univers visuel"
  }
];
```

---

## CHECKLIST IMPLÉMENTATION

### Phase 1 - Structure
- [ ] Créer fichiers et dossiers
- [ ] Setup CSS Modules
- [ ] Variables couleur
- [ ] Structure HTML sections
- [ ] Responsive layout base

### Phase 2 - Contenu
- [ ] AboutHero component
- [ ] ProfileSection component
- [ ] SkillsSection component
- [ ] TimelineSection component
- [ ] PassionsSection component
- [ ] CTASection component

### Phase 3 - Effets
- [ ] Scanlines global
- [ ] Grain overlay
- [ ] WireframeGrid component
- [ ] Barcode component
- [ ] GlitchText component

### Phase 4 - Organic
- [ ] OrganicElement component
- [ ] Float animations
- [ ] Particles system
- [ ] Glow effects

### Phase 5 - Animations
- [ ] Hero entry sequence
- [ ] Scroll reveals (Intersection Observer)
- [ ] Skills bars animation
- [ ] Timeline reveal
- [ ] Hover effects

### Phase 6 - Navigation
- [ ] OrbitalNav component
- [ ] PageTransition component
- [ ] Color system dynamic
- [ ] React Router integration

### Testing
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Performance (Lighthouse)
- [ ] Animations smooth
- [ ] Accessibility (keyboard, screen reader)
- [ ] Cross-browser (Chrome, Firefox, Safari)

---

## NOTES IMPORTANTES

### PERFORMANCE
- Utiliser will-change parcimonieusement
- Lazy load sections below fold
- Optimize SVG (remove unnecessary paths)
- Debounce scroll listeners
- Use CSS transforms over position changes

### ACCESSIBILITY
- Tous les boutons: aria-label
- Tous les liens: descriptif
- Focus visible sur éléments interactifs
- Respect prefers-reduced-motion
- Alt text sur images

### RESPONSIVE
- Mobile first approach
- Test sur vrais devices
- Simplifier animations sur mobile
- Désactiver effets lourds si needed

### BROWSER SUPPORT
- Chrome/Edge: Full support
- Firefox: Test glitch effects
- Safari: Test backdrop-filter, blend-modes
- Fallbacks si nécessaire

---

## CONTACT POUR QUESTIONS

Si clarifications nécessaires:
- Référer aux documents specs
- Demander validation visuelle à Hugo
- Proposer alternatives si contraintes techniques
- Itérer selon feedback

---

Document créé pour React Developer - Page About Implementation
Kurdant.fr - Système Multi-Color Pages
