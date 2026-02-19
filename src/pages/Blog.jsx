import { useEffect, useState } from 'react';
import { useLocalBlog } from '../hooks/useLocalBlog';
import BlogCard from '../components/BlogCard/BlogCard';
import styles from './Blog.module.css';

const FILTERS = [
  { id: 'all', label: 'Tout afficher' },
  { id: 'dev', label: 'Dev' },
  { id: 'jeux-video', label: 'Jeux Video' },
  { id: 'ia', label: 'IA' },
  { id: 'autre', label: 'Autres' }
];

function Blog() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { blogs, getBlogsByCategory } = useLocalBlog();

  useEffect(() => {
    document.documentElement.setAttribute('data-page', 'blog');
  }, []);

  const filteredBlogs = activeFilter === 'all' 
    ? blogs 
    : getBlogsByCategory(activeFilter);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <main className={styles.blogPage}>
      <section className={styles.blogHero}>
        <div className={styles.container}>
          <h1 className={`${styles.blogTitle} ${styles.glitch}`} data-text="BLOG">
            BLOG
          </h1>
          <p className={styles.blogSubtitle}>
            Decouvrez mes articles techniques et creatifs
          </p>
        </div>
      </section>

      <section className={styles.blogFilters}>
        <div className={styles.container}>
          <div className={styles.filterButtons}>
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ''}`}
                onClick={() => handleFilterChange(filter.id)}
                aria-pressed={activeFilter === filter.id}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.blogGrid}>
        <div className={styles.container}>
          {filteredBlogs.length === 0 && (
            <div className={styles.empty}>
              <p>Aucun article trouve pour cette categorie.</p>
            </div>
          )}

          {filteredBlogs.length > 0 && (
            <div className={styles.grid}>
              {filteredBlogs.map((post, index) => (
                <div
                  key={post.slug}
                  className={styles.gridItem}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Blog;
