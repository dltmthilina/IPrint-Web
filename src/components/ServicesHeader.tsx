import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/iprintlogo.jpeg';

const ServicesHeader = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isActive = (path: string) => location.pathname === path;
    const closeMenu = () => setIsMenuOpen(false);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-40 bg-[#181116]/80 backdrop-blur-lg border-b border-[#392833]">
            <div className="layout-container flex justify-center w-full">
                <div className="w-full max-w-[1280px] px-4 sm:px-6 py-3 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 sm:gap-4 group" onClick={closeMenu}>
                        <img src={logo} alt="iprint" className="h-9 sm:h-10 w-auto rounded-lg" />
                        <h2 className="text-white text-lg sm:text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                            iprint
                        </h2>
                    </Link>
                    <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                        <nav className="flex items-center gap-8">
                            {navItems.map(({ label, path }) => (
                                <Link key={path} className={`${isActive(path) ? 'text-white' : 'text-white/80 hover:text-primary'} transition-colors text-sm font-medium`} to={path}>
                                    {label}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex gap-3">
                            <button type="button" className="flex items-center justify-center rounded-xl min-h-[44px] h-11 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-[0_0_15px_rgba(238,43,173,0.3)] active:scale-95">
                                Sign In
                            </button>
                            <button type="button" className="flex items-center justify-center rounded-xl min-h-[44px] min-w-[44px] bg-[#392833] hover:bg-[#4a3542] transition-colors text-white active:scale-95">
                                <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                            </button>
                        </div>
                    </div>
                    <button type="button" className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] text-white rounded-lg hover:bg-white/10 transition-colors -mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <span className="material-symbols-outlined text-[28px]">{isMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-background-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden">
                    <nav className="flex flex-col items-center gap-2">
                        {navItems.map(({ label, path }) => (
                            <Link key={path} className={`min-h-[48px] flex items-center justify-center px-8 text-lg font-medium ${isActive(path) ? 'text-primary font-bold' : 'text-gray-300 hover:text-white'}`} to={path} onClick={closeMenu}>
                                {label}
                            </Link>
                        ))}
                        <div className="flex gap-4 mt-6">
                            <button type="button" className="min-h-[48px] px-6 rounded-xl bg-primary text-white text-sm font-bold">Sign In</button>
                            <button type="button" className="min-h-[48px] min-w-[48px] rounded-xl bg-[#392833] text-white flex items-center justify-center">
                                <span className="material-symbols-outlined">shopping_cart</span>
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default ServicesHeader;
