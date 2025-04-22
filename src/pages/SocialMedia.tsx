import React from 'react';
import ContactCTA from '../components/ContactCTA';
import BackButton from '../components/BackButton';

const SocialMedia = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        <BackButton />
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-4">
            Social Media
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Social Media Management</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Build your brand presence and engage with your audience through strategic social media management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              platform: "Instagram",
              description: "Visual storytelling and engagement through photos and stories"
            },
            {
              platform: "LinkedIn",
              description: "Professional networking and B2B content marketing"
            },
            {
              platform: "Twitter",
              description: "Real-time engagement and brand conversation"
            },
            {
              platform: "Facebook",
              description: "Community building and targeted advertising"
            },
            {
              platform: "TikTok",
              description: "Trending content and youth engagement"
            },
            {
              platform: "YouTube",
              description: "Video content marketing and brand storytelling"
            }
          ].map((platform, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-white/5">
              <h3 className="text-xl font-semibold text-white mb-3">{platform.platform}</h3>
              <p className="text-gray-400">{platform.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Our Services</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Social media strategy development
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Content creation and curation
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Community management and engagement
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Social media advertising
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Analytics and performance reporting
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Benefits</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-white mb-2">Increased Brand Awareness</h3>
                <p className="text-gray-400">
                  Build a strong brand presence across social platforms.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Better Engagement</h3>
                <p className="text-gray-400">
                  Connect with your audience through meaningful interactions.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Lead Generation</h3>
                <p className="text-gray-400">
                  Convert social media followers into customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ContactCTA />
      </div>
    </div>
  );
};

export default SocialMedia;