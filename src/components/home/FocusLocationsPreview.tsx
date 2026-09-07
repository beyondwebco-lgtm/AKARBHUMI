import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { LOCATIONS_DATA } from '../../data/locationsData';
import SectionHeading from '../common/SectionHeading';

export default function FocusLocationsPreview() {
  return (
    <section className="py-24 sm:py-32 bg-white relative border-b border-[#E3E8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="Strategic Corridors"
            title="Explore Emerging Land Destinations"
            description="Carefully researched regional hubs offering scenic geography, expanding transit infrastructure, and enduring lifestyle appeal."
          />
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#163828] hover:text-[#0E241A] group shrink-0"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Image-Led Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATIONS_DATA.map((loc) => (
            <Link
              key={loc.id}
              to={`/locations#${loc.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-[#0E241A] h-[440px] flex flex-col justify-end p-6 border border-[#E3E8DF] shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Background Image with Zoom */}
              <div className="absolute inset-0 z-0">
                <img
                  src={loc.heroImage}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E241A] via-[#0E241A]/60 to-black/20 group-hover:via-[#0E241A]/70 transition-all duration-500" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#86EFAC] tracking-wider uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Raigad, Maharashtra</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {loc.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#D1DCD5] line-clamp-2 leading-relaxed">
                  {loc.tagline}
                </p>

                <div className="pt-3 flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#86EFAC] transition-colors">
                  <span>Explore Destination</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
