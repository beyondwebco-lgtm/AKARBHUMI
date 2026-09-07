export interface LocationItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  region: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  connectivity: {
    mumbai: string;
    naviMumbai: string;
    pune: string;
    railway: string;
    highways: string;
  };
  natureAndEnvironment: string;
  whyExplore: string[];
  keyHighlights: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: 'Land Basics' | 'Legal & Documentation' | 'Due Diligence' | 'Regulations & Planning' | 'Market & Investment';
  readTime: string;
  publishedDate: string;
  excerpt: string;
  featuredImage: string;
  author: {
    name: string;
    role: string;
  };
  keyTakeaways: string[];
  content: {
    heading: string;
    paragraphs: string[];
    checklist?: string[];
  }[];
  tags: string[];
  relatedSlugs: string[];
}

export interface SiteContactInfo {
  brandName: string;
  tagline: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappPrefill: string;
  companyPhonePlaceholder: string;
  companyEmailPlaceholder: string;
  officeAddressPlaceholder: string;
  businessHoursPlaceholder: string;
}
