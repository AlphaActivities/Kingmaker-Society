import { Phone } from 'lucide-react';

interface FloatingCallButtonProps {
  phoneNumber: string;
}

export default function FloatingCallButton({ phoneNumber }: FloatingCallButtonProps) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-6 right-6 z-50 md:hidden group"
      aria-label="Call us directly"
    >
      {/* Continuous pulsing glow rings */}
      <div className="absolute inset-0 rounded-full bg-[#FFC300]/60 animate-pulse-ring-1" />
      <div className="absolute inset-0 rounded-full bg-[#FFC300]/40 animate-pulse-ring-2" />
      <div className="absolute inset-0 rounded-full bg-[#FFC300]/20 animate-pulse-ring-3" />

      {/* Main button */}
      <button
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#FFC300] to-[#D4A000] shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_30px_rgba(255,195,0,0.5)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.4),0_0_45px_rgba(255,195,0,0.7)] transition-all duration-300 animate-subtle-bounce hover:scale-110 active:scale-95 backdrop-blur-sm overflow-hidden"
        aria-hidden="true"
        tabIndex={-1}
      >
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />

        {/* Icon */}
        <div className="relative flex items-center justify-center h-full group-hover:rotate-[5deg] transition-transform duration-300">
          <Phone className="w-6 h-6 text-[#0B0B0B] drop-shadow-sm" strokeWidth={2.5} />
        </div>

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full" />
      </button>

      {/* Floating tooltip on hover */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#0B0B0B]/95 backdrop-blur-md text-white text-sm font-medium rounded-lg shadow-xl border border-[#FFC300]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Call Now
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-[#0B0B0B]/95 border-r border-b border-[#FFC300]/20" />
      </div>
    </a>
  );
}
