import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, Search, ArrowRight, Filter, Compass } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { ARTICLES_DATA } from '../data/articlesData';
import FinalCTA from '../components/home/FinalCTA';
import ContactModal from '../components/common/ContactModal';

const CATEGORIES = [
  'All',
  'Due Diligence',
  'Legal & Documentation',
  'Regulations & Planning',
  'Land Basics',
  'Market & Investment',
];

export default function LandInsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchesCategory =
      selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Land Insights & Knowledge Centre"
        description="Comprehensive guides on 7/12 extracts, NA land conversion, title verification, plotted development rules, and land due diligence in Maharashtra."
      />

      <main className="w-full pt-24 sm:pt-28">
        {/* Header Banner */}
        <section className="bg-white py-16 sm:py-24 border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3EE] text-[#163828] text-xs font-bold tracking-widest uppercase mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                Knowledge Centre
              </div>
              <h1 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#163828] leading-[1.08]">
                Understand Land Before You Own It
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#57685D] leading-relaxed">
                Objective legal fundamentals, revenue record guides, and strategic insights for informed land ownership.
              </p>
            </div>

            {/* Search & Filter Toolbar */}
            <div className="mt-12 pt-8 border-t border-[#E3E8DF] flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#163828] text-white shadow-sm'
                        : 'bg-[#F4F6F1] text-[#57685D] hover:bg-[#E3E8DF] hover:text-[#163828]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-[#57685D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles, 7/12, NA, title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 sm:py-28 bg-[#FBFBF9] border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-[#E3E8DF] p-8">
                <BookOpen className="w-12 h-12 text-[#57685D] mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-[#163828]">No articles found</h3>
                <p className="text-sm text-[#57685D] mt-1">
                  Try adjusting your search keywords or category filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-[#163828] text-white text-xs font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((art) => (
                  <Link
                    key={art.id}
                    to={`/land-insights/${art.slug}`}
                    className="bg-white rounded-2xl overflow-hidden border border-[#E3E8DF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                  >
                    {/* Featured Image */}
                    <div className="relative h-56 overflow-hidden bg-[#F4F6F1]">
                      <img
                        src={art.featuredImage}
                        alt={art.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 text-xs font-semibold tracking-wider px-3 py-1 rounded-md bg-[#163828] text-white shadow-sm">
                        {art.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-3 text-xs text-[#57685D]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {art.readTime}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {art.publishedDate}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-[#163828] group-hover:text-[#2E6A4B] transition-colors leading-snug">
                          {art.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#57685D] line-clamp-3 leading-relaxed">
                          {art.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#E3E8DF] flex items-center justify-between text-xs font-bold text-[#163828] group-hover:text-[#2E6A4B]">
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
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
