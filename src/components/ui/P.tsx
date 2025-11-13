import type { HTMLAttributes, ReactNode } from 'react';

export interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  variant?: 'default' | 'small' | 'large' | 'muted';
}

const P = ({ children, variant = 'default', className, ...props }: PProps) => {
  const baseClasses = 'leading-relaxed';
  
  const variantClasses = {
    default: 'text-base text-gray-700',
    small: 'text-sm text-gray-600',
    large: 'text-lg text-gray-800',
    muted: 'text-base text-gray-500'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className || ''}`;

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

export default P;