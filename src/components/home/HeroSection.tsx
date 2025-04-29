
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import MagneticButton from '@/components/ui/MagneticButton';

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const words = ["Digital", "Business", "Creative", "Innovative"];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const yPos = window.scrollY * 0.4;
        heroRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/50 z-0"></div>
      
      <div className="absolute inset-0 z-0 hero-gradient">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]" style={{ backgroundSize: '50px 50px' }}></div>
      </div>
      
      <div className="absolute top-1/4 right-[15%] w-48 h-48 bg-bean/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-bean/10 rounded-full blur-3xl"></div>
      
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-2 h-2 bg-bean/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={heroRef}>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimator animation="fade-in" threshold={0.1} delay={200}>
            <div className="inline-block mb-6 px-3 py-1 border border-bean/30 rounded-full bg-card/40 backdrop-blur-sm text-bean text-sm">
              <span className="animate-pulse mr-2">•</span>
              Innovation that transforms
            </div>
          </ScrollAnimator>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            <ScrollAnimator animation="slide-in-down" threshold={0.1} delay={300}>
              Empowering
            </ScrollAnimator>
            <ScrollAnimator animation="slide-in-up" threshold={0.1} delay={600}>
              <div className="h-[1.2em] overflow-hidden relative mt-2 text-center">
                {words.map((word, index) => (
                  <span 
                    key={word}
                    className="text-gradient absolute w-full left-0 right-0 transition-all duration-700"
                    style={{
                      opacity: currentWordIndex === index ? 1 : 0,
                      transform: currentWordIndex === index ? 'translateY(0)' : 'translateY(100%)'
                    }}
                  >
                    {word} Evolution
                  </span>
                ))}
              </div>
            </ScrollAnimator>
          </h1>
          
          <ScrollAnimator animation="fade-in" threshold={0.1} delay={900}>
            <p className="text-xl text-foreground/70 mb-8">
              We create innovative software solutions that help businesses thrive in the digital landscape. 
              Our expert team delivers cutting-edge applications, strategic consulting, and transformative advisory services.
            </p>
          </ScrollAnimator>
          
          <div className="flex justify-center items-center space-x-4 mt-8">
            <ScrollAnimator animation="slide-in-right" delay={1100}>
              <MagneticButton className="btn-primary glow-effect">
                <Link to="/services" className="flex items-center">
                  Explore Our Services
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </MagneticButton>
            </ScrollAnimator>
            
            <ScrollAnimator animation="slide-in-left" delay={1200}>
              <MagneticButton className="px-6 py-2 border border-border hover:border-bean rounded-md transition-all duration-300 flex items-center justify-center">
                <Link to="/contact" className="flex items-center">
                  Contact Us
                </Link>
              </MagneticButton>
            </ScrollAnimator>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
