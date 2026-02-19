import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocalBlog } from '../hooks/useLocalBlog';
import styles from './BlogPost.module.css';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getBlogBySlug } = useLocalBlog();
  
  const post = getBlogBySlug(slug);

  useEffect(() => {
    document.documentElement.setAttribute('data-page', 'blog-post');
  }, []);

  useEffect(() => {
    if (!post) {
      const timer = setTimeout(() => navigate('/blog'), 2000);
      return () => clearTimeout(timer);
    }
  }, [post, navigate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  if (!post) {
    return (
      <main className={styles.blogPost}>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h1 className={styles.notFoundTitle}>Article introuvable</h1>
            <p className={styles.notFoundText}>Redirection vers le blog...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.blogPost}>
      <article className={styles.container}>
        <header className={styles.header}>
          <div className={styles.metadata}>
            <span className={styles.date}>{formatDate(post.date)}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.category}>{post.category}</span>
          </div>
          
          <h1 className={styles.title}>{post.title}</h1>
          
          {post.excerpt && (
            <p className={styles.excerpt}>{post.excerpt}</p>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className={styles.content}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <footer className={styles.footer}>
          <button 
            className={styles.backButton}
            onClick={() => navigate('/blog')}
            aria-label="Retour au blog"
          >
            ← Retour au blog
          </button>
        </footer>
      </article>
    </main>
  );
}

export default BlogPost;
