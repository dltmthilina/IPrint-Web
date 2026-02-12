import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/iprintlogo.jpeg";

const navItems = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Services', path: '/services', icon: 'design_services' },
  { label: 'Portfolio', path: '/portfolio', icon: 'photo_library' },
  { label: 'About', path: '/about', icon: 'info' },
  { label: 'Contact', path: '/contact', icon: 'mail' },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      {/* Header Bar */}
      <div className="fixed top-0 z-50 w-full backdrop-blur-xl bg-black/20 border-b border-white/5">
        <div className="layout-container flex justify-center w-full">
          <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 md:px-10">
            <header className="flex items-center justify-between whitespace-nowrap py-4">
              <Link
                to="/"
                className="flex items-center gap-3 group cursor-pointer z-[60]"
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
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      className={`${isActive(item.path)
                        ? "text-primary font-bold shadow-[0_0_10px_rgba(238,43,173,0.6)]"
                        : "text-gray-300"
                        } hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all text-sm font-medium leading-normal`}
                      to={item.path}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile Menu Icon */}
              <button
                type="button"
                className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 text-white cursor-pointer z-[60] rounded-lg hover:bg-white/10 active:scale-95 transition-transform"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-3xl">
                  {isMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </header>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay – rendered outside the header for full-screen coverage */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] md:hidden" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          {/* Solid dark background with gradient accents */}
          <div className="absolute inset-0 bg-[#0f0a0d]">
            {/* Gradient blobs for visual flair */}
            <div className="absolute top-[-5%] left-[-10%] w-[400px] h-[400px] bg-[#ee2bad] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-[#00ffff] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-[-5%] left-[20%] w-[300px] h-[300px] bg-[#ffff00] rounded-full mix-blend-screen filter blur-[120px] opacity-5 pointer-events-none"></div>
          </div>

          {/* Menu Content */}
          <div className="relative z-10 flex flex-col h-full pt-24 pb-8 px-8 overflow-y-auto">
            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 flex-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${isActive(item.path)
                      ? "bg-primary/15 border border-primary/30 text-primary font-bold shadow-[0_0_20px_rgba(238,43,173,0.15)]"
                      : "text-gray-300 hover:bg-white/5 border border-transparent hover:border-white/10"
                    }`}
                  to={item.path}
                  onClick={closeMenu}
                  style={{ animation: `slideIn 0.3s ease-out ${index * 0.05}s both` }}
                >
                  <span className={`material-symbols-outlined text-2xl ${isActive(item.path) ? 'text-primary' : 'text-gray-500'}`}>
                    {item.icon}
                  </span>
                  <span className="text-lg font-medium">{item.label}</span>
                  {isActive(item.path) && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(238,43,173,0.8)]"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>

            {/* CTA Button */}
            <Link
              to="/quote"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-lg shadow-[0_0_25px_rgba(238,43,173,0.4)] hover:shadow-[0_0_35px_rgba(238,43,173,0.6)] active:scale-95 transition-all"
              onClick={closeMenu}
              style={{ animation: 'slideIn 0.3s ease-out 0.3s both' }}
            >
              <span className="material-symbols-outlined">add_circle</span>
              Create Now
            </Link>

            {/* Footer info */}
            <div className="flex items-center justify-center gap-3 mt-6" style={{ animation: 'slideIn 0.3s ease-out 0.35s both' }}>
              <div className="flex text-tertiary text-sm">
                <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                <span className="material-symbols-outlined text-[16px] fill-current">star</span>
              </div>
              <span className="text-xs text-gray-500 font-medium">Top Rated 3D Print Shop</span>
            </div>
          </div>
        </div>
      )}

      {/* Inline keyframes for mobile menu animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Header;
