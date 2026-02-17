import { useParams } from 'react-router-dom'
import styles from './GamePlay.module.css'

function GamePlay() {
  const { game } = useParams()
  
  return (
    <main className={styles.gamePlay}>
      <div className={styles.container}>
        <h1 className={styles.title}>JEU: {game}</h1>
        <p>Page jeu individuel - En développement</p>
      </div>
    </main>
  )
}

export default GamePlay
