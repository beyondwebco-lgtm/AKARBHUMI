import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONTACT, getWhatsAppLink } from '../../data/siteData';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const waUrl = getWhatsAppLink(SITE_CONTACT.whatsappPrefill);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Desktop Tooltip / Pill */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-3 bg-[#163828] text-white pl-4 pr-3 py-3 rounded-full shadow-2xl hover:bg-[#0E241A] transition-all duration-300 transform hover:scale-105 border border-white/20"
        aria-label="Chat with AKARBHUMI on WhatsApp"
      >
        <span className="text-sm font-medium tracking-wide hidden sm:inline-block pr-1">
          Chat with AKARBHUMI
        </span>
        <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md animate-pulse">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>
      </a>
    </div>
  );
}
