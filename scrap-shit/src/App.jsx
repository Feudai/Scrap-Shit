/*
 * APP.JSX — Root component
 *
 * In vanilla, index.html held all sections inline.
 * In React, each section becomes its own component.
 * This file is just the "layout" — it decides WHAT
 * shows up and in WHAT ORDER. Nothing else.
 */

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WorkGrid from './components/WorkGrid/WorkGrid';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <WorkGrid />

        <Section id="about" title="About" alt>
          <p>Your story goes here.</p>
        </Section>

        <Section id="contact" title="Get in Touch">
          <a href="mailto:hello@yourdomain.com" className="btn btn--primary">
            Say Hello
          </a>
        </Section>
      </main>

      <Footer />
    </>
  );
}

export default App;
