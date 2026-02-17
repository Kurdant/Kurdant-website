import { motion } from 'framer-motion';
import styles from './DataCard.module.css';

export default function DataCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      className={styles.dataCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, boxShadow: `0 10px 40px var(--color-primary-glow)` }}
    >
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.scanline} />
    </motion.div>
  );
}
