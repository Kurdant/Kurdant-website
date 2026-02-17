import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.dataCard}>
          <p className={styles.copyright}>© 2026 KURDANT DEV - ALL RIGHTS RESERVED</p>
          <div className={styles.socials}>
            <a href="https://github.com/hugo-kurdant" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a href="https://linkedin.com/in/hugo-kurdant" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a href="https://twitter.com/HugoKurdant" target="_blank" rel="noopener noreferrer">TWITTER</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
