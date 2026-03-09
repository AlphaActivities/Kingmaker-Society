import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'premium' | 'gold';
  hover?: boolean;
}

export default function Card({ children, className = '', variant = 'default', hover = false }: CardProps) {
  const baseStyles = 'rounded-xl transition-all duration-500 ease-out';

  const variants = {
    default: 'bg-[#2B2B2B] border border-[#3B3B3B]',
    premium: 'bg-gradient-to-br from-[#1B1B1B] to-[#2B2B2B] border border-[#FFC300]/20 shadow-lg',
    gold: 'bg-gradient-to-br from-[#2B2B2B] to-[#1B1B1B] border-2 border-[#FFC300] shadow-xl shadow-[#FFC300]/20',
  };

  const hoverStyles = hover
    ? 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFC300]/30 hover:border-[#FFC300]/50 cursor-pointer'
    : '';

  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
