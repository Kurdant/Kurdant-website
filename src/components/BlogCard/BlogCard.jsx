import { useNavigate } from 'react-router-dom';
import styles from './BlogCard.module.css';

function BlogCard({ post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post.slug}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/blog/${post.slug}`);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <article
      className={styles.blogCard}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="article"
      aria-label={`Article: ${post.title}`}
    >
      <div className={styles.cardImageWrapper}>
        <img
          src={post.image || '/placeholder-blog.svg'}
          alt={post.title}
          className={styles.cardImage}
          loading="lazy"
        />
        <div className={styles.imageOverlay}></div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{post.title}</h3>
        
        <p className={styles.cardDescription}>
          {post.description || post.excerpt || 'Découvrez cet article...'}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className={styles.cardTags}>
            {post.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className={styles.cardFooter}>
          <span className={styles.cardDate}>
            {formatDate(post.publishedAt || post.createdAt)}
          </span>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
