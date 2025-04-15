import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState({}, document.title);
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 ${
      isScrolled ? 'glass-effect shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link 
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent hover:opacity-80"
              aria-label="Innovenza Home"
            >
              Innovenza
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <motion.div 
              className="flex items-center space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <NavLink onClick={() => handleNavigation('home')}>Home</NavLink>
              <NavLink onClick={() => handleNavigation('services')}>Services</NavLink>
              <NavLink onClick={() => handleNavigation('portfolio')}>Portfolio</NavLink>
              <NavLink onClick={() => handleNavigation('case-studies')}>Case Studies</NavLink>
              <NavLink onClick={() => handleNavigation('testimonials')}>Testimonials</NavLink>
              <NavLink onClick={() => handleNavigation('contact')}>Contact</NavLink>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-500 text-white rounded-full shadow-md hover:shadow-lg"
                aria-label="Get Started"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <MobileNavLink onClick={() => handleNavigation('home')}>Home</MobileNavLink>
              <MobileNavLink onClick={() => handleNavigation('services')}>Services</MobileNavLink>
              <MobileNavLink onClick={() => handleNavigation('portfolio')}>Portfolio</MobileNavLink>
              <MobileNavLink onClick={() => handleNavigation('case-studies')}>Case Studies</MobileNavLink>
              <MobileNavLink onClick={() => handleNavigation('testimonials')}>Testimonials</MobileNavLink>
              <MobileNavLink onClick={() => handleNavigation('contact')}>Contact</MobileNavLink>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-500 text-white rounded-full"
                aria-label="Get Started"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <motion.button
    onClick={onClick}
    className="text-gray-700 hover:text-gray-900 font-medium relative group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label={`Navigate to ${children}`}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-indigo-500 transform scale-x-0 group-hover:scale-x-100" />
  </motion.button>
);

const MobileNavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <motion.button
    onClick={onClick}
    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
    whileTap={{ scale: 0.95 }}
    aria-label={`Navigate to ${children}`}
  >
    {children}
  </motion.button>
);

export default Navbar;