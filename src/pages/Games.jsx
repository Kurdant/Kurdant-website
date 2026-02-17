import { useEffect } from 'react';
import styles from './Games.module.css'

function Games() {
  useEffect(() => {
    document.documentElement.setAttribute('data-page', 'arcade');
  }, []);

  return (
    <main className={styles.games}>
      <div className={styles.container}>
        <h1 className={styles.title}>ARCADE</h1>
        <p>Page Arcade - En développement</p>
      </div>
    </main>
  )
}

export default Games
