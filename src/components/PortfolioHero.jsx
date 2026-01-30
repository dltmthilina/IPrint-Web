import React from 'react';

const PortfolioHero = () => {
    return (
        <section className="relative overflow-hidden py-16 lg:py-24 px-6 lg:px-12">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary ring-1 ring-inset ring-primary/20">
                    Inspiration Gallery
                </span>
                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] mb-6 max-w-4xl">
                    Our Work & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-400 to-purple-500">Your Inspiration</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-2xl mb-10 font-body leading-relaxed">
                    Explore our curated collection of custom prints. From corporate branding to personalized gifts, discover the vibrant quality that sets iprint apart.
                </p>

                {/* Chips / Filters */}
                <div className="flex flex-wrap justify-center gap-3">
                    <button className="flex h-10 items-center justify-center px-6 rounded-full bg-primary text-white text-sm font-bold shadow-md hover:scale-105 transition-transform">
                        All Projects
                    </button>
                    <button className="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors">
                        Business Cards
                    </button>
                    <button className="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors">
                        Large Format
                    </button>
                    <button className="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors">
                        Gifts
                    </button>
                    <button className="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors">
                        Stationery
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioHero;
