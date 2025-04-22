import React from 'react';
import ContactCTA from '../components/ContactCTA';
import BackButton from '../components/BackButton';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: "E-commerce Revenue Growth",
    description: "How we helped an online retailer achieve 300% growth in revenue through strategic SEO and PPC campaigns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    results: ["300% Revenue Growth", "150% Organic Traffic Increase", "45% Lower CPA"],
    challenge: "The client struggled with low online visibility and high customer acquisition costs.",
    solution: "Implemented comprehensive SEO strategy and optimized PPC campaigns across multiple platforms.",
    category: "E-commerce"
  },
  {
    title: "B2B Lead Generation",
    description: "Generating qualified B2B leads through content marketing and social media strategy.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    results: ["200% More Leads", "45% Higher Conversion Rate", "60% Lower CPL"],
    challenge: "Limited lead generation and poor quality of incoming leads.",
    solution: "Developed targeted content strategy and implemented lead scoring system.",
    category: "B2B"
  },
  {
    title: "Local Business Growth",
    description: "Helping a local restaurant chain expand their digital presence and increase foot traffic.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    results: ["150% Increase in Foot Traffic", "200% Social Media Growth", "4.8★ Rating Increase"],
    challenge: "Limited online presence and difficulty attracting new customers.",
    solution: "Local SEO optimization and social media engagement strategy.",
    category: "Local Business"
  },
  {
    title: "SaaS Customer Acquisition",
    description: "Scaling customer acquisition for a growing SaaS platform through digital marketing.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    results: ["250% MRR Growth", "40% Lower CAC", "85% Customer Retention"],
    challenge: "High customer acquisition costs and low conversion rates.",
    solution: "Implemented full-funnel marketing strategy with focus on content and PPC.",
    category: "SaaS"
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        <BackButton />
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore how we've helped businesses achieve their digital marketing goals through strategic solutions and data-driven approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-slate-900/50 rounded-lg overflow-hidden border border-white/5">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-64 md:h-full">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-secondary text-white text-sm px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-white mb-4">{study.title}</h2>
                  <p className="text-gray-400 mb-6">{study.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Challenge:</h3>
                    <p className="text-gray-400">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Solution:</h3>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white mb-3">Results:</h3>
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-secondary">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ContactCTA />
      </div>
    </div>
  );
};

export default CaseStudies;