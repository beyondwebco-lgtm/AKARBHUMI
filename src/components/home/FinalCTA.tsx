import React from 'react';
import { MessageCircle, ArrowRight, Compass } from 'lucide-react';
import { SITE_CONTACT, getWhatsAppLink } from '../../data/siteData';

interface FinalCTAProps {
  onOpenEnquiry: () => void;
}

export default function FinalCTA({ onOpenEnquiry }: FinalCTAProps) {
  const waUrl = getWhatsAppLink(
    'Hello AKARBHUMI, I would like to talk about land opportunities and location insights.'
  );

  return (
    <section className="py-24 sm:py-32 bg-[#0E241A] text-white relative overflow-hidden">
      {/* Background Graphic Effect */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/20 scale-125" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#86EFAC] text-xs font-bold tracking-widest uppercase">
          <Compass className="w-3.5 h-3.5" />
          Direct Land Advisory
        </div>

        <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Let’s Talk About Land
        </h2>

        <p className="text-lg sm:text-xl text-[#D1DCD5] max-w-2xl mx-auto leading-relaxed font-light">
          Have a location in mind? Let’s explore the possibilities with transparent regional information and objective data.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#163828] font-bold text-base hover:bg-[#F4F6F1] transition-all shadow-xl transform hover:-translate-y-0.5"
          >
            Talk to Us
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#1EBE5B] transition-all shadow-xl"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            WhatsApp ({SITE_CONTACT.whatsappDisplay})
          </a>
        </div>
      </div>
    </section>
  );
}
