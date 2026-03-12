import { Facebook, Instagram, Youtube, MessageCircle, Mail } from 'lucide-react';
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

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1AjDsJoufe/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/kingmakersocial?igsh=YXdveTkyczZkazgy', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@KINGMAKERSOCIETY', label: 'YouTube' },
    { icon: MessageCircle, href: 'https://discord.gg/hHSuV4tSm', label: 'Discord' },
  ];

  return (
    <footer className="bg-black border-t border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/logos/logo.PNG"
                alt="Kingmaker Society Logo"
                className="h-14 w-auto object-contain"
              />
              <span className="text-xl font-bold text-white">
                Kingmaker Society
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Built for men who want to lead their life, not just live it.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
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

          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
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

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="space-y-3">
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
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kingmaker Society. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-[#FFC300] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
