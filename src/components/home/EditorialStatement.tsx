import React from 'react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EditorialStatement() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#E3E8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2E6A4B] bg-[#EBF3EE] px-3.5 py-1.5 rounded-full">
              <Compass className="w-3.5 h-3.5" />
              <span>Advisory Philosophy</span>
            </div>

            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#163828] leading-[1.15]">
              A Trusted Expert Helping You Understand, Choose & Value Land Wisely.
            </h2>

            <p className="text-base sm:text-lg text-[#57685D] leading-relaxed font-light">
              Aakar Bhumi is a land-focused consultation and advisory brand created to help individuals, families, and institutions make informed, objective decisions about land.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#163828] hover:text-[#2E6A4B] group"
              >
                <span>Learn About Our Advisory Approach</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Four Land Quadrants */}
          <div className="lg:col-span-6 bg-[#FBFBF9] rounded-3xl p-6 sm:p-8 border border-[#E3E8DF] shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#163828] mb-6">
              Our Advisory Scope Covers Land For:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#E3E8DF] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#EBF3EE] text-[#163828] flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h4 className="font-bold text-[#163828] text-sm">Land Ownership</h4>
                <p className="text-xs text-[#57685D] leading-relaxed">
                  Securing clear title, access, and purposeful personal acreage for weekend living or family legacy.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E3E8DF] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#EBF3EE] text-[#163828] flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h4 className="font-bold text-[#163828] text-sm">Land Investment</h4>
                <p className="text-xs text-[#57685D] leading-relaxed">
                  Evaluating growth corridors, regional infrastructure catalysts, and long-term capital preservation.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E3E8DF] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#EBF3EE] text-[#163828] flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h4 className="font-bold text-[#163828] text-sm">Agriculture & Income</h4>
                <p className="text-xs text-[#57685D] leading-relaxed">
                  Studying soil, water, terrain, and sustainable cultivation models for productive land stewardship.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E3E8DF] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#EBF3EE] text-[#163828] flex items-center justify-center font-bold text-xs">
                  04
                </div>
                <h4 className="font-bold text-[#163828] text-sm">Future Development</h4>
                <p className="text-xs text-[#57685D] leading-relaxed">
                  Guiding thoughtful layout planning, statutory NA considerations, and master-planned execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
