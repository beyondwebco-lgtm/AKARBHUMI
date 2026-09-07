import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ChevronDown, Compass } from 'lucide-react';
import { SITE_CONTACT, getWhatsAppLink } from '../../data/siteData';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const waUrl = getWhatsAppLink(SITE_CONTACT.whatsappPrefill);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0E241A] text-white overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=85"
          alt="Scenic Western Ghats Green Land and Valleys"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
        />
        {/* Multi-layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E241A] via-[#0E241A]/50 to-[#0E241A]/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0E241A]/40 to-[#0E241A]/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
          <Compass className="w-4 h-4 text-[#86EFAC]" />
          <span className="text-xs font-bold tracking-[0.25em] text-[#86EFAC] uppercase">
            AKARBHUMI
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.05]">
          Shape Your Future With Land
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-[#E2EBE5] max-w-3xl mx-auto leading-relaxed font-light">
          Discover promising land destinations, location insights and thoughtfully developed land opportunities around Mumbai, Navi Mumbai and Pune.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/locations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-[#163828] font-bold text-base hover:bg-[#F4F6F1] transition-all shadow-xl transform hover:-translate-y-0.5"
          >
            Explore Locations
            <ArrowRight className="w-4 h-4 text-[#163828]" />
          </Link>

          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-base transition-all border border-white/30"
          >
            Talk to Us
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-semibold text-base transition-all shadow-lg"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            WhatsApp
          </a>
        </div>

        {/* Location Corridor Tags */}
        <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-[#D1DCD5]">
          <span className="font-semibold text-white/80 uppercase tracking-wider text-[11px]">
            Key Focus Corridors:
          </span>
          <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Mangaon</span>
          <span className="text-white/40">•</span>
          <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Roha</span>
          <span className="text-white/40">•</span>
          <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Pali</span>
          <span className="text-white/40">•</span>
          <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Karjat</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 animate-bounce cursor-pointer">
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
