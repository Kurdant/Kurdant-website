import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Prêt à collaborer ?</h2>
          <p className={styles.description}>
            Transformons ensemble vos idées les plus audacieuses en expériences digitales inoubliables.
          </p>
          
          <div className={styles.buttons}>
            <Link to="/contact" className={styles.primaryButton}>
              <span className={styles.buttonText}>CONTACTEZ-MOI</span>
              <div className={styles.buttonGlow} />
            </Link>
            
            <Link to="/games" className={styles.secondaryButton}>
              <span className={styles.buttonText}>DÉCOUVRIR L'ARCADE</span>
            </Link>
          </div>

          <div className={styles.dataInfo}>
            <div className={styles.barcode}>
              <div className={styles.barcodeLines}>
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
              </div>
              <span className={styles.barcodeText}>KURDANT.FR/ABOUT</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
