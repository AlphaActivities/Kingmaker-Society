import { Mail } from 'lucide-react';
import { luxuryScrollToSection } from '../utils/luxuryScroll';

export default function Footer() {
  const scrollToSection = (id: string) => {
    luxuryScrollToSection(id, 80);
  };

  const footerLinks = {
    navigation: [
      { label: 'Home', id: 'hero' },
      { label: 'About', id: 'who-this-is-for' },
      { label: 'Schedule', id: 'schedule' },
      { label: 'Mentors', id: 'mentors' },
      { label: 'Pricing', id: 'pricing' },
    ],
    resources: [
      { label: 'Reviews', href: '#' },
      { label: 'Application', id: 'hero' },
      { label: 'Book a Call', id: 'book-call' },
    ],
  };

  return (
    <footer className="bg-black border-t border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div className="md:col-span-1 flex flex-col">
            <div className="flex flex-col items-center space-y-3 mb-6">
              <img
                src="/images/logos/logo.PNG"
                alt="Kingmaker Society Logo"
                className="h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,195,0,0.3)] transition-all duration-500 hover:drop-shadow-[0_0_25px_rgba(255,195,0,0.5)] hover:scale-105"
              />
              <span className="text-2xl font-bold text-white tracking-wide">
                Kingmaker <span className="text-[#FFC300]">Society</span>
              </span>
            </div>
            <div className="text-gray-400 text-sm text-center leading-relaxed space-y-3 flex-1">
              <p className="text-gray-300">Built for men who want to lead their life, not just live it.</p>
              <p className="text-gray-300">Where discipline meets purpose, and brotherhood fuels transformation.</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-3 flex-1">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#FFC300] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white font-bold mb-6">Resources</h3>
            <ul className="space-y-3 flex-1">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {link.id ? (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-[#FFC300] transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#FFC300] transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <div className="space-y-3 flex-1">
              <a
                href="mailto:contact@kingmakersociety.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#FFC300] transition-colors duration-200 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>contact@kingmakersociety.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2B2B2B] pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kingmaker Society. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
