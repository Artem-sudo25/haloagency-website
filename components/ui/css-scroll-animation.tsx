"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface CSSScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in";
}

export function CSSScrollAnimation({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: CSSScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = isVisible ? `css-animate-${animation}` : "css-animate-hidden";
  const delayStyle = delay > 0 ? { animationDelay: `${delay}s` } : undefined;

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}

// For staggered children - just a wrapper that applies delays
interface CSSStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function CSSStagger({ children, className = "", staggerDelay = 0.1 }: CSSStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`css-stagger-container ${isVisible ? "css-stagger-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

// Simple item for stagger - gets animation from parent
export function CSSStaggerItem({ children, className = "", index = 0 }: { children: ReactNode; className?: string; index?: number }) {
  return (
    <div 
      className={`css-stagger-item ${className}`}
      style={{ "--stagger-index": index } as React.CSSProperties}
    >
      {children}
    </div>
  );
}





