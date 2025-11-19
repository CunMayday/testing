import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA, SectionId } from '../constants';
import { ExternalLink, Cpu } from 'lucide-react';

const Focus: React.FC = () => {
  return (
    <section id={SectionId.FOCUS} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-purdue-black mb-4">Current Focus</h2>
            <div className="flex items-center gap-3 text-purdue-campus text-xl mb-2">
              <Cpu className="animate-pulse" />
              <span className="font-semibold tracking-wide">AI Systems for Education</span>
            </div>
            <p className="text-purdue-dark max-w-2xl text-lg border-l-4 border-purdue-campus/30 pl-4">
              Evaluation of developing AI systems for education - use of Gems, GPTs and webapps coded with AI assistance.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-full"
            >
              <div className="relative h-full flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/30 rounded-sm p-8 hover:shadow-glass-hover hover:border-purdue-campus/30 transition-all duration-500">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-sm bg-white/20 flex items-center justify-center group-hover:bg-purdue-campus transition-colors duration-300 border border-white/40 group-hover:border-purdue-campus backdrop-blur-sm">
                       <span className="font-mono text-purdue-dark font-bold group-hover:text-white transition-colors">0{index + 1}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purdue-campus transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-purdue-black mb-4 group-hover:text-purdue-campus transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-purdue-dark mb-8 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white/20 border border-white/40 text-center text-sm font-bold uppercase tracking-widest text-purdue-dark hover:bg-purdue-black hover:text-white hover:border-purdue-black transition-all duration-300 rounded-sm backdrop-blur-sm"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Focus;