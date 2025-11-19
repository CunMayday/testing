import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { SectionId } from '../constants';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id={SectionId.HERO}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8 z-10"
        >
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-purdue-black leading-[0.9]"
            >
              CUNEYT
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purdue-campus via-[#D4A024] to-purdue-campus animate-shimmer bg-[length:200%_auto]">
                ALTINOZ
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block px-6 py-3 rounded-sm bg-white/10 backdrop-blur-md border border-white/40 border-l-4 border-l-purdue-campus shadow-sm"
          >
            <p className="text-xl md:text-2xl font-light text-purdue-dark">
              Professor at <span className="font-bold text-purdue-black">Purdue University Global</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo(SectionId.CONTACT)}
              className="px-8 py-4 rounded-sm bg-purdue-black text-purdue-campus font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 uppercase tracking-wider"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo(SectionId.AWARDS)}
              className="px-8 py-4 rounded-sm bg-white/10 backdrop-blur-sm border border-purdue-gray/30 text-purdue-dark font-medium text-lg hover:border-purdue-campus hover:text-purdue-campus transition-all duration-300 flex items-center gap-2 uppercase tracking-wider shadow-sm hover:bg-white/20"
            >
              Learn More <BookOpen className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Quick Stats / Right Side Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 lg:flex justify-end"
        >
          <div className="relative p-1">
            {/* Main Glass Card - Reduced opacity to bg-white/5 for maximum transparency */}
            <div className="relative bg-white/5 backdrop-blur-md rounded-xl p-8 md:p-10 border border-white/30 shadow-[0_8px_32px_0_rgba(194,142,14,0.1)] max-w-md hover:backdrop-blur-lg transition-all duration-500">
              
              <h3 className="text-2xl font-display font-bold mb-8 text-purdue-black border-b border-purdue-gray/20 pb-4">
                Welcome students.<br /><span className="text-purdue-campus">You are in good hands!</span>
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-sm bg-white/20 border border-white/40 flex items-center justify-center text-purdue-campus group-hover:bg-purdue-campus group-hover:text-white transition-all duration-300 shadow-inner backdrop-blur-sm">
                    <span className="text-2xl font-bold">16+</span>
                  </div>
                  <div>
                    <p className="text-xs text-purdue-gray uppercase tracking-widest font-semibold">Dedication</p>
                    <p className="font-bold text-lg text-purdue-dark">Years at Purdue</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-sm bg-white/20 border border-white/40 flex items-center justify-center text-purdue-campus group-hover:bg-purdue-campus group-hover:text-white transition-all duration-300 shadow-inner backdrop-blur-sm">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-xs text-purdue-gray uppercase tracking-widest font-semibold">Expertise</p>
                    <p className="font-bold text-lg text-purdue-dark">Advanced Degrees</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-sm bg-white/20 border border-white/40 flex items-center justify-center text-purdue-campus group-hover:bg-purdue-campus group-hover:text-white transition-all duration-300 shadow-inner backdrop-blur-sm">
                    <span className="text-2xl font-bold">5+</span>
                  </div>
                  <div>
                    <p className="text-xs text-purdue-gray uppercase tracking-widest font-semibold">Recognition</p>
                    <p className="font-bold text-lg text-purdue-dark">Major Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;