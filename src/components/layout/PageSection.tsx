
import React from 'react';

interface PageSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
  gradient?: 'blue' | 'aqua' | 'lavender' | undefined;
}

const PageSection: React.FC<PageSectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  className, 
  children,
  dark = false,
  gradient
}) => {
  const gradientClass = gradient ? `bg-gradient-${gradient}` : '';
  
  return (
    <section 
      id={id} 
      className={`py-16 ${dark ? 'bg-muted' : gradientClass} ${className || ''}`}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="max-w-3xl mx-auto text-center mb-12">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-tick-blue">{title}</h2>
            )}
            {subtitle && (
              <p className="text-foreground/70 text-lg">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageSection;
