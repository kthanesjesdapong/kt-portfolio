import React from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import AboutSection from '../components/AboutSection';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <div>
      <Navigation />
      <Home />
      <Projects />
      <AboutSection />
      <Skills />

      <Contact />
      <Footer />
    </div>
  );
}
