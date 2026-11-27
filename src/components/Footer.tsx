import React from 'react';
import { SiteContent } from '../data/translations';
import { SectionId } from '../types';
import { BrandMark } from './BrandMark';

interface FooterProps {
  content: SiteContent;
  onNavigate: (section: SectionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ content, onNavigate }) => {
  return (
    <footer className="bg-[#F2EEF8] border-t border-[#DFD8EC] mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandMark className="w-9 h-9" />
              <span className="font-serif text-lg font-medium text-[#231F29]">
                {content.brandName}
              </span>
            </div>
            <p className="font-serif italic text-base text-[#5841A3]">
              “{content.footer.tagline}”
            </p>
            <p className="text-sm text-[#5A5368] leading-relaxed max-w-md">
              {content.footer.verifiedNote}
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-[#231F29]">
              {content.footer.quickLinksHeading}
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-sm text-[#5A5368]">
              {(['home', 'about', 'education', 'resources', 'journal', 'references', 'donate', 'contact'] as SectionId[]).map(
                (section) => (
                  <li key={section}>
                    <button
                      type="button"
                      onClick={() => onNavigate(section)}
                      className="hover:text-[#5841A3] hover:underline underline-offset-4 transition-colors cursor-pointer"
                    >
                      {content.nav[section]}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-semibold text-[#231F29]">
              {content.footer.supportHeading}
            </h3>
            <div className="space-y-2.5 text-sm text-[#5A5368]">
              <p>
                <span className="block font-medium text-[#231F29]">The Dopamine Clarity Project</span>
                <a
                  href="mailto:thedopamineclarityproject@gmail.com"
                  className="hover:text-[#5841A3] underline underline-offset-4"
                >
                  thedopamineclarityproject@gmail.com
                </a>
              </p>
              <p>
                <span className="block font-medium text-[#231F29]">
                  New Beginnings Recovery Home (Scarborough)
                </span>
                <span className="block font-mono tabular-nums text-xs mt-0.5">
                  1-647-482-6308 · info@newbeginningsrecovery.ca
                </span>
              </p>
              <p className="text-xs text-[#615A6D] pt-1">
                ConnexOntario 24/7 Helpline: <span className="font-mono tabular-nums">1-866-531-2600</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#DFD8EC] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#615A6D]">
          <span>{content.footer.rights}</span>
          <span>Ontario, Canada</span>
        </div>
      </div>
    </footer>
  );
};
