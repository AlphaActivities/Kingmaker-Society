import { useState } from 'react';
import { Shield, Calendar, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Container from '../ui/Container';
import LuxFadeIn from '../ui/LuxFadeIn';
import HeroBackgroundSlider from '../ui/HeroBackgroundSlider';
import { luxuryScrollToSection, scrollToApplication } from '../../utils/luxuryScroll';
import { validateLeadForm, ValidationError } from '../../utils/validation';
import { submitLead } from '../../services/leadService';
import { useApplication } from '../../context/ApplicationContext';
import { trackBeginApplication, trackCompleteLeadForm } from '../../utils/analytics';

export default function Hero() {
  const { setLeadId, setApplicationStep, setLeadSubmitted } = useApplication();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    timezone: '',
    occupation: '',
    struggle: '',
  });
  const [errors, setErrors] = useState<ValidationError>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formStarted, setFormStarted] = useState(false);

  const handleFormStart = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackBeginApplication();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitError('');

    const validationErrors = validateLeadForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const result = await submitLead(formData);

    setIsSubmitting(false);

    if (result.success && result.leadId) {
      setLeadId(result.leadId);
      setLeadSubmitted(true);
      setSubmitSuccess(true);
      setApplicationStep('questionnaire');

      trackCompleteLeadForm({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
      });

      setTimeout(() => {
        luxuryScrollToSection('questionnaire', 80);
      }, 1500);
    } else {
      setSubmitError(result.error || 'Failed to submit application. Please try again.');
    }
  };

  const scrollToSection = (id: string) => {
    luxuryScrollToSection(id, 80);
  };

  const struggles = [
    { value: '', label: 'Select your biggest struggle' },
    { value: 'discipline-consistency', label: 'Discipline & Consistency' },
    { value: 'fitness-body', label: 'Fitness & Body' },
    { value: 'faith-purpose', label: 'Faith & Purpose' },
    { value: 'direction-goals', label: 'Direction & Goals' },
    { value: 'energy-health', label: 'Energy & Health' },
    { value: 'building-business', label: 'Building a Future Business' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-start pt-32 overflow-hidden luxury-grain">
      <HeroBackgroundSlider />

      <div className="absolute inset-0 z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFGMUYxRiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <Container className="relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center py-12 md:py-16 lg:py-20">
          <div className="space-y-8 -mt-8 md:mt-0">
            <LuxFadeIn delay={0.1}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#D11F2A]/10 border border-[#D11F2A]/30 rounded-full">
                <Shield className="w-4 h-4 text-[#D11F2A]" />
                <span className="text-sm font-semibold text-[#D11F2A]">Elite Brotherhood</span>
              </div>
            </LuxFadeIn>

            <LuxFadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Kingmaker</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] via-[#FFD033] to-[#D4A000] drop-shadow-[0_0_30px_rgba(255,195,0,0.4)]">Society</span>
              </h1>
            </LuxFadeIn>

            <LuxFadeIn delay={0.3}>
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                A structured brotherhood for faith-driven men working a 9-to-5 who want to build their body, discipline, goals, and future business
                <span className="text-[#FFC300] font-semibold"> without doing it alone.</span>
              </p>
              <p className="text-lg sm:text-xl text-gray-400 italic mt-4">
                Built for men who want to lead their life, not just live it.
              </p>
            </LuxFadeIn>

            <LuxFadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" onClick={scrollToApplication} className="animate-pulse-glow">
                  Start Application
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('book-call')} className="whitespace-nowrap">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Call
                </Button>
              </div>
            </LuxFadeIn>
          </div>

          <LuxFadeIn delay={0.5} className="w-full">
            {submitSuccess ? (
              <div className="bg-gradient-to-br from-[#1B1B1B] to-[#2B2B2B] border-2 border-[#FFC300]/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#FFC300]/20">
                <div className="text-center space-y-6">
                  <CheckCircle className="w-16 h-16 text-[#FFC300] mx-auto" />
                  <h3 className="text-2xl font-bold text-white">Application Started!</h3>
                  <p className="text-gray-300">
                    Thank you for taking the first step. Let's continue with a few more questions to understand your goals.
                  </p>
                  <p className="text-[#FFC300] text-sm">Redirecting to questionnaire...</p>
                </div>
              </div>
            ) : (
              <form id="application-form" onSubmit={handleSubmit} className="bg-gradient-to-br from-[#1B1B1B]/95 to-[#2B2B2B]/95 border-2 border-[#FFC300]/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#FFC300]/20 hover:border-[#FFC300]/50 hover:shadow-[#FFC300]/30 transition-all duration-500 backdrop-blur-sm luxury-grain">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Start Your Application
                </h3>

                {submitError && (
                  <div className="mb-4 p-4 bg-[#D11F2A]/10 border border-[#D11F2A]/30 rounded-lg text-[#D11F2A] text-sm">
                    {submitError}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      onFocus={handleFormStart}
                      error={errors.firstName}
                      required
                    />
                    <Input
                      label="Last Name"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      error={errors.lastName}
                      required
                    />
                  </div>

                  <Input
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    error={errors.email}
                    required
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    error={errors.phone}
                    required
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="Age"
                      type="number"
                      placeholder="25"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      error={errors.age}
                      required
                    />
                    <Input
                      label="Time Zone"
                      type="text"
                      placeholder="EST, PST, etc."
                      value={formData.timezone}
                      onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                      error={errors.timezone}
                      required
                    />
                  </div>

                  <Input
                    label="Occupation (9-to-5 Role)"
                    type="text"
                    placeholder="Your current job"
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    error={errors.occupation}
                    required
                  />

                  <Select
                    label="Biggest Struggle"
                    options={struggles}
                    value={formData.struggle}
                    onChange={(e) => setFormData({ ...formData, struggle: e.target.value })}
                    error={errors.struggle}
                    required
                  />

                  <Button type="submit" variant="secondary" size="lg" className="w-full mt-6" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    No spam. Used only to contact you about your application.
                  </p>
                </div>
              </form>
            )}
          </LuxFadeIn>
        </div>
      </Container>
    </section>
  );
}
