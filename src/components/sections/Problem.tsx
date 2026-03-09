import { AlertCircle } from 'lucide-react';
import Section from '../ui/Section';
import LuxFadeIn from '../ui/LuxFadeIn';

export default function Problem() {
  return (
    <Section id="problem" background="darker">
      <div className="max-w-4xl mx-auto text-center">
        <LuxFadeIn>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#D11F2A]/10 border border-[#D11F2A]/30 rounded-full mb-8">
            <AlertCircle className="w-4 h-4 text-[#D11F2A]" />
            <span className="text-sm font-semibold text-[#D11F2A]">The Real Problem</span>
          </div>
        </LuxFadeIn>

        <LuxFadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Most Men Fail Because They Are{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D11F2A] to-[#8B1419] drop-shadow-[0_0_30px_rgba(209,31,42,0.3)]">
              Alone
            </span>
            <br />
            Not Because They Are{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D11F2A] to-[#8B1419] drop-shadow-[0_0_30px_rgba(209,31,42,0.3)]">
              Lazy
            </span>
          </h2>
        </LuxFadeIn>

        <LuxFadeIn delay={0.2}>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              You wake up every day with big plans. You tell yourself today will be different.
              You'll hit the gym, work on your side hustle, read that book, pray more, get your life together.
            </p>
            <p className="text-white font-semibold">
              But by the end of the day, nothing changes.
            </p>
            <p>
              It's not because you're weak. It's not because you lack potential.
              It's because you're doing it <span className="text-[#D11F2A] font-bold">alone</span>.
            </p>
            <p>
              No accountability. No structure. No one pushing you. No one to answer to.
              Just you, your excuses, and the same cycle repeating.
            </p>
          </div>
        </LuxFadeIn>

        <LuxFadeIn delay={0.3}>
          <div className="mt-12 p-8 bg-gradient-to-br from-[#2B2B2B] to-[#1B1B1B] border-2 border-[#D11F2A]/30 rounded-2xl hover:border-[#D11F2A]/50 hover:shadow-2xl hover:shadow-[#D11F2A]/20 transition-all duration-500">
            <p className="text-2xl md:text-3xl font-bold text-white">
              The truth is, you don't need more motivation.
            </p>
            <p className="text-xl md:text-2xl text-[#FFC300] mt-4 font-semibold">
              You need a system. You need brothers. You need structure.
            </p>
          </div>
        </LuxFadeIn>
      </div>
    </Section>
  );
}
