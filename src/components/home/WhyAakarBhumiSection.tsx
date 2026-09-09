import React from 'react';
import { Microscope, Target, Compass, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const PILLARS = [
  {
    icon: Microscope,
    number: '01',
    title: 'Research Before Recommendation',
    description: 'Every observation is grounded in revenue records, cadastral maps, regional master plans, and physical site verification rather than subjective opinions.'
  },
  {
    icon: Target,
    number: '02',
    title: 'Purpose-Based Land Guidance',
    description: 'We align recommendations strictly with what you aim to achieve—tailoring guidance to agricultural productivity, second-home tranquility, or generational wealth preservation.'
  },
  {
    icon: Compass,
    number: '03',
    title: 'Long-Term Value Perspective',
    description: 'We analyze land through the lens of structural infrastructure catalysts, transit corridors, and sustainable stewardship, avoiding short-lived market speculation.'
  },
  {
    icon: Eye,
    number: '04',
    title: 'Practical & Transparent Consultation',
    description: 'We highlight constraints, access challenges, or legal complexities with total honesty, ensuring you make fully informed, prudent decisions.'
  }
];

export default function WhyAakarBhumiSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FBFBF9] border-b border-[#E3E8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeading
            badge="Our Distinction"
            title="We Don't Just Look at Land. We Study Its Possibilities."
            description="Our foundation is built upon rigorous analytical methodology, statutory clarity, and advisory integrity."
          />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#E3E8DF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#2E6A4B]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#57685D] px-2.5 py-1 rounded-full bg-[#F4F6F1]">
                      {p.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#163828] group-hover:text-[#2E6A4B] transition-colors leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#57685D] leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E3E8DF] flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2E6A4B]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Advisory Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
