import React, { useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { useScrollReveal } from "../contexts/ScrollRevealContext";

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
  const hasNotifiedRef = useRef(false);
  const touchStartYRef = useRef(0);
  const { setHasScrolled } = useScrollReveal();
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
      const delta = diff * 0.08; // Smooth easing factor (increased from 0.03 for better mobile feel)

      if (Math.abs(diff) > 0.1) {
        scrollPosRef.current += delta;
        element.style.transform = `translate3d(0, ${-scrollPosRef.current}px, 0)`;
        rafIdRef.current = requestAnimationFrame(smoothScroll);
      } else {
        scrollPosRef.current = targetPosRef.current;
        element.style.transform = `translate3d(0, ${-scrollPosRef.current}px, 0)`;
        rafIdRef.current = null;
      }
    };

    const notifyScrolled = () => {
      if (!hasNotifiedRef.current) {
        hasNotifiedRef.current = true;
        setHasScrolled();
      }
    };

    const applyDelta = (deltaY: number) => {
      const maxScroll = element.scrollHeight - window.innerHeight;
      targetPosRef.current = Math.max(
        0,
        Math.min(maxScroll, targetPosRef.current + deltaY),
      );
      if (!rafIdRef.current) {
        rafIdRef.current = requestAnimationFrame(smoothScroll);
      }
    };

    // --- Desktop wheel handler ---
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      notifyScrolled();
      applyDelta(e.deltaY * 0.5);
    };

    // --- Mobile touch handlers ---
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      notifyScrolled();
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY;
      touchStartYRef.current = currentY;
      applyDelta(deltaY);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [setHasScrolled]);

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

