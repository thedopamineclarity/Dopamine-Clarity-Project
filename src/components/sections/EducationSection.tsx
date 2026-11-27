import React, { useState } from 'react';
import { ArrowRight, BookOpen, ExternalLink, PlayCircle } from 'lucide-react';
import { SiteContent } from '../../data/translations';
import { SectionId } from '../../types';

interface EducationSectionProps {
  content: SiteContent;
  onOpenReference: (refId: number) => void;
  onNavigate: (section: SectionId) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  content,
  onOpenReference,
  onNavigate,
}) => {
  const { education } = content;
  const [activeTopicId, setActiveTopicId] = useState<string>(education.topics[0]?.id ?? '');

  const jumpToTopic = (id: string) => {
    setActiveTopicId(id);
    const el = document.getElementById(`edu-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      {/* Intro */}
      <header className="max-w-3xl space-y-4">
        <p className="text-sm font-medium text-[#5841A3]">{education.eyebrow}</p>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#231F29] leading-tight [text-wrap:balance]">
          {education.title}
        </h1>
        <p className="text-base sm:text-lg text-[#433D4D] leading-relaxed">
          {education.intro}
        </p>
        <p className="text-xs text-[#615A6D] flex items-center gap-2 pt-1">
          <BookOpen className="w-4 h-4 text-[#5841A3] shrink-0" aria-hidden="true" />
          <span>{education.plainLanguageNote}</span>
        </p>
      </header>

      {/* Canada & Ontario Addiction Statistics */}
      <section className="rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="space-y-1.5 max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29] [text-wrap:balance]">
              {education.statsHeading}
            </h2>
            <p className="text-sm sm:text-base text-[#433D4D] leading-relaxed">
              {education.statsIntro}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={education.statsSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#5841A3] hover:text-[#463287] underline underline-offset-4"
            >
              <span>{education.statsSourceLabel}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => onOpenReference(15)}
              className="font-mono text-xs tabular-nums px-2 py-1 rounded bg-[#FAF8FC] border border-[#D3C9E5] text-[#5841A3] hover:border-[#5841A3] transition-colors cursor-pointer"
              title={education.viewReferenceLabel}
            >
              [15]
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {education.statsItems.map((stat) => (
            <div
              key={stat.figure}
              className="rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] p-5 space-y-2"
            >
              <p className="font-mono text-2xl sm:text-3xl font-medium text-[#5841A3] tabular-nums">
                {stat.figure}
              </p>
              <p className="text-sm text-[#3D3746] leading-relaxed">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Reference Videos */}
      <section className="space-y-5">
        <div className="space-y-1.5 max-w-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29] [text-wrap:balance]">
            {education.videosHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#433D4D] leading-relaxed">
            {education.videosIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {education.videos.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] hover:border-[#5841A3]/50 hover:bg-[#F2EEF8]/70 p-5 flex items-start gap-4 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F2EEF8] border border-[#DFD8EC] flex items-center justify-center shrink-0 text-[#5841A3] group-hover:bg-[#5841A3] group-hover:text-[#FAF8FC] transition-colors">
                <PlayCircle className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-1.5 min-w-0 flex-1">
                <h3 className="font-serif text-lg font-medium text-[#231F29]">
                  {video.label}
                </h3>
                <p className="text-sm text-[#433D4D] leading-relaxed">
                  {video.description}
                </p>
                <span className="inline-flex items-center gap-1.5 pt-1 text-xs sm:text-sm font-medium text-[#5841A3] group-hover:underline underline-offset-4">
                  <span>{education.videosWatchLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Editorial 2-column reading layout: Index rail + Reading column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-6 border-t border-[#DFD8EC]">
        {/* Chapter Navigation Rail */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-2">
            {education.topics.map((topic) => {
              const isSelected = activeTopicId === topic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => jumpToTopic(topic.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#F2EEF8] border-[#5841A3]/40 text-[#5841A3] font-medium'
                      : 'bg-transparent border-transparent text-[#5A5368] hover:bg-[#F2EEF8]/60 hover:text-[#231F29]'
                  }`}
                >
                  <span className="font-mono text-xs text-[#615A6D] mr-2 tabular-nums">
                    {topic.number}
                  </span>
                  <span className="text-sm leading-snug">{topic.question}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Educational Reading Column */}
        <div className="lg:col-span-8 space-y-12">
          {education.topics.map((topic) => (
            <article
              key={topic.id}
              id={`edu-${topic.id}`}
              className="scroll-mt-24 pb-10 border-b border-[#DFD8EC] last:border-b-0 space-y-5"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#615A6D] tabular-nums">
                  {topic.number}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29] [text-wrap:balance]">
                  {topic.question}
                </h2>
              </div>

              <div className="space-y-4 max-w-prose text-base text-[#3D3746] leading-relaxed">
                {topic.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              {/* Optional Structured Therapy / Treatment List */}
              {topic.bulletItems && topic.bulletItems.length > 0 && (
                <div className="max-w-prose space-y-3 pt-1">
                  {topic.bulletHeading && (
                    <h3 className="font-serif text-lg font-medium text-[#231F29]">
                      {topic.bulletHeading}
                    </h3>
                  )}
                  <ul className="divide-y divide-[#DFD8EC] rounded-xl border border-[#DFD8EC] bg-[#FAF8FC]">
                    {topic.bulletItems.map((item) => (
                      <li key={item.label} className="px-5 py-3.5 text-sm leading-relaxed">
                        <span className="font-semibold text-[#5841A3]">{item.label}: </span>
                        <span className="text-[#3D3746]">{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Optional Direct Treatment Directory Link */}
              {topic.externalLink && (
                <div className="max-w-prose rounded-xl bg-[#FAF8FC] border border-[#D3C9E5] p-5 space-y-2">
                  <p className="text-sm text-[#433D4D] leading-relaxed">
                    {topic.externalLink.introText}
                  </p>
                  <a
                    href={topic.externalLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5841A3] hover:text-[#463287] underline underline-offset-4"
                  >
                    <span>{topic.externalLink.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              )}

              {/* Gentle Summary Box */}
              <div className="rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] p-5 space-y-1.5 max-w-prose">
                <p className="text-xs font-semibold text-[#5841A3]">
                  {education.keyTakeawayLabel}
                </p>
                <p className="text-sm text-[#231F29] leading-relaxed">
                  {topic.keyTakeaway}
                </p>
              </div>

              {/* APA Citations Row */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#5A5368]">
                <span>{education.sourcesLabel}</span>
                {topic.citationIds.map((citId) => (
                  <button
                    key={citId}
                    type="button"
                    onClick={() => onOpenReference(citId)}
                    className="font-mono tabular-nums px-2 py-1 rounded bg-[#F2EEF8] border border-[#D3C9E5] text-[#5841A3] hover:border-[#5841A3] transition-colors cursor-pointer"
                    title={education.viewReferenceLabel}
                  >
                    [{citId}]
                  </button>
                ))}
              </div>
            </article>
          ))}

          {/* Gentle Next Step Callout */}
          <div className="rounded-xl bg-[#5841A3] text-[#FAF8FC] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="space-y-1.5 max-w-lg">
              <h3 className="font-serif text-xl font-medium">
                {education.nextStepHeading}
              </h3>
              <p className="text-sm text-[#E9E4F6] leading-relaxed">
                {education.nextStepBody}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('resources')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#5841A3] bg-[#FAF8FC] hover:bg-[#F2EEF8] rounded-lg transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
            >
              <span>{education.nextStepCta}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
