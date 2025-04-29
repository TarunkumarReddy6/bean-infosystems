
import React, { useRef, useEffect, ReactNode } from 'react';

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
  infiniteLoop?: boolean;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className = '',
  speed = 0.5,
  autoScroll = false,
  autoScrollSpeed = 1,
  infiniteLoop = false,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const autoScrollRef = useRef<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const container = containerRef.current;
    if (!scrollContainer || !container) return;

    // Clone children for infinite loop if needed
    if (infiniteLoop && scrollContainer.children.length > 0) {
      // We only need to clone if it hasn't been done already
      if (!scrollContainer.querySelector('[data-clone="true"]')) {
        const childrenArray = Array.from(scrollContainer.children);
        
        // Clone items to the beginning and end for seamless looping
        childrenArray.forEach((child) => {
          const clone = child.cloneNode(true) as HTMLElement;
          clone.setAttribute('data-clone', 'true');
          scrollContainer.appendChild(clone);
        });
      }
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY || e.deltaX;
      scrollContainer.scrollLeft += delta * speed;
      
      if (infiniteLoop) {
        handleInfiniteLoop();
      }
    };

    // Function to handle infinite loop scrolling
    const handleInfiniteLoop = () => {
      if (!scrollContainer) return;
      
      const containerWidth = scrollContainer.clientWidth;
      const scrollWidth = scrollContainer.scrollWidth;
      const scrollLeft = scrollContainer.scrollLeft;
      
      // When we reach the end, jump to the start (clone area)
      if (scrollLeft + containerWidth >= scrollWidth - containerWidth) {
        // Don't set directly to 0, but to the position after the cloned items at the start
        // This creates a seamless loop
        scrollContainer.scrollLeft = containerWidth;
      }
      
      // When we scroll to the beginning and there are cloned items
      if (scrollLeft <= 0) {
        // Jump to the cloned items at the end
        scrollContainer.scrollLeft = scrollWidth - containerWidth * 2;
      }
    };

    // Function to handle touch scrolling
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      isDraggingRef.current = true;
      container.classList.add('active');
      container.style.cursor = 'grabbing';
      startX = e.pageX - container.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      
      if (autoScroll && autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };

    const handleMouseUp = () => {
      isDown = false;
      isDraggingRef.current = false;
      container.classList.remove('active');
      container.style.cursor = 'grab';
      
      if (autoScroll) {
        startAutoScrollAnimation();
      }
      
      if (infiniteLoop) {
        handleInfiniteLoop();
      }
    };

    const handleMouseLeave = () => {
      if (isDown) {
        isDown = false;
        isDraggingRef.current = false;
        container.classList.remove('active');
        container.style.cursor = 'grab';
        
        if (autoScroll) {
          startAutoScrollAnimation();
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      isDown = true;
      isDraggingRef.current = true;
      container.classList.add('active');
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      
      if (autoScroll && autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    // Auto scroll animation
    const startAutoScrollAnimation = () => {
      if (!autoScroll || !scrollContainer) return;
      
      const animate = () => {
        if (scrollContainer && !isDraggingRef.current) {
          scrollContainer.scrollLeft += autoScrollSpeed;
          
          if (infiniteLoop) {
            handleInfiniteLoop();
          } else if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          }
        }
        
        autoScrollRef.current = requestAnimationFrame(animate);
      };
      
      autoScrollRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    // Add mouse events
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousemove', handleMouseMove);
    
    // Add touch events
    container.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleMouseUp);
    container.addEventListener('touchmove', handleTouchMove);
    
    // Start auto scroll if enabled
    if (autoScroll) {
      startAutoScrollAnimation();
    }
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      
      // Clean up mouse events
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousemove', handleMouseMove);
      
      // Clean up touch events
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleMouseUp);
      container.removeEventListener('touchmove', handleTouchMove);
      
      // Clean up auto scroll
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, [speed, autoScroll, autoScrollSpeed, infiniteLoop]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full overflow-hidden cursor-grab select-none ${className}`}
    >
      <div 
        ref={scrollRef} 
        className="overflow-x-hidden scrollbar-hide flex"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',  /* IE and Edge */
          scrollbarWidth: 'none',   /* Firefox */
          userSelect: 'none'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
