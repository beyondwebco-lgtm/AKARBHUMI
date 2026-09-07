import React from 'react';
import { ArrowRight, Navigation, Train, Car, Compass } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const METRO_HUBS = [
  { name: 'Mumbai', role: 'Financial Capital & Primary Metropolitan Anchor' },
  { name: 'Navi Mumbai', role: 'Emerging International Airport & Coastal Gateway' },
  { name: 'Pune', role: 'Western IT & Industrial Powerhouse' },
];

const CORRIDOR_POINTS = [
  {
    destination: 'Mangaon',
    transit: 'NH 66 Mumbai-Goa Highway • Konkan Railway Junction • Tamhini Ghat to Pune',
    badge: 'Transit Gateway',
  },
  {
    destination: 'Roha',
    transit: 'Central Rail Terminal • SH 92 Connector • Kundalika River Corridor',
    badge: 'Rail & River Axis',
  },
  {
    destination: 'Pali',
    transit: 'Khopoli-Pali Highway (SH 92) • Mumbai-Pune Expressway Spur',
    badge: 'Expressway Accessible',
  },
  {
    destination: 'Karjat',
    transit: 'Suburban Mumbai Rail Line • Mumbai-Pune Expressway • Panvel Bypass',
    badge: 'Suburban Link',
  },
];

export default function ConnectivitySection() {
  return (
    <section className="py-24 sm:py-32 bg-[#122B1E] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          dark
          badge="Connectivity Framework"
          title="Strategic Regional Accessibility"
          description="Connecting Western Maharashtra's primary economic engines with emerging natural land destinations across established arterial road and rail corridors."
        />

        {/* Connectivity Layout Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-12">
          {/* Left Column: Metropolitan Anchors */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#86EFAC] font-bold flex items-center gap-2">
              <Compass className="w-4 h-4" />
              Metropolitan Epicenters
            </h3>

            <div className="space-y-3">
              {METRO_HUBS.map((hub) => (
                <div
                  key={hub.name}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg font-bold text-white">{hub.name}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#86EFAC]/20 text-[#86EFAC]">
                      Origin Hub
                    </span>
                  </div>
                  <p className="text-xs text-[#D1DCD5]">{hub.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column: Interactive Pulse Indicator */}
          <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center">
            <div className="h-40 w-[1px] bg-gradient-to-b from-transparent via-[#86EFAC] to-transparent" />
            <div className="p-3 rounded-full bg-white/10 border border-white/20 text-[#86EFAC] animate-pulse">
              <Navigation className="w-5 h-5 rotate-45" />
            </div>
            <div className="h-40 w-[1px] bg-gradient-to-b from-transparent via-[#86EFAC] to-transparent" />
          </div>

          {/* Right Column: Emerging Land Corridors */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#86EFAC] font-bold flex items-center gap-2">
              <Car className="w-4 h-4" />
              Direct Regional Land Corridors
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORRIDOR_POINTS.map((pt) => (
                <div
                  key={pt.destination}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs hover:border-[#86EFAC]/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-white group-hover:text-[#86EFAC] transition-colors">
                      {pt.destination}
                    </h4>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/80">
                      {pt.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#D1DCD5] leading-relaxed">
                    {pt.transit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
