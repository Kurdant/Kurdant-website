import { Link } from 'react-router-dom';
import styles from './NavigationMenu.module.css';

function NavigationMenu({ items }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>EXPLORER</h3>
      <div className={styles.divider}></div>
      <nav className={styles.nav} role="navigation" aria-label="Navigation principale">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={styles.link}
          >
            <span className={styles.arrow}>→</span>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.description}>{item.description}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default NavigationMenu;
