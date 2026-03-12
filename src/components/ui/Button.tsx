import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold transition-all duration-400 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-[#0B0B0B]';

  const variants = {
    primary: 'bg-gradient-to-r from-[#D11F2A] to-[#A01620] text-white hover:from-[#E02030] hover:to-[#B01828] shadow-lg hover:shadow-2xl hover:shadow-[#D11F2A]/50 hover:-translate-y-1 hover:scale-105 focus:ring-[#D11F2A]/60',
    secondary: 'bg-gradient-to-r from-[#FFC300] via-[#FFD033] to-[#D4A000] text-[#0B0B0B] hover:from-[#FFD033] hover:via-[#FFE066] hover:to-[#E5B100] shadow-lg hover:shadow-2xl hover:shadow-[#FFC300]/60 font-bold hover:-translate-y-1 hover:scale-105 focus:ring-[#FFC300]/60',
    outline: 'border-2 border-[#FFC300]/60 text-[#FFC300] hover:bg-[#FFC300] hover:text-[#0B0B0B] hover:border-[#FFC300] shadow-md hover:shadow-xl hover:shadow-[#FFC300]/40 hover:-translate-y-1 hover:scale-105 focus:ring-[#FFC300]/60',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
    </button>
  );
}
