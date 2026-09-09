import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { ARTICLES_DATA } from '../../data/articlesData';
import SectionHeading from '../common/SectionHeading';

export default function LandInsightsPreview() {
  const featuredArticles = ARTICLES_DATA.slice(0, 4);

  return (
    <section className="py-24 sm:py-32 bg-[#FBFBF9] relative border-b border-[#E3E8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="Insights & Knowledge"
            title="Understand Land Before You Own It"
            description="Authoritative, research-backed guides covering revenue records, 7/12 extracts, zoning laws, NA conversion, and due diligence."
          />
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#163828] hover:text-[#2E6A4B] group shrink-0"
          >
            <span>View All Insights ({ARTICLES_DATA.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.map((art) => (
            <Link
              key={art.id}
              to={`/insights/${art.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-[#E3E8DF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-[#F4F6F1]">
                <img
                  src={art.featuredImage}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-md bg-[#163828] text-white shadow-sm">
                  {art.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-[#57685D]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {art.publishedDate}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#163828] group-hover:text-[#2E6A4B] transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#57685D] line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E3E8DF] flex items-center justify-between text-xs font-bold text-[#163828] group-hover:text-[#2E6A4B]">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
