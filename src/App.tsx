import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import SplashScreen from './components/SplashScreen';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';
import Header from './components/Header';
import NavigationArrows from './components/NavigationArrows';
import PageTransition from "./components/PageTransition";
import Mug3DNavigation from "./components/Pentagon3DNavigation";

// Lazy load pages for optimization
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const QuotePage = lazy(() => import("./pages/QuotePage"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if splash has already been shown this session
    const hasShownSplash = sessionStorage.getItem("splashShown");
    if (hasShownSplash) {
      setLoading(false);
    }
  }, []);

  const handleSplashFinish = () => {
    setLoading(false);
    sessionStorage.setItem("splashShown", "true");
  };

  return (
    <>
      {loading && <SplashScreen onFinish={handleSplashFinish} />}
      {!loading && (
        <Router basename="/IPrint-Web">
          <Header />
          <NavigationArrows />
          <Mug3DNavigation />
          <SmoothScrollWrapper>
            <PageTransition>
              <Suspense
                fallback={
                  <div className="fixed inset-0 bg-background-dark flex items-center justify-center">
                    <div className="size-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/quote" element={<QuotePage />} />
                </Routes>
              </Suspense>
            </PageTransition>
          </SmoothScrollWrapper>
        </Router>
      )}
    </>
  );
}

export default App;
