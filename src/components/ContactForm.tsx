import React, { useState } from 'react';
import { Send, Facebook, Instagram, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const whatsappNumber = '923146230266';
      const message = `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-slate-900/50 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-slate-900/50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your digital transformation? Get in touch with our team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-secondary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-secondary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-secondary"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="text-green-500 text-sm">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-500 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/5">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p>Email: innovenzadigital@gmail.com</p>
                <p>Phone: +92 0314-6230266</p>
                <p>Address: Wahab Town, Okara, Pakistan</p>
                <div className="flex items-center space-x-2 pt-2">
                  <Facebook className="h-5 w-5 text-secondary" />
                  <a 
                    href="https://facebook.com/profile.php?id=61575139937018" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    Facebook
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="h-5 w-5 text-secondary" />
                  <a 
                    href="https://instagram.com/innovenzadigital" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    Instagram
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-secondary" />
                  <a 
                    href="https://api.whatsapp.com/send/?phone=923146230266&text&type=phone_number&app_absent=0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/5">
              <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;