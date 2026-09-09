import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONTACT, getWhatsAppLink } from '../../data/siteData';

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

          {/* Follow Aakar Bhumi - Social Media Links */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span className="text-xs font-medium text-[#A3B8AD] tracking-wider uppercase">
              Follow Aakar Bhumi:
            </span>
            <div className="flex items-center gap-3">
              {SITE_CONTACT.facebookUrl && (
                <a
                  href={SITE_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#1877F2]/20 text-[#D1DCD5] hover:text-white border border-white/10 hover:border-[#1877F2]/40 text-xs font-semibold transition-all shadow-sm group"
                  aria-label="Follow Aakar Bhumi on Facebook"
                  title="Follow Aakar Bhumi on Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#1877F2] transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              )}

              {SITE_CONTACT.instagramUrl && (
                <a
                  href={SITE_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#E4405F]/20 text-[#D1DCD5] hover:text-white border border-white/10 hover:border-[#E4405F]/40 text-xs font-semibold transition-all shadow-sm group"
                  aria-label="Follow Aakar Bhumi on Instagram"
                  title="Follow Aakar Bhumi on Instagram (@akarbhumioffice)"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#E4405F] transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              )}
            </div>
          </div>

          {/* Reassurance */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#A3B8AD]">
            <ShieldCheck className="w-4 h-4 text-[#86EFAC]" />
            <span>Confidential, objective guidance with zero high-pressure sales tactics.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
