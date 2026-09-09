import React from 'react';
import { Sprout, Sun, Droplets, Mountain, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AgricultureIncomeSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FBFBF9] border-b border-[#E3E8DF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Messaging */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2E6A4B] bg-[#EBF3EE] px-3.5 py-1.5 rounded-full">
              <Sprout className="w-3.5 h-3.5" />
              <span>Productive Land Stewardship</span>
            </div>

            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#163828] leading-[1.12]">
              Your Land Can Do More.
            </h2>

            <p className="text-base sm:text-lg text-[#57685D] leading-relaxed font-light">
              Idle countryside acreage holds significant productive potential. Aakar Bhumi studies your land’s agro-ecological characteristics to explore thoughtful cultivation, sustainable farming models, and diversified value-creation opportunities.
            </p>

            {/* Possibilities Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#E3E8DF] text-[#2E6A4B] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#163828]">Horticulture & Plantation Planning</h4>
                  <p className="text-xs text-[#57685D] leading-relaxed">
                    Evaluating climate-suited fruit groves (Alphonso Mango, Cashew, Chiku), spices, and timber forestry (Teak, Bamboo).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#E3E8DF] text-[#2E6A4B] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#163828]">Water Resource & Soil Optimization</h4>
                  <p className="text-xs text-[#57685D] leading-relaxed">
                    Analyzing watershed terrain, rainwater harvesting, drip micro-irrigation, and organic soil enrichment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#E3E8DF] text-[#2E6A4B] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Mountain className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#163828]">Diversified Land Use & Nature Retreats</h4>
                  <p className="text-xs text-[#57685D] leading-relaxed">
                    Exploring harmonious second-home agro-living, farmstay concepts, and ecological conservation.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Statutory Advisory Notice */}
            <div className="p-4 rounded-xl bg-white border border-[#E3E8DF] text-xs text-[#57685D] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#2E6A4B] shrink-0 mt-0.5" />
              <span>
                <strong>Advisory Note:</strong> All agricultural possibilities and income prospects depend strictly upon individual soil quality, water availability, terrain, access, local microclimate, and statutory regulations. We provide realistic feasibility analysis rather than speculative return promises.
              </span>
            </div>

            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#163828] hover:text-[#2E6A4B] group"
              >
                <span>Learn About Agricultural & Income Planning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Balanced Visual Composition */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E3E8DF] h-64 sm:h-72">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
                  alt="Fertile green agricultural land with sustainable plantation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E3E8DF] h-48 sm:h-56">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
                  alt="Natural river valley and water resources"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E3E8DF] h-48 sm:h-56">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                  alt="Aerial view of scenic landscape and terrain"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E3E8DF] h-64 sm:h-72">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                  alt="Thoughtful land master planning and architectural layout"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
