import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'fadeOut'>('fadeIn');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
      setIsTransitioning(true);
    }
  }, [location, displayLocation]);

  return (
    <>
      {/* Attractive transition overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-500/40 to-primary/40 animate-pulse"></div>
          <div className="absolute inset-0 backdrop-blur-md"></div>
          {/* Lightweight transition - fewer DOM nodes for smoother perf */}
          <div className="absolute inset-0 overflow-hidden">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/80 rounded-full animate-pulse"
                style={{
                  left: `${20 + i * 18}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.15}s`
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/90 text-sm font-medium animate-pulse">Loading</span>
          </div>
        </div>
      )}
      
      <div
        className={`transition-container ${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === 'fadeOut') {
            setTransitionStage('fadeIn');
            setDisplayLocation(location);
            setIsTransitioning(false);
          }
        }}
      >
        {transitionStage === 'fadeIn' ? children : displayLocation.pathname === location.pathname ? children : null}
      </div>
    </>
  );
};



export default PageTransition;
