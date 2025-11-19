import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_EMAIL, EXPERTISE_TAGS, SectionId } from '../constants';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 relative z-10 overflow-hidden">
      {/* Footer Dark Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-purdue-black pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="bg-white border border-gray-200 rounded-[2rem] p-12 md:p-20 text-center overflow-hidden relative shadow-2xl">
            {/* Inner Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-purdue-campus/5 blur-[80px] rounded-full" />
            
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <h2 className="text-4xl md:text-6xl font-display font-bold text-purdue-black mb-8">Let's Connect</h2>
                <p className="text-xl text-purdue-dark mb-12 max-w-2xl mx-auto">
                    Open to collaboration, research opportunities, and academic discussions.
                </p>

                <a 
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-sm bg-purdue-black text-white font-bold text-lg hover:bg-purdue-campus hover:text-white hover:scale-105 transition-all duration-300 shadow-xl uppercase tracking-wider"
                >
                    <Mail className="w-5 h-5" />
                    {CONTACT_EMAIL}
                </a>

                <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                    {EXPERTISE_TAGS.map((tag, index) => (
                        <span 
                            key={index}
                            className="px-4 py-2 rounded-sm bg-gray-50 border border-gray-200 text-gray-600 text-sm hover:border-purdue-campus hover:text-purdue-campus transition-colors cursor-default uppercase tracking-wider text-xs font-semibold"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>

        {/* Actual Footer Links (Sitting on the black bg) */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="flex gap-6">
                <a href="#" className="p-3 rounded-sm bg-white/10 hover:bg-purdue-campus hover:text-white text-gray-400 transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-sm bg-white/10 hover:bg-purdue-campus hover:text-white text-gray-400 transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-sm bg-white/10 hover:bg-purdue-campus hover:text-white text-gray-400 transition-all duration-300">
                    <Github className="w-5 h-5" />
                </a>
                </div>
                
                <div className="text-gray-400 text-sm font-medium">
                <p>&copy; 2025 Cuneyt Altinoz. All rights reserved.</p>
                </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;