# KURDANT.FR - HOMEPAGE REDESIGN SPECIFICATIONS

**Date:** 2026-02-12  
**Designer:** Kurdant UX/UI Designer  
**Pour:** Kurdant React Developer  
**Status:** Ready for Implementation

---

## OVERVIEW

Refonte complète de la page d'accueil avec un effet de scroll overlay immersif. Le hero existant reste fixe en arrière-plan, et une nouvelle page glisse par-dessus au scroll pour afficher les informations essentielles.

---

## STRUCTURE GLOBALE

### LAYERS

```
LAYER 1 (Fixed Background)
┌─────────────────────────────────────┐
│                                     │
│     HERO SECTION (EXISTANT)         │
│     Position: fixed                 │
│     Z-index: 1                      │
│                                     │
└─────────────────────────────────────┘

LAYER 2 (Sliding Content)
┌─────────────────────────────────────┐
│                                     │
│     CONTENT PAGE                    │
│     Position: relative              │
│     Z-index: 10                     │
│     Animation: slide-up on scroll   │
│                                     │
└─────────────────────────────────────┘
```

### SCROLL BEHAVIOR

**Initial State (scroll = 0):**
- Hero visible à 100%
- Content page en dessous (translateY: 100vh)
- Opacity: 0

**Scroll Trigger (scroll > 50px):**
- Content page commence à slider vers le haut
- Opacity: 0 → 1 (transition fluide)
- translateY: 100vh → 0vh

**Final State (scroll > 300px):**
- Content page recouvre entièrement le hero
- Hero reste en position fixe en arrière-plan (z-index inférieur)
- Content page prend tout l'écran

---

## CONTENT PAGE - STRUCTURE DÉTAILLÉE

### LAYOUT: 2 SCREENS DE SCROLL

```
╔═══════════════════════════════════════════════════════╗
║                   SCREEN 1 (100vh)                    ║
║                                                       ║
║  ┌─────────────────────────────────────────────────┐ ║
║  │  SECTION 1: IDENTITY CARD                       │ ║
║  │  (Qui je suis)                                  │ ║
║  └─────────────────────────────────────────────────┘ ║
║                                                       ║
║  ┌─────────────────────────────────────────────────┐ ║
║  │  SECTION 2: SKILLS GRID                         │ ║
║  │  (Ce que je sais faire)                         │ ║
║  └─────────────────────────────────────────────────┘ ║
║                                                       ║
║                     [SCROLL ↓]                        ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════╗
║                   SCREEN 2 (100vh)                    ║
║                                                       ║
║  ┌─────────────────────────────────────────────────┐ ║
║  │  SECTION 3: SOCIAL LINKS                        │ ║
║  │  (GitHub, Instagram, LinkedIn)                  │ ║
║  └─────────────────────────────────────────────────┘ ║
║                                                       ║
║  ┌─────────────────────────────────────────────────┐ ║
║  │  SECTION 4: NAVIGATION MENU                     │ ║
║  │  (Liens vers autres pages)                      │ ║
║  └─────────────────────────────────────────────────┘ ║
║                                                       ║
║  ┌─────────────────────────────────────────────────┐ ║
║  │  SECTION 5: QUICK CONTACT                       │ ║
║  │  (Email + CTA)                                  │ ║
║  └─────────────────────────────────────────────────┘ ║
║                                                       ║
║                      [↑ UP]                           ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
```

---

## SECTIONS - SPÉCIFICATIONS DÉTAILLÉES

### SECTION 1: IDENTITY CARD

**Purpose:** Présenter Hugo / Kurdant de manière concise et impactante

**Layout:**
```
╔════════════════════════════════════════════════╗
║                                                ║
║  ┌──────────────────────────────────────────┐ ║
║  │                                          │ ║
║  │  HUGO / KURDANT                          │ ║ ← H1 (Orbitron, 48px, lavender glow)
║  │                                          │ ║
║  │  Développeur React Junior                │ ║ ← H2 (Inter, 24px, lavender soft)
║  │                                          │ ║
║  │  ────────────────────                    │ ║ ← Divider (lavender, 2px, glow)
║  │                                          │ ║
║  │  Passionné par le développement web      │ ║
║  │  moderne et les expériences visuelles    │ ║ ← Body text (Inter, 16px, white)
║  │  immersives. Créateur d'interfaces       │ ║
║  │  uniques et de mini-jeux interactifs.    │ ║
║  │                                          │ ║
║  └──────────────────────────────────────────┘ ║
║                                                ║
╚════════════════════════════════════════════════╝
```

**Visual Style:**
- Background: rgba(18, 18, 18, 0.95) (Dark Elevation avec transparence)
- Border: 2px solid #B39DDB (lavender medium)
- Box-shadow: 0 0 20px rgba(179, 157, 219, 0.3) (lavender glow)
- Border-radius: 8px
- Padding: 40px
- Max-width: 800px
- Margin: 0 auto

**Responsive (Mobile):**
- Padding: 24px
- H1: 32px
- H2: 18px
- Body: 14px

---

### SECTION 2: SKILLS GRID

**Purpose:** Montrer les compétences principales avec des badges stylés

**Layout:**
```
╔════════════════════════════════════════════════╗
║                                                ║
║  ┌──────────────────────────────────────────┐ ║
║  │                                          │ ║
║  │  COMPÉTENCES                             │ ║ ← H3 (Orbitron, 32px)
║  │                                          │ ║
║  │  ────────────────────                    │ ║
║  │                                          │ ║
║  │  [React]  [JavaScript]  [CSS]            │ ║ ← Row 1
║  │                                          │ ║
║  │  [Canvas]  [Git]  [Figma]                │ ║ ← Row 2
║  │                                          │ ║
║  │  [Framer Motion]  [Vite]  [Node.js]      │ ║ ← Row 3
║  │                                          │ ║
║  └──────────────────────────────────────────┘ ║
║                                                ║
╚════════════════════════════════════════════════╝
```

**Badge Style:**
- Background: rgba(18, 18, 18, 0.8)
- Border: 1px solid #9575CD (lavender dark)
- Color: #D1C4E9 (lavender soft)
- Font: Press Start 2P, 10px (pixel style)
- Padding: 12px 20px
- Border-radius: 4px
- Box-shadow: 0 0 10px rgba(179, 157, 219, 0.2)
- Transition: all 0.3s ease

**Hover State:**
- Border-color: #B39DDB (lavender medium)
- Box-shadow: 0 0 20px rgba(179, 157, 219, 0.5) (glow intensifié)
- Transform: translateY(-2px)

**Grid Layout:**
- Display: flex
- Flex-wrap: wrap
- Gap: 16px
- Justify-content: center

---

### SECTION 3: SOCIAL LINKS

**Purpose:** Liens vers GitHub, Instagram, LinkedIn

**Layout:**
```
╔════════════════════════════════════════════════╗
║                                                ║
║  ┌──────────────────────────────────────────┐ ║
║  │                                          │ ║
║  │  CONNEXIONS                              │ ║ ← H3 (Orbitron, 32px)
║  │                                          │ ║
║  │  ────────────────────                    │ ║
║  │                                          │ ║
║  │  ┌────────┐  ┌──────────┐  ┌──────────┐ │ ║
║  │  │ GitHub │  │ Instagram│  │ LinkedIn │ │ ║
║  │  │   🐙   │  │    📷    │  │    💼    │ │ ║
║  │  └────────┘  └──────────┘  └──────────┘ │ ║
║  │                                          │ ║
║  └──────────────────────────────────────────┘ ║
║                                                ║
╚════════════════════════════════════════════════╝
```

**Link Card Style:**
- Background: rgba(18, 18, 18, 0.9)
- Border: 1px solid #9575CD
- Padding: 24px
- Border-radius: 8px
- Text-align: center
- Cursor: pointer
- Transition: all 0.3s ease

**Hover State:**
- Border-color: #80DEEA (cyan soft)
- Box-shadow: 0 0 30px rgba(128, 222, 234, 0.4)
- Transform: scale(1.05)

**Icon:**
- Font-size: 48px
- Margin-bottom: 12px

**Label:**
- Font: Inter, 14px
- Color: #D1C4E9
- Text-transform: uppercase
- Letter-spacing: 1px

---

### SECTION 4: NAVIGATION MENU

**Purpose:** Liens vers les autres pages du site

**Layout:**
```
╔════════════════════════════════════════════════╗
║                                                ║
║  ┌──────────────────────────────────────────┐ ║
║  │                                          │ ║
║  │  EXPLORER                                │ ║ ← H3 (Orbitron, 32px)
║  │                                          │ ║
║  │  ────────────────────                    │ ║
║  │                                          │ ║
║  │  → About      En savoir plus             │ ║
║  │  → Projects   Mes réalisations           │ ║
║  │  → Blog       Articles techniques        │ ║
║  │  → Games      Mini-jeux arcade           │ ║
║  │  → Contact    Me contacter               │ ║
║  │                                          │ ║
║  └──────────────────────────────────────────┘ ║
║                                                ║
╚════════════════════════════════════════════════╝
```

**Link Style:**
- Display: flex
- Align-items: center
- Padding: 16px 0
- Border-bottom: 1px solid rgba(149, 117, 205, 0.2)
- Transition: all 0.3s ease

**Arrow:**
- Color: #B39DDB
- Font-size: 20px
- Margin-right: 16px

**Link Text:**
- Font: Orbitron, 18px, bold
- Color: #D1C4E9
- Margin-right: 24px

**Description:**
- Font: Inter, 14px
- Color: #9E9E9E
- Font-style: italic

**Hover State:**
- Background: rgba(179, 157, 219, 0.1)
- Padding-left: 16px
- Border-color: #B39DDB
- Arrow color: #80DEEA (cyan)

---

### SECTION 5: QUICK CONTACT

**Purpose:** Email + CTA vers page contact

**Layout:**
```
╔════════════════════════════════════════════════╗
║                                                ║
║  ┌──────────────────────────────────────────┐ ║
║  │                                          │ ║
║  │  CONTACT RAPIDE                          │ ║ ← H3 (Orbitron, 32px)
║  │                                          │ ║
║  │  ────────────────────                    │ ║
║  │                                          │ ║
║  │  Email: contact@kurdant.fr               │ ║ ← Email (JetBrains Mono, 16px)
║  │                                          │ ║
║  │  ┌────────────────────────────────────┐  │ ║
║  │  │  Me contacter →                    │  │ ║ ← CTA Button
║  │  └────────────────────────────────────┘  │ ║
║  │                                          │ ║
║  └──────────────────────────────────────────┘ ║
║                                                ║
╚════════════════════════════════════════════════╝
```

**Email Style:**
- Font: JetBrains Mono, 16px
- Color: #80DEEA (cyan soft)
- Text-decoration: none
- Transition: all 0.3s ease

**Email Hover:**
- Color: #D1C4E9
- Text-shadow: 0 0 10px rgba(128, 222, 234, 0.5)

**CTA Button Style:**
- Background: linear-gradient(135deg, #B39DDB, #9575CD)
- Border: none
- Color: #000000
- Font: Orbitron, 16px, bold
- Padding: 16px 40px
- Border-radius: 8px
- Cursor: pointer
- Transition: all 0.3s ease
- Box-shadow: 0 0 20px rgba(179, 157, 219, 0.4)

**CTA Hover:**
- Transform: scale(1.05)
- Box-shadow: 0 0 40px rgba(179, 157, 219, 0.7)

---

## SCROLL INDICATORS

### INDICATOR 1: SCROLL DOWN (Fin Screen 1)

**Position:** Bas du premier écran, centré
**Style:**
```
┌─────────────────┐
│                 │
│    SCROLL       │  ← Text (Press Start 2P, 10px)
│       ↓         │  ← Arrow (animated)
│                 │
└─────────────────┘
```

**Animation:**
- Arrow bounce animation (translateY: 0 → 10px → 0)
- Duration: 2s
- Timing: ease-in-out
- Iteration: infinite

**Style:**
- Text-align: center
- Color: #D1C4E9
- Font: Press Start 2P, 10px
- Opacity: 0.7
- Margin-bottom: 40px

---

### INDICATOR 2: SCROLL UP (Fin Screen 2)

**Position:** Bas du deuxième écran, centré
**Style:**
```
┌─────────────────┐
│                 │
│       ↑         │  ← Arrow (animated)
│      UP         │  ← Text
│                 │
└─────────────────┘
```

**Animation:**
- Arrow bounce animation (translateY: 0 → -10px → 0)
- Duration: 2s
- Timing: ease-in-out
- Iteration: infinite

**Behavior:**
- On click: smooth scroll to top (hero visible again)

---

## ANIMATIONS & TRANSITIONS

### SLIDE-UP ANIMATION (Content Page Entry)

**Trigger:** Scroll > 50px

**Keyframes:**
```css
@keyframes slideUp {
  0% {
    transform: translateY(100vh);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
```

**Properties:**
- Duration: 0.8s
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Fill-mode: forwards

---

### SECTIONS FADE-IN (Staggered)

**Trigger:** Scroll in viewport

**Animation:**
```css
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Stagger Delay:**
- Section 1: 0s
- Section 2: 0.2s
- Section 3: 0.4s
- Section 4: 0.6s
- Section 5: 0.8s

---

## GLOBAL STYLING

### BACKGROUND

**Content Page Background:**
- Background: linear-gradient(180deg, #000000 0%, #0a0a0a 100%)
- Position: relative
- Z-index: 10
- Min-height: 200vh (2 screens)

**Overlay Effects:**
- Scanlines: rgba(255, 255, 255, 0.02) repeating gradient
- Grain: SVG noise filter, opacity 0.03

---

### SPACING

**Section Margins:**
- Margin-bottom: 48px (desktop)
- Margin-bottom: 32px (mobile)

**Container:**
- Max-width: 1200px
- Padding: 0 24px (mobile)
- Padding: 0 48px (tablet)
- Padding: 0 80px (desktop)
- Margin: 0 auto

---

## RESPONSIVE BEHAVIOR

### DESKTOP (> 1024px)
- Sections: Max-width 800px, centered
- Cards: Full size specs as described
- Grid: 3 columns for social links

### TABLET (768px - 1024px)
- Sections: Max-width 700px
- Font sizes: -2px reduction
- Grid: 3 columns maintained

### MOBILE (< 768px)
- Sections: Full width with padding 24px
- Cards: Stack vertically
- Font sizes: -4px reduction
- Skills badges: 2 per row
- Social links: Stack vertically

---

## TECHNICAL IMPLEMENTATION NOTES

### REACT COMPONENTS TO CREATE/MODIFY

1. **HomePage.jsx** (modifier)
   - Ajouter layer structure (hero fixed + content sliding)
   - Implémenter scroll detection
   - Déclencher animations slide-up

2. **ContentOverlay.jsx** (nouveau composant)
   - Container principal pour le contenu scrollable
   - Gestion des 2 screens
   - Scroll indicators

3. **IdentityCard.jsx** (nouveau composant)
   - Section 1
   - Props: name, title, description

4. **SkillsGrid.jsx** (nouveau composant)
   - Section 2
   - Props: skills array
   - Badge components

5. **SocialLinks.jsx** (nouveau composant)
   - Section 3
   - Props: links array (GitHub, Instagram, LinkedIn)

6. **NavigationMenu.jsx** (nouveau composant)
   - Section 4
   - Props: navigation items with labels + descriptions

7. **QuickContact.jsx** (nouveau composant)
   - Section 5
   - Props: email, CTA link

8. **ScrollIndicator.jsx** (nouveau composant)
   - Réutilisable pour down/up
   - Props: direction, label

---

### CSS MODULES

Créer les fichiers suivants :
- `ContentOverlay.module.css`
- `IdentityCard.module.css`
- `SkillsGrid.module.css`
- `SocialLinks.module.css`
- `NavigationMenu.module.css`
- `QuickContact.module.css`
- `ScrollIndicator.module.css`

---

### FRAMER MOTION INTEGRATION

**Animation Variants:**

```javascript
const slideUpVariants = {
  hidden: { y: '100vh', opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};
```

---

### SCROLL DETECTION

```javascript
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## DATA STRUCTURE

### Skills Array
```javascript
const skills = [
  'React',
  'JavaScript',
  'CSS',
  'Canvas',
  'Git',
  'Figma',
  'Framer Motion',
  'Vite',
  'Node.js'
];
```

### Social Links Array
```javascript
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/hugo-kurdant',
    icon: '🐙'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/kurdant',
    icon: '📷'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hugo-kurdant',
    icon: '💼'
  }
];
```

### Navigation Items Array
```javascript
const navItems = [
  {
    label: 'About',
    description: 'En savoir plus',
    path: '/about'
  },
  {
    label: 'Projects',
    description: 'Mes réalisations',
    path: '/projects'
  },
  {
    label: 'Blog',
    description: 'Articles techniques',
    path: '/blog'
  },
  {
    label: 'Games',
    description: 'Mini-jeux arcade',
    path: '/games'
  },
  {
    label: 'Contact',
    description: 'Me contacter',
    path: '/contact'
  }
];
```

---

## VISUAL EFFECTS

### Scanlines (Global Overlay)
```css
.scanlines::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.02) 0px,
    transparent 1px,
    transparent 2px,
    rgba(255, 255, 255, 0.02) 3px
  );
  pointer-events: none;
  z-index: 9999;
}
```

### Grain/Noise (SVG Filter)
```css
.grain::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;base64,...');
  opacity: 0.03;
  pointer-events: none;
  z-index: 9998;
}
```

---

## ACCESSIBILITY

### ARIA Labels
- Ajouter `aria-label` sur tous les liens sociaux
- `role="navigation"` sur NavigationMenu
- `aria-label="Scroll to next section"` sur scroll indicators

### Keyboard Navigation
- Tous les liens et boutons accessibles au Tab
- Focus visible avec outline lavender glow

### Contrast
- Vérifier ratios de contraste (lavender sur noir = OK)
- Texte minimum 14px pour lisibilité

---

## NOTES IMPORTANTES

### Hero Section
- NE PAS MODIFIER le hero existant
- S'assurer qu'il reste en position: fixed
- Z-index: 1 (en dessous du content overlay)

### Performance
- Lazy load des sections hors viewport
- Debounce scroll events (throttle à 16ms)
- Utiliser transform pour animations (GPU accelerated)

### Mobile First
- Développer d'abord pour mobile
- Progressive enhancement pour desktop

---

## VALIDATION CHECKLIST

- [ ] Hero reste inchangé et fixe
- [ ] Slide-up animation fluide au scroll
- [ ] Content page recouvre complètement le hero
- [ ] 2 screens de scroll exactement
- [ ] Scroll indicators (down + up) fonctionnels
- [ ] Cards avec bordures lavande glow
- [ ] Hover effects sur tous les éléments interactifs
- [ ] Responsive sur mobile/tablet/desktop
- [ ] Animations staggered sur sections
- [ ] Scanlines et grain appliqués
- [ ] Liens sociaux fonctionnels
- [ ] Navigation vers autres pages fonctionnelle
- [ ] Accessibilité (ARIA, keyboard)

---

## PROCHAINES ÉTAPES

1. **React Developer** implémente la structure et les composants
2. **Designer** review l'implémentation
3. Ajustements visuels si nécessaire
4. Tests responsive sur différents devices
5. Validation finale avec Hugo

---

**Document créé par:** Kurdant UX/UI Designer  
**Date:** 2026-02-12  
**Version:** 1.0  
**Status:** Ready for Implementation
