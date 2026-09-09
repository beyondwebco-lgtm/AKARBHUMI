import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { NAV_LINKS, SITE_CONTACT, getWhatsAppLink } from '../../data/siteData';
import ContactModal from '../common/ContactModal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const whatsappUrl = getWhatsAppLink(
    'Hello Aakar Bhumi, I would like to book a land consultation.'
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E3E8DF]'
            : 'bg-white/90 backdrop-blur-xs py-4 border-b border-[#E3E8DF]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#163828]"
            >
              <img
                src="/assets/images/logo.png"
                alt="AKARBHUMI Logo - Shaping Land. Creating Value."
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
            </Link>

            {/* Desktop Navigation Links (Exact 5 items) */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path === '/insights' && location.pathname.startsWith('/insights')) ||
                  (link.path === '/services' && location.pathname.startsWith('/services'));

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-[#EBF3EE] text-[#163828] font-bold'
                        : 'text-[#57685D] hover:text-[#163828] hover:bg-[#F4F6F1]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Actions: WhatsApp + Book Consultation */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#163828] hover:bg-[#EBF3EE] border border-[#E3E8DF] transition-all"
                title="Chat with Land Advisory Desk"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#163828] hover:bg-[#0E241A] text-white text-xs font-bold tracking-wide transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#EBF3EE] text-[#25D366] hover:bg-[#D8E8DD] transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#163828] hover:bg-[#F4F6F1] focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-[#E3E8DF] px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path === '/insights' && location.pathname.startsWith('/insights')) ||
                  (link.path === '/services' && location.pathname.startsWith('/services'));

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#EBF3EE] text-[#163828] font-bold'
                        : 'text-[#57685D] hover:bg-[#F4F6F1] hover:text-[#163828]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#E3E8DF] space-y-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsConsultationOpen(true);
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#163828] text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Land Expert on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <ContactModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
