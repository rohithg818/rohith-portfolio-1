import React from 'react';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode;
}

export const CyberButton: React.FC<CyberButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold transition-all duration-150 group focus:outline-none";
  
  const variants = {
    primary: "text-[#00FF4F] border-2 border-[#00FF4F] hover:bg-[#00FF4F]/10 hover:shadow-[0_0_20px_rgba(0,255,79,0.5)]",
    secondary: "text-white border-2 border-white/70 hover:bg-white/10 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    danger: "text-red-500 border-2 border-red-500 hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-current opacity-10 group-hover:w-full group-hover:h-full -z-10"></span>
      {icon && <span className="mr-2">{icon}</span>}
      <span className="relative tracking-widest uppercase">{children}</span>
      
      {/* Decorative corners */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current"></span>
      <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-current"></span>
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-current"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current"></span>
    </button>
  );
};