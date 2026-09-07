import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Target, Eye, Sparkles, ArrowRight, ShieldCheck, MapPin, Check } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import FinalCTA from '../components/home/FinalCTA';
import ContactModal from '../components/common/ContactModal';

const MISSION_POINTS = [
  'Identify promising land locations with genuine geographic and transit advantages.',
  'Provide useful, verified, and transparent location information and land intelligence.',
  'Create organised, systematically planned plotted developments in the future.',
  'Focus on long-term accessibility, physical usability, and enduring asset value.',
  'Build enduring, trust-based relationships with land buyers, landowners, and investors.',
];

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="About Us — Creating Value Through Land"
        description="Learn about AKARBHUMI, our philosophy of giving shape to land, our vision, and our mission to simplify land discovery across Western Maharashtra."
      />

      <main className="w-full pt-24 sm:pt-28">
        {/* Page Hero Header */}
        <section className="bg-white py-16 sm:py-24 border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3EE] text-[#163828] text-xs font-bold tracking-widest uppercase mb-4">
                <Compass className="w-3.5 h-3.5" />
                About AKARBHUMI
              </div>
              <h1 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#163828] leading-[1.08]">
                Creating Value Through Land
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#57685D] leading-relaxed">
                AKARBHUMI is a land-focused company created with a vision to simplify the way people discover and understand land opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Core Approach & Large Visual Split Section */}
        <section className="py-20 sm:py-28 bg-[#FBFBF9] border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Visual Frame */}
              <div className="lg:col-span-6 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E3E8DF]">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
                    alt="Pristine Natural Land in Western Maharashtra"
                    className="w-full h-[450px] sm:h-[520px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#163828] text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-xs">
                  <p className="text-xs uppercase tracking-widest text-[#86EFAC] font-bold mb-1">
                    Brand Essence
                  </p>
                  <p className="text-lg font-bold">
                    “Shaping Land. Creating Value.”
                  </p>
                </div>
              </div>

              {/* Text Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="editorial-title text-3xl sm:text-4xl font-bold text-[#163828] leading-snug">
                  A Research-Driven, Long-Term Perspective
                </h2>

                <p className="text-[#57685D] text-base sm:text-lg leading-relaxed">
                  Our approach is based on rigorous location research, regional connectivity, development potential, ground usability, and long-term value creation.
                </p>

                <p className="text-[#57685D] text-base sm:text-lg leading-relaxed">
                  We believe that acquiring land should not be fraught with ambiguity. By providing transparent documentation insights and objective regional analysis, we empower individuals to make well-informed decisions.
                </p>

                <p className="text-[#57685D] text-base sm:text-lg leading-relaxed">
                  We aim to develop selected land parcels into organised and thoughtfully planned plotted developments in the future, maintaining strict standards of title clarity and environmental harmony.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#163828] text-white font-semibold text-sm hover:bg-[#0E241A] transition-all shadow-md"
                  >
                    Consult With Our Team
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Philosophy: Giving Shape to Land */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#122B1E] text-white rounded-3xl p-8 sm:p-14 lg:p-18 relative overflow-hidden">
              <div className="max-w-3xl space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#86EFAC] text-xs font-bold tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  Brand Philosophy
                </div>

                <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  “Land Deserves a Thoughtful Shape.”
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[#D1DCD5] leading-relaxed">
                  <p>
                    The name <strong className="text-white">AKARBHUMI</strong> stems from two timeless concepts: <strong className="text-white">‘Akar’</strong> (giving intentional form, shape, and structure) and <strong className="text-white">‘Bhumi’</strong> (the sacred earth and land).
                  </p>
                  <p>
                    Raw land has infinite possibilities. When approached with responsible planning, respect for natural contours, and meticulous title governance, land transforms into an enduring foundation for generations.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif italic text-[#86EFAC] pt-2">
                    “Shaping Land. Creating Value.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Grid */}
        <section className="py-20 sm:py-28 bg-[#FBFBF9] border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Vision Card */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3E8DF] shadow-xs flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] text-[#163828] flex items-center justify-center">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="editorial-title text-2xl sm:text-3xl font-bold text-[#163828]">
                    Our Vision
                  </h3>
                  <p className="text-lg text-[#57685D] leading-relaxed">
                    “To become a trusted and recognised land development brand connecting people with quality land opportunities in emerging destinations.”
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3E8DF] shadow-xs space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] text-[#163828] flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="editorial-title text-2xl sm:text-3xl font-bold text-[#163828]">
                  Our Mission
                </h3>
                <ul className="space-y-3.5">
                  {MISSION_POINTS.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#57685D] leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-[#163828] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
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
