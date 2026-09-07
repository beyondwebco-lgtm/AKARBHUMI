import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Train, Car, Mountain, Compass, ArrowRight, ExternalLink, CheckCircle2, ChevronRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { LOCATIONS_DATA } from '../data/locationsData';
import FinalCTA from '../components/home/FinalCTA';
import ContactModal from '../components/common/ContactModal';

const MAP_PINS = [
  { id: 'mumbai', name: 'Mumbai', type: 'metro', desc: 'Financial Metropolitan Epicenter', lat: '19.0760', lng: '72.8777' },
  { id: 'navimumbai', name: 'Navi Mumbai', type: 'metro', desc: 'International Airport & Maritime Node', lat: '19.0330', lng: '73.0297' },
  { id: 'pune', name: 'Pune', type: 'metro', desc: 'Western Maharashtra IT Hub', lat: '18.5204', lng: '73.8567' },
  { id: 'mangaon', name: 'Mangaon', type: 'focus', desc: 'NH 66 & Konkan Rail Junction', lat: '18.2524', lng: '73.2878' },
  { id: 'roha', name: 'Roha', type: 'focus', desc: 'Kundalika River & Rail Terminal', lat: '18.4357', lng: '73.1189' },
  { id: 'pali', name: 'Pali', type: 'focus', desc: 'Sudhagad Foothills & Expressway Link', lat: '18.5373', lng: '73.2205' },
  { id: 'karjat', name: 'Karjat', type: 'focus', desc: 'Sahyadri Rail & Countryside Belt', lat: '18.9102', lng: '73.3283' },
];

export default function LocationsPage() {
  const [selectedPin, setSelectedPin] = useState(MAP_PINS[3]); // Default to Mangaon
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDefaultLocation, setModalDefaultLocation] = useState('Mangaon');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const handleEnquireLocation = (locName: string) => {
    setModalDefaultLocation(locName);
    setIsModalOpen(true);
  };

  return (
    <>
      <SEO
        title="Emerging Land Destinations — Mangaon, Roha, Pali, Karjat"
        description="Explore comprehensive location overviews, road and rail connectivity, natural topography, and regional dynamics across Mangaon, Roha, Pali, and Karjat."
      />

      <main className="w-full pt-24 sm:pt-28">
        {/* Page Header */}
        <section className="bg-white py-16 sm:py-24 border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3EE] text-[#163828] text-xs font-bold tracking-widest uppercase mb-4">
                <Compass className="w-3.5 h-3.5" />
                Regional Intelligence
              </div>
              <h1 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#163828] leading-[1.08]">
                Explore Emerging Land Destinations
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#57685D] leading-relaxed">
                Objective location insights on strategic corridors across Western Maharashtra with direct connectivity to Mumbai, Navi Mumbai, and Pune.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Location Anchors */}
        <section className="bg-[#FBFBF9] py-6 border-b border-[#E3E8DF] sticky top-[72px] z-30 backdrop-blur-md bg-[#FBFBF9]/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto gap-4 scrollbar-none">
            <span className="text-xs font-bold uppercase tracking-wider text-[#163828] shrink-0">
              Jump To Location:
            </span>
            <div className="flex items-center gap-2">
              {LOCATIONS_DATA.map((loc) => (
                <a
                  key={loc.id}
                  href={`#${loc.slug}`}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#E3E8DF] text-[#163828] hover:bg-[#163828] hover:text-white transition-all whitespace-nowrap shadow-2xs"
                >
                  {loc.name}
                </a>
              ))}
              <a
                href="#interactive-map"
                className="px-4 py-2 rounded-full text-xs font-semibold bg-[#EBF3EE] text-[#163828] hover:bg-[#163828] hover:text-white transition-all whitespace-nowrap"
              >
                Interactive Map
              </a>
            </div>
          </div>
        </section>

        {/* Four Large Destination Sections */}
        <div className="divide-y divide-[#E3E8DF]">
          {LOCATIONS_DATA.map((loc, index) => (
            <section
              key={loc.id}
              id={loc.slug}
              className={`py-20 sm:py-28 scroll-mt-28 ${
                index % 2 === 0 ? 'bg-white' : 'bg-[#FBFBF9]'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Top Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E3E8DF]">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#2E6A4B] uppercase tracking-wider mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{loc.region}</span>
                    </div>
                    <h2 className="editorial-title text-4xl sm:text-5xl font-bold text-[#163828]">
                      {loc.name}
                    </h2>
                    <p className="text-lg sm:text-xl text-[#57685D] mt-2 font-medium">
                      {loc.tagline}
                    </p>
                  </div>

                  <button
                    onClick={() => handleEnquireLocation(loc.name)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#163828] text-white font-semibold text-sm hover:bg-[#0E241A] transition-all shadow-md shrink-0"
                  >
                    Enquire on {loc.name}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Imagery & Overview Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Visual Gallery */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E3E8DF] h-80 sm:h-96">
                      <img
                        src={loc.heroImage}
                        alt={`${loc.name} Landscape`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {loc.gallery.map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden border border-[#E3E8DF] h-24 sm:h-28">
                          <img
                            src={img}
                            alt={`${loc.name} vista ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Overview Text & Highlights */}
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-[#163828] font-bold mb-3">
                        Regional Overview
                      </h3>
                      <p className="text-base sm:text-lg text-[#57685D] leading-relaxed">
                        {loc.overview}
                      </p>
                    </div>

                    <div className="bg-[#F4F6F1] p-6 rounded-2xl border border-[#E3E8DF]">
                      <h3 className="text-xs uppercase tracking-widest text-[#163828] font-bold mb-3 flex items-center gap-2">
                        <Mountain className="w-4 h-4 text-[#163828]" />
                        Natural Topography & Environment
                      </h3>
                      <p className="text-sm text-[#57685D] leading-relaxed">
                        {loc.natureAndEnvironment}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-[#163828] font-bold mb-3">
                        Key Geographic Highlights
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {loc.keyHighlights.map((hl, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#163828] font-medium p-2.5 rounded-lg bg-white border border-[#E3E8DF]">
                            <CheckCircle2 className="w-4 h-4 text-[#2E6A4B] shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connectivity & Why Explore Deep Dive */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                  {/* Connectivity Details */}
                  <div className="lg:col-span-7 bg-[#122B1E] text-white rounded-2xl p-6 sm:p-8 space-y-5">
                    <h3 className="text-xs uppercase tracking-widest text-[#86EFAC] font-bold flex items-center gap-2">
                      <Car className="w-4 h-4" />
                      Multimodal Connectivity & Transit Links
                    </h3>

                    <div className="space-y-3.5 text-xs sm:text-sm text-[#D1DCD5]">
                      <div className="pb-3 border-b border-white/10">
                        <span className="text-white font-semibold block mb-0.5">Mumbai Access:</span>
                        <p>{loc.connectivity.mumbai}</p>
                      </div>
                      <div className="pb-3 border-b border-white/10">
                        <span className="text-white font-semibold block mb-0.5">Navi Mumbai Influence Zone:</span>
                        <p>{loc.connectivity.naviMumbai}</p>
                      </div>
                      <div className="pb-3 border-b border-white/10">
                        <span className="text-white font-semibold block mb-0.5">Pune Connectivity:</span>
                        <p>{loc.connectivity.pune}</p>
                      </div>
                      <div className="pb-3 border-b border-white/10">
                        <span className="text-white font-semibold block mb-0.5">Railway Network:</span>
                        <p>{loc.connectivity.railway}</p>
                      </div>
                      <div>
                        <span className="text-white font-semibold block mb-0.5">Key Highway Corridors:</span>
                        <p>{loc.connectivity.highways}</p>
                      </div>
                    </div>
                  </div>

                  {/* Why People are Exploring */}
                  <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E3E8DF] shadow-xs space-y-4">
                    <h3 className="text-xs uppercase tracking-widest text-[#163828] font-bold">
                      Why Explore {loc.name} Region?
                    </h3>
                    <ul className="space-y-3">
                      {loc.whyExplore.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#57685D] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#163828] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Interactive Regional Map Section */}
        <section id="interactive-map" className="py-24 sm:py-32 bg-[#10291D] text-white relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              dark
              badge="Interactive Regional Grid"
              title="Regional Connectivity Map"
              description="Click on key metropolitan hubs or focus land destinations to examine their relative geographic position and transit links."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
              {/* Map Control List */}
              <div className="lg:col-span-5 space-y-3">
                <p className="text-xs uppercase tracking-widest text-[#86EFAC] font-bold mb-2">
                  Select a Location Pin:
                </p>
                {MAP_PINS.map((pin) => (
                  <button
                    key={pin.id}
                    onClick={() => setSelectedPin(pin)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      selectedPin.id === pin.id
                        ? 'bg-white text-[#163828] border-white shadow-lg'
                        : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          pin.type === 'metro' ? 'bg-[#86EFAC]' : 'bg-[#4ADE80]'
                        }`}
                      />
                      <div>
                        <h4 className="font-bold text-sm sm:text-base">{pin.name}</h4>
                        <p
                          className={`text-xs ${
                            selectedPin.id === pin.id ? 'text-[#57685D]' : 'text-[#D1DCD5]'
                          }`}
                        >
                          {pin.desc}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </button>
                ))}
              </div>

              {/* Map Visual Simulation Canvas */}
              <div className="lg:col-span-7 bg-[#0E241A] rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden min-h-[420px] flex flex-col justify-between">
                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#86EFAC] font-mono">
                        {selectedPin.type === 'metro' ? 'Metropolitan Hub' : 'Focus Land Destination'}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                        {selectedPin.name}
                      </h3>
                    </div>
                    <div className="text-right font-mono text-xs text-[#86EFAC]">
                      <span>Lat: {selectedPin.lat}° N</span>
                      <br />
                      <span>Lng: {selectedPin.lng}° E</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#D1DCD5] mt-4 leading-relaxed">
                    {selectedPin.desc}
                  </p>
                </div>

                {/* Stylized Node Network Visual */}
                <div className="my-8 py-6 px-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#86EFAC] animate-ping" />
                      <span>Mumbai & Navi Mumbai Gateway</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80]" />
                      <span>Pune Regional Corridor</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-white/60">
                    * Interactive regional map coordinates for geographic orientation.
                  </span>
                  <button
                    onClick={() => handleEnquireLocation(selectedPin.name)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5B] transition-all shadow-md"
                  >
                    Enquire on {selectedPin.name}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
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
        defaultLocation={modalDefaultLocation}
      />
    </>
  );
}
