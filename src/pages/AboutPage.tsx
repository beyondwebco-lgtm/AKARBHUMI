import React, { useState } from 'react';
import { 
  Compass, 
  ShieldCheck, 
  Layers, 
  TreePine, 
  TrendingUp, 
  Users, 
  Target, 
  Microscope,
  Award,
  ArrowRight,
  Sprout
} from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import FinalCTA from '../components/home/FinalCTA';
import ContactModal from '../components/common/ContactModal';

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="About Aakar Bhumi | Land Advisory & Research Brand"
        description="A land-focused advisory brand created to help people make better decisions about land across ownership, investment, agriculture, and future development."
      />

      <main className="w-full pt-24 sm:pt-28 bg-[#FBFBF9]">
        {/* Editorial Hero */}
        <section className="bg-white py-16 sm:py-24 border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3EE] text-[#163828] text-xs font-bold tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5 text-[#2E6A4B]" />
                <span>About Aakar Bhumi</span>
              </div>
              <h1 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#163828] leading-[1.08]">
                Shaping Land. Creating Value.
              </h1>
              <p className="text-lg sm:text-xl text-[#57685D] leading-relaxed font-light">
                A land-focused advisory brand created to help people make better decisions about land—combining rigorous research, statutory clarity, and long-term stewardship.
              </p>
            </div>
          </div>
        </section>

        {/* Foundation & Purpose Narrative */}
        <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Our Purpose"
                title="Land Demands Deep Understanding, Not Sales Pressure."
                description="Unlike conventional real estate brokerages focused on rapid transactional volume, Aakar Bhumi was established as an independent consultation platform."
              />

              <p className="text-sm sm:text-base text-[#57685D] leading-relaxed">
                Land is one of the most substantial financial, legal, and lifestyle commitments an individual or institution ever makes. Yet, buyers frequently face fragmented revenue records, unclear access rights, unverified zoning restrictions, and speculative sales pitches.
              </p>

              <p className="text-sm sm:text-base text-[#57685D] leading-relaxed">
                We believe every land decision should begin with patient, thorough research. We help you understand the ground beneath your feet—verifying documentation, evaluating natural topography, analyzing connectivity, and exploring genuine possibilities before any commitment is made.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#E3E8DF] h-[400px] sm:h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
                alt="Expansive verdant land representing thoughtful land stewardship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 4 Core Pillars of Land Advisory */}
        <section className="py-20 sm:py-28 bg-white border-y border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <SectionHeading
                badge="Advisory Scope"
                title="Four Verticals of Land Possibility"
                description="We assist clients across every dimension of land ownership, productivity, and future potential."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-3xl bg-[#FBFBF9] border border-[#E3E8DF] space-y-4 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] flex items-center justify-center text-[#2E6A4B]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#163828]">01. Ownership</h3>
                <p className="text-xs sm:text-sm text-[#57685D] leading-relaxed">
                  Navigating legal titles, 7/12 extracts, mutation histories, and registered road access for peaceful family retreats and countryside living.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#FBFBF9] border border-[#E3E8DF] space-y-4 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] flex items-center justify-center text-[#2E6A4B]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#163828]">02. Investment</h3>
                <p className="text-xs sm:text-sm text-[#57685D] leading-relaxed">
                  Assessing regional growth corridors, highway infrastructure, and demographic expansion for long-term tangible wealth preservation.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#FBFBF9] border border-[#E3E8DF] space-y-4 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] flex items-center justify-center text-[#2E6A4B]">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#163828]">03. Agriculture</h3>
                <p className="text-xs sm:text-sm text-[#57685D] leading-relaxed">
                  Studying soil suitability, water management, horticulture, and sustainable farming models for productive land use.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#FBFBF9] border border-[#E3E8DF] space-y-4 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] flex items-center justify-center text-[#2E6A4B]">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#163828]">04. Future Development</h3>
                <p className="text-xs sm:text-sm text-[#57685D] leading-relaxed">
                  Guiding master-plan layout structuring, statutory NA pathways, and community infrastructure integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Values & Principles */}
        <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#122B1E] text-white rounded-3xl p-8 sm:p-16 border border-[#0E241A] shadow-xl">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#86EFAC]">
                Our Guiding Principles
              </span>
              <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Built on Research, Candor & Environmental Respect
              </h2>
              <p className="text-base text-[#D1DCD5] font-light leading-relaxed">
                We measure our success by the clarity and long-term confidence our clients gain. We never compromise on statutory due diligence, never use fabricated urgency, and never treat land merely as speculative paper.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
              <div className="space-y-2">
                <h4 className="font-bold text-white text-lg">Research First</h4>
                <p className="text-xs text-[#A3B8AD] leading-relaxed">
                  Documentary, physical, and regulatory verification before offering guidance.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white text-lg">Total Transparency</h4>
                <p className="text-xs text-[#A3B8AD] leading-relaxed">
                  Direct communication of risks, zoning constraints, and realistic timelines.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white text-lg">Long-Term Value</h4>
                <p className="text-xs text-[#A3B8AD] leading-relaxed">
                  Helping you build lasting personal sanctuaries and generational assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA onOpenEnquiry={() => setIsModalOpen(true)} />
      </main>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
