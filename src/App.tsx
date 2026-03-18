import { useState } from 'react';
import { ApplicationProvider } from './context/ApplicationContext';
import SEOHead from './components/SEOHead';
import AnalyticsScripts from './components/AnalyticsScripts';
import ChatWidget from './components/ChatWidget';
import Navbar from './components/Navbar';
import MobileMenu from './components/ui/MobileMenu';
import MembersOnlyModal from './components/ui/MembersOnlyModal';
import Hero from './components/sections/Hero';
import WhoThisIsFor from './components/sections/WhoThisIsFor';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Schedule from './components/sections/Schedule';
import Proof from './components/sections/Proof';
import Mentors from './components/sections/Mentors';
import Questionnaire from './components/sections/QuestionnaireNew';
import BookCall from './components/sections/BookCall';
import Pricing from './components/sections/Pricing';
import SocialProof from './components/sections/SocialProof';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/Footer';
import { luxuryScrollToSection } from './utils/luxuryScroll';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMembersModalOpen, setIsMembersModalOpen] = useState(false);

  const handleNavigate = (id: string) => {
    luxuryScrollToSection(id, 80);
    setIsMobileMenuOpen(false);
  };

  const handleMembersClick = () => {
    setIsMembersModalOpen(true);
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'who-this-is-for' },
    { label: 'Schedule', id: 'schedule' },
    { label: 'Mentors', id: 'mentors' },
    { label: 'Pricing', id: 'pricing' },
  ];

  return (
    <ApplicationProvider>
      <SEOHead />
      <AnalyticsScripts />
      <ChatWidget />
      <MembersOnlyModal
        isOpen={isMembersModalOpen}
        onClose={() => setIsMembersModalOpen(false)}
      />
      <div className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navLinks={navLinks}
          onNavigate={handleNavigate}
        />
        <Hero />
        <WhoThisIsFor />
        <Problem />
        <Solution />
        <Schedule />
        <Proof />
        <Mentors />
        <Questionnaire />
        <BookCall />
        <Pricing />
        <SocialProof onMembersClick={handleMembersClick} />
        <FinalCTA />
        <Footer onMembersClick={handleMembersClick} />
      </div>
    </ApplicationProvider>
  );
}
