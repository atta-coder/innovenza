import React from 'react';
import BackButton from '../components/BackButton';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        <BackButton />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;