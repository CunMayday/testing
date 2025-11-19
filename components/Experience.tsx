import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA, SectionId } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-purdue-black mb-4">Professional Experience</h2>
            <p className="text-purdue-dark max-w-xl text-lg border-l-4 border-purdue-campus pl-4">A journey through academia, research, and industry leadership.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
            {/* Sticky Year Indicator (Desktop) */}
            <div className="hidden lg:block lg:col-span-3">
                 <div className="sticky top-32 space-y-8 border-l-2 border-gray-200 pl-6">
                    {EXPERIENCE_DATA.map((exp, i) => (
                        <a href={`#exp-${i}`} key={i} className="block group">
                            <span className="text-2xl font-bold text-gray-400 group-hover:text-purdue-campus transition-colors block mb-1">{exp.period.split(' - ')[0]}</span>
                            <span className="text-xs text-gray-400 uppercase tracking-widest group-hover:text-purdue-black transition-colors font-semibold">{exp.organization}</span>
                        </a>
                    ))}
                 </div>
            </div>

            {/* Experience Cards */}
            <div className="lg:col-span-9 space-y-12">
                {EXPERIENCE_DATA.map((exp, index) => (
                    <motion.div
                        id={`exp-${index}`}
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-md border border-white/30 rounded-sm p-8 md:p-10 overflow-hidden relative group shadow-glass hover:shadow-glass-hover transition-all duration-500"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purdue-campus/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purdue-campus/10 transition-all duration-500" />

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-2">
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-purdue-black">{exp.title}</h3>
                                <span className="font-mono text-purdue-dark bg-white/20 border border-white/40 px-3 py-1 rounded-sm text-sm font-semibold backdrop-blur-sm">{exp.period}</span>
                            </div>
                            
                            <h4 className="text-xl text-purdue-gray mb-8 font-light border-b border-gray-200 pb-4 inline-block">{exp.organization}</h4>

                            <ul className="space-y-4">
                                {exp.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-purdue-dark">
                                        <CheckCircle2 className="w-5 h-5 text-purdue-campus shrink-0 mt-1" />
                                        <span className="leading-relaxed font-light">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;