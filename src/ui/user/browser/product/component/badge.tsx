import { ReactElement } from 'react';

export type Children = ReactElement | ReactElement[] | string | null;

export interface IBadgeProps {
  children: Children;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'gray' | 'green' | 'white';
  className?: string;
}

export const Badge = ({ children, size = 'md', variant = 'gray', className }: IBadgeProps) => {
  const sizeCls = {
    sm: 'px-1 py-0.5 text-xs',
    md: 'px-1.5 py-1.0 text-sm',
    lg: 'px-1.5 py-1.0',
  };
  const variantCls = {
    primary: 'bg-primary text-white',
    gray: 'bg-[#404040] text-white',
    green: 'bg-green-600 text-white',
    white: 'bg-white text-primary-800',
  };
  return (
    <span
      className={`transition-all inline-block rounded-sm font-semibold ${sizeCls[size]} ${variantCls[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
