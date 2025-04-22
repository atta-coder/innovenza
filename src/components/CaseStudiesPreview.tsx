import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: "E-commerce Revenue Growth",
    description: "How we helped an online retailer achieve 300% growth in revenue through strategic SEO and PPC campaigns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    results: ["300% Revenue Growth", "150% Organic Traffic Increase", "45% Lower CPA"]
  },
  {
    title: "B2B Lead Generation",
    description: "Generating qualified B2B leads through content marketing and social media strategy.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    results: ["200% More Leads", "45% Higher Conversion Rate", "60% Lower CPL"]
  }
];

const CaseStudiesPreview = () => {
  return (
    <section className="py-20 bg-black relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-black/50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-4">
              Case Studies
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-secondary-light to-secondary bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Discover how we've helped businesses achieve their digital marketing goals.
            </p>
          </div>
          <Link 
            to="/case-studies"
            className="flex items-center text-secondary hover:text-secondary-light transition-colors"
          >
            View All <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5 hover:border-secondary/20 transition-all duration-300 group">
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-secondary-light transition-colors">{study.title}</h3>
                <p className="text-gray-400 mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-secondary text-sm">
                      ✓ {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;