import React from 'react';
import PortfolioHeader from '../components/PortfolioHeader';
import PortfolioHero from '../components/PortfolioHero';
import PortfolioGallery from '../components/PortfolioGallery';
import Testimonials from '../components/Testimonials';
import PortfolioFooter from '../components/PortfolioFooter';

const PortfolioPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
            <PortfolioHeader />
            <main className="flex-grow">
                <PortfolioHero />
                <PortfolioGallery />
                <Testimonials />
            </main>
            <PortfolioFooter />
        </div>
    );
};

export default PortfolioPage;
