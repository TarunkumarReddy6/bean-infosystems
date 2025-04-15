
import React, { useState, useEffect } from 'react';

interface PageLoaderProps {
  minDuration?: number;
}

const PageLoader: React.FC<PageLoaderProps> = ({ minDuration = 2000 }) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const incrementProgress = () => {
      setProgress((prevProgress) => {
        const elapsed = Date.now() - startTime;
        const remainingTime = Math.max(0, minDuration - elapsed);
        
        // Slow down as we approach 100%
        const increment = remainingTime > 0 ? 
          Math.min(1, (100 - prevProgress) / 50) : 
          Math.min(5, (100 - prevProgress) / 2);
          
        const newProgress = Math.min(99, prevProgress + increment);
        
        // When fully loaded and min duration passed
        if (newProgress >= 99 && elapsed >= minDuration) {
          clearInterval(interval);
          
          // Small delay before reaching 100%
          setTimeout(() => {
            setProgress(100);
            
            // Small delay before hiding loader
            setTimeout(() => setLoading(false), 300);
          }, 200);
        }
        
        return newProgress;
      });
    };

    // Start incrementing progress
    interval = setInterval(incrementProgress, 100);

    // Ensure loader shows for at least minDuration
    timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 300);
    }, minDuration + 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [minDuration]);

  if (!loading && progress >= 100) return null;

  return (
    <div className={`page-loader ${progress >= 100 ? 'loader-hidden' : ''}`}>
      <div className="text-4xl font-bold mb-4 text-gradient">Bean Info System</div>
      <div className="loader-progress">
        <div 
          className="loader-progress-bar" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-3 text-foreground/70">
        {progress < 100 ? 'Loading experience...' : 'Welcome'}
      </div>
    </div>
  );
};

export default PageLoader;
