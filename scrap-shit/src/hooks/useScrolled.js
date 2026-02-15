/*
 * useScrolled — detects if page is scrolled past a threshold
 *
 * Replaces the vanilla header.js module.
 * Instead of directly toggling a class on a DOM element,
 * this returns a boolean — the component decides what to
 * do with it (add a class, change styles, etc.)
 */

import { useEffect, useState } from 'react';

export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // check on mount

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
