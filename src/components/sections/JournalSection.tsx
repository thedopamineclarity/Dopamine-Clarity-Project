import React, { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle2, Clock } from 'lucide-react';
import { SiteContent } from '../../data/translations';
import { JournalStory } from '../../types';
import { ResilientImage } from '../ResilientImage';

interface JournalSectionProps {
  content: SiteContent;
}

type StoryTopic = 'recovery' | 'family' | 'hope' | 'community';
const STORAGE_KEY = 'dopamine_clarity_pending_stories_v1';

export const JournalSection: React.FC<JournalSectionProps> = ({ content }) => {
  const { journal } = content;

  const [filter, setFilter] = useState<'all' | StoryTopic>('all');
  const [userStories, setUserStories] = useState<JournalStory[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as JournalStory[]) : [];
    } catch {
      return [];
    }
  });

  // Form state
  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [topic, setTopic] = useState<StoryTopic>('hope');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [justSubmitted, setJustSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userStories));
    } catch {
      // Ignore storage quota issues
    }
  }, [userStories]);

  const approvedStories = [
    ...userStories.filter((s) => s.status === 'approved'),
    ...journal.initialStories,
  ];
  const pendingStories = userStories.filter((s) => s.status === 'pending');

  const visibleStories =
    filter === 'all'
      ? approvedStories
      : approvedStories.filter((s) => s.topic === filter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setJustSubmitted(false);

    const trimmedTitle = title.trim();
    const trimmedBody = body.trim();
    const trimmedName = name.trim();

    if (!trimmedTitle || !trimmedBody || (!isAnonymous && !trimmedName) || !consentGiven) {
      setErrorMessage(journal.validationError);
      return;
    }

    const nowLabel = new Date().toLocaleDateString('en-CA', {
      month: 'long',
      year: 'numeric',
    });

    const newStory: JournalStory = {
      id: `submission-${Date.now()}`,
      title: trimmedTitle,
      author: isAnonymous ? journal.anonymousLabel : trimmedName,
      isAnonymous,
      date: nowLabel,
      topic,
      content: trimmedBody,
      status: 'pending',
      consentGiven: true,
    };

    setUserStories((prev) => [newStory, ...prev]);
    setName('');
    setIsAnonymous(false);
    setTitle('');
    setBody('');
    setConsentGiven(false);
    setJustSubmitted(true);
  };

  const handleApproveSubmission = (id: string) => {
    setUserStories((prev) =>
      prev.map((story) =>
        story.id === id ? { ...story, status: 'approved' } : story
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-14">
      {/* Header Split */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
          <p className="text-sm font-medium text-[#5841A3]">{journal.eyebrow}</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#231F29] leading-tight [text-wrap:balance]">
            {journal.title}
          </h1>
          <p className="text-base sm:text-lg text-[#433D4D] leading-relaxed max-w-xl">
            {journal.intro}
          </p>

          {/* Review & Consent Policy Notice */}
          <div className="mt-2 rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] p-5 space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#5841A3]">
              <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{journal.moderationBannerTitle}</span>
            </div>
            <p className="text-sm text-[#433D4D] leading-relaxed">
              {journal.moderationBannerBody}
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="h-full overflow-hidden rounded-xl border border-[#DFD8EC] bg-[#F2EEF8]">
            <ResilientImage
              src={`${import.meta.env.BASE_URL}src/assets/images/journal_reflection_notebook_1795746665578.jpg`}
              alt={journal.imageAlt}
              aspectClassName="aspect-[4/3]"
              className="w-full h-full object-cover min-h-[240px]"
            />
          </div>
        </div>
      </header>

      {/* Main Content Split: Stories Feed + Submission Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 border-t border-[#DFD8EC]">
        {/* Left: Approved Real Stories */}
        <div className="lg:col-span-7 space-y-6">
          <div
            role="group"
            aria-label="Filter journal stories"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#F2EEF8] border border-[#DFD8EC] rounded-lg w-fit"
          >
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#FAF8FC] text-[#5841A3] shadow-xs'
                  : 'text-[#5A5368] hover:text-[#231F29]'
              }`}
            >
              {journal.filterAll}
            </button>
            {(['recovery', 'family', 'hope', 'community'] as StoryTopic[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === t
                    ? 'bg-[#FAF8FC] text-[#5841A3] shadow-xs'
                    : 'text-[#5A5368] hover:text-[#231F29]'
                }`}
              >
                {journal.topics[t]}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {visibleStories.map((story) => (
              <article
                key={story.id}
                className="p-6 sm:p-7 rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] space-y-4"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#615A6D]">
                  <span>{journal.topics[story.topic]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{story.isAnonymous ? journal.anonymousLabel : story.author}</span>
                  <span aria-hidden="true">·</span>
                  <span>{story.date}</span>
                </div>

                <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#231F29]">
                  {story.title}
                </h2>

                <p className="text-base text-[#3D3746] leading-relaxed">
                  {story.content}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Right: Submit Your Story Form + Pending Review Queue */}
        <aside className="lg:col-span-5 space-y-6">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] space-y-5"
          >
            <div className="space-y-1.5">
              <h2 className="font-serif text-2xl font-medium text-[#231F29]">
                {journal.formHeading}
              </h2>
              <p className="text-sm text-[#5A5368]">{journal.formSubheading}</p>
            </div>

            {justSubmitted && (
              <div className="rounded-lg bg-[#EFEBF8] border border-[#5841A3]/30 p-4 space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#5841A3]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{journal.submittedSuccessTitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#231F29] leading-relaxed">
                  {journal.submittedSuccessBody}
                </p>
              </div>
            )}

            {errorMessage && (
              <p
                role="alert"
                className="rounded-lg bg-[#FCEEEB] border border-[#B94A38]/40 px-4 py-3 text-xs sm:text-sm text-[#7F291A]"
              >
                {errorMessage}
              </p>
            )}

            <div className="space-y-2">
              <label
                htmlFor="story-author"
                className="block text-sm font-medium text-[#231F29]"
              >
                {journal.nameLabel}
              </label>
              <input
                id="story-author"
                type="text"
                value={isAnonymous ? journal.anonymousLabel : name}
                disabled={isAnonymous}
                onChange={(e) => setName(e.target.value)}
                placeholder={journal.namePlaceholder}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] placeholder:text-[#8E869D] disabled:opacity-60 focus:outline-2 focus:outline-[#5841A3]"
              />
              <label className="flex items-center gap-2.5 pt-1 text-xs sm:text-sm text-[#433D4D] cursor-pointer">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="w-4 h-4 accent-[#5841A3] rounded"
                />
                <span>{journal.anonymousToggleLabel}</span>
              </label>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="story-topic"
                className="block text-sm font-medium text-[#231F29]"
              >
                {journal.topicSelectLabel}
              </label>
              <select
                id="story-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value as StoryTopic)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
              >
                {(['hope', 'recovery', 'family', 'community'] as StoryTopic[]).map((t) => (
                  <option key={t} value={t}>
                    {journal.topics[t]}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="story-title"
                className="block text-sm font-medium text-[#231F29]"
              >
                {journal.storyTitleLabel}
              </label>
              <input
                id="story-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={journal.storyTitlePlaceholder}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] placeholder:text-[#8E869D] focus:outline-2 focus:outline-[#5841A3]"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="story-body"
                className="block text-sm font-medium text-[#231F29]"
              >
                {journal.storyBodyLabel}
              </label>
              <textarea
                id="story-body"
                rows={5}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder={journal.storyBodyPlaceholder}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] placeholder:text-[#8E869D] leading-relaxed focus:outline-2 focus:outline-[#5841A3]"
              />
            </div>

            {/* Required Consent Checkbox */}
            <label className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-xs text-[#3D3746] leading-relaxed cursor-pointer">
              <input
                type="checkbox"
                checked={consentGiven}
                onChange={(e) => setConsentGiven(e.target.checked)}
                className="w-4 h-4 mt-0.5 accent-[#5841A3] shrink-0"
              />
              <span>{journal.consentText}</span>
            </label>

            <button
              type="submit"
              className="w-full py-3 px-5 text-sm font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] rounded-lg transition-colors cursor-pointer"
            >
              {journal.submitButton}
            </button>
          </form>

          {/* Pending Review Queue */}
          {pendingStories.length > 0 && (
            <div className="p-5 rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] space-y-4">
              <h3 className="font-serif text-lg font-medium text-[#231F29]">
                {journal.pendingQueueHeading}
              </h3>
              <div className="space-y-3">
                {pendingStories.map((pending) => (
                  <div
                    key={pending.id}
                    className="p-4 rounded-lg bg-[#F2EEF8] border border-[#DFD8EC] space-y-2"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-medium text-[#6B4E9B]">
                      <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{journal.pendingBadgeText}</span>
                    </div>
                    <p className="font-serif text-base font-medium text-[#231F29]">
                      {pending.title}
                    </p>
                    <p className="text-xs text-[#5A5368] line-clamp-3">
                      {pending.content}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleApproveSubmission(pending.id)}
                      className="text-xs font-medium text-[#5841A3] hover:underline underline-offset-4 cursor-pointer"
                    >
                      {journal.approveDemoButton}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};
