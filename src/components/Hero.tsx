import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Users, CheckCircle, ArrowUpRight } from 'lucide-react';
import { useThemeTransition } from '../hooks/useThemeTransition';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const { ref, theme } = useThemeTransition('hero');
  const navigate = useNavigate();

  const benefits = [
    'Boost Your Online Presence',
    'Drive More Conversions',
    'Increase ROI'
  ];

  const statsData = [
    { label: 'Projects Delivered', value: '250+', prefix: '>' },
    { label: 'Client Satisfaction', value: '98%', prefix: '' },
    { label: 'Revenue Growth', value: '150%', prefix: 'Avg.' }
  ];

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-700 bg-background"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-light/20 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="inline-flex items-center px-4 py-2 bg-accent-light/10 rounded-full mb-6">
              <Sparkles size={16} className="text-accent mr-2" />
              <span className="text-sm font-medium text-accent">Trusted by Industry Leaders</span>
            </div>
            
            <h1 className="heading-primary">
              Transform Your
              <br />
              <span className="heading-accent">
                Digital Presence
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-6 leading-relaxed max-w-2xl">
              Elevate your business with our innovative digital solutions. We deliver exceptional results through strategic planning and cutting-edge technology.
            </p>

            <div className="mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center mb-3"
                >
                  <CheckCircle className="text-accent w-5 h-5 mr-2" />
                  <span className="text-text-primary">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="btn-primary flex items-center justify-center group"
              >
                <span>Start Your Journey</span>
                <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center justify-center group"
              >
                View Our Work
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl shadow-2xl overflow-hidden border-2 border-accent/20">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Digital Innovation and Business Growth"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-accent/20 rounded-2xl" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-6">
                {statsData.map((stat, index) => (
                  <React.Fragment key={index}>
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-sm text-accent mr-1">{stat.prefix}</span>
                        <span className="text-3xl font-bold text-accent">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-sm text-text-primary">{stat.label}</p>
                    </div>
                    {index < statsData.length - 1 && (
                      <div className="h-12 w-px bg-gray-200" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center space-x-2">
              <Award className="text-accent w-5 h-5" />
              <span className="text-accent font-medium">Industry Leading Agency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;