
import React from 'react';
import { Laptop, BarChart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import HorizontalScroll from '@/components/ui/HorizontalScroll';
import PageSection from '@/components/layout/PageSection';

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

  return (
    <PageSection title="Our Capabilities" subtitle="Explore our expertise">
      <div className="overflow-hidden relative">
        <HorizontalScroll 
          autoScroll={true} 
          autoScrollSpeed={0.5} 
          infiniteLoop={true}
          className="py-4"
        >
          {capabilities.map((item, index) => (
            <div 
              key={`card-${index}`}
              className="min-w-[300px] flex-shrink-0 px-3"
            >
              <Card className="h-full p-6 flex flex-col items-center justify-center text-center">
                <div className="text-bean mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">
                  Expert solutions tailored to your unique business needs.
                </p>
              </Card>
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </PageSection>
  );
};

export default CapabilitiesSection;
