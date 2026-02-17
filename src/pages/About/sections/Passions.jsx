import { motion } from 'framer-motion';
import { passionsData } from '../../../data/aboutData';
import DataCard from '../components/DataCard';
import OrganicElement from '../components/OrganicElement';
import styles from './Passions.module.css';

export default function Passions() {
  return (
    <section className={styles.passions}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>// PASSIONS</h2>
          <p className={styles.subtitle}>
            Ce qui m'anime et nourrit ma créativité au quotidien
          </p>
        </motion.div>

        <div className={styles.grid}>
          {passionsData.map((passion, index) => (
            <DataCard
              key={passion.title}
              icon={passion.icon}
              title={passion.title}
              description={passion.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>

      <OrganicElement
        type="jellyfish"
        position={{ left: '12%', top: '30%' }}
        size="medium"
        delay={0.4}
      />
      <OrganicElement
        type="tentacle"
        position={{ right: '15%', bottom: '25%' }}
        size="small"
        delay={0.7}
      />
    </section>
  );
}
