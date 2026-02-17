import { useEffect, useState } from 'react';
import { useWisp } from '../hooks/useWisp';
import BlogCard from '../components/BlogCard/BlogCard';
import styles from './Blog.module.css';

const FILTERS = [
  { id: 'all', label: 'Tout afficher' },
  { id: 'dev', label: 'Dev' },
  { id: 'gaming', label: 'Jeux Vidéo' },
  { id: 'ai', label: 'IA' },
  { id: 'other', label: 'Autres' }
];

function Blog() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const { posts, loading, error, totalPages } = useWisp(activeFilter, currentPage, postsPerPage);

  useEffect(() => {
    document.documentElement.setAttribute('data-page', 'blog');
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPaginationNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  return (
    <main className={styles.blogPage}>
      <section className={styles.blogHero}>
        <div className={styles.container}>
          <h1 className={`${styles.blogTitle} ${styles.glitch}`} data-text="BLOG">
            BLOG
          </h1>
          <p className={styles.blogSubtitle}>
            Découvrez mes articles techniques et créatifs
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
          {loading && (
            <div className={styles.loading}>
              <div className={styles.spinner}></div>
              <p>Chargement des articles...</p>
            </div>
          )}

          {error && (
            <div className={styles.error}>
              <p>Erreur lors du chargement des articles.</p>
              <p className={styles.errorDetail}>{error}</p>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className={styles.empty}>
              <p>Aucun article trouvé pour cette catégorie.</p>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className={styles.grid}>
              {posts.map((post, index) => (
                <div
                  key={post.id || index}
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

      {!loading && !error && posts.length > 0 && totalPages > 1 && (
        <section className={styles.blogPagination}>
          <div className={styles.container}>
            <div className={styles.pagination}>
              <button
                className={styles.paginationArrow}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                aria-label="Page précédente"
              >
                ←
              </button>

              {renderPaginationNumbers().map((page, index) => (
                typeof page === 'number' ? (
                  <button
                    key={index}
                    className={`${styles.paginationNumber} ${currentPage === page ? styles.active : ''}`}
                    onClick={() => handlePageChange(page)}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ) : (
                  <span key={index} className={styles.paginationDots}>
                    {page}
                  </span>
                )
              ))}

              <button
                className={styles.paginationArrow}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                aria-label="Page suivante"
              >
                →
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Blog;
