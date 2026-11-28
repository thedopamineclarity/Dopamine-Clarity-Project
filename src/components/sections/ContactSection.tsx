import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ExternalLink, Copy, Check } from 'lucide-react';
import { SiteContent } from '../../data/translations';
import { ScrollReveal } from '../ScrollReveal';

interface ContactSectionProps {
  content: SiteContent;
  defaultRecipient: 'project' | 'newBeginnings';
}

interface DraftEmail {
  to: string;
  subject: string;
  body: string;
  mailtoUrl: string;
  gmailUrl: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  content,
  defaultRecipient,
}) => {
  const { contact } = content;

  const [recipient, setRecipient] = useState<'project' | 'newBeginnings'>(
    defaultRecipient
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastDraft, setLastDraft] = useState<DraftEmail | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setRecipient(defaultRecipient);
  }, [defaultRecipient]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!trimmedName || !emailValid || !trimmedMessage) {
      setError(contact.errorRequired);
      return;
    }

    const targetEmail =
      recipient === 'newBeginnings'
        ? 'info@newbeginningsrecovery.ca'
        : 'thedopamineclarityproject@gmail.com';
    const recipientLabel =
      recipient === 'newBeginnings'
        ? 'New Beginnings Recovery Home (Scarborough)'
        : 'The Dopamine Clarity Project';

    const subject =
      recipient === 'newBeginnings'
        ? `Scarborough Treatment Inquiry from ${trimmedName}`
        : `Website Inquiry from ${trimmedName} — The Dopamine Clarity Project`;

    const bodyLines = [
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      `Phone: ${trimmedPhone || 'Not provided'}`,
      `Recipient: ${recipientLabel}`,
      '',
      'Message:',
      trimmedMessage,
    ];

    const bodyText = bodyLines.join('\n');
    const mailtoBodyText = bodyLines.join('\r\n');

    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(mailtoBodyText)}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      targetEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

    setLastDraft({
      to: targetEmail,
      subject,
      body: bodyText,
      mailtoUrl,
      gmailUrl,
    });
    setCopied(false);
    setSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

    window.location.href = mailtoUrl;
  };

  const handleCopyDraft = async () => {
    if (!lastDraft) return;
    const formatted = `${contact.draftToLabel}: ${lastDraft.to}\n${contact.draftSubjectLabel}: ${lastDraft.subject}\n\n${lastDraft.body}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      <ScrollReveal>
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-medium text-[#5841A3]">{contact.eyebrow}</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#231F29] leading-tight [text-wrap:balance]">
            {contact.title}
          </h1>
          <p className="text-base sm:text-lg text-[#433D4D] leading-relaxed">
            {contact.intro}
          </p>
        </header>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 border-t border-[#DFD8EC]">
        {/* Left: Direct Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* New Beginnings Scarborough Card */}
          <div className="p-6 sm:p-7 rounded-xl bg-[#F2EEF8] border border-[#D3C9E5] space-y-4">
            <h2 className="font-serif text-xl font-medium text-[#231F29]">
              {contact.scarboroughCardTitle}
            </h2>
            <p className="text-sm text-[#433D4D] leading-relaxed">
              {contact.scarboroughCardBody}
            </p>
            <div className="space-y-2.5 pt-2 border-t border-[#DFD8EC] text-sm text-[#231F29]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#5841A3] shrink-0" aria-hidden="true" />
                <a
                  href="tel:16474826308"
                  className="font-mono tabular-nums hover:text-[#5841A3] underline underline-offset-4"
                >
                  1-647-482-6308
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#5841A3] shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@newbeginningsrecovery.ca"
                  className="hover:text-[#5841A3] underline underline-offset-4 break-all"
                >
                  info@newbeginningsrecovery.ca
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#5841A3] shrink-0 mt-0.5" aria-hidden="true" />
                <span>69 Gradwell Drive, Scarborough, ON M1M 2N1</span>
              </div>
            </div>
          </div>

          {/* The Dopamine Clarity Project Card */}
          <div className="p-6 sm:p-7 rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] space-y-4">
            <h2 className="font-serif text-xl font-medium text-[#231F29]">
              {contact.projectCardTitle}
            </h2>
            <p className="text-sm text-[#433D4D] leading-relaxed">
              {contact.projectCardBody}
            </p>
            <div className="pt-2 border-t border-[#E6DFF3] text-sm text-[#231F29]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#5841A3] shrink-0" aria-hidden="true" />
                <a
                  href="mailto:thedopamineclarityproject@gmail.com"
                  className="hover:text-[#5841A3] underline underline-offset-4 break-all"
                >
                  thedopamineclarityproject@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] space-y-5"
        >
          <h2 className="font-serif text-2xl font-medium text-[#231F29]">
            {contact.formTitle}
          </h2>

          {submitted && lastDraft && (
            <div className="rounded-lg bg-[#EFEBF8] border border-[#5841A3]/30 p-4 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#5841A3]">
                <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{contact.successTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#231F29] leading-relaxed">
                {contact.successBody}
              </p>

              <div className="rounded-lg bg-[#FAF8FC] border border-[#DFD8EC] p-3 text-xs text-[#231F29] space-y-1">
                <p>
                  <span className="font-semibold text-[#5841A3]">{contact.draftToLabel}:</span>{' '}
                  {lastDraft.to}
                </p>
                <p>
                  <span className="font-semibold text-[#5841A3]">{contact.draftSubjectLabel}:</span>{' '}
                  {lastDraft.subject}
                </p>
                <pre className="pt-1.5 mt-1.5 border-t border-[#E6DFF3] whitespace-pre-wrap font-sans text-xs text-[#433D4D] leading-relaxed">
                  {lastDraft.body}
                </pre>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={lastDraft.gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#5841A3] hover:bg-[#463287] text-xs font-medium text-[#FAF8FC] transition-colors whitespace-nowrap"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{contact.openGmailLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={lastDraft.mailtoUrl}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FAF8FC] hover:bg-[#E8E1F4] border border-[#D3C9E5] text-xs font-medium text-[#231F29] transition-colors whitespace-nowrap"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-[#5841A3]" aria-hidden="true" />
                  <span>{contact.openDraftLabel}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FAF8FC] hover:bg-[#E8E1F4] border border-[#D3C9E5] text-xs font-medium text-[#231F29] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 shrink-0 text-[#5841A3]" aria-hidden="true" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 shrink-0 text-[#5841A3]" aria-hidden="true" />
                  )}
                  <span>{copied ? contact.copiedDraftLabel : contact.copyDraftLabel}</span>
                </button>
              </div>
            </div>
          )}

          {error && (
            <p
              role="alert"
              className="rounded-lg bg-[#FCEEEB] border border-[#B94A38]/40 px-4 py-3 text-xs sm:text-sm text-[#7F291A]"
            >
              {error}
            </p>
          )}

          <div className="space-y-2">
            <label
              htmlFor="contact-recipient"
              className="block text-sm font-medium text-[#231F29]"
            >
              {contact.recipientLabel}
            </label>
            <select
              id="contact-recipient"
              value={recipient}
              onChange={(e) =>
                setRecipient(e.target.value as 'project' | 'newBeginnings')
              }
              className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
            >
              <option value="project">{contact.recipientOptions.project}</option>
              <option value="newBeginnings">
                {contact.recipientOptions.newBeginnings}
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-[#231F29]"
              >
                {contact.nameLabel}
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-[#231F29]"
              >
                {contact.emailLabel}
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-phone"
              className="block text-sm font-medium text-[#231F29]"
            >
              {contact.phoneLabel}{' '}
              <span className="text-xs font-normal text-[#615A6D]">
                {contact.phoneOptional}
              </span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-[#231F29]"
            >
              {contact.messageLabel}
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={contact.messagePlaceholder}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] placeholder:text-[#8E869D] leading-relaxed focus:outline-2 focus:outline-[#5841A3]"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto py-3 px-7 text-sm font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] rounded-lg transition-colors cursor-pointer"
          >
            {contact.submitButton}
          </button>
        </form>
        </div>
      </ScrollReveal>
    </div>
  );
};
