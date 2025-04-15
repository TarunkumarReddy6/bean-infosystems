
import React from 'react';

interface PageSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

const PageSection: React.FC<PageSectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  className, 
  children,
  dark = false
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 ${dark ? 'bg-secondary' : ''} ${className || ''}`}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="max-w-3xl mx-auto text-center mb-12">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
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
