
import React, { useRef, useEffect, ReactNode } from 'react';

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className = '',
  speed = 0.2,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const container = containerRef.current;
    if (!scrollContainer || !container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY * speed;
    };

    // Use passive: false to prevent browser default scroll
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div 
        ref={scrollRef} 
        className="horizontal-scroll-section"
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
