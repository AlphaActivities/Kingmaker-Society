import { Trophy } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import LuxFadeIn from '../ui/LuxFadeIn';
import MediaImage from '../ui/MediaImage';
import VideoPoster from '../ui/VideoPoster';

export default function Proof() {
  const proofGallery = [
    {
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/6740747/pexels-photo-6740747.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'MMA fighter training session showing combat discipline',
      category: 'MMA Training',
    },
    {
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Bodybuilding training showcasing strength and physique development',
      category: 'Bodybuilding',
    },
    {
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/4944499/pexels-photo-4944499.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Calisthenics athlete demonstrating bodyweight mastery',
      category: 'Calisthenics',
    },
    {
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/7991691/pexels-photo-7991691.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'MMA championship moment showing warrior mentality and victory',
      category: 'Championship',
    },
    {
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Brotherhood and accountability in group training session',
      category: 'Community',
    },
    {
      type: 'image' as const,
      src: 'https://images.pexels.com/photos/4944421/pexels-photo-4944421.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Transformation progress showing dedication and results',
      category: 'Transformation',
    },
  ];

  const videoShowcases = [
    {
      title: 'Behind the Brotherhood',
      description: 'See what happens inside our exclusive training sessions',
      posterImage: 'https://images.pexels.com/photos/7991311/pexels-photo-7991311.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Division Training Deep Dive',
      description: 'Expert mentorship across MMA, Bodybuilding, and Calisthenics',
      posterImage: 'https://images.pexels.com/photos/3838937/pexels-photo-3838937.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Transformation Stories',
      description: 'Real members share their journey from average to elite',
      posterImage: 'https://images.pexels.com/photos/4944421/pexels-photo-4944421.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <Section id="proof" background="gradient">
      <LuxFadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FFC300]/10 border border-[#FFC300]/30 rounded-full mb-6">
            <Trophy className="w-4 h-4 text-[#FFC300]" />
            <span className="text-sm font-semibold text-[#FFC300]">Proof & Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Men. Real Results.
          </h2>
          <p className="text-xl text-gray-300">
            Don't take our word for it. See the transformations happening every day inside Kingmaker Society.
          </p>
        </div>
      </LuxFadeIn>

      <div className="mb-16">
        <LuxFadeIn delay={0.1}>
          <h3 className="text-2xl font-bold text-[#FFC300] mb-8 text-center">Video Proof</h3>
        </LuxFadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {videoShowcases.map((video, index) => (
            <LuxFadeIn key={index} delay={0.2 + index * 0.1}>
              <VideoPoster
                title={video.title}
                description={video.description}
                posterImage={video.posterImage}
                aspectRatio="video"
                className="shadow-2xl shadow-black/50"
              />
            </LuxFadeIn>
          ))}
        </div>
      </div>

      <div>
        <LuxFadeIn delay={0.5}>
          <h3 className="text-2xl font-bold text-[#FFC300] mb-8 text-center">Training & Results Gallery</h3>
        </LuxFadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofGallery.map((item, index) => (
            <LuxFadeIn key={index} delay={0.6 + index * 0.08}>
              <Card variant="premium" className="aspect-square overflow-hidden hover:scale-105 transition-transform duration-500 group">
                <div className="relative w-full h-full">
                  <MediaImage
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-semibold text-[#FFC300]">{item.category}</p>
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
