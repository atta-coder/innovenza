import React from 'react';
import ContactCTA from '../components/ContactCTA';
import BackButton from '../components/BackButton';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        <BackButton />
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-4">
            Web Development
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Web Development</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create stunning, responsive websites that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Development Services</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Custom website development
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                E-commerce solutions
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Web application development
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                CMS implementation
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                Website maintenance and support
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Technologies</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Tailwind CSS",
                "WordPress",
                "WooCommerce",
                "MongoDB"
              ].map((tech, index) => (
                <div key={index} className="bg-black/50 p-3 rounded text-white text-center border border-white/5">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Planning",
                description: "Requirements gathering and project scope"
              },
              {
                title: "Design",
                description: "UI/UX design and prototyping"
              },
              {
                title: "Development",
                description: "Clean, efficient code implementation"
              },
              {
                title: "Launch",
                description: "Testing, deployment, and maintenance"
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

export default WebDevelopment;