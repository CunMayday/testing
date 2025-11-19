import React from 'react';
import { motion } from 'framer-motion';
import { AWARDS_DATA, LEADERSHIP_ROLES, SectionId } from '../constants';
import { Award, Star, Trophy, Briefcase } from 'lucide-react';

const getIcon = (type: string) => {
  switch (type) {
    case 'star': return <Star className="w-6 h-6" />;
    case 'trophy': return <Trophy className="w-6 h-6" />;
    default: return <Award className="w-6 h-6" />;
  }
};

const Awards: React.FC = () => {
  return (
    <section id={SectionId.AWARDS} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-purdue-black mb-4">Awards & Recognition</h2>
          <div className="h-1 w-24 bg-purdue-campus rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {AWARDS_DATA.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/30 rounded-lg p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-glass hover:shadow-glass-hover hover:-translate-y-1"
            >
              {/* Large background icon */}
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity group-hover:scale-110 duration-700 text-purdue-black transform rotate-12">
                 {getIcon(award.iconType)}
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-md bg-white/20 text-purdue-campus border border-white/40 group-hover:bg-purdue-campus group-hover:text-white transition-all duration-500 shadow-sm backdrop-blur-md">
                  {getIcon(award.iconType)}
                </div>
                <div>
                  <span className="text-xs font-bold text-purdue-campus bg-purdue-campus/10 px-2 py-1 rounded mb-2 inline-block border border-purdue-campus/20">{award.year}</span>
                  <h3 className="text-xl font-bold text-purdue-black leading-tight group-hover:text-purdue-campus transition-colors">{award.title}</h3>
                </div>
              </div>
              
              <p className="text-sm font-bold text-purdue-gray mb-2 uppercase tracking-wide border-l-2 border-purdue-campus pl-2">{award.organization}</p>
              <p className="text-purdue-dark leading-relaxed font-light">{award.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-purdue-black/95 backdrop-blur-md rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative gold sheen on dark card */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purdue-campus/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purdue-campus via-purdue-athletic to-purdue-campus"></div>

          <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3 text-white relative z-10">
            <Briefcase className="text-purdue-campus" />
            Leadership Roles
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {LEADERSHIP_ROLES.map((role, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="h-full w-1 bg-gray-700 group-hover:bg-purdue-campus transition-colors duration-500 rounded-full" />
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-purdue-campus transition-colors">{role.title}</h4>
                  <p className="text-sm text-purdue-athletic mb-1 uppercase tracking-wider">{role.category}</p>
                  <p className="text-gray-400">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;