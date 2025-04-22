import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We provide digital marketing, branding, SEO, social media management, and more."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients start seeing results within 3–6 weeks depending on the service."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients globally."
  },
  {
    question: "How can I get a quote?",
    answer: "You can contact us through the form or directly on WhatsApp."
  },
  {
    question: "Is there any contract involved?",
    answer: "We offer both contract-based and flexible monthly plans."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-black/50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/5 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:text-secondary transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 py-4' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;