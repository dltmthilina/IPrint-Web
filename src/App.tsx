import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import SplashScreen from './components/SplashScreen';

// Lazy load pages for optimization
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const QuotePage = lazy(() => import('./pages/QuotePage'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if splash has already been shown this session
    const hasShownSplash = sessionStorage.getItem('splashShown');
    if (hasShownSplash) {
      setLoading(false);
    }
  }, []);

  const handleSplashFinish = () => {
    setLoading(false);
    sessionStorage.setItem('splashShown', 'true');
  };

  return (
    <>
      {loading && <SplashScreen onFinish={handleSplashFinish} />}
      <Router>
        <Suspense fallback={
          <div className="fixed inset-0 bg-background-dark flex items-center justify-center">
            <div className="size-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
