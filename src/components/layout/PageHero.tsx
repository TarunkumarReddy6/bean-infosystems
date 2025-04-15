
import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark gradient overlay */}
        <div className={`absolute inset-0 ${imageUrl ? 'bg-background/80' : 'hero-gradient'}`}></div>
        
        {/* Extra visual elements - Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)]"
          style={{ backgroundSize: '50px 50px' }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-in">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
