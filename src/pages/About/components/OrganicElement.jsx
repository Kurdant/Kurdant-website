import { motion } from 'framer-motion';
import styles from './OrganicElement.module.css';

export default function OrganicElement({ type = 'jellyfish', position, size = 'medium', delay = 0 }) {
  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large
  };

  const positionStyle = position ? {
    left: position.left,
    top: position.top,
    right: position.right,
    bottom: position.bottom
  } : {};

  return (
    <motion.div
      className={`${styles.organicElement} ${sizeClasses[size]}`}
      style={positionStyle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay, ease: 'easeOut' }}
    >
      {type === 'jellyfish' && (
        <svg viewBox="0 0 200 300" className={styles.svg}>
          <defs>
            <filter id={`glow-${delay}`}>
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <radialGradient id={`gradient-${delay}`}>
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.2"/>
            </radialGradient>
          </defs>
          
          {/* Jellyfish body */}
          <motion.ellipse
            cx="100"
            cy="80"
            rx="60"
            ry="50"
            fill={`url(#gradient-${delay})`}
            stroke="var(--color-primary)"
            strokeWidth="2"
            filter={`url(#glow-${delay})`}
            animate={{
              ry: [50, 55, 50],
              rx: [60, 58, 60]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          {/* Tentacles */}
          {[...Array(8)].map((_, i) => {
            const x = 30 + i * 12;
            const curve = i % 2 === 0 ? 20 : -20;
            return (
              <motion.path
                key={i}
                d={`M ${x + 70} 120 Q ${x + 70 + curve} 180, ${x + 70} 250`}
                stroke="var(--color-primary)"
                strokeWidth="2"
                fill="none"
                filter={`url(#glow-${delay})`}
                opacity="0.4"
                animate={{
                  d: [
                    `M ${x + 70} 120 Q ${x + 70 + curve} 180, ${x + 70} 250`,
                    `M ${x + 70} 120 Q ${x + 70 - curve} 180, ${x + 70 + 10} 250`,
                    `M ${x + 70} 120 Q ${x + 70 + curve} 180, ${x + 70} 250`
                  ]
                }}
                transition={{
                  duration: 5 + i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            );
          })}
          
          {/* Inner details */}
          <motion.circle
            cx="100"
            cy="70"
            r="15"
            fill="var(--color-primary)"
            opacity="0.4"
            animate={{
              opacity: [0.4, 0.7, 0.4],
              r: [15, 18, 15]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </svg>
      )}
      
      {type === 'tentacle' && (
        <svg viewBox="0 0 100 200" className={styles.svg}>
          <defs>
            <filter id={`tentacle-glow-${delay}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <motion.path
            d="M 50 0 L 50 200"
            stroke="var(--color-primary)"
            strokeWidth="3"
            fill="none"
            filter={`url(#tentacle-glow-${delay})`}
            opacity="0.3"
            animate={{
              d: [
                "M 50 0 L 50 200",
                "M 50 0 L 52 200",
                "M 50 0 L 50 200"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          {/* Suckers */}
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={i}
              cx={i % 2 === 0 ? 45 : 55}
              cy={30 + i * 30}
              r="4"
              fill="var(--color-primary)"
              opacity="0.6"
              animate={{
                opacity: [0.6, 0.9, 0.6],
                r: [4, 5, 4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut'
              }}
            />
          ))}
        </svg>
      )}
    </motion.div>
  );
}
