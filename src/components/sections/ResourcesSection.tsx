import React, { useState } from 'react';
import { ExternalLink, MapPin, Phone, Mail, AlertCircle, ArrowRight } from 'lucide-react';
import { SiteContent } from '../../data/translations';
import { SectionId } from '../../types';
import { ResilientImage } from '../ResilientImage';
import { ScrollReveal } from '../ScrollReveal';

interface ResourcesSectionProps {
  content: SiteContent;
  onNavigateToContact: (recipient: 'project' | 'newBeginnings') => void;
  onNavigate: (section: SectionId) => void;
}

type ResourceFilter = 'all' | 'helpline' | 'treatment' | 'youth' | 'research';

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  content,
  onNavigateToContact,
}) => {
  const { resources } = content;
  const [filter, setFilter] = useState<ResourceFilter>('all');

  const filteredOrgs =
    filter === 'all'
      ? resources.organizations
      : resources.organizations.filter((org) => org.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Header */}
      <ScrollReveal>
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-medium text-[#5841A3]">{resources.eyebrow}</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#231F29] leading-tight [text-wrap:balance]">
            {resources.title}
          </h1>
          <p className="text-base sm:text-lg text-[#433D4D] leading-relaxed">
            {resources.intro}
          </p>
        </header>
      </ScrollReveal>

      {/* Emergency Services Strip */}
      <ScrollReveal>
        <section className="rounded-xl bg-[#F2EEF8] border border-[#D3C9E5] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-[#7F291A] font-semibold text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{resources.emergencyHeading}</span>
            </div>
            <p className="text-sm text-[#433D4D] leading-relaxed">
              {resources.emergencyBody}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.emergencyCards.map((card) => (
            <div
              key={card.number}
              className="rounded-lg bg-[#FAF8FC] border border-[#DFD8EC] p-5 space-y-1.5"
            >
              <p className="text-xs font-medium text-[#5A5368]">{card.title}</p>
              <p className="font-mono text-2xl font-medium text-[#231F29] tabular-nums">
                {card.number}
              </p>
              <p className="text-xs text-[#5A5368] leading-relaxed">{card.note}</p>
              {card.apaCitation && (
                <p className="pt-2 border-t border-[#E6DFF3] text-[11px] text-[#615A6D] leading-relaxed pl-4 -indent-4 break-words">
                  {card.apaCitation}
                </p>
              )}
            </div>
          ))}
        </div>
        </section>
      </ScrollReveal>

      {/* Featured Scarborough Partner: New Beginnings Recovery Home */}
      <ScrollReveal>
        <section className="rounded-xl bg-[#FAF8FC] border border-[#D3C9E5] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-5 bg-[#F2EEF8]">
            <ResilientImage
              src={`${import.meta.env.BASE_URL}assets/aistudio/1exterior_2e1e3910.jpg`}
              alt={resources.newBeginnings.imageAlt}
              aspectClassName="aspect-[4/3]"
              className="w-full h-full object-cover min-h-[260px]"
            />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium text-[#5841A3]">
                {resources.newBeginnings.eyebrow}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29]">
                {resources.newBeginnings.title}
              </h2>
              <p className="text-sm font-medium text-[#5A5368]">
                {resources.newBeginnings.subtitle}
              </p>
            </div>

            <p className="text-base text-[#433D4D] leading-relaxed">
              {resources.newBeginnings.overview}
            </p>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#DFD8EC] text-sm">
              <div className="flex items-start gap-2.5 text-[#3D3746]">
                <MapPin className="w-4 h-4 text-[#5841A3] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-[#615A6D]">
                    {resources.newBeginnings.addressLabel}
                  </span>
                  <span>{resources.newBeginnings.addressValue}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-[#3D3746]">
                  <Phone className="w-4 h-4 text-[#5841A3] shrink-0" aria-hidden="true" />
                  <a
                    href="tel:16474826308"
                    className="font-mono tabular-nums hover:text-[#5841A3] underline underline-offset-4"
                  >
                    1-647-482-6308
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-[#3D3746]">
                  <Mail className="w-4 h-4 text-[#5841A3] shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:info@newbeginningsrecovery.ca"
                    className="hover:text-[#5841A3] underline underline-offset-4 break-all"
                  >
                    info@newbeginningsrecovery.ca
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigateToContact('newBeginnings')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{resources.newBeginnings.contactCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href="https://newbeginningsrecovery.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5841A3] hover:text-[#463287] underline underline-offset-4"
              >
                <span>{resources.newBeginnings.websiteLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="pt-3 border-t border-[#DFD8EC] space-y-1">
              <p className="text-[11px] font-medium text-[#5841A3]">
                {resources.apaCitationLabel}
              </p>
              <p className="text-xs text-[#5A5368] leading-relaxed pl-5 -indent-5 break-words">
                {resources.newBeginnings.apaCitation}
              </p>
            </div>
          </div>
        </div>

        {/* New Beginnings 4-Step Treatment Process */}
        <div className="bg-[#F2EEF8]/70 border-t border-[#DFD8EC] p-6 sm:p-10 space-y-6">
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#231F29]">
            {resources.newBeginnings.processHeading}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {resources.newBeginnings.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-lg bg-[#FAF8FC] border border-[#DFD8EC] space-y-2"
              >
                <span className="font-mono text-xs font-medium text-[#5841A3] tabular-nums">
                  {step.step}
                </span>
                <h4 className="font-serif text-base font-medium text-[#231F29]">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5A5368] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
        </section>
      </ScrollReveal>

      {/* Ontario & National Directory */}
      <ScrollReveal>
        <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29]">
              {resources.directoryHeading}
            </h2>
            <p className="text-sm text-[#433D4D] leading-relaxed">
              {resources.directoryNotice}
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div
            role="group"
            aria-label="Filter support resources"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#F2EEF8] border border-[#DFD8EC] rounded-lg"
          >
            {(['all', 'helpline', 'treatment', 'youth', 'research'] as ResourceFilter[]).map(
              (cat) => {
                const active = filter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFilter(cat)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#FAF8FC] text-[#5841A3] shadow-xs'
                        : 'text-[#5A5368] hover:text-[#231F29]'
                    }`}
                  >
                    {resources.directoryCategories[cat]}
                  </button>
                );
              }
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOrgs.map((org) => (
            <article
              key={org.id}
              className="p-6 rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] flex flex-col justify-between space-y-5"
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-[#615A6D]">
                  <span>{resources.directoryCategories[org.category]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{org.region}</span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#231F29]">
                  {org.name}
                </h3>

                <p className="text-sm text-[#433D4D] leading-relaxed">
                  {org.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6DFF3] space-y-2 text-xs sm:text-sm">
                <p className="text-[#5A5368]">
                  <span className="font-medium text-[#231F29]">
                    {resources.availabilityLabel}
                  </span>{' '}
                  {org.availability}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs tabular-nums text-[#231F29]">
                    {org.phone && <span>{org.phone}</span>}
                    {org.textInfo && <span className="text-[#5A5368]">{org.textInfo}</span>}
                  </div>

                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5841A3] hover:text-[#463287] underline underline-offset-4 whitespace-nowrap shrink-0"
                  >
                    <span>{resources.visitWebsiteLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>

                <div className="pt-2.5 border-t border-[#ECE6F6] space-y-0.5">
                  <p className="text-[11px] font-medium text-[#5841A3]">
                    {resources.apaCitationLabel}
                  </p>
                  <p className="text-[11px] text-[#615A6D] leading-relaxed pl-4 -indent-4 break-words">
                    {org.apaCitation}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        </section>
      </ScrollReveal>
    </div>
  );
};
