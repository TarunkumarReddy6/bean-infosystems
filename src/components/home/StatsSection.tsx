
import React from 'react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import CountUp from '@/components/ui/CountUp';
import ParallaxSection from '@/components/ui/ParallaxSection';

const StatsSection = () => {
  const stats = [
    { label: "Projects Completed", value: 320 },
    { label: "Happy Clients", value: 150 },
    { label: "Team Members", value: 45 },
    { label: "Years of Experience", value: 12 }
  ];

  return (
    <ParallaxSection className="diagonal-section bg-secondary py-20" speed={0.3}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollAnimator 
              key={index} 
              animation="fade-in" 
              delay={index * 200}
              className="text-center p-6"
            >
              <CountUp 
                end={stat.value} 
                className="text-4xl md:text-5xl font-bold text-gradient mb-2" 
                duration={2500}
              />
              <p className="text-foreground/70">{stat.label}</p>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};

export default StatsSection;
