import { motion } from 'framer-motion';
import { profileData } from '../../../data/aboutData';
import OrganicElement from '../components/OrganicElement';
import styles from './Profile.module.css';

export default function Profile() {
  const { name, role, tagline, bio, location, avatarUrl, status, stats } = profileData;

  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <motion.div
          className={styles.avatarSection}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.avatarWrapper}>
            <img src={avatarUrl} alt={name} className={styles.avatar} />
            <div className={styles.avatarBorder} />
            <div className={styles.statusIndicator}>
              <div className={styles.statusDot} />
              <span>{status.replace(/_/g, ' ')}</span>
            </div>
          </div>
          
          <div className={styles.location}>
            <span className={styles.locationIcon}>📍</span>
            {location}
          </div>
        </motion.div>

        <motion.div
          className={styles.infoSection}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.header}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.role}>{role}</p>
            <p className={styles.tagline}>"{tagline}"</p>
          </div>

          <div className={styles.bio}>
            <div className={styles.bioLabel}>// BIO</div>
            <p>{bio}</p>
          </div>

          <div className={styles.stats}>
            {Object.entries(stats).map(([key, value], index) => (
              <motion.div
                key={key}
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className={styles.statValue}>{value}</div>
                <div className={styles.statLabel}>
                  {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <OrganicElement
        type="jellyfish"
        position={{ right: '5%', top: '30%' }}
        size="medium"
        delay={0.3}
      />
    </section>
  );
}
