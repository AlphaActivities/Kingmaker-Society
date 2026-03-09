import { Facebook, Instagram, Youtube, Link as LinkIcon, MessageCircle } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import LuxFadeIn from '../ui/LuxFadeIn';

export default function SocialProof() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/1AjDsJoufe/?mibextid=wwXIfr',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/kingmakersocial?igsh=YXdveTkyczZkazgy',
      color: 'hover:text-pink-500',
    },
    {
      name: 'TikTok',
      icon: MessageCircle,
      url: 'https://www.tiktok.com/@kingmaker.society?_r=1&_t=ZP-946vWbtdl9S',
      color: 'hover:text-white',
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.gg/hHSuV4tSm',
      color: 'hover:text-[#FFC300]',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@KINGMAKERSOCIETY',
      color: 'hover:text-red-500',
    },
    {
      name: 'Linktree',
      icon: LinkIcon,
      url: 'https://linktr.ee/kingmakersocialwork',
      color: 'hover:text-green-500',
    },
  ];

  return (
    <Section id="social" background="darker">
      <LuxFadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Brotherhood
          </h2>
          <p className="text-xl text-gray-300">
            Connect with us on social media and see the daily wins, transformations, and brotherhood in action.
          </p>
        </div>
      </LuxFadeIn>

      <LuxFadeIn delay={0.1}>
        <Card variant="premium" className="p-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="flex flex-col items-center space-y-3 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`w-16 h-16 bg-[#2B2B2B] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3B3B3B] ${social.color}`}>
                <social.icon className="w-8 h-8 text-gray-400 group-hover:text-current transition-colors duration-300" />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </Card>
      </LuxFadeIn>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <LuxFadeIn delay={0.2}>
          <Card variant="premium" className="p-6 text-center hover:scale-105 transition-all duration-500">
          <div className="text-4xl font-bold text-[#FFC300] mb-2">500+</div>
          <p className="text-gray-400">Active Members</p>
        </Card>
        </LuxFadeIn>
        <LuxFadeIn delay={0.3}>
          <Card variant="premium" className="p-6 text-center hover:scale-105 transition-all duration-500">
            <div className="text-4xl font-bold text-[#FFC300] mb-2">1000+</div>
            <p className="text-gray-400">Transformations</p>
          </Card>
        </LuxFadeIn>
        <LuxFadeIn delay={0.4}>
          <Card variant="premium" className="p-6 text-center hover:scale-105 transition-all duration-500">
            <div className="text-4xl font-bold text-[#FFC300] mb-2">Daily</div>
            <p className="text-gray-400">Accountability Calls</p>
          </Card>
        </LuxFadeIn>
      </div>
    </Section>
  );
}
