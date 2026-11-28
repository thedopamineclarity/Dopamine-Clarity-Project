import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Clock,
  LogIn,
  LogOut,
  Check,
  X,
  Trash2,
  RotateCcw,
} from 'lucide-react';
import { onAuthStateChanged, User } from 'firebase/auth';
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { SiteContent } from '../../data/translations';
import { JournalStory } from '../../types';
import { ResilientImage } from '../ResilientImage';
import { ScrollReveal } from '../ScrollReveal';
import {
  auth,
  db,
  STORY_COLLECTION,
  STORY_CONSTRAINTS,
  OperationType,
  handleFirestoreError,
  isVerifiedCoordinator,
  signInCoordinatorWithGoogle,
  signOutCoordinator,
} from '../../firebase';

interface JournalSectionProps {
  content: SiteContent;
}

type StoryTopic = 'recovery' | 'family' | 'hope' | 'community';

function mapDocToStory(id: string, data: Record<string, unknown>): JournalStory {
  const createdAt = data.createdAt instanceof Timestamp ? data.createdAt.toMillis() : 0;
  const rawTopic = data.topic;
  const topic: StoryTopic =
    rawTopic === 'recovery' || rawTopic === 'family' || rawTopic === 'hope' || rawTopic === 'community'
      ? rawTopic
      : 'hope';
  const rawStatus = data.status;
  const status: JournalStory['status'] =
    rawStatus === 'approved' || rawStatus === 'rejected' ? rawStatus : 'pending';

  return {
    id,
    title: typeof data.title === 'string' ? data.title : '',
    author: typeof data.author === 'string' ? data.author : 'Anonymous',
    isAnonymous: Boolean(data.isAnonymous),
    date: typeof data.date === 'string' ? data.date : '',
    topic,
    content: typeof data.content === 'string' ? data.content : '',
    status,
    consentGiven: Boolean(data.consentGiven),
    createdAtMs: createdAt,
  };
}

export const JournalSection: React.FC<JournalSectionProps> = ({ content }) => {
  const { journal } = content;

  const [filter, setFilter] = useState<'all' | StoryTopic>('all');
  const [approvedDbStories, setApprovedDbStories] = useState<JournalStory[]>([]);
  const [pendingStories, setPendingStories] = useState<JournalStory[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [authBusy, setAuthBusy] = useState(false);
  const [authError, setAuthError] = useState('');
  const [modTab, setModTab] = useState<'pending' | 'approved'>('pending');
  const [busyStoryId, setBusyStoryId] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [topic, setTopic] = useState<StoryTopic>('hope');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [justSubmitted, setJustSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const coordinatorAuthorized = authReady && isVerifiedCoordinator(user);

  // Track Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  // Subscribe to publicly approved stories in Firestore
  useEffect(() => {
    const approvedQuery = query(
      collection(db, STORY_COLLECTION),
      where('status', '==', 'approved')
    );

    const unsubscribe = onSnapshot(
      approvedQuery,
      (snapshot) => {
        const loaded = snapshot.docs
          .map((d) => mapDocToStory(d.id, d.data() as Record<string, unknown>))
          .sort((a, b) => (b.createdAtMs ?? 0) - (a.createdAtMs ?? 0));
        setApprovedDbStories(loaded);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, STORY_COLLECTION);
      }
    );

    return () => unsubscribe();
  }, []);

  // Subscribe to pending submissions ONLY when a verified coordinator is signed in
  useEffect(() => {
    if (!coordinatorAuthorized) {
      setPendingStories([]);
      return;
    }

    const pendingQuery = query(
      collection(db, STORY_COLLECTION),
      where('status', '==', 'pending')
    );

    const unsubscribe = onSnapshot(
      pendingQuery,
      (snapshot) => {
        const loaded = snapshot.docs
          .map((d) => mapDocToStory(d.id, d.data() as Record<string, unknown>))
          .sort((a, b) => (b.createdAtMs ?? 0) - (a.createdAtMs ?? 0));
        setPendingStories(loaded);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, STORY_COLLECTION);
      }
    );

    return () => unsubscribe();
  }, [coordinatorAuthorized]);

  const approvedStories = [...approvedDbStories, ...journal.initialStories];

  const visibleStories =
    filter === 'all'
      ? approvedStories
      : approvedStories.filter((s) => s.topic === filter);

  const handleSubmit = async (e: React.FormEvent) => {
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

    if (
      trimmedTitle.length < STORY_CONSTRAINTS.titleMin ||
      trimmedTitle.length > STORY_CONSTRAINTS.titleMax ||
      trimmedBody.length < STORY_CONSTRAINTS.contentMin ||
      trimmedBody.length > STORY_CONSTRAINTS.contentMax ||
      (!isAnonymous && trimmedName.length > STORY_CONSTRAINTS.authorMax)
    ) {
      setErrorMessage(journal.lengthError);
      return;
    }

    const nowLabel = new Date()
      .toLocaleDateString('en-CA', {
        month: 'long',
        year: 'numeric',
      })
      .slice(0, STORY_CONSTRAINTS.dateMax);

    const storyId = `story_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const storyDocPath = `${STORY_COLLECTION}/${storyId}`;

    setSubmitting(true);
    try {
      await setDoc(doc(db, STORY_COLLECTION, storyId), {
        title: trimmedTitle,
        author: isAnonymous ? 'Anonymous' : trimmedName,
        isAnonymous,
        date: nowLabel,
        topic,
        content: trimmedBody,
        status: 'pending',
        consentGiven: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setName('');
      setIsAnonymous(false);
      setTitle('');
      setBody('');
      setConsentGiven(false);
      setJustSubmitted(true);
    } catch (error) {
      setErrorMessage(journal.submitFailedError);
      handleFirestoreError(error, OperationType.CREATE, storyDocPath);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCoordinatorSignIn = async () => {
    setAuthError('');
    setAuthBusy(true);
    try {
      await signInCoordinatorWithGoogle();
    } catch (error) {
      setAuthError(
        error instanceof Error ? error.message : 'Unable to complete Google sign-in.'
      );
    } finally {
      setAuthBusy(false);
    }
  };

  const handleCoordinatorSignOut = async () => {
    setAuthError('');
    setAuthBusy(true);
    try {
      await signOutCoordinator();
    } finally {
      setAuthBusy(false);
    }
  };

  const handleModerateStatus = async (
    storyId: string,
    nextStatus: 'approved' | 'rejected' | 'pending'
  ) => {
    setBusyStoryId(storyId);
    const storyDocPath = `${STORY_COLLECTION}/${storyId}`;
    try {
      await updateDoc(doc(db, STORY_COLLECTION, storyId), {
        status: nextStatus,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, storyDocPath);
    } finally {
      setBusyStoryId(null);
    }
  };

  const handleDeleteSubmission = async (storyId: string) => {
    setBusyStoryId(storyId);
    const storyDocPath = `${STORY_COLLECTION}/${storyId}`;
    try {
      await deleteDoc(doc(db, STORY_COLLECTION, storyId));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, storyDocPath);
    } finally {
      setBusyStoryId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-14">
      {/* Header Split */}
      <ScrollReveal>
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
      </ScrollReveal>

      {/* Main Content Split: Stories Feed + Submission Form + Coordinator Panel */}
      <ScrollReveal>
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

                  <p className="text-base text-[#3D3746] leading-relaxed whitespace-pre-line">
                    {story.content}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Right: Submit Your Story Form + Coordinator Moderation Queue */}
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
                  maxLength={STORY_CONSTRAINTS.authorMax}
                  value={isAnonymous ? journal.anonymousLabel : name}
                  disabled={isAnonymous || submitting}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={journal.namePlaceholder}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] placeholder:text-[#8E869D] disabled:opacity-60 focus:outline-2 focus:outline-[#5841A3]"
                />
                <label className="flex items-center gap-2.5 pt-1 text-xs sm:text-sm text-[#433D4D] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    disabled={submitting}
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
                  disabled={submitting}
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
                  maxLength={STORY_CONSTRAINTS.titleMax}
                  value={title}
                  disabled={submitting}
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
                  maxLength={STORY_CONSTRAINTS.contentMax}
                  value={body}
                  disabled={submitting}
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
                  disabled={submitting}
                  onChange={(e) => setConsentGiven(e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-[#5841A3] shrink-0"
                />
                <span>{journal.consentText}</span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 px-5 text-sm font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] disabled:opacity-60 rounded-lg transition-colors cursor-pointer"
              >
                {submitting ? journal.submittingButton : journal.submitButton}
              </button>
            </form>

            {/* Coordinator Moderation Panel */}
            <div className="p-6 rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#231F29]">
                    <ShieldCheck className="w-4 h-4 text-[#5841A3] shrink-0" aria-hidden="true" />
                    <h3>{journal.coordinatorHeading}</h3>
                  </div>
                  {!coordinatorAuthorized && (
                    <p className="text-xs text-[#5A5368] leading-relaxed">
                      {journal.coordinatorSubtitle}
                    </p>
                  )}
                </div>
                {user && (
                  <button
                    type="button"
                    disabled={authBusy}
                    onClick={handleCoordinatorSignOut}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#5841A3] border border-[#D3C9E5] hover:border-[#5841A3] rounded-lg transition-colors shrink-0 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{journal.coordinatorSignOutButton}</span>
                  </button>
                )}
              </div>

              {authError && (
                <p
                  role="alert"
                  className="rounded-lg bg-[#FCEEEB] border border-[#B94A38]/40 px-3.5 py-2.5 text-xs text-[#7F291A]"
                >
                  {authError}
                </p>
              )}

              {!user && (
                <button
                  type="button"
                  disabled={authBusy}
                  onClick={handleCoordinatorSignIn}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-medium text-[#5841A3] bg-[#F2EEF8] border border-[#D3C9E5] hover:border-[#5841A3] rounded-lg transition-colors cursor-pointer disabled:opacity-60"
                >
                  <LogIn className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{journal.coordinatorSignInButton}</span>
                </button>
              )}

              {user && !coordinatorAuthorized && (
                <div className="rounded-lg bg-[#F2EEF8] border border-[#DFD8EC] p-3.5 space-y-1.5 text-xs text-[#433D4D]">
                  <p className="font-medium text-[#231F29]">
                    {journal.coordinatorSignedInAs}: {user.email}
                  </p>
                  <p className="leading-relaxed">{journal.coordinatorUnauthorizedNote}</p>
                </div>
              )}

              {coordinatorAuthorized && (
                <div className="space-y-4">
                  <p className="text-xs text-[#5A5368]">
                    {journal.coordinatorSignedInAs}{' '}
                    <span className="font-medium text-[#231F29]">{user?.email}</span>
                  </p>

                  {/* Queue / Published Tabs */}
                  <div className="grid grid-cols-2 gap-1 p-1 rounded-lg bg-[#F2EEF8] border border-[#DFD8EC]">
                    <button
                      type="button"
                      onClick={() => setModTab('pending')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                        modTab === 'pending'
                          ? 'bg-[#FAF8FC] text-[#5841A3] shadow-xs'
                          : 'text-[#5A5368] hover:text-[#231F29]'
                      }`}
                    >
                      {journal.pendingTabLabel} ({pendingStories.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setModTab('approved')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                        modTab === 'approved'
                          ? 'bg-[#FAF8FC] text-[#5841A3] shadow-xs'
                          : 'text-[#5A5368] hover:text-[#231F29]'
                      }`}
                    >
                      {journal.approvedTabLabel} ({approvedDbStories.length})
                    </button>
                  </div>

                  {modTab === 'pending' && (
                    <div className="space-y-3">
                      {pendingStories.length === 0 ? (
                        <p className="text-xs text-[#5A5368] py-2">
                          {journal.pendingEmptyText}
                        </p>
                      ) : (
                        pendingStories.map((pending) => {
                          const isBusy = busyStoryId === pending.id;
                          return (
                            <div
                              key={pending.id}
                              className="p-4 rounded-lg bg-[#F2EEF8] border border-[#DFD8EC] space-y-2.5"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#6B4E9B]">
                                <span className="inline-flex items-center gap-1.5 font-medium">
                                  <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                                  <span>{journal.pendingBadgeText}</span>
                                </span>
                                <span className="text-[#5A5368]">
                                  {journal.topics[pending.topic]} ·{' '}
                                  {pending.isAnonymous
                                    ? journal.anonymousLabel
                                    : pending.author}
                                </span>
                              </div>

                              <p className="font-serif text-base font-medium text-[#231F29]">
                                {pending.title}
                              </p>

                              <p className="text-xs text-[#3D3746] leading-relaxed whitespace-pre-line">
                                {pending.content}
                              </p>

                              <div className="flex flex-wrap items-center gap-2 pt-1">
                                <button
                                  type="button"
                                  disabled={isBusy}
                                  onClick={() => handleModerateStatus(pending.id, 'approved')}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] rounded-md transition-colors disabled:opacity-50 cursor-pointer"
                                >
                                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                                  <span>{journal.approveButton}</span>
                                </button>
                                <button
                                  type="button"
                                  disabled={isBusy}
                                  onClick={() => handleModerateStatus(pending.id, 'rejected')}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#433D4D] bg-[#FAF8FC] border border-[#D3C9E5] hover:border-[#5841A3] rounded-md transition-colors disabled:opacity-50 cursor-pointer"
                                >
                                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                                  <span>{journal.declineButton}</span>
                                </button>
                                <button
                                  type="button"
                                  disabled={isBusy}
                                  onClick={() => handleDeleteSubmission(pending.id)}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#7F291A] hover:bg-[#FCEEEB] rounded-md transition-colors disabled:opacity-50 cursor-pointer ml-auto"
                                  title={journal.deleteButton}
                                >
                                  <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                                  <span>{journal.deleteButton}</span>
                                </button>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  )}

                  {modTab === 'approved' && (
                    <div className="space-y-3">
                      {approvedDbStories.map((published) => {
                        const isBusy = busyStoryId === published.id;
                        return (
                          <div
                            key={published.id}
                            className="p-4 rounded-lg bg-[#F2EEF8] border border-[#DFD8EC] space-y-2"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#5A5368]">
                              <span>
                                {journal.topics[published.topic]} ·{' '}
                                {published.isAnonymous
                                  ? journal.anonymousLabel
                                  : published.author}
                              </span>
                              <span>{published.date}</span>
                            </div>
                            <p className="font-serif text-base font-medium text-[#231F29]">
                              {published.title}
                            </p>
                            <div className="flex flex-wrap items-center gap-2 pt-1">
                              <button
                                type="button"
                                disabled={isBusy}
                                onClick={() => handleModerateStatus(published.id, 'pending')}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#433D4D] bg-[#FAF8FC] border border-[#D3C9E5] hover:border-[#5841A3] rounded-md transition-colors disabled:opacity-50 cursor-pointer"
                              >
                                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                                <span>{journal.unpublishButton}</span>
                              </button>
                              <button
                                type="button"
                                disabled={isBusy}
                                onClick={() => handleDeleteSubmission(published.id)}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#7F291A] hover:bg-[#FCEEEB] rounded-md transition-colors disabled:opacity-50 cursor-pointer ml-auto"
                              >
                                <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                                <span>{journal.deleteButton}</span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </aside>
        </div>
      </ScrollReveal>
    </div>
  );
};
