
import React from 'react';
import { Laptop, BarChart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import PageSection from '@/components/layout/PageSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import { cn } from '@/lib/utils';

interface IconProps {
  size?: number;
}

const SmartphoneIcon = ({ size = 24, ...props }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
);

const CloudIcon = ({ size = 24, ...props }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const PaletteIcon = ({ size = 24, ...props }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const LinkIcon = ({ size = 24, ...props }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
    <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const CapabilitiesSection = () => {
  const capabilities = [
    { title: "Web Development", icon: Laptop },
    { title: "Mobile Applications", icon: SmartphoneIcon },
    { title: "Cloud Solutions", icon: CloudIcon },
    { title: "UI/UX Design", icon: PaletteIcon },
    { title: "Data Analytics", icon: BarChart },
    { title: "API Integration", icon: LinkIcon }
  ];

  // Add duplicates to create a seamless loop effect
  const duplicatedCapabilities = [...capabilities, ...capabilities];
  
  // Reference to the carousel API
  const carouselRef = useRef<any>(null);
  const autoScrollRef = useRef<number | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (!carouselRef.current?.api) return;
      
      const scrollOneItem = () => {
        const api = carouselRef.current.api;
        
        // If near the end, smoothly go back to the beginning
        if (api.selectedScrollSnap() >= capabilities.length - 1) {
          // Silently jump to the duplicate area without animation
          api.scrollTo(0, false);
          
          // Then continue normal scrolling
          setTimeout(() => {
            api.scrollNext();
          }, 50);
        } else {
          api.scrollNext();
        }
        
        autoScrollRef.current = requestAnimationFrame(scrollOneItem);
      };
      
      // Slower interval for smooth scrolling
      autoScrollRef.current = setTimeout(() => {
        autoScrollRef.current = requestAnimationFrame(scrollOneItem);
      }, 3000);
    };

    // Start auto-scrolling
    startAutoScroll();

    // Clean up on unmount
    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
        clearTimeout(autoScrollRef.current);
      }
    };
  }, []);

  return (
    <PageSection title="Our Capabilities" subtitle="Explore our expertise">
      <div className="w-full overflow-hidden relative">
        <Carousel
          ref={carouselRef}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: false,
          }}
          className="w-full"
          setApi={(api) => {
            if (carouselRef.current) carouselRef.current.api = api;
          }}
        >
          <CarouselContent className="select-none">
            {duplicatedCapabilities.map((item, index) => (
              <CarouselItem 
                key={`card-${index}`} 
                className="pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="h-full p-6 flex flex-col items-center justify-center text-center cursor-grab active:cursor-grabbing">
                  <div className="text-bean mb-4">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">
                    Expert solutions tailored to your unique business needs.
                  </p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>
      </div>
    </PageSection>
  );
};

export default CapabilitiesSection;
