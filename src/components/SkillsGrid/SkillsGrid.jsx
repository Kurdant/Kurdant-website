import styles from './SkillsGrid.module.css';

function SkillsGrid({ skills }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>COMPÉTENCES</h3>
      <div className={styles.divider}></div>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.badge}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsGrid;
