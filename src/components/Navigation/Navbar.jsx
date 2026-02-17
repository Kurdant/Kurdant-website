import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <Link to="/" className={styles.navbarLogo}>
          <span className={styles.logoText}>KURDANT</span>
        </Link>

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
