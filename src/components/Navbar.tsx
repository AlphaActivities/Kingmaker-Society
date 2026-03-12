import { useState, useEffect } from 'react';
import Button from './ui/Button';
import HamburgerIcon from './ui/HamburgerIcon';
import { luxuryScrollToSection } from '../utils/luxuryScroll';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    luxuryScrollToSection(id, 80);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#0B0B0B]/98 backdrop-blur-xl shadow-2xl shadow-black/60 border-b border-[#FFC300]/20'
          : 'bg-[#0B0B0B]/30 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            aria-label="Go to homepage"
          >
            <img
              src="/images/logos/logo.PNG"
              alt="Kingmaker Society Logo"
              className="w-8 h-8 object-contain"
              aria-hidden="true"
            />
            <span className="text-xl font-bold text-white">
              Kingmaker <span className="text-[#FFC300]">Society</span>
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-[#FFC300] transition-all duration-300 font-medium relative group"
              aria-label="Navigate to Home"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC300] group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
            </button>
            <button
              onClick={() => scrollToSection('who-this-is-for')}
              className="text-white hover:text-[#FFC300] transition-all duration-300 font-medium relative group"
              aria-label="Navigate to About"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC300] group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
            </button>
            <button
              onClick={() => scrollToSection('schedule')}
              className="text-white hover:text-[#FFC300] transition-all duration-300 font-medium relative group"
              aria-label="Navigate to Schedule"
            >
              Schedule
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC300] group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
            </button>
            <button
              onClick={() => scrollToSection('mentors')}
              className="text-white hover:text-[#FFC300] transition-all duration-300 font-medium relative group"
              aria-label="Navigate to Mentors"
            >
              Mentors
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC300] group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-[#FFC300] transition-all duration-300 font-medium relative group"
              aria-label="Navigate to Pricing"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC300] group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
            </button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection('application-form')}
            >
              Start Application
            </Button>
          </div>

          <HamburgerIcon
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
    </nav>
  );
}
