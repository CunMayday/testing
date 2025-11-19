import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { List, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-white/30 backdrop-blur-xl border-white/40 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-display font-bold text-xl md:text-2xl tracking-tighter text-purdue-black cursor-pointer flex items-center gap-3" onClick={() => scrollToSection('home')}>
          <div className="w-10 h-10 bg-purdue-black rounded-sm flex items-center justify-center text-purdue-campus font-bold text-xl shadow-md">P</div>
          <div className="flex flex-col leading-none">
            <span className="tracking-widest uppercase text-xs font-bold text-purdue-campus">Purdue Global</span>
            <span className="font-bold text-sm text-purdue-black">Prof. Altinoz</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-semibold text-purdue-dark hover:text-purdue-campus transition-colors relative group uppercase tracking-wider"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purdue-campus transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-purdue-black p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <List />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-lg font-bold text-purdue-dark hover:text-purdue-campus transition-colors uppercase tracking-wider"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;