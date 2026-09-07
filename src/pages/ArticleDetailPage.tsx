import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  User, 
  Copy,
  Check
} from 'lucide-react';
import SEO from '../components/common/SEO';
import { ARTICLES_DATA } from '../data/articlesData';
import { SITE_CONTACT, getWhatsAppLink } from '../data/siteData';
import ContactModal from '../components/common/ContactModal';

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-[#163828] mb-4">Article Not Found</h1>
        <p className="text-[#57685D] mb-6">The requested land knowledge guide could not be located.</p>
        <Link
          to="/land-insights"
          className="px-6 py-3 rounded-xl bg-[#163828] text-white font-semibold text-sm hover:bg-[#0E241A] transition-all"
        >
          Back to Knowledge Centre
        </Link>
      </div>
    );
  }

  const relatedArticles = ARTICLES_DATA.filter((a) =>
    article.relatedSlugs.includes(a.slug) || (a.category === article.category && a.id !== article.id)
  ).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const whatsappInquiryUrl = getWhatsAppLink(
    `Hello AKARBHUMI, I am reading the article "${article.title}" and have a query regarding this topic.`
  );

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
      />

      <main className="w-full pt-24 sm:pt-28 bg-[#FBFBF9]">
        {/* Article Breadcrumbs & Top Bar */}
        <section className="bg-white border-b border-[#E3E8DF] py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              to="/land-insights"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#57685D] hover:text-[#163828] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Knowledge Centre
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E3E8DF] text-xs font-semibold text-[#163828] hover:bg-[#F4F6F1] transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#2E6A4B]" />
                  Link Copied
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  Share Guide
                </>
              )}
            </button>
          </div>
        </section>

        {/* Article Header & Main Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Metadata */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#163828] text-white">
                {article.category}
              </span>
              <span className="text-xs text-[#57685D] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="text-xs text-[#57685D]">•</span>
              <span className="text-xs text-[#57685D] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishedDate}
              </span>
            </div>

            <h1 className="editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#163828] leading-[1.1]">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#57685D] leading-relaxed font-light">
              {article.excerpt}
            </p>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-[#EBF3EE] text-[#163828] flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#163828]">{article.author.name}</p>
                <p className="text-[11px] text-[#57685D]">{article.author.role}</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E3E8DF] mb-12 h-[340px] sm:h-[450px]">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-[#122B1E] text-white rounded-2xl p-6 sm:p-8 mb-12 shadow-sm">
            <h3 className="text-xs uppercase tracking-widest text-[#86EFAC] font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#86EFAC]" />
              Key Advisory Takeaways
            </h3>
            <ul className="space-y-3">
              {article.keyTakeaways.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-[#D1DCD5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#86EFAC] mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Body Sections */}
          <div className="space-y-10 text-[#163828] text-base sm:text-lg leading-relaxed">
            {article.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="editorial-title text-2xl sm:text-3xl font-bold text-[#163828] tracking-tight">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-[#57685D] leading-relaxed">
                    {para}
                  </p>
                ))}

                {sec.checklist && (
                  <div className="bg-white p-5 rounded-xl border border-[#E3E8DF] mt-4 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#163828]">
                      Verification Checklist:
                    </p>
                    <ul className="space-y-2">
                      {sec.checklist.map((item, cIdx) => (
                        <li key={cIdx} className="flex items-center gap-2 text-sm text-[#57685D]">
                          <Check className="w-4 h-4 text-[#2E6A4B] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-8 mt-12 border-t border-[#E3E8DF] flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#163828] mr-2">Tags:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-white border border-[#E3E8DF] text-xs text-[#57685D]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Direct WhatsApp Advisory Consultation Box */}
          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E3E8DF] shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold text-[#163828]">
                Have questions about {article.title}?
              </h3>
              <p className="text-xs sm:text-sm text-[#57685D]">
                Consult directly with our land research team via WhatsApp for personalized guidance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5B] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Ask on WhatsApp
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#163828] text-white text-xs font-bold hover:bg-[#0E241A] transition-all shadow-md"
              >
                Enquire
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="py-16 sm:py-20 bg-white border-t border-[#E3E8DF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-10">
                <h3 className="editorial-title text-2xl sm:text-3xl font-bold text-[#163828]">
                  Related Land Guides
                </h3>
                <Link
                  to="/land-insights"
                  className="text-xs font-bold text-[#163828] hover:underline flex items-center gap-1"
                >
                  View All Insights
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/land-insights/${rel.slug}`}
                    className="bg-[#FBFBF9] rounded-2xl overflow-hidden border border-[#E3E8DF] hover:shadow-lg transition-all flex flex-col group p-5 space-y-3"
                  >
                    <span className="text-[11px] font-semibold text-[#2E6A4B] uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-[#163828] group-hover:text-[#2E6A4B] transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#57685D] line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
