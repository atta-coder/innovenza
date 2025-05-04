import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Hexagon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage || isOpen ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Hexagon className="h-8 w-8 text-secondary group-hover:text-secondary-light transition-colors" />
            <span className="text-2xl font-bold text-white group-hover:text-secondary-light transition-colors">
              Innovenza
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-secondary transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-secondary transition-colors">About</Link>
            <div className="relative group">
              <button className="flex items-center text-white hover:text-secondary transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-black/95 backdrop-blur-sm rounded-lg shadow-xl p-4 w-64 animate-fade-in border border-white/5">
                <Link to="/services/seo" className="block py-2 px-4 text-white hover:text-secondary hover:bg-white/5 rounded transition-colors">SEO</Link>
                <Link to="/services/social-media" className="block py-2 px-4 text-white hover:text-secondary hover:bg-white/5 rounded transition-colors">Social Media</Link>
                <Link to="/services/ppc" className="block py-2 px-4 text-white hover:text-secondary hover:bg-white/5 rounded transition-colors">PPC Advertising</Link>
                <Link to="/services/meta-ads" className="block py-2 px-4 text-white hover:text-secondary hover:bg-white/5 rounded transition-colors">Meta Ads</Link>
                <Link to="/services/content" className="block py-2 px-4 text-white hover:text-secondary hover:bg-white/5 rounded transition-colors">Content Marketing</Link>
                <Link to="/services/web-development" className="block py-2 px-4 text-white hover:text-secondary hover:bg-white/5 rounded transition-colors">Web Development</Link>
              </div>
            </div>
            <Link to="/case-studies" className="text-white hover:text-secondary transition-colors">Case Studies</Link>
            <Link to="/blog" className="text-white hover:text-secondary transition-colors">Blog</Link>
            <Link to="/contact" className="text-white hover:text-secondary transition-colors">Contact</Link>
            <Link 
              to="/contact" 
              className="bg-secondary hover:bg-secondary-light text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden text-white hover:text-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <Link to="/" className="block py-2 text-white hover:text-secondary">Home</Link>
                <Link to="/about" className="block py-2 text-white hover:text-secondary">About</Link>
                <div className="space-y-2">
                  <div className="text-white hover:text-secondary">Services</div>
                  <div className="pl-4 space-y-2">
                    <Link to="/services/seo" className="block py-1 text-white hover:text-secondary">SEO</Link>
                    <Link to="/services/social-media" className="block py-1 text-white hover:text-secondary">Social Media</Link>
                    <Link to="/services/ppc" className="block py-1 text-white hover:text-secondary">PPC Advertising</Link>
                    <Link to="/services/meta-ads" className="block py-1 text-white hover:text-secondary">Meta Ads</Link>
                    <Link to="/services/content" className="block py-1 text-white hover:text-secondary">Content Marketing</Link>
                    <Link to="/services/web-development" className="block py-1 text-white hover:text-secondary">Web Development</Link>
                  </div>
                </div>
                <Link to="/case-studies" className="block py-2 text-white hover:text-secondary">Case Studies</Link>
                <Link to="/blog" className="block py-2 text-white hover:text-secondary">Blog</Link>
                <Link to="/contact" className="block py-2 text-white hover:text-secondary">Contact</Link>
                <Link 
                  to="/contact" 
                  className="block w-full bg-secondary text-white px-6 py-3 rounded-full text-center hover:bg-secondary-light transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;