import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SEO from './pages/SEO';
import SocialMedia from './pages/SocialMedia';
import PPC from './pages/PPC';
import MetaAds from './pages/MetaAds';
import ContentMarketing from './pages/ContentMarketing';
import WebDevelopment from './pages/WebDevelopment';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { ArrowUp } from 'lucide-react';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-secondary hover:bg-secondary-light text-white shadow-lg transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <div className="relative min-h-screen bg-black flex flex-col">
        <Header />
        <main className="pt-20 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/ppc" element={<PPC />} />
            <Route path="/services/meta-ads" element={<MetaAds />} />
            <Route path="/services/content" element={<ContentMarketing />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;