import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../iprintlogo.jpeg';

const Header = () => {
    return (
        <div className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background-dark/70 border-b border-[#2d1f28]">
            <div className="layout-container flex justify-center w-full">
                <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 md:px-10">
                    <header className="flex items-center justify-between whitespace-nowrap py-4">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
                            <img src={logo} alt="iprint" className="h-10 w-auto rounded-lg shadow-lg" />
                            <h2 className="text-white text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                iprint
                            </h2>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                            <nav className="flex items-center gap-8">
                                <Link
                                    className="text-gray-300 hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all text-sm font-medium leading-normal"
                                    to="/services"
                                >
                                    Services
                                </Link>
                                <Link
                                    className="text-gray-300 hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all text-sm font-medium leading-normal"
                                    to="/portfolio"
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    className="text-gray-300 hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all text-sm font-medium leading-normal"
                                    to="/about"
                                >
                                    About
                                </Link>
                                <Link
                                    className="text-gray-300 hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all text-sm font-medium leading-normal"
                                    to="/contact"
                                >
                                    Contact
                                </Link>
                            </nav>
                            <Link to="/quote" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-500 transition-all text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-[0_0_20px_rgba(238,43,173,0.4)] hover:shadow-[0_0_30px_rgba(238,43,173,0.6)]">
                                <span className="truncate">Get a 3D Quote</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden text-white cursor-pointer">
                            <span className="material-symbols-outlined">menu</span>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
};

export default Header;
