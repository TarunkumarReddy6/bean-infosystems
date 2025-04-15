
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive');
      
      setIsHovering(!!isClickable);
      
      // Check if we're hovering over a scrollable area
      const isScrollable = 
        target.classList.contains('cursor-grab') || 
        target.closest('.cursor-grab');
      
      setIsGrabbing(!!isScrollable && e.buttons === 1);
    };
    
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we're clicking on a scrollable area
      const isScrollable = 
        target.classList.contains('cursor-grab') || 
        target.closest('.cursor-grab');
      
      if (isScrollable) {
        setIsGrabbing(true);
      }
    };
    
    const handleMouseUp = () => {
      setIsGrabbing(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible]);

  if (typeof window === 'undefined' || !isVisible) return null;

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hover' : ''} ${isGrabbing ? 'grabbing' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
};

export default CustomCursor;
