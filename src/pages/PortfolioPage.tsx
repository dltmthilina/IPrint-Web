import React from 'react';
import Layout from "../components/layout";
import PortfolioHeader from "../components/PortfolioHeader";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioGallery from "../components/PortfolioGallery";
import Testimonials from "../components/Testimonials";
import PortfolioFooter from "../components/PortfolioFooter";

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
        <main className="flex-grow">
          <PortfolioHero />
          <PortfolioGallery />
          <Testimonials />
        </main>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
