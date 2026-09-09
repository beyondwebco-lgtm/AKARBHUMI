import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ShieldCheck, Award, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../../data/siteData';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const whatsappUrl = getWhatsAppLink(
    'Hello Aakar Bhumi, I would like to book an expert land consultation.'
  );

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0E241A] text-white">
      {/* Background Cinematic Visual with Deep Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85"
          alt="Expansive scenic landscape representing thoughtful land possibilities"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        {/* Deep Forest Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E241A]/95 via-[#0E241A]/85 to-[#0E241A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E241A] via-transparent to-[#0E241A]/40" />
      </div>

      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#2E6A4B_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="max-w-3xl space-y-8">
          {/* Brand Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold tracking-wider uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#86EFAC]" />
            <span>Shaping Land. Creating Value.</span>
          </div>

          {/* Main Headline */}
          <h1 className="editorial-title text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Make Smarter Decisions With Your Land.
          </h1>

          {/* Supporting Line */}
          <p className="text-lg sm:text-xl lg:text-2xl text-[#D1DCD5] font-light leading-relaxed max-w-2xl">
            Expert Land Consultation for Buying, Investing, Developing & Creating Long-Term Value from Land.
          </p>

          {/* Consultation CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2E6A4B] hover:bg-[#24543B] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] border border-[#86EFAC]/20 cursor-pointer"
            >
              <span>Book a Land Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-wide backdrop-blur-md border border-white/20 transition-all duration-200 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-[#86EFAC]" />
              <span>Talk to Our Expert</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#86EFAC] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Rigorous Scrutiny</span>
              </div>
              <p className="text-xs text-[#A3B8AD]">Document & location research before recommendation</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#86EFAC] text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Advisory First</span>
              </div>
              <p className="text-xs text-[#A3B8AD]">Objective counsel aligned with your specific purpose</p>
            </div>

            <div className="space-y-1 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-[#86EFAC] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Long-Term Focus</span>
              </div>
              <p className="text-xs text-[#A3B8AD]">Sustainable value creation beyond short-term hype</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
