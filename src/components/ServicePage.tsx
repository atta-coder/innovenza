import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { services } from '../data/services';

const ServicePage = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="inline-flex items-center text-violet-600 hover:text-violet-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient || 'from-gray-500 to-gray-700'} rounded-lg flex items-center justify-center mb-6`}>
            <div className="text-white">
              {service.icon && React.createElement(service.icon)}
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">{service.detailedDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-violet-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-indigo-500 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${service.gradient || 'from-gray-500 to-gray-700'} flex items-center justify-center text-white font-bold`}>
                      {index + 1}
                    </div>
                    <div className="ml-4 font-semibold">{step}</div>
                  </div>
                  {index < service.process.length - 1 && service.process.length > 1 && (
                    <div className="hidden md:block absolute top-5 left-10 w-full h-px bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToContact}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;
