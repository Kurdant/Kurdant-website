import { motion } from 'framer-motion';
import GlitchText from '../../../components/Effects/GlitchText';
import OrganicElement from '../components/OrganicElement';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.div
          className={styles.glitchContainer}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GlitchText text="ABOUT" className={styles.title} />
        </motion.div>
        
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          DÉCOUVREZ QUI SE CACHE DERRIÈRE LE CODE
        </motion.p>

        <motion.div
          className={styles.dataStream}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span className={styles.dataText}>
            [LOADING PROFILE DATA...] ▓▓▓▓▓▓▓░░░ 70%
          </span>
        </motion.div>
      </div>

      {/* Organic elements */}
      <OrganicElement
        type="jellyfish"
        position={{ left: '10%', top: '20%' }}
        size="large"
        delay={0.2}
      />
      <OrganicElement
        type="jellyfish"
        position={{ right: '15%', top: '40%' }}
        size="medium"
        delay={0.5}
      />
      <OrganicElement
        type="tentacle"
        position={{ left: '5%', bottom: '10%' }}
        size="small"
        delay={0.8}
      />
      
      <div className={styles.scrollIndicator}>
        <motion.div
          className={styles.scrollArrow}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
