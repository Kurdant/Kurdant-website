import { motion } from 'framer-motion';
import styles from './SkillsMatrix.module.css';

const SkillsMatrix = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const cardStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const itemStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
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

  const frontendSkills = ['React', 'JavaScript', 'CSS/SCSS', 'HTML5', 'Canvas API', 'Framer Motion'];
  const backendSkills = ['Node.js', 'Supabase', 'REST API', 'PostgreSQL', 'Express'];
  const toolsSkills = ['Git', 'Figma', 'Vite', 'VS Code', 'Docker', 'GitHub'];

  return (
    <motion.section 
      className={styles.skillsSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          variants={titleVariants}
        >
          SKILLS DATABASE
        </motion.h2>

        <motion.div 
          className={styles.skillsGrid}
          variants={cardStagger}
        >
          <motion.div className={styles.skillCard} variants={cardVariants}>
            <div className={styles.cardHeader}>
              <span className={styles.categoryLabel}>FRONTEND</span>
              <div className={styles.headerLine}></div>
            </div>
            <motion.ul 
              className={styles.skillList}
              variants={itemStagger}
            >
              {frontendSkills.map((skill, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <span className={styles.bullet}>▸</span>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div className={styles.skillCard} variants={cardVariants}>
            <div className={styles.cardHeader}>
              <span className={styles.categoryLabel}>BACKEND</span>
              <div className={styles.headerLine}></div>
            </div>
            <motion.ul 
              className={styles.skillList}
              variants={itemStagger}
            >
              {backendSkills.map((skill, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <span className={styles.bullet}>▸</span>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div className={styles.skillCard} variants={cardVariants}>
            <div className={styles.cardHeader}>
              <span className={styles.categoryLabel}>TOOLS</span>
              <div className={styles.headerLine}></div>
            </div>
            <motion.ul 
              className={styles.skillList}
              variants={itemStagger}
            >
              {toolsSkills.map((skill, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <span className={styles.bullet}>▸</span>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.overlays}
          variants={overlayStagger}
        >
          <motion.div variants={overlayItem} className={`${styles.dataCard} ${styles.dataCard1}`}>
            <div className={styles.dataCardHeader}>SYSTEM</div>
            <div className={styles.dataCardContent}>SKILLS MATRIX v2.0</div>
          </motion.div>

          <motion.div variants={overlayItem} className={`${styles.dataCard} ${styles.dataCard2}`}>
            <div className={styles.dataCardHeader}>STATUS</div>
            <div className={styles.dataCardContent}>LOADING COMPLETE</div>
          </motion.div>

          <motion.div variants={overlayItem} className={styles.wireframeCircle}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.barcode} ${styles.barcodeBottom}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star2}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star3}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.hexagon} ${styles.hexagon1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.hexagon} ${styles.hexagon2}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard2}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard3}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.verticalBar} ${styles.bar1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.verticalBar} ${styles.bar2}`}></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsMatrix;
