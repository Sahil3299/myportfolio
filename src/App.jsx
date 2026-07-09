import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Work from './components/Work';
import Experience from './components/Experience';
import Activity from './components/Activity';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'work', 'experience', 'activity', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Achievements />
        <Work />
        <Experience />
        <Activity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
