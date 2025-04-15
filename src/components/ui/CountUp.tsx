
import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  separator = ',',
  decimals = 0,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const formatNumber = (num: number) => {
    return prefix + 
      num.toFixed(decimals)
        .replace(/\B(?=(\d{3})+(?!\d))/g, separator) + 
      suffix;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let requestId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3); // Cubic ease out
      
      setCount(Math.floor(easeOut(percentage) * end));
      
      if (progress < duration) {
        requestId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    requestId = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(requestId);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className={className}>
      {formatNumber(count)}
    </div>
  );
};

export default CountUp;
