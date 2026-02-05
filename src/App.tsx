import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollRevealProvider } from "./contexts/ScrollRevealContext";
import SplashScreen from "./components/SplashScreen";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import Header from "./components/Header";
import NavigationArrows from "./components/NavigationArrows";
import PageTransition from "./components/PageTransition";

// Lazy load heavy 3D nav (Three.js) - only loads on desktop, after app is ready
const Mug3DNavigation = lazy(() => import("./components/Pentagon3DNavigation"));

// Lazy load pages for optimization
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const QuotePage = lazy(() => import("./pages/QuotePage"));

function Mug3DNavigationWrapper() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!mounted || !isDesktop) return null;
  return (
    <Suspense fallback={null}>
      <Mug3DNavigation />
    </Suspense>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasShownSplash = sessionStorage.getItem("splashShown");
    if (hasShownSplash) setLoading(false);
  }, []);

  const handleSplashFinish = () => {
    setLoading(false);
    sessionStorage.setItem("splashShown", "true");
  };

  return (
    <>
      {loading && <SplashScreen onFinish={handleSplashFinish} />}
      {!loading && (
        <Router>
          <ScrollRevealProvider>
            <Header />
            <NavigationArrows />
            <Mug3DNavigationWrapper />
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
          </ScrollRevealProvider>
        </Router>
      )}
    </>
  );
}

export default App;
