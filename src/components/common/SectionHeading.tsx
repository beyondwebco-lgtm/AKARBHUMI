import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'left',
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-[#4ADE80]' : 'bg-[#163828]'}`} />
          <span
            className={`text-xs font-semibold tracking-widest uppercase ${
              dark ? 'text-[#86EFAC]' : 'text-[#163828]'
            }`}
          >
            {badge}
          </span>
        </div>
      )}
      <h2
        className={`editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
          dark ? 'text-white' : 'text-[#163828]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-[#D1DCD5]' : 'text-[#57685D]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
