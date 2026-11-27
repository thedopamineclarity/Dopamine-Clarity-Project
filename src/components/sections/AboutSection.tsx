import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { SiteContent } from '../../data/translations';
import { ResilientImage } from '../ResilientImage';

interface AboutSectionProps {
  content: SiteContent;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  const { about } = content;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Header & Mission Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        <div className="lg:col-span-7 space-y-6">
          <p className="text-sm font-medium text-[#5841A3]">{about.eyebrow}</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#231F29] leading-tight [text-wrap:balance]">
            {about.title}
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-[#5841A3] py-4 border-y border-[#DFD8EC]">
            {about.lead}
          </p>

          <div className="space-y-4 text-base text-[#433D4D] leading-relaxed max-w-prose">
            {about.storyParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="overflow-hidden rounded-xl border border-[#DFD8EC] bg-[#F2EEF8] flex-1">
            <ResilientImage
              src={`${import.meta.env.BASE_URL}src/assets/images/community_circle_support_1795746664233.jpg`}
              alt={about.communityImageAlt}
              aspectClassName="aspect-[4/3]"
              className="w-full h-full object-cover min-h-[260px]"
            />
          </div>

          <div className="rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] p-6 space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#5841A3]">
              <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{about.verificationHeading}</span>
            </div>
            <p className="text-sm text-[#433D4D] leading-relaxed">
              {about.verificationBody}
            </p>
          </div>
        </div>
      </section>

      {/* Goals & Plans */}
      <section className="pt-10 border-t border-[#DFD8EC] space-y-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29]">
          {about.plansHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.plans.map((plan) => (
            <div
              key={plan.number}
              className="p-6 rounded-xl bg-[#F2EEF8]/80 border border-[#DFD8EC] space-y-2.5"
            >
              <span className="block font-mono text-xs text-[#615A6D] tabular-nums">
                {plan.number}
              </span>
              <h3 className="font-serif text-lg font-medium text-[#231F29]">
                {plan.title}
              </h3>
              <p className="text-sm text-[#5A5368] leading-relaxed">
                {plan.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section className="pt-10 border-t border-[#DFD8EC] space-y-8">
        <div className="space-y-2 max-w-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29]">
            {about.teamHeading}
          </h2>
          <p className="text-base text-[#5A5368]">{about.teamSubheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {about.members.map((member) => (
            <article
              key={member.id}
              className="p-6 rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <p className="text-xs font-medium text-[#5841A3]">{member.role}</p>
                <h3 className="font-serif text-xl font-medium text-[#231F29]">
                  {member.name}
                </h3>
                <p className="text-sm text-[#433D4D] leading-relaxed pt-1">
                  {member.statement}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
