import { useParams } from 'react-router-dom'
import styles from './BlogPost.module.css'

function BlogPost() {
  const { slug } = useParams()
  
  return (
    <main className={styles.blogPost}>
      <div className={styles.container}>
        <h1 className={styles.title}>ARTICLE: {slug}</h1>
        <p>Page article de blog - En développement</p>
      </div>
    </main>
  )
}

export default BlogPost
