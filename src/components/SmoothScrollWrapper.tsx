import React, { useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);
  const targetPosRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const location = useLocation();

  // Reset scroll position when route changes
  useEffect(() => {
    scrollPosRef.current = 0;
    targetPosRef.current = 0;
    if (scrollRef.current) {
      scrollRef.current.style.transform = "translate3d(0, 0, 0)";
    }
  }, [location.pathname]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const smoothScroll = () => {
      const diff = targetPosRef.current - scrollPosRef.current;
      const delta = diff * 0.03; // Ultra smooth easing factor for floating feel

      if (Math.abs(diff) > 0.1) {
        scrollPosRef.current += delta;
        element.style.transform = `translate3d(0, ${-scrollPosRef.current}px, 0)`;
        rafIdRef.current = requestAnimationFrame(smoothScroll);
      } else {
        scrollPosRef.current = targetPosRef.current;
        element.style.transform = `translate3d(0, ${-scrollPosRef.current}px, 0)`;
        rafIdRef.current = null; // Clear RAF ID so new scroll can start
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const maxScroll = element.scrollHeight - window.innerHeight;
      // Reduce scroll speed for more gentle, floating movement
      targetPosRef.current = Math.max(
        0,
        Math.min(maxScroll, targetPosRef.current + e.deltaY * 0.5),
      );

      if (!rafIdRef.current) {
        rafIdRef.current = requestAnimationFrame(smoothScroll);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        ref={scrollRef}
        className="will-change-transform"
        style={{
          transform: "translate3d(0, 0, 0)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SmoothScrollWrapper;
