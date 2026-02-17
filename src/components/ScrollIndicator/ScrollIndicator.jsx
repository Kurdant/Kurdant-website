import styles from './ScrollIndicator.module.css';

function ScrollIndicator({ direction = 'down', label, onClick }) {
  const arrow = direction === 'down' ? '↓' : '↑';
  const ariaLabel = direction === 'down' 
    ? 'Scroll to next section' 
    : 'Scroll to top';

  return (
    <div 
      className={`${styles.indicator} ${styles[direction]}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      aria-label={ariaLabel}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={styles.text}>{label}</div>
      <div className={styles.arrow}>{arrow}</div>
    </div>
  );
}

export default ScrollIndicator;
