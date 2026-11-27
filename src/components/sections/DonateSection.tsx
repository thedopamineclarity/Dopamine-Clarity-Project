import React, { useState } from 'react';
import { CheckCircle2, HeartHandshake, Users } from 'lucide-react';
import { SiteContent } from '../../data/translations';

interface DonateSectionProps {
  content: SiteContent;
}

const PRESET_AMOUNTS = [15, 35, 75, 150];

export const DonateSection: React.FC<DonateSectionProps> = ({ content }) => {
  const { donate } = content;

  const [activeTab, setActiveTab] = useState<'donate' | 'volunteer'>('donate');

  // Donation form state
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState<number>(35);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [dedication, setDedication] = useState('');
  const [donationSubmitted, setDonationSubmitted] = useState(false);

  // Volunteer form state
  const [volName, setVolName] = useState('');
  const [volEmail, setVolEmail] = useState('');
  const [volRole, setVolRole] = useState(donate.volunteerRoles[0] ?? '');
  const [volAvailability, setVolAvailability] = useState('');
  const [volMessage, setVolMessage] = useState('');
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

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

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volName.trim() || !volEmail.trim()) return;
    setVolunteerSubmitted(true);
    setVolName('');
    setVolEmail('');
    setVolAvailability('');
    setVolMessage('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      <header className="max-w-3xl space-y-4">
        <p className="text-sm font-medium text-[#5841A3]">{donate.eyebrow}</p>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#231F29] leading-tight [text-wrap:balance]">
          {donate.title}
        </h1>
        <p className="text-base sm:text-lg text-[#433D4D] leading-relaxed">
          {donate.intro}
        </p>

        {/* Segmented Tab Switcher: Donate vs Volunteer */}
        <div
          role="tablist"
          aria-label="Ways to support"
          className="inline-flex items-center gap-1 p-1 bg-[#F2EEF8] border border-[#DFD8EC] rounded-lg mt-2"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'donate'}
            onClick={() => setActiveTab('donate')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'donate'
                ? 'bg-[#FAF8FC] text-[#5841A3] shadow-xs'
                : 'text-[#5A5368] hover:text-[#231F29]'
            }`}
          >
            <HeartHandshake className="w-4 h-4" aria-hidden="true" />
            <span>{donate.donationTab}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'volunteer'}
            onClick={() => setActiveTab('volunteer')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'volunteer'
                ? 'bg-[#FAF8FC] text-[#5841A3] shadow-xs'
                : 'text-[#5A5368] hover:text-[#231F29]'
            }`}
          >
            <Users className="w-4 h-4" aria-hidden="true" />
            <span>{donate.volunteerTab}</span>
          </button>
        </div>
      </header>

      {activeTab === 'donate' ? (
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
            <div className="space-y-4">
              {donate.impactItems.map((item) => (
                <div
                  key={item.amount}
                  className="p-5 rounded-xl bg-[#FAF8FC] border border-[#DFD8EC] space-y-1.5"
                >
                  <p className="font-mono text-lg font-medium text-[#5841A3] tabular-nums">
                    {item.amount}
                  </p>
                  <p className="text-sm text-[#433D4D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 border-t border-[#DFD8EC]">
          <form
            onSubmit={handleVolunteerSubmit}
            className="lg:col-span-8 p-6 sm:p-8 rounded-xl bg-[#F2EEF8] border border-[#DFD8EC] space-y-5"
          >
            <div className="space-y-1.5">
              <h2 className="font-serif text-2xl font-medium text-[#231F29]">
                {donate.volunteerHeading}
              </h2>
              <p className="text-sm text-[#5A5368]">{donate.volunteerIntro}</p>
            </div>

            {volunteerSubmitted && (
              <div className="rounded-lg bg-[#EFEBF8] border border-[#5841A3]/30 p-4 space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#5841A3]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{donate.volunteerSuccessTitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#231F29] leading-relaxed">
                  {donate.volunteerSuccessBody}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="vol-name"
                  className="block text-sm font-medium text-[#231F29]"
                >
                  {donate.donorNameLabel}
                </label>
                <input
                  id="vol-name"
                  type="text"
                  required
                  value={volName}
                  onChange={(e) => setVolName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="vol-email"
                  className="block text-sm font-medium text-[#231F29]"
                >
                  {donate.donorEmailLabel}
                </label>
                <input
                  id="vol-email"
                  type="email"
                  required
                  value={volEmail}
                  onChange={(e) => setVolEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="vol-role"
                  className="block text-sm font-medium text-[#231F29]"
                >
                  {donate.volunteerRoleLabel}
                </label>
                <select
                  id="vol-role"
                  value={volRole}
                  onChange={(e) => setVolRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
                >
                  {donate.volunteerRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="vol-availability"
                  className="block text-sm font-medium text-[#231F29]"
                >
                  {donate.volunteerAvailabilityLabel}
                </label>
                <input
                  id="vol-availability"
                  type="text"
                  value={volAvailability}
                  onChange={(e) => setVolAvailability(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="vol-message"
                className="block text-sm font-medium text-[#231F29]"
              >
                {donate.volunteerMessageLabel}
              </label>
              <textarea
                id="vol-message"
                rows={4}
                value={volMessage}
                onChange={(e) => setVolMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#FAF8FC] border border-[#D3C9E5] text-[#231F29] focus:outline-2 focus:outline-[#5841A3]"
              />
            </div>

            <button
              type="submit"
              className="py-3 px-6 text-sm font-medium text-[#FAF8FC] bg-[#5841A3] hover:bg-[#463287] rounded-lg transition-colors cursor-pointer"
            >
              {donate.volunteerSubmitButton}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
