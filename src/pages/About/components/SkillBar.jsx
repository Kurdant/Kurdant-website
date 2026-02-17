import { motion } from 'framer-motion';
import styles from './SkillBar.module.css';

export default function SkillBar({ name, level, delay = 0 }) {
  return (
    <div className={styles.skillBar}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.barBackground}>
        <motion.div
          className={styles.barFill}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        >
          <div className={styles.barGlow} />
        </motion.div>
      </div>
    </div>
  );
}
