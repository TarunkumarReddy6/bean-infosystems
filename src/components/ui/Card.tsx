
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  glassEffect?: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ 
  className, 
  glassEffect = false,
  children,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        'rounded-lg overflow-hidden transition-all duration-300', 
        glassEffect ? 'glass-card' : 'bg-card border border-border hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
