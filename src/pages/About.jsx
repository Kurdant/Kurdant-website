import { useEffect } from 'react';
import Scanlines from '../components/Effects/Scanlines';
import Grain from '../components/Effects/Grain';
import Hero from './About/sections/Hero';
import Profile from './About/sections/Profile';
import Skills from './About/sections/Skills';
import Timeline from './About/sections/Timeline';
import Passions from './About/sections/Passions';
import CTA from './About/sections/CTA';
import styles from './About.module.css';

function About() {
  useEffect(() => {
    // Set page color theme
    document.documentElement.setAttribute('data-page', 'about');
    
    return () => {
      document.documentElement.removeAttribute('data-page');
    };
  }, []);

  return (
    <main className={styles.about}>
      <Scanlines />
      <Grain />
      
      <Hero />
      <Profile />
      <Skills />
      <Timeline />
      <Passions />
      <CTA />
    </main>
  );
}

export default About;
