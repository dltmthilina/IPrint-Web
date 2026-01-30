import React from 'react';
import Layout from "../components/layout";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import WhyChooseSection from "../components/WhyChooseSection";

const HomePage = () => {
  return (
    <Layout>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
        <HeroSection />
        <ProductsSection />
        <WhyChooseSection />
      </div>
    </Layout>
  );
};

export default HomePage;
