import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { useThemeTransition } from '../hooks/useThemeTransition';
import { caseStudies } from '../data/caseStudies';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const { ref, theme, inView } = useThemeTransition('caseStudies');

  return (
    <section ref={ref} id="case-studies" className={`section-padding relative overflow-hidden ${theme.background} theme-transition`}>
      <div className="absolute inset-0">
        <div className="absolute top-40 -right-20 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute bottom-40 -left-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-violet-100 rounded-full text-violet-600 font-medium text-sm mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client
              <span className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}> Case Studies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real clients. Discover how we drive growth and success.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.accent}/20`} />
                </div>
                
                <div className="p-8 lg:p-12">
                  <span className="inline-block px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-sm font-medium mb-4">
                    {study.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-8">{study.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <div className="text-violet-600">{metric.icon}</div>
                        </div>
                        <div className="text-2xl font-bold text-violet-600 mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/case-studies/${study.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${theme.accent} text-white rounded-full group`}
                    >
                      Read Case Study
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;