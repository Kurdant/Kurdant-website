# PAGE BLOG - MAQUETTE & SPECIFICATIONS COMPLETES

## WIREFRAME STRUCTURE

```
┌─────────────────────────────────────────────────────────────────┐
│                         NAVBAR (fixed)                           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        HERO SECTION                              │
│                                                                  │
│              ██████╗ ██╗      ██████╗  ██████╗                  │
│              ██╔══██╗██║     ██╔═══██╗██╔════╝                  │
│              ██████╔╝██║     ██║   ██║██║  ███╗                 │
│              ██╔══██╗██║     ██║   ██║██║   ██║                 │
│              ██████╔╝███████╗╚██████╔╝╚██████╔╝                 │
│              ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝                  │
│                                                                  │
│           [Découvrez mes articles techniques et créatifs]       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      FILTRES CATEGORIES                          │
│                                                                  │
│  [Tout afficher] [Dev] [Jeux Vidéo] [IA] [Autres]              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                       BLOG GRID                                  │
│                                                                  │
│  ┌────────┐  ┌────────┐  ┌────────┐                            │
│  │ IMAGE  │  │ IMAGE  │  │ IMAGE  │                            │
│  │        │  │        │  │        │                            │
│  ├────────┤  ├────────┤  ├────────┤                            │
│  │ Titre  │  │ Titre  │  │ Titre  │                            │
│  │ Desc.. │  │ Desc.. │  │ Desc.. │                            │
│  │[Tag][T]│  │[Tag][T]│  │[Tag][T]│                            │
│  │01/01/26│  │01/01/26│  │01/01/26│                            │
│  └────────┘  └────────┘  └────────┘                            │
│                                                                  │
│  ┌────────┐  ┌────────┐  ┌────────┐                            │
│  │ IMAGE  │  │ IMAGE  │  │ IMAGE  │                            │
│  │        │  │        │  │        │                            │
│  ├────────┤  ├────────┤  ├────────┤                            │
│  │ Titre  │  │ Titre  │  │ Titre  │                            │
│  │ Desc.. │  │ Desc.. │  │ Desc.. │                            │
│  │[Tag][T]│  │[Tag][T]│  │[Tag][T]│                            │
│  │01/01/26│  │01/01/26│  │01/01/26│                            │
│  └────────┘  └────────┘  └────────┘                            │
│                                                                  │
│  ┌────────┐  ┌────────┐  ┌────────┐                            │
│  │ IMAGE  │  │ IMAGE  │  │ IMAGE  │                            │
│  │        │  │        │  │        │                            │
│  ├────────┤  ├────────┤  ├────────┤                            │
│  │ Titre  │  │ Titre  │  │ Titre  │                            │
│  │ Desc.. │  │ Desc.. │  │ Desc.. │                            │
│  │[Tag][T]│  │[Tag][T]│  │[Tag][T]│                            │
│  │01/01/26│  │01/01/26│  │01/01/26│                            │
│  └────────┘  └────────┘  └────────┘                            │
│                                                                  │
│  ┌────────┐                                                     │
│  │ IMAGE  │                                                     │
│  │        │                                                     │
│  ├────────┤                                                     │
│  │ Titre  │                                                     │
│  │ Desc.. │                                                     │
│  │[Tag][T]│                                                     │
│  │01/01/26│                                                     │
│  └────────┘                                                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        PAGINATION                                │
│                                                                  │
│              [←] [1] [2] [3] ... [10] [→]                       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                         FOOTER                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## STRUCTURE HTML

```html
<div class="blog-page">
  <!-- Hero Section -->
  <section class="blog-hero">
    <div class="container">
      <h1 class="blog-title glitch" data-text="BLOG">BLOG</h1>
      <p class="blog-subtitle">Découvrez mes articles techniques et créatifs</p>
    </div>
  </section>

  <!-- Filtres Catégories -->
  <section class="blog-filters">
    <div class="container">
      <div class="filter-buttons">
        <button class="filter-btn active" data-category="all">Tout afficher</button>
        <button class="filter-btn" data-category="dev">Dev</button>
        <button class="filter-btn" data-category="gaming">Jeux Vidéo</button>
        <button class="filter-btn" data-category="ai">IA</button>
        <button class="filter-btn" data-category="other">Autres</button>
      </div>
    </div>
  </section>

  <!-- Blog Grid -->
  <section class="blog-grid">
    <div class="container">
      <div class="grid">
        <!-- Blog Card x10 -->
        <article class="blog-card">
          <div class="card-image-wrapper">
            <img src="blog-image.jpg" alt="Blog Title" class="card-image">
            <div class="image-overlay"></div>
          </div>
          <div class="card-content">
            <h3 class="card-title">Titre de l'Article</h3>
            <p class="card-description">Une courte description de l'article qui donne envie de cliquer et de lire la suite...</p>
            <div class="card-tags">
              <span class="tag">React</span>
              <span class="tag">JavaScript</span>
            </div>
            <div class="card-footer">
              <span class="card-date">15 Février 2026</span>
            </div>
          </div>
        </article>
        
        <!-- Répéter 9 fois pour 10 total -->
      </div>
    </div>
  </section>

  <!-- Pagination -->
  <section class="blog-pagination">
    <div class="container">
      <div class="pagination">
        <button class="pagination-arrow" aria-label="Page précédente">←</button>
        <button class="pagination-number active">1</button>
        <button class="pagination-number">2</button>
        <button class="pagination-number">3</button>
        <span class="pagination-dots">...</span>
        <button class="pagination-number">10</button>
        <button class="pagination-arrow" aria-label="Page suivante">→</button>
      </div>
    </div>
  </section>
</div>
```

---

## SPECIFICATIONS CSS COMPLETES

### Variables CSS

```css
:root {
  /* Colors - Lavender Palette */
  --lavender-soft: #D1C4E9;
  --lavender-medium: #B39DDB;
  --lavender-light: #E1BEE7;
  --lavender-dark: #9575CD;
  
  /* Accents */
  --cyan-soft: #80DEEA;
  --pink-soft: #F48FB1;
  
  /* Backgrounds */
  --bg-black: #000000;
  --bg-near-black: #0A0A0A;
  --bg-elevation: #121212;
  
  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: #D1C4E9;
  --text-muted: #9E9E9E;
  
  /* Glow Effects */
  --glow-lavender: 0 0 10px rgba(209, 196, 233, 0.4),
                   0 0 20px rgba(209, 196, 233, 0.2),
                   0 0 30px rgba(209, 196, 233, 0.1);
  
  --glow-lavender-intense: 0 0 15px rgba(209, 196, 233, 0.6),
                           0 0 30px rgba(209, 196, 233, 0.4),
                           0 0 45px rgba(209, 196, 233, 0.2);
  
  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

---

### 1. HERO SECTION

```css
.blog-hero {
  padding: var(--space-2xl) 0 var(--space-xl) 0;
  text-align: center;
  position: relative;
  background: linear-gradient(180deg, var(--bg-near-black) 0%, var(--bg-black) 100%);
  border-bottom: 1px solid var(--lavender-dark);
}

.blog-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: var(--space-md);
  text-shadow: var(--glow-lavender);
  position: relative;
}

/* Effet Glitch sur le titre */
.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.glitch:hover::before {
  animation: glitch-anim-1 0.3s infinite;
  color: var(--cyan-soft);
  z-index: -1;
  opacity: 0.8;
}

.glitch:hover::after {
  animation: glitch-anim-2 0.3s infinite;
  color: var(--pink-soft);
  z-index: -2;
  opacity: 0.8;
}

@keyframes glitch-anim-1 {
  0% { clip-path: inset(40% 0 61% 0); }
  20% { clip-path: inset(92% 0 1% 0); }
  40% { clip-path: inset(43% 0 1% 0); }
  60% { clip-path: inset(25% 0 58% 0); }
  80% { clip-path: inset(54% 0 7% 0); }
  100% { clip-path: inset(58% 0 43% 0); }
}

@keyframes glitch-anim-2 {
  0% { clip-path: inset(65% 0 15% 0); }
  20% { clip-path: inset(12% 0 36% 0); }
  40% { clip-path: inset(85% 0 8% 0); }
  60% { clip-path: inset(45% 0 33% 0); }
  80% { clip-path: inset(27% 0 61% 0); }
  100% { clip-path: inset(72% 0 4% 0); }
}

.blog-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  color: var(--text-secondary);
  font-weight: 300;
  letter-spacing: 0.05em;
}

/* Responsive Hero */
@media (max-width: 768px) {
  .blog-title {
    font-size: 2.5rem;
    letter-spacing: 0.15em;
  }
  
  .blog-subtitle {
    font-size: 1rem;
  }
}
```

---

### 2. FILTRES CATEGORIES

```css
.blog-filters {
  padding: var(--space-xl) 0;
  background: var(--bg-black);
  border-bottom: 1px solid rgba(149, 117, 205, 0.2);
}

.filter-buttons {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--space-sm) var(--space-lg);
  background: transparent;
  border: 2px solid var(--lavender-dark);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.filter-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(209, 196, 233, 0.2), transparent);
  transition: left var(--transition-slow);
}

.filter-btn:hover {
  border-color: var(--lavender-soft);
  box-shadow: var(--glow-lavender);
  transform: translateY(-2px);
}

.filter-btn:hover::before {
  left: 100%;
}

.filter-btn.active {
  background: var(--lavender-medium);
  border-color: var(--lavender-medium);
  color: var(--bg-black);
  box-shadow: var(--glow-lavender-intense);
}

.filter-btn:active {
  transform: translateY(0);
}

/* Responsive Filtres */
@media (max-width: 768px) {
  .filter-buttons {
    gap: var(--space-xs);
  }
  
  .filter-btn {
    padding: var(--space-xs) var(--space-md);
    font-size: 0.75rem;
  }
}
```

---

### 3. BLOG GRID

```css
.blog-grid {
  padding: var(--space-2xl) 0;
  background: var(--bg-black);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

/* Responsive Grid */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
}
```

---

### 4. BLOG CARD

```css
.blog-card {
  background: var(--bg-elevation);
  border: 1px solid var(--lavender-dark);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
}

.blog-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(209, 196, 233, 0.05) 0%, 
    transparent 50%
  );
  opacity: 0;
  transition: opacity var(--transition-normal);
  pointer-events: none;
  z-index: 1;
}

.blog-card:hover {
  border-color: var(--lavender-soft);
  box-shadow: var(--glow-lavender-intense);
  transform: translateY(-8px);
}

.blog-card:hover::before {
  opacity: 1;
}

/* Image Wrapper */
.card-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--bg-near-black);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
  filter: grayscale(0.3) brightness(0.9);
}

.blog-card:hover .card-image {
  transform: scale(1.1);
  filter: grayscale(0) brightness(1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, 
    transparent 0%, 
    rgba(0, 0, 0, 0.7) 100%
  );
  opacity: 0.6;
  transition: opacity var(--transition-normal);
}

.blog-card:hover .image-overlay {
  opacity: 0.3;
}

/* Card Content */
.card-content {
  padding: var(--space-lg);
  position: relative;
  z-index: 2;
}

.card-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
  line-height: 1.4;
  transition: color var(--transition-fast);
}

.blog-card:hover .card-title {
  color: var(--lavender-soft);
  text-shadow: 0 0 10px rgba(209, 196, 233, 0.5);
}

.card-description {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: var(--space-md);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Tags */
.card-tags {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
  margin-bottom: var(--space-md);
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(209, 196, 233, 0.1);
  border: 1px solid var(--lavender-dark);
  border-radius: var(--radius-sm);
  font-family: 'Press Start 2P', monospace;
  font-size: 0.625rem;
  color: var(--lavender-soft);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all var(--transition-fast);
}

.blog-card:hover .tag {
  background: rgba(209, 196, 233, 0.2);
  border-color: var(--lavender-soft);
  box-shadow: 0 0 8px rgba(209, 196, 233, 0.3);
}

/* Card Footer */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-sm);
  border-top: 1px solid rgba(149, 117, 205, 0.2);
}

.card-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}
```

---

### 5. PAGINATION

```css
.blog-pagination {
  padding: var(--space-2xl) 0;
  background: var(--bg-black);
}

.pagination {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  align-items: center;
}

.pagination-arrow,
.pagination-number {
  padding: var(--space-sm) var(--space-md);
  background: transparent;
  border: 2px solid var(--lavender-dark);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-normal);
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-arrow:hover,
.pagination-number:hover {
  border-color: var(--lavender-soft);
  box-shadow: var(--glow-lavender);
  transform: translateY(-2px);
}

.pagination-number.active {
  background: var(--lavender-medium);
  border-color: var(--lavender-medium);
  color: var(--bg-black);
  box-shadow: var(--glow-lavender-intense);
}

.pagination-dots {
  color: var(--text-muted);
  padding: 0 var(--space-xs);
}

/* Responsive Pagination */
@media (max-width: 768px) {
  .pagination-arrow,
  .pagination-number {
    padding: var(--space-xs) var(--space-sm);
    min-width: 40px;
    height: 40px;
    font-size: 0.875rem;
  }
}
```

---

### 6. EFFETS VISUELS GLOBAUX

```css
/* Scanlines CRT Effect */
.blog-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 9999;
  opacity: 0.3;
}

/* Grain/Noise Overlay */
.blog-page::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==');
  pointer-events: none;
  z-index: 9998;
  opacity: 0.4;
}

/* Désactiver effets sur mobile pour performances */
@media (max-width: 768px) {
  .blog-page::before,
  .blog-page::after {
    display: none;
  }
}
```

---

## ANIMATIONS & MICRO-INTERACTIONS

### Fade-in on Scroll

```css
.blog-card {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.blog-card:nth-child(1) { animation-delay: 0.1s; }
.blog-card:nth-child(2) { animation-delay: 0.2s; }
.blog-card:nth-child(3) { animation-delay: 0.3s; }
.blog-card:nth-child(4) { animation-delay: 0.4s; }
.blog-card:nth-child(5) { animation-delay: 0.5s; }
.blog-card:nth-child(6) { animation-delay: 0.6s; }
.blog-card:nth-child(7) { animation-delay: 0.7s; }
.blog-card:nth-child(8) { animation-delay: 0.8s; }
.blog-card:nth-child(9) { animation-delay: 0.9s; }
.blog-card:nth-child(10) { animation-delay: 1s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Ripple Effect au Click

```css
.blog-card {
  position: relative;
  overflow: hidden;
}

.blog-card::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(209, 196, 233, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.blog-card:active::after {
  width: 300%;
  height: 300%;
}
```

---

## ACCESSIBILITE

### Focus States

```css
.filter-btn:focus,
.blog-card:focus,
.pagination-arrow:focus,
.pagination-number:focus {
  outline: 2px solid var(--lavender-soft);
  outline-offset: 4px;
}

/* Focus visible pour navigation clavier */
.filter-btn:focus-visible,
.blog-card:focus-visible,
.pagination-arrow:focus-visible,
.pagination-number:focus-visible {
  outline: 2px solid var(--lavender-soft);
  outline-offset: 4px;
  box-shadow: var(--glow-lavender-intense);
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## COMPORTEMENT JAVASCRIPT

### Filtres

```javascript
// Filtrage des articles par catégorie
const filterButtons = document.querySelectorAll('.filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Retirer classe active de tous les boutons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Ajouter classe active au bouton cliqué
    button.classList.add('active');
    
    const category = button.dataset.category;
    
    // Filtrer les cards
    blogCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 0.6s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
```

### Pagination

```javascript
// Pagination simple
const paginationNumbers = document.querySelectorAll('.pagination-number');
const paginationArrows = document.querySelectorAll('.pagination-arrow');

let currentPage = 1;
const totalPages = 10;

paginationNumbers.forEach(number => {
  number.addEventListener('click', () => {
    currentPage = parseInt(number.textContent);
    updatePagination();
    loadBlogPage(currentPage);
  });
});

paginationArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (arrow.textContent === '←' && currentPage > 1) {
      currentPage--;
    } else if (arrow.textContent === '→' && currentPage < totalPages) {
      currentPage++;
    }
    updatePagination();
    loadBlogPage(currentPage);
  });
});

function updatePagination() {
  paginationNumbers.forEach(number => {
    if (parseInt(number.textContent) === currentPage) {
      number.classList.add('active');
    } else {
      number.classList.remove('active');
    }
  });
}

function loadBlogPage(page) {
  // Charger les blogs de la page (API call ou données statiques)
  console.log(`Loading page ${page}`);
  
  // Scroll smooth vers le haut
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

### Click sur Card

```javascript
// Navigation vers article au click
blogCards.forEach(card => {
  card.addEventListener('click', () => {
    const blogId = card.dataset.blogId;
    window.location.href = `/blog/${blogId}`;
  });
  
  // Accessibilité clavier
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const blogId = card.dataset.blogId;
      window.location.href = `/blog/${blogId}`;
    }
  });
  
  // Rendre focusable
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'article');
});
```

---

## RESPONSIVE BREAKPOINTS SUMMARY

| Breakpoint | Grid Layout | Filter Layout | Card Padding | Image Size |
|------------|-------------|---------------|--------------|------------|
| Desktop (>1024px) | 3 colonnes | Horizontal | 2rem | Square (full) |
| Tablette (768-1024px) | 2 colonnes | Horizontal wrap | 1.5rem | Square (full) |
| Mobile (<768px) | 1 colonne | Horizontal wrap | 1rem | Square (full) |

---

## NOTES D'IMPLEMENTATION

1. Utiliser React Router pour navigation vers `/blog/:slug`
2. Intégrer WISP CMS API pour fetch des articles
3. Images optimisées en WebP avec fallback JPG
4. Lazy loading des images hors viewport
5. Pagination côté serveur pour performances
6. Filtres avec state management (useState/useReducer)
7. Animations avec Framer Motion (optionnel, ou CSS pur)
8. Scanlines et grain désactivés sur mobile

---

## ASSETS REQUIS

- Polices: Orbitron, Press Start 2P, Inter, JetBrains Mono (Google Fonts)
- Images blog: Format square 800x800px minimum (WebP optimisé)
- Icônes: Flèches pagination (SVG ou Unicode)

---

FIN DES SPECIFICATIONS

Créé par: Kurdant UX/UI Designer
Date: 17 Février 2026
Version: 1.0
