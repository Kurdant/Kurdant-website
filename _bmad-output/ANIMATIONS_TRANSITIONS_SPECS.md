# ANIMATIONS & TRANSITIONS SPECS
## KURDANT.FR - SYSTÈME MULTI-COLOR

---

## 1. TRANSITION INTER-PAGES (COLOR MORPHING)

### CONCEPT

Écran overlay qui apparaît avec glitch et morphing de couleur lors du changement de page

### DÉCLENCHEUR

Click sur navigation (orbe navbar ou lien quelconque)

### SÉQUENCE ANIMATION

```
PHASE 1: TRIGGER (0ms - 100ms)
→ Click détecté
→ Cursor effect (ripple glitch)
→ Sound effect (optionnel)

PHASE 2: OVERLAY ENTRY (100ms - 600ms)
→ Écran overlay noir apparaît depuis un bord
→ Direction: Random ou depuis position click
→ Easing: cubic-bezier(0.76, 0, 0.24, 1)
→ Effet: Wipe + glitch edges

PHASE 3: COLOR GLITCH (600ms - 1200ms)
→ Overlay commence color transition
→ Couleur actuelle → Couleur target
→ Glitch chromatic aberration pendant transition
→ Scanlines intensifiées
→ Barre de chargement stylée apparaît

PHASE 4: LOADING BAR (700ms - 1400ms)
→ Barre horizontale au centre
→ Background: Noir
→ Fill: Gradient couleur actuelle → couleur target
→ Progression: 0% → 100%
→ Glow: Intensifie en progressant
→ Labels: "LOADING..." + pourcentage

PHASE 5: PAGE SWAP (1400ms)
→ Contenu page change (React Router navigation)
→ Overlay reste visible

PHASE 6: OVERLAY EXIT (1400ms - 2000ms)
→ Overlay disparaît (wipe inverse)
→ Nouvelle page révélée progressivement
→ Couleur finale établie
→ Éléments page fade in staggered

DURÉE TOTALE: ~2 secondes
```

### SPECS TECHNIQUES

OVERLAY ELEMENT:
```html
<div class="page-transition-overlay" data-from="home" data-to="about">
  <div class="transition-bg"></div>
  <div class="glitch-layer"></div>
  <div class="loading-bar-container">
    <div class="loading-bar">
      <div class="loading-fill"></div>
      <div class="loading-glow"></div>
    </div>
    <div class="loading-text">
      <span class="loading-label">LOADING</span>
      <span class="loading-percent">0%</span>
    </div>
  </div>
  <div class="scanlines-intense"></div>
</div>
```

TRANSITION BG:
- Position: Fixed fullscreen
- Background: #000000
- Z-index: 9999
- Transform-origin: Variable selon direction

ANIMATION WIPE IN:
```css
@keyframes wipeIn {
  0% {
    clip-path: inset(0 100% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}
```

GLITCH LAYER:
- Position: Absolute fullscreen
- Mix-blend-mode: screen
- Animation: Random horizontal offsets
- Chromatic aberration (RGB split)

COLOR MORPH:
```css
@keyframes colorMorph {
  0% {
    background-color: var(--color-from);
  }
  100% {
    background-color: var(--color-to);
  }
}
```

LOADING BAR:
- Width: 400px (desktop), 80% (mobile)
- Height: 4px
- Position: Center screen
- Background: rgba(255, 255, 255, 0.1)
- Border-radius: 2px

LOADING FILL:
- Height: 100%
- Background: Linear gradient from-color → to-color
- Animation: Width 0% → 100% (700ms)
- Easing: cubic-bezier(0.65, 0, 0.35, 1)

LOADING GLOW:
- Box-shadow: Multi-layer avec couleurs transition
- Animation: Intensify (opacity 0.3 → 1)

LOADING TEXT:
- Font: Orbitron Medium 14px
- Color: #FFFFFF
- Position: Above bar (16px margin)
- Letter-spacing: 0.2em

PERCENT COUNTER:
- Animation: Count up 0 → 100
- Duration: 700ms
- JavaScript AnimationFrame

---

## 2. HERO SECTION ANIMATIONS

### ON PAGE LOAD

SÉQUENCE:
```
0ms: Page loaded, hero hidden
100ms: Background wireframe fade in
300ms: Titre "ABOUT" glitch entry
600ms: Subtitle fade in
900ms: Data cards slide in from corners
1200ms: Organic elements (méduses) float in
1500ms: Particles spawn
1800ms: All animations complete, idle state
```

TITRE GLITCH ENTRY:
```css
@keyframes glitchEntry {
  0% {
    opacity: 0;
    transform: translateX(-100px);
    filter: blur(10px);
  }
  20% {
    opacity: 0.5;
    transform: translateX(20px);
  }
  40% {
    opacity: 1;
    transform: translateX(-10px);
    filter: blur(0px);
  }
  60% {
    transform: translateX(5px);
  }
  80% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(0);
  }
}
```

Duration: 0.8s
Easing: cubic-bezier(0.68, -0.55, 0.265, 1.55)

### HOVER INTERACTIONS

TITRE HOVER:
- Glitch flicker (0.1s)
- Text-shadow intensify
- Slight scale (1.02)
- Chromatic aberration effect

DATA CARDS HOVER:
- Border glow intensify
- Background opacity increase
- Slight translate up (-4px)
- Shadow boost

---

## 3. ORGANIC ELEMENTS ANIMATIONS

### MÉDUSES / TENTACULES

FLOAT ANIMATION:
```css
@keyframes organicFloat {
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) translateX(10px) rotate(2deg);
  }
  50% {
    transform: translateY(-10px) translateX(-5px) rotate(-1deg);
  }
  75% {
    transform: translateY(-25px) translateX(5px) rotate(1deg);
  }
}
```

Duration: 8s - 12s (variable par élément)
Easing: ease-in-out
Infinite loop
Delay: Staggered (0s, 2s, 4s, 6s)

PULSE GLOW:
```css
@keyframes pulseGlow {
  0%, 100% {
    filter: drop-shadow(0 0 10px rgba(255, 0, 165, 0.4));
  }
  50% {
    filter: drop-shadow(0 0 30px rgba(255, 0, 165, 0.8));
  }
}
```

Duration: 4s
Infinite loop

TENTACLE SWAY (SVG Path):
- Utiliser SVG morphing ou Canvas
- Déformation subtile des courbes bezier
- Duration: 6s
- Loop

### PARTICLES ROSES

SPAWN:
- Random positions
- Lifespan: 5s - 8s
- Size: 2px - 6px

MOVEMENT:
```css
@keyframes particleRise {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-200px) translateX(var(--drift));
    opacity: 0;
  }
}
```

Duration: 6s
Easing: linear
--drift: Random -20px to 20px

GLOW:
- Box-shadow: 0 0 8px rgba(255, 0, 165, 0.8)

---

## 4. SKILLS SECTION ANIMATIONS

### SCROLL TRIGGER

Déclenchement: Quand section entre dans viewport (threshold 0.3)

BARS FILL:
```css
@keyframes skillBarFill {
  0% {
    width: 0%;
  }
  100% {
    width: var(--skill-width);
  }
}
```

Duration: 1s
Easing: cubic-bezier(0.65, 0, 0.35, 1)
Delay: Staggered 0.1s entre chaque barre

GLOW SLIDE:
```css
@keyframes glowSlide {
  0% {
    left: 0%;
  }
  100% {
    left: 100%;
  }
}
```

Duration: 2s
Easing: ease-in-out
Infinite loop
Runs on filled portion only

CATEGORY CARDS:
- Fade in + translateY(20px → 0)
- Duration: 0.6s
- Stagger: 0.15s entre cards

---

## 5. TIMELINE ANIMATIONS

### SCROLL REVEAL

TIMELINE LINE:
```css
@keyframes lineGrow {
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
}
```

Duration: 1.5s
Easing: ease-out
Trigger: Section in view

TIMELINE ITEMS:
- Alternate from left/right
- Fade in + translateX
- Duration: 0.6s
- Stagger: 0.2s

```css
/* Left item */
@keyframes itemFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Right item */
@keyframes itemFromRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
```

MARKERS:
- Scale up from 0
- Duration: 0.4s
- Easing: cubic-bezier(0.68, -0.55, 0.265, 1.55)
- Then: Pulse infinite

---

## 6. PASSIONS CARDS ANIMATIONS

### HOVER

CARD LIFT:
```css
transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

/* Hover state */
transform: translateY(-12px);
box-shadow: 0 16px 60px rgba(255, 0, 165, 0.4);
```

ICON ANIMATION:
```css
@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
```

Duration: 0.6s
Trigger: Card hover

BORDER GLOW:
```css
@keyframes borderGlow {
  0% {
    border-color: rgba(255, 0, 165, 0.3);
  }
  100% {
    border-color: rgba(255, 0, 165, 1);
  }
}
```

Duration: 0.3s
Forward fill

---

## 7. CTA SECTION ANIMATIONS

### BUTTON

IDLE STATE:
- Subtle pulse glow
- Duration: 2s infinite

```css
@keyframes buttonPulse {
  0%, 100% {
    box-shadow: 0 0 30px rgba(255, 0, 165, 0.5);
  }
  50% {
    box-shadow: 0 0 50px rgba(255, 0, 165, 0.8);
  }
}
```

HOVER:
```css
transition: all 0.3s ease;

/* Hover state */
transform: scale(1.05);
box-shadow: 0 0 60px rgba(255, 0, 165, 1);
```

CLICK:
- Scale down (0.95) momentané
- Ripple effect radial
- Duration: 0.1s

ARROW:
```css
@keyframes arrowSlide {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
}
```

Duration: 1s infinite
Trigger: Button hover

### FRAME CORNERS

DRAW ANIMATION:
```css
@keyframes drawCorner {
  0% {
    width: 0;
    height: 0;
  }
  50% {
    width: 40px;
    height: 0;
  }
  100% {
    width: 40px;
    height: 40px;
  }
}
```

Duration: 0.6s
Delay: Staggered per corner
Trigger: Section scroll reveal

---

## 8. SCROLL ANIMATIONS GLOBALES

### PARALLAX

BACKGROUND ELEMENTS:
- Wireframes, organic shapes
- translateY with scroll
- Speed: 0.3x - 0.5x scroll speed
- Smooth easing

### FADE IN ON SCROLL

Threshold: 0.2 (20% of element visible)
```css
@keyframes fadeInUp {
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

Duration: 0.8s
Easing: ease-out

---

## 9. MICRO-INTERACTIONS

### LINKS HOVER

```css
transition: all 0.2s ease;

/* Hover */
color: var(--color-hover);
text-shadow: 0 0 10px currentColor;
transform: translateX(2px);
```

### CURSOR EFFECTS

CURSOR TRAIL:
- Small particles following cursor
- Color: Page color (#FF00A5 for About)
- Fade out after 0.5s
- Size: 4px

HOVER INTERACTIVE ELEMENTS:
- Cursor scale up (1.5x)
- Cursor color change to page color
- Blend mode: difference (optionnel)

---

## 10. PERFORMANCE OPTIMIZATIONS

### WILL-CHANGE

Éléments animés:
```css
.animated-element {
  will-change: transform, opacity;
}
```

Retirer après animation complète

### GPU ACCELERATION

Forcer:
```css
transform: translateZ(0);
backface-visibility: hidden;
```

### REDUCE MOTION

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### LAZY ANIMATIONS

Démarrer uniquement si élément visible (Intersection Observer)

---

## 11. TIMING REFERENCE

TIMING SCALE:
- Micro (hover, click): 0.1s - 0.3s
- Standard (transitions): 0.3s - 0.6s
- Emphasis (page load, scroll): 0.6s - 1.2s
- Ambient (float, pulse): 2s - 10s

EASING PRESETS:
- Snappy: cubic-bezier(0.4, 0, 0.2, 1)
- Smooth: cubic-bezier(0.4, 0, 0.6, 1)
- Bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
- Elastic: cubic-bezier(0.34, 1.56, 0.64, 1)

---

## 12. ORCHESTRATION

### PAGE LOAD SEQUENCE

```
Timeline complète About page:

0ms     → Page transition overlay exit complete
100ms   → Hero background fade in
300ms   → Hero title glitch entry
600ms   → Hero subtitle + data cards
900ms   → Organic elements float in
1200ms  → Profile section reveal (scroll/auto)
1500ms  → All idle, user can interact

Scroll triggers ensuite:
→ Skills bars fill
→ Timeline items reveal
→ Passions cards fade in
→ CTA section draw
```

### STAGGER PATTERNS

Lists (skills, timeline):
- Base delay + (index * 0.1s)

Grid (passions):
- Base delay + (row * 0.15s) + (col * 0.1s)

---

Document créé pour Animations & Transitions - Kurdant.fr
Système Multi-Color Pages - Specs complètes
