import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SITE_CONTACT, getWhatsAppLink } from '../../data/siteData';
import ContactModal from '../common/ContactModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const waUrl = getWhatsAppLink(SITE_CONTACT.whatsappPrefill);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E3E8DF] py-3.5'
            : isHomePage
            ? 'bg-gradient-to-b from-black/50 via-black/20 to-transparent text-white py-5'
            : 'bg-white border-b border-[#E3E8DF] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="AKARBHUMI Home">
            <div className="p-1 rounded bg-white shadow-xs border border-[#E3E8DF]/60 transition-transform group-hover:scale-[1.02]">
              <img
                src="/assets/images/logo.png"
                alt="AKARBHUMI Logo"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? isScrolled || !isHomePage
                        ? 'text-[#163828] font-semibold'
                        : 'text-white font-semibold'
                      : isScrolled || !isHomePage
                      ? 'text-[#57685D] hover:text-[#163828]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                        isScrolled || !isHomePage ? 'bg-[#163828]' : 'bg-white'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                isScrolled || !isHomePage
                  ? 'border-[#E3E8DF] text-[#163828] hover:bg-[#F4F6F1]'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
              aria-label="WhatsApp AKARBHUMI"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              WhatsApp
            </a>

            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#163828] text-white text-xs font-semibold tracking-wide hover:bg-[#0E241A] transition-all shadow-sm transform hover:scale-[1.02]"
            >
              Enquire Now
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white shadow-xs"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-[#163828] hover:bg-[#F4F6F1]'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#163828] text-white flex flex-col justify-between p-6 overflow-y-auto animate-fade-in">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="p-1 rounded bg-white">
                  <img
                    src="/assets/images/logo.png"
                    alt="AKARBHUMI Logo"
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-8">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-semibold tracking-tight py-2 transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#86EFAC]' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-5 h-5 opacity-60" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-3 mt-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsContactModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-[#163828] font-bold text-sm shadow-md"
            >
              Enquire Now
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp ({SITE_CONTACT.whatsappDisplay})
            </a>

            <p className="text-center text-xs text-white/60 pt-2">
              “{SITE_CONTACT.tagline}”
            </p>
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
