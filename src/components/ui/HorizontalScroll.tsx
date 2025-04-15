
import React, { useRef, useEffect, ReactNode } from 'react';

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className = '',
  speed = 0.5,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const container = containerRef.current;
    if (!scrollContainer || !container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY || e.deltaX;
      scrollContainer.scrollLeft += delta * speed;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [speed]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full overflow-hidden ${className}`}
    >
      <div 
        ref={scrollRef} 
        className="overflow-x-auto scrollbar-hide"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
