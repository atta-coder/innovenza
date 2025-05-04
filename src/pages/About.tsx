import React from 'react';
import AboutHero from '../components/AboutHero';
import ContactCTA from '../components/ContactCTA';
import BackButton from '../components/BackButton';
import { Rocket, Target, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <AboutHero />
      
      <div className="container mx-auto px-6 py-20">
        <BackButton />
        
        {/* Who We Are */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
              <p className="text-gray-400 leading-relaxed">
                Innovenza is a forward-thinking digital marketing agency dedicated to helping businesses achieve their full potential in the digital landscape. Founded with a vision to bridge the gap between traditional and digital marketing, we've grown into a team of passionate experts who live and breathe digital innovation.
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
              <p className="text-gray-400 leading-relaxed">
                Our team combines creativity with data-driven strategies to deliver exceptional results. We understand that each business is unique, which is why we create customized solutions that align with your specific goals and challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
              <div className="flex items-center mb-6">
                <Rocket className="h-8 w-8 text-secondary mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance online presence, and create meaningful connections with their audience. We're committed to delivering measurable results through strategic, data-driven approaches.
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-secondary mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To be the leading force in digital transformation, setting new standards in digital marketing excellence and helping businesses thrive in an ever-evolving digital landscape. We envision a future where every business can harness the full potential of digital marketing.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Client Focus",
                description: "Your success is our success. We prioritize understanding and meeting your unique needs."
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Passion",
                description: "We're passionate about digital marketing and it shows in everything we do."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Innovation",
                description: "We stay ahead of digital trends to deliver cutting-edge solutions."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Integrity",
                description: "We believe in transparency and ethical practices in all our operations."
              }
            ].map((value, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/5">
                <div className="text-secondary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <ContactCTA />
      </div>
    </div>
  );
};

export default About;