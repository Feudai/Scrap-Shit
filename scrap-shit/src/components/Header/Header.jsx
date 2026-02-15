/*
 * HEADER COMPONENT
 *
 * LEARNING POINT:
 * In vanilla, header.js directly manipulated the DOM:
 *   header.classList.toggle('scrolled', ...)
 *
 * In React, you never touch the DOM directly. Instead:
 * 1. A hook (useScrolled) gives you a boolean STATE value
 * 2. The component RE-RENDERS when that state changes
 * 3. The className is computed from the state
 *
 * This is React's core idea: UI = f(state)
 * Your UI is always a function of your current state.
 */

import { useState } from 'react';
import { useScrolled } from '../../hooks/useScrolled';
import styles from './Header.module.css';

export default function Header() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>YourBrand</a>

        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          <li><a href="#work" onClick={() => setMenuOpen(false)}>Work</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}
