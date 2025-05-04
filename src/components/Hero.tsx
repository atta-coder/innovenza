import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer, Users, TrendingUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-black to-black z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80')] bg-cover bg-center opacity-10 z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Welcome Message */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm">
              Welcome to Innovenza – Your Growth Partner in the Digital World
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Digital <br />
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Presence & Growth
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            We combine creativity, data, and technology to help businesses thrive in the digital age. 
            From SEO to social media, we deliver results that matter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16">
            <Link
              to="/contact"
              className="group bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Get Started 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="group border-2 border-secondary/30 text-white px-8 py-4 rounded-full hover:border-secondary transition-all flex items-center justify-center"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="flex items-center justify-center space-x-4 text-gray-300 bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
              <MousePointer className="h-8 w-8 text-secondary" />
              <div>
                <h3 className="font-semibold text-white text-2xl">
                  <CountUp end={98} suffix="%" duration={2.5} />
                </h3>
                <p>Click-through Rate</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 text-gray-300 bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
              <Users className="h-8 w-8 text-secondary" />
              <div>
                <h3 className="font-semibold text-white text-2xl">
                  <CountUp end={1000} suffix="+" duration={2.5} />
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 text-gray-300 bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
              <TrendingUp className="h-8 w-8 text-secondary" />
              <div>
                <h3 className="font-semibold text-white text-2xl">
                  <CountUp end={300} suffix="%" duration={2.5} />
                </h3>
                <p>Average ROI</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center"
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </div>
  );
};

export default Hero;