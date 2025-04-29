
import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import CareersSection from '@/components/home/CareersSection';
import CtaSection from '@/components/home/CtaSection';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <CapabilitiesSection />
      <CareersSection />
      <CtaSection />
    </>
  );
};

export default Home;
