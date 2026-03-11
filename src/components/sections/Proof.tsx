import { useState, useEffect } from 'react';
import { Trophy, X } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import LuxFadeIn from '../ui/LuxFadeIn';
import MediaImage from '../ui/MediaImage';
import VideoPoster from '../ui/VideoPoster';

export default function Proof() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>('');

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeVideo]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeVideo) {
        setActiveVideo(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [activeVideo]);

  const handlePlayVideo = (videoUrl: string, title: string) => {
    setActiveVideo(videoUrl);
    setActiveTitle(title);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
    setActiveTitle('');
  };

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
      title: 'Jordan Ali | The Kingmaker Brotherhood',
      description: 'A direct look into the energy, structure, and mission behind the brotherhood.',
      posterImage: '/images/founders/jordan-ali-founder-selfie-portrait.jpg',
      videoUrl: '/videos/jordan-ali-brotherhood-promo-reel-01.mp4',
    },
    {
      title: 'Jordan Ali | Founder of Kingmaker Society',
      description: 'Founder-led authority, vision, and movement positioning for the brand.',
      posterImage: '/images/founders/jordan-ali-founder-gym-portrait.jpg',
      videoUrl: '/videos/jordan-ali-founder-promo-reel-01.mp4',
    },
    {
      title: 'Kingmaker Society | Men\'s Bible Study Brotherhood',
      description: 'A real glimpse into the faith-centered community and brotherhood environment.',
      posterImage: '/images/posters/kingmaker-bible-study-brotherhood-poster.jpg',
      videoUrl: '/videos/kingmaker-bible-study-zoom-promo-01.mp4',
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
                videoUrl={video.videoUrl}
                onPlay={() => handlePlayVideo(video.videoUrl, video.title)}
                aspectRatio="portrait"
                className="shadow-2xl shadow-black/50"
              />
            </LuxFadeIn>
          ))}
        </div>
      </div>

      {activeVideo && (
        <>
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[200] transition-opacity duration-300"
            onClick={handleCloseVideo}
            aria-hidden="true"
          />

          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="relative w-full max-w-lg mx-auto">
              <button
                onClick={handleCloseVideo}
                className="absolute -top-12 right-0 sm:-right-12 sm:top-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 z-10"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                {activeTitle && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 z-10">
                    <h3 className="text-white font-semibold text-sm sm:text-base leading-tight">
                      {activeTitle}
                    </h3>
                  </div>
                )}

                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  playsInline
                  className="w-full aspect-[9/16] object-contain"
                  style={{ maxHeight: 'calc(100vh - 8rem)' }}
                />
              </div>
            </div>
          </div>
        </>
      )}

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
