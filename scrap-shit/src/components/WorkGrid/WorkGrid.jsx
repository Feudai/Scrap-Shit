/*
 * WORKGRID COMPONENT
 *
 * LEARNING POINT — Rendering lists with .map():
 *
 * In vanilla, you either hardcoded each card in HTML,
 * or did innerHTML/createElement in JS. Both are brittle.
 *
 * In React, you store data in an array and .map() over it
 * to produce components. Adding a new project = adding an
 * object to the array. The UI updates automatically.
 *
 * The "key" prop is required by React when rendering lists.
 * It helps React track which items changed, were added, or
 * removed — so it can update the DOM efficiently instead
 * of re-rendering everything.
 */

import Card from '../Card/Card';
import styles from './WorkGrid.module.css';

// This data could come from a CMS, API, or JSON file later
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Brief description of this project.',
    image: '/placeholder.svg',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Brief description of this project.',
    image: '/placeholder.svg',
  },
  // Add more projects here — the grid handles layout automatically
];

export default function WorkGrid() {
  return (
    <section className={styles.section} id="work">
      <div className="container">
        <h2 className={styles.title}>Selected Work</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
