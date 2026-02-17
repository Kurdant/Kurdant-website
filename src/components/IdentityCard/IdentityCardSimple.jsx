import styles from './IdentityCardSimple.module.css';

function IdentityCardSimple() {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>HUGO / KURDANT</h1>
      <h2 className={styles.subtitle}>Développeur React Junior</h2>
      <div className={styles.divider}></div>
      <p className={styles.description}>
        Passionné par le développement web moderne et les expériences visuelles immersives. 
        Créateur d'interfaces uniques et de mini-jeux interactifs.
      </p>
    </div>
  );
}

export default IdentityCardSimple;
