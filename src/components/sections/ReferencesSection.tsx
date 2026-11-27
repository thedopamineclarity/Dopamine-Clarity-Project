import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SiteContent } from '../../data/translations';
import { APA_REFERENCES } from '../../data/references';

interface ReferencesSectionProps {
  content: SiteContent;
  highlightedRefId: number | null;
}

export const ReferencesSection: React.FC<ReferencesSectionProps> = ({
  content,
  highlightedRefId,
}) => {
  const { references } = content;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-10">
      <header className="space-y-4 max-w-3xl">
        <p className="text-sm font-medium text-[#5841A3]">{references.eyebrow}</p>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#231F29] leading-tight [text-wrap:balance]">
          {references.title}
        </h1>
        <p className="text-base sm:text-lg text-[#433D4D] leading-relaxed">
          {references.intro}
        </p>
        <p className="text-xs text-[#615A6D] pt-1">{references.verifiedNote}</p>
      </header>

      <div className="border-t border-[#DFD8EC] divide-y divide-[#DFD8EC]">
        {APA_REFERENCES.map((refItem) => {
          const isHighlighted = highlightedRefId === refItem.id;
          return (
            <article
              key={refItem.id}
              id={`ref-${refItem.id}`}
              className={`py-6 px-4 sm:px-6 rounded-xl transition-colors duration-200 ${
                isHighlighted ? 'bg-[#F2EEF8] ring-1 ring-[#5841A3]/40 my-2' : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="font-mono text-sm font-medium text-[#5841A3] tabular-nums shrink-0 pt-0.5">
                  [{refItem.id}]
                </span>

                <div className="flex-1 space-y-3">
                  <p className="text-base text-[#231F29] leading-relaxed pl-6 -indent-6">
                    {refItem.apaCitation}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#5A5368]">
                    <span>{refItem.publisher}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{refItem.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {references.topicLabel} {refItem.topicArea}
                    </span>
                  </div>

                  <div>
                    <a
                      href={refItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5841A3] hover:text-[#463287] underline underline-offset-4 decoration-[#5841A3]/40"
                    >
                      <span>{references.openSourceLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
