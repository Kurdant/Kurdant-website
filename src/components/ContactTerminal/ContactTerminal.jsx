import { motion } from 'framer-motion';
import styles from './ContactTerminal.module.css';

const ContactTerminal = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const terminalVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  const linkStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, delay: 0.8 }
    }
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

  const contacts = [
    { platform: 'GitHub', handle: '@hugo-kurdant', icon: '⚡' },
    { platform: 'Email', handle: 'contact@kurdant.fr', icon: '✉️' },
    { platform: 'LinkedIn', handle: 'hugo-kurdant', icon: '💼' },
    { platform: 'Twitter', handle: '@HugoKurdant', icon: '🐦' }
  ];

  return (
    <motion.section 
      className={styles.contactSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.terminal}
          variants={terminalVariants}
        >
          <div className={styles.terminalHeader}>
            <span className={styles.promptSymbol}>&gt;</span>
            <span className={styles.headerText}>CONTACT_TERMINAL</span>
          </div>

          <div className={styles.terminalStatus}>
            <span className={styles.statusLabel}>&gt; STATUS:</span>
            <span className={styles.statusValue}>[READY]</span>
          </div>

          <div className={styles.terminalPrompt}>
            <span>&gt; AWAITING_INPUT</span>
            <span className={styles.cursor}>_</span>
          </div>

          <motion.div 
            className={styles.contactLinks}
            variants={linkStagger}
          >
            {contacts.map((contact, index) => (
              <motion.div 
                key={index} 
                className={styles.contactLink}
                variants={linkVariants}
              >
                <span className={styles.contactIcon}>{contact.icon}</span>
                <span className={styles.contactPlatform}>{contact.platform}:</span>
                <span className={styles.contactHandle}>{contact.handle}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.button 
            className={styles.ctaButton}
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SEND MESSAGE &gt;
          </motion.button>
        </motion.div>

        <motion.div 
          className={styles.overlays}
          variants={overlayStagger}
        >
          <motion.div variants={overlayItem} className={`${styles.dataCard} ${styles.dataCard1}`}>
            <div className={styles.dataCardHeader}>COMMUNICATION</div>
            <div className={styles.dataCardContent}>INTERFACE ACTIVE</div>
          </motion.div>

          <motion.div variants={overlayItem} className={`${styles.dataCard} ${styles.dataCard2}`}>
            <div className={styles.dataCardHeader}>STATUS</div>
            <div className={styles.dataCardContent}>ALL SYSTEMS GO</div>
          </motion.div>

          <motion.div variants={overlayItem} className={`${styles.barcode} ${styles.barcodeRight}`}></motion.div>

          <motion.div variants={overlayItem} className={styles.wireframeGrid}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star2}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star3}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.star} ${styles.star4}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.hexagon} ${styles.hexagon1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.hexagon} ${styles.hexagon2}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard2}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard3}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.shard} ${styles.shard4}`}></motion.div>

          <motion.div variants={overlayItem} className={`${styles.verticalBar} ${styles.bar1}`}></motion.div>
          <motion.div variants={overlayItem} className={`${styles.verticalBar} ${styles.bar2}`}></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactTerminal;
