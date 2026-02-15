/*
 * HERO COMPONENT
 *
 * LEARNING POINT — Framer Motion basics:
 *
 * In vanilla, you had to:
 *   1. Add class "reveal" in HTML
 *   2. Write CSS for .reveal and .reveal.is-visible
 *   3. Set up IntersectionObserver in JS
 *   4. Toggle classes manually
 *
 * With Framer Motion, you replace <div> with <motion.div>
 * and declare the animation right on the element:
 *
 *   <motion.h1
 *     initial={{ opacity: 0, y: 30 }}    ← starting state
 *     animate={{ opacity: 1, y: 0 }}     ← end state
 *     transition={{ duration: 0.8 }}      ← how to get there
 *   />
 *
 * That's it. No CSS classes, no observer, no manual DOM work.
 * React + Framer Motion = declare what you want, not how to do it.
 */

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

// Animation variants — define once, reuse across elements
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1], // same as --ease-out
    },
  }),
};

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <motion.h1
          className={styles.title}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Your Creative<br />Headline Here
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          A short tagline that captures the essence of your project.
        </motion.p>

        <motion.a
          href="#work"
          className="btn btn--primary"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Explore
        </motion.a>
      </div>
    </section>
  );
}
