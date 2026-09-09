import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  TrendingUp, 
  SearchCheck, 
  Sprout, 
  Layers, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import SectionHeading from '../common/SectionHeading';

interface ServicesSectionProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

export default function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#2E6A4B]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#2E6A4B]" />;
      case 'SearchCheck':
        return <SearchCheck className="w-6 h-6 text-[#2E6A4B]" />;
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-[#2E6A4B]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#2E6A4B]" />;
      default:
        return <Compass className="w-6 h-6 text-[#2E6A4B]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FBFBF9] relative border-b border-[#E3E8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="Consultation & Advisory"
            title="Comprehensive Land Advisory Services"
            description="Objective, research-driven counsel to help you evaluate, acquire, plan, and create long-term value from land without brokerage pressure."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#163828] hover:text-[#2E6A4B] group shrink-0"
          >
            <span>Explore All 5 Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv, index) => (
            <div
              key={srv.id}
              className={`bg-white rounded-3xl p-8 border border-[#E3E8DF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#57685D] px-3 py-1 rounded-full bg-[#F4F6F1]">
                    {srv.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#163828] group-hover:text-[#2E6A4B] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#2E6A4B]">
                    {srv.shortTagline}
                  </p>
                </div>

                <p className="text-sm text-[#57685D] leading-relaxed">
                  {srv.description}
                </p>

                <div className="pt-4 border-t border-[#E3E8DF] space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#163828]">
                    Key Advisory Aspects:
                  </p>
                  <ul className="space-y-1.5">
                    {srv.keyAspects.slice(0, 3).map((aspect, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#57685D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6A4B] mt-0.5 shrink-0" />
                        <span>{aspect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E3E8DF] flex items-center justify-between">
                <button
                  onClick={() => onOpenConsultation && onOpenConsultation(srv.title)}
                  className="text-xs font-bold text-[#163828] hover:text-[#2E6A4B] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/services"
                  className="text-[11px] text-[#57685D] hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}

          {/* Value Summary Card */}
          <div className="bg-[#122B1E] text-white rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-md md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-widest text-[#86EFAC] font-bold">
                Advisory Principle
              </span>
              <h3 className="text-2xl font-bold tracking-tight leading-snug">
                Transparent & Independent Guidance
              </h3>
              <p className="text-xs sm:text-sm text-[#D1DCD5] leading-relaxed">
                We work purely as your strategic land advisor. No commissions driven by property sales, no aggressive sales quotas—just deep, honest analysis of whether a land decision aligns with your goals.
              </p>
            </div>

            <button
              onClick={() => onOpenConsultation && onOpenConsultation('General Advisory')}
              className="w-full py-3.5 px-4 rounded-xl bg-[#2E6A4B] hover:bg-[#24543B] text-white text-xs font-bold tracking-wide transition-all text-center shadow-lg border border-[#86EFAC]/20 cursor-pointer"
            >
              Discuss Your Land Requirement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
