import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CaseStudiesPreview from '../components/CaseStudiesPreview';
import ContactCTA from '../components/ContactCTA';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import AboutPreview from '../components/AboutPreview';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <AboutPreview />
      <Services />
      <CaseStudiesPreview />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <ContactCTA />
    </div>
  );
};

export default Home;