import React, { useState } from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import { SiteContent } from '../../data/translations';
import { ScrollReveal } from '../ScrollReveal';

interface DonateSectionProps {
  content: SiteContent;
}

const PRESET_AMOUNTS = [15, 35, 75, 150];

export const DonateSection: React.FC<DonateSectionProps> = ({ content }) => {
  const { donate } = content;

  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState<number>(35);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [dedication, setDedication] = useState('');
  const [donationSubmitted, setDonationSubmitted] = useState(false);

  const effectiveAmount =
    customAmount.trim() !== '' && Number(customAmount) > 0
      ? Number(customAmount)
      : selectedAmount;

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorEmail.trim() || effectiveAmount <= 0) return;
    setDonationSubmitted(true);
    setDonorName('');
    setDonorEmail('');
    setDedication('');
    setCustomAmount('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      <ScrollReveal>
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-medium text-[#5841A3]">{donate.eyebrow}</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#231F29] leading-tight [text-wrap:balance]">
            {donate.title}
          </h1>
          <p className="text-base sm:text-lg text-[#433D4D] leading-relaxed">
            {donate.intro}
          </p>
        </header>
      </ScrollReveal>

      {/* Prototype & Completely Voluntary Notice */}
      <ScrollReveal delay={0.05}>
        <div className="rounded-xl bg-[#EFEBF8] border border-[#D3C9E5] p-5 sm:p-6 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#5841A3] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[#5841A3]">
              {donate.prototypeNoticeTitle}
            </p>
            <p className="text-sm text-[#3D3746] leading-relaxed">
              {donate.prototypeNoticeBody}
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 border-t border-[#DFD8EC]">
          <form
            onSubmit={handleDonationSubmit}
            className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] space-y-6"
          >
            {donationSubmitted && (
              <div className="rounded-lg bg-[#EFEBF8] border border-[#5841A3]/30 p-4 space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#5841A3]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{donate.donationSuccessTitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#231F29] leading-relaxed">
                  {donate.donationSuccessBody}
                </p>
              </div>
            )}

            <div className="space-y-2">
              <span className="block text-sm font-medium text-[#231F29]">
                {donate.frequencyLabel}
              </span>
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#E6DFF3] rounded-lg border border-[#D3C9E5]">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    frequency === 'once'
                      ? 'bg-[#FAF8FC] text-[#5841A3] shadow-xs'
                      : 'text-[#5A5368] hover:text-[#231F29]'
                  }`}
                >
                  {donate.oneTimeLabel}
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    frequency === 'monthly'
                      ? 'bg-[#FAF8FC] text-[#5841A3] shadow-xs'
                      : 'text-[#5A5368] hover:text-[#231F29]'
                  }`}
                >
                  {donate.monthlyLabel}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <span className="block text-sm font-medium text-[#231F29]">
                {donate.amountLabel}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {PRESET_AMOUNTS.map((amount) => {
                  const active = customAmount === '' && selectedAmount === amount;
                  return (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-2.5 px-3 text-sm font-mono tabular-nums font-medium rounded-lg border transition-colors cursor-pointer ${
                        active
                          ? 'bg-[#5841A3] text-[#FAF8FC] border-[#5841A3]'
                          : 'bg-[#FAF8FC] text-[#231F29] border-[#D3C9E5] hover:border-[#5841A3]'
                      }`}
                    >
                      ${amount}
                    </button>
                  );
                })}
                <input
                  type="number"
                  min={1}
                  step={1}
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder={donate.customAmountPlaceholder}
                  aria-label={donate.customAmountPlaceholder}
                  className="py-2.5 px-3 text-sm font-mono tabular-nums rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] placeholder:text-[#8E869D] focus:outline-2 focus:outline-[#5841A3]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="donor-name"
                  className="block text-sm font-medium text-[#231F29]"
                >
                  {donate.donorNameLabel}
                </label>
                <input
                  id="donor-name"
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="donor-email"
                  className="block text-sm font-medium text-[#231F29]"
                >
                  {donate.donorEmailLabel}
                </label>
                <input
                  id="donor-email"
                  type="email"
                  required
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="donor-note"
                className="block text-sm font-medium text-[#231F29]"
              >
                {donate.dedicateLabel}
              </label>
              <input
                id="donor-note"
                type="text"
                value={dedication}
                onChange={(e) => setDedication(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 text-sm font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] rounded-lg transition-colors cursor-pointer"
            >
              {donate.donateButton} ·{' '}
              <span className="font-mono tabular-nums">${effectiveAmount} CAD</span>
            </button>
          </form>

          <aside className="lg:col-span-5 space-y-5">
            <h2 className="font-serif text-2xl font-medium text-[#231F29]">
              {donate.impactHeading}
            </h2>
            <ul className="space-y-4">
              {donate.impactItems.map((description, index) => (
                <li
                  key={index}
                  className="p-5 rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] flex items-start gap-3.5"
                >
                  <span className="font-mono text-xs font-medium text-[#5841A3] tabular-nums pt-0.5 shrink-0">
                    0{index + 1}.
                  </span>
                  <p className="text-sm text-[#433D4D] leading-relaxed">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </ScrollReveal>
    </div>
  );
};
