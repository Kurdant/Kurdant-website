import { useState, useEffect } from 'react';
import Hero from '../components/sections/Hero';
import ContentOverlay from '../components/ContentOverlay/ContentOverlay';
import styles from './Home.module.css';

function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-page', 'home');
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.home}>
      <Hero />
      <ContentOverlay scrolled={scrolled} />
    </main>
  );
}

export default Home;
