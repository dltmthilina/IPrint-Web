import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../iprintlogo.jpeg';

const PortfolioHeader = () => {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-[#392833] bg-background-light/80 dark:bg-[#181116]/80 backdrop-blur-md px-6 py-4 lg:px-12">
            <Link to="/" className="flex items-center gap-3 group">
                <img src={logo} alt="iprint" className="h-10 w-auto rounded-lg" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    iprint
                </h2>
            </Link>
            <nav className="hidden md:flex flex-1 justify-center gap-8">
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to="/">Home</Link>
                <Link className="text-primary font-bold text-sm leading-normal" to="/portfolio">Portfolio</Link>
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to="/services">Services</Link>
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to="/about">About Us</Link>
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to="/contact">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
                <Link to="/quote" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-lg shadow-primary/25">
                    <span className="truncate">Start Project</span>
                </Link>
            </div>
        </header>
    );
};

export default PortfolioHeader;
