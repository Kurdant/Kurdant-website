# BLOG CARD - SPECIFICATIONS TECHNIQUES

## OVERVIEW

Composant card pour afficher les articles de blog dans une grid responsive. Style neutre mais cohérent avec l'univers cyberpunk soft du site. Hover interactif avec glitch et scale.

---

## STRUCTURE HTML

```html
<article class="blog-card">
  <div class="blog-card__image-wrapper">
    <img src="[article-thumbnail]" alt="[article-title]" class="blog-card__image" />
  </div>
  
  <div class="blog-card__content">
    <div class="blog-card__meta">
      <time class="blog-card__date" datetime="[ISO-date]">[formatted-date]</time>
      <div class="blog-card__tags">
        <span class="blog-card__tag">[tag1]</span>
        <span class="blog-card__tag">[tag2]</span>
      </div>
    </div>
    
    <h3 class="blog-card__title">[Article Title]</h3>
    
    <p class="blog-card__excerpt">
      [Article excerpt text...]
    </p>
  </div>
</article>
```

---

## VISUAL STYLE

### Layout & Dimensions

- Display: flex, flex-direction: column
- Border-radius: 8px
- Overflow: hidden
- Aspect ratio libre (hauteur auto selon contenu)

### Colors

**Background:**
- Default: #0A0A0A (Near Black)
- Border: 1px solid #9575CD (Lavender Dark)

**Text:**
- Title: #FFFFFF (White)
- Excerpt: #B0B0B0 (Light Gray)
- Date: #9E9E9E (Muted Gray)
- Tags: #D1C4E9 (Lavender Soft)

**Glow (Hover):**
- Box-shadow: 0 0 20px rgba(179, 157, 219, 0.4) (Lavender Medium at 40% opacity)

### Typography

**Title:**
- Font-family: 'Inter', sans-serif
- Font-size: 1.25rem (20px)
- Font-weight: 600
- Line-height: 1.3
- Color: #FFFFFF
- Margin-bottom: 12px

**Excerpt:**
- Font-family: 'Inter', sans-serif
- Font-size: 0.875rem (14px)
- Font-weight: 400
- Line-height: 1.6
- Color: #B0B0B0
- Max-lines: 3 (text-overflow: ellipsis)

**Date:**
- Font-family: 'JetBrains Mono', monospace
- Font-size: 0.75rem (12px)
- Font-weight: 400
- Color: #9E9E9E
- Text-transform: uppercase

**Tags:**
- Font-family: 'Inter', sans-serif
- Font-size: 0.75rem (12px)
- Font-weight: 500
- Color: #D1C4E9
- Background: rgba(179, 157, 219, 0.1)
- Padding: 4px 8px
- Border-radius: 4px

### Image

- Width: 100%
- Height: 200px (fixed)
- Object-fit: cover
- Object-position: center

### Spacing

**Card Padding:**
- Content area: 20px

**Internal Spacing:**
- Meta section (date + tags): margin-bottom 12px
- Title: margin-bottom 12px
- Excerpt: no bottom margin

**Meta Layout:**
- Display: flex
- Justify-content: space-between
- Align-items: center
- Gap: 12px

**Tags Layout:**
- Display: flex
- Gap: 6px
- Flex-wrap: wrap

---

## STATES & INTERACTIONS

### Default State

```css
.blog-card {
  background: #0A0A0A;
  border: 1px solid #9575CD;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Hover State

**Visual Changes:**
1. Scale up: transform: scale(1.03)
2. Glow intensify: box-shadow: 0 0 30px rgba(179, 157, 219, 0.6)
3. Glitch effect (see animation below)

**Transition:**
- Duration: 300ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

### Active/Click State

**Visual Feedback:**
- Scale down slightly: transform: scale(0.98)
- Duration: 100ms

### Focus State (Accessibility)

```css
.blog-card:focus {
  outline: 2px solid #80DEEA;
  outline-offset: 2px;
}
```

---

## ANIMATIONS

### Hover Glitch Effect

**Implementation:**
- Use CSS animation with chromatic aberration
- Trigger on hover
- Duration: 200ms
- Play once per hover

**Technique:**
- Pseudo-elements (::before, ::after) with position: absolute
- Apply color filters (red/cyan shift)
- Translate slightly on X/Y axis
- Opacity: 0.7

**CSS Example:**

```css
@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  60% {
    transform: translate(-2px, -2px);
  }
  80% {
    transform: translate(2px, 2px);
  }
  100% {
    transform: translate(0);
  }
}

.blog-card:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  mix-blend-mode: screen;
  animation: glitch 0.2s ease-in-out;
  opacity: 0.7;
  z-index: -1;
}
```

---

## RESPONSIVE BEHAVIOR

### Breakpoints

**Mobile (< 768px):**
- Grid: 1 column
- Image height: 180px
- Title font-size: 1.125rem (18px)
- Padding: 16px

**Tablet (768px - 1024px):**
- Grid: 2 columns
- Gap between cards: 24px
- Image height: 200px

**Desktop (> 1024px):**
- Grid: 3 columns
- Gap between cards: 32px
- Image height: 220px

### Grid Container CSS

```css
.blog-grid {
  display: grid;
  gap: 24px;
  
  /* Mobile first */
  grid-template-columns: 1fr;
  
  /* Tablet */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Desktop */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}
```

---

## ACCESSIBILITY

### Semantic HTML

- Use `<article>` for card wrapper
- Use `<time>` with datetime attribute for date
- Use `<h3>` for title (assuming h1/h2 already used on page)
- Proper alt text on images

### ARIA Attributes

```html
<article class="blog-card" role="article" aria-labelledby="blog-title-[id]">
  <h3 id="blog-title-[id]" class="blog-card__title">...</h3>
</article>
```

### Keyboard Navigation

- Card should be focusable (via link wrapper or button)
- Focus state visible (cyan outline)
- Enter/Space should trigger navigation

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  .blog-card {
    transition: none;
  }
  
  .blog-card:hover {
    animation: none;
  }
}
```

---

## INTEGRATION NOTES

### React Component Structure

```jsx
<Link to={`/blog/${article.slug}`} className="blog-card-link">
  <BlogCard
    image={article.thumbnail}
    title={article.title}
    excerpt={article.excerpt}
    date={article.publishedAt}
    tags={article.tags}
  />
</Link>
```

### Props Interface

```typescript
interface BlogCardProps {
  image: string;           // URL de l'image thumbnail
  title: string;           // Titre de l'article
  excerpt: string;         // Extrait (max 150 caractères)
  date: string;           // Date ISO 8601
  tags: string[];         // Array de tags (max 3 affichés)
}
```

### Data Source

- Articles récupérés via WISP CMS API
- Thumbnail par défaut si image manquante
- Excerpt tronqué à 150 caractères avec ellipsis

---

## CSS VARIABLES

Utiliser les variables CSS existantes du design system :

```css
:root {
  /* Colors */
  --color-bg-secondary: #0A0A0A;
  --color-lavender-dark: #9575CD;
  --color-lavender-soft: #D1C4E9;
  --color-lavender-medium: #B39DDB;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #B0B0B0;
  --color-text-muted: #9E9E9E;
  --color-cyan-soft: #80DEEA;
  
  /* Spacing */
  --spacing-sm: 12px;
  --spacing-md: 20px;
  --spacing-lg: 32px;
  
  /* Border radius */
  --radius-md: 8px;
  --radius-sm: 4px;
  
  /* Transitions */
  --transition-default: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## PERFORMANCE CONSIDERATIONS

### Image Optimization

- Utiliser format WebP avec fallback JPEG
- Lazy loading: `loading="lazy"`
- Responsive images: `srcset` pour différentes résolutions
- Placeholder pendant chargement (skeleton ou blur)

### Animation Performance

- Utiliser `transform` et `opacity` (GPU accelerated)
- Éviter `width`, `height`, `top`, `left` dans animations
- `will-change: transform` sur hover (avec parcimonie)

---

## VISUAL REFERENCE

Voir fichier: `BlogCard-Demo.html` pour démo interactive complète.

---

## NOTES POUR LE DÉVELOPPEUR

1. Le glitch effect au hover doit être subtil - pas trop agressif
2. Le scale au hover doit être léger (1.03 max) pour éviter layout shifts
3. S'assurer que les images ont un ratio aspect correct (16:9 recommandé)
4. Les tags sont optionnels - afficher seulement si présents
5. L'excerpt doit être tronqué proprement avec ellipsis après 3 lignes
6. Tester le comportement responsive sur tous breakpoints
7. Vérifier l'accessibilité keyboard (tab navigation)

---

Document créé le: 2026-02-15
Par: Kurdant UX/UI Designer
Pour: Kurdant React Developer
Projet: Kurdant.fr - Blog Section
