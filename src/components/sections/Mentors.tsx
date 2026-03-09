import { Crown, Dumbbell, Swords, Activity } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import LuxFadeIn from '../ui/LuxFadeIn';
import MediaImage from '../ui/MediaImage';

export default function Mentors() {
  const founders = [
    {
      name: 'Jordan Ali',
      role: 'Founder, Kingmaker Society',
      icon: Crown,
      image: 'https://images.pexels.com/photos/6741245/pexels-photo-6741245.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional MMA fighter, business owner, and man of God. Jordan founded Kingmaker Society to create a high-accountability environment where men sharpen men through structure, brotherhood, and real action. He lives the standards he teaches: show up daily, train with intention, and build a life you can be proud of.',
    },
    {
      name: 'Christopher Valdez',
      role: 'Co-Founder, Kingmaker Society',
      icon: Crown,
      image: 'https://images.pexels.com/photos/3912953/pexels-photo-3912953.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '26-year-old co-founder fully committed to building the community and setting the standard from the inside out. Moved from California to Texas to lock in on the business, the brotherhood, and his personal fitness journey, with a goal of becoming Kingmaker Society\'s first major transformation testimonial.',
    },
  ];

  const mentors = [
    {
      name: 'Willie',
      division: 'MMA Division Lead',
      icon: Swords,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Combat sports expert teaching discipline, toughness, and warrior mentality.',
    },
    {
      name: 'Marcus',
      division: 'Bodybuilding Division Lead',
      icon: Dumbbell,
      image: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Bodybuilding specialist focused on building mass, strength, and aesthetic physiques.',
    },
    {
      name: 'Jordan Ali',
      division: 'Calisthenics Division Lead',
      icon: Activity,
      image: 'https://images.pexels.com/photos/4944420/pexels-photo-4944420.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Calisthenics master teaching bodyweight mastery and functional strength.',
    },
  ];

  return (
    <Section id="mentors" background="darker">
      <LuxFadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FFC300]/10 border border-[#FFC300]/30 rounded-full mb-6">
            <Crown className="w-4 h-4 text-[#FFC300]" />
            <span className="text-sm font-semibold text-[#FFC300]">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Your Mentors
          </h2>
          <p className="text-xl text-gray-300">
            Learn from men who have walked the path and built the life you want.
          </p>
        </div>
      </LuxFadeIn>

      <div className="mb-16">
        <LuxFadeIn delay={0.1}>
          <h3 className="text-2xl font-bold text-[#FFC300] mb-8 text-center">Founders</h3>
        </LuxFadeIn>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <LuxFadeIn key={index} delay={0.2 + index * 0.1}>
              <Card variant="gold" className="p-8 h-full hover:scale-105 transition-all duration-500">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#FFC300] shadow-2xl shadow-[#FFC300]/30">
                  <MediaImage
                    src={founder.image}
                    alt={`${founder.name}, ${founder.role}`}
                    className="w-full h-full"
                    objectFit="cover"
                    lazy={false}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{founder.name}</h4>
                  <p className="text-[#FFC300] font-semibold mb-4">{founder.role}</p>
                  <p className="text-gray-300">{founder.description}</p>
                </div>
              </div>
            </Card>
            </LuxFadeIn>
          ))}
        </div>
      </div>

      <div>
        <LuxFadeIn delay={0.4}>
          <h3 className="text-2xl font-bold text-[#FFC300] mb-8 text-center">Division Mentors</h3>
        </LuxFadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
            <LuxFadeIn key={index} delay={0.5 + index * 0.1}>
              <Card variant="premium" hover className="p-6 h-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#FFC300]/30 shadow-xl shadow-[#D11F2A]/20">
                  <MediaImage
                    src={mentor.image}
                    alt={`${mentor.name}, ${mentor.division}`}
                    className="w-full h-full"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D11F2A]/60 to-transparent" />
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <mentor.icon className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{mentor.name}</h4>
                  <p className="text-[#FFC300] font-semibold text-sm mb-3">{mentor.division}</p>
                  <p className="text-gray-400 text-sm">{mentor.description}</p>
                </div>
              </div>
            </Card>
            </LuxFadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
