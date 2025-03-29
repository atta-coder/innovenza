import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useThemeTransition } from '../hooks/useThemeTransition';
import { projects } from '../data/projects';

const Portfolio = () => {
  const { ref, theme, inView } = useThemeTransition('portfolio');

  return (
    <section ref={ref} id="portfolio" className={`section-padding ${theme.background} theme-transition`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-violet-100 rounded-full text-violet-600 font-medium text-sm mb-4">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured
              <span className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}> Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we've helped businesses achieve their digital goals
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className={`text-violet-300 font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100`}>
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300 hover:text-violet-300"
                  >
                    View Project
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;