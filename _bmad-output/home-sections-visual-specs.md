# KURDANT.FR - HOME PAGE SECTIONS - VISUAL SPECS

## VISION GLOBALE

Direction Artistique : Vaporwave soft / Synthwave elegant / Retro-futuriste
Palette : Violet lavande doux (#C7A7FF, #D1C4E9, #B39DDB)
Overlays : HYPER RICHES - densite egale ou superieure au Hero
Effets scroll : Fade-in + Glitch + Slide-in avec glow

---

## SECTION 1 : IDENTITY CARD
**Concept** : Fiche d'identite cyberpunk style "SUBJECT A-XX"

### Structure Visuelle

```
┌─────────────────────────────────────────────────────────────┐
│  [DATA CARD]         IDENTITY FILE : KURDANT          [BARCODE] │
│                                                               │
│    ┌──────────┐    ╔════════════════════════════════╗       │
│    │          │    ║  HUGO KURDANT                  ║       │
│    │  PHOTO   │    ║  Developer Junior              ║       │
│    │  [Glow]  │    ║  React Specialist              ║       │
│    │          │    ║                                ║       │
│    └──────────┘    ║  Location: France              ║       │
│                    ║  Status: [ACTIVE]              ║       │
│  [WIREFRAME]      ║  Experience: 2+ ans            ║       │
│   GRID            ║                                ║       │
│                    ╚════════════════════════════════╝       │
│                                                               │
│    Bio courte avec effet typing progressif au scroll         │
│    "Developeur passionne par les interfaces immersives..."   │
│                                                               │
│  [SHARD] [STAR] [DATA CARD: WORLD WIDE]  [HEXAGONE]         │
└─────────────────────────────────────────────────────────────┘
```

### Elements Decoratifs

**Overlays (15+ elements) :**
- 2 Data cards flottantes (coins superieur gauche + inferieur droit)
  - "IDENTITY FILE" avec timestamp
  - "WORLD WIDE" avec coordonnees GPS fictives
- 1 Barcode vertical (coin superieur droit)
- 3 Wireframe grids (background subtil)
- 4 Shards triangulaires (dispersion asymetrique)
- 5 Stars avec twinkle animation
- 2 Hexagones outline animés
- 3 Lignes de connexion (reliant photo et data card)
- 1 Grid overlay (50px)

**Photo :**
- Border: 2px solid lavender
- Glow: Multi-layer box-shadow lavande
- Position: Gauche ou centre-gauche
- Size: 250px x 250px desktop, 180px mobile
- Effect: Subtle scanlines overlay

**Main Card (Fiche principale) :**
- Background: rgba(17, 17, 17, 0.8)
- Border: 1px solid #B39DDB
- Glow: 0 0 20px rgba(179, 157, 219, 0.3)
- Padding: 32px
- Backdrop-filter: blur(10px)
- Corner accents: Small triangles lavender

**Bio Text :**
- Font: Inter, 16px, line-height 1.8
- Color: #D1C4E9
- Effect au scroll: Typing progressif (lettre par lettre rapide)
- Max-width: 600px

### Animation Scroll

**Trigger** : Element entre dans viewport (intersection observer)

**Sequence** :
1. Fade-in (opacity 0 -> 1, 600ms ease-out)
2. Glitch rapide (50ms, chromatic aberration cyan/pink)
3. Slide-in vertical (translateY(30px) -> 0, 600ms)
4. Glow intensify sur border (300ms delay)

**Overlays** : Apparition échelonnée (stagger 80ms entre chaque)

---

## SECTION 2 : SKILLS MATRIX
**Concept** : Grille de competences style terminal/database

### Structure Visuelle

```
┌─────────────────────────────────────────────────────────────┐
│                     SKILLS DATABASE                          │
│  [WIREFRAME]                                     [DATA CARD] │
│                                                               │
│  ┌──────────────────┐  ┌──────────────────┐  ┌─────────────┐│
│  │  FRONTEND        │  │  BACKEND         │  │  TOOLS      ││
│  │  ───────────     │  │  ───────────     │  │  ─────────  ││
│  │  • React         │  │  • Node.js       │  │  • Git      ││
│  │  • JavaScript    │  │  • Supabase      │  │  • Figma    ││
│  │  • CSS/SCSS      │  │  • REST API      │  │  • Vite     ││
│  │  • HTML5         │  │  • PostgreSQL    │  │  • VS Code  ││
│  │  • Canvas API    │  │  • Express       │  │  • Docker   ││
│  └──────────────────┘  └──────────────────┘  └─────────────┘│
│                                                               │
│  [BARCODE]  [STARS]  [HEXAGONE]  [SHARD]  [LINE CONNECTORS] │
└─────────────────────────────────────────────────────────────┘
```

### Elements Decoratifs

**Overlays (12+ elements) :**
- 1 Wireframe circle (background center)
- 2 Data cards ("SKILLS MATRIX v2.0", "LOADING COMPLETE")
- 1 Barcode horizontal (bottom)
- 3 Stars
- 2 Hexagones
- 3 Shards
- 2 Vertical bars animated
- Grid overlay global

**Skill Cards (x3) :**
- Background: rgba(10, 10, 10, 0.7)
- Border: 1px solid #9575CD
- Border-top: 3px solid #C7A7FF (accent)
- Glow: Subtle lavender
- Padding: 24px
- Hover: Border glow intensify + slight scale(1.02)

**Skill Items :**
- Font: JetBrains Mono, 14px
- Color: #E1BEE7
- Bullet: Custom lavender dot
- Spacing: 12px entre chaque
- Hover: Glitch rapide + color shift

**Title** :
- Font: Orbitron, 48px, uppercase
- Color: #C7A7FF
- Glow: Multi-layer comme Hero
- Center aligned
- Margin-bottom: 48px

### Animation Scroll

**Trigger** : Section entre viewport

**Sequence** :
1. Title: Fade-in + glitch (comme Hero)
2. Cards: Apparition stagger 150ms (gauche -> droite)
3. Skill items: Apparition progressive (stagger 50ms par item)
4. Overlays: Fade-in échelonné

**Hover Interactions** :
- Card hover: Glow intensify + transform scale(1.02)
- Skill item hover: Mini glitch + color brighten

---

## SECTION 3 : MISSION STATEMENT
**Concept** : Zone "Ce que je fais" avec wireframe technique

### Structure Visuelle

```
┌─────────────────────────────────────────────────────────────┐
│  [DATA CARD]                                      [WIREFRAME]│
│                                                               │
│              ╔═══════════════════════════════╗              │
│              ║  CE QUE JE FAIS              ║              │
│              ╚═══════════════════════════════╝              │
│                                                               │
│    Texte descriptif centré avec effet glow                  │
│    "Je crée des expériences web immersives et performantes" │
│    "Spécialisé en interfaces modernes avec React"           │
│    "Passionné par les effets visuels et l'UX innovante"     │
│                                                               │
│  [Services proposés en cards]                                │
│                                                               │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐              │
│  │ FRONTEND  │  │  DESIGN   │  │   GAMES   │              │
│  │ DEV       │  │  UX/UI    │  │  CANVAS   │              │
│  └───────────┘  └───────────┘  └───────────┘              │
│                                                               │
│  [STARS]  [BARCODE]  [HEXAGONES]  [SHARDS]  [DATA CARDS]   │
└─────────────────────────────────────────────────────────────┘
```

### Elements Decoratifs

**Overlays (18+ elements) :**
- 1 Wireframe 3D globe (background center, rotating)
- 3 Data cards techniques
- 2 Barcodes (vertical gauche + horizontal bas)
- 5 Stars
- 3 Hexagones (outline animated)
- 4 Shards
- 3 Lignes de connexion entre service cards
- Grid overlay

**Main Text Block :**
- Font: Inter, 24px, font-weight 300
- Color: #E1BEE7
- Text-align: center
- Line-height: 1.8
- Max-width: 800px, centered
- Glow subtil sur texte

**Service Cards :**
- Layout: Grid 3 colonnes
- Background: rgba(17, 17, 17, 0.6)
- Border: 1px solid #B39DDB
- Size: 200px x 200px
- Icon placeholder (emoji temporaire)
- Glow hover: Intense
- Click effect: Ripple lavender

**Title Frame :**
- Border: Double line lavender
- Corner accents: Small dots
- Padding: 16px 48px
- Background: rgba(0, 0, 0, 0.8)

### Animation Scroll

**Sequence** :
1. Title frame: Fade-in + border draw animation (500ms)
2. Text block: Typing effect progressif
3. Wireframe globe: Fade-in + start rotation
4. Service cards: Stagger appearance 120ms
5. Overlays: Échelonné

---

## SECTION 4 : CONTACT TERMINAL
**Concept** : Interface contact style système embarqué

### Structure Visuelle

```
┌─────────────────────────────────────────────────────────────┐
│  [DATA CARD: COMMUNICATION INTERFACE]         [BARCODE]      │
│                                                               │
│         ┌─────────────────────────────────────┐             │
│         │  > CONTACT_TERMINAL                  │             │
│         │  > STATUS: [READY]                   │             │
│         │  > AWAITING_INPUT...                 │             │
│         │                                      │             │
│         │  ┌─────────────────────────────┐    │             │
│         │  │ GitHub: @hugo-kurdant       │    │             │
│         │  │ Email: contact@kurdant.fr   │    │             │
│         │  │ LinkedIn: hugo-kurdant      │    │             │
│         │  │ Twitter: @HugoKurdant       │    │             │
│         │  └─────────────────────────────┘    │             │
│         │                                      │             │
│         │  [BUTTON: SEND MESSAGE >]           │             │
│         └─────────────────────────────────────┘             │
│                                                               │
│  [WIREFRAME]  [STARS]  [HEXAGONES]  [SHARDS]  [DATA CARDS] │
└─────────────────────────────────────────────────────────────┘
```

### Elements Decoratifs

**Overlays (14+ elements) :**
- 2 Data cards techniques
- 1 Barcode vertical
- 1 Wireframe grid animé
- 4 Stars
- 2 Hexagones
- 4 Shards
- 2 Vertical bars
- Grid overlay

**Terminal Window :**
- Background: rgba(0, 0, 0, 0.9)
- Border: 2px solid #C7A7FF
- Glow: 0 0 30px rgba(199, 167, 255, 0.4)
- Padding: 32px
- Font: JetBrains Mono
- Max-width: 600px, centered

**Terminal Header :**
- Text: Orbitron, 18px
- Color: #C7A7FF
- Prefix: "> " (typing cursor effect)
- Animation: Blink cursor

**Contact Links :**
- Background: rgba(17, 17, 17, 0.6)
- Border: 1px solid #9575CD
- Padding: 16px
- Hover: Glow + glitch micro
- Layout: Vertical list, gap 12px

**Button CTA :**
- Background: transparent
- Border: 2px solid #C7A7FF
- Color: #C7A7FF
- Padding: 12px 32px
- Font: Orbitron, 14px, uppercase
- Hover: Background fill rgba(199, 167, 255, 0.2) + glow intense
- Click: Glitch effect

### Animation Scroll

**Sequence** :
1. Terminal window: Slide-in from bottom + fade-in
2. Header text: Typing effect
3. Contact links: Apparition progressive (stagger 80ms)
4. Button: Fade-in + pulse glow
5. Overlays: Échelonné

---

## SPECIFICATIONS TECHNIQUES GLOBALES

### Scroll Animations (via Framer Motion)

```jsx
// Variants pour fade-in + glitch
const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  glitch: {
    x: [-2, 2, -2, 0],
    filter: [
      "hue-rotate(0deg)",
      "hue-rotate(90deg)",
      "hue-rotate(-90deg)",
      "hue-rotate(0deg)"
    ],
    transition: {
      duration: 0.05,
      repeat: 1
    }
  }
}

// Trigger
viewport={{ once: true, amount: 0.3 }}
```

### Overlays Communs (Toutes Sections)

**Data Cards Style :**
- Background: rgba(17, 17, 17, 0.8)
- Border: 1px solid #9575CD
- Padding: 16px
- Font: JetBrains Mono, 11px
- Color: #D1C4E9
- Position: Absolute, coins strategiques
- Backdrop-filter: blur(8px)
- Glow: 0 0 15px rgba(149, 117, 205, 0.3)

**Barcodes :**
- Lines: 1-3px width, alternating
- Color: #B39DDB
- Opacity: 0.4
- Height: Variable (80-150px)
- Animation: Subtle pulse

**Stars :**
- Size: 2px x 2px
- Color: #E1BEE7
- Glow: 0 0 4px rgba(225, 190, 231, 0.8)
- Animation: Twinkle 2s infinite

**Shards (Triangulaires) :**
- Clip-path: polygon(50% 0%, 100% 100%, 0% 100%)
- Background: rgba(199, 167, 255, 0.15)
- Sizes: 60-120px
- Animation: Float + rotate

**Hexagones :**
- Outline only (border 1px)
- Color: #9575CD
- Size: 40-80px
- Animation: Rotate + opacity pulse

**Wireframe Grids :**
- Line color: rgba(179, 157, 219, 0.1)
- Size: 50px cells
- Position: Background layer
- Animation: Slow drift

**Vertical Bars :**
- Width: 2-4px
- Height: 40-80px
- Color: #C7A7FF
- Opacity: 0.3
- Animation: Height pulse

### Responsive Behavior

**Desktop (>1024px) :**
- Overlays: Full density
- Animations: Complete
- Grid: 3 colonnes pour skills

**Tablet (768-1024px) :**
- Overlays: 70% density
- Grid: 2 colonnes skills
- Spacing reduit

**Mobile (<768px) :**
- Overlays: 40% density (garder impact)
- Grid: 1 colonne
- Font-sizes: Scaled down
- Padding: Reduced
- Some data cards hidden

### Color Palette Reference

```css
--lavender-ultra: #C7A7FF (title glow intense)
--lavender-soft: #D1C4E9 (principal)
--lavender-medium: #B39DDB (accents)
--lavender-light: #E1BEE7 (highlights)
--lavender-dark: #9575CD (borders)
--cyan-soft: #80DEEA (tech accents)
--pink-soft: #F48FB1 (secondary)
```

### Typography Scale

```css
--font-title-xl: clamp(48px, 6vw, 72px) (Section titles)
--font-title-lg: clamp(32px, 4vw, 48px) (Sub-titles)
--font-body-lg: clamp(18px, 2vw, 24px) (Main text)
--font-body-md: clamp(14px, 1.5vw, 16px) (Body)
--font-body-sm: clamp(11px, 1vw, 13px) (Data cards)
```

### Spacing System

```css
--spacing-section: clamp(80px, 10vw, 120px) (Between sections)
--spacing-content: clamp(32px, 5vw, 64px) (Content spacing)
--spacing-element: clamp(16px, 2vw, 32px) (Element gaps)
```

---

## ASSETS REQUIS (À FOURNIR PAR HUGO)

1. Photo profile (250x250px minimum, format PNG/JPG)
2. Images decoratives pour overlays (optionnel)
3. Icons pour service cards (optionnel, peuvent etre emojis temporaire)
4. Logo/Favicon (si existe)

---

## ENRICHISSEMENTS VISUELS MAXIMUM - OVERLAY SATURATION

### ELEMENTS FLOTTANTS PERMANENTS (Position Fixed)

Elements qui restent visibles pendant tout le scroll, en arriere-plan :

**Coin Superieur Gauche :**
- 1 Data card timestamp (UPDATE: [TIME])
- 1 Barcode vertical anime
- 2 Stars twinkle
- 1 Hexagone rotate

**Coin Superieur Droit :**
- 1 Data card "SYSTEM STATUS: ONLINE"
- 1 Vertical bar pulse
- 2 Shards float
- 1 Ligne connexion diagonale

**Coin Inferieur Gauche :**
- 1 Data card "COORDINATES: [LAT/LONG]"
- 1 Wireframe grid anime
- 2 Stars
- 1 Hexagone outline

**Coin Inferieur Droit :**
- 1 Data card "VERSION 1.0.0"
- 1 Barcode horizontal
- 2 Shards
- 1 Vertical bar

**Centres (Milieu Gauche/Droite) :**
- 2 Vertical bars animated (un de chaque cote)
- 4 Stars disperses
- 2 Lignes connexion verticales

**Total Permanent : 30+ elements fixes**

Z-index: 5 (au-dessus du contenu mais sous navbar)
Opacity: 0.15-0.4 (ne pas gener lecture)
Animations: Toutes subtiles et lentes

---

### DIVIDERS ENTRE SECTIONS (Section Separators)

Entre chaque section principale, ajouter un divider anime riche :

**DIVIDER TYPE 1 : Wireframe Wave**

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  [STAR] ───────── [HEXAGONE] ───────── [STAR]              │
│          ╱╲      ╱╲      ╱╲      ╱╲                         │
│         ╱  ╲    ╱  ╲    ╱  ╲    ╱  ╲                        │
│        ╱    ╲  ╱    ╲  ╱    ╲  ╱    ╲                       │
│                                                               │
│  [DATA CARD]              [BARCODE]        [DATA CARD]       │
└─────────────────────────────────────────────────────────────┘
```

Elements :
- Wave wireframe anime (SVG path animee)
- 2 Stars twinkle aux extremites
- 1 Hexagone central rotate
- 2 Data cards (timestamps/stats)
- 1 Barcode central
- 4 Shards disperses
- Lignes connexion horizontales

**DIVIDER TYPE 2 : Data Stream**

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  ▮▮▮▯▯▯  LOADING DATA...  ▮▮▮▮▮▯▯  47% COMPLETE           │
│                                                               │
│  [BAR] [HEXAGONE] [STAR] ════════════ [STAR] [SHARD] [BAR] │
│                                                               │
│         [WIREFRAME GRID ANIMATED]                            │
└─────────────────────────────────────────────────────────────┘
```

Elements :
- Progress bar anime (0-100% loop)
- Text typing "LOADING DATA..."
- Wireframe grid fade in/out
- 6 Elements geometriques disperses
- 2 Vertical bars pulse

**DIVIDER TYPE 3 : Glitch Line**

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  ▓▓▓▓░░░░▓▓▓░░░░▓▓▓░░░░▓▓▓░░░░▓▓▓░░░░▓▓▓░░░░▓▓▓          │
│                                                               │
│  [DATA] [STAR] ═══════════════════════ [STAR] [DATA]       │
└─────────────────────────────────────────────────────────────┘
```

Elements :
- Ligne glitchee animee (intermittence)
- 4 Stars twinkle
- 2 Data cards techniques
- 4 Shards float
- Scan line horizontal

**Placement Dividers :**
- Entre Hero et Identity Card : TYPE 1
- Entre Identity et Skills : TYPE 2
- Entre Skills et Mission : TYPE 3
- Entre Mission et Contact : TYPE 1

**Total : 60+ elements dans dividers**

---

### OVERLAYS ADDITIONNELS PAR SECTION (En plus des existants)

**IDENTITY CARD - Enrichissement :**
- +3 Data cards supplementaires aux coins
- +5 Lignes connexion entre elements (animated dash)
- +6 Stars supplementaires dispersees
- +4 Shards additionnels
- +2 Barcodes (un vertical, un horizontal)
- +3 Vertical bars animated
- +2 Hexagones outline rotate
- +1 Wireframe circle background (extra layer)
- +8 Particules flottantes (tiny dots animated)

**Total Identity : 45+ elements**

**SKILLS MATRIX - Enrichissement :**
- +2 Data cards "SKILL DATABASE v2.0" et "LOADING COMPLETE"
- +4 Lignes connexion entre skill cards
- +8 Stars
- +6 Shards
- +3 Barcodes
- +4 Vertical bars
- +3 Hexagones
- +1 Wireframe globe rotating (background)
- +6 Particules

**Total Skills : 50+ elements**

**MISSION STATEMENT - Enrichissement :**
- +3 Data cards techniques
- +6 Lignes connexion depuis wireframe vers service cards
- +10 Stars
- +8 Shards
- +2 Barcodes
- +5 Vertical bars
- +4 Hexagones
- +2 Wireframe grids overlays
- +10 Particules

**Total Mission : 65+ elements**

**CONTACT TERMINAL - Enrichissement :**
- +2 Data cards "COMMUNICATION ACTIVE" et "AWAITING INPUT"
- +4 Lignes connexion
- +6 Stars
- +6 Shards
- +2 Barcodes
- +4 Vertical bars
- +3 Hexagones
- +1 Wireframe grid animated
- +6 Particules
- +3 Scan lines horizontales (animated)

**Total Contact : 50+ elements**

---

### PARTICULES FLOTTANTES GLOBALES

Systeme de particules en arriere-plan permanent (position fixed) :

**Type 1 : Micro Stars (50 particules)**
- Size : 1px x 1px
- Color : #E1BEE7
- Opacity : 0.3-0.6 (random)
- Animation : Float lent vertical (20-40s duration)
- Distribution : Random sur toute la page

**Type 2 : Data Bits (30 particules)**
- Content : "0", "1", "█", "▓"
- Font : JetBrains Mono, 8px
- Color : #B39DDB
- Opacity : 0.2-0.4
- Animation : Drift horizontal + vertical (30-50s)
- Distribution : Random

**Type 3 : Geometric Dots (40 particules)**
- Shape : Circle, 2-4px
- Color : #C7A7FF
- Opacity : 0.2-0.5
- Glow : Subtle
- Animation : Random float (25-45s)

**Total Particules : 120 elements**

Implementation : Canvas API ou CSS (absolute positioning)

---

### LIGNES DE CONNEXION ANIMEES

Lignes qui connectent visuellement les elements entre eux :

**Dans chaque section :**
- 8-12 lignes SVG path animees
- Style : Dashed lavender (#B39DDB)
- Opacity : 0.3
- Animation : Dash offset (flowing effect)
- Connect : Data cards entre eux, elements geometriques, vers contenu principal

**Pattern :**
```
  [DATA CARD] ─ ─ ─ ─ ─ ▶ [HEXAGONE]
       │                      │
       │                      │
       ▼                      ▼
  [CONTENT]            [STAR]
```

**Total Lignes : 50+ connections**

---

### TIMESTAMPS & DATA TECHNIQUES PARTOUT

Ajouter timestamps et donnees techniques dans data cards :

**Formats :**
- "UPDATE: 2026.02.11 - 15:30:42"
- "LAT: 48.8566° N / LONG: 2.3522° E"
- "PING: 12ms / UPTIME: 99.9%"
- "VERSION: 1.0.0 / BUILD: 2026.02"
- "STATUS: [ONLINE] / CONNECTIONS: 247"
- "MEMORY: 47% / CPU: 23%"
- "LOADING... ▮▮▮▮▮▯▯▯ 67%"
- "PROCESSING DATA..."
- "SYSTEM OK / ALL CLEAR"

Ces textes apparaissent dans les data cards et se mettent a jour periodiquement (fake animation)

---

### SCAN LINES SUPPLEMENTAIRES

En plus des scanlines CRT globales du body :

**Scan Lines Verticales :**
- 3 lignes verticales animees qui traversent l'ecran de gauche a droite
- Width : 2px
- Color : rgba(199, 167, 255, 0.3)
- Animation : Translate X (15s loop)
- Z-index : 998

**Scan Lines Horizontales Locales :**
- Dans chaque section, 2 lignes qui traversent de haut en bas
- Animation : Translate Y (12s loop)

---

### GRILLES WIREFRAME MULTIPLES

Au lieu d'une seule grid overlay :

**Layer 1 : Grid 50px (existante)**
**Layer 2 : Grid 100px diagonal**
- Rotation : 45deg
- Opacity : 0.03

**Layer 3 : Grid 25px perspective**
- Transform : perspective(1000px) rotateX(60deg)
- Opacity : 0.05
- Animation : Slow pan

**Layer 4 : Radial grid**
- Circles concentriques depuis centre
- Opacity : 0.04

---

### GLOW HALOS BACKGROUND

Elements glow en arriere-plan qui creent ambiance :

**4 Glow Halos :**
- Position : Corners + center
- Size : 400-800px
- Color : Radial gradient lavender
- Opacity : 0.05-0.15
- Animation : Pulse + slight movement
- Blur : 100px

---

### RESPONSIVE OVERLAY DENSITY

**Desktop (>1024px) :**
- 100% des overlays actifs
- Toutes animations
- Tous les dividers

**Tablet (768-1024px) :**
- 60% des overlays (garder les principaux)
- Animations simplifiees
- Dividers alleges

**Mobile (<768px) :**
- 30% des overlays (impact visuel maintenu)
- Particules reduites (30 au lieu de 120)
- Dividers minimalistes
- Elements permanents : seulement aux coins

---

### COMPTE FINAL D'ELEMENTS

**Par section (moyenne) :** 50 elements
**Dividers (4 total) :** 60 elements
**Elements permanents :** 30 elements
**Particules globales :** 120 elements
**Lignes connexion :** 50 elements

**TOTAL GENERAL : 400+ ELEMENTS VISUELS SUR LA PAGE**

---

## SPECIFICATIONS TECHNIQUES IMPLEMENTATION

**Performance Considerations :**

1. **Lazy Loading Overlays :**
   - Overlays apparaissent progressivement au scroll
   - Utiliser Intersection Observer
   - Unload elements hors viewport si besoin

2. **GPU Acceleration :**
   - Toutes animations via transform + opacity
   - will-change: transform sur elements animes
   - translate3d pour force GPU

3. **Canvas vs CSS :**
   - Particules : Canvas API (meilleure perfs pour 120+)
   - Overlays statiques : CSS
   - Lignes connexion : SVG

4. **Z-Index Layers :**
```
1000 : Navbar
999  : Scanlines body
998  : Scan lines supplementaires
900  : Modal/Overlay UI
50   : Dividers
10   : Section content
5    : Elements permanents fixes
3    : Section overlays
2    : Wireframe backgrounds
1    : Background images
0    : Base background
```

5. **Animation Performance :**
   - Utiliser requestAnimationFrame pour particules
   - CSS animations pour overlays simples
   - Framer Motion pour scroll-triggered
   - Throttle scroll listeners

6. **Mobile Optimization :**
   - Detect mobile : window.innerWidth
   - Reduce overlay count dynamically
   - Disable heavy animations on low-end devices
   - Use media queries pour density

---

## NEXT STEPS

1. **VALIDATION** : Hugo valide cette DA enrichie
2. **TRANSMISSION** : Specs au React Developer
3. **IMPLEMENTATION PROGRESSIVE** :
   - Phase 1 : Sections base + overlays principaux
   - Phase 2 : Dividers animes
   - Phase 3 : Elements permanents
   - Phase 4 : Particules systeme
   - Phase 5 : Lignes connexion
   - Phase 6 : Polish + optimisation
4. **REVIEW & ITERATE**
5. **INTEGRATION IMAGES** fournies par Hugo

---

**Document cree le** : 2026-02-11
**Version** : 2.0 - MAXIMUM OVERLAY SATURATION
**Designer** : Kurdant UX/UI Designer
**Pour** : Hugo (Kurdant)

**NOTE IMPORTANTE :**
Cette DA vise le MAXIMUM d'elements visuels pour un impact WOW extreme.
Si performance devient problematique, on peut toujours reduire progressivement.
BEAUTY FIRST - on optimise apres validation visuelle.
