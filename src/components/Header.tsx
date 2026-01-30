import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../iprintlogo.jpeg';

const Header = () => {
    return (
      <div className="fixed top-0 z-50 w-full backdrop-blur-xl bg-transparent">
        <div className="layout-container flex justify-center w-full">
          <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 md:px-10">
            <header className="flex items-center justify-between whitespace-nowrap py-4">
              <Link
                to="/"
                className="flex items-center gap-3 group cursor-pointer"
              >
                <img
                  src={logo}
                  alt="iprint"
                  className="h-10 w-auto rounded-lg shadow-lg"
                />
                <h2 className="text-white text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  iprint
                </h2>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                <nav className="flex items-center gap-8">
                  <Link
                    className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal"
                    to="/"
                  >
                    Home
                  </Link>
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
