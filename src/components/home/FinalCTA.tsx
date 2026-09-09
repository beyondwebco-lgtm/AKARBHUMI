import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../../data/siteData';

interface FinalCTAProps {
  onOpenEnquiry?: () => void;
}

export default function FinalCTA({ onOpenEnquiry }: FinalCTAProps) {
  const whatsappUrl = getWhatsAppLink(
    'Hello Aakar Bhumi, I would like to discuss my land requirement with your consultation team.'
  );

  return (
    <section className="py-24 sm:py-32 bg-[#0E241A] text-white relative overflow-hidden">
      {/* Background Subtle Gradient & Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#2E6A4B_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#86EFAC] text-xs font-semibold tracking-wider uppercase border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Advisory Consultation</span>
          </div>

          {/* Headline */}
          <h2 className="editorial-title text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Discuss Your Land Requirement
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#D1DCD5] font-light leading-relaxed">
            Whether evaluating an upcoming land acquisition, planning agricultural acreage, or assessing long-term corridor potential, consult directly with our advisory desk.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2E6A4B] hover:bg-[#24543B] text-white text-sm font-bold tracking-wide transition-all shadow-xl hover:shadow-2xl border border-[#86EFAC]/20 cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-wide backdrop-blur-md border border-white/20 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-[#86EFAC]" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>

          {/* Reassurance */}
          <div className="pt-8 flex items-center justify-center gap-2 text-xs text-[#A3B8AD]">
            <ShieldCheck className="w-4 h-4 text-[#86EFAC]" />
            <span>Confidential, objective guidance with zero high-pressure sales tactics.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
