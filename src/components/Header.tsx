import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import { Language, SectionId } from '../types';
import { SiteContent } from '../data/translations';
import { BrandMark } from './BrandMark';

interface HeaderProps {
  content: SiteContent;
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  language: Language;
  onChangeLanguage: (lang: Language) => void;
}

const NAV_SECTIONS: SectionId[] = [
  'home',
  'about',
  'education',
  'resources',
  'journal',
  'references',
  'contact',
];

export const Header: React.FC<HeaderProps> = ({
  content,
  activeSection,
  onNavigate,
  language,
  onChangeLanguage,
}) => {
  return (
    <div className="w-full bg-[#FAF8FC]">
      {/* Primary Top Navigation Bar — Logo + Name, All Sections Clearly Listed, Donate CTA */}
      <header className="sticky top-0 z-40 w-full bg-[#FAF8FC]/95 backdrop-blur-sm border-b border-[#DFD8EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          {/* Zone 1: Uploaded DCP Logo + Project Name */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5841A3] rounded-md cursor-pointer"
          >
            <BrandMark className="w-9 h-9 shrink-0" />
            <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#231F29] whitespace-nowrap shrink-0">
              {content.brandName}
            </span>
          </button>

          {/* Zone 2: All Sections Clearly Listed at the Top (no three-lines hamburger menu) */}
          <nav
            aria-label="Primary navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm font-medium text-[#5A5368]"
          >
            {NAV_SECTIONS.map((item) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => onNavigate(item)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`py-1.5 border-b-2 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5841A3] ${
                    isActive
                      ? 'text-[#5841A3] border-[#5841A3] font-semibold'
                      : 'border-transparent hover:text-[#231F29] hover:border-[#C8BFE0]'
                  }`}
                >
                  {content.nav[item]}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('donate')}
              aria-current={activeSection === 'donate' ? 'page' : undefined}
              className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5841A3] ${
                activeSection === 'donate'
                  ? 'bg-[#463287] text-[#FAF8FC] ring-2 ring-[#5841A3]/30'
                  : 'bg-[#5841A3] hover:bg-[#463287] text-[#FAF8FC]'
              }`}
            >
              {content.nav.donate}
            </button>
          </div>
        </div>
      </header>

      {/* Non-sticky Top Support & Language Strip (Scarborough New Beginnings + Contact + Language Switcher) */}
      <div className="w-full bg-[#F2EEF8] border-b border-[#DFD8EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-[#433D4D]">
            <span className="font-medium text-[#5841A3]">
              {content.topSupportStrip.scarboroughText}
            </span>
            <a
              href="tel:16474826308"
              className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-[#231F29] hover:text-[#5841A3] underline underline-offset-4 decoration-[#C8BFE0] whitespace-nowrap shrink-0 tabular-nums"
            >
              <Phone className="w-3.5 h-3.5 text-[#5841A3]" aria-hidden="true" />
              {content.topSupportStrip.newBeginningsPhone}
            </a>
            <span className="hidden sm:inline text-[#B4AACB]" aria-hidden="true">
              ·
            </span>
            <a
              href={`mailto:${content.topSupportStrip.projectEmail}`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#231F29] hover:text-[#5841A3] underline underline-offset-4 decoration-[#C8BFE0] truncate max-w-[260px] sm:max-w-none"
            >
              <Mail className="w-3.5 h-3.5 text-[#5841A3] shrink-0" aria-hidden="true" />
              {content.topSupportStrip.projectEmail}
            </a>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-3 py-1 text-xs font-medium text-[#5841A3] bg-[#FAF8FC] border border-[#C8BFE0] hover:border-[#5841A3] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {content.topSupportStrip.contactButton}
            </button>
          </div>

          {/* Language Switcher: English, French, Spanish */}
          <div className="flex items-center gap-2 shrink-0 self-start lg:self-auto">
            <Globe className="w-4 h-4 text-[#5A5368]" aria-hidden="true" />
            <span className="text-xs text-[#5A5368] mr-1">{content.topSupportStrip.languageLabel}:</span>
            <div
              role="group"
              aria-label="Language selection"
              className="inline-flex items-center p-0.5 bg-[#E6DFF3] rounded-lg border border-[#D3C9E5]"
            >
              {(
                [
                  { code: 'en', label: 'English' },
                  { code: 'fr', label: 'Français' },
                  { code: 'es', label: 'Español' },
                ] as { code: Language; label: string }[]
              ).map((lang) => {
                const active = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => onChangeLanguage(lang.code)}
                    aria-pressed={active}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#FAF8FC] text-[#5841A3] shadow-xs'
                        : 'text-[#5A5368] hover:text-[#231F29]'
                    }`}
                  >
                    {lang.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
