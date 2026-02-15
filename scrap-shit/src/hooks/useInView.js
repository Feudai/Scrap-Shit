/*
 * useScrollReveal — custom React hook
 *
 * LEARNING POINT:
 * In vanilla, scroll.js was a standalone module that queried
 * the DOM directly with querySelectorAll('.reveal').
 *
 * In React, you DON'T query the DOM directly. Instead, you
 * use a "ref" — a reference React gives you to a DOM element.
 * This hook takes a ref and returns whether it's in view.
 *
 * Framer Motion's <motion.div> handles this even more elegantly
 * (see Hero.jsx), but this hook shows you the underlying pattern
 * so you understand what's happening under the hood.
 */

import { useEffect, useState, useRef } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element); // animate once
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    // Cleanup: if the component unmounts, stop observing
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView];
}
