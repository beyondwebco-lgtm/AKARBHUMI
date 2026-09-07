import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { SITE_CONTACT, NAV_LINKS, LEGAL_DISCLAIMER, getWhatsAppLink } from '../../data/siteData';

export default function Footer() {
  const waUrl = getWhatsAppLink(SITE_CONTACT.whatsappPrefill);

  return (
    <footer className="bg-[#10291D] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <div className="p-1.5 rounded-lg bg-white inline-block shadow-md">
                <img
                  src="/assets/images/logo.png"
                  alt="AKARBHUMI Logo"
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xl font-medium tracking-tight text-white/90">
              “{SITE_CONTACT.tagline}”
            </p>

            <p className="text-sm text-[#D1DCD5] leading-relaxed max-w-sm">
              AKARBHUMI is a trusted platform for land information, location insights, and future land development opportunities across emerging corridors of Western Maharashtra.
            </p>

            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1EBE5B] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {SITE_CONTACT.whatsappDisplay}
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#86EFAC]">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#D1DCD5] hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Locations */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#86EFAC]">
              Focus Locations
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D1DCD5]">
              <li>
                <Link to="/locations#mangaon" className="hover:text-white transition-colors">
                  Mangaon (NH 66 Corridor)
                </Link>
              </li>
              <li>
                <Link to="/locations#roha" className="hover:text-white transition-colors">
                  Roha (Kundalika Valley)
                </Link>
              </li>
              <li>
                <Link to="/locations#pali" className="hover:text-white transition-colors">
                  Pali (Sudhagad Foothills)
                </Link>
              </li>
              <li>
                <Link to="/locations#karjat" className="hover:text-white transition-colors">
                  Karjat (Sahyadri Belt)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (with editable placeholders) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#86EFAC]">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs text-[#D1DCD5]">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">WhatsApp</span>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {SITE_CONTACT.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#86EFAC] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Email Advisory</span>
                  <a href={`mailto:${SITE_CONTACT.companyEmailPlaceholder}`} className="hover:underline">
                    {SITE_CONTACT.companyEmailPlaceholder}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#86EFAC] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Advisory Line</span>
                  <span>{SITE_CONTACT.companyPhonePlaceholder}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#86EFAC] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Region</span>
                  <span>{SITE_CONTACT.officeAddressPlaceholder}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Block as per Brief */}
        <div className="py-8 border-b border-white/10">
          <p className="text-xs leading-relaxed text-[#9DB0A4]">
            <strong className="text-white font-semibold">Disclaimer: </strong>
            {LEGAL_DISCLAIMER}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Policy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9DB0A4]">
          <p>© {new Date().getFullYear()} AKARBHUMI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">
              Statutory Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
