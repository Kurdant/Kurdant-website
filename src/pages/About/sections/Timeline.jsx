import { motion } from 'framer-motion';
import { timelineData } from '../../../data/aboutData';
import styles from './Timeline.module.css';

export default function Timeline() {
  return (
    <section className={styles.timeline}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>// PARCOURS</h2>
          <p className={styles.subtitle}>
            Mon évolution à travers les projets, défis et réalisations
          </p>
        </motion.div>

        <div className={styles.timelineTrack}>
          <div className={styles.timelineLine} />
          
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.timelineItem} ${item.highlight ? styles.highlight : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot} />
                <div className={styles.markerGlow} />
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.year}>{item.year}</div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <div className={`${styles.itemType} ${styles[item.type]}`}>
                  {item.type.toUpperCase()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
