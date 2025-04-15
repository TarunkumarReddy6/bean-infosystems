
import React, { useEffect, useRef, ReactNode } from 'react';

type AnimationType = 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-up' | 'slide-in-down';

interface ScrollAnimatorProps {
  children: ReactNode;
  animation: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimator: React.FC<ScrollAnimatorProps> = ({
  children,
  animation,
  delay = 0,
  threshold = 0.2,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  return (
    <div 
      ref={elementRef} 
      className={`${animation} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimator;
