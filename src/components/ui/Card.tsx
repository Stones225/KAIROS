import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  onClick,
}) => {
  const baseStyles = 'bg-white rounded-xl shadow-sm border border-gray-200';
  const hoverStyles = hover ? 'hover:shadow-md hover:border-primary-200 transition-all duration-200 cursor-pointer' : '';
  
  const classes = clsx(baseStyles, hoverStyles, className);
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};