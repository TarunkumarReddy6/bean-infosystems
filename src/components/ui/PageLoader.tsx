
import React, { useEffect, useState } from 'react';

const PageLoader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // This component is now simplified with loading disabled
    setLoading(false);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-t-bean animate-spin"></div>
      </div>
    </div>
  );
};

export default PageLoader;
