import React from 'react';
import { Search, Share2, Target, PenTool, Code, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Search className="h-8 w-8" />,
    title: 'Search Engine Optimization',
    description: 'Boost your online visibility and drive organic traffic with our data-driven SEO strategies.',
    link: '/services/seo'
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: 'Social Media Management',
    description: 'Engage your audience and build brand awareness across all social platforms.',
    link: '/services/social-media'
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'PPC Advertising',
    description: 'Drive targeted traffic and maximize ROI with our expert PPC campaign management.',
    link: '/services/ppc'
  },
  {
    icon: <Facebook className="h-8 w-8" />,
    title: 'Meta Ads',
    description: 'Reach your ideal customers on Facebook & Instagram with targeted advertising campaigns.',
    link: '/services/meta-ads'
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: 'Content Marketing',
    description: 'Create compelling content that resonates with your audience and drives conversions.',
    link: '/services/content'
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Build stunning, responsive websites that deliver exceptional user experiences.',
    link: '/services/web-development'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 relative">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-black/50 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-4">
              Our Services
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-secondary-light to-secondary bg-clip-text text-transparent">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We offer comprehensive digital marketing solutions to help your business grow and succeed in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/5 hover:border-secondary/20 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-secondary mb-6 group-hover:scale-110 group-hover:text-secondary-light transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-secondary-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;