
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
      {icon && <div className="text-bean mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      {link && (
        <div className="flex items-center text-bean font-medium">
          Learn More <ArrowRight size={16} className="ml-1" />
        </div>
      )}
    </>
  );

  return (
    <div 
      className={cn(
        'p-6 rounded-lg bg-card border border-border hover:border-bean/40 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]',
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
