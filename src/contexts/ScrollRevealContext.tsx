import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface ScrollRevealContextValue {
  hasScrolled: boolean;
  setHasScrolled: () => void;
}

const ScrollRevealContext = createContext<ScrollRevealContextValue | null>(null);

const REVEAL_AFTER_MS = 2500;

export const ScrollRevealProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasScrolled, setHasScrolledState] = useState(false);
  const setHasScrolled = useCallback(() => setHasScrolledState(true), []);

  useEffect(() => {
    const t = setTimeout(() => setHasScrolledState(true), REVEAL_AFTER_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <ScrollRevealContext.Provider value={{ hasScrolled, setHasScrolled }}>
      {children}
    </ScrollRevealContext.Provider>
  );
};

export function useScrollReveal(): ScrollRevealContextValue {
  const ctx = useContext(ScrollRevealContext);
  if (!ctx) return { hasScrolled: true, setHasScrolled: () => {} };
  return ctx;
}
