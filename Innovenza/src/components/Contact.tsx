import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+92 300 1234567', '+92 321 9876543'],
      gradient: 'from-violet-500 to-indigo-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['contact@innovenza.com', 'support@innovenza.com'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: ['F-7 Markaz', 'Islamabad, Pakistan'],
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
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
              <span className="text-gradient-primary"> Conversation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your digital presence? We're here to help you achieve your goals.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.gradient} flex items-center justify-center mb-4`}>
                <div className="text-white">
                  {info.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">{info.title}</h4>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">{detail}</p>
              ))}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-violet-600 to-indigo-500 rounded-xl p-8 text-white text-center">
            <MessageSquare size={32} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Live Chat Support</h4>
            <p className="mb-4">Need immediate assistance? Chat with our team now!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-violet-600 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Start Chat
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;