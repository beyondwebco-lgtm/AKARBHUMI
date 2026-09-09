import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
}

export default function SEO({ title, description, canonicalUrl, ogType = 'website' }: SEOProps) {
  useEffect(() => {
    // Page Title
    const formattedTitle = title.includes('Aakar Bhumi') || title.includes('AKARBHUMI')
      ? title
      : `${title} | Aakar Bhumi — Shaping Land. Creating Value.`;
    document.title = formattedTitle;

    // Meta Description
    const defaultDesc = 'Aakar Bhumi is a trusted land consultation and research advisory platform for buying, investing, developing, and creating long-term value from land.';
    const finalDesc = description || defaultDesc;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', finalDesc);

    // Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', formattedTitle);

    // Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', finalDesc);

    // Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    // Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl || window.location.href);
  }, [title, description, canonicalUrl, ogType]);

  return null;
}
