import { Calendar, Clock, MessageSquare } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import LuxFadeIn from '../ui/LuxFadeIn';

export default function Schedule() {
  const schedule = [
    {
      day: 'Monday',
      focus: 'Goals, Vision & Future Business',
      description: 'Strategic planning, business development, and long-term vision casting',
    },
    {
      day: 'Tuesday',
      focus: 'Fitness & Discipline',
      description: 'Workout strategies, physical training, and building unstoppable discipline',
    },
    {
      day: 'Wednesday',
      focus: 'Health & Energy Optimization',
      description: 'Nutrition, recovery, sleep, and peak performance protocols',
    },
    {
      day: 'Thursday',
      focus: 'Brotherhood Accountability & Strategy',
      description: 'Group accountability, progress reviews, and strategic problem solving',
    },
    {
      day: 'Sunday',
      focus: 'Faith, Purpose & Identity',
      description: 'Spiritual growth, purpose alignment, and identity in Christ',
    },
  ];

  return (
    <Section id="schedule" background="darker">
      <LuxFadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FFC300]/10 border border-[#FFC300]/30 rounded-full mb-6 shadow-lg shadow-[#FFC300]/20">
            <Calendar className="w-4 h-4 text-[#FFC300]" />
            <span className="text-sm font-semibold text-[#FFC300]">Weekly Structure</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">Your Weekly</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] via-[#FFD033] to-[#D4A000] drop-shadow-[0_0_30px_rgba(255,195,0,0.4)]">Schedule</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Every week follows a proven structure designed to transform every area of your life.
          </p>
        </div>
      </LuxFadeIn>

      <div className="space-y-4 mb-12">
        {schedule.map((item, index) => (
          <LuxFadeIn key={index} delay={index * 0.1}>
            <Card variant="premium" hover className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="w-32 h-20 bg-gradient-to-br from-[#D11F2A] to-[#A01620] rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white whitespace-nowrap">{item.day}</span>
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-xl font-bold text-[#FFC300] mb-2 break-words">{item.focus}</h3>
                  <p className="text-gray-400 break-words">{item.description}</p>
                </div>
              </div>
            </Card>
          </LuxFadeIn>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <LuxFadeIn delay={0.5}>
          <Card variant="gold" className="p-8 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFC300]/10 to-transparent rounded-full blur-2xl"></div>
            <div className="relative z-10 flex items-start space-x-4">
              <Clock className="w-8 h-8 text-[#FFC300] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Daily Zoom Call</h3>
                <p className="text-gray-300 break-words">
                  Guaranteed daily accountability call from <span className="text-[#FFC300] font-bold whitespace-nowrap">12:00-1:00 PM CST</span>. Additional mentor-led calls may vary.
                </p>
              </div>
            </div>
          </Card>
        </LuxFadeIn>

        <LuxFadeIn delay={0.6}>
          <Card variant="gold" className="p-8 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFC300]/10 to-transparent rounded-full blur-2xl"></div>
            <div className="relative z-10 flex items-start space-x-4">
              <MessageSquare className="w-8 h-8 text-[#FFC300] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Live Schedule</h3>
                <p className="text-gray-300 break-words">
                  The latest schedule and call links are always pinned inside our Discord community.
                </p>
              </div>
            </div>
          </Card>
        </LuxFadeIn>
      </div>
    </Section>
  );
}
