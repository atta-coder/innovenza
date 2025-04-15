import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import CaseStudyPage from './pages/CaseStudyPage';
import PortfolioProjectPage from './pages/PortfolioProjectPage';
import ContactPage from './pages/ContactPage';
import BlogPost from './pages/BlogPost';
import SEO from './components/SEO';

// Scroll to top component with smooth behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-[#F5F6F7] text-[#34495E] scroll-content">
            <SEO />
            <Navbar />
            <main className="content-wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/:id" element={<ServicePage />} />
                <Route path="/case-studies/:id" element={<CaseStudyPage />} />
                <Route path="/portfolio/:id" element={<PortfolioProjectPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog/:serviceId/:blogId" element={<BlogPost />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;