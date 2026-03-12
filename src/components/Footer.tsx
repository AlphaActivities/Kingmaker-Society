import { Mail, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
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
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/share/1AjDsJoufe/?mibextid=wwXIfr',
      label: 'Facebook',
      gradient: 'from-blue-600 to-blue-400',
      hoverGlow: 'hover:shadow-blue-500/50'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/kingmakersocial?igsh=YXdveTkyczZkazgy',
      label: 'Instagram',
      gradient: 'from-pink-600 via-purple-600 to-orange-500',
      hoverGlow: 'hover:shadow-pink-500/50'
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@KINGMAKERSOCIETY',
      label: 'YouTube',
      gradient: 'from-red-600 to-red-500',
      hoverGlow: 'hover:shadow-red-500/50'
    },
    {
      icon: MessageCircle,
      href: 'https://discord.gg/hHSuV4tSm',
      label: 'Discord',
      gradient: 'from-indigo-600 to-indigo-500',
      hoverGlow: 'hover:shadow-indigo-500/50'
    },
  ];

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
            <ul className="flex flex-col justify-between flex-1">
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
            <h3 className="text-white font-bold mb-6">Connect</h3>
            <div className="flex flex-col space-y-4 flex-1">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3"
                >
                  <div className={`relative w-10 h-10 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${social.hoverGlow}`}>
                    <social.icon className="w-5 h-5 text-white" />
                    <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
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
