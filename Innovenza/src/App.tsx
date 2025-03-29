import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import CaseStudyPage from './pages/CaseStudyPage';
import PortfolioProjectPage from './pages/PortfolioProjectPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/case-studies/:id" element={<CaseStudyPage />} />
          <Route path="/portfolio/:id" element={<PortfolioProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;