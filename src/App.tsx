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
import ScrollToTop from 'react-scroll-to-top';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
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
        <ScrollToTop 
          smooth 
          component={<span className="p-2">↑</span>}
          className="flex items-center justify-center bg-secondary hover:bg-secondary-light text-white rounded-full transition-all"
        />
      </div>
    </Router>
  );
}

export default App