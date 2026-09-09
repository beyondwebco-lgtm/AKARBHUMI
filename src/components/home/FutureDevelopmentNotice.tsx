import React from 'react';
import { Layers, ShieldCheck, TreePine, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FutureDevelopmentNoticeProps {
  onOpenConsultation?: () => void;
}

export default function FutureDevelopmentNotice({ onOpenConsultation }: FutureDevelopmentNoticeProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#122B1E] text-white relative overflow-hidden border-b border-[#0E241A]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#2E6A4B_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#86EFAC] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm border border-white/10">
            <Layers className="w-3.5 h-3.5" />
            <span>Future Development Vision</span>
          </div>

          <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Setting the Benchmark for Future Plotted Developments
          </h2>

          <p className="text-base sm:text-lg text-[#D1DCD5] font-light leading-relaxed max-w-2xl mx-auto">
            As our brand evolves, Aakar Bhumi will introduce master-planned plotted communities designed on the bedrock of statutory title transparency, ecological harmony, and enduring community value.
          </p>
        </div>

        {/* 4 Architectural Standards Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E6A4B]/40 text-[#86EFAC] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Clear Title Freehold</h4>
            <p className="text-xs text-[#A3B8AD] leading-relaxed">
              Every future plot will feature individual 7/12 extract / Property Card allocations with zero ambiguity.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E6A4B]/40 text-[#86EFAC] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Infrastructure-Ready</h4>
            <p className="text-xs text-[#A3B8AD] leading-relaxed">
              Engineered internal paved roads, subterranean utilities, stormwater management, and perimeter security.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E6A4B]/40 text-[#86EFAC] flex items-center justify-center">
              <TreePine className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Topography Harmony</h4>
            <p className="text-xs text-[#A3B8AD] leading-relaxed">
              Layouts designed around natural contours, retaining native flora and seasonal streams for sustainable aesthetics.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E6A4B]/40 text-[#86EFAC] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-base">Strategic Corridors</h4>
            <p className="text-xs text-[#A3B8AD] leading-relaxed">
              Situated in high-connectivity belts (Mangaon, Roha, Pali, Karjat) within convenient reach of MMR & Pune.
            </p>
          </div>
        </div>

        {/* Advisory Action Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#2E6A4B] hover:bg-[#24543B] text-white text-xs font-bold tracking-wide transition-all shadow-lg border border-[#86EFAC]/20 cursor-pointer"
          >
            <span>Discuss Future Land Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
