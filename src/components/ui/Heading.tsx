import type { HTMLAttributes, ReactNode } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const Heading = ({ 
  children, 
  level = 1, 
  variant, 
  className = '', 
  ...props 
}: HeadingProps) => {
  const variantClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-medium',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium'
  };
  
  const headingVariant = variant || (`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');
  const classes = `${variantClasses[headingVariant]} ${className}`;
  
  switch (level) {
    case 1:
      return <h1 className={classes} {...props}>{children}</h1>;
    case 2:
      return <h2 className={classes} {...props}>{children}</h2>;
    case 3:
      return <h3 className={classes} {...props}>{children}</h3>;
    case 4:
      return <h4 className={classes} {...props}>{children}</h4>;
    case 5:
      return <h5 className={classes} {...props}>{children}</h5>;
    case 6:
      return <h6 className={classes} {...props}>{children}</h6>;
    default:
      return <h1 className={classes} {...props}>{children}</h1>;
  }
};

export default Heading;