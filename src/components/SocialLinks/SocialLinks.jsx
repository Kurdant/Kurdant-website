import styles from './SocialLinks.module.css';

function SocialLinks({ links }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>CONNEXIONS</h3>
      <div className={styles.divider}></div>
      <div className={styles.grid}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            aria-label={`Visiter mon ${link.name}`}
          >
            <div className={styles.icon}>{link.icon}</div>
            <div className={styles.label}>{link.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
