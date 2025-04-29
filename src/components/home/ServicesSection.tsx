
import React from 'react';
import { Code, Users, BarChart } from 'lucide-react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import FeaturedCard from '@/components/ui/FeaturedCard';
import PageSection from '@/components/layout/PageSection';

const ServicesSection = () => {
  return (
    <PageSection dark title="Our Services" subtitle="Comprehensive solutions to solve your business challenges">
      <div className="grid md:grid-cols-3 gap-6">
        <ScrollAnimator animation="slide-in-up" delay={200}>
          <FeaturedCard
            title="Application Development"
            description="Custom software applications designed to meet your unique business requirements and drive digital transformation."
            icon={<Code size={36} className="text-bean" />}
            link="/services/application-development"
          />
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-up" delay={400}>
          <FeaturedCard
            title="Consulting Services"
            description="Strategic guidance from industry experts to optimize your technology investments and improve business processes."
            icon={<Users size={36} className="text-bean" />}
            link="/services/consulting-services"
          />
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-up" delay={600}>
          <FeaturedCard
            title="Advisory Services"
            description="Insights and recommendations to help you navigate digital trends and make informed business decisions."
            icon={<BarChart size={36} className="text-bean" />}
            link="/services/advisory-services"
          />
        </ScrollAnimator>
      </div>
    </PageSection>
  );
};

export default ServicesSection;
