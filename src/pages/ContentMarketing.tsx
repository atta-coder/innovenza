import React from 'react';
import ContactCTA from '../components/ContactCTA';
import BackButton from '../components/BackButton';

const ContentMarketing = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        <BackButton />
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-4">
            Content Strategy
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Content Marketing</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create compelling content that resonates with your audience and drives conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Content Services</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Content strategy development
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Blog post creation
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                White papers and ebooks
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Case studies and success stories
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Email marketing content
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Our Approach</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-white mb-2">Research-Based</h3>
                <p className="text-gray-400">
                  Content strategies based on market research and audience analysis.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">SEO-Optimized</h3>
                <p className="text-gray-400">
                  Content created with search engines in mind for maximum visibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Engagement-Focused</h3>
                <p className="text-gray-400">
                  Creating content that drives audience engagement and action.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Content Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Blog Posts",
                description: "Informative articles that establish thought leadership"
              },
              {
                type: "White Papers",
                description: "In-depth research and industry insights"
              },
              {
                type: "Case Studies",
                description: "Real success stories and results"
              },
              {
                type: "Infographics",
                description: "Visual content that simplifies complex information"
              },
              {
                type: "Videos",
                description: "Engaging video content for multiple platforms"
              },
              {
                type: "Newsletters",
                description: "Regular updates and valuable insights"
              }
            ].map((content, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/5">
                <h3 className="text-xl font-semibold text-white mb-3">{content.type}</h3>
                <p className="text-gray-400">{content.description}</p>
              </div>
            ))}
          </div>
        </div>

        <ContactCTA />
      </div>
    </div>
  );
};

export default ContentMarketing;