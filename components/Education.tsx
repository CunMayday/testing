import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, SectionId } from '../constants';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id={SectionId.EDUCATION} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
        >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-purdue-black mb-4">Education</h2>
            <div className="h-1 w-24 bg-purdue-campus rounded-full mx-auto" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purdue-gray/30 to-transparent transform md:-translate-x-1/2" />

            <div className="space-y-12">
                {EDUCATION_DATA.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`relative flex flex-col md:flex-row items-center ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        {/* Spacer for timeline layout */}
                        <div className="flex-1 w-full" />
                        
                        {/* Center Dot */}
                        <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-white border-4 border-purdue-campus rounded-full flex items-center justify-center z-10 transform -translate-x-1/2 md:translate-x-[-50%] shadow-md">
                            <div className="w-2 h-2 bg-purdue-black rounded-full" />
                        </div>

                        {/* Content Card */}
                        <div className="flex-1 w-full pl-8 md:pl-0 md:px-8">
                            <div className="bg-white/5 backdrop-blur-md border border-white/30 shadow-glass hover:shadow-glass-hover rounded-sm p-6 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purdue-gray/20 group-hover:bg-purdue-campus transition-all duration-300"></div>
                                
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-xl font-bold text-purdue-black group-hover:text-purdue-campus transition-colors">{edu.degree}</h3>
                                    <GraduationCap className="text-gray-400 group-hover:text-purdue-campus transition-colors w-5 h-5" />
                                </div>
                                <p className="text-lg font-semibold text-purdue-dark mb-4">{edu.school}</p>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4 text-purdue-campus" />
                                        {edu.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4 text-purdue-campus" />
                                        {edu.years}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;