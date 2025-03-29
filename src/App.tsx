import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import CaseStudyPage from './pages/CaseStudyPage';
import PortfolioProjectPage from './pages/PortfolioProjectPage';
import ContactPage from './pages/ContactPage';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-[#F5F6F7] text-[#34495E]">
            <SEO />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:id" element={<ServicePage />} />
              <Route path="/case-studies/:id" element={<CaseStudyPage />} />
              <Route path="/portfolio/:id" element={<PortfolioProjectPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;