import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';
import CountUp from 'react-countup';

const AboutHero = () => {
  return (
    <section className="py-20 bg-black relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforming Digital Presence with 
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> Innovation</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            We're a team of digital enthusiasts passionate about helping businesses thrive in the digital age.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-white font-semibold mb-1">
                <CountUp end={1000} suffix="+" duration={2.5} />
              </h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-white font-semibold mb-1">
                <CountUp end={95} suffix="%" duration={2.5} />
              </h3>
              <p className="text-gray-400">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-white font-semibold mb-1">
                <CountUp end={5} suffix="+" duration={2.5} />
              </h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-white font-semibold mb-1">
                <CountUp end={200} suffix="+" duration={2.5} />
              </h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;