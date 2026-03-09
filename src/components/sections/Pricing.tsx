import { Check, Star, Crown } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import LuxFadeIn from '../ui/LuxFadeIn';
import { trackClickJoinTier } from '../../utils/analytics';

export default function Pricing() {
  const handleJoinTier = (tierName: string, price: number, stripeLink: string) => {
    const tierType = tierName === 'General Access' ? 'general' : tierName === 'VIP Access' ? 'vip' : 'elite';
    trackClickJoinTier(tierType, price);
    window.open(stripeLink, '_blank');
  };

  const tiers = [
    {
      name: 'General Access',
      price: 30,
      badge: null,
      stripeLink: 'https://buy.stripe.com/9B6dR87h74wuavg7AI0f',
      features: [
        '24/7 access to the Kingmaker Society Discord brotherhood',
        'Access to live Zoom calls covering Faith, Fitness, Health, Mindset, Goals',
        'Structured pillar system',
        'Community accountability and brotherhood support',
        'High standard environment for mental, physical, and spiritual growth',
        'No 1-on-1 mentorship in this tier',
      ],
      variant: 'premium' as const,
      recommended: false,
    },
    {
      name: 'VIP Access',
      price: 60,
      badge: 'Popular',
      stripeLink: 'https://buy.stripe.com/7sY3cucBrfb8avg05S7AI0g',
      features: [
        'Everything in General Access',
        'Monthly 1-on-1 mini audit',
        'Personalized weekly check-in',
        'Priority Q&A',
        'Faster responses',
        'Hot seats and real-time troubleshooting',
        'Member spotlights and progress reviews',
      ],
      variant: 'premium' as const,
      recommended: false,
    },
    {
      name: 'Elite Access',
      price: 90,
      badge: 'Recommended',
      stripeLink: 'https://buy.stripe.com/aFa00ieJzbYWavg3i47AI0h',
      features: [
        'Everything in General + VIP',
        'Weekly VIP mentorship and accountability structure',
        'Monthly 1-on-1 mentorship call on private Zoom',
        'Elite-only inner circle chat with direct access to mentors',
        'Personalized Kingmaker growth game plan',
        'Monthly progress audit and accountability review',
        'Priority feedback and faster direct support',
        'Early access to future programs and events',
        'Limited spots to maintain quality',
      ],
      variant: 'gold' as const,
      recommended: true,
    },
  ];

  return (
    <Section id="pricing" background="gradient">
      <LuxFadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FFC300]/10 border border-[#FFC300]/30 rounded-full mb-6">
            <Crown className="w-4 h-4 text-[#FFC300]" />
            <span className="text-sm font-semibold text-[#FFC300]">Membership Tiers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Level
          </h2>
          <p className="text-xl text-gray-300">
            Select the tier that matches your commitment level and goals. All tiers include lifetime brotherhood access.
          </p>
        </div>
      </LuxFadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <LuxFadeIn key={index} delay={index * 0.15}>
            <Card
              variant={tier.variant}
              className={`p-8 relative h-full ${tier.recommended ? 'md:scale-105 md:shadow-2xl hover:-translate-y-1 hover:shadow-[#FFC300]/40' : 'hover:-translate-y-1'} transition-all duration-500`}
            >
            {tier.badge && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#D11F2A] to-[#A01620] px-4 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                  <Star className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white">{tier.badge}</span>
                </div>
              </div>
            )}

            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
              <div className="flex items-baseline justify-center space-x-2">
                <span className="text-5xl font-bold text-[#FFC300]">${tier.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {tier.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#FFC300] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              variant={tier.recommended ? 'secondary' : 'primary'}
              size="lg"
              className="w-full"
              onClick={() => handleJoinTier(tier.name, tier.price, tier.stripeLink)}
            >
              {tier.recommended ? 'Join Elite' : 'Get Started'}
            </Button>

            {tier.recommended && (
              <p className="text-center text-[#FFC300] text-sm font-semibold mt-4">
                Limited spots available
              </p>
            )}
          </Card>
          </LuxFadeIn>
        ))}
      </div>

      <LuxFadeIn delay={0.5}>
        <Card variant="premium" className="p-8 text-center mt-12">
          <p className="text-xl text-white">
            All memberships are month-to-month. Cancel anytime. Your transformation is our priority.
          </p>
        </Card>
      </LuxFadeIn>
    </Section>
  );
}
