import React from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import AboutSection from '../components/AboutSection';
import Skills from '../components/Skills';

export default function Main() {
  return (
    <div>
      <Navigation />
      <Home />
      <AboutSection />
      <Skills />
    </div>
  );
}
