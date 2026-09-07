import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface UpcomingPreviewProps {
  onOpenRegister: () => void;
}

export default function UpcomingDevelopmentsPreview({ onOpenRegister }: UpcomingPreviewProps) {
  return (
    <section className="py-24 sm:py-32 bg-white relative border-b border-[#E3E8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4F6F1] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E3E8DF] relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#163828]/5 blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163828] text-white text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#86EFAC]" />
              Coming Soon
            </div>

            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#163828]">
              AKARBHUMI Developments
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#57685D] leading-relaxed">
              <p>
                We are working towards creating thoughtfully planned land developments in selected locations across Western Maharashtra.
              </p>
              <p>
                Details of upcoming AKARBHUMI projects will be officially announced here upon receipt of all statutory sanctions and planning verifications.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-[#E3E8DF] shadow-xs">
                <Layers className="w-5 h-5 text-[#163828] mb-2" />
                <h4 className="text-sm font-bold text-[#163828]">Organised Planning</h4>
                <p className="text-xs text-[#57685D] mt-1">Structured layout planning and clean demarcations.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E3E8DF] shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#163828] mb-2" />
                <h4 className="text-sm font-bold text-[#163828]">Title Transparency</h4>
                <p className="text-xs text-[#57685D] mt-1">Complete legal clarity and verified documentation.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E3E8DF] shadow-xs">
                <Sparkles className="w-5 h-5 text-[#163828] mb-2" />
                <h4 className="text-sm font-bold text-[#163828]">Nature Integration</h4>
                <p className="text-xs text-[#57685D] mt-1">Harmonious connection with scenic natural surroundings.</p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link
                to="/upcoming-developments"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#163828] text-white font-bold text-sm hover:bg-[#0E241A] transition-all shadow-md transform hover:-translate-y-0.5"
              >
                Register Your Interest
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-[#E3E8DF] bg-white text-[#163828] font-semibold text-sm hover:bg-[#FBFBF9] transition-all"
              >
                Learn Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
