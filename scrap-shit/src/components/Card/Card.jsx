/*
 * CARD COMPONENT
 *
 * LEARNING POINT — Props:
 *
 * In vanilla, each card was copy-pasted HTML with different
 * text hardcoded in. If you wanted 10 cards, you wrote 10
 * blocks of identical markup.
 *
 * In React, a component is a FUNCTION. You pass data in
 * as "props" (arguments), and it returns UI. One component,
 * infinite cards — just pass different data.
 *
 *   <Card title="Project A" description="..." image="..." />
 *   <Card title="Project B" description="..." image="..." />
 *
 * Same component, different data. This is why React scales.
 */

import { motion } from 'framer-motion';
import styles from './Card.module.css';

export default function Card({ title, description, image, index = 0 }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1, // stagger based on position
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.media}>
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
      </div>
    </motion.article>
  );
}
