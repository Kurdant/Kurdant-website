# PAGE ABOUT - STRUCTURE COMPLÈTE
## KURDANT.FR - VARIANTE ROSE MAGENTA

---

## ARCHITECTURE GÉNÉRALE

### LAYOUT PRINCIPAL

```
┌───────────────────────────────────────────────────────┐
│ ORBITAL NAV (fixed top-right)                         │
├───────────────────────────────────────────────────────┤
│                                                        │
│ SECTION 1: HERO ABOUT                                 │
│ - Grand titre "ABOUT" glitch                          │
│ - Éléments organiques bioluminescents (méduses)       │
│ - Wireframe background                                │
│ - Overlays UI (barcodes, grilles, data cards)         │
│                                                        │
├───────────────────────────────────────────────────────┤
│                                                        │
│ SECTION 2: PROFILE CARD                               │
│ - Avatar/Photo (gauche)                               │
│ - Fiche identité cyberpunk (droite)                   │
│ - Bio courte                                           │
│ - Status, Location, Availability                      │
│                                                        │
├───────────────────────────────────────────────────────┤
│                                                        │
│ SECTION 3: SKILLS DISPLAY                             │
│ - Catégories skills (Frontend, Backend, Tools)        │
│ - Barres progression avec glow rose                   │
│ - Overlays wireframe autour                           │
│ - Icônes technos                                       │
│                                                        │
├───────────────────────────────────────────────────────┤
│                                                        │
│ SECTION 4: EXPERIENCE TIMELINE                        │
│ - Timeline verticale style cyberpunk                  │
│ - Projets et formations chronologiques                │
│ - Data cards pour chaque item                         │
│ - Barcodes et éléments décoratifs                     │
│                                                        │
├───────────────────────────────────────────────────────┤
│                                                        │
│ SECTION 5: PASSIONS & VALUES                          │
│ - Grid de cards                                        │
│ - Icônes + descriptions courtes                       │
│ - Hover effects                                        │
│                                                        │
├───────────────────────────────────────────────────────┤
│                                                        │
│ SECTION 6: CTA CONTACT                                │
│ - Bouton principal vers Contact                       │
│ - Liens sociaux                                        │
│ - Frame cyberpunk autour                              │
│                                                        │
├───────────────────────────────────────────────────────┤
│ FOOTER (couleur rose)                                 │
└───────────────────────────────────────────────────────┘
```

---

## SECTION 1: HERO ABOUT

### STRUCTURE

```html
<section class="about-hero">
  <!-- Background layers -->
  <div class="hero-bg">
    <canvas class="wireframe-bg"></canvas>
    <div class="organic-elements">
      <!-- SVG méduses/tentacules -->
    </div>
    <div class="scanlines"></div>
    <div class="grain"></div>
  </div>
  
  <!-- Content -->
  <div class="hero-content">
    <div class="data-card top-left">
      SUBJECT: HUGO KURDANT
      STATUS: AVAILABLE
    </div>
    
    <h1 class="hero-title glitch" data-text="ABOUT">
      ABOUT
    </h1>
    
    <p class="hero-subtitle">
      DEVELOPER / DESIGNER / CREATOR
    </p>
    
    <div class="barcode-overlay left"></div>
    <div class="barcode-overlay right"></div>
    
    <div class="wireframe-grid"></div>
  </div>
  
  <!-- Floating particles -->
  <div class="particles-container"></div>
</section>
```

### SPECS VISUELLES

HEIGHT: 
- Desktop: 100vh
- Tablet: 80vh
- Mobile: 70vh

COULEUR DOMINANTE: #FF00A5

TITRE "ABOUT":
- Font: Orbitron Black
- Size: 120px (desktop), 64px (mobile)
- Color: #FF00A5
- Text-shadow: Multi-layer glow rose
- Effect: Glitch subtil au load et hover
- Letter-spacing: 0.1em

ÉLÉMENTS ORGANIQUES:
- 3-4 méduses/tentacules SVG ou Canvas
- Positions: Asymétriques (coin sup droit, milieu gauche, bas droit)
- Couleurs: Gradient #CC0084 → #FF00A5 → #FF66CB
- Opacity: 0.4 - 0.6
- Animation: Float lent (6s-10s loop)
- Blur: 0px sur centre, 4px sur bords (depth)

WIREFRAME BACKGROUND:
- Canvas drawing
- Grille 3D perspective
- Couleur: rgba(255, 0, 165, 0.1)
- Animation: Rotation lente 0.05deg/s

DATA CARDS:
- Background: rgba(255, 0, 165, 0.05)
- Border: 1px solid #FF00A5
- Padding: 12px 16px
- Font: JetBrains Mono 12px
- Color text: #00FFFF (cyan pour contraste)
- Position: Absolute top-left et bottom-right

BARCODES:
- 2 overlays verticaux (gauche + droite)
- Height: 200px
- Barres: 2-8px width variée
- Color: #FF00A5
- Opacity: 0.3

---

## SECTION 2: PROFILE CARD

### STRUCTURE

```html
<section class="profile-section">
  <div class="container">
    <div class="profile-card">
      <!-- Avatar côté gauche -->
      <div class="profile-avatar">
        <div class="avatar-frame">
          <div class="avatar-glow"></div>
          <img src="avatar.jpg" alt="Hugo Kurdant" />
          <div class="avatar-overlay"></div>
        </div>
        <div class="avatar-status">
          <span class="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>
      </div>
      
      <!-- Info côté droit -->
      <div class="profile-info">
        <div class="info-header">
          <h2 class="name">HUGO KURDANT</h2>
          <span class="role">JUNIOR DEVELOPER</span>
        </div>
        
        <div class="info-grid">
          <div class="info-item">
            <span class="label">LOCATION</span>
            <span class="value">France</span>
          </div>
          <div class="info-item">
            <span class="label">EXPERIENCE</span>
            <span class="value">2+ Years</span>
          </div>
          <div class="info-item">
            <span class="label">SPECIALIZATION</span>
            <span class="value">React / Frontend</span>
          </div>
          <div class="info-item">
            <span class="label">STATUS</span>
            <span class="value">Open to Work</span>
          </div>
        </div>
        
        <div class="bio">
          <p>
            Développeur junior passionné par la création d'expériences web 
            uniques et immersives. Spécialisé en React et développement 
            frontend, avec un fort intérêt pour le design et les animations.
          </p>
        </div>
        
        <div class="profile-links">
          <a href="#" class="link-item">
            <span class="icon">GitHub</span>
          </a>
          <a href="#" class="link-item">
            <span class="icon">LinkedIn</span>
          </a>
          <a href="#" class="link-item">
            <span class="icon">Twitter</span>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Decorative overlays -->
    <div class="wireframe-corner top-left"></div>
    <div class="wireframe-corner bottom-right"></div>
    <div class="data-line"></div>
  </div>
</section>
```

### SPECS VISUELLES

LAYOUT:
- Desktop: Two columns (40% avatar / 60% info)
- Tablet: Two columns (45% / 55%)
- Mobile: Stacked vertical (avatar top, info bottom)

PROFILE CARD:
- Background: rgba(255, 0, 165, 0.03)
- Border: 2px solid #FF00A5
- Border-radius: 8px
- Padding: 48px (desktop), 24px (mobile)
- Box-shadow: Glow rose soft

AVATAR:
- Size: 280px x 280px (desktop), 200px (mobile)
- Border-radius: 50%
- Border: 3px solid #FF00A5
- Glow: Multi-layer box-shadow rose
- Overlay: Scanlines subtiles sur image
- Dithering effect possible (optionnel)

STATUS DOT:
- Size: 12px
- Color: #00FF41 (vert = available)
- Animation: Pulse 2s infinite
- Box-shadow: 0 0 10px #00FF41

NAME:
- Font: Orbitron Bold
- Size: 48px (desktop), 32px (mobile)
- Color: #FF00A5
- Text-shadow: Glow rose

ROLE:
- Font: Press Start 2P
- Size: 14px
- Color: #FF66CB
- Letter-spacing: 0.2em

INFO GRID:
- Display: Grid 2x2
- Gap: 16px
- Font: JetBrains Mono
- Label: #999999 uppercase 10px
- Value: #FFFFFF 16px

BIO:
- Font: Inter Regular
- Size: 16px
- Line-height: 1.6
- Color: #CCCCCC
- Max-width: 500px

PROFILE LINKS:
- Display: Flex horizontal
- Gap: 16px
- Font: Orbitron Medium 14px
- Color: #00FFFF (cyan)
- Hover: Color → #FF00A5 + glow

DECORATIVE OVERLAYS:
- Wireframe corners (L shapes) aux angles
- Data line horizontale (dashed) sous card
- Couleur: rgba(255, 0, 165, 0.2)

---

## SECTION 3: SKILLS DISPLAY

### STRUCTURE

```html
<section class="skills-section">
  <div class="container">
    <h2 class="section-title">
      <span class="title-line"></span>
      TECHNICAL SKILLS
      <span class="title-line"></span>
    </h2>
    
    <div class="skills-grid">
      <!-- Category: Frontend -->
      <div class="skill-category">
        <h3 class="category-title">
          <span class="icon">💻</span>
          FRONTEND
        </h3>
        
        <div class="skill-list">
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">React</span>
              <span class="skill-level">75%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="--width: 75%"></div>
              <div class="skill-glow"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">JavaScript</span>
              <span class="skill-level">80%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="--width: 80%"></div>
              <div class="skill-glow"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">HTML / CSS</span>
              <span class="skill-level">85%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="--width: 85%"></div>
              <div class="skill-glow"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Canvas / WebGL</span>
              <span class="skill-level">50%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="--width: 50%"></div>
              <div class="skill-glow"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Category: Backend -->
      <div class="skill-category">
        <h3 class="category-title">
          <span class="icon">⚙️</span>
          BACKEND
        </h3>
        <div class="skill-list">
          <!-- Répéter structure skill-item -->
        </div>
      </div>
      
      <!-- Category: Tools -->
      <div class="skill-category">
        <h3 class="category-title">
          <span class="icon">🛠️</span>
          TOOLS
        </h3>
        <div class="skill-list">
          <!-- Répéter structure skill-item -->
        </div>
      </div>
    </div>
    
    <!-- Decorative wireframe -->
    <div class="wireframe-overlay">
      <svg><!-- Grille géométrique --></svg>
    </div>
  </div>
</section>
```

### SPECS VISUELLES

SECTION TITLE:
- Font: Orbitron Bold
- Size: 56px (desktop), 36px (mobile)
- Color: #FF00A5
- Text-align: Center
- Lines: 2px height, 100px width, #FF00A5

SKILLS GRID:
- Desktop: 3 columns (Frontend, Backend, Tools)
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 32px

SKILL CATEGORY:
- Background: rgba(255, 0, 165, 0.03)
- Border: 1px solid rgba(255, 0, 165, 0.3)
- Border-radius: 4px
- Padding: 24px

CATEGORY TITLE:
- Font: Orbitron Medium
- Size: 24px
- Color: #FF66CB
- Icon: Remplacer emoji par icône SVG si possible

SKILL BAR:
- Height: 8px
- Background: rgba(255, 255, 255, 0.1)
- Border-radius: 4px
- Overflow: hidden

SKILL FILL:
- Background: Linear gradient #FF00A5 → #FF66CB
- Width: Variable (CSS custom property)
- Height: 100%
- Animation: Fill from 0 to target width on scroll reveal
- Duration: 1s
- Easing: ease-out

SKILL GLOW:
- Position: Absolute on fill
- Box-shadow: 0 0 20px rgba(255, 0, 165, 0.6)
- Width: 30px
- Animation: Slide along bar (2s infinite)

SKILL NAME:
- Font: Inter Medium
- Size: 16px
- Color: #FFFFFF

SKILL LEVEL:
- Font: JetBrains Mono
- Size: 14px
- Color: #FF66CB

WIREFRAME OVERLAY:
- SVG background
- Grille hexagonale ou circulaire
- Couleur: rgba(255, 0, 165, 0.05)
- Position: Absolute behind cards
- Z-index: -1

---

## SECTION 4: EXPERIENCE TIMELINE

### STRUCTURE

```html
<section class="timeline-section">
  <div class="container">
    <h2 class="section-title">
      EXPERIENCE & EDUCATION
    </h2>
    
    <div class="timeline">
      <div class="timeline-line"></div>
      
      <!-- Item 1 -->
      <div class="timeline-item" data-year="2026">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-date">2026</div>
          <h3 class="timeline-title">Kurdant.fr</h3>
          <span class="timeline-status">En cours</span>
          <p class="timeline-description">
            Portfolio personnel avec arcade de mini-jeux. 
            Technologies: React, Canvas, WISP, Supabase.
          </p>
          <div class="timeline-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Canvas</span>
            <span class="tech-tag">Supabase</span>
          </div>
          <div class="timeline-links">
            <a href="#" class="link">Demo</a>
            <a href="#" class="link">GitHub</a>
          </div>
        </div>
        
        <!-- Decorative elements -->
        <div class="barcode-mini"></div>
      </div>
      
      <!-- Item 2 -->
      <div class="timeline-item" data-year="2025">
        <!-- Structure similaire -->
      </div>
      
      <!-- Item 3 -->
      <div class="timeline-item" data-year="2024">
        <!-- Structure similaire -->
      </div>
    </div>
    
    <!-- Data cards decoratives -->
    <div class="data-card-overlay">
      TIMELINE_STATUS: ACTIVE
      ENTRIES: 3
    </div>
  </div>
</section>
```

### SPECS VISUELLES

TIMELINE LINE:
- Width: 2px
- Color: #FF00A5
- Position: Center vertical (desktop), Left (mobile)
- Height: 100% section

TIMELINE MARKER:
- Size: 20px circle
- Background: #FF00A5
- Border: 4px solid #000000
- Box-shadow: 0 0 20px rgba(255, 0, 165, 0.8)
- Position: Sur la ligne
- Animation: Pulse 3s infinite

TIMELINE ITEM:
- Layout: Alternating left/right (desktop), all right (mobile)
- Max-width: 500px per side
- Margin: 60px vertical spacing

TIMELINE CONTENT:
- Background: rgba(255, 0, 165, 0.05)
- Border: 1px solid #FF00A5
- Border-radius: 8px
- Padding: 24px
- Box-shadow: Glow rose soft

TIMELINE DATE:
- Font: Orbitron Bold
- Size: 32px
- Color: #FF00A5
- Position: Top left or badge style

TIMELINE TITLE:
- Font: Orbitron Medium
- Size: 24px
- Color: #FFFFFF

TIMELINE STATUS:
- Font: Press Start 2P
- Size: 10px
- Color: #00FF41 (en cours) / #FF00A5 (terminé)
- Background: rgba(color, 0.2)
- Padding: 4px 8px
- Border-radius: 2px

TIMELINE DESCRIPTION:
- Font: Inter Regular
- Size: 16px
- Line-height: 1.6
- Color: #CCCCCC

TECH TAGS:
- Display: Inline-flex
- Gap: 8px
- Background: rgba(255, 0, 165, 0.2)
- Border: 1px solid #FF00A5
- Padding: 4px 12px
- Border-radius: 12px
- Font: Inter Medium 12px
- Color: #FF66CB

TIMELINE LINKS:
- Color: #00FFFF
- Font: Orbitron Medium 14px
- Hover: Color → #FF00A5

BARCODE MINI:
- Width: 40px
- Height: 60px
- Position: Absolute bottom-right
- Color: rgba(255, 0, 165, 0.3)

---

## SECTION 5: PASSIONS & VALUES

### STRUCTURE

```html
<section class="passions-section">
  <div class="container">
    <h2 class="section-title">PASSIONS & VALUES</h2>
    
    <div class="passions-grid">
      <div class="passion-card">
        <div class="card-icon">
          <svg><!-- Icon Code --></svg>
        </div>
        <h3 class="card-title">Code</h3>
        <p class="card-description">
          Passion pour le développement et la création d'expériences web innovantes
        </p>
      </div>
      
      <div class="passion-card">
        <div class="card-icon">
          <svg><!-- Icon Design --></svg>
        </div>
        <h3 class="card-title">Design</h3>
        <p class="card-description">
          Sensibilité esthétique et souci du détail visuel
        </p>
      </div>
      
      <div class="passion-card">
        <div class="card-icon">
          <svg><!-- Icon Gaming --></svg>
        </div>
        <h3 class="card-title">Gaming</h3>
        <p class="card-description">
          Influence des jeux vidéo sur la créativité et l'interactivité
        </p>
      </div>
      
      <div class="passion-card">
        <div class="card-icon">
          <svg><!-- Icon Music --></svg>
        </div>
        <h3 class="card-title">Music</h3>
        <p class="card-description">
          Culture phonk et synthwave qui inspire l'univers visuel
        </p>
      </div>
    </div>
  </div>
</section>
```

### SPECS VISUELLES

PASSIONS GRID:
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 24px

PASSION CARD:
- Background: rgba(255, 0, 165, 0.03)
- Border: 1px solid rgba(255, 0, 165, 0.3)
- Border-radius: 8px
- Padding: 32px 24px
- Text-align: Center
- Transition: All 0.3s ease

CARD HOVER:
- Background: rgba(255, 0, 165, 0.08)
- Border-color: #FF00A5
- Transform: translateY(-8px)
- Box-shadow: 0 10px 40px rgba(255, 0, 165, 0.3)

CARD ICON:
- Size: 80px x 80px
- Color: #FF00A5
- Margin: 0 auto 16px
- SVG stroke animation au hover

CARD TITLE:
- Font: Orbitron Medium
- Size: 24px
- Color: #FF66CB
- Margin: 16px 0

CARD DESCRIPTION:
- Font: Inter Regular
- Size: 14px
- Line-height: 1.5
- Color: #CCCCCC

---

## SECTION 6: CTA CONTACT

### STRUCTURE

```html
<section class="cta-section">
  <div class="container">
    <div class="cta-frame">
      <h2 class="cta-title">LET'S WORK TOGETHER</h2>
      <p class="cta-text">
        Intéressé par mon profil ? Discutons de votre projet !
      </p>
      <a href="/contact" class="cta-button">
        <span class="button-text">CONTACT ME</span>
        <span class="button-arrow">→</span>
      </a>
      
      <div class="social-links">
        <a href="#" class="social-link">GitHub</a>
        <span class="separator">/</span>
        <a href="#" class="social-link">LinkedIn</a>
        <span class="separator">/</span>
        <a href="#" class="social-link">Twitter</a>
      </div>
      
      <!-- Frame decorations -->
      <div class="frame-corner tl"></div>
      <div class="frame-corner tr"></div>
      <div class="frame-corner bl"></div>
      <div class="frame-corner br"></div>
    </div>
  </div>
</section>
```

### SPECS VISUELLES

CTA FRAME:
- Border: 2px solid #FF00A5
- Padding: 80px 60px
- Text-align: Center
- Position: Relative

CTA TITLE:
- Font: Orbitron Bold
- Size: 48px
- Color: #FF00A5
- Text-shadow: Glow rose

CTA BUTTON:
- Background: Linear gradient #FF00A5 → #FF66CB
- Border: None
- Padding: 16px 48px
- Border-radius: 4px
- Font: Orbitron Medium 18px
- Color: #000000
- Transition: 0.3s ease
- Box-shadow: 0 0 30px rgba(255, 0, 165, 0.5)

CTA BUTTON HOVER:
- Transform: scale(1.05)
- Box-shadow: 0 0 50px rgba(255, 0, 165, 0.8)

FRAME CORNERS:
- Width/Height: 40px
- Border: 2px solid #FF00A5
- Position: Absolute corners
- Top-left: border-top + border-left
- (etc pour autres coins)

---

Document créé pour Page About Structure - Kurdant.fr
Système Multi-Color Pages - Variante Rose Magenta
