import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, Hexagon } from 'lucide-react';

const Footer = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 group mb-6">
              <Hexagon className="h-8 w-8 text-secondary group-hover:text-secondary-light transition-colors" />
              <span className="text-2xl font-bold text-white group-hover:text-secondary-light transition-colors">
                Innovenza
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transform your digital presence with innovative marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/profile.php?id=61575139937018"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/innovenzadigital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=923146230266"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-secondary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <button 
                  onClick={scrollToFAQ} 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/seo" className="text-gray-400 hover:text-secondary transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="text-gray-400 hover:text-secondary transition-colors">
                  Social Media
                </Link>
              </li>
              <li>
                <Link to="/services/ppc" className="text-gray-400 hover:text-secondary transition-colors">
                  PPC Advertising
                </Link>
              </li>
              <li>
                <Link to="/services/content" className="text-gray-400 hover:text-secondary transition-colors">
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-secondary" />
                innovenzadigital@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-secondary" />
                +92 0314-6230266
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-secondary" />
                Okara, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2023 Innovenza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;