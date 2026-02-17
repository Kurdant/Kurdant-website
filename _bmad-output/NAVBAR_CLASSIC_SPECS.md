# NAVBAR KURDANT - Specifications Complètes

## Vision Design

Navbar classique horizontale avec twist cyberpunk Kurdant:
- Fixed top, toujours visible
- Rétractée au scroll down (hauteur réduite)
- Réexpansion au hover
- Dégradé transparent bas
- Glitch au hover sur logo
- Glow coloré selon page

---

## Comportements

### État Normal (Top of Page)
- Position: Fixed top
- Hauteur: 80px
- Opacité fond: gradient de 100% (top) à 0% (bottom)
- Logo "KURDANT" visible (gauche)
- Menu links visibles (droite)

### État Scroll (Rétracté)
- Trigger: Scroll down > 100px
- Hauteur: 60px (réduite)
- Transition smooth (0.3s ease)
- Logo plus petit
- Menu links plus petits

### État Hover sur Navbar Rétractée
- Hauteur: retour à 80px
- Éléments reprennent taille normale
- Transition smooth (0.3s ease)

### Responsive Mobile
- Breakpoint: < 768px
- Logo reste à gauche
- Menu links cachés
- Burger icon à droite
- Click burger → Fullscreen overlay

---

## Structure HTML/React

```jsx
<nav className="navbar" data-scrolled={isScrolled}>
  <div className="navbar-container">
    {/* Logo Left */}
    <Link to="/" className="navbar-logo">
      <span className="logo-text">KURDANT</span>
      <div className="logo-glitch" /> {/* Effet glitch hover */}
    </Link>

    {/* Desktop Menu Right */}
    <ul className="navbar-menu desktop-only">
      <li><Link to="/" className="nav-link">HOME</Link></li>
      <li><Link to="/about" className="nav-link">ABOUT</Link></li>
      <li><Link to="/blog" className="nav-link">BLOG</Link></li>
      <li><Link to="/games" className="nav-link">ARCADE</Link></li>
      <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
    </ul>

    {/* Mobile Burger */}
    <button className="burger-btn mobile-only" onClick={toggleMenu}>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  </div>

  {/* Mobile Fullscreen Overlay */}
  <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
    <ul className="mobile-menu">
      <li style={{ '--delay': '0.1s' }}>
        <Link to="/" onClick={closeMenu}>HOME</Link>
      </li>
      <li style={{ '--delay': '0.2s' }}>
        <Link to="/about" onClick={closeMenu}>ABOUT</Link>
      </li>
      <li style={{ '--delay': '0.3s' }}>
        <Link to="/blog" onClick={closeMenu}>BLOG</Link>
      </li>
      <li style={{ '--delay': '0.4s' }}>
        <Link to="/games" onClick={closeMenu}>ARCADE</Link>
      </li>
      <li style={{ '--delay': '0.5s' }}>
        <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
      </li>
    </ul>
  </div>
</nav>
```

---

## Styles CSS (Navbar.module.css)

### Navbar Container
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  transition: height 0.3s ease;
  
  /* Dégradé fond: couleur page → transparent */
  background: linear-gradient(
    180deg,
    var(--color-primary) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    transparent 100%
  );
  
  backdrop-filter: blur(10px);
}

/* État rétracté au scroll */
.navbar[data-scrolled="true"] {
  height: 60px;
}

/* Réexpansion au hover quand rétracté */
.navbar[data-scrolled="true"]:hover {
  height: 80px;
}

.navbarContainer {
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### Logo (Gauche)
```css
.navbarLogo {
  text-decoration: none;
  position: relative;
  z-index: 2;
}

.logoText {
  font-family: 'Orbitron', sans-serif;
  font-size: 28px;
  font-weight: 900;
  color: var(--color-white);
  letter-spacing: 3px;
  text-shadow: 
    0 0 10px var(--color-primary-glow),
    0 0 20px var(--color-primary-glow);
  transition: all 0.3s ease;
}

/* Logo plus petit quand scrolled */
.navbar[data-scrolled="true"] .logoText {
  font-size: 22px;
}

/* Logo reprend taille au hover */
.navbar[data-scrolled="true"]:hover .logoText {
  font-size: 28px;
}

/* Effet glitch au hover sur logo */
.navbarLogo:hover .logoText {
  animation: glitchLogo 0.3s ease;
}

@keyframes glitchLogo {
  0%, 100% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
    text-shadow: 
      2px 0 #00FFFF,
      -2px 0 #FF00A5;
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
}
```

### Menu Desktop (Droite)
```css
.navbarMenu {
  display: flex;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.navLink {
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding: 8px 0;
  transition: all 0.3s ease;
}

/* Links plus petits quand scrolled */
.navbar[data-scrolled="true"] .navLink {
  font-size: 12px;
}

/* Links reprennent taille au hover navbar */
.navbar[data-scrolled="true"]:hover .navLink {
  font-size: 14px;
}

/* Hover state: glow couleur page */
.navLink:hover {
  color: var(--color-primary);
  text-shadow: 
    0 0 10px var(--color-primary-glow),
    0 0 20px var(--color-primary-glow);
}

/* Underline animé au hover */
.navLink::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  box-shadow: 0 0 10px var(--color-primary-glow);
  transition: width 0.3s ease;
}

.navLink:hover::after {
  width: 100%;
}

/* Active link */
.navLink.active {
  color: var(--color-primary);
  text-shadow: 
    0 0 10px var(--color-primary-glow),
    0 0 20px var(--color-primary-glow);
}

.navLink.active::after {
  width: 100%;
}
```

### Burger Button (Mobile)
```css
.burgerBtn {
  display: none; /* Hidden on desktop */
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 0;
  z-index: 1002;
}

.burgerLine {
  width: 28px;
  height: 2px;
  background: var(--color-white);
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 0 5px var(--color-primary-glow);
}

/* Burger hover */
.burgerBtn:hover .burgerLine {
  background: var(--color-primary);
  box-shadow: 0 0 10px var(--color-primary-glow);
}

/* Burger active (menu ouvert) */
.burgerBtn.active .burgerLine:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
}

.burgerBtn.active .burgerLine:nth-child(2) {
  opacity: 0;
}

.burgerBtn.active .burgerLine:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
}
```

### Mobile Menu Overlay
```css
.mobileMenuOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000000; /* Fond noir pur */
  z-index: 1001;
  display: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.mobileMenuOverlay.active {
  display: flex;
  opacity: 1;
  align-items: center;
  justify-content: center;
}

.mobileMenu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
}

.mobileMenu li {
  opacity: 0;
  transform: translateY(-20px);
}

/* Animation stagger: apparition un par un */
.mobileMenuOverlay.active .mobileMenu li {
  animation: fadeInDown 0.4s ease forwards;
  animation-delay: var(--delay);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobileMenu a {
  font-family: 'Orbitron', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: var(--color-white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  transition: all 0.3s ease;
}

.mobileMenu a:hover {
  color: var(--color-primary);
  text-shadow: 
    0 0 20px var(--color-primary-glow),
    0 0 40px var(--color-primary-glow);
  transform: scale(1.1);
}
```

### Responsive
```css
@media (max-width: 768px) {
  .desktopOnly {
    display: none !important;
  }
  
  .burgerBtn {
    display: flex;
  }
  
  .navbarContainer {
    padding: 0 16px;
  }
  
  .logoText {
    font-size: 22px;
  }
  
  .navbar[data-scrolled="true"] .logoText {
    font-size: 18px;
  }
}
```

---

## Logique React (Navbar.jsx)

```jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? styles.active : '';
  };

  return (
    <nav 
      className={styles.navbar} 
      data-scrolled={isScrolled}
    >
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <Link to="/" className={styles.navbarLogo}>
          <span className={styles.logoText}>KURDANT</span>
        </Link>

        {/* Desktop Menu */}
        <ul className={`${styles.navbarMenu} ${styles.desktopOnly}`}>
          <li>
            <Link 
              to="/" 
              className={`${styles.navLink} ${isActive('/')}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`${styles.navLink} ${isActive('/about')}`}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className={`${styles.navLink} ${isActive('/blog')}`}
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link 
              to="/games" 
              className={`${styles.navLink} ${isActive('/games')}`}
            >
              ARCADE
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`${styles.navLink} ${isActive('/contact')}`}
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Burger Button */}
        <button 
          className={`${styles.burgerBtn} ${styles.mobileOnly} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.active : ''}`}>
        <ul className={styles.mobileMenu}>
          <li style={{ '--delay': '0.1s' }}>
            <Link to="/" onClick={closeMenu}>HOME</Link>
          </li>
          <li style={{ '--delay': '0.2s' }}>
            <Link to="/about" onClick={closeMenu}>ABOUT</Link>
          </li>
          <li style={{ '--delay': '0.3s' }}>
            <Link to="/blog" onClick={closeMenu}>BLOG</Link>
          </li>
          <li style={{ '--delay': '0.4s' }}>
            <Link to="/games" onClick={closeMenu}>ARCADE</Link>
          </li>
          <li style={{ '--delay': '0.5s' }}>
            <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
```

---

## Variables CSS Couleurs par Page

Dans `colors.css`, assure-toi que chaque page définit `--color-primary`:

```css
[data-page="home"] {
  --color-primary: #D1C4E9;
  --color-primary-glow: rgba(209, 196, 233, 0.6);
}

[data-page="about"] {
  --color-primary: #FF00A5;
  --color-primary-glow: rgba(255, 0, 165, 0.6);
}

[data-page="blog"] {
  --color-primary: #FFFFFF;
  --color-primary-glow: rgba(255, 255, 255, 0.6);
}

[data-page="games"] {
  --color-primary: #00FF41;
  --color-primary-glow: rgba(0, 255, 65, 0.6);
}

[data-page="contact"] {
  --color-primary: #30FAFF;
  --color-primary-glow: rgba(48, 250, 255, 0.6);
}
```

---

## Animations & Timings

- **Scroll rétractation**: 0.3s ease
- **Hover expansion**: 0.3s ease
- **Glitch logo**: 0.3s (one-shot au hover)
- **Underline growth**: 0.3s ease
- **Mobile menu fade in**: 0.4s ease
- **Mobile items stagger**: 0.4s ease, delay incrémental 0.1s

---

## Checklist Implémentation

- [ ] Créer `src/components/Navigation/Navbar.jsx`
- [ ] Créer `src/components/Navigation/Navbar.module.css`
- [ ] Remplacer `<OrbitalNav />` par `<Navbar />` dans `App.jsx`
- [ ] Vérifier variables CSS `--color-primary` dans `colors.css`
- [ ] Tester scroll behavior (rétractation + hover expansion)
- [ ] Tester glitch logo au hover
- [ ] Tester menu burger mobile (ouverture + stagger animation)
- [ ] Tester glow coloré selon page active
- [ ] Tester responsive (breakpoint 768px)
- [ ] Vérifier active link state
- [ ] Tester navigation entre pages (menu se ferme)

---

## Notes Techniques

- **Z-index**: Navbar (1000), Burger (1002), Mobile overlay (1001)
- **Backdrop-filter**: blur(10px) pour effet verre sur navbar
- **CSS Variables**: --delay pour animation stagger mobile
- **Performance**: Throttle scroll event si lag (optionnel)
- **Accessibility**: aria-label sur burger, navigation clavier OK

---

**STATUS**: Specs complètes - Prêt pour implémentation par React Developer

**VALIDATION REQUISE**: Hugo, confirme si cette approche correspond à ta vision?
