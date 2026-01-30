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
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-primary rounded-full animate-float shadow-lg shadow-primary/50"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-2xl font-bold animate-pulse">
              Loading...
            </div>
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
