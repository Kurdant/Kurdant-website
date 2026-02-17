import { motion } from 'framer-motion';
import { skillsData } from '../../../data/aboutData';
import SkillBar from '../components/SkillBar';
import OrganicElement from '../components/OrganicElement';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>// COMPÉTENCES</h2>
          <p className={styles.subtitle}>
            Technologies et outils que je maîtrise pour créer des expériences exceptionnelles
          </p>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className={styles.skillCategory}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <OrganicElement
        type="tentacle"
        position={{ left: '8%', top: '50%' }}
        size="small"
        delay={0.5}
      />
      <OrganicElement
        type="jellyfish"
        position={{ right: '10%', bottom: '20%' }}
        size="small"
        delay={0.8}
      />
    </section>
  );
}
