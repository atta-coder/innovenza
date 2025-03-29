import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useThemeTransition } from '../hooks/useThemeTransition';

const Contact = () => {
  const { ref, theme, inView } = useThemeTransition('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923001234567', '_blank');
  };

  return (
    <section ref={ref} id="contact" className={`section-padding relative overflow-hidden ${theme.background} theme-transition`}>
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute bottom-40 -right-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-violet-100 rounded-full text-violet-600 font-medium text-sm mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Start a
              <span className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}> Conversation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your digital presence? We're here to help you achieve your goals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-8 py-4 bg-gradient-to-r ${theme.accent} text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2`}
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 shadow-lg cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              <div className="flex items-center text-white">
                <MessageSquare className="w-8 h-8 mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">Chat on WhatsApp</h4>
                  <p className="text-white/90">Get instant responses</p>
                </div>
              </div>
            </motion.div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${theme.accent} flex items-center justify-center mb-4`}>
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Phone</h4>
              <p className="text-gray-600">+92 300 1234567</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm PKT</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${theme.accent} flex items-center justify-center mb-4`}>
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-gray-600">contact@example.com</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${theme.accent} flex items-center justify-center mb-4`}>
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Location</h4>
              <p className="text-gray-600">F-7 Markaz, Islamabad, Pakistan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;