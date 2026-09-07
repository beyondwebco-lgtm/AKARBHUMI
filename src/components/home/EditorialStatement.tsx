import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export default function EditorialStatement() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-[#E3E8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3EE] text-[#163828] text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Brand Philosophy
            </div>

            <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#163828] leading-[1.08]">
              Land Is More Than an Asset.
            </h2>

            <div className="space-y-6 text-[#57685D] text-lg sm:text-xl leading-relaxed">
              <p className="text-[#163828] font-medium text-xl sm:text-2xl leading-snug">
                AKARBHUMI is focused on identifying, understanding and developing land opportunities in strategically located growth destinations.
              </p>

              <p>
                Our focus areas include <strong className="text-[#163828]">Mangaon</strong>, <strong className="text-[#163828]">Roha</strong>, <strong className="text-[#163828]">Pali</strong>, <strong className="text-[#163828]">Karjat</strong> and other emerging locations with strong connectivity to Mumbai, Navi Mumbai and Pune.
              </p>

              <p className="border-l-2 border-[#163828] pl-5 italic text-[#163828]/90 font-serif text-xl sm:text-2xl">
                “We believe that land is not simply an asset — it is an opportunity to create value, lifestyle and legacy.”
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#163828] text-white font-semibold text-sm hover:bg-[#0E241A] transition-all shadow-md"
              >
                About AKARBHUMI
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/land-insights"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#E3E8DF] text-[#163828] font-semibold text-sm hover:bg-[#F4F6F1] transition-all"
              >
                Explore Land Knowledge
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composition with layered imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E3E8DF] group">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80"
                alt="Open Verdant Land and Natural Horizons"
                className="w-full h-[460px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E241A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#86EFAC] font-semibold block mb-1">
                  Strategic Land
                </span>
                <p className="text-lg font-bold">
                  “Shaping Land. Creating Value.”
                </p>
                <p className="text-xs text-[#D1DCD5] mt-1">
                  Rooted in Maharashtra’s emerging growth regions.
                </p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#FBFBF9] p-4 rounded-xl border border-[#E3E8DF] shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#163828] text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#163828]">Objective Research</p>
                <p className="text-[11px] text-[#57685D]">Verified Land Insights & Data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
