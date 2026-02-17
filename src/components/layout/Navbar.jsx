import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>KURDANT</span>
        </Link>
        
        <ul className={styles.navLinks}>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/games">Arcade</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
