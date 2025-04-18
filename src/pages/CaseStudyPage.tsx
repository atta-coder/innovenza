import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const CaseStudyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseStudy = caseStudies.find(cs => cs.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Case Study Not Found</h2>
          <p className="text-gray-600 mb-6">The case study you're looking for doesn't exist.</p>
          <Link 
            to="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/#case-studies');
            }}
            className="inline-flex items-center text-violet-600 hover:text-violet-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/#case-studies');
          }}
          className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[21/9] mb-8">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-500/20 rounded-2xl" />
          </div>

          <span className="inline-block px-4 py-2 bg-violet-100 rounded-full text-violet-600 font-medium text-sm mb-4">
            {caseStudy.category}
          </span>
          
          <h1 className="text-4xl font-bold mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{caseStudy.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-12">
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="text-violet-600">{metric.icon}</div>
                </div>
                <div className="text-2xl font-bold text-violet-600 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-gray-600">{caseStudy.challenge}</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-gray-600">{caseStudy.solution}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-violet-600 to-indigo-500 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Ready to achieve similar results?</h2>
            <p className="mb-8">Let us help you transform your business with our proven strategies and expertise.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-violet-600 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyPage