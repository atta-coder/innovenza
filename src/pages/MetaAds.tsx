import React from 'react';
import ContactCTA from '../components/ContactCTA';
import BackButton from '../components/BackButton';
import { Facebook, Instagram, Target, BarChart, Users } from 'lucide-react';

const MetaAds = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        <BackButton />
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-4">
            Meta Advertising
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Meta Ads</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reach and engage your ideal audience on Facebook & Instagram with targeted advertising campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Platform Expertise</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Facebook className="h-6 w-6 text-secondary mt-1" />
                <div>
                  <h3 className="text-xl text-white mb-2">Facebook Advertising</h3>
                  <p className="text-gray-400">
                    Reach billions of active users with targeted ads, custom audiences, and retargeting campaigns.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Instagram className="h-6 w-6 text-secondary mt-1" />
                <div>
                  <h3 className="text-xl text-white mb-2">Instagram Marketing</h3>
                  <p className="text-gray-400">
                    Engage users with visual storytelling through feed posts, stories, and reels ads.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Targeting Capabilities</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Custom audience creation
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Lookalike audience targeting
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Behavioral targeting
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Interest-based targeting
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Demographic targeting
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Audience Research",
                description: "Identify and analyze your ideal customer segments"
              },
              {
                icon: <BarChart className="h-8 w-8" />,
                title: "Campaign Setup",
                description: "Create optimized campaigns with compelling ad creatives"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Testing & Optimization",
                description: "A/B testing to maximize campaign performance"
              },
              {
                icon: <BarChart className="h-8 w-8" />,
                title: "Performance Analysis",
                description: "Detailed reporting and ROI tracking"
              }
            ].map((step, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/5">
                <div className="text-secondary mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Growth",
                metrics: ["3x ROAS", "45% Lower CPA", "2.5x Conversion Rate"],
                description: "Helped an online retailer achieve significant growth through targeted Facebook & Instagram ads."
              },
              {
                title: "Lead Generation",
                metrics: ["150% More Leads", "40% Lower CPL", "200% ROI"],
                description: "Generated high-quality leads for a B2B company using custom audience targeting."
              }
            ].map((story, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
                <h3 className="text-xl font-semibold text-white mb-4">{story.title}</h3>
                <div className="space-y-2 mb-4">
                  {story.metrics.map((metric, idx) => (
                    <div key={idx} className="text-secondary font-semibold">
                      ✓ {metric}
                    </div>
                  ))}
                </div>
                <p className="text-gray-400">{story.description}</p>
              </div>
            ))}
          </div>
        </div>

        <ContactCTA />
      </div>
    </div>
  );
};

export default MetaAds;