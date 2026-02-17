import { motion } from 'framer-motion';
import styles from './IdentityCard.module.css';

const IdentityCard = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const glitchVariants = {
    hidden: { x: 0 },
    glitch: {
      x: [-2, 2, -2, 0],
      filter: [
        'hue-rotate(0deg)',
        'hue-rotate(90deg)',
        'hue-rotate(-90deg)',
        'hue-rotate(0deg)'
      ],
      transition: { duration: 0.05, repeat: 1 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const overlayItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <motion.section 
      className={styles.identitySection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.div 
        className={styles.container}
        variants={glitchVariants}
        animate="glitch"
      >
        {/* Main Card */}
        <div className={styles.mainCard}>
          {/* Photo Placeholder */}
          <div className={styles.photoWrapper}>
            <div className={styles.photoPlaceholder}>
              <span className={styles.initials}>HK</span>
            </div>
            <div className={styles.scanlineOverlay}></div>
          </div>

          {/* Identity Info */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.dataLabel}>IDENTITY FILE</span>
              <span className={styles.subject}>KURDANT</span>
            </div>

            <div className={styles.infoContent}>
              <h2 className={styles.name}>HUGO KURDANT</h2>
              <p className={styles.role}>Developer Junior</p>
              <p className={styles.specialty}>React Specialist</p>

              <div className={styles.details}>
                <div className={styles.detailRow}>
                  <span className={styles.label}>Location:</span>
                  <span className={styles.value}>France</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>Status:</span>
                  <span className={styles.statusActive}>[ACTIVE]</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.label}>Experience:</span>
                  <span className={styles.value}>2+ ans</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <motion.div 
          className={styles.bioText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            Développeur passionné par les interfaces immersives et les expériences web modernes. 
            Spécialisé en React, j'aime créer des applications visuellement impressionnantes 
            qui allient performance et esthétique cyberpunk.
          </p>
        </motion.div>

        {/* Overlays */}
        <motion.div 
          className={styles.overlays}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={overlayItem} className={`${styles.dataCard} ${styles.dataCardTopLeft}`}>
            <div className={styles.dataCardHeader}>DATA CARD</div>
            <div className={styles.dataCardContent}>IDENTITY FILE</div>
            <div className={styles.timestamp}>2026.02.11 - 15:30</div>
          </motion.div>

          <motion.div variants={overlayItem} className={`${styles.dataCard} ${styles.dataCardBottomRight}`}>
            <div className={styles.dataCardHeader}>LOCATION</div>
            <div className={styles.dataCardContent}>WORLD WIDE</div>
            <div className={styles.coordinates}>48.8566° N / 2.3522° E</div>
          </motion.div>

          <motion.div variants={overlayItem} className={`${styles.barcode} ${styles.barcodeTopRight}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star2}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star3}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star4}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star5}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard2}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard3}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard4}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.hexagon} ${styles.hexagon1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.hexagon} ${styles.hexagon2}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.wireframeGrid} ${styles.wireframe1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.wireframeGrid} ${styles.wireframe2}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.wireframeGrid} ${styles.wireframe3}`}></motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default IdentityCard;
