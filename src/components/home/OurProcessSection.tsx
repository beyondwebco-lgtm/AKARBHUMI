import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const STAGES = [
  {
    step: '01',
    name: 'Understand',
    tagline: 'Goals & Requirements First',
    description: 'We listen to your specific intent—whether seeking agricultural income, private retreat living, development, or long-term family wealth preservation—to define clear evaluation benchmarks.'
  },
  {
    step: '02',
    name: 'Study',
    tagline: 'Deep Multi-Layered Scrutiny',
    description: 'We examine the land’s legal documentation (7/12, mutation history), recorded access roads, topographical suitability, water resources, regional zoning, and infrastructure context.'
  },
  {
    step: '03',
    name: 'Advise',
    tagline: 'Objective & Honest Counsel',
    description: 'We synthesize our findings into an actionable advisory report, detailing feasibility, risk factors, statutory pathways, and transparent recommendations tailored to your goals.'
  },
  {
    step: '04',
    name: 'Create Value',
    tagline: 'Thoughtful Long-Term Execution',
    description: 'We help you execute with confidence—guiding boundary demarcation, sustainable agricultural planning, development layout structuring, and enduring value creation.'
  }
];

export default function OurProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#E3E8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeading
            badge="Consultation Process"
            title="Our Four-Stage Advisory Method"
            description="A structured, analytical journey from initial discovery to long-term value creation."
          />
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STAGES.map((stg, index) => (
            <div
              key={stg.step}
              className="relative bg-[#FBFBF9] rounded-3xl p-8 border border-[#E3E8DF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-6"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-[#163828] font-mono opacity-80 group-hover:text-[#2E6A4B] transition-colors">
                  {stg.step}
                </span>
                <span className="w-8 h-8 rounded-full bg-white border border-[#E3E8DF] flex items-center justify-center text-[#2E6A4B] text-xs font-bold shadow-xs">
                  ✓
                </span>
              </div>

              {/* Title & Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#163828] group-hover:text-[#2E6A4B] transition-colors">
                  {stg.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#2E6A4B]">
                  {stg.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#57685D] leading-relaxed">
                  {stg.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="pt-4 border-t border-[#E3E8DF] flex items-center text-[11px] font-semibold text-[#57685D]">
                <span>Stage {stg.step} of 04</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
