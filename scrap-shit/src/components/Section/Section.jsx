/*
 * SECTION COMPONENT — Generic, reusable section wrapper
 *
 * LEARNING POINT — children prop:
 *
 * "children" is a special React prop. It represents whatever
 * you put BETWEEN the opening and closing tags of a component:
 *
 *   <Section title="About">
 *     <p>This paragraph is the "children"</p>
 *   </Section>
 *
 * This lets you create "wrapper" components that provide
 * consistent layout/styling while accepting any content.
 * Think of it like a picture frame — same frame, any picture.
 */

import { motion } from 'framer-motion';
import styles from './Section.module.css';

export default function Section({ id, title, alt = false, children }) {
  return (
    <section
      id={id}
      className={`${styles.section} ${alt ? styles.alt : ''}`}
    >
      <div className="container">
        {title && (
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}
