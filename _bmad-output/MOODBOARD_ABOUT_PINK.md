# MOODBOARD - PAGE ABOUT
## THEME: POLLINATION PINK / DEEP DIVE BIOLUMINESCENCE

---

## PALETTE COULEUR ROSE MAGENTA

### COULEUR PRINCIPALE
```
Pink Magenta Saturated: #FF00A5
```

### VARIATIONS ET NUANCES

TEINTES PRINCIPALES:
- Pink Deep: #CC0084 (ombres, profondeur)
- Pink Magenta: #FF00A5 (couleur principale, titres, accents forts)
- Pink Bright: #FF33B8 (highlights, glow intense)
- Pink Light: #FF66CB (glow soft, hover states)
- Pink Pale: #FF99DD (backgrounds légers, overlays subtils)

COMPLEMENTAIRES (pour contrastes):
- Cyan Tech: #00FFFF (accents tech, data cards)
- Purple Deep: #7700AA (transitions, profondeur)
- White Pure: #FFFFFF (texte principal)
- Black True: #000000 (fond)

---

## REFERENCES VISUELLES

### STYLE DEEPDIVE
Inspiré de l'image "DEEPDIVE" avec méduses bioluminescentes:
- Formes organiques flottantes
- Tentacules courbes et fluides
- Glow bioluminescent rose/magenta
- Texture semi-transparente
- Mouvements lents et hypnotiques
- Particules lumineuses dispersées

### STYLE POLLINATION
Inspiré de l'image "POLLINATION":
- Composition riche multi-panels
- Wireframes géométriques
- Barcodes verticaux
- Data cards techniques
- Typo chrome métallique
- Fleur/forme organique centrale
- Overlays multiples

### FUSION DES DEUX
Combinaison cyberpunk organique:
- Formes organiques (méduses/tentacules/fleurs) en rose magenta
- UI overlays techniques (wireframes, grilles, barcodes)
- Contraste tech/nature
- Bioluminescence cyberpunk
- Composition asymétrique riche
- Profondeur et layering

---

## TYPOGRAPHIE

### TRAITEMENT ROSE MAGENTA

H1 - HERO TITLES:
- Font: Orbitron Bold ou similaire
- Taille: 72px - 96px (desktop), 48px (mobile)
- Couleur: #FF00A5
- Effet: Text shadow multi-layer pour glow
- Chrome/Metallic treatment possible
- Glitch subtil au hover

H2 - SECTION TITLES:
- Font: Orbitron Medium
- Taille: 48px - 64px (desktop), 36px (mobile)
- Couleur: #FF33B8
- Glow: box-shadow rose

H3 - SUBSECTION:
- Font: Orbitron Regular
- Taille: 32px - 40px
- Couleur: #FF66CB

BODY TEXT:
- Font: Inter Regular
- Taille: 16px - 18px
- Couleur: #FFFFFF (principal), #CCCCCC (secondaire)
- Line-height: 1.6

ACCENT TEXT:
- Font: Press Start 2P (pixel)
- Taille: 12px - 14px
- Couleur: #FF00A5
- Usage: Labels, tags, system text

CODE/TECH:
- Font: JetBrains Mono
- Couleur: #00FFFF (cyan) pour contraste avec rose

---

## EFFETS VISUELS SPECIFIQUES

### GLOW ROSE MAGENTA

CSS Multi-layer Shadow:
```css
box-shadow: 
  0 0 10px rgba(255, 0, 165, 0.3),
  0 0 20px rgba(255, 0, 165, 0.2),
  0 0 30px rgba(255, 0, 165, 0.1),
  0 0 40px rgba(255, 0, 165, 0.05);
```

GLOW INTENSE (hover, accents forts):
```css
box-shadow: 
  0 0 15px rgba(255, 0, 165, 0.6),
  0 0 30px rgba(255, 0, 165, 0.4),
  0 0 45px rgba(255, 0, 165, 0.3),
  0 0 60px rgba(255, 0, 165, 0.2);
```

### ELEMENTS ORGANIQUES BIOLUMINESCENTS

MEDUSES / TENTACULES:
- SVG ou Canvas rendering
- Formes courbes fluides (bezier curves)
- Gradient rose: #CC0084 → #FF00A5 → #FF66CB
- Opacity: 0.3 - 0.7 selon layering
- Animation: float lent, rotation subtile, pulse glow
- Particles: petites sphères roses dispersées

COMPOSITION:
- 3-5 éléments organiques de tailles variées
- Placement asymétrique (coin supérieur droit, milieu gauche, bas)
- Chevauchement avec UI overlays techniques
- Z-index layering pour profondeur

### WIREFRAMES ET GRILLES

Couleur: #FF00A5 avec opacity 0.1 - 0.2
Épaisseur: 1px
Styles:
- Grilles quadrillées (10px ou 20px spacing)
- Cercles concentriques
- Lignes diagonales
- Formes hexagonales
- Cadres rectangulaires

### BARCODES

Orientation: Verticale
Couleur: #FF00A5
Hauteur: 100px - 200px
Largeur barres: 2px - 8px aléatoire
Placement: Coins, marges, entre sections

### DATA CARDS

Background: rgba(255, 0, 165, 0.05)
Border: 1px solid #FF00A5
Border-radius: 4px
Padding: 16px
Content: Text cyan (#00FFFF) pour contraste
Labels: Rose (#FF66CB)

---

## TEXTURES

### SCANLINES CRT
- Lignes horizontales 1px
- Espacement: 4px
- Couleur: rgba(255, 255, 255, 0.02)
- Overlay global sur toute la page

### GRAIN/NOISE
- Texture photographique subtile
- Opacity: 0.03 - 0.05
- Blend mode: overlay
- Animation: subtle shift (optionnel)

### DITHERING
Sur images/photos:
- Style CRT vintage
- Pattern de points roses/noirs
- Effet: retro-futuriste

---

## ANIMATIONS

### ELEMENTS ORGANIQUES
Float Animation:
- Duration: 6s - 10s
- Easing: ease-in-out
- Transform: translateY(-20px) + rotate(5deg)
- Infinite loop

Pulse Glow:
- Duration: 3s
- Easing: ease-in-out
- Box-shadow intensity variation
- Infinite loop

Tentacle Sway:
- Duration: 8s
- Path animation (SVG)
- Subtle curve deformation
- Infinite loop

### PARTICLES
Spawn: Random positions
Movement: Slow vertical rise (translateY)
Opacity: Fade in/out
Size: 2px - 6px
Color: #FF66CB
Lifespan: 5s - 8s

### HOVER STATES
Glow Intensify:
- Transition: 0.3s ease
- Box-shadow amplification
- Scale: 1.02 - 1.05
- Color brightening

Glitch Subtle:
- Trigger: hover ou random
- Duration: 0.1s - 0.2s
- Effect: translateX offset + chromatic aberration
- Frequency: occasional, pas constant

---

## RESPONSIVE BEHAVIOR

### DESKTOP (>1024px)
- Tous les effets actifs
- Éléments organiques multiples
- Animations fluides
- Overlays riches

### TABLET (768px - 1024px)
- Réduction nombre éléments organiques (2-3 au lieu de 5)
- Animations simplifiées
- Overlays allégés

### MOBILE (<768px)
- Éléments organiques: 1-2 maximum
- Scanlines: désactivées ou très subtiles
- Grain: désactivé
- Animations: réduites (prefers-reduced-motion)
- Glow: simplifié (moins de layers)
- Focus sur lisibilité

---

## INSPIRATION KEYWORDS

Bioluminescence
Cyberpunk Organique
Deep Sea Tech
Neon Nature
Medusa Cyber
Pink Saturation
Vaporwave Evolved
Y2K Glitch
Chrome Metallic
Tentacle UI
Data Blossom
Electric Flora

---

## MOOD / AMBIANCE

EMOTION CIBLE:
Futuriste + Vivant
Technologique + Organique
Puissant + Élégant
Énergique + Hypnotique
Professionnel + Artistique

IMPRESSION VISUELLE:
"Une créature bioluminescente des abysses qui a fusionné avec un système informatique cyberpunk"

---

Document créé pour Page About - Kurdant.fr
Système Multi-Color Pages - Variante Rose Magenta
