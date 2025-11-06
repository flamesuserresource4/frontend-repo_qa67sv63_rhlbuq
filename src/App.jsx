import React from 'react';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Destinations from './components/Destinations';
import ExperiencesAndSeasons from './components/ExperiencesAndSeasons';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="bg-black text-white/70 py-8 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Old Japan Travel. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Welcome />
      <Destinations />
      <ExperiencesAndSeasons />
      <Contact />
      <Footer />
    </div>
  );
}
