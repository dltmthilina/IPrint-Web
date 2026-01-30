import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import WhyChooseSection from '../components/WhyChooseSection';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
            <Header />
            <HeroSection />
            <ProductsSection />
            <WhyChooseSection />
            <Footer />
        </div>
    );
};

export default HomePage;
