import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 font-sans font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm tracking-wide";
  
  const variants = {
    primary: "bg-gold-500 text-black hover:bg-gold-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] active:scale-95",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black active:scale-95",
    ghost: "text-gray-300 hover:text-gold-500 hover:bg-white/5"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
