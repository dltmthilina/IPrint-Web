import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationArrows: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = ['/', '/services', '/portfolio', '/about', '/contact'];
  const currentIndex = pages.indexOf(location.pathname);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  return (
    <div className="fixed left-8 top-[45%] z-40 flex flex-col gap-6">
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        disabled={currentIndex <= 0}
        className={`group relative w-16 h-16 ${
          currentIndex <= 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110'
        } transition-all duration-300`}
      >
        {/* 3D Arrow Container */}
        <div className="relative w-full h-full perspective-1000">
          {/* Arrow Body */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-lg shadow-2xl transform transition-transform duration-300 group-hover:-translate-x-1 group-hover:shadow-primary/50">
            {/* 3D Edge Highlights */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/40 to-transparent"></div>
            
            {/* Arrow Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          
          {/* 3D Depth Layer */}
          <div className="absolute inset-0 bg-primary/40 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
        </div>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        disabled={currentIndex >= pages.length - 1}
        className={`group relative w-16 h-16 ${
          currentIndex >= pages.length - 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110'
        } transition-all duration-300`}
      >
        {/* 3D Arrow Container */}
        <div className="relative w-full h-full perspective-1000">
          {/* Arrow Body */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-lg shadow-2xl transform transition-transform duration-300 group-hover:translate-x-1 group-hover:shadow-primary/50">
            {/* 3D Edge Highlights */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/40 to-transparent"></div>
            
            {/* Arrow Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          {/* 3D Depth Layer */}
          <div className="absolute inset-0 bg-primary/40 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
        </div>
      </button>
    </div>
  );
};

export default NavigationArrows;
