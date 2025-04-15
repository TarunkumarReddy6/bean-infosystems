
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
  className?: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  description,
  icon,
  link,
  className,
}) => {
  const CardContent = () => (
    <>
      {icon && <div className="text-tick-blue mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3 text-tick-blue">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      {link && (
        <div className="elegant-link group flex items-center">
          Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </>
  );

  return (
    <div 
      className={cn(
        'elegant-card p-6',
        className
      )}
    >
      {link ? (
        <Link to={link} className="block h-full">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </div>
  );
};

export default FeaturedCard;
