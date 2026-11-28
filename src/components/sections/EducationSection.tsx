import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Circle,
  ExternalLink,
  HelpCircle,
  PlayCircle,
  RotateCcw,
} from 'lucide-react';
import { SiteContent } from '../../data/translations';
import { SectionId } from '../../types';
import { ResilientImage } from '../ResilientImage';
import { ScrollReveal } from '../ScrollReveal';

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
  const [viewMode, setViewMode] = useState<'all' | 'focus'>('all');
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [revealedFacts, setRevealedFacts] = useState<Record<number, boolean>>({});

  const activeIndex = Math.max(
    0,
    education.topics.findIndex((t) => t.id === activeTopicId)
  );
  const progressPct =
    education.topics.length > 0
      ? Math.round((completedIds.length / education.topics.length) * 100)
      : 0;

  const toggleCompleted = (id: string) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectTopic = (id: string) => {
    setActiveTopicId(id);
    if (viewMode === 'all') {
      const el = document.getElementById(`edu-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const goToTopicByIndex = (nextIndex: number) => {
    const target = education.topics[nextIndex];
    if (!target) return;
    setActiveTopicId(target.id);
    if (viewMode === 'all') {
      const el = document.getElementById(`edu-${target.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const toggleMythFact = (idx: number) => {
    setRevealedFacts((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const visibleTopics =
    viewMode === 'focus'
      ? education.topics.filter((t) => t.id === activeTopicId)
      : education.topics;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-14">
      {/* Split Editorial Header with Warm Study Image */}
      <ScrollReveal>
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <p className="text-sm font-medium text-[#5841A3]">{education.eyebrow}</p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#231F29] leading-tight [text-wrap:balance]">
              {education.title}
            </h1>
            <p className="text-base sm:text-lg text-[#433D4D] leading-relaxed max-w-prose">
              {education.intro}
            </p>

            <div className="pt-2 border-t border-[#DFD8EC] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#5A5368]">
              <span className="inline-flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#5841A3] shrink-0" aria-hidden="true" />
                <span>{education.plainLanguageNote}</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="overflow-hidden rounded-xl border border-[#DFD8EC] bg-[#F2EEF8] flex-1">
              <ResilientImage
                src={`${import.meta.env.BASE_URL}src/assets/images/education_clarity_study_1795827838614.jpg`}
                alt={education.headerImageAlt}
                aspectClassName="aspect-[4/3]"
                className="w-full h-full object-cover min-h-[250px]"
              />
            </div>
          </div>
        </header>
      </ScrollReveal>

      {/* Did You Know? Addiction Statistics */}
      <ScrollReveal>
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
              className="rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] p-5 space-y-2.5 flex flex-col justify-between"
            >
              <p className="font-mono text-3xl sm:text-4xl font-semibold text-[#5841A3] tabular-nums pb-2 border-b border-[#DFD8EC]">
                {stat.figure}
              </p>
              <p className="text-sm text-[#3D3746] leading-relaxed">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
        </section>
      </ScrollReveal>

      {/* Interactive 2-Column Learning Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 border-t border-[#DFD8EC]">
        {/* Sticky Chapter Navigator & Reading Progress */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-5">
            {/* Progress & View Mode Card */}
            <div className="rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] p-5 space-y-4">
              <div className="flex items-center justify-between text-xs font-medium text-[#433D4D]">
                <span>{education.progressLabel}</span>
                <span className="font-mono text-[#5841A3] tabular-nums">
                  {completedIds.length} / {education.topics.length}
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#DFD8EC] overflow-hidden">
                <div
                  className="h-full bg-[#5841A3] transition-all duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              {/* Segmented Learning Mode Control */}
              <div
                role="group"
                aria-label={education.progressLabel}
                className="grid grid-cols-2 gap-1 p-1 rounded-lg bg-[#FAF8FC] border border-[#DFD8EC]"
              >
                <button
                  type="button"
                  onClick={() => setViewMode('all')}
                  className={`px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap truncate cursor-pointer ${
                    viewMode === 'all'
                      ? 'bg-[#5841A3] text-[#FAF8FC]'
                      : 'text-[#5A5368] hover:text-[#231F29]'
                  }`}
                >
                  {education.viewAllModeLabel}
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('focus')}
                  className={`px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap truncate cursor-pointer ${
                    viewMode === 'focus'
                      ? 'bg-[#5841A3] text-[#FAF8FC]'
                      : 'text-[#5A5368] hover:text-[#231F29]'
                  }`}
                >
                  {education.focusModeLabel}
                </button>
              </div>
            </div>

            {/* Chapter List */}
            <nav aria-label={education.eyebrow} className="space-y-1.5">
              {education.topics.map((topic) => {
                const isSelected = activeTopicId === topic.id;
                const isDone = completedIds.includes(topic.id);
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => selectTopic(topic.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-colors duration-150 flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-[#F2EEF8] border-[#5841A3]/45 text-[#5841A3] font-medium'
                        : 'bg-[#FAF8FC] border-transparent text-[#5A5368] hover:bg-[#F2EEF8]/60 hover:text-[#231F29]'
                    }`}
                  >
                    <span className="mt-0.5 shrink-0">
                      {isDone ? (
                        <CheckCircle2
                          className="w-4 h-4 text-[#5841A3]"
                          aria-hidden="true"
                        />
                      ) : (
                        <span className="font-mono text-xs text-[#615A6D] tabular-nums">
                          {topic.number}
                        </span>
                      )}
                    </span>
                    <span className="text-sm leading-snug">{topic.question}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Educational Reading Column */}
        <div className="lg:col-span-8 space-y-10">
          {visibleTopics.map((topic) => {
            const topicIndex = education.topics.findIndex((t) => t.id === topic.id);
            const isDone = completedIds.includes(topic.id);
            const hasPrev = topicIndex > 0;
            const hasNext = topicIndex < education.topics.length - 1;

            return (
              <ScrollReveal key={topic.id}>
                <article
                  id={`edu-${topic.id}`}
                  onMouseEnter={() => setActiveTopicId(topic.id)}
                  className="scroll-mt-24 rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] p-6 sm:p-8 space-y-6"
                >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-4 border-b border-[#DFD8EC]">
                  <div className="space-y-1.5">
                    <span className="font-mono text-xs text-[#5841A3] tabular-nums">
                      {topic.number}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29] [text-wrap:balance]">
                      {topic.question}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleCompleted(topic.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border text-xs font-medium transition-colors whitespace-nowrap shrink-0 self-start cursor-pointer ${
                      isDone
                        ? 'bg-[#5841A3] border-[#5841A3] text-[#FAF8FC]'
                        : 'bg-[#F2EEF8] border-[#D3C9E5] text-[#5841A3] hover:border-[#5841A3]'
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    ) : (
                      <Circle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    )}
                    <span>{isDone ? education.markedReadLabel : education.markReadLabel}</span>
                  </button>
                </div>

                <div className="space-y-4 max-w-prose text-base text-[#3D3746] leading-relaxed">
                  {topic.paragraphs.map((p, index) => (
                    <p key={index}>{p}</p>
                  ))}
                </div>

                {/* Optional Structured Short-Term / Long-Term Detail Cards */}
                {topic.detailGroups && topic.detailGroups.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    {topic.detailGroups.map((group) => (
                      <div
                        key={group.heading}
                        className="rounded-xl border border-[#DFD8EC] bg-[#F2EEF8]/55 p-5 space-y-3"
                      >
                        <h3 className="font-serif text-lg font-medium text-[#231F29]">
                          {group.heading}
                        </h3>
                        {group.intro && (
                          <p className="text-sm text-[#433D4D] leading-relaxed">
                            {group.intro}
                          </p>
                        )}
                        <ul className="space-y-2 text-sm text-[#3D3746] leading-relaxed list-disc pl-5 marker:text-[#5841A3]">
                          {group.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional Structured Therapy / Treatment List */}
                {topic.bulletItems && topic.bulletItems.length > 0 && (
                  <div className="space-y-3 pt-1">
                    {topic.bulletHeading && (
                      <h3 className="font-serif text-lg font-medium text-[#231F29]">
                        {topic.bulletHeading}
                      </h3>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {topic.bulletItems.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-lg border border-[#DFD8EC] bg-[#F2EEF8]/45 p-4 space-y-1"
                        >
                          <p className="text-sm font-semibold text-[#5841A3]">{item.label}</p>
                          <p className="text-sm text-[#3D3746] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optional Direct Treatment Directory Link */}
                {topic.externalLink && (
                  <div className="max-w-prose rounded-xl bg-[#F2EEF8]/60 border border-[#D3C9E5] p-5 space-y-2">
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

                {/* Summary Box */}
                <div className="rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] p-5 space-y-1.5 max-w-prose">
                  <p className="text-xs font-semibold text-[#5841A3]">
                    {education.keyTakeawayLabel}
                  </p>
                  <p className="text-sm text-[#231F29] leading-relaxed">
                    {topic.keyTakeaway}
                  </p>
                </div>

                {/* Citations & Step Navigation Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#DFD8EC]">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#5A5368]">
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

                  {viewMode === 'focus' && (
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        disabled={!hasPrev}
                        onClick={() => goToTopicByIndex(topicIndex - 1)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D3C9E5] text-xs font-medium text-[#433D4D] hover:bg-[#F2EEF8] disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{education.prevTopicLabel}</span>
                      </button>
                      <button
                        type="button"
                        disabled={!hasNext}
                        onClick={() => goToTopicByIndex(topicIndex + 1)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#5841A3] text-xs font-medium text-[#FAF8FC] hover:bg-[#463287] disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>{education.nextTopicLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Common Misunderstandings */}
      <ScrollReveal>
        <section className="pt-8 border-t border-[#DFD8EC] space-y-6">
        <div className="space-y-1.5 max-w-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#231F29] [text-wrap:balance]">
            {education.mythFactHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#433D4D] leading-relaxed">
            {education.mythFactIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {education.mythFacts.map((item, idx) => {
            const isRevealed = Boolean(revealedFacts[idx]);
            return (
              <div
                key={idx}
                className={`rounded-xl border p-6 flex flex-col justify-between gap-5 transition-colors ${
                  isRevealed
                    ? 'bg-[#F2EEF8] border-[#5841A3]/45'
                    : 'bg-[#FAF8FC] border-[#DFD8EC]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold text-[#5841A3]">
                    <span className="inline-flex items-center gap-1.5">
                      {isRevealed ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                      ) : (
                        <HelpCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      )}
                      <span>{isRevealed ? education.factLabel : education.mythLabel}</span>
                    </span>

                    {isRevealed && (
                      <button
                        type="button"
                        onClick={() => onOpenReference(item.citationId)}
                        className="font-mono text-xs tabular-nums px-2 py-0.5 rounded bg-[#FAF8FC] border border-[#D3C9E5] text-[#5841A3] hover:border-[#5841A3] cursor-pointer"
                        title={education.viewReferenceLabel}
                      >
                        [{item.citationId}]
                      </button>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-[#231F29] leading-relaxed font-medium">
                    {isRevealed ? item.fact : item.myth}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => toggleMythFact(idx)}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isRevealed
                      ? 'bg-[#FAF8FC] border border-[#D3C9E5] text-[#5841A3] hover:border-[#5841A3]'
                      : 'bg-[#5841A3] text-[#FAF8FC] hover:bg-[#463287]'
                  }`}
                >
                  {isRevealed ? (
                    <>
                      <RotateCcw className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{education.hideFactLabel}</span>
                    </>
                  ) : (
                    <>
                      <span>{education.revealFactLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
        </section>
      </ScrollReveal>

      {/* Educational Reference Videos */}
      <ScrollReveal>
        <section className="pt-8 border-t border-[#DFD8EC] space-y-5">
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
      </ScrollReveal>

      {/* Gentle Next Step Callout */}
      <ScrollReveal>
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
      </ScrollReveal>
    </div>
  );
};
