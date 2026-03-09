import { useEffect, useState } from 'react';
import Button from './Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; id: string }>;
  onNavigate: (id: string) => void;
}

export default function MobileMenu({ isOpen, onClose, navLinks, onNavigate }: MobileMenuProps) {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Enhanced backdrop overlay - fully opaque to completely obscure content */}
      <div
        className={`fixed top-20 left-0 right-0 bottom-0 bg-black/90 backdrop-blur-xl backdrop-saturate-200 z-[105] transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      >
        {/* Radial vignette for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black" />
      </div>

      <div
        className={`fixed top-20 bottom-0 right-0 w-full sm:w-80 z-[108] shadow-2xl overflow-hidden transform transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Base solid layer - 100% opaque */}
        <div className="absolute inset-0 bg-[#0B0B0B]" />

        {/* Rich gradient overlay - warm tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#1a1200] to-[#0B0B0B]" />

        {/* Secondary gradient for depth - increased opacity */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#D11F2A]/8 via-transparent to-[#FFC300]/8" />

        {/* Diagonal gradient for luxury effect - enhanced warmth */}
        <div className="absolute inset-0 bg-gradient-to-tl from-[#1a1200]/90 via-transparent to-transparent" />

        {/* Corner accents - top right - enhanced glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#FFC300]/12 to-transparent rounded-full blur-3xl" />

        {/* Corner accents - bottom left - enhanced glow */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-[#D11F2A]/12 to-transparent rounded-full blur-3xl" />

        {/* Shimmer overlay animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FFC300]/5 to-transparent animate-shimmer opacity-0 hover:opacity-100 transition-opacity duration-1000" />

        {/* Enhanced grid pattern - increased opacity for architectural feel */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFGMUYxRiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

        {/* Noise texture for premium finish */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

        {/* Enhanced glowing left border with stronger shadows */}
        <div
          className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FFC300] via-[#D11F2A] to-transparent shadow-[0_0_30px_rgba(255,195,0,0.5),0_0_60px_rgba(255,195,0,0.2)] transition-all duration-700 delay-200 ${
            isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}
          style={{ transformOrigin: 'top' }}
        />

        {/* Additional inner glow for the border */}
        <div
          className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-[#FFC300]/20 to-transparent transition-all duration-700 delay-200 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Enhanced top and bottom borders with glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFC300]/40 to-transparent shadow-[0_0_10px_rgba(255,195,0,0.3)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFC300]/40 to-transparent shadow-[0_0_10px_rgba(255,195,0,0.3)]" />

        {/* Corner accent - top left */}
        <div className="absolute top-0 left-0 w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFC300]/30 to-transparent" />
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#FFC300]/30 to-transparent" />
        </div>

        {/* Corner accent - bottom right */}
        <div className="absolute bottom-0 right-0 w-20 h-20">
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#FFC300]/30 to-transparent" />
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-[#FFC300]/30 to-transparent" />
        </div>

        <div className="relative h-full flex flex-col p-8 pt-4 overflow-y-auto">

          <nav className="flex-1 space-y-1" aria-label="Mobile menu navigation">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`group relative w-full text-left text-white/70 hover:text-[#FFC300] transition-all duration-400 font-medium text-xl py-4 px-4 rounded-lg hover:bg-[#FFC300]/5 hover:scale-[1.02] ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{
                  transitionDelay: isOpen ? `${200 + index * 80}ms` : '0ms',
                  transitionDuration: '500ms',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  letterSpacing: '0.02em',
                  lineHeight: '1.6',
                  fontWeight: 500,
                }}
              >
                <span className="relative z-10 inline-block group-hover:tracking-[0.08em] group-hover:font-semibold transition-all duration-300 group-hover:drop-shadow-[0_2px_12px_rgba(255,195,0,0.4)]">
                  {link.label}
                </span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#FFC300] group-hover:h-9 transition-all duration-300 rounded-full shadow-[0_0_12px_rgba(255,195,0,0.6)]" />
                <span className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#FFC300]/20 to-transparent" />
              </button>
            ))}
          </nav>

          <div className="space-y-4 mt-4">
            {/* Enhanced Elite Members Badge with luxury styling */}
            <div
              className={`relative mx-auto w-fit px-6 py-3 rounded-full border border-[#FFC300]/40 bg-gradient-to-r from-[#FFC300]/5 to-[#D11F2A]/5 backdrop-blur-sm transition-all duration-500 ${
                isOpen
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-4 scale-95'
              }`}
              style={{
                transitionDelay: isOpen ? '600ms' : '0ms',
                boxShadow: '0 0 20px rgba(255,195,0,0.3), inset 0 1px 0 rgba(255,195,0,0.2)',
              }}
            >
              {/* Pulsing glow animation */}
              <div className="absolute inset-0 rounded-full bg-[#FFC300]/20 animate-pulse-glow" />

              <div className="relative text-center text-base tracking-wide">
                <span className="text-[#FFC300] font-bold text-lg">500+</span>
                <span className="text-white/80 font-medium ml-2">Elite Members</span>
              </div>

              {/* Subtle shimmer effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            <Button
              variant="secondary"
              size="lg"
              className={`w-full relative overflow-hidden transition-all duration-500 ${
                isOpen
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              } ${isButtonPressed ? 'animate-haptic-feedback' : ''}`}
              onClick={() => {
                setIsButtonPressed(true);
                setTimeout(() => setIsButtonPressed(false), 600);
                onNavigate('hero');
              }}
              style={{ transitionDelay: isOpen ? '700ms' : '0ms' }}
            >
              <span className="relative z-10">Start Application</span>

              {/* Haptic ripple effect */}
              {isButtonPressed && (
                <>
                  <span className="absolute inset-0 rounded-lg border-2 border-white/40 animate-ripple-1" />
                  <span className="absolute inset-0 rounded-lg border-2 border-white/30 animate-ripple-2" />
                  <span className="absolute inset-0 rounded-lg border-2 border-white/20 animate-ripple-3" />
                </>
              )}

              {/* Particle burst effects */}
              {isButtonPressed && (
                <>
                  <span className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-particle-1" />
                  <span className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-particle-2" />
                  <span className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-particle-3" />
                  <span className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-particle-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
