import { motion } from 'framer-motion';
import styles from './MissionStatement.module.css';

const MissionStatement = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const titleFrameVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1, delay: 0.3 }
    }
  };

  const cardStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const overlayStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const overlayItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.section 
      className={styles.missionSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.titleFrame}
          variants={titleFrameVariants}
        >
          <h2 className={styles.title}>CE QUE JE FAIS</h2>
        </motion.div>

        <motion.div 
          className={styles.textBlock}
          variants={textVariants}
        >
          <p>Je crée des expériences web immersives et performantes</p>
          <p>Spécialisé en interfaces modernes avec React</p>
          <p>Passionné par les effets visuels et l'UX innovante</p>
        </motion.div>

        <motion.div 
          className={styles.servicesGrid}
          variants={cardStagger}
        >
          <motion.div className={styles.serviceCard} variants={cardVariants}>
            <div className={styles.serviceIcon}>⚛️</div>
            <h3 className={styles.serviceTitle}>FRONTEND</h3>
            <p className={styles.serviceDesc}>DEV</p>
          </motion.div>

          <motion.div className={styles.serviceCard} variants={cardVariants}>
            <div className={styles.serviceIcon}>🎨</div>
            <h3 className={styles.serviceTitle}>DESIGN</h3>
            <p className={styles.serviceDesc}>UX/UI</p>
          </motion.div>

          <motion.div className={styles.serviceCard} variants={cardVariants}>
            <div className={styles.serviceIcon}>🎮</div>
            <h3 className={styles.serviceTitle}>GAMES</h3>
            <p className={styles.serviceDesc}>CANVAS</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.overlays}
          variants={overlayStagger}
        >
          <motion.div variants={overlayItem} className={styles.wireframeGlobe}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.dataCard} ${styles.dataCard1}`}>
            <div className={styles.dataCardHeader}>MISSION</div>
            <div className={styles.dataCardContent}>CREATE EXPERIENCES</div>
          </motion.div>

          <motion.div variants={overlayItem} className={`${styles.dataCard} ${styles.dataCard2}`}>
            <div className={styles.dataCardHeader}>FOCUS</div>
            <div className={styles.dataCardContent}>INNOVATION</div>
          </motion.div>

          <motion.div variants={overlayItem} className={`${styles.dataCard} ${styles.dataCard3}`}>
            <div className={styles.dataCardHeader}>STATUS</div>
            <div className={styles.dataCardContent}>READY</div>
          </motion.div>

          <motion.div variants={overlayItem} className={`${styles.barcode} ${styles.barcodeLeft}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.barcode} ${styles.barcodeBottom}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star2}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star3}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star4}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star5}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.hexagon} ${styles.hexagon1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.hexagon} ${styles.hexagon2}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.hexagon} ${styles.hexagon3}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard2}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard3}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard4}`}></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionStatement;
