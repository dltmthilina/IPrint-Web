import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/iprintlogo.jpeg';

const PortfolioHeader = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isActive = (path: string) => location.pathname === path;
    const closeMenu = () => setIsMenuOpen(false);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Services', path: '/services' },
        { label: 'About Us', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-[#392833] bg-background-light/80 dark:bg-[#181116]/80 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 lg:px-12">
            <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
                <img src={logo} alt="iprint" className="h-9 sm:h-10 w-auto rounded-lg" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    iprint
                </h2>
            </Link>
            <nav className="hidden md:flex flex-1 justify-center gap-8">
                {navItems.map(({ label, path }) => (
                    <Link key={path} className={`${isActive(path) ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'} transition-colors text-sm font-medium leading-normal`} to={path}>
                        {label}
                    </Link>
                ))}
            </nav>
            <div className="flex items-center gap-2 sm:gap-4">
                <Link to="/quote" className="flex min-w-[80px] sm:min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl min-h-[44px] h-10 px-4 sm:px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-lg shadow-primary/25 active:scale-95">
                    <span className="truncate">Start Project</span>
                </Link>
                {/* Mobile menu button - min 44px touch target */}
                <button type="button" className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 text-slate-700 dark:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                    <span className="material-symbols-outlined text-[28px]">{isMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>
            {/* Mobile menu overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden">
                    <nav className="flex flex-col items-center gap-6">
                        {navItems.map(({ label, path }) => (
                            <Link key={path} className={`text-lg font-medium min-h-[44px] flex items-center justify-center px-6 ${isActive(path) ? 'text-primary font-bold' : 'text-slate-700 dark:text-slate-200'}`} to={path} onClick={closeMenu}>
                                {label}
                            </Link>
                        ))}
                        <Link to="/quote" className="mt-4 min-h-[48px] flex items-center justify-center px-8 rounded-xl bg-primary text-white font-bold text-lg" onClick={closeMenu}>
                            Start Project
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default PortfolioHeader;
