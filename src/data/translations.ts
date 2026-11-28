import {
  EducationTopic,
  JournalStory,
  Language,
  ResourceOrg,
  SectionId,
  TeamMember,
} from '../types';

export interface SiteContent {
  brandName: string;
  slogan: string;
  nav: Record<SectionId, string>;
  topSupportStrip: {
    scarboroughLabel: string;
    scarboroughText: string;
    newBeginningsPhone: string;
    newBeginningsEmail: string;
    projectEmail: string;
    contactButton: string;
    languageLabel: string;
  };
  home: {
    eyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    primaryCta: string;
    secondaryCta: string;
    heroImageAlt: string;
    heroCaption: string;
    overviewHeading: string;
    overviewIntro: string;
    exploreLabel: string;
    sectionCards: {
      sectionId: SectionId;
      number: string;
      title: string;
      description: string;
      action: string;
    }[];
    verificationBanner: {
      heading: string;
      body: string;
      cta: string;
    };
    urgentHelp: {
      heading: string;
      body: string;
      emergencyLabel: string;
      helplineLabel: string;
      scarboroughLabel: string;
    };
    expanded: {
      aboutEyebrow: string;
      aboutCta: string;
      teamPreviewLabel: string;
      educationEyebrow: string;
      educationTitle: string;
      educationCta: string;
      resourcesEyebrow: string;
      resourcesTitle: string;
      resourcesCta: string;
      journalEyebrow: string;
      journalTitle: string;
      journalReadCta: string;
      journalShareCta: string;
      referencesEyebrow: string;
      referencesTitle: string;
      referencesCta: string;
      supportEyebrow: string;
      supportTitle: string;
      donateCta: string;
      contactCta: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    storyParagraphs: string[];
    verificationHeading: string;
    verificationBody: string;
    plansHeading: string;
    plans: { number: string; title: string; detail: string }[];
    teamHeading: string;
    teamSubheading: string;
    communityImageAlt: string;
    members: TeamMember[];
    socialCard: {
      heading: string;
      handle: string;
      body: string;
      buttonLabel: string;
      url: string;
    };
  };
  education: {
    eyebrow: string;
    title: string;
    intro: string;
    plainLanguageNote: string;
    headerImageAlt: string;
    statsHeading: string;
    statsIntro: string;
    statsSourceLabel: string;
    statsSourceUrl: string;
    statsItems: { figure: string; text: string }[];
    videosHeading: string;
    videosIntro: string;
    videosWatchLabel: string;
    videos: { label: string; description: string; url: string }[];
    progressLabel: string;
    viewAllModeLabel: string;
    focusModeLabel: string;
    markReadLabel: string;
    markedReadLabel: string;
    prevTopicLabel: string;
    nextTopicLabel: string;
    mythFactHeading: string;
    mythFactIntro: string;
    mythLabel: string;
    factLabel: string;
    revealFactLabel: string;
    hideFactLabel: string;
    mythFacts: { myth: string; fact: string; citationId: number }[];
    keyTakeawayLabel: string;
    sourcesLabel: string;
    viewReferenceLabel: string;
    topics: EducationTopic[];
    nextStepHeading: string;
    nextStepBody: string;
    nextStepCta: string;
  };
  references: {
    title: string;
    intro: string;
    verifiedNote: string;
    openSourceLabel: string;
    topicLabel: string;
  };
  journal: {
    eyebrow: string;
    title: string;
    intro: string;
    imageAlt: string;
    filterAll: string;
    topics: Record<'recovery' | 'family' | 'hope' | 'community', string>;
    anonymousLabel: string;
    moderationBannerTitle: string;
    moderationBannerBody: string;
    formHeading: string;
    formSubheading: string;
    nameLabel: string;
    namePlaceholder: string;
    anonymousToggleLabel: string;
    topicSelectLabel: string;
    storyTitleLabel: string;
    storyTitlePlaceholder: string;
    storyBodyLabel: string;
    storyBodyPlaceholder: string;
    consentText: string;
    submitButton: string;
    submittingButton: string;
    validationError: string;
    lengthError: string;
    submitFailedError: string;
    submittedSuccessTitle: string;
    submittedSuccessBody: string;
    pendingQueueHeading: string;
    pendingBadgeText: string;
    pendingEmptyText: string;
    coordinatorHeading: string;
    coordinatorSubtitle: string;
    coordinatorSignInButton: string;
    coordinatorSignOutButton: string;
    coordinatorSignedInAs: string;
    coordinatorUnauthorizedNote: string;
    approveButton: string;
    declineButton: string;
    unpublishButton: string;
    deleteButton: string;
    pendingTabLabel: string;
    approvedTabLabel: string;
    initialStories: JournalStory[];
  };
  resources: {
    eyebrow: string;
    title: string;
    intro: string;
    emergencyHeading: string;
    emergencyBody: string;
    emergencyCards: { title: string; number: string; note: string; apaCitation?: string }[];
    newBeginnings: {
      eyebrow: string;
      title: string;
      subtitle: string;
      imageAlt: string;
      overview: string;
      processHeading: string;
      processSteps: { step: string; title: string; detail: string }[];
      addressLabel: string;
      addressValue: string;
      phoneLabel: string;
      emailLabel: string;
      websiteLabel: string;
      contactCta: string;
      apaCitation: string;
    };
    directoryHeading: string;
    directoryNotice: string;
    directoryCategories: Record<'all' | 'helpline' | 'treatment' | 'youth' | 'research', string>;
    visitWebsiteLabel: string;
    availabilityLabel: string;
    apaCitationLabel: string;
    organizations: ResourceOrg[];
  };
  donate: {
    eyebrow: string;
    title: string;
    intro: string;
    prototypeNoticeTitle: string;
    prototypeNoticeBody: string;
    frequencyLabel: string;
    oneTimeLabel: string;
    monthlyLabel: string;
    amountLabel: string;
    customAmountPlaceholder: string;
    donorNameLabel: string;
    donorEmailLabel: string;
    dedicateLabel: string;
    donateButton: string;
    impactHeading: string;
    impactItems: string[];
    donationSuccessTitle: string;
    donationSuccessBody: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    scarboroughCardTitle: string;
    scarboroughCardBody: string;
    projectCardTitle: string;
    projectCardBody: string;
    formTitle: string;
    recipientLabel: string;
    recipientOptions: {
      project: string;
      newBeginnings: string;
    };
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    phoneOptional: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    successTitle: string;
    successBody: string;
    openDraftLabel: string;
    errorRequired: string;
  };
  footer: {
    tagline: string;
    verifiedNote: string;
    rights: string;
    quickLinksHeading: string;
    supportHeading: string;
  };
}

export const TRANSLATIONS: Record<Language, SiteContent> = {
  en: {
    brandName: 'The Dopamine Clarity Project',
    slogan: 'Breaking the cycle, sparking a revival.',
    nav: {
      home: 'Home',
      about: 'About Us',
      education: 'Education',
      resources: 'Resources',
      journal: 'Journal',
      references: 'References',
      donate: 'Donate',
      contact: 'Contact',
    },
    topSupportStrip: {
      scarboroughLabel: 'Scarborough & Ontario Support',
      scarboroughText:
        'Seeking possible treatment in Scarborough or want to learn more? Reach New Beginnings or our team:',
      newBeginningsPhone: '1-647-482-6308',
      newBeginningsEmail: 'info@newbeginningsrecovery.ca',
      projectEmail: 'thedopamineclarityproject@gmail.com',
      contactButton: 'Contact Form',
      languageLabel: 'Language',
    },
    home: {
      eyebrow: 'Student-Led Ontario Awareness Initiative',
      heroTitle: 'The Dopamine Clarity Project',
      heroSubtitle:
        'You do not have to go through this alone. On our website, we offer educational information on alcohol and drug addiction that is easy to understand, a place for you to safely share your experiences, and trusted recovery pathways across Ontario, so that you are able to receive the best support.',
      primaryCta: 'Explore Addiction Education',
      secondaryCta: 'Find Treatment & Support',
      heroImageAlt: 'Small group of people sitting together on a sunny beach in warm sunlight, symbolizing calm support and community',
      heroCaption: 'Recovery begins with receiving accurate information and compassionate care.',
      overviewHeading: 'Take a moment to explore our website',
      overviewIntro:
        'Whether you are worried about yourself, supporting a loved one, or looking for accurate information without confusing terms, begin wherever feels most comfortable.',
      exploreLabel: 'Open section',
      sectionCards: [
        {
          sectionId: 'about',
          number: '01.',
          title: 'About Us & Our Team',
          description:
            'Meet the six students who founded The Dopamine Clarity Project with the mission of reducing stigma surrounding addiction in the community.',
          action: 'Meet the team',
        },
        {
          sectionId: 'education',
          number: '02.',
          title: 'Educational Overview',
          description:
            'Learn how addiction can develop in the brain, visible signs, physical and mental health effects, and when to seek help.',
          action: 'Read the guide',
        },
        {
          sectionId: 'resources',
          number: '03.',
          title: 'Resources & New Beginnings',
          description:
            'Explore New Beginnings Recovery Home in Scarborough alongside free 24/7 Ontario helplines, RAAM clinics, and emergency services.',
          action: 'View resources',
        },
        {
          sectionId: 'journal',
          number: '04.',
          title: 'Community Journal',
          description:
            'Read real reflections from people navigating recovery and family support, or share your own story anonymously after team review.',
          action: 'Read & share stories',
        },
        {
          sectionId: 'references',
          number: '05.',
          title: 'APA References',
          description:
            'Every educational statement on our website is backed by APA-formatted citations with direct links to the original sources.',
          action: 'Inspect sources',
        },
        {
          sectionId: 'donate',
          number: '06.',
          title: 'Support & Donate',
          description:
            'Learn how voluntary community donations help fund local awareness initiatives and support local recovery organizations.',
          action: 'Support the cause',
        },
      ],
      verificationBanner: {
        heading: 'Medically Grounded & Reviewed with Care',
        body: 'Every educational guide on this site is cross-checked against peer-reviewed public health research and reviewed with real treatment centres, including New Beginnings Recovery Home in Scarborough.',
        cta: 'See how New Beginnings helps',
      },
      urgentHelp: {
        heading: 'Need someone to talk to right now?',
        body: 'Free, confidential support is available across Ontario every hour of the day.',
        emergencyLabel: 'Medical Emergency: Call 911',
        helplineLabel: 'ConnexOntario 24/7: 1-866-531-2600 (Text CONNEX to 247247)',
        scarboroughLabel: 'New Beginnings Scarborough: 1-647-482-6308',
      },
      expanded: {
        aboutEyebrow: '01 · About Us & Student Team',
        aboutCta: 'Read our full story & meet all 6 coordinators',
        teamPreviewLabel: 'Project Coordination Team',
        educationEyebrow: '02 · Plain-Language Education',
        educationTitle: 'Explore our six core addiction & treatment topics',
        educationCta: 'Open full educational guide',
        resourcesEyebrow: '03 · Scarborough & Ontario Treatment',
        resourcesTitle: 'How New Beginnings & Ontario care work',
        resourcesCta: 'Explore all treatment & emergency resources',
        journalEyebrow: '04 · Community Journal',
        journalTitle: 'Real stories so no one walks alone',
        journalReadCta: 'Read all stories',
        journalShareCta: 'Share your story safely',
        referencesEyebrow: '05 · Verified APA Research',
        referencesTitle: 'Every fact linked directly to public health sources',
        referencesCta: 'View all 23 APA references',
        supportEyebrow: '06 · Support & Reach Out',
        supportTitle: 'Stand with Ontario families or send us a message',
        donateCta: 'Learn about donations',
        contactCta: 'Contact New Beginnings or us',
      },
    },
    about: {
      eyebrow: 'Who We Are',
      title: 'A student-led initiative focused on bringing empathy and awareness to addictive behaviours.',
      lead: '“Breaking the cycle, sparking a revival.”',
      storyParagraphs: [
        'The Dopamine Clarity Project is a student-led organization dedicated to raising awareness around alcohol and drug addiction in our community. Our goal is to improve public understanding, make support easier to reach, and combat the heavy stigma that keeps people silent.',
        'After watching loved ones struggle with addiction, we became deeply motivated to speak up and share clear and reliable knowledge to prevent more families from enduring the painful effects addiction can bring.',
        'Through our outreach, educational research, and community events, we hope to connect families across Ontario with the understanding and compassionate care they deserve.',
      ],
      verificationHeading: 'Verified with Real Treatment Centres',
      verificationBody:
        'Accuracy matters when people are searching for help. All educational material on this website is carefully researched from national health institutions and reviewed in consultation with real treatment centres, including New Beginnings Recovery Home in Scarborough, Ontario.',
      plansHeading: 'Our Goals & Action Plan',
      plans: [
        {
          number: '01.',
          title: 'Accessible Multilingual Education',
          detail:
            'We display clear and easy-to-understand information in English, French, and Spanish, so that people are able to learn without any barriers.',
        },
        {
          number: '02.',
          title: 'Direct Bridges to Scarborough & Ontario Care',
          detail:
            'We can help connect you with local treatment centres such as New Beginnings, free 24/7 helplines, and walk-in RAAM clinics.',
        },
        {
          number: '03.',
          title: 'Create a Safe and Comforting Environment',
          detail:
            'We aim to host community events and create a safe, moderated journal space for people to share their own experiences and remind others that they are never alone.',
        },
      ],
      teamHeading: 'Meet Our Team!',
      teamSubheading: 'Six high-school students that aim to reduce the stigma surrounding addiction.',
      communityImageAlt: 'Circle of hands with purple beaded bracelets coming together in unity and peer support',
      members: [
        {
          id: 'isla',
          name: 'Isla Mina',
          role: 'Outreach and Project Coordinator',
          statement:
            'Dedicated to reaching out to the community and organizing awareness events in order to ensure that families have access to the knowledge, resources, and support they need to understand and combat addiction.',
        },
        {
          id: 'aleena',
          name: 'Aleena Hijaz',
          role: 'Documentation Coordinator',
          statement:
            'Oversees project documentation and maintains accurate records of our progress to ensure that everything we put out accurately reflects our initiatives and goals, so that we can make a positive difference in society.',
        },
        {
          id: 'alyna',
          name: 'Alyna Zita Caldeira',
          role: 'Graphic Design and Communications Coordinator',
          statement:
            'Focused on creating effective visual communications that aim to educate the public and replace fear and stigma with warmth and compassion.',
        },
        {
          id: 'marian',
          name: 'Marian Albert',
          role: 'Graphic Design and Communications Coordinator',
          statement:
            'Focused on designing educational materials and community outreach visuals in order to help families navigate their journey with confidence.',
        },
        {
          id: 'ashwin',
          name: 'Ashwin Austin-Rogesan',
          role: 'Community Spokesperson',
          statement:
            'Represents our student mission to the public in order to encourage individuals to have open and respectful conversations regarding recovery across Ontario.',
        },
        {
          id: 'clark',
          name: 'Clark Kent Soriano',
          role: 'Events and Logistics Coordinator',
          statement:
            'Coordinating awareness events, community partnerships, and volunteer initiatives so support reaches neighborhoods directly.',
        },
      ],
      socialCard: {
        heading: 'Follow Our Journey on Instagram',
        handle: '@thedopamineclarity',
        body: 'Would you like to support our cause? Follow us on social media to stay informed, learn more about our initiatives, and find ways to get involved!',
        buttonLabel: 'Visit @thedopamineclarity on Instagram',
        url: 'https://www.instagram.com/thedopamineclarity/',
      },
    },
    education: {
      eyebrow: 'Educational Overview',
      title: 'Helping you understand alcohol and drug addiction.',
      intro:
        'Medical terminology can feel confusing and overwhelming when you are simply looking for answers, so below are clear and simple explanations reviewed alongside real treatment professionals and backed by cited research.',
      plainLanguageNote: 'Click any citation number (such as [1]) to inspect its full APA source.',
      headerImageAlt: 'Sunlit wooden study desk with open educational notebooks, dried lavender, and warm herbal tea',
      statsHeading: 'Did You Know?',
      statsIntro:
        'Understanding how common substance use challenges are helps show that no person or family is ever alone.',
      statsSourceLabel: 'Source: Canadian Mental Health Association (CMHA) Ontario',
      statsSourceUrl: 'https://ontario.cmha.ca/addiction-and-substance-use-and-addiction/',
      statsItems: [
        {
          figure: '21%',
          text: 'In Canada, it is estimated that 21% of the population, roughly 1 in 5 Canadians, will meet the requirements for an addiction diagnosis in their lifetime.',
        },
        {
          figure: '18%',
          text: 'Alcohol is the most common substance associated with addiction. 18% of Canadians will meet the requirements for an alcohol addiction during their lifetime.',
        },
        {
          figure: '> 40%',
          text: 'More than 40% of Canadians have used cannabis at least once.',
        },
        {
          figure: '10%',
          text: 'It is estimated that around 10% of the population in Ontario use substances problematically.',
        },
      ],
      videosHeading: 'Educational Reference Videos',
      videosIntro:
        'If you prefer learning through short videos, explore these helpful references on substance use, brain health, and treatment:',
      videosWatchLabel: 'Watch on YouTube',
      videos: [
        {
          label: 'Reference Video 01',
          description: 'How substance use affects the brain and health.',
          url: 'https://youtu.be/6fmhLcYSn-Y?si=r4gB8uo0wAsan-gC',
        },
        {
          label: 'Reference Video 02',
          description: 'Understanding addiction causes, signs, and everyday impact.',
          url: 'https://youtu.be/b6Dte96WdqM?si=iR8xUlD2a_A2zDpj',
        },
        {
          label: 'Reference Video 03',
          description: 'How substance use disorder works and paths toward recovery.',
          url: 'https://youtu.be/IcLtRTEP7eo?si=5__10RxrXtC9Nht8',
        },
        {
          label: 'Reference Video 04',
          description: 'Exploring treatment approaches and supportive recovery care.',
          url: 'https://youtu.be/aTS5OW85Og4?si=lF0Q3Zbo_aPmb6DE',
        },
      ],
      progressLabel: 'Reading progress',
      viewAllModeLabel: 'Full Guide',
      focusModeLabel: 'Focus One Topic',
      markReadLabel: 'Mark topic as read',
      markedReadLabel: 'Completed',
      prevTopicLabel: 'Previous topic',
      nextTopicLabel: 'Next topic',
      mythFactHeading: 'Common Misunderstandings',
      mythFactIntro: 'Select any card below to reveal the verified health fact behind common misunderstandings.',
      mythLabel: 'Common Myth',
      factLabel: 'Verified Fact',
      revealFactLabel: 'Reveal fact',
      hideFactLabel: 'Show myth',
      mythFacts: [
        {
          myth: 'Someone has to wait until something bad happens before asking for help.',
          fact: 'Health Canada and CAMH advise reaching out the moment substance use begins affecting your health, relationships, or life—you do not have to wait for a crisis.',
          citationId: 18,
        },
        {
          myth: 'Substance use disorder is simply a personal weakness or lack of willpower.',
          fact: 'Addiction is a medical disease that changes dopamine activity in the brain’s reward system and can stem from genetics, stress, mental health, or prescribed medicines.',
          citationId: 3,
        },
        {
          myth: 'There is only one fixed path for recovery and treatment.',
          fact: 'SUD affects everyone differently, so recovery may involve medical withdrawal support, CBT/DBT or family therapy, outpatient counseling, or residential care.',
          citationId: 7,
        },
      ],
      keyTakeawayLabel: 'Summary',
      sourcesLabel: 'Cited Sources:',
      viewReferenceLabel: 'View in APA References',
      topics: [
        {
          id: 'what-is-addiction',
          number: '01.',
          question: 'What is alcohol and drug addiction?',
          paragraphs: [
            'Drug addiction, which is also known as substance use disorder (SUD), is a disease that causes a person to struggle with controlling the use of a legal or illegal drug or medicine. This includes many substances, with some of the most common ones being alcohol, marijuana, and nicotine. Addiction can prompt one to continue using the substance despite the dangerous effects it may have (Mayo Clinic, 2022).',
            'Substance use disorder can be classified as mild, moderate, and severe. When someone has more than one SUD at a time, the condition is referred to as a polysubstance use disorder (Cleveland Clinic, 2024).',
          ],
          keyTakeaway:
            'Addiction is a health condition that makes it hard to stop using alcohol, drugs, or medicines, even when they cause harm. It can be mild, moderate, or severe.',
          citationIds: [2, 3],
        },
        {
          id: 'how-it-develops',
          number: '02.',
          question: 'How can it develop?',
          paragraphs: [
            'Alcohol and drug addictions typically develop over a long period of time. Using substances can affect the brain’s reward system by creating intense feelings of pleasure that may lead to repeated use and an increased desire to keep using them.',
            'The dopamine activity in the brain increases as a result of substance use (Cleveland Clinic, 2024). Substance use disorder may be caused by many factors, like genetics, stress, societal pressure, personality traits, and mental health issues (Johns Hopkins Medicine, 2024).',
            'For some people, it may start by trying recreational drugs (chemical substances taken for relaxation) in social settings, and for others, it may begin with a prescribed medication. The use of drugs may become more frequent, with prescribed medicines having a possible risk of an addiction, particularly with opioid painkillers. An addiction can get worse when people require larger doses of the drug in order to get high for the feeling of pleasure and relief (Mayo Clinic, 2025).',
          ],
          keyTakeaway:
            'Addiction usually builds slowly over time. Stress, mental health, family history, social situations, and needing bigger doses to feel relief all play a part.',
          citationIds: [2, 3, 4, 5, 6],
        },
        {
          id: 'what-it-looks-like',
          number: '03.',
          question: 'What does it look like?',
          paragraphs: [
            'A person who has substance use disorder may show symptoms, like an increased use of the substance/using it for a longer time, not being able to cut down or control their use, and not being able to do their main jobs at work, at school, or at home. Substance use becomes the most important activity to them, often becoming a priority (MyHealthAlberta, 2026). Substance use also shows that people spend a lot of time trying to obtain the drug and ignore other activities in order to do this (Alcohol and Drug Use | HealthLink BC, 2023).',
            'When it comes to having to stop the substance or use less of it, they may experience withdrawals, which refers to the physical and mental symptoms that occur which affect the body. It may include sweating, shakiness, nausea, fatigue, cravings, anxiety, restlessness, mood swings and low moods. Addiction to alcohol may show symptoms such as blackouts, personality changes, and denial of even having a problem.',
          ],
          keyTakeaway:
            'Signs include needing more of a substance, trouble cutting down, neglecting school or work, prioritizing substance use, and experiencing withdrawal symptoms or blackouts.',
          citationIds: [20, 21],
        },
        {
          id: 'body-and-mind',
          number: '04.',
          question: 'How does it physically affect the body and mental health?',
          paragraphs: [
            'Physically, heavy alcohol or drug use can place ongoing stress on the liver, heart, stomach, immune system, and nervous system, and it can affect deep sleep, raise blood pressure, cause chronic fatigue, and increase long-term risks for heart and liver conditions [9, 11].',
            'Inhalants can damage or destroy nerve cells in the brain or the nervous system outside the brain and spinal cord. Drug use can also increase the risk of infections, and HIV and hepatitis C, a serious liver disease, can occur from sharing unhygienic injection items or from unsafe intercourse. Skin infections, like cellulitis, can also happen after being exposed to bacteria by drug use through injections [22]. When it comes to mental health, drug use and mental illnesses may co-exist, and mental disorders such as anxiety, depression, or schizophrenia may come before addiction. Substances can even mimic or hide the symptoms of depression, panic, paranoia, and memory fog [12].',
          ],
          detailGroups: [
            {
              heading: 'Effects of Short-Term Alcohol Use',
              intro: 'Drinking over the limit can lead to these harmful health effects:',
              bullets: [
                'Injuries (ex. motor crashes, falls, drowning, burns)',
                'Violence such as homicide, suicide, sexual violence and intimate partner violence',
                'Alcohol poisoning; having high blood alcohol levels can affect breathing and heart rate',
                'Overdose',
                'Sexually transmitted infections from unsafe intercourse',
                'Miscarriage, stillbirth, and fetal alcohol spectrum disorder due to alcohol use during pregnancy (CDC, 2025).',
              ],
            },
            {
              heading: 'Effects of Long-Term Alcohol Use',
              intro: 'Over time, drinking alcohol can have these effects:',
              bullets: [
                'Cancer; the use of alcohol like red wine, white wine and liquor, is linked with cancer. The risk of some cancers may increase with any amount of alcohol use, including breast cancer in women.',
                'More than 20,000 people pass away from alcohol-related cancers each year in the United States.',
                'It can also lead to high blood pressure, heart disease, liver disease, stroke, digestive problems and a weaker immune system.',
                'Mental health conditions may arise, such as learning difficulties at school and work, memory problems like dementia, and relationship issues with family and friends (CDC, 2025).',
              ],
            },
          ],
          keyTakeaway:
            'Long-term substance use can damage nerves, raise infection and cancer risks, harm major organs, and intensify anxiety, depression, and memory problems.',
          citationIds: [9, 11, 12, 22, 23],
        },
        {
          id: 'when-to-seek-help',
          number: '05.',
          question: 'When should someone seek help?',
          paragraphs: [
            'As per health organizations in Canada, such as CAMH (The Centre for Addiction and Mental Health) and Health Canada, you should consider seeking help for alcohol or drug abuse the moment they begin affecting your health, relationships, and life. You should not wait for something bad to happen before seeking help. You can consider seeking help from others if you are experiencing intense cravings, loss of control over the amount consumed, declining academic performance, and physical discomfort from stopping. Seeking help from an adult, school counselor, and/or a doctor is a wonderful idea and you can even contact Kids Help Phone by calling 1-800-668-6868 or texting CONNECT to 686868.',
          ],
          keyTakeaway:
            'Reach out as soon as alcohol or drug use affects your health, school, or relationships—talk to a trusted adult, doctor, or Kids Help Phone (1-800-668-6868 or text CONNECT to 686868).',
          citationIds: [16, 17, 18, 19],
        },
        {
          id: 'types-of-treatment',
          number: '06.',
          question: 'Types of treatment available',
          paragraphs: [
            'For many people, the first step to treatment involves withdrawing from the substance so that it can leave your body. A healthcare professional may provide medication to help with the effects of withdrawal based on how severe the addiction is. Further treatment can include therapy and other medication, but SUD affects everyone differently, so people may need different treatment at different times during their recovery journey (Cleveland Clinic, 2024). For proper and safe recovery, please consult a healthcare professional about medication before taking it.',
          ],
          bulletHeading: 'Some examples of therapy include:',
          bulletItems: [
            {
              label: 'Assertive community treatment (ACT)',
              description:
                'Mental health services are provided in a community setting, with treatment focusing on the person’s goals for the future.',
            },
            {
              label: 'Cognitive behavioral therapy (CBT)',
              description:
                'Therapy to help identify negative patterns of behaviour in order to find healthier ways to cope with a situation.',
            },
            {
              label: 'Contingency management',
              description: 'Therapy to encourage people to set their personal goals.',
            },
            {
              label: 'Dialectical behaviour therapy (DBT)',
              description:
                'Therapy to handle intense emotions and understand how it can affect your behaviour.',
            },
            {
              label: 'Family therapy',
              description:
                'Helps you improve your relationships within a family or group setting.',
            },
            {
              label: 'Motivational enhancement therapy',
              description:
                'Meant to encourage you to take steps in order to reach attainable goals.',
            },
            {
              label: 'Therapeutic communities (TC)',
              description:
                'A long-term residential treatment to develop healthier behaviours related to substance use.',
            },
            {
              label: 'Outpatient counseling',
              description:
                'Helps individuals understand their addiction. It can be done in a doctor’s office or online.',
            },
            {
              label: 'Inpatient rehabilitation',
              description:
                'A supportive environment for people to recover without any distractions or temptations.',
            },
          ],
          externalLink: {
            introText:
              'The following website contains direct information about available treatment and recovery centres:',
            label: 'Toronto Central Healthline — Treatment & Recovery Centres',
            url: 'https://www.torontocentralhealthline.ca/listservices.aspx?id=10095',
          },
          keyTakeaway:
            'Treatment looks different for everyone. It may include medical withdrawal support, counseling, and live-in or community therapy—always speak with a doctor before taking medication.',
          citationIds: [7, 8],
        },
      ],
      nextStepHeading: 'Ready to explore real support options?',
      nextStepBody:
        'View trusted Ontario helplines, walk-in clinics, and Scarborough’s New Beginnings treatment process.',
      nextStepCta: 'Explore Resources & Treatment',
    },
    references: {
      title: 'Our References and Original Sources',
      intro:
        'Below are our references for each and every educational claim we make on The Dopamine Clarity Project, which are grounded in peer-reviewed guidance and public health publications. Follow any link below to be directed to the original source.',
      verifiedNote: 'Formatted in APA 7th Edition · Reviewed alongside Scarborough treatment providers',
      openSourceLabel: 'Read original source',
      topicLabel: 'Used for:',
    },
    journal: {
      eyebrow: 'Real Stories & Reflections',
      title: 'Community Journal',
      intro:
        'Recovery is real, and it happens in the community. Read reflections/journals shared by individuals and families, or contribute your own story with full control over privacy.',
      imageAlt: 'Open linen-bound journal beside a warm cup of herbal tea and eucalyptus in soft light',
      filterAll: 'All Stories',
      topics: {
        recovery: 'Personal Recovery',
        family: 'Family & Loved Ones',
        hope: 'Hope',
        community: 'Community Support',
      },
      anonymousLabel: 'Anonymous',
      moderationBannerTitle: 'Careful Review Before Publishing',
      moderationBannerBody:
        'To protect everyone’s safety and dignity, all submissions are reviewed and approved by our coordination team before appearing on our page publicly. You may choose to post anonymously, and consent is required before anything is shared.',
      formHeading: 'Share Your Story',
      formSubheading: 'Your experience could bring comfort to someone reading late at night.',
      nameLabel: 'Your Name (or preferred display name)',
      namePlaceholder: 'e.g., Jordan M.',
      anonymousToggleLabel: 'Publish my story anonymously (hide my name)',
      topicSelectLabel: 'Story Theme',
      storyTitleLabel: 'Story Title',
      storyTitlePlaceholder: 'A brief, comforting title for your reflection',
      storyBodyLabel: 'Your Experience',
      storyBodyPlaceholder:
        'Share what helped you, what you learned, or a message for someone feeling overwhelmed today...',
      consentText:
        'I give my informed consent for The Dopamine Clarity Project to review, approve, and publish this story on the website (anonymously if selected above).',
      submitButton: 'Submit for Team Review',
      submittingButton: 'Submitting securely...',
      validationError:
        'Please include a title, your story, your name (or choose anonymous), and check the consent box before submitting.',
      lengthError:
        'Please enter a title (3–140 characters) and a story (10–4,000 characters).',
      submitFailedError:
        'Unable to send your story right now. Please check your connection and try again.',
      submittedSuccessTitle: 'Thank you for trusting us with your voice.',
      submittedSuccessBody:
        'Your story has been sent securely to our coordination team’s review queue. Once approved, it will appear on this Journal page.',
      pendingQueueHeading: 'Pending Submissions',
      pendingBadgeText: 'Awaiting Review',
      pendingEmptyText: 'No stories are waiting for review right now.',
      coordinatorHeading: 'Team Coordinator Review',
      coordinatorSubtitle:
        'Sign in with a verified Dopamine Clarity coordinator Google account to review incoming stories and publish approved reflections.',
      coordinatorSignInButton: 'Coordinator Sign In with Google',
      coordinatorSignOutButton: 'Sign out',
      coordinatorSignedInAs: 'Signed in as',
      coordinatorUnauthorizedNote:
        'This Google account does not have coordinator review permissions. Sign out or switch to a verified coordinator account.',
      approveButton: 'Approve & Publish',
      declineButton: 'Decline',
      unpublishButton: 'Move to Pending',
      deleteButton: 'Delete',
      pendingTabLabel: 'Pending',
      approvedTabLabel: 'Published',
      initialStories: [
        {
          id: 'story-1',
          title: 'Learning to stop blaming my brother and start listening',
          author: 'Maya T., Scarborough',
          isAnonymous: false,
          date: 'October 2026',
          topic: 'family',
          content:
            'For two years our family thought tough love meant silence or lectures. Once we learned how alcohol affects stress and dopamine in the brain, our tone shifted from anger to calm curiosity. The first time I asked “How heavy has this week been for you?” instead of judging, he finally agreed to call a counselor.',
          status: 'approved',
          consentGiven: true,
        },
        {
          id: 'story-2',
          title: 'Day 45 felt quieter than I ever imagined',
          author: 'Anonymous',
          isAnonymous: true,
          date: 'September 2026',
          topic: 'recovery',
          content:
            'I kept putting off calling a treatment centre because I believed my problem was not “bad enough.” Walking into residential care felt terrifying on day one, yet by week three I remembered what morning sunlight felt like without shame. If you are hesitating today, please make the call.',
          status: 'approved',
          consentGiven: true,
        },
        {
          id: 'story-3',
          title: 'Finding a RAAM clinic when everything felt urgent',
          author: 'Devon R., Toronto East',
          isAnonymous: false,
          date: 'August 2026',
          topic: 'community',
          content:
            'I did not have a family doctor and felt lost navigating Ontario’s system. ConnexOntario directed me to a walk-in Rapid Access Addiction Medicine clinic nearby. Nobody looked down on me. They treated me like a whole human being trying to get steady again.',
          status: 'approved',
          consentGiven: true,
        },
      ],
    },
    resources: {
      eyebrow: 'Trusted Support & Care',
      title: 'Recovery Resources & Ontario Helplines',
      intro:
        'Whether you need immediate crisis care, residential treatment in Scarborough, or reliable information for a family member, start with these verified organizations.',
      emergencyHeading: 'Immediate & 24/7 Crisis Support',
      emergencyBody:
        'If someone is experiencing an overdose, severe withdrawal, or immediate danger, please contact emergency services right away.',
      emergencyCards: [
        {
          title: 'Emergency Medical & Police',
          number: '911',
          note: '24/7 immediate life-saving emergency response across Canada',
          apaCitation: 'Government of Canada. (n.d.). Emergency services and 911 in Canada.',
        },
        {
          title: 'Suicide Crisis Helpline',
          number: '988',
          note: 'Call or text 988 anytime for free, bilingual emotional crisis support',
          apaCitation:
            'Suicide Crisis Helpline. (n.d.). 988: Suicide Crisis Helpline. https://988.ca/',
        },
        {
          title: 'Health811 Ontario',
          number: '811',
          note: 'Speak confidentially with a registered nurse 24/7 (1-866-797-0000)',
          apaCitation:
            'Government of Ontario. (n.d.). Health811: Connect with a registered nurse day or night. https://www.ontario.ca/page/health811',
        },
      ],
      newBeginnings: {
        eyebrow: 'Featured Scarborough Partner',
        title: 'New Beginnings Recovery Home',
        subtitle: 'Licensed Residential Addiction & Mental Health Treatment in Scarborough, ON',
        imageAlt: 'Exterior of New Beginnings Recovery Home brick and stone residence on a quiet tree-lined street in Scarborough',
        overview:
          'New Beginnings Recovery Home is a licensed inpatient drug & alcohol addiction and mental-health treatment centre located near the Scarborough Bluffs. They support substance addictions, co-occurring mental health disorders, such as PTSD, depression, and anxiety, relapse prevention and early recovery, life-skills, family and community reintegration.',
        processHeading: 'Their Treatment Process',
        processSteps: [
          {
            step: 'Step 01',
            title: 'Confidential Assessment & Admission',
            detail:
              'Reach out directly by phone or email for an intake conversation. New Beginnings offers immediate admissions, often avoiding long public waitlists, to welcome clients safely.',
          },
          {
            step: 'Step 02',
            title: '28-Day Structured Residential Care',
            detail:
              'Clients stay in a home-like environment during a four-week residential (28-day) program, with 24/7 supervision and on-call medical care. Individual therapy and group treatment is included, as well as treatment such as CBT, DBT, and SMART recovery.',
          },
          {
            step: 'Step 03',
            title: 'Holistic Biopsychosocial Healing',
            detail:
              'An interprofessional team, which includes physicians, addiction counselors, nutritionists, occupational therapists, and family therapists, work together on physical, emotional, social, and spiritual recovery.',
          },
          {
            step: 'Step 04',
            title: 'Family Engagement & Continuing Care',
            detail:
              'Recovery extends beyond 28 days. Family therapy and personalized aftercare planning help clients transition home with lasting community support.',
          },
        ],
        addressLabel: 'Location',
        addressValue: '69 Gradwell Drive, Scarborough, ON M1M 2N1',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        websiteLabel: 'Visit New Beginnings Website',
        contactCta: 'Inquire About Scarborough Care',
        apaCitation:
          'New Beginnings Recovery Home. (n.d.). Residential addiction and mental health treatment. https://newbeginningsrecovery.ca/',
      },
      directoryHeading: 'Ontario & National Support Directory',
      directoryNotice:
        'These resources are actively being updated to provide individuals and families with the greatest amount of support possible.',
      directoryCategories: {
        all: 'All Resources',
        helpline: '24/7 Helplines',
        treatment: 'Treatment & Clinics',
        youth: 'Youth & Families',
        research: 'Education & Research',
      },
      visitWebsiteLabel: 'Visit official website',
      availabilityLabel: 'Availability:',
      apaCitationLabel: 'APA 7th Edition Reference:',
      organizations: [
        {
          id: 'connex',
          name: 'ConnexOntario',
          category: 'helpline',
          region: 'Province-wide (Ontario)',
          description:
            'Free, confidential, bilingual navigation helping Ontarians find local detox, counselling, and addiction treatment programs.',
          phone: '1-866-531-2600',
          textInfo: 'Text CONNEX to 247247',
          website: 'https://www.connexontario.ca/',
          availability: '24/7 Free & Confidential',
          apaCitation:
            'ConnexOntario. (n.d.). Mental health, addiction and problem gambling help. https://www.connexontario.ca/',
        },
        {
          id: 'camh',
          name: 'Centre for Addiction and Mental Health (CAMH)',
          category: 'treatment',
          region: 'Toronto & Ontario',
          description:
            'Canada’s largest mental health and addiction teaching hospital, offering clinical care, family guides, and evidence-based treatment.',
          phone: '1-800-463-6273',
          website: 'https://www.camh.ca/',
          availability: 'Clinical hours & online resources',
          apaCitation:
            'Centre for Addiction and Mental Health. (n.d.). Mental health and addiction care. https://www.camh.ca/',
        },
        {
          id: 'raam',
          name: 'Rapid Access Addiction Medicine (RAAM) Clinics',
          category: 'treatment',
          region: 'Across Ontario',
          description:
            'Low-barrier walk-in medical clinics where individuals can receive addiction care, medication support, and referrals with no appointment or doctor referral required.',
          website: 'https://www.metaphi.ca/raam-clinics',
          availability: 'Walk-in clinic hours vary by city',
          apaCitation:
            'Mentoring, Education, and Clinical Tools for Addiction: Partners in Health Integration. (n.d.). Rapid Access Addiction Medicine (RAAM) clinics. https://www.metaphi.ca/raam-clinics',
        },
        {
          id: 'kids-help',
          name: 'Kids Help Phone',
          category: 'youth',
          region: 'Canada-wide',
          description:
            'Free, confidential 24/7 counselling, text support, and non-judgmental guidance for youth and young adults navigating substance use or family stress.',
          phone: '1-800-668-6868',
          textInfo: 'Text CONNECT to 686868',
          website: 'https://kidshelpphone.ca/',
          availability: '24/7 Youth Support',
          apaCitation:
            'Kids Help Phone. (n.d.). Free, confidential 24/7 support for youth. https://kidshelpphone.ca/',
        },
        {
          id: 'ccsa',
          name: 'Canadian Centre on Substance Use and Addiction (CCSA)',
          category: 'research',
          region: 'National',
          description:
            'Evidence-based national guidelines on alcohol and substance health, youth prevention toolkits, and stigma-reduction guides.',
          website: 'https://www.ccsa.ca/',
          availability: 'Open public research library',
          apaCitation:
            'Canadian Centre on Substance Use and Addiction. (n.d.). Substance use and addiction resources. https://www.ccsa.ca/',
        },
        {
          id: 'alpha-house',
          name: 'AlphaHouse',
          category: 'treatment',
          region: 'Toronto, ON',
          description:
            'A 4-month post-treatment residential supportive recovery program in an alcohol- and drug-free environment for self-identified men, non-binary people, trans males, and two-spirit individuals (18+) who have completed primary substance use treatment.',
          phone: '416-469-1700',
          website: 'https://www.alphahousetoronto.ca/',
          availability: 'Contact for bed availability & intake (647 Broadview Ave)',
          apaCitation:
            'Alpha House Toronto. (n.d.). Post-treatment residential supportive recovery program. https://www.alphahousetoronto.ca/',
        },
        {
          id: 'madison',
          name: 'Madison Community Services',
          category: 'treatment',
          region: 'Toronto, ON',
          description:
            'Community-based mental health and concurrent substance use organization supporting adults (16+) through recovery-oriented case management, supportive housing, drop-in spaces, and culturally responsive programs.',
          phone: '416-977-1333',
          website: 'https://madisoncs.org/',
          availability: 'Free publicly funded services (355 Church St)',
          apaCitation:
            'Madison Community Services. (n.d.). Community mental health and supportive housing programs. https://madisoncs.org/',
        },
      ],
    },
    donate: {
      eyebrow: 'Support the Cause',
      title: 'Help us make a difference!',
      intro:
        'As a student-led initiative, community donations allow us to expand our local outreach. The donations will go towards organizations and treatment centres that directly support those suffering from addiction.',
      prototypeNoticeTitle: 'Prototype Only · Completely Voluntary',
      prototypeNoticeBody:
        'Please note that this donations section is a prototype only—this form does not transmit, store, or process payment or personal information yet. Any support or contribution is completely voluntary.',
      frequencyLabel: 'Contribution Frequency',
      oneTimeLabel: 'One-Time Gift',
      monthlyLabel: 'Monthly Support',
      amountLabel: 'Select Amount (CAD)',
      customAmountPlaceholder: 'Custom CAD',
      donorNameLabel: 'Full Name (or Anonymous)',
      donorEmailLabel: 'Email for Confirmation',
      dedicateLabel: 'Optional message or dedication',
      donateButton: 'Preview Pledge (Prototype)',
      impactHeading: 'How Community Contributions Help',
      impactItems: [
        'Helps fund a student-led awareness initiative and educational sessions for families in Scarborough.',
        'Helps connect families with recovery services and support networks.',
        'Helps us collaborate with local organizations and recovery centres.',
      ],
      donationSuccessTitle: 'Prototype confirmation shown (no data sent).',
      donationSuccessBody:
        'Because this donations section is currently a prototype only, no information was transmitted, stored, or processed. Contributions are completely voluntary.',
    },
    contact: {
      eyebrow: 'Reach Out Anytime',
      title: 'Contact New Beginnings or Our Team',
      intro:
        'Whether you are seeking possible residential treatment in Scarborough, looking for educational workshops, or simply have questions about addiction, we welcome every message with care.',
      scarboroughCardTitle: 'New Beginnings Recovery Home (Scarborough)',
      scarboroughCardBody:
        'Seeking possible treatment in Scarborough or wanting clinical guidance? Connect directly with New Beginnings’ confidential admissions team.',
      projectCardTitle: 'The Dopamine Clarity Project',
      projectCardBody:
        'Have questions about our awareness project, school events, volunteering, or educational materials? Email our student team directly.',
      formTitle: 'Send a Direct Message',
      recipientLabel: 'Who would you like to reach?',
      recipientOptions: {
        project: 'The Dopamine Clarity Project (Education, Events, General)',
        newBeginnings: 'Scarborough Treatment Guidance / New Beginnings Inquiry',
      },
      nameLabel: 'Your Name',
      emailLabel: 'Your Email Address',
      phoneLabel: 'Phone Number',
      phoneOptional: '(Optional)',
      messageLabel: 'Your Question or Message',
      messagePlaceholder:
        'Share how we can help, or tell us what information you are looking for...',
      submitButton: 'Send Message',
      successTitle: 'Your pre-filled email draft is ready.',
      successBody:
        'Your email app should now open with your contact details and message addressed to our team. If it did not open automatically, click the button below to open your draft (or call New Beginnings at 1-647-482-6308 for urgent Scarborough care).',
      openDraftLabel: 'Open pre-filled email draft',
      errorRequired: 'Please enter your name, a valid email address, and your message.',
    },
    footer: {
      tagline: 'Breaking the cycle, sparking a revival.',
      verifiedNote:
        'Educational information reviewed alongside New Beginnings Recovery Home (Scarborough) and cited from multiple health organizations.',
      rights: 'The Dopamine Clarity Project · Student-Led Ontario Initiative',
      quickLinksHeading: 'Explore',
      supportHeading: 'Direct Contacts',
    },
  },

  fr: {
    brandName: 'The Dopamine Clarity Project',
    slogan: 'Briser le cycle, susciter un renouveau.',
    nav: {
      home: 'Accueil',
      about: 'À propos',
      education: 'Éducation',
      resources: 'Ressources',
      journal: 'Journal',
      references: 'Références',
      donate: 'Donner',
      contact: 'Contact',
    },
    topSupportStrip: {
      scarboroughLabel: 'Soutien à Scarborough et en Ontario',
      scarboroughText:
        'Vous cherchez un traitement à Scarborough ou souhaitez en savoir plus ? Contactez New Beginnings ou notre équipe :',
      newBeginningsPhone: '1-647-482-6308',
      newBeginningsEmail: 'info@newbeginningsrecovery.ca',
      projectEmail: 'thedopamineclarityproject@gmail.com',
      contactButton: 'Formulaire',
      languageLabel: 'Langue',
    },
    home: {
      eyebrow: 'Initiative étudiante de sensibilisation en Ontario',
      heroTitle: 'The Dopamine Clarity Project',
      heroSubtitle:
        'Vous n’avez pas à traverser cela seul. Sur notre site, nous offrons des informations éducatives faciles à comprendre sur la dépendance à l’alcool et aux drogues, un espace sécuritaire pour partager vos expériences et des parcours de rétablissement fiables en Ontario afin que vous receviez le meilleur soutien possible.',
      primaryCta: 'Explorer l’éducation',
      secondaryCta: 'Trouver du soutien',
      heroImageAlt: 'Petit groupe de personnes assises ensemble sur une plage ensoleillée dans une lumière dorée, symbole de soutien calme et de solidarité',
      heroCaption: 'Le rétablissement commence par une information exacte et des soins empreints de compassion.',
      overviewHeading: 'Prenez un moment pour explorer notre site Web',
      overviewIntro:
        'Que vous soyez inquiet pour vous-même, que vous souteniez un proche ou que vous cherchiez des informations précises sans termes compliqués, commencez là où vous vous sentez le plus à l’aise.',
      exploreLabel: 'Ouvrir la section',
      sectionCards: [
        {
          sectionId: 'about',
          number: '01.',
          title: 'À propos & Notre équipe',
          description:
            'Rencontrez les six étudiants qui ont fondé The Dopamine Clarity Project avec pour mission de réduire la stigmatisation entourant la dépendance dans la communauté.',
          action: 'Voir l’équipe',
        },
        {
          sectionId: 'education',
          number: '02.',
          title: 'Aperçu éducatif',
          description:
            'Découvrez comment la dépendance peut se développer dans le cerveau, les signes visibles, les effets physiques et mentaux, et quand demander de l’aide.',
          action: 'Lire le guide',
        },
        {
          sectionId: 'resources',
          number: '03.',
          title: 'Ressources & New Beginnings',
          description:
            'Découvrez le centre New Beginnings à Scarborough ainsi que les lignes d’aide gratuites 24/7 en Ontario, les cliniques RAAM et les urgences.',
          action: 'Voir les ressources',
        },
        {
          sectionId: 'journal',
          number: '04.',
          title: 'Journal communautaire',
          description:
            'Lisez des témoignages réels de rétablissement et de soutien familial, ou partagez votre histoire de façon anonyme après révision.',
          action: 'Lire & partager',
        },
        {
          sectionId: 'references',
          number: '05.',
          title: 'Références APA',
          description:
            'Chaque information éducative sur notre site Web est appuyée par des citations au format APA avec des liens directs vers les sources originales.',
          action: 'Voir les sources',
        },
        {
          sectionId: 'donate',
          number: '06.',
          title: 'Soutenir & Donner',
          description:
            'Découvrez comment les dons volontaires soutiennent notre sensibilisation locale et les centres de rétablissement.',
          action: 'Soutenir la cause',
        },
      ],
      verificationBanner: {
        heading: 'Information vérifiée avec soin',
        body: 'Chaque guide éducatif est validé par des sources scientifiques reconnues et révisé avec de véritables centres de traitement, dont New Beginnings Recovery Home à Scarborough.',
        cta: 'Découvrir New Beginnings',
      },
      urgentHelp: {
        heading: 'Besoin de parler à quelqu’un maintenant ?',
        body: 'Un soutien gratuit et confidentiel est disponible partout en Ontario à toute heure.',
        emergencyLabel: 'Urgence médicale : Composez le 911',
        helplineLabel: 'ConnexOntario 24/7 : 1-866-531-2600 (Texto CONNEX au 247247)',
        scarboroughLabel: 'New Beginnings Scarborough : 1-647-482-6308',
      },
      expanded: {
        aboutEyebrow: '01 · À propos et notre équipe',
        aboutCta: 'Lire notre histoire et rencontrer nos 6 coordinateurs',
        teamPreviewLabel: 'Équipe de coordination',
        educationEyebrow: '02 · Éducation en termes simples',
        educationTitle: 'Explorez nos six thèmes essentiels sur la dépendance et les soins',
        educationCta: 'Ouvrir le guide complet',
        resourcesEyebrow: '03 · Soins à Scarborough et en Ontario',
        resourcesTitle: 'Découvrir New Beginnings et les soins en Ontario',
        resourcesCta: 'Voir toutes les ressources et urgences',
        journalEyebrow: '04 · Journal communautaire',
        journalTitle: 'Des récits réels pour ne plus se sentir seul',
        journalReadCta: 'Lire tous les récits',
        journalShareCta: 'Partager votre histoire en toute sécurité',
        referencesEyebrow: '05 · Sources APA vérifiées',
        referencesTitle: 'Chaque information liée aux sources de santé publique',
        referencesCta: 'Voir les 23 références APA',
        supportEyebrow: '06 · Soutenir et nous joindre',
        supportTitle: 'Soutenez les familles de l’Ontario ou écrivez-nous',
        donateCta: 'En savoir plus sur les dons',
        contactCta: 'Contacter New Beginnings ou notre équipe',
      },
    },
    about: {
      eyebrow: 'Qui sommes-nous',
      title: 'Une initiative étudiante axée sur l’empathie et la sensibilisation aux comportements addictifs.',
      lead: '« Briser le cycle, susciter un renouveau. »',
      storyParagraphs: [
        'The Dopamine Clarity Project est une organisation dirigée par des étudiants qui vise à sensibiliser notre communauté aux dépendances à l’alcool et aux drogues. Notre objectif est d’améliorer la compréhension du public, de faciliter l’accès au soutien et de combattre la lourde stigmatisation qui réduit les gens au silence.',
        'Après avoir vu des proches lutter contre la dépendance, nous avons été profondément motivés à nous exprimer et à partager des connaissances claires et fiables pour éviter à d’autres familles de subir les effets douloureux de la dépendance.',
        'Grâce à nos actions de sensibilisation, nos recherches éducatives et nos événements communautaires, nous espérons relier les familles de l’Ontario à la compréhension et aux soins compatissants qu’elles méritent.',
      ],
      verificationHeading: 'Vérifié auprès de vrais centres de traitement',
      verificationBody:
        'Toutes les informations présentées sur ce site sont soigneusement vérifiées auprès d’organismes de santé publique et de véritables centres de traitement, tels que New Beginnings Recovery Home à Scarborough.',
      plansHeading: 'Nos objectifs et notre plan d’action',
      plans: [
        {
          number: '01.',
          title: 'Éducation multilingue accessible',
          detail:
            'Nous présentons des informations claires et faciles à comprendre en anglais, en français et en espagnol afin que chacun puisse apprendre sans barrière.',
        },
        {
          number: '02.',
          title: 'Liens directs vers les soins en Ontario',
          detail:
            'Nous pouvons vous aider à entrer en contact avec des centres locaux comme New Beginnings, des lignes d’aide gratuites 24/7 et les cliniques RAAM sans rendez-vous.',
        },
        {
          number: '03.',
          title: 'Créer un environnement sûr et réconfortant',
          detail:
            'Nous visons à organiser des événements communautaires et à offrir un journal modéré et sécuritaire où chacun peut partager son vécu et rappeler aux autres qu’ils ne sont jamais seuls.',
        },
      ],
      teamHeading: 'Rencontrez notre équipe !',
      teamSubheading: 'Six élèves du secondaire qui visent à réduire la stigmatisation entourant la dépendance.',
      communityImageAlt: 'Cercle de mains portant des bracelets de perles violettes réunies en signe d’unité et d’entraide',
      members: [
        {
          id: 'isla',
          name: 'Isla Mina',
          role: 'Coordinatrice de la sensibilisation et du projet',
          statement:
            'Dévouée à aller à la rencontre de la communauté et à organiser des événements de sensibilisation afin que les familles aient accès aux connaissances, aux ressources et au soutien nécessaires pour comprendre et combattre la dépendance.',
        },
        {
          id: 'aleena',
          name: 'Aleena Hijaz',
          role: 'Coordinatrice de la documentation',
          statement:
            'Supervise la documentation du projet et tient des registres précis de nos progrès afin que tout ce que nous publions reflète fidèlement nos initiatives et nos objectifs pour avoir un impact positif dans la société.',
        },
        {
          id: 'alyna',
          name: 'Alyna Zita Caldeira',
          role: 'Coordinatrice du design graphique et des communications',
          statement:
            'Axée sur la création de communications visuelles efficaces visant à éduquer le public et à remplacer la peur et la stigmatisation par de la chaleur et de la compassion.',
        },
        {
          id: 'marian',
          name: 'Marian Albert',
          role: 'Coordinatrice du design graphique et des communications',
          statement:
            'Axée sur la conception de supports éducatifs et de visuels de sensibilisation communautaire pour aider les familles à avancer avec confiance dans leur parcours.',
        },
        {
          id: 'ashwin',
          name: 'Ashwin Austin-Rogesan',
          role: 'Porte-parole communautaire',
          statement:
            'Représente notre mission étudiante auprès du public afin d’encourager des conversations ouvertes et respectueuses sur le rétablissement partout en Ontario.',
        },
        {
          id: 'clark',
          name: 'Clark Kent Soriano',
          role: 'Coordinateur des événements et de la logistique',
          statement:
            'Organise les événements de sensibilisation, les partenariats locaux et l’accueil des bénévoles.',
        },
      ],
      socialCard: {
        heading: 'Suivez notre parcours sur Instagram',
        handle: '@thedopamineclarity',
        body: 'Vous souhaitez soutenir notre cause ? Suivez-nous sur les réseaux sociaux pour rester informé, découvrir nos initiatives et trouver des moyens de vous impliquer !',
        buttonLabel: 'Voir @thedopamineclarity sur Instagram',
        url: 'https://www.instagram.com/thedopamineclarity/',
      },
    },
    education: {
      eyebrow: 'Aperçu éducatif',
      title: 'Vous aider à comprendre la dépendance à l’alcool et aux drogues.',
      intro:
        'La terminologie médicale peut sembler déroutante et accablante lorsqu’on cherche simplement des réponses ; voici donc des explications claires et simples, révisées avec de vrais professionnels et appuyées par des recherches citées.',
      plainLanguageNote: 'Cliquez sur un numéro de source (ex. [1]) pour consulter sa référence APA complète.',
      headerImageAlt: 'Bureau en bois baigné de soleil matinal avec cahiers ouverts, lavande séchée et tasse de tisane chaude',
      statsHeading: 'Le saviez-vous ?',
      statsIntro:
        'Savoir à quel point les troubles liés aux substances sont fréquents rappelle que personne n’est seul.',
      statsSourceLabel: 'Source : Association canadienne pour la santé mentale (ACSM) Ontario',
      statsSourceUrl: 'https://ontario.cmha.ca/addiction-and-substance-use-and-addiction/',
      statsItems: [
        {
          figure: '21 %',
          text: 'Au Canada, on estime que 21 % de la population, soit environ 1 Canadien sur 5, répondra aux critères d’un diagnostic de dépendance au cours de sa vie.',
        },
        {
          figure: '18 %',
          text: 'L’alcool est la substance la plus fréquemment associée à la dépendance : 18 % des Canadiens répondront aux critères d’une dépendance à l’alcool au cours de leur vie.',
        },
        {
          figure: '> 40 %',
          text: 'Plus de 40 % des Canadiens ont déjà consommé du cannabis au moins une fois.',
        },
        {
          figure: '10 %',
          text: 'On estime qu’environ 10 % de la population ontarienne consomme des substances de manière problématique.',
        },
      ],
      videosHeading: 'Vidéos éducatives de référence',
      videosIntro:
        'Si vous préférez apprendre par de courtes vidéos, consultez ces ressources utiles sur la dépendance, le cerveau et les traitements :',
      videosWatchLabel: 'Regarder sur YouTube',
      videos: [
        {
          label: 'Vidéo de référence 01',
          description: 'Comment les substances influencent le cerveau et la santé.',
          url: 'https://youtu.be/6fmhLcYSn-Y?si=r4gB8uo0wAsan-gC',
        },
        {
          label: 'Vidéo de référence 02',
          description: 'Comprendre les causes, les signes et les effets de la dépendance.',
          url: 'https://youtu.be/b6Dte96WdqM?si=iR8xUlD2a_A2zDpj',
        },
        {
          label: 'Vidéo de référence 03',
          description: 'Comment se développe le trouble lié à l’usage de substances et le rétablissement.',
          url: 'https://youtu.be/IcLtRTEP7eo?si=5__10RxrXtC9Nht8',
        },
        {
          label: 'Vidéo de référence 04',
          description: 'Découvrir les traitements et les approches de rétablissement.',
          url: 'https://youtu.be/aTS5OW85Og4?si=lF0Q3Zbo_aPmb6DE',
        },
      ],
      progressLabel: 'Progression de lecture',
      viewAllModeLabel: 'Guide complet',
      focusModeLabel: 'Un sujet à la fois',
      markReadLabel: 'Marquer comme lu',
      markedReadLabel: 'Lu',
      prevTopicLabel: 'Sujet précédent',
      nextTopicLabel: 'Sujet suivant',
      mythFactHeading: 'Idées reçues courantes',
      mythFactIntro: 'Sélectionnez une carte ci-dessous pour découvrir le fait vérifié derrière chaque idée reçue.',
      mythLabel: 'Idée reçue',
      factLabel: 'Fait vérifié',
      revealFactLabel: 'Voir le fait',
      hideFactLabel: 'Voir le mythe',
      mythFacts: [
        {
          myth: 'Il faut attendre qu’il arrive quelque chose de grave avant de demander de l’aide.',
          fact: 'Santé Canada et CAMH recommandent de demander du soutien dès que la consommation affecte votre santé, vos relations ou votre quotidien, sans attendre une crise.',
          citationId: 18,
        },
        {
          myth: 'Le trouble lié à l’usage de substances est seulement un manque de volonté.',
          fact: 'La dépendance est une maladie qui modifie l’activité de la dopamine dans le cerveau et peut être liée à la génétique, au stress, à la santé mentale ou à des médicaments prescrits.',
          citationId: 3,
        },
        {
          myth: 'Il n’existe qu’une seule façon de se rétablir.',
          fact: 'Chaque parcours diffère : le rétablissement peut combiner accompagnement médical du sevrage, thérapie (TCC, TCD, familiale) et soins ambulatoires ou résidentiels.',
          citationId: 7,
        },
      ],
      keyTakeawayLabel: 'Résumé',
      sourcesLabel: 'Sources citées :',
      viewReferenceLabel: 'Voir dans les références APA',
      topics: [
        {
          id: 'what-is-addiction',
          number: '01.',
          question: 'Qu’est-ce que la dépendance à l’alcool et aux drogues ?',
          paragraphs: [
            'La dépendance aux drogues, également appelée trouble lié à l’usage de substances (TUS), est une maladie qui entraîne des difficultés à contrôler l’utilisation d’une drogue légale ou illégale ou d’un médicament. Cela inclut de nombreuses substances, parmi lesquelles les plus courantes sont l’alcool, le cannabis et la nicotine. La dépendance peut pousser une personne à continuer de consommer malgré ses effets dangereux (Mayo Clinic, 2022).',
            'Le trouble lié à l’usage de substances peut être classé comme léger, modéré ou sévère. Lorsqu’une personne présente plus d’un TUS en même temps, on parle de trouble lié à l’usage de plusieurs substances (Cleveland Clinic, 2024).',
          ],
          keyTakeaway:
            'La dépendance est une maladie qui rend difficile l’arrêt de l’alcool, des drogues ou des médicaments malgré les risques. Elle peut être légère, modérée ou sévère.',
          citationIds: [2, 3],
        },
        {
          id: 'how-it-develops',
          number: '02.',
          question: 'Comment peut-elle se développer ?',
          paragraphs: [
            'Les dépendances à l’alcool et aux drogues se développent généralement sur une longue période. La consommation de substances affecte le système de récompense du cerveau en créant des sensations intenses de plaisir qui favorisent une consommation répétée et un désir accru de continuer.',
            'L’activité de la dopamine dans le cerveau augmente sous l’effet des substances (Cleveland Clinic, 2024). Le trouble lié à l’usage de substances peut être causé par de nombreux facteurs tels que la génétique, le stress, la pression sociale, les traits de personnalité et les troubles de santé mentale (Johns Hopkins Medicine, 2024).',
            'Pour certains, cela commence en essayant des drogues récréatives dans un cadre social, et pour d’autres, avec un médicament prescrit. La consommation peut devenir plus fréquente, les médicaments sur ordonnance comportant un risque de dépendance, en particulier les analgésiques opioïdes. La dépendance s’aggrave lorsqu’une personne a besoin de doses plus élevées pour ressentir le plaisir ou le soulagement recherché (Mayo Clinic, 2025).',
          ],
          keyTakeaway:
            'La dépendance s’installe souvent lentement. Le stress, la santé mentale, la génétique, l’entourage et le besoin de doses plus fortes y contribuent.',
          citationIds: [2, 3, 4, 5, 6],
        },
        {
          id: 'what-it-looks-like',
          number: '03.',
          question: 'À quoi ressemble-t-elle au quotidien ?',
          paragraphs: [
            'Une personne atteinte d’un trouble lié à l’usage de substances peut présenter des symptômes tels qu’une consommation accrue ou prolongée, l’incapacité de réduire ou de contrôler sa consommation et des difficultés à assumer ses responsabilités au travail, à l’école ou à la maison. La consommation devient son activité principale et une priorité (MyHealthAlberta, 2026). Elle passe également beaucoup de temps à se procurer la substance en délaissant d’autres activités (HealthLink BC, 2023).',
            'Lorsqu’elle tente d’arrêter ou de diminuer, elle peut ressentir des symptômes de sevrage physiques et mentaux : sueurs, tremblements, nausées, fatigue, fortes envies, anxiété, agitation, sautes d’humeur et baisse de moral. La dépendance à l’alcool peut aussi entraîner des pertes de mémoire (blackouts), des changements de personnalité et le déni du problème.',
          ],
          keyTakeaway:
            'Les signes incluent le besoin de doses plus grandes, la difficulté à réduire, la négligence des responsabilités et des symptômes de sevrage ou pertes de mémoire.',
          citationIds: [20, 21],
        },
        {
          id: 'body-and-mind',
          number: '04.',
          question: 'Comment affecte-t-elle le corps et la santé mentale ?',
          paragraphs: [
            'Sur le plan physique, une consommation importante d’alcool ou de drogues peut exercer un stress continu sur le foie, le cœur, l’estomac, le système immunitaire et le système nerveux, et peut affecter le sommeil profond, augmenter la tension artérielle, provoquer une fatigue chronique et accroître les risques à long terme de maladies cardiaques et hépatiques [9, 11].',
            'Les substances inhalées peuvent endommager ou détruire les cellules nerveuses du cerveau ou du système nerveux périphérique. La consommation de drogues augmente aussi le risque d’infections : le VIH et l’hépatite C (une maladie grave du foie) peuvent être transmis par le partage de matériel d’injection non stérile ou des rapports sexuels non protégés, et des infections cutanées comme la cellulite peuvent survenir après une exposition bactérienne liée aux injections [22]. En santé mentale, consommation et troubles psychiques coexistent souvent : l’anxiété, la dépression ou la schizophrénie peuvent même précéder la dépendance. Les substances peuvent aussi imiter ou masquer les symptômes de la dépression, de la panique, de la paranoïa et du brouillard mémoriel [12].',
          ],
          detailGroups: [
            {
              heading: 'Effets à court terme de l’alcool',
              intro: 'Boire au-delà des limites recommandées peut entraîner ces effets nocifs :',
              bullets: [
                'Blessures (accidents de la route, chutes, noyades, brûlures)',
                'Violences telles que l’homicide, le suicide, les violences sexuelles et conjugales',
                'Intoxication alcoolique : un taux élevé d’alcool dans le sang perturbe la respiration et le rythme cardiaque',
                'Surdose',
                'Infections transmissibles sexuellement lors de rapports non protégés',
                'Fausse couche, mortinaissance et ensemble des troubles causés par l’alcoolisation fœtale durant la grossesse (CDC, 2025).',
              ],
            },
            {
              heading: 'Effets à long terme de l’alcool',
              intro: 'Avec le temps, la consommation d’alcool peut provoquer :',
              bullets: [
                'Cancers : la consommation de vin rouge, de vin blanc ou de spiritueux est liée au cancer (y compris le cancer du sein chez les femmes), même à faible dose.',
                'Plus de 20 000 personnes décèdent chaque année de cancers liés à l’alcool aux États-Unis.',
                'Hypertension artérielle, maladies cardiaques, maladies du foie, AVC, troubles digestifs et affaiblissement du système immunitaire.',
                'Troubles de santé mentale, difficultés d’apprentissage à l’école ou au travail, troubles de mémoire comme la démence et tensions familiales ou amicales (CDC, 2025).',
              ],
            },
          ],
          keyTakeaway:
            'L’usage prolongé peut endommager les nerfs, augmenter les risques d’infections et de cancers, fatiguer les organes vitaux et aggraver l’anxiété ou la dépression.',
          citationIds: [9, 11, 12, 22, 23],
        },
        {
          id: 'when-to-seek-help',
          number: '05.',
          question: 'Quand faut-il demander de l’aide ?',
          paragraphs: [
            'Selon les organismes de santé canadiens comme CAMH et Santé Canada, vous devriez envisager de demander de l’aide pour une consommation d’alcool ou de drogues dès qu’elle commence à affecter votre santé, vos relations et votre vie. Il ne faut pas attendre qu’un événement grave survienne. Pensez à demander de l’aide si vous ressentez des envies intenses, une perte de contrôle, une baisse des résultats scolaires ou un malaise physique à l’arrêt. Parler à un adulte de confiance, un conseiller scolaire ou un médecin est une excellente démarche, et vous pouvez aussi contacter Jeunesse, J’écoute au 1-800-668-6868 ou texter CONNECT au 686868.',
          ],
          keyTakeaway:
            'Demandez de l’aide dès que la consommation affecte votre santé, vos études ou vos relations—contactez un adulte de confiance, un médecin ou Jeunesse, J’écoute (1-800-668-6868).',
          citationIds: [16, 17, 18, 19],
        },
        {
          id: 'types-of-treatment',
          number: '06.',
          question: 'Types de traitements disponibles',
          paragraphs: [
            'Pour beaucoup de personnes, la première étape du traitement consiste à se sevrer afin que la substance quitte le corps. Un professionnel de santé peut prescrire des médicaments pour atténuer les effets du sevrage selon la gravité de la dépendance. Le traitement peut ensuite inclure une thérapie et d’autres médicaments, car le TUS touche chacun différemment (Cleveland Clinic, 2024). Pour un rétablissement sûr, consultez toujours un professionnel de santé avant de prendre un médicament.',
          ],
          bulletHeading: 'Exemples de thérapies disponibles :',
          bulletItems: [
            {
              label: 'Suivi intensif dans la communauté (ACT)',
              description:
                'Services de santé mentale offerts dans la communauté, centrés sur les objectifs futurs de la personne.',
            },
            {
              label: 'Thérapie cognitivo-comportementale (TCC)',
              description:
                'Aide à repérer les schémas de comportement négatifs afin d’adopter des stratégies plus saines.',
            },
            {
              label: 'Gestion des contingences',
              description: 'Encourage la personne à se fixer et atteindre des objectifs personnels.',
            },
            {
              label: 'Thérapie comportementale dialectique (TCD)',
              description:
                'Aide à gérer les émotions intenses et à comprendre leur impact sur les comportements.',
            },
            {
              label: 'Thérapie familiale',
              description: 'Aide à améliorer les relations au sein de la famille ou d’un groupe.',
            },
            {
              label: 'Thérapie d’amélioration de la motivation',
              description: 'Encourage à franchir des étapes concrètes vers des objectifs réalistes.',
            },
            {
              label: 'Communautés thérapeutiques (CT)',
              description:
                'Traitement résidentiel à long terme favorisant des habitudes de vie plus saines.',
            },
            {
              label: 'Counseling ambulatoire',
              description:
                'Aide à comprendre sa dépendance, en cabinet médical ou en ligne.',
            },
            {
              label: 'Réadaptation en milieu résidentiel',
              description:
                'Un environnement bienveillant pour se rétablir à l’abri des distractions et tentations.',
            },
          ],
          externalLink: {
            introText:
              'Le site suivant contient des renseignements directs sur les centres de traitement et de rétablissement disponibles :',
            label: 'Toronto Central Healthline — Centres de traitement et de rétablissement',
            url: 'https://www.torontocentralhealthline.ca/listservices.aspx?id=10095',
          },
          keyTakeaway:
            'Chaque parcours est différent. Le traitement peut inclure un suivi médical du sevrage, une thérapie ou un séjour résidentiel—consultez toujours un médecin avant de prendre un médicament.',
          citationIds: [7, 8],
        },
      ],
      nextStepHeading: 'Prêt à explorer les options de soutien ?',
      nextStepBody:
        'Consultez les lignes d’aide en Ontario et le processus d’accompagnement de New Beginnings à Scarborough.',
      nextStepCta: 'Voir les ressources',
    },
    references: {
      title: 'Nos références et sources originales',
      intro:
        'Vous trouverez ci-dessous nos références pour chacune des informations éducatives présentées sur The Dopamine Clarity Project, appuyées sur des guides cliniques et des publications de santé publique. Suivez chaque lien pour accéder directement à la source originale.',
      verifiedNote: 'Format APA 7e édition · Vérifié avec les centres de traitement de Scarborough',
      openSourceLabel: 'Lire la source originale',
      topicLabel: 'Utilisé pour :',
    },
    journal: {
      eyebrow: 'Histoires réelles',
      title: 'Journal communautaire',
      intro:
        'Le rétablissement est réel et se vit au sein de la communauté. Lisez des réflexions et témoignages partagés par des personnes et des familles, ou publiez votre propre récit en toute maîtrise de votre confidentialité.',
      imageAlt: 'Carnet ouvert en lin posé à côté d’une tasse de tisane chaude à la lumière du matin',
      filterAll: 'Tous les récits',
      topics: {
        recovery: 'Rétablissement',
        family: 'Famille et proches',
        hope: 'Espoir',
        community: 'Soutien local',
      },
      anonymousLabel: 'Anonyme',
      moderationBannerTitle: 'Révision attentive avant publication',
      moderationBannerBody:
        'Pour protéger la sécurité et la dignité de chacun, toutes les soumissions sont examinées et approuvées par notre équipe de coordination avant de paraître publiquement sur notre page. Vous pouvez publier de façon anonyme, et votre consentement est requis avant tout partage.',
      formHeading: 'Partager votre histoire',
      formSubheading: 'Votre témoignage peut réconforter une personne qui cherche de l’espoir.',
      nameLabel: 'Votre nom (ou prénom)',
      namePlaceholder: 'ex. Camille L.',
      anonymousToggleLabel: 'Publier de façon anonyme (masquer mon nom)',
      topicSelectLabel: 'Thème du récit',
      storyTitleLabel: 'Titre de votre récit',
      storyTitlePlaceholder: 'Un titre court et apaisant',
      storyBodyLabel: 'Votre expérience',
      storyBodyPlaceholder: 'Partagez ce qui vous a aidé ou un mot d’encouragement...',
      consentText:
        'Je donne mon consentement explicite à The Dopamine Clarity Project pour examiner, approuver et publier ce récit sur le site (de manière anonyme si cochée ci-dessus).',
      submitButton: 'Envoyer pour révision',
      submittingButton: 'Envoi sécurisé en cours...',
      validationError:
        'Veuillez remplir le titre, le récit, votre nom (ou choisir l’anonymat) et cocher la case de consentement.',
      lengthError:
        'Veuillez saisir un titre (3 à 140 caractères) et un récit (10 à 4 000 caractères).',
      submitFailedError:
        'Impossible d’envoyer votre récit pour le moment. Veuillez vérifier votre connexion et réessayer.',
      submittedSuccessTitle: 'Merci pour votre confiance.',
      submittedSuccessBody:
        'Votre récit a été transmis en toute sécurité à notre équipe de coordination. Il sera publié sur cette page après approbation.',
      pendingQueueHeading: 'Soumissions en attente',
      pendingBadgeText: 'En attente de révision',
      pendingEmptyText: 'Aucun récit en attente de révision pour le moment.',
      coordinatorHeading: 'Espace de révision de l’équipe',
      coordinatorSubtitle:
        'Connectez-vous avec un compte Google de coordination vérifié pour consulter les récits reçus et publier ceux approuvés.',
      coordinatorSignInButton: 'Connexion coordonnateur (Google)',
      coordinatorSignOutButton: 'Se déconnecter',
      coordinatorSignedInAs: 'Connecté en tant que',
      coordinatorUnauthorizedNote:
        'Ce compte Google ne dispose pas des autorisations de révision. Déconnectez-vous ou utilisez un compte coordonnateur vérifié.',
      approveButton: 'Approuver et publier',
      declineButton: 'Refuser',
      unpublishButton: 'Remettre en attente',
      deleteButton: 'Supprimer',
      pendingTabLabel: 'En attente',
      approvedTabLabel: 'Publiés',
      initialStories: [
        {
          id: 'story-1-fr',
          title: 'Apprendre à écouter plutôt que juger mon frère',
          author: 'Maya T., Scarborough',
          isAnonymous: false,
          date: 'Octobre 2026',
          topic: 'family',
          content:
            'Pendant longtemps, nous pensions que les reproches allaient aider. Quand nous avons compris comment la dépendance modifie le stress dans le cerveau, nous avons changé de ton pour offrir une écoute calme. C’est ce jour-là qu’il a accepté de demander de l’aide.',
          status: 'approved',
          consentGiven: true,
        },
        {
          id: 'story-2-fr',
          title: 'Le jour 45 était plus paisible que je ne l’imaginais',
          author: 'Anonyme',
          isAnonymous: true,
          date: 'Septembre 2026',
          topic: 'recovery',
          content:
            'J’hésitais à appeler un centre en pensant que ma situation n’était pas assez grave. Demander de l’aide m’a permis de retrouver des matins sereins sans honte.',
          status: 'approved',
          consentGiven: true,
        },
      ],
    },
    resources: {
      eyebrow: 'Soutien et soins fiables',
      title: 'Ressources et lignes d’aide en Ontario',
      intro:
        'Accédez aux services d’urgence, au programme résidentiel de New Beginnings à Scarborough et aux organismes gratuits de soutien en Ontario.',
      emergencyHeading: 'Soutien d’urgence 24/7',
      emergencyBody:
        'En cas de surdose, de sevrage sévère ou de danger immédiat, appelez les secours sans attendre.',
      emergencyCards: [
        {
          title: 'Urgences médicales',
          number: '911',
          note: 'Intervention d’urgence immédiate 24/7 au Canada',
          apaCitation: 'Gouvernement du Canada. (s. d.). Services d’urgence et 911 au Canada.',
        },
        {
          title: 'Ligne d’aide en cas de crise',
          number: '988',
          note: 'Appelez ou textez au 988 gratuitement, en français ou en anglais',
          apaCitation:
            'Ligne d’aide en cas de crise de suicide. (s. d.). 988 : Ligne d’aide en cas de crise de suicide. https://988.ca/',
        },
        {
          title: 'Santé811 Ontario',
          number: '811',
          note: 'Parlez à une infirmière autorisée 24/7 (1-866-797-0000)',
          apaCitation:
            'Gouvernement de l’Ontario. (s. d.). Santé811 : Obtenez des conseils médicaux gratuits jour et nuit. https://www.ontario.ca/fr/page/sante811',
        },
      ],
      newBeginnings: {
        eyebrow: 'Partenaire à Scarborough',
        title: 'New Beginnings Recovery Home',
        subtitle: 'Centre résidentiel agréé de traitement des dépendances à Scarborough, ON',
        imageAlt: 'Façade extérieure de la résidence New Beginnings Recovery Home sur une rue calme et arborée de Scarborough',
        overview:
          'New Beginnings Recovery Home est un centre de traitement résidentiel agréé pour la dépendance aux drogues et à l’alcool ainsi que la santé mentale, situé près des falaises de Scarborough. Ils accompagnent les dépendances, les troubles concomitants (TSPT, dépression, anxiété), la prévention des rechutes, les compétences de vie et la réintégration familiale et communautaire.',
        processHeading: 'Leur processus de traitement',
        processSteps: [
          {
            step: 'Étape 01',
            title: 'Évaluation confidentielle et accueil rapide',
            detail:
              'Un entretien par téléphone ou courriel permet une admission immédiate, évitant souvent les longues listes d’attente publiques pour accueillir chaque personne en sécurité.',
          },
          {
            step: 'Étape 02',
            title: 'Programme résidentiel de 28 jours',
            detail:
              'Les clients séjournent dans un environnement chaleureux durant un programme résidentiel de quatre semaines (28 jours) avec supervision 24/7 et soins médicaux sur appel, incluant thérapie individuelle et de groupe (TCC, TCD, SMART Recovery).',
          },
          {
            step: 'Étape 03',
            title: 'Approche globale biopsychosociale',
            detail:
              'Une équipe interprofessionnelle — médecins, conseillers en toxicomanie, nutritionnistes, ergothérapeutes et thérapeutes familiaux — collabore au rétablissement physique, émotionnel, social et spirituel.',
          },
          {
            step: 'Étape 04',
            title: 'Suivi familial et plan d’après-soins',
            detail: 'Préparation progressive au retour à la maison avec soutien pour les proches.',
          },
        ],
        addressLabel: 'Adresse',
        addressValue: '69 Gradwell Drive, Scarborough, ON M1M 2N1',
        phoneLabel: 'Téléphone',
        emailLabel: 'Courriel',
        websiteLabel: 'Visiter le site de New Beginnings',
        contactCta: 'Contacter pour Scarborough',
        apaCitation:
          'New Beginnings Recovery Home. (n.d.). Residential addiction and mental health treatment. https://newbeginningsrecovery.ca/',
      },
      directoryHeading: 'Répertoire de soutien en Ontario et au Canada',
      directoryNotice:
        'Ces ressources sont continuellement mises à jour afin d’offrir aux personnes et aux familles le plus grand soutien possible.',
      directoryCategories: {
        all: 'Toutes',
        helpline: 'Lignes 24/7',
        treatment: 'Traitements & Cliniques',
        youth: 'Jeunes & Familles',
        research: 'Recherche',
      },
      visitWebsiteLabel: 'Visiter le site officiel',
      availabilityLabel: 'Disponibilité :',
      apaCitationLabel: 'Référence APA 7e édition :',
      organizations: [
        {
          id: 'connex',
          name: 'ConnexOntario',
          category: 'helpline',
          region: 'Partout en Ontario',
          description: 'Service gratuit, bilingue et confidentiel orientant vers les centres de désintoxication et de traitement en Ontario.',
          phone: '1-866-531-2600',
          textInfo: 'Texto CONNEX au 247247',
          website: 'https://www.connexontario.ca/',
          availability: '24/7 Gratuit et confidentiel',
          apaCitation:
            'ConnexOntario. (n.d.). Mental health, addiction and problem gambling help. https://www.connexontario.ca/',
        },
        {
          id: 'camh',
          name: 'Centre de toxicomanie et de santé mentale (CAMH)',
          category: 'treatment',
          region: 'Toronto et Ontario',
          description: 'Le plus grand hôpital universitaire canadien en santé mentale et dépendance.',
          phone: '1-800-463-6273',
          website: 'https://www.camh.ca/',
          availability: 'Soins cliniques et guides en ligne',
          apaCitation:
            'Centre for Addiction and Mental Health. (n.d.). Mental health and addiction care. https://www.camh.ca/',
        },
        {
          id: 'raam',
          name: 'Cliniques RAAM (Accès rapide)',
          category: 'treatment',
          region: 'Ontario',
          description: 'Cliniques sans rendez-vous et sans référence médicale offrant un soutien immédiat pour les troubles liés aux substances.',
          website: 'https://www.metaphi.ca/raam-clinics',
          availability: 'Heures variables selon la ville',
          apaCitation:
            'Mentoring, Education, and Clinical Tools for Addiction: Partners in Health Integration. (n.d.). Rapid Access Addiction Medicine (RAAM) clinics. https://www.metaphi.ca/raam-clinics',
        },
        {
          id: 'kids-help',
          name: 'Jeunesse, J’écoute',
          category: 'youth',
          region: 'Canada',
          description: 'Soutien gratuit et confidentiel 24/7 par téléphone ou texto pour les jeunes et leurs familles.',
          phone: '1-800-668-6868',
          textInfo: 'Texto PARLER au 686868',
          website: 'https://jeunessejecoute.ca/',
          availability: '24/7 Pour les jeunes',
          apaCitation:
            'Jeunesse, J’écoute. (s. d.). Soutien gratuit et confidentiel 24/7 pour les jeunes. https://jeunessejecoute.ca/',
        },
        {
          id: 'ccsa',
          name: 'Centre canadien sur les dépendances et l’usage de substances (CCDUS)',
          category: 'research',
          region: 'National',
          description: 'Recommandations nationales fondées sur des données probantes concernant l’alcool et les drogues.',
          website: 'https://www.ccsa.ca/fr',
          availability: 'Bibliothèque publique en ligne',
          apaCitation:
            'Centre canadien sur les dépendances et l’usage de substances. (s. d.). Ressources sur les dépendances et l’usage de substances. https://www.ccsa.ca/fr',
        },
        {
          id: 'alpha-house',
          name: 'AlphaHouse',
          category: 'treatment',
          region: 'Toronto, ON',
          description:
            'Programme résidentiel de soutien au rétablissement de 4 mois sans alcool ni drogue pour les hommes, personnes non binaires, hommes trans et personnes bispirituelles (18+) ayant complété un traitement primaire.',
          phone: '416-469-1700',
          website: 'https://www.alphahousetoronto.ca/',
          availability: 'Contacter pour la disponibilité (647 Broadview Ave)',
          apaCitation:
            'Alpha House Toronto. (n.d.). Post-treatment residential supportive recovery program. https://www.alphahousetoronto.ca/',
        },
        {
          id: 'madison',
          name: 'Madison Community Services',
          category: 'treatment',
          region: 'Toronto, ON',
          description:
            'Organisme communautaire en santé mentale et troubles concomitants offrant gestion de cas, logement avec soutien et programmes culturels pour adultes (16+).',
          phone: '416-977-1333',
          website: 'https://madisoncs.org/',
          availability: 'Services gratuits financés par le public (355 Church St)',
          apaCitation:
            'Madison Community Services. (n.d.). Community mental health and supportive housing programs. https://madisoncs.org/',
        },
      ],
    },
    donate: {
      eyebrow: 'Soutenir la cause',
      title: 'Aidez-nous à faire la différence !',
      intro:
        'En tant qu’initiative étudiante, les dons de la communauté nous permettent d’élargir notre rayonnement local. Les dons iront vers des organismes et des centres de traitement qui soutiennent directement les personnes souffrant de dépendance.',
      prototypeNoticeTitle: 'Prototype uniquement · Entièrement volontaire',
      prototypeNoticeBody:
        'Veuillez noter que cette section de dons est uniquement un prototype : ce formulaire ne transmet, ne stocke ni ne traite encore aucune information personnelle ou de paiement. Toute contribution est entièrement volontaire.',
      frequencyLabel: 'Fréquence',
      oneTimeLabel: 'Don unique',
      monthlyLabel: 'Soutien mensuel',
      amountLabel: 'Montant (CAD)',
      customAmountPlaceholder: 'Autre CAD',
      donorNameLabel: 'Nom complet (ou Anonyme)',
      donorEmailLabel: 'Courriel de confirmation',
      dedicateLabel: 'Message ou dédicace (facultatif)',
      donateButton: 'Aperçu du soutien (Prototype)',
      impactHeading: 'L’impact des contributions communautaires',
      impactItems: [
        'Aide à financer une initiative de sensibilisation menée par des étudiants et des séances éducatives pour les familles à Scarborough.',
        'Aide à relier les familles aux services de rétablissement et aux réseaux de soutien.',
        'Nous aide à collaborer avec des organismes locaux et des centres de rétablissement.',
      ],
      donationSuccessTitle: 'Confirmation du prototype affichée (aucune donnée envoyée).',
      donationSuccessBody:
        'Comme cette section est actuellement un prototype uniquement, aucune information n’a été transmise, stockée ni traitée. Les dons sont entièrement volontaires.',
    },
    contact: {
      eyebrow: 'Nous joindre',
      title: 'Contacter New Beginnings ou notre équipe',
      intro:
        'Pour envisager un traitement à Scarborough ou poser une question sur notre projet éducatif, écrivez-nous en toute confiance.',
      scarboroughCardTitle: 'New Beginnings Recovery Home (Scarborough)',
      scarboroughCardBody:
        'Vous envisagez un traitement à Scarborough ? Contactez directement l’équipe confidentielle de New Beginnings.',
      projectCardTitle: 'The Dopamine Clarity Project',
      projectCardBody:
        'Des questions sur notre projet étudiant, nos ressources ou le bénévolat ? Écrivez-nous directement.',
      formTitle: 'Envoyer un message direct',
      recipientLabel: 'Destinataire',
      recipientOptions: {
        project: 'The Dopamine Clarity Project (Information générale)',
        newBeginnings: 'Information sur les soins à Scarborough / New Beginnings',
      },
      nameLabel: 'Votre nom',
      emailLabel: 'Votre courriel',
      phoneLabel: 'Téléphone',
      phoneOptional: '(Facultatif)',
      messageLabel: 'Votre message',
      messagePlaceholder: 'Expliquez comment nous pouvons vous aider...',
      submitButton: 'Envoyer le message',
      successTitle: 'Votre brouillon de courriel prérempli est prêt.',
      successBody:
        'Votre application de messagerie devrait s’ouvrir avec vos coordonnées et votre message. Si elle ne s’est pas ouverte automatiquement, utilisez le bouton ci-dessous (ou appelez New Beginnings au 1-647-482-6308 pour une aide urgente à Scarborough).',
      openDraftLabel: 'Ouvrir le brouillon de courriel',
      errorRequired: 'Veuillez indiquer votre nom, un courriel valide et votre message.',
    },
    footer: {
      tagline: 'Briser le cycle, susciter un renouveau.',
      verifiedNote:
        'Informations éducatives révisées avec New Beginnings Recovery Home (Scarborough) et citées auprès de plusieurs organismes de santé.',
      rights: 'The Dopamine Clarity Project · Initiative étudiante en Ontario',
      quickLinksHeading: 'Explorer',
      supportHeading: 'Contacts directs',
    },
  },

  es: {
    brandName: 'The Dopamine Clarity Project',
    slogan: 'Rompiendo el ciclo, impulsando un renacer.',
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      education: 'Educación',
      resources: 'Recursos',
      journal: 'Diario',
      references: 'Referencias',
      donate: 'Donar',
      contact: 'Contacto',
    },
    topSupportStrip: {
      scarboroughLabel: 'Apoyo en Scarborough y Ontario',
      scarboroughText:
        '¿Buscas posible tratamiento en Scarborough o deseas aprender más? Contacta a New Beginnings o a nuestro equipo:',
      newBeginningsPhone: '1-647-482-6308',
      newBeginningsEmail: 'info@newbeginningsrecovery.ca',
      projectEmail: 'thedopamineclarityproject@gmail.com',
      contactButton: 'Formulario',
      languageLabel: 'Idioma',
    },
    home: {
      eyebrow: 'Iniciativa estudiantil de concientización en Ontario',
      heroTitle: 'The Dopamine Clarity Project',
      heroSubtitle:
        'No tienes que pasar por esto en soledad. En nuestro sitio web ofrecemos información educativa fácil de entender sobre la adicción al alcohol y las drogas, un espacio seguro para compartir tus experiencias y caminos confiables de recuperación en Ontario para que recibas el mejor apoyo.',
      primaryCta: 'Explorar educación',
      secondaryCta: 'Buscar apoyo y tratamiento',
      heroImageAlt: 'Pequeño grupo de personas sentadas juntas en una playa soleada bajo una luz cálida, símbolo de apoyo tranquilo y comunidad',
      heroCaption: 'La recuperación comienza al recibir información precisa y un cuidado compasivo.',
      overviewHeading: 'Tómate un momento para explorar nuestro sitio web',
      overviewIntro:
        'Ya sea que estés preocupado por ti mismo, apoyando a un ser querido o buscando información precisa sin términos confusos, comienza donde te sientas más cómodo.',
      exploreLabel: 'Abrir sección',
      sectionCards: [
        {
          sectionId: 'about',
          number: '01.',
          title: 'Sobre Nosotros y Equipo',
          description:
            'Conoce a los seis estudiantes que fundaron The Dopamine Clarity Project con la misión de reducir el estigma en torno a la adicción en la comunidad.',
          action: 'Conocer al equipo',
        },
        {
          sectionId: 'education',
          number: '02.',
          title: 'Resumen Educativo',
          description:
            'Aprende cómo puede desarrollarse la adicción en el cerebro, las señales visibles, los efectos físicos y mentales, y cuándo buscar ayuda.',
          action: 'Leer la guía',
        },
        {
          sectionId: 'resources',
          number: '03.',
          title: 'Recursos y New Beginnings',
          description:
            'Explora New Beginnings Recovery Home en Scarborough junto con líneas gratuitas 24/7 en Ontario, clínicas RAAM y servicios de emergencia.',
          action: 'Ver recursos',
        },
        {
          sectionId: 'journal',
          number: '04.',
          title: 'Diario Comunitario',
          description:
            'Lee reflexiones reales sobre recuperación y apoyo familiar, o comparte tu propia historia de forma anónima tras revisión del equipo.',
          action: 'Leer y compartir',
        },
        {
          sectionId: 'references',
          number: '05.',
          title: 'Referencias APA',
          description:
            'Cada dato educativo en nuestro sitio web está respaldado por citas en formato APA con enlaces directos a las fuentes originales.',
          action: 'Revisar fuentes',
        },
        {
          sectionId: 'donate',
          number: '06.',
          title: 'Apoyar y Donar',
          description:
            'Conoce cómo las donaciones voluntarias impulsan nuestra labor comunitaria y apoyan a centros locales de recuperación.',
          action: 'Apoyar la causa',
        },
      ],
      verificationBanner: {
        heading: 'Información revisada con cuidado clínico',
        body: 'Cada guía educativa en este sitio se contrasta con investigaciones de salud pública y se revisa junto a centros reales de tratamiento, como New Beginnings Recovery Home en Scarborough.',
        cta: 'Conocer New Beginnings',
      },
      urgentHelp: {
        heading: '¿Necesitas hablar con alguien ahora mismo?',
        body: 'Hay apoyo gratuito y confidencial disponible en todo Ontario las 24 horas.',
        emergencyLabel: 'Emergencia médica: Llama al 911',
        helplineLabel: 'ConnexOntario 24/7: 1-866-531-2600 (Texto CONNEX al 247247)',
        scarboroughLabel: 'New Beginnings Scarborough: 1-647-482-6308',
      },
      expanded: {
        aboutEyebrow: '01 · Sobre nosotros y equipo',
        aboutCta: 'Conoce nuestra historia y a los 6 coordinadores',
        teamPreviewLabel: 'Equipo de coordinación',
        educationEyebrow: '02 · Educación sencilla',
        educationTitle: 'Explora nuestros seis temas clave sobre adicción y tratamiento',
        educationCta: 'Abrir la guía educativa completa',
        resourcesEyebrow: '03 · Atención en Scarborough y Ontario',
        resourcesTitle: 'Cómo funcionan New Beginnings y los recursos en Ontario',
        resourcesCta: 'Ver todos los recursos y emergencias',
        journalEyebrow: '04 · Diario comunitario',
        journalTitle: 'Historias reales para acompañarte',
        journalReadCta: 'Leer todas las historias',
        journalShareCta: 'Compartir tu historia con seguridad',
        referencesEyebrow: '05 · Fuentes APA verificadas',
        referencesTitle: 'Cada dato enlazado a fuentes oficiales de salud pública',
        referencesCta: 'Ver las 23 referencias APA',
        supportEyebrow: '06 · Apoyar y contactar',
        supportTitle: 'Apoya a las familias de Ontario o envíanos un mensaje',
        donateCta: 'Conocer sobre donaciones',
        contactCta: 'Contactar a New Beginnings o a nosotros',
      },
    },
    about: {
      eyebrow: 'Quiénes somos',
      title: 'Una iniciativa estudiantil enfocada en brindar empatía y conciencia sobre las conductas adictivas.',
      lead: '“Rompiendo el ciclo, impulsando un renacer.”',
      storyParagraphs: [
        'The Dopamine Clarity Project es una organización liderada por estudiantes dedicada a crear conciencia sobre la adicción al alcohol y las drogas en nuestra comunidad. Nuestro objetivo es mejorar la comprensión pública, facilitar el acceso al apoyo y combatir el pesado estigma que mantiene en silencio a las personas.',
        'Después de ver a seres queridos luchar contra la adicción, nos sentimos profundamente motivados a alzar la voz y compartir conocimiento claro y confiable para evitar que más familias sufran los efectos dolorosos que la adicción puede traer.',
        'Mediante nuestro alcance comunitario, investigación educativa y eventos en la comunidad, esperamos conectar a las familias de Ontario con la comprensión y el cuidado compasivo que merecen.',
      ],
      verificationHeading: 'Verificado con centros reales de tratamiento',
      verificationBody:
        'Toda la información de este sitio web es revisada cuidadosamente y verificada junto a centros reales de tratamiento, como New Beginnings Recovery Home en Scarborough, Ontario.',
      plansHeading: 'Nuestras metas y plan de acción',
      plans: [
        {
          number: '01.',
          title: 'Educación multilingüe accesible',
          detail:
            'Presentamos información clara y fácil de entender en inglés, francés y español para que todas las personas puedan aprender sin barreras.',
        },
        {
          number: '02.',
          title: 'Puentes directos hacia atención en Scarborough y Ontario',
          detail:
            'Podemos ayudarte a conectar con centros de tratamiento locales como New Beginnings, líneas gratuitas 24/7 y clínicas RAAM sin cita previa.',
        },
        {
          number: '03.',
          title: 'Crear un entorno seguro y reconfortante',
          detail:
            'Buscamos organizar eventos comunitarios y ofrecer un diario seguro y moderado donde las personas puedan compartir sus experiencias y recordar a otros que nunca están solos.',
        },
      ],
      teamHeading: '¡Conoce a nuestro equipo!',
      teamSubheading: 'Seis estudiantes de secundaria comprometidos con reducir el estigma en torno a la adicción.',
      communityImageAlt: 'Círculo de manos con pulseras moradas reunidas en señal de unidad y apoyo mutuo',
      members: [
        {
          id: 'isla',
          name: 'Isla Mina',
          role: 'Coordinadora de Alcance y Proyecto',
          statement:
            'Dedicada a acercarse a la comunidad y organizar eventos de concientización para garantizar que las familias tengan acceso al conocimiento, los recursos y el apoyo necesarios para comprender y enfrentar la adicción.',
        },
        {
          id: 'aleena',
          name: 'Aleena Hijaz',
          role: 'Coordinadora de Documentación',
          statement:
            'Supervisa la documentación del proyecto y mantiene registros precisos de nuestro progreso para asegurar que todo lo que publicamos refleje fielmente nuestras iniciativas y metas, generando un impacto positivo en la sociedad.',
        },
        {
          id: 'alyna',
          name: 'Alyna Zita Caldeira',
          role: 'Coordinadora de Diseño Gráfico y Comunicaciones',
          statement:
            'Enfocada en crear comunicaciones visuales claras y efectivas que busquen educar al público y reemplazar el miedo y el estigma con calidez y compasión.',
        },
        {
          id: 'marian',
          name: 'Marian Albert',
          role: 'Coordinadora de Diseño Gráfico y Comunicaciones',
          statement:
            'Enfocada en diseñar materiales educativos y recursos visuales de alcance comunitario para ayudar a las familias a recorrer su camino con confianza.',
        },
        {
          id: 'ashwin',
          name: 'Ashwin Austin-Rogesan',
          role: 'Portavoz Comunitario',
          statement:
            'Representa nuestra misión estudiantil ante el público para animar a las personas a mantener conversaciones abiertas y respetuosas sobre la recuperación en todo Ontario.',
        },
        {
          id: 'clark',
          name: 'Clark Kent Soriano',
          role: 'Coordinador de Eventos y Logística',
          statement:
            'Organiza talleres de concientización, alianzas locales y actividades para voluntarios en la comunidad.',
        },
      ],
      socialCard: {
        heading: 'Sigue nuestra labor en Instagram',
        handle: '@thedopamineclarity',
        body: '¿Te gustaría apoyar nuestra causa? ¡Síguenos en redes sociales para mantenerte informado, conocer más sobre nuestras iniciativas y descubrir cómo participar!',
        buttonLabel: 'Visitar @thedopamineclarity en Instagram',
        url: 'https://www.instagram.com/thedopamineclarity/',
      },
    },
    education: {
      eyebrow: 'Resumen Educativo',
      title: 'Ayudándote a comprender la adicción al alcohol y las drogas.',
      intro:
        'La terminología médica puede resultar confusa y abrumadora cuando solo buscas respuestas; por eso compartimos explicaciones claras y sencillas, revisadas junto a profesionales reales y respaldadas por investigaciones citadas.',
      plainLanguageNote: 'Haz clic en cualquier número de cita (como [1]) para ver la fuente APA completa.',
      headerImageAlt: 'Escritorio de madera bajo la luz matinal con cuadernos abiertos, lavanda seca y una taza de té tibio',
      statsHeading: '¿Sabías que...?',
      statsIntro:
        'Conocer qué tan frecuentes son estas situaciones ayuda a recordar que ninguna persona ni familia está sola.',
      statsSourceLabel: 'Fuente: Canadian Mental Health Association (CMHA) Ontario',
      statsSourceUrl: 'https://ontario.cmha.ca/addiction-and-substance-use-and-addiction/',
      statsItems: [
        {
          figure: '21%',
          text: 'En Canadá, se estima que el 21% de la población, aproximadamente 1 de cada 5 canadienses, cumplirá los criterios de un diagnóstico de adicción en su vida.',
        },
        {
          figure: '18%',
          text: 'El alcohol es la sustancia más asociada con la adicción: el 18% de los canadienses cumplirá los criterios de adicción al alcohol durante su vida.',
        },
        {
          figure: '> 40%',
          text: 'Más del 40% de los canadienses ha consumido cannabis al menos una vez.',
        },
        {
          figure: '10%',
          text: 'Se estima que alrededor del 10% de la población de Ontario consume sustancias de manera problemática.',
        },
      ],
      videosHeading: 'Videos educativos de referencia',
      videosIntro:
        'Si prefieres aprender con videos breves, explora estas referencias sobre consumo de sustancias, salud cerebral y tratamiento:',
      videosWatchLabel: 'Ver en YouTube',
      videos: [
        {
          label: 'Video de referencia 01',
          description: 'Cómo el consumo de sustancias afecta al cerebro y la salud.',
          url: 'https://youtu.be/6fmhLcYSn-Y?si=r4gB8uo0wAsan-gC',
        },
        {
          label: 'Video de referencia 02',
          description: 'Comprender las causas, señales e impacto de la adicción.',
          url: 'https://youtu.be/b6Dte96WdqM?si=iR8xUlD2a_A2zDpj',
        },
        {
          label: 'Video de referencia 03',
          description: 'Cómo funciona el trastorno por uso de sustancias y la recuperación.',
          url: 'https://youtu.be/IcLtRTEP7eo?si=5__10RxrXtC9Nht8',
        },
        {
          label: 'Video de referencia 04',
          description: 'Opciones de tratamiento y apoyo en la recuperación.',
          url: 'https://youtu.be/aTS5OW85Og4?si=lF0Q3Zbo_aPmb6DE',
        },
      ],
      progressLabel: 'Progreso de lectura',
      viewAllModeLabel: 'Guía completa',
      focusModeLabel: 'Un tema a la vez',
      markReadLabel: 'Marcar tema como leído',
      markedReadLabel: 'Completado',
      prevTopicLabel: 'Tema anterior',
      nextTopicLabel: 'Siguiente tema',
      mythFactHeading: 'Malentendidos comunes',
      mythFactIntro: 'Selecciona cualquier tarjeta para descubrir el hecho médico detrás de ideas comunes.',
      mythLabel: 'Mito común',
      factLabel: 'Hecho verificado',
      revealFactLabel: 'Ver hecho',
      hideFactLabel: 'Ver mito',
      mythFacts: [
        {
          myth: 'Hay que esperar a que ocurra algo grave antes de pedir ayuda.',
          fact: 'CAMH y Health Canada recomiendan buscar apoyo en cuanto el consumo afecte tu salud, relaciones o vida diaria, sin esperar una crisis.',
          citationId: 18,
        },
        {
          myth: 'La adicción es solo una falta de fuerza de voluntad.',
          fact: 'El trastorno por uso de sustancias es una condición médica que altera la dopamina en el cerebro y puede deberse a genética, estrés, salud mental o medicamentos recetados.',
          citationId: 3,
        },
        {
          myth: 'El tratamiento es exactamente igual para todas las personas.',
          fact: 'Cada persona es distinta: la recuperación puede combinar manejo médico de abstinencia, terapia (TCC, TDC o familiar) y atención ambulatoria o residencial.',
          citationId: 7,
        },
      ],
      keyTakeawayLabel: 'Resumen',
      sourcesLabel: 'Fuentes citadas:',
      viewReferenceLabel: 'Ver en Referencias APA',
      topics: [
        {
          id: 'what-is-addiction',
          number: '01.',
          question: '¿Qué es la adicción al alcohol y las drogas?',
          paragraphs: [
            'La adicción a las drogas, también conocida como trastorno por uso de sustancias (TUS), es una enfermedad que provoca dificultades para controlar el uso de una droga legal o ilegal o de un medicamento. Esto incluye muchas sustancias, entre las más comunes el alcohol, la marihuana y la nicotina. La adicción puede llevar a seguir consumiendo a pesar de sus efectos peligrosos (Mayo Clinic, 2022).',
            'El trastorno por uso de sustancias puede clasificarse como leve, moderado o grave. Cuando una persona tiene más de un TUS al mismo tiempo, la afección se denomina trastorno por uso de polisustancias (Cleveland Clinic, 2024).',
          ],
          keyTakeaway:
            'La adicción es una condición de salud que dificulta controlar el consumo de alcohol, drogas o medicamentos, incluso cuando causan daño.',
          citationIds: [2, 3],
        },
        {
          id: 'how-it-develops',
          number: '02.',
          question: '¿Cómo puede desarrollarse?',
          paragraphs: [
            'Las adicciones al alcohol y las drogas suelen desarrollarse durante un largo periodo. Consumir sustancias afecta el sistema de recompensa cerebral al generar sensaciones intensas de placer que impulsan el uso repetido y el deseo de continuar.',
            'La actividad de la dopamina en el cerebro aumenta como resultado del consumo (Cleveland Clinic, 2024). El trastorno por uso de sustancias puede deberse a muchos factores, como genética, estrés, presión social, rasgos de personalidad y problemas de salud mental (Johns Hopkins Medicine, 2024).',
            'Para algunas personas comienza probando drogas recreativas en entornos sociales, y para otras con un medicamento recetado. El consumo puede volverse más frecuente, y los medicamentos recetados conllevan riesgo de adicción, en especial los analgésicos opioides. La adicción empeora cuando se necesitan dosis mayores para obtener placer y alivio (Mayo Clinic, 2025).',
          ],
          keyTakeaway:
            'La adicción suele desarrollarse poco a poco. El estrés, la salud mental, los antecedentes familiares, el entorno y necesitar dosis más altas influyen en ello.',
          citationIds: [2, 3, 4, 5, 6],
        },
        {
          id: 'what-it-looks-like',
          number: '03.',
          question: '¿Cómo se manifiesta?',
          paragraphs: [
            'Una persona con trastorno por uso de sustancias puede mostrar síntomas como consumir mayor cantidad o durante más tiempo, no poder reducir ni controlar su consumo y no cumplir con sus responsabilidades en el trabajo, la escuela o el hogar. El consumo se convierte en la actividad más importante y prioritaria (MyHealthAlberta, 2026). También suele dedicar mucho tiempo a conseguir la sustancia ignorando otras actividades (HealthLink BC, 2023).',
            'Al intentar detener o reducir el consumo, puede experimentar síntomas de abstinencia físicos y mentales: sudoración, temblores, náuseas, fatiga, antojos intensos, ansiedad, inquietud, cambios bruscos de ánimo y tristeza. La adicción al alcohol puede manifestarse con lagunas mentales, cambios de personalidad y negación del problema.',
          ],
          keyTakeaway:
            'Las señales incluyen aumentar el consumo, dificultad para reducirlo, descuidar responsabilidades y presentar abstinencia física o lagunas mentales.',
          citationIds: [20, 21],
        },
        {
          id: 'body-and-mind',
          number: '04.',
          question: '¿Cómo afecta físicamente al cuerpo y la salud mental?',
          paragraphs: [
            'Físicamente, el consumo intenso de alcohol o drogas puede generar un estrés continuo en el hígado, el corazón, el estómago, el sistema inmunitario y el sistema nervioso, además de afectar el sueño profundo, elevar la presión arterial, causar fatiga crónica y aumentar los riesgos a largo plazo de enfermedades cardíacas y hepáticas [9, 11].',
            'Los inhalantes pueden dañar o destruir las células nerviosas del cerebro o del sistema nervioso periférico. El consumo de drogas también aumenta el riesgo de infecciones como el VIH y la hepatitis C (una enfermedad hepática grave) al compartir material de inyección sin higiene o mantener relaciones sexuales sin protección, además de infecciones cutáneas como la celulitis por exposición bacteriana en inyecciones [22]. En salud mental, el consumo y los trastornos mentales pueden coexistir, y afecciones como ansiedad, depresión o esquizofrenia pueden aparecer antes de la adicción. Las sustancias incluso pueden imitar u ocultar los síntomas de depresión, pánico, paranoia y confusión mental [12].',
          ],
          detailGroups: [
            {
              heading: 'Efectos del consumo de alcohol a corto plazo',
              intro: 'Beber por encima del límite puede provocar estos efectos dañinos:',
              bullets: [
                'Lesiones (accidentes de tránsito, caídas, ahogamientos, quemaduras)',
                'Violencia como homicidio, suicidio, violencia sexual y violencia de pareja',
                'Intoxicación alcohólica: niveles altos en sangre afectan la respiración y el ritmo cardíaco',
                'Sobredosis',
                'Infecciones de transmisión sexual por relaciones sin protección',
                'Aborto espontáneo, muerte fetal y trastorno del espectro alcohólico fetal durante el embarazo (CDC, 2025).',
              ],
            },
            {
              heading: 'Efectos del consumo de alcohol a largo plazo',
              intro: 'Con el tiempo, el consumo de alcohol puede causar:',
              bullets: [
                'Cáncer: el consumo de vino tinto, vino blanco y licores se asocia con cáncer (incluido el cáncer de mama en mujeres), incluso con cualquier cantidad.',
                'Más de 20,000 personas fallecen cada año en Estados Unidos por cánceres relacionados con el alcohol.',
                'Presión arterial alta, enfermedades cardíacas y hepáticas, accidentes cerebrovasculares, problemas digestivos y debilitamiento del sistema inmunitario.',
                'Problemas de salud mental, dificultades de aprendizaje en la escuela o el trabajo, problemas de memoria como demencia y conflictos familiares o de amistad (CDC, 2025).',
              ],
            },
          ],
          keyTakeaway:
            'El consumo prolongado puede dañar los nervios, elevar el riesgo de infecciones y cáncer, afectar órganos vitales y empeorar la ansiedad, la tristeza o la memoria.',
          citationIds: [9, 11, 12, 22, 23],
        },
        {
          id: 'when-to-seek-help',
          number: '05.',
          question: '¿Cuándo debe buscar ayuda una persona?',
          paragraphs: [
            'Según organizaciones de salud en Canadá como CAMH y Health Canada, debes considerar buscar ayuda por abuso de alcohol o drogas en el momento en que empiecen a afectar tu salud, tus relaciones y tu vida. No debes esperar a que ocurra algo grave para pedir apoyo. Considera buscar ayuda si sientes antojos intensos, pérdida de control sobre la cantidad consumida, bajo rendimiento académico o malestar físico al detenerte. Hablar con un adulto, consejero escolar o médico es una excelente idea, y también puedes comunicarte con Kids Help Phone llamando al 1-800-668-6868 o enviando CONNECT por texto al 686868.',
          ],
          keyTakeaway:
            'Busca ayuda en cuanto el consumo afecte tu salud, estudios o relaciones—habla con un adulto, médico o Kids Help Phone (1-800-668-6868 o texto CONNECT al 686868).',
          citationIds: [16, 17, 18, 19],
        },
        {
          id: 'types-of-treatment',
          number: '06.',
          question: 'Tipos de tratamiento disponibles',
          paragraphs: [
            'Para muchas personas, el primer paso del tratamiento consiste en suspender la sustancia para que salga del organismo. Un profesional de la salud puede indicar medicación para aliviar la abstinencia según la gravedad de la adicción. El tratamiento posterior incluye terapia y otros medicamentos, ya que el TUS afecta a cada persona de forma distinta (Cleveland Clinic, 2024). Para una recuperación segura, consulta siempre a un profesional de salud antes de tomar cualquier medicamento.',
          ],
          bulletHeading: 'Algunos ejemplos de terapia incluyen:',
          bulletItems: [
            {
              label: 'Tratamiento comunitario asertivo (ACT)',
              description:
                'Servicios de salud mental en la comunidad enfocados en las metas futuras de la persona.',
            },
            {
              label: 'Terapia cognitivo-conductual (TCC)',
              description:
                'Ayuda a identificar patrones negativos de conducta y encontrar formas más sanas de afrontarlos.',
            },
            {
              label: 'Manejo de contingencias',
              description: 'Terapia que motiva a establecer y alcanzar metas personales.',
            },
            {
              label: 'Terapia dialéctico-conductual (TDC)',
              description:
                'Ayuda a manejar emociones intensas y comprender cómo influyen en la conducta.',
            },
            {
              label: 'Terapia familiar',
              description: 'Ayuda a mejorar las relaciones dentro de la familia o en grupo.',
            },
            {
              label: 'Terapia de mejora motivacional',
              description: 'Anima a dar pasos concretos hacia objetivos alcanzables.',
            },
            {
              label: 'Comunidades terapéuticas (TC)',
              description:
                'Tratamiento residencial a largo plazo para desarrollar conductas más saludables.',
            },
            {
              label: 'Consejería ambulatoria',
              description:
                'Ayuda a comprender la adicción desde un consultorio médico o en línea.',
            },
            {
              label: 'Rehabilitación residencial (internamiento)',
              description:
                'Un entorno de apoyo para recuperarse sin distracciones ni tentaciones.',
            },
          ],
          externalLink: {
            introText:
              'El siguiente sitio web contiene información directa sobre centros de tratamiento y recuperación disponibles:',
            label: 'Toronto Central Healthline — Centros de tratamiento y recuperación',
            url: 'https://www.torontocentralhealthline.ca/listservices.aspx?id=10095',
          },
          keyTakeaway:
            'El tratamiento es distinto para cada persona y puede incluir apoyo médico, terapia o programas residenciales; consulta siempre a un profesional antes de tomar medicamentos.',
          citationIds: [7, 8],
        },
      ],
      nextStepHeading: '¿Listo para conocer opciones reales de apoyo?',
      nextStepBody:
        'Explora líneas de ayuda en Ontario y el proceso de cuidado de New Beginnings en Scarborough.',
      nextStepCta: 'Ver recursos y tratamiento',
    },
    references: {
      title: 'Nuestras referencias y fuentes originales',
      intro:
        'A continuación se presentan nuestras referencias para cada dato educativo de The Dopamine Clarity Project, respaldadas por guías clínicas y publicaciones de salud pública. Haz clic en cualquier enlace para ir directamente a la fuente original.',
      verifiedNote: 'Formato APA 7.ª edición · Revisado junto a centros de tratamiento en Scarborough',
      openSourceLabel: 'Leer fuente original',
      topicLabel: 'Citado en:',
    },
    journal: {
      eyebrow: 'Historias Reales',
      title: 'Diario Comunitario',
      intro:
        'La recuperación es real y ocurre en comunidad. Lee reflexiones y diarios compartidos por personas y familias, o comparte tu propia historia con total control sobre tu privacidad.',
      imageAlt: 'Cuaderno abierto de lino junto a una taza de té tibio bajo luz suave de mañana',
      filterAll: 'Todas las historias',
      topics: {
        recovery: 'Recuperación',
        family: 'Familia y seres queridos',
        hope: 'Esperanza',
        community: 'Apoyo comunitario',
      },
      anonymousLabel: 'Anónimo',
      moderationBannerTitle: 'Revisión cuidadosa antes de publicar',
      moderationBannerBody:
        'Para proteger la seguridad y dignidad de todas las personas, nuestro equipo coordinador revisa y aprueba cada envío antes de publicarlo en la página. Puedes publicar de forma anónima y se requiere consentimiento antes de compartir.',
      formHeading: 'Comparte tu historia',
      formSubheading: 'Tu experiencia puede brindar consuelo a quien hoy busca esperanza.',
      nameLabel: 'Tu nombre (o seudónimo)',
      namePlaceholder: 'ej. Sofía R.',
      anonymousToggleLabel: 'Publicar de forma anónima (ocultar mi nombre)',
      topicSelectLabel: 'Tema de la historia',
      storyTitleLabel: 'Título de tu historia',
      storyTitlePlaceholder: 'Un título breve y reconfortante',
      storyBodyLabel: 'Tu experiencia',
      storyBodyPlaceholder: 'Comparte lo que te ayudó o un mensaje de ánimo para alguien más...',
      consentText:
        'Doy mi consentimiento explícito para que The Dopamine Clarity Project revise, apruebe y publique mi historia en este sitio web (de forma anónima si fue seleccionada).',
      submitButton: 'Enviar para revisión',
      submittingButton: 'Enviando de forma segura...',
      validationError:
        'Por favor completa el título, tu historia, tu nombre (o elige anonimato) y marca la casilla de consentimiento.',
      lengthError:
        'Ingresa un título (3 a 140 caracteres) y una historia (10 a 4,000 caracteres).',
      submitFailedError:
        'No se pudo enviar tu historia en este momento. Verifica tu conexión e inténtalo de nuevo.',
      submittedSuccessTitle: 'Gracias por confiar tu historia.',
      submittedSuccessBody:
        'Tu relato se envió de forma segura al equipo de coordinación. Una vez aprobado, aparecerá publicado en esta página.',
      pendingQueueHeading: 'Envíos pendientes',
      pendingBadgeText: 'Pendiente de revisión',
      pendingEmptyText: 'No hay historias esperando revisión en este momento.',
      coordinatorHeading: 'Revisión del equipo coordinador',
      coordinatorSubtitle:
        'Inicia sesión con una cuenta de Google autorizada del equipo para revisar historias recibidas y aprobar su publicación.',
      coordinatorSignInButton: 'Acceso coordinador con Google',
      coordinatorSignOutButton: 'Cerrar sesión',
      coordinatorSignedInAs: 'Sesión iniciada como',
      coordinatorUnauthorizedNote:
        'Esta cuenta de Google no tiene permisos de coordinación. Cierra sesión o cambia a una cuenta autorizada.',
      approveButton: 'Aprobar y publicar',
      declineButton: 'Rechazar',
      unpublishButton: 'Mover a pendientes',
      deleteButton: 'Eliminar',
      pendingTabLabel: 'Pendientes',
      approvedTabLabel: 'Publicadas',
      initialStories: [
        {
          id: 'story-1-es',
          title: 'Aprender a escuchar a mi hermano sin juzgarlo',
          author: 'Maya T., Scarborough',
          isAnonymous: false,
          date: 'Octubre 2026',
          topic: 'family',
          content:
            'Durante mucho tiempo pensamos que los regaños ayudarían. Al comprender cómo cambia el cerebro con la adicción, cambiamos el reproche por escucha tranquila. Ese día aceptó pedir ayuda profesional.',
          status: 'approved',
          consentGiven: true,
        },
        {
          id: 'story-2-es',
          title: 'El día 45 fue más sereno de lo que imaginé',
          author: 'Anónimo',
          isAnonymous: true,
          date: 'Septiembre 2026',
          topic: 'recovery',
          content:
            'Postergué pedir ayuda porque creía que mi caso no era tan grave. Hoy valoro despertar con calma y sin vergüenza.',
          status: 'approved',
          consentGiven: true,
        },
      ],
    },
    resources: {
      eyebrow: 'Apoyo y atención confiable',
      title: 'Recursos en Ontario y Servicios de Emergencia',
      intro:
        'Encuentra atención de emergencia 24/7, tratamiento residencial en Scarborough con New Beginnings y organizaciones gratuitas en Ontario.',
      emergencyHeading: 'Servicios de Emergencia y Crisis 24/7',
      emergencyBody:
        'Si alguien presenta una sobredosis, abstinencia severa o peligro inmediato, busca ayuda de emergencia ahora mismo.',
      emergencyCards: [
        {
          title: 'Emergencias Médicas',
          number: '911',
          note: 'Respuesta de emergencia inmediata las 24 horas en Canadá',
          apaCitation: 'Gobierno de Canadá. (s. f.). Servicios de emergencia y 911 en Canadá.',
        },
        {
          title: 'Línea de Crisis 988',
          number: '988',
          note: 'Llama o envía texto al 988 gratis en cualquier momento',
          apaCitation:
            'Suicide Crisis Helpline. (s. f.). 988: Línea de ayuda en crisis de suicidio. https://988.ca/',
        },
        {
          title: 'Health811 Ontario',
          number: '811',
          note: 'Habla con una enfermera registrada 24/7 (1-866-797-0000)',
          apaCitation:
            'Gobierno de Ontario. (s. f.). Health811: Consejos médicos gratuitos las 24 horas. https://www.ontario.ca/page/health811',
        },
      ],
      newBeginnings: {
        eyebrow: 'Socio destacado en Scarborough',
        title: 'New Beginnings Recovery Home',
        subtitle: 'Centro residencial acreditado de tratamiento en Scarborough, Ontario',
        imageAlt: 'Exterior de la residencia New Beginnings Recovery Home en una calle tranquila y arbolada de Scarborough',
        overview:
          'New Beginnings Recovery Home es un centro residencial autorizado para el tratamiento de adicciones al alcohol y las drogas y salud mental, ubicado cerca de Scarborough Bluffs. Apoyan adicciones, trastornos concurrentes como TEPT, depresión y ansiedad, prevención de recaídas, habilidades para la vida y reintegración familiar y comunitaria.',
        processHeading: 'Su proceso de tratamiento',
        processSteps: [
          {
            step: 'Paso 01',
            title: 'Evaluación confidencial e ingreso ágil',
            detail:
              'Comunícate por teléfono o correo para una conversación de admisión. New Beginnings ofrece ingresos inmediatos, evitando largas listas de espera públicas para recibirte de forma segura.',
          },
          {
            step: 'Paso 02',
            title: 'Programa residencial de 28 días',
            detail:
              'Los pacientes permanecen en un entorno hogareño durante un programa residencial de cuatro semanas (28 días), con supervisión 24/7 y atención médica disponible, incluyendo terapia individual y grupal como TCC, TDC y SMART Recovery.',
          },
          {
            step: 'Paso 03',
            title: 'Equipo integral biopsicosocial',
            detail:
              'Un equipo interprofesional —médicos, consejeros en adicciones, nutricionistas, terapeutas ocupacionales y terapeutas familiares— trabaja unido en la recuperación física, emocional, social y espiritual.',
          },
          {
            step: 'Paso 04',
            title: 'Apoyo familiar y seguimiento',
            detail: 'Terapia familiar y plan de continuidad para regresar a casa con herramientas firmes.',
          },
        ],
        addressLabel: 'Dirección',
        addressValue: '69 Gradwell Drive, Scarborough, ON M1M 2N1',
        phoneLabel: 'Teléfono',
        emailLabel: 'Correo electrónico',
        websiteLabel: 'Visitar sitio web de New Beginnings',
        contactCta: 'Consultar atención en Scarborough',
        apaCitation:
          'New Beginnings Recovery Home. (s. f.). Tratamiento residencial de adicciones y salud mental. https://newbeginningsrecovery.ca/',
      },
      directoryHeading: 'Directorio de apoyo en Ontario y Canadá',
      directoryNotice:
        'Estos recursos se están actualizando continuamente para brindar a las personas y familias la mayor cantidad de apoyo posible.',
      directoryCategories: {
        all: 'Todos',
        helpline: 'Líneas 24/7',
        treatment: 'Tratamiento y Clínicas',
        youth: 'Jóvenes y Familias',
        research: 'Investigación',
      },
      visitWebsiteLabel: 'Visitar sitio oficial',
      availabilityLabel: 'Disponibilidad:',
      apaCitationLabel: 'Referencia APA 7.ª edición:',
      organizations: [
        {
          id: 'connex',
          name: 'ConnexOntario',
          category: 'helpline',
          region: 'Todo Ontario',
          description: 'Orientación gratuita y confidencial para encontrar desintoxicación, terapia y tratamiento local.',
          phone: '1-866-531-2600',
          textInfo: 'Texto CONNEX al 247247',
          website: 'https://www.connexontario.ca/',
          availability: '24/7 Gratuito y confidencial',
          apaCitation:
            'ConnexOntario. (s. f.). Ayuda en salud mental, adicciones y ludopatía. https://www.connexontario.ca/',
        },
        {
          id: 'camh',
          name: 'Centre for Addiction and Mental Health (CAMH)',
          category: 'treatment',
          region: 'Toronto y Ontario',
          description: 'El hospital universitario de salud mental y adicciones más grande de Canadá.',
          phone: '1-800-463-6273',
          website: 'https://www.camh.ca/',
          availability: 'Atención clínica y guías en línea',
          apaCitation:
            'Centre for Addiction and Mental Health. (s. f.). Atención en salud mental y adicciones. https://www.camh.ca/',
        },
        {
          id: 'raam',
          name: 'Clínicas RAAM (Acceso Rápido)',
          category: 'treatment',
          region: 'Ontario',
          description: 'Clínicas sin cita previa ni referencia médica para atención inmediata en consumo de sustancias.',
          website: 'https://www.metaphi.ca/raam-clinics',
          availability: 'Horarios según la ciudad',
          apaCitation:
            'Mentoring, Education, and Clinical Tools for Addiction: Partners in Health Integration. (s. f.). Clínicas de Acceso Rápido en Medicina de Adicciones (RAAM). https://www.metaphi.ca/raam-clinics',
        },
        {
          id: 'kids-help',
          name: 'Kids Help Phone',
          category: 'youth',
          region: 'Todo Canadá',
          description: 'Apoyo gratuito 24/7 por teléfono o texto para jóvenes y familias.',
          phone: '1-800-668-6868',
          textInfo: 'Texto CONNECT al 686868',
          website: 'https://kidshelpphone.ca/',
          availability: '24/7 Apoyo juvenil',
          apaCitation:
            'Kids Help Phone. (s. f.). Apoyo gratuito y confidencial 24/7 para jóvenes. https://kidshelpphone.ca/',
        },
        {
          id: 'ccsa',
          name: 'Canadian Centre on Substance Use and Addiction (CCSA)',
          category: 'research',
          region: 'Nacional',
          description: 'Guías nacionales basadas en evidencia sobre salud, alcohol y reducción del estigma.',
          website: 'https://www.ccsa.ca/',
          availability: 'Biblioteca pública en línea',
          apaCitation:
            'Canadian Centre on Substance Use and Addiction. (s. f.). Recursos sobre uso de sustancias y adicción. https://www.ccsa.ca/',
        },
        {
          id: 'alpha-house',
          name: 'AlphaHouse',
          category: 'treatment',
          region: 'Toronto, ON',
          description:
            'Programa residencial de apoyo a la recuperación de 4 meses libre de alcohol y drogas para hombres, personas no binarias, hombres trans y personas de dos espíritus (18+) que hayan completado tratamiento primario.',
          phone: '416-469-1700',
          website: 'https://www.alphahousetoronto.ca/',
          availability: 'Consultar disponibilidad e ingreso (647 Broadview Ave)',
          apaCitation:
            'Alpha House Toronto. (s. f.). Programa residencial de apoyo a la recuperación. https://www.alphahousetoronto.ca/',
        },
        {
          id: 'madison',
          name: 'Madison Community Services',
          category: 'treatment',
          region: 'Toronto, ON',
          description:
            'Organización comunitaria de salud mental y uso concurrente de sustancias que brinda gestión de casos, vivienda de apoyo, espacios abiertos y servicios en español para adultos (16+).',
          phone: '416-977-1333',
          website: 'https://madisoncs.org/',
          availability: 'Servicios gratuitos financiados públicamente (355 Church St)',
          apaCitation:
            'Madison Community Services. (s. f.). Programas comunitarios de salud mental y vivienda de apoyo. https://madisoncs.org/',
        },
      ],
    },
    donate: {
      eyebrow: 'Apoya la causa',
      title: '¡Ayúdanos a marcar la diferencia!',
      intro:
        'Como iniciativa estudiantil, las donaciones de la comunidad nos permiten ampliar nuestro alcance local. Las donaciones se destinarán a organizaciones y centros de tratamiento que apoyan directamente a quienes sufren de adicción.',
      prototypeNoticeTitle: 'Solo prototipo · Totalmente voluntario',
      prototypeNoticeBody:
        'Ten en cuenta que esta sección de donaciones es solo un prototipo: este formulario aún no transmite, almacena ni procesa pagos ni datos personales. Cualquier contribución es completamente voluntaria.',
      frequencyLabel: 'Frecuencia',
      oneTimeLabel: 'Aporte único',
      monthlyLabel: 'Apoyo mensual',
      amountLabel: 'Selecciona un monto (CAD)',
      customAmountPlaceholder: 'Otro CAD',
      donorNameLabel: 'Nombre completo (o Anónimo)',
      donorEmailLabel: 'Correo de confirmación',
      dedicateLabel: 'Mensaje o dedicatoria opcional',
      donateButton: 'Vista previa de aporte (Prototipo)',
      impactHeading: 'Cómo ayudan las contribuciones comunitarias',
      impactItems: [
        'Ayuda a financiar una iniciativa de concientización liderada por estudiantes y sesiones educativas para familias en Scarborough.',
        'Ayuda a conectar a las familias con servicios de recuperación y redes de apoyo.',
        'Nos ayuda a colaborar con organizaciones locales y centros de recuperación.',
      ],
      donationSuccessTitle: 'Confirmación de prototipo mostrada (no se enviaron datos).',
      donationSuccessBody:
        'Dado que esta sección de donaciones es actualmente solo un prototipo, no se transmitió, almacenó ni procesó ninguna información. Las contribuciones son completamente voluntarias.',
    },
    contact: {
      eyebrow: 'Contáctanos',
      title: 'Contacta a New Beginnings o a nuestro equipo',
      intro:
        'Si buscas posible tratamiento en Scarborough o deseas conversar sobre educación y apoyo, estamos aquí para escucharte.',
      scarboroughCardTitle: 'New Beginnings Recovery Home (Scarborough)',
      scarboroughCardBody:
        '¿Buscas tratamiento en Scarborough? Comunícate directamente con el equipo confidencial de New Beginnings.',
      projectCardTitle: 'The Dopamine Clarity Project',
      projectCardBody:
        '¿Tienes preguntas sobre nuestra iniciativa, talleres o voluntariado? Escribe a nuestro equipo estudiantil.',
      formTitle: 'Enviar mensaje directo',
      recipientLabel: '¿A quién deseas escribir?',
      recipientOptions: {
        project: 'The Dopamine Clarity Project (Educación, Eventos, Consultas)',
        newBeginnings: 'Orientación sobre Scarborough / New Beginnings',
      },
      nameLabel: 'Tu nombre',
      emailLabel: 'Tu correo electrónico',
      phoneLabel: 'Teléfono',
      phoneOptional: '(Opcional)',
      messageLabel: 'Tu consulta o mensaje',
      messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
      submitButton: 'Enviar mensaje',
      successTitle: 'Tu borrador de correo prellenado está listo.',
      successBody:
        'Tu aplicación de correo debería abrirse con tus datos de contacto y mensaje. Si no se abrió automáticamente, usa el botón de abajo (o llama a New Beginnings al 1-647-482-6308 para atención urgente en Scarborough).',
      openDraftLabel: 'Abrir borrador de correo',
      errorRequired: 'Por favor ingresa tu nombre, un correo válido y tu mensaje.',
    },
    footer: {
      tagline: 'Rompiendo el ciclo, impulsando un renacer.',
      verifiedNote:
        'Información educativa revisada junto a New Beginnings Recovery Home (Scarborough) y citada de múltiples organizaciones de salud.',
      rights: 'The Dopamine Clarity Project · Iniciativa estudiantil en Ontario',
      quickLinksHeading: 'Explorar',
      supportHeading: 'Contactos directos',
    },
  },
};
