import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Awards from './components/Awards';
import Focus from './components/Focus';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Background from './components/Background';

const App: React.FC = () => {
  return (
    <main className="min-h-screen relative antialiased selection:bg-purdue-campus selection:text-white">
      <Background />
      <Navbar />
      <div className="relative z-10 flex flex-col gap-12">
        <Hero />
        <Awards />
        <Focus />
        <Education />
        <Experience />
        <Contact />
      </div>
    </main>
  );
};

export default App;