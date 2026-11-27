import { useState, useEffect } from 'react';
import { Language, SectionId } from './types';
import { TRANSLATIONS } from './data/translations';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeSection } from './components/sections/HomeSection';
import { AboutSection } from './components/sections/AboutSection';
import { EducationSection } from './components/sections/EducationSection';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { JournalSection } from './components/sections/JournalSection';
import { ReferencesSection } from './components/sections/ReferencesSection';
import { DonateSection } from './components/sections/DonateSection';
import { ContactSection } from './components/sections/ContactSection';

const VALID_SECTIONS: SectionId[] = [
  'home',
  'about',
  'education',
  'resources',
  'journal',
  'references',
  'donate',
  'contact',
];

function getInitialSection(): SectionId {
  const hash = window.location.hash.replace('#', '') as SectionId;
  return VALID_SECTIONS.includes(hash) ? hash : 'home';
}

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<SectionId>(getInitialSection);
  const [highlightedRefId, setHighlightedRefId] = useState<number | null>(null);
  const [contactRecipient, setContactRecipient] = useState<'project' | 'newBeginnings'>('project');

  const content = TRANSLATIONS[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as SectionId;
      if (VALID_SECTIONS.includes(hash)) {
        setActiveSection(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (section: SectionId) => {
    setActiveSection(section);
    if (section !== 'references') {
      setHighlightedRefId(null);
    }
    window.location.hash = section;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenReference = (refId: number) => {
    setHighlightedRefId(refId);
    setActiveSection('references');
    window.location.hash = 'references';
    setTimeout(() => {
      const el = document.getElementById(`ref-${refId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 60);
  };

  const handleNavigateToContact = (recipient: 'project' | 'newBeginnings') => {
    setContactRecipient(recipient);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8FC] text-[#231F29]">
      <Header
        content={content}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        language={language}
        onChangeLanguage={setLanguage}
      />

      <main className="flex-1">
        {activeSection === 'home' && (
          <HomeSection
            content={content}
            onNavigate={handleNavigate}
            onOpenReference={handleOpenReference}
            onNavigateToContact={handleNavigateToContact}
          />
        )}
        {activeSection === 'about' && <AboutSection content={content} />}
        {activeSection === 'education' && (
          <EducationSection
            content={content}
            onOpenReference={handleOpenReference}
            onNavigate={handleNavigate}
          />
        )}
        {activeSection === 'resources' && (
          <ResourcesSection
            content={content}
            onNavigateToContact={handleNavigateToContact}
            onNavigate={handleNavigate}
          />
        )}
        {activeSection === 'journal' && <JournalSection content={content} />}
        {activeSection === 'references' && (
          <ReferencesSection
            content={content}
            highlightedRefId={highlightedRefId}
          />
        )}
        {activeSection === 'donate' && <DonateSection content={content} />}
        {activeSection === 'contact' && (
          <ContactSection
            content={content}
            defaultRecipient={contactRecipient}
          />
        )}
      </main>

      <Footer content={content} onNavigate={handleNavigate} />
    </div>
  );
}
