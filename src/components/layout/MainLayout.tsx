
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-elegant-white">
      <Navbar />
      <main className="flex-grow">
        <div className="gradient-section min-h-[20vh]"></div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
