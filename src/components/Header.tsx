import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/iprintlogo.jpeg";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fixed top-0 z-50 w-full backdrop-blur-xl bg-black/20 border-b border-white/5">
      <div className="layout-container flex justify-center w-full">
        <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 md:px-10">
          <header className="flex items-center justify-between whitespace-nowrap py-4">
            <Link
              to="/"
              className="flex items-center gap-3 group cursor-pointer z-50"
              onClick={closeMenu}
            >
              <img
                src={logo}
                alt="iprint"
                className="h-10 w-auto rounded-lg shadow-lg"
                decoding="async"
              />
              <h2 className="text-white text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                iprint
              </h2>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <nav className="flex items-center gap-8">
                {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => {
                  const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                  return (
                    <Link
                      key={item}
                      className={`${isActive(path)
                          ? "text-primary font-bold shadow-[0_0_10px_rgba(238,43,173,0.6)]"
                          : "text-gray-300"
                        } hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all text-sm font-medium leading-normal`}
                      to={path}
                    >
                      {item}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Menu Icon - min 44px touch target */}
            <button type="button" className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 text-white cursor-pointer z-50 rounded-lg hover:bg-white/10 active:scale-95 transition-transform" onClick={toggleMenu} aria-label="Toggle menu">
              <span className="material-symbols-outlined text-3xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>

            {/* Mobile Navigation Content */}
            {isMenuOpen && (
              <div className="fixed inset-0 bg-background-dark/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center animate-fade-in">
                <nav className="flex flex-col items-center gap-8">
                  {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => {
                    const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                    return (
                      <Link
                        key={item}
                        className={`min-h-[48px] flex items-center justify-center px-6 ${isActive(path)
                            ? "text-primary font-bold text-xl sm:text-2xl shadow-[0_0_20px_rgba(238,43,173,0.4)]"
                            : "text-gray-300 text-lg sm:text-xl"
                          } hover:text-white transition-all font-medium leading-normal`}
                        to={path}
                        onClick={closeMenu}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            )}
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
