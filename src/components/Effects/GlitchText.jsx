import { useState, useEffect } from 'react';
import styles from './GlitchText.module.css';

export default function GlitchText({ text, className = '' }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className={`${styles.glitchText} ${className} ${isGlitching ? styles.glitching : ''}`}
      data-text={text}
    >
      {text}
    </h1>
  );
}
