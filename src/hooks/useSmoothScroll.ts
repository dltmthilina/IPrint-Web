import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    let scrollPos = 0;
    let targetPos = 0;
    let isScrolling = false;

    const smoothScrollTo = (target: number) => {
      targetPos = target;
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(animateScroll);
      }
    };

    const animateScroll = () => {
      const diff = targetPos - scrollPos;
      const delta = diff * 0.1; // Easing factor (lower = smoother, higher = faster)
      
      if (Math.abs(diff) > 0.5) {
        scrollPos += delta;
        window.scrollTo(0, scrollPos);
        requestAnimationFrame(animateScroll);
      } else {
        scrollPos = targetPos;
        window.scrollTo(0, scrollPos);
        isScrolling = false;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetPos = Math.max(0, Math.min(document.documentElement.scrollHeight - window.innerHeight, targetPos + e.deltaY));
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(animateScroll);
      }
    };

    const handleScroll = () => {
      if (!isScrolling) {
        scrollPos = window.pageYOffset;
        targetPos = scrollPos;
      }
    };

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);

    // Initialize scroll position
    scrollPos = window.pageYOffset;
    targetPos = scrollPos;

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
};
