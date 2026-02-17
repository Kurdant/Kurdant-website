import { motion } from 'framer-motion';
import styles from './Divider.module.css';

const Divider = ({ type = 1 }) => {
  const dividerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { 
      opacity: 1, 
      scaleX: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const elementStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const elementVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const renderType1 = () => (
    <>
      <svg className={styles.wave} viewBox="0 0 800 60" preserveAspectRatio="none">
        <motion.path
          d="M0,30 Q100,10 200,30 T400,30 T600,30 T800,30"
          stroke="#B39DDB"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
      </svg>
      
      <motion.div 
        className={styles.elements}
        variants={elementStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={elementVariants} className={`${styles.star} ${styles.starLeft}`}></motion.div>
        <motion.div variants={elementVariants} className={styles.hexagonCenter}></motion.div>
        <motion.div variants={elementVariants} className={`${styles.star} ${styles.starRight}`}></motion.div>
        <motion.div variants={elementVariants} className={`${styles.shard} ${styles.shard1}`}></motion.div>
        <motion.div variants={elementVariants} className={`${styles.shard} ${styles.shard2}`}></motion.div>
      </motion.div>
    </>
  );

  const renderType2 = () => (
    <>
      <motion.div 
        className={styles.dataStream}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.streamText}>
          <span className={styles.blocks}>▮▮▮▯▯▯</span>
          <span className={styles.loadingText}>LOADING DATA...</span>
          <div className={styles.progressBar}>
            <motion.div 
              className={styles.progressFill}
              initial={{ width: '0%' }}
              whileInView={{ width: '47%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />
          </div>
          <span className={styles.percentage}>47% COMPLETE</span>
        </div>
      </motion.div>

      <motion.div 
        className={styles.elements}
        variants={elementStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={elementVariants} className={styles.wireframeGridSmall}></motion.div>
        <motion.div variants={elementVariants} className={`${styles.bar} ${styles.barLeft}`}></motion.div>
        <motion.div variants={elementVariants} className={styles.hexagonSmall}></motion.div>
        <motion.div variants={elementVariants} className={styles.starCenter}></motion.div>
        <motion.div variants={elementVariants} className={`${styles.bar} ${styles.barRight}`}></motion.div>
      </motion.div>
    </>
  );

  const renderType3 = () => (
    <>
      <motion.div 
        className={styles.glitchLine}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.glitchSegments}>
          <span className={styles.glitchBlock}>▓▓▓▓</span>
          <span className={styles.glitchSpace}>░░░░</span>
          <span className={styles.glitchBlock}>▓▓▓</span>
          <span className={styles.glitchSpace}>░░░░</span>
          <span className={styles.glitchBlock}>▓▓▓</span>
          <span className={styles.glitchSpace}>░░░░</span>
          <span className={styles.glitchBlock}>▓▓▓</span>
        </div>
      </motion.div>

      <motion.div 
        className={styles.elements}
        variants={elementStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={elementVariants} className={`${styles.dataCardSmall} ${styles.dataLeft}`}>
          <span>DATA</span>
        </motion.div>
        <motion.div variants={elementVariants} className={`${styles.star} ${styles.starLeft}`}></motion.div>
        <motion.div variants={elementVariants} className={styles.line}></motion.div>
        <motion.div variants={elementVariants} className={`${styles.star} ${styles.starRight}`}></motion.div>
        <motion.div variants={elementVariants} className={`${styles.dataCardSmall} ${styles.dataRight}`}>
          <span>DATA</span>
        </motion.div>
        <motion.div variants={elementVariants} className={`${styles.shard} ${styles.shardGlitch1}`}></motion.div>
        <motion.div variants={elementVariants} className={`${styles.shard} ${styles.shardGlitch2}`}></motion.div>
      </motion.div>
    </>
  );

  return (
    <motion.div 
      className={`${styles.divider} ${styles[`dividerType${type}`]}`}
      variants={dividerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {type === 1 && renderType1()}
      {type === 2 && renderType2()}
      {type === 3 && renderType3()}
    </motion.div>
  );
};

export default Divider;
