import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../iprintlogo.jpeg';

const ServicesHeader = () => {
    return (
        <header className="sticky top-0 z-40 bg-[#181116]/80 backdrop-blur-lg border-b border-[#392833]">
            <div className="layout-container flex justify-center w-full">
                <div className="w-full max-w-[1280px] px-6 py-3 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-4 group">
                        <img src={logo} alt="iprint" className="h-10 w-auto rounded-lg" />
                        <h2 className="text-white text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                            iprint
                        </h2>
                    </Link>
                    <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                        <nav className="flex items-center gap-8">
                            <Link className="text-white/80 hover:text-primary transition-colors text-sm font-medium" to="/">Home</Link>
                            <Link className="text-white text-sm font-medium" to="/services">Services</Link>
                            <Link className="text-white/80 hover:text-primary transition-colors text-sm font-medium" to="/portfolio">Portfolio</Link>
                            <Link className="text-white/80 hover:text-primary transition-colors text-sm font-medium" to="/contact">Contact</Link>
                        </nav>
                        <div className="flex gap-3">
                            <button className="flex items-center justify-center rounded-xl h-10 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-[0_0_15px_rgba(238,43,173,0.3)]">
                                Sign In
                            </button>
                            <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-[#392833] hover:bg-[#4a3542] transition-colors text-white">
                                <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                            </button>
                        </div>
                    </div>
                    <button className="md:hidden text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default ServicesHeader;
