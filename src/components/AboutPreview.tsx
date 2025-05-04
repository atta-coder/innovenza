import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Lightbulb } from 'lucide-react';
<<<<<<< HEAD
import CountUp from 'react-countup';
=======
>>>>>>> 04036188b566433aa7ada813c01c04ccd44c70ec

const AboutPreview = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforming Digital Presence with 
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> Innovation</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            We're a forward-thinking digital marketing agency dedicated to helping businesses achieve their full potential in the digital landscape. Our team combines creativity with data-driven strategies to deliver exceptional results.
          </p>
          <Link 
            to="/about"
            className="inline-flex items-center text-secondary hover:text-secondary-light transition-colors"
          >
            Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-secondary" />
            </div>
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-1">
              <CountUp end={1000} suffix="+" duration={2.5} />
            </h3>
=======
            <h3 className="text-white font-semibold mb-1">1000+</h3>
>>>>>>> 04036188b566433aa7ada813c01c04ccd44c70ec
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-secondary" />
            </div>
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-1">
              <CountUp end={95} suffix="%" duration={2.5} />
            </h3>
=======
            <h3 className="text-white font-semibold mb-1">95%</h3>
>>>>>>> 04036188b566433aa7ada813c01c04ccd44c70ec
            <p className="text-gray-400">Success Rate</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-secondary" />
            </div>
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-1">
              <CountUp end={5} suffix="+" duration={2.5} />
            </h3>
=======
            <h3 className="text-white font-semibold mb-1">5+</h3>
>>>>>>> 04036188b566433aa7ada813c01c04ccd44c70ec
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-secondary" />
            </div>
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-1">
              <CountUp end={200} suffix="+" duration={2.5} />
            </h3>
=======
            <h3 className="text-white font-semibold mb-1">200+</h3>
>>>>>>> 04036188b566433aa7ada813c01c04ccd44c70ec
            <p className="text-gray-400">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;