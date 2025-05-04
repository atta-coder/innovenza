import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business achieve its goals through strategic digital marketing solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-black text-white px-8 py-3 rounded-full hover:bg-slate-900 transition-colors"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;