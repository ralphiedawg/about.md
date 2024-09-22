import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'ghost';
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  href?: string; // Optional for link behavior
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  asChild = false,
  size = 'md',
  className,
  children,
  href,
}) => {
  const baseClasses = 'rounded-md font-semibold transition-all focus:outline-none';
  const variantClasses = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-100',
  };
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (asChild && href) {
    return <a href={href} className={classes}>{children}</a>;
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
};

export default Button;
