
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import MagneticButton from '@/components/ui/MagneticButton';
import ParallaxSection from '@/components/ui/ParallaxSection';

const CtaSection = () => {
  return (
    <ParallaxSection className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimator animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-in" delay={200}>
            <p className="text-lg text-foreground/70 mb-8">
              Let's discuss how BeanInfo System can help your business thrive in the digital landscape.
            </p>
          </ScrollAnimator>
          <ScrollAnimator animation="fade-in" delay={400}>
            <MagneticButton strength={20} className="btn-primary inline-flex">
              <Link to="/contact" className="flex items-center">
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </MagneticButton>
          </ScrollAnimator>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default CtaSection;
