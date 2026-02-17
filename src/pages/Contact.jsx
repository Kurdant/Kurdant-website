import { useEffect } from 'react';
import styles from './Contact.module.css'

function Contact() {
  useEffect(() => {
    document.documentElement.setAttribute('data-page', 'contact');
  }, []);

  return (
    <main className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>CONTACT</h1>
        <p>Page Contact avec formulaire - En développement</p>
      </div>
    </main>
  )
}

export default Contact
