import { motion } from 'framer-motion';
import IdentityCardSimple from '../IdentityCard/IdentityCardSimple';
import SkillsGrid from '../SkillsGrid/SkillsGrid';
import SocialLinks from '../SocialLinks/SocialLinks';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import QuickContact from '../QuickContact/QuickContact';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import styles from './ContentOverlay.module.css';

const skills = [
  'React',
  'JavaScript',
  'CSS',
  'Canvas',
  'Git',
  'Figma',
  'Framer Motion',
  'Vite',
  'Node.js'
];

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/hugo-kurdant',
    icon: '🐙'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/kurdant',
    icon: '📷'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hugo-kurdant',
    icon: '💼'
  }
];

const navItems = [
  {
    label: 'About',
    description: 'En savoir plus',
    path: '/about'
  },
  {
    label: 'Projects',
    description: 'Mes réalisations',
    path: '/projects'
  },
  {
    label: 'Blog',
    description: 'Articles techniques',
    path: '/blog'
  },
  {
    label: 'Games',
    description: 'Mini-jeux arcade',
    path: '/games'
  },
  {
    label: 'Contact',
    description: 'Me contacter',
    path: '/contact'
  }
];

const slideUpVariants = {
  hidden: { 
    y: '100vh', 
    opacity: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      delay: custom * 0.2
    }
  })
};

function ContentOverlay({ scrolled }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      className={styles.overlay}
      initial="hidden"
      animate={scrolled ? "visible" : "hidden"}
      variants={slideUpVariants}
    >
      <div className={styles.scanlines}></div>
      <div className={styles.grain}></div>
      
      <div className={styles.container}>
        <div className={styles.screen}>
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <IdentityCardSimple />
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <SkillsGrid skills={skills} />
          </motion.div>
        </div>

        <div className={styles.screen}>
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <SocialLinks links={socialLinks} />
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <NavigationMenu items={navItems} />
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <QuickContact email="contact@kurdant.fr" />
          </motion.div>

          <ScrollIndicator 
            direction="up" 
            label="UP" 
            onClick={handleScrollToTop}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ContentOverlay;
