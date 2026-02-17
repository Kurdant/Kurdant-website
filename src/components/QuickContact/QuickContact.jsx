import { Link } from 'react-router-dom';
import styles from './QuickContact.module.css';

function QuickContact({ email }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>CONTACT RAPIDE</h3>
      <div className={styles.divider}></div>
      <div className={styles.content}>
        <p className={styles.emailLabel}>Email:</p>
        <a href={`mailto:${email}`} className={styles.email}>
          {email}
        </a>
        <Link to="/contact" className={styles.cta}>
          Me contacter →
        </Link>
      </div>
    </div>
  );
}

export default QuickContact;
