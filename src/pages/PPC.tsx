import React from 'react';
import ContactCTA from '../components/ContactCTA';
import BackButton from '../components/BackButton';

const PPC = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        <BackButton />
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-4">
            PPC Services
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">PPC Advertising</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Drive targeted traffic and maximize ROI with our expert PPC campaign management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Our PPC Services</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Google Ads campaign management
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Social media advertising
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Display and remarketing campaigns
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Landing page optimization
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Conversion tracking and optimization
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Why Choose Us</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-white mb-2">Expert Campaign Management</h3>
                <p className="text-gray-400">
                  Our certified PPC specialists ensure your campaigns perform at their best.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Data-Driven Optimization</h3>
                <p className="text-gray-400">
                  Continuous monitoring and optimization for maximum ROI.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Transparent Reporting</h3>
                <p className="text-gray-400">
                  Regular detailed reports on campaign performance and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our PPC Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Research & Planning",
                description: "Keyword research and competitor analysis"
              },
              {
                title: "Campaign Setup",
                description: "Creating optimized campaigns and ad groups"
              },
              {
                title: "Optimization",
                description: "Continuous testing and refinement"
              },
              {
                title: "Reporting & Analysis",
                description: "Regular performance reviews and strategy updates"
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

export default PPC;