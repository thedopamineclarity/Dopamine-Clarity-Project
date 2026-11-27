import React, { useState } from 'react';
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  BookOpen,
  HeartHandshake,
  MessageSquareHeart,
  ExternalLink,
} from 'lucide-react';
import { SiteContent } from '../../data/translations';
import { APA_REFERENCES } from '../../data/references';
import { SectionId } from '../../types';
import { ResilientImage } from '../ResilientImage';
import { BrandMark } from '../BrandMark';

interface HomeSectionProps {
  content: SiteContent;
  onNavigate: (section: SectionId) => void;
  onOpenReference: (refId: number) => void;
  onNavigateToContact: (recipient: 'project' | 'newBeginnings') => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  content,
  onNavigate,
  onOpenReference,
  onNavigateToContact,
}) => {
  const { home, about, education, resources, journal, donate } = content;
  const [selectedEduIndex, setSelectedEduIndex] = useState(0);

  const activeEduTopic = education.topics[selectedEduIndex] ?? education.topics[0];
  const featuredStory = journal.initialStories[0];
  const previewRefs = APA_REFERENCES.slice(0, 3);

  return (
    <div className="space-y-20">
      {/* Hero Split Frame — Displays Project Name ("The Dopamine Clarity Project") + Logo */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3.5">
              <BrandMark className="w-12 h-12 shrink-0" />
              <p className="text-sm font-medium text-[#5841A3]">{home.eyebrow}</p>
            </div>

            <h1 className="font-serif text-[clamp(2.35rem,4.2vw,3.6rem)] leading-[1.08] font-medium tracking-tight text-[#231F29] [text-wrap:balance]">
              {home.heroTitle}
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-[#5841A3]">
              “{content.slogan}”
            </p>

            <p className="text-base sm:text-lg text-[#433D4D] leading-relaxed max-w-xl">
              {home.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('education')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5841A3]"
              >
                <span>{home.primaryCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('resources')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#231F29] bg-[#F2EEF8] hover:bg-[#E8E1F4] border border-[#D3C9E5] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                {home.secondaryCta}
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <figure className="h-full flex flex-col">
              <div className="flex-1 overflow-hidden rounded-xl border border-[#DFD8EC] bg-[#F2EEF8]">
                <ResilientImage
                  src="/src/assets/images/hero_sanctuary_morning_1795746663422.jpg"
                  alt={home.heroImageAlt}
                  aspectClassName="aspect-[16/9]"
                  className="w-full h-full object-cover min-h-[280px] lg:min-h-[380px]"
                />
              </div>
              <figcaption className="mt-2.5 text-xs font-serif italic text-[#615A6D]">
                {home.heroCaption}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Immediate Quiet Support Strip */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2 text-[#5841A3] font-medium text-sm">
              <PhoneCall className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{home.urgentHelp.heading}</span>
            </div>
            <p className="text-sm text-[#433D4D]">{home.urgentHelp.body}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-mono tabular-nums text-[#231F29]">
            <div className="bg-[#FAF8FC] border border-[#DFD8EC] rounded-lg px-4 py-3">
              {home.urgentHelp.emergencyLabel}
            </div>
            <div className="bg-[#FAF8FC] border border-[#DFD8EC] rounded-lg px-4 py-3">
              {home.urgentHelp.helplineLabel}
            </div>
            <div className="bg-[#FAF8FC] border border-[#DFD8EC] rounded-lg px-4 py-3">
              {home.urgentHelp.scarboroughLabel}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Section Jump Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="max-w-2xl space-y-3 mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#231F29] [text-wrap:balance]">
            {home.overviewHeading}
          </h2>
          <p className="text-base text-[#5A5368] leading-relaxed">
            {home.overviewIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {home.sectionCards.map((card) => (
            <button
              key={card.sectionId}
              type="button"
              onClick={() => onNavigate(card.sectionId)}
              className="group text-left flex flex-col justify-between p-6 rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] hover:border-[#5841A3]/60 hover:bg-[#F2EEF8]/70 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5841A3]"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-[#615A6D] tabular-nums">
                  <span>{card.number}</span>
                  <span>{home.exploreLabel}</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#231F29] group-hover:text-[#5841A3] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[#5A5368] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#E6DFF3] flex items-center justify-between text-sm font-medium text-[#5841A3]">
                <span>{card.action}</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* EXPANDED PREVIEW 01: About Us & Team Spotlight */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-6 border-t border-[#DFD8EC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-6 space-y-5 flex flex-col justify-center">
            <p className="text-sm font-medium text-[#5841A3]">{home.expanded.aboutEyebrow}</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29] [text-wrap:balance]">
              {about.title}
            </h2>
            <p className="text-base text-[#433D4D] leading-relaxed">
              {about.storyParagraphs[0]}
            </p>
            <p className="text-sm text-[#5A5368] leading-relaxed">
              {about.verificationBody}
            </p>

            {/* Isla Mina spotlight + full coordinator list preview */}
            <div className="rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] p-5 space-y-3">
              <p className="text-xs font-semibold text-[#5841A3]">
                {about.members[0]?.name} · {about.members[0]?.role}
              </p>
              <p className="text-sm italic text-[#231F29] leading-relaxed">
                “{about.members[0]?.statement}”
              </p>
              <div className="pt-2 border-t border-[#DFD8EC] flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#5A5368]">
                <span className="font-medium text-[#231F29]">
                  {home.expanded.teamPreviewLabel}:
                </span>
                {about.members.map((m, idx) => (
                  <span key={m.id}>
                    {m.name}
                    {idx < about.members.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#5841A3] hover:text-[#463287] underline underline-offset-4 cursor-pointer"
              >
                <span>{home.expanded.aboutCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full overflow-hidden rounded-xl border border-[#DFD8EC] bg-[#F2EEF8]">
              <ResilientImage
                src="/src/assets/images/community_circle_support_1795746664233.jpg"
                alt={about.communityImageAlt}
                aspectClassName="aspect-[4/3]"
                className="w-full h-full object-cover min-h-[280px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPANDED PREVIEW 02: Interactive Educational Overview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 border-t border-[#DFD8EC] space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <p className="text-sm font-medium text-[#5841A3]">
              {home.expanded.educationEyebrow}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29] [text-wrap:balance]">
              {home.expanded.educationTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('education')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] rounded-lg transition-colors whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer"
          >
            <span>{home.expanded.educationCta}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Question selector tabs */}
          <div className="lg:col-span-5 space-y-2">
            {education.topics.map((topic, index) => {
              const active = index === selectedEduIndex;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedEduIndex(index)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl border transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#5841A3] text-[#FAF8FC] border-[#5841A3]'
                      : 'bg-[#FAF8FC] text-[#231F29] border-[#DFD8EC] hover:bg-[#F2EEF8]'
                  }`}
                >
                  <span
                    className={`font-mono text-xs mr-2 tabular-nums ${
                      active ? 'text-[#E4DDF5]' : 'text-[#615A6D]'
                    }`}
                  >
                    {topic.number}
                  </span>
                  <span className="text-sm font-medium">{topic.question}</span>
                </button>
              );
            })}
          </div>

          {/* Active Educational Summary Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] space-y-5">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#5841A3] tabular-nums">
                {activeEduTopic.number}
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#231F29]">
                {activeEduTopic.question}
              </h3>
              <p className="text-base font-medium text-[#5841A3] leading-relaxed">
                {activeEduTopic.summary}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#433D4D] leading-relaxed">
              {activeEduTopic.paragraphs[0]}
            </p>

            {activeEduTopic.bulletItems && activeEduTopic.bulletItems.length > 0 && (
              <div className="space-y-2">
                {activeEduTopic.bulletHeading && (
                  <p className="text-xs font-semibold text-[#5841A3]">
                    {activeEduTopic.bulletHeading}
                  </p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeEduTopic.bulletItems.slice(0, 6).map((item) => (
                    <div
                      key={item.label}
                      className="p-2.5 rounded-lg bg-[#FAF8FC] border border-[#DFD8EC] text-xs"
                    >
                      <span className="font-semibold text-[#231F29]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeEduTopic.externalLink && (
              <a
                href={activeEduTopic.externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#5841A3] hover:underline underline-offset-4"
              >
                <span>{activeEduTopic.externalLink.label}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            )}

            <div className="p-4 rounded-lg bg-[#FAF8FC] border border-[#DFD8EC] space-y-1">
              <p className="text-xs font-semibold text-[#5841A3]">
                {education.keyTakeawayLabel}
              </p>
              <p className="text-sm text-[#231F29] leading-relaxed">
                {activeEduTopic.keyTakeaway}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#DFD8EC]">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#5A5368]">
                <BookOpen className="w-3.5 h-3.5 text-[#5841A3]" aria-hidden="true" />
                <span>{education.sourcesLabel}</span>
                {activeEduTopic.citationIds.map((citId) => (
                  <button
                    key={citId}
                    type="button"
                    onClick={() => onOpenReference(citId)}
                    className="font-mono tabular-nums px-2 py-0.5 rounded bg-[#FAF8FC] border border-[#D3C9E5] text-[#5841A3] hover:border-[#5841A3] cursor-pointer"
                  >
                    [{citId}]
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onNavigate('education')}
                className="text-xs sm:text-sm font-medium text-[#5841A3] hover:underline underline-offset-4 cursor-pointer"
              >
                {home.expanded.educationCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EXPANDED PREVIEW 03: New Beginnings & Ontario Resources */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 border-t border-[#DFD8EC] space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] overflow-hidden">
          <div className="lg:col-span-5 bg-[#F2EEF8]">
            <ResilientImage
              src="/src/assets/images/scarborough_bluffs_calm_1795746664860.jpg"
              alt={resources.newBeginnings.imageAlt}
              aspectClassName="aspect-[4/3]"
              className="w-full h-full object-cover min-h-[250px]"
            />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 space-y-5">
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-[#5841A3]">
                {home.expanded.resourcesEyebrow}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29]">
                {home.expanded.resourcesTitle}
              </h2>
              <p className="text-sm text-[#433D4D] leading-relaxed">
                {resources.newBeginnings.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {resources.newBeginnings.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-lg bg-[#F2EEF8] border border-[#DFD8EC] space-y-1"
                >
                  <span className="font-mono text-xs font-medium text-[#5841A3] tabular-nums">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-sm font-medium text-[#231F29]">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                onClick={() => onNavigate('resources')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] rounded-lg transition-colors cursor-pointer"
              >
                <span>{home.expanded.resourcesCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigateToContact('newBeginnings')}
                className="text-sm font-medium text-[#5841A3] hover:underline underline-offset-4 cursor-pointer"
              >
                {resources.newBeginnings.contactCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EXPANDED PREVIEW 04 & 05: Community Journal + APA References */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Journal Spotlight */}
          <div className="lg:col-span-7 rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[#5841A3]">
                <MessageSquareHeart className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{home.expanded.journalEyebrow}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29]">
                {home.expanded.journalTitle}
              </h2>

              {featuredStory && (
                <blockquote className="p-5 rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] space-y-2.5">
                  <p className="text-xs text-[#615A6D]">
                    {journal.topics[featuredStory.topic]} · {featuredStory.author} · {featuredStory.date}
                  </p>
                  <p className="font-serif text-lg font-medium text-[#231F29]">
                    “{featuredStory.title}”
                  </p>
                  <p className="text-sm text-[#433D4D] leading-relaxed">
                    {featuredStory.content}
                  </p>
                </blockquote>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('journal')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] rounded-lg transition-colors cursor-pointer"
              >
                <span>{home.expanded.journalReadCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('journal')}
                className="text-sm font-medium text-[#5841A3] hover:underline underline-offset-4 cursor-pointer"
              >
                {home.expanded.journalShareCta}
              </button>
            </div>
          </div>

          {/* APA References Preview */}
          <div className="lg:col-span-5 rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium text-[#5841A3]">
                {home.expanded.referencesEyebrow}
              </p>
              <h2 className="font-serif text-2xl font-medium text-[#231F29]">
                {home.expanded.referencesTitle}
              </h2>

              <div className="divide-y divide-[#DFD8EC] border-t border-[#DFD8EC]">
                {previewRefs.map((ref) => (
                  <div key={ref.id} className="py-3 space-y-1">
                    <p className="text-xs font-medium text-[#5841A3]">
                      [{ref.id}] {ref.publisher} · {ref.year}
                    </p>
                    <p className="text-xs text-[#433D4D] line-clamp-2">
                      {ref.apaCitation}
                    </p>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#5841A3] hover:underline underline-offset-2"
                    >
                      <span>{content.references.openSourceLabel}</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('references')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#5841A3] hover:text-[#463287] underline underline-offset-4 cursor-pointer self-start"
            >
              <span>{home.expanded.referencesCta}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* EXPANDED PREVIEW 06: Support, Donate & Clinical Verification Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-medium text-[#5841A3]">
                <HeartHandshake className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{home.expanded.supportEyebrow}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29]">
                {home.expanded.supportTitle}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('donate')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] rounded-lg transition-colors cursor-pointer"
              >
                <span>{home.expanded.donateCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#231F29] bg-[#FAF8FC] hover:bg-[#E8E1F4] border border-[#D3C9E5] rounded-lg transition-colors cursor-pointer"
              >
                <span>{home.expanded.contactCta}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {donate.impactItems.map((item) => (
              <div
                key={item.amount}
                className="p-4 rounded-lg bg-[#FAF8FC] border border-[#DFD8EC] space-y-1"
              >
                <p className="font-mono text-base font-medium text-[#5841A3] tabular-nums">
                  {item.amount}
                </p>
                <p className="text-xs sm:text-sm text-[#433D4D] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Verification Banner */}
        <div className="rounded-xl bg-[#5841A3] text-[#FAF8FC] p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="flex items-center gap-2 text-[#E4DDF5] text-sm font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{home.verificationBanner.heading}</span>
            </div>
            <p className="text-base text-[#F4F1FA] leading-relaxed">
              {home.verificationBanner.body}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('resources')}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#5841A3] bg-[#FAF8FC] hover:bg-[#F2EEF8] rounded-lg transition-colors whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer"
          >
            <span>{home.verificationBanner.cta}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
};
