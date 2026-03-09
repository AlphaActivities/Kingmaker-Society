import { Crown, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import LuxFadeIn from '../ui/LuxFadeIn';
import { luxuryScrollToSection } from '../../utils/luxuryScroll';
import { trackFinalCTA } from '../../utils/analytics';

export default function FinalCTA() {
  const scrollToSection = (id: string) => {
    luxuryScrollToSection(id, 80);
  };

  const handleApplyClick = () => {
    trackFinalCTA('apply');
    scrollToSection('hero');
  };

  const handleBookCallClick = () => {
    trackFinalCTA('book_call');
    scrollToSection('book-call');
  };

  return (
    <Section id="final-cta" background="gradient">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D11F2A]/20 to-[#FFC300]/20 blur-3xl"></div>

        <div className="relative text-center max-w-4xl mx-auto space-y-8">
          <LuxFadeIn>
            <Crown className="w-20 h-20 text-[#FFC300] mx-auto drop-shadow-[0_0_30px_rgba(255,195,0,0.4)]" />
          </LuxFadeIn>

          <LuxFadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Transformation Starts{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] to-[#D4A000] drop-shadow-[0_0_30px_rgba(255,195,0,0.3)]">
                Today
              </span>
            </h2>
          </LuxFadeIn>

          <LuxFadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              You have two choices. Keep trying to do this alone, watching another year slip by. Or join a brotherhood of faith-driven men building discipline, purpose, and the life they were called to lead.
            </p>
          </LuxFadeIn>

          <LuxFadeIn delay={0.3}>
            <div className="bg-gradient-to-br from-[#1B1B1B] to-[#2B2B2B] border-2 border-[#FFC300]/30 rounded-2xl p-8 md:p-12 hover:border-[#FFC300]/50 hover:shadow-2xl hover:shadow-[#FFC300]/20 transition-all duration-500">
            <p className="text-2xl md:text-3xl font-bold text-white mb-6">
              The Question Is Simple:
            </p>
            <p className="text-xl md:text-2xl text-[#FFC300] mb-8">
              Are you ready to lead your life, not just live it?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleApplyClick}
                className="text-lg"
              >
                Start Your Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleBookCallClick}
                className="text-lg"
              >
                Book a Strategy Call
              </Button>
            </div>
          </div>
          </LuxFadeIn>

          <LuxFadeIn delay={0.4}>
            <div className="pt-8">
              <p className="text-gray-400 text-lg">
                Join hundreds of faith-driven men mastering their body, habits, and purpose through the Kingmaker Society brotherhood.
              </p>
            </div>
          </LuxFadeIn>
        </div>
      </div>
    </Section>
  );
}
