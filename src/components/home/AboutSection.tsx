
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import PageSection from '@/components/layout/PageSection';

const AboutSection = () => {
  return (
    <PageSection>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <ScrollAnimator animation="slide-in-left" className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold mb-4">Transforming Ideas into Digital Reality</h3>
          <p className="text-foreground/70 mb-4">
            At BeanInfo System, we envision a world where technology empowers businesses to achieve their fullest potential. 
            Our mission is to deliver exceptional digital experiences through innovative software solutions and strategic partnerships.
          </p>
          <p className="text-foreground/70 mb-6">
            We combine technical expertise with deep industry knowledge to create tailor-made solutions that address complex business challenges. 
            Our approach is collaborative, agile, and focused on delivering measurable results that drive growth and efficiency.
          </p>
          <Link to="/about" className="text-bean flex items-center font-medium hover:underline interactive">
            Learn more about us
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-right" className="order-1 md:order-2">
          <div className=" overflow-hidden shadow-xl rotate-element">
            <div className="bg-gradient-to-br from-bean/10 to-bean/5 aspect-video flex items-center justify-center p-6 shadow-inner relative">
              <div className="shimmer-effect"></div>
              <div className="glass-card p-1 max-w-[80%] hover:rotate-0 transition-all duration-500">
                <div className="text-4xl font-bold text-center mb-4 text-gradient">BeanInfo System</div>
                <img src="/images/career.jpg" alt="Career" className="w-full h-auto rounded-md mt-4" />
                <div className="bg-secondary/80 h-4 rounded w-2/3 mx-auto"></div>
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </PageSection>
  );
};

export default AboutSection;
