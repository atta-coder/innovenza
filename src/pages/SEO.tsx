import React from 'react';
import ContactCTA from '../components/ContactCTA';
import BackButton from '../components/BackButton';

const SEO = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        <BackButton />
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Search Engine Optimization</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Drive organic traffic and improve your search rankings with our data-driven SEO strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Our SEO Approach</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Technical SEO optimization and site structure improvement
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Keyword research and content strategy development
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                On-page optimization and content enhancement
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Link building and authority development
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Local SEO optimization and Google Business Profile management
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Why Choose Us</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-white mb-2">Data-Driven Strategy</h3>
                <p className="text-gray-400">
                  We use advanced analytics and industry-leading tools to develop and refine our SEO strategies.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Transparent Reporting</h3>
                <p className="text-gray-400">
                  Regular detailed reports showing your rankings, traffic, and ROI improvements.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Continuous Optimization</h3>
                <p className="text-gray-400">
                  We constantly monitor and adjust our strategies based on performance data.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our SEO Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Audit & Analysis",
                description: "Comprehensive analysis of your website's current SEO performance."
              },
              {
                title: "Strategy Development",
                description: "Custom SEO strategy based on your goals and market analysis."
              },
              {
                title: "Implementation",
                description: "Executing optimization techniques and content strategies."
              },
              {
                title: "Monitor & Refine",
                description: "Continuous monitoring and strategy refinement for optimal results."
              }
            ].map((step, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/5">
                <div className="text-secondary text-4xl font-bold mb-4">{index + 1}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <ContactCTA />
      </div>
    </div>
  );
};

export default SEO;