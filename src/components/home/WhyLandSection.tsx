import React from 'react';
import SectionHeading from '../common/SectionHeading';

const WHY_LAND_ITEMS = [
  {
    number: '01',
    title: 'Tangible Asset',
    text: 'Land is a physical, finite, and fundamentally limited asset that provides genuine permanence and security.',
  },
  {
    number: '02',
    title: 'Long-Term Potential',
    text: 'Strategically located land may benefit from regional development, connectivity expansion, and long-term infrastructure growth.',
  },
  {
    number: '03',
    title: 'Freedom of Ownership',
    text: 'Land gives owners autonomy and flexibility for future planning, custom architectural design, and purposeful use, subject to applicable statutory regulations.',
  },
  {
    number: '04',
    title: 'Lifestyle Opportunity',
    text: 'Suitable locations surrounded by nature offer a serene, peaceful, and healthier alternative to congested metropolitan environments.',
  },
  {
    number: '05',
    title: 'Legacy Asset',
    text: 'Land can be held securely across generations as an enduring family heritage and wealth anchor.',
  },
];

export default function WhyLandSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FBFBF9] relative border-b border-[#E3E8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="Fundamentals"
            title="Why Land?"
            description="Unlike depreciating structures, thoughtfully chosen land represents timeless permanence, natural sanctuary, and lasting value."
          />
        </div>

        {/* 5 Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_LAND_ITEMS.map((item, index) => (
            <div
              key={item.number}
              className={`relative bg-white rounded-2xl p-8 border border-[#E3E8DF] transition-all duration-300 hover:shadow-xl hover:border-[#163828]/40 group ${
                index === 4 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-[#163828]/20 group-hover:text-[#163828] transition-colors">
                  {item.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#163828]/30 group-hover:bg-[#163828] transition-colors" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#163828] mb-3 group-hover:translate-x-1 transition-transform">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-[#57685D] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
