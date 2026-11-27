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
  };
  education: {
    eyebrow: string;
    title: string;
    intro: string;
    plainLanguageNote: string;
    statsHeading: string;
    statsIntro: string;
    statsSourceLabel: string;
    statsSourceUrl: string;
    statsItems: { figure: string; text: string }[];
    videosHeading: string;
    videosIntro: string;
    videosWatchLabel: string;
    videos: { label: string; description: string; url: string }[];
    keyTakeawayLabel: string;
    sourcesLabel: string;
    viewReferenceLabel: string;
    topics: EducationTopic[];
    nextStepHeading: string;
    nextStepBody: string;
    nextStepCta: string;
  };
  references: {
    eyebrow: string;
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
    validationError: string;
    submittedSuccessTitle: string;
    submittedSuccessBody: string;
    pendingQueueHeading: string;
    pendingBadgeText: string;
    approveDemoButton: string;
    approvedNote: string;
    initialStories: JournalStory[];
  };
  resources: {
    eyebrow: string;
    title: string;
    intro: string;
    emergencyHeading: string;
    emergencyBody: string;
    emergencyCards: { title: string; number: string; note: string }[];
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
    };
    directoryHeading: string;
    directoryCategories: Record<'all' | 'helpline' | 'treatment' | 'youth' | 'research', string>;
    visitWebsiteLabel: string;
    availabilityLabel: string;
    organizations: ResourceOrg[];
  };
  donate: {
    eyebrow: string;
    title: string;
    intro: string;
    donationTab: string;
    volunteerTab: string;
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
    impactItems: { amount: string; description: string }[];
    donationSuccessTitle: string;
    donationSuccessBody: string;
    volunteerHeading: string;
    volunteerIntro: string;
    volunteerRoleLabel: string;
    volunteerRoles: string[];
    volunteerAvailabilityLabel: string;
    volunteerMessageLabel: string;
    volunteerSubmitButton: string;
    volunteerSuccessTitle: string;
    volunteerSuccessBody: string;
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
      heroImageAlt: 'Serene sunlit Ontario lake surrounded by calm pine trees in morning mist',
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
            'Meet the six students behind The Dopamine Clarity Project, our mission to reduce stigma, and how we verify information with New Beginnings.',
          action: 'Meet the team',
        },
        {
          sectionId: 'education',
          number: '02.',
          title: 'Educational Overview',
          description:
            'Clear, gentle answers on how addiction develops in the brain, visible signs, physical and mental health effects, and when to seek help.',
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
            'Every educational statement on our website is backed by APA-formatted citations with direct links to CAMH, CCSA, NIDA, and Health Canada.',
          action: 'Inspect sources',
        },
        {
          sectionId: 'donate',
          number: '06.',
          title: 'Donate & Volunteer',
          description:
            'Support Ontario awareness workshops, multilingual print guides, and youth outreach by contributing or volunteering with our coordinators.',
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
        referencesCta: 'View all 15 APA references',
        supportEyebrow: '06 · Support & Reach Out',
        supportTitle: 'Stand with Ontario families or send us a message',
        donateCta: 'Donate or volunteer',
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
      teamHeading: 'Our Coordination Team',
      teamSubheading: 'Six students united by lived concern, community service, and careful research.',
      communityImageAlt: 'Warm sunlit community table where people share tea and conversation in comfort',
      members: [
        {
          id: 'isla',
          name: 'Isla Mina',
          role: 'Outreach and Project Coordinator',
          statement:
            'Hello, I am Isla! My goal is to ensure that families have access to the knowledge, resources, and support they need to understand and combat addiction through education and community outreach.',
        },
        {
          id: 'aleena',
          name: 'Aleena Hijaz',
          role: 'Documentation Coordinator',
          statement:
            'Focused on organizing evidence-based educational resources and maintaining accurate APA citations so every visitor can trust the facts they read.',
        },
        {
          id: 'alyna',
          name: 'Alyna Zita Caldeira',
          role: 'Graphic Design and Communications Coordinator',
          statement:
            'Dedicated to shaping calm, welcoming visual communications that replace fear and stigma with warmth and clarity.',
        },
        {
          id: 'marian',
          name: 'Marian Albert',
          role: 'Graphic Design and Communications Coordinator',
          statement:
            'Designing approachable educational materials and community outreach visuals that help families navigate support with confidence.',
        },
        {
          id: 'ashwin',
          name: 'Ashwin Austin-Rogesan',
          role: 'Community Spokesperson',
          statement:
            'Representing our student mission in public conversations to encourage open, respectful dialogue about recovery across Ontario.',
        },
        {
          id: 'clark',
          name: 'Clark Kent Soriano',
          role: 'Events and Logistics Coordinator',
          statement:
            'Coordinating awareness events, community partnerships, and volunteer initiatives so support reaches neighborhoods directly.',
        },
      ],
    },
    education: {
      eyebrow: 'Educational Overview',
      title: 'Understanding alcohol and drug addiction in plain, honest language.',
      intro:
        'Medical terminology can feel overwhelming when you are simply looking for answers. Below are clear, compassionate explanations reviewed alongside real treatment professionals and backed by cited research.',
      plainLanguageNote: 'Click any citation number (such as [1]) to inspect its full APA source.',
      statsHeading: 'Addiction Statistics in Canada & Ontario',
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
            'Because many people work hard to hide their struggle out of shame or fear of judgment, signs are not always dramatic. Early clues can include pulling away from close friends or family, sudden changes in sleep or energy, missed school or work responsibilities, or needing larger amounts to get the same effect [1, 10].',
            'You might also notice someone trying to cut back several times without success, feeling irritable or shaky when they go without a drink or substance, or organizing their schedule around when they can use next [1, 13].',
          ],
          keyTakeaway:
            'Common signs include pulling away from loved ones, big changes in sleep or mood, needing more of a substance, and finding it hard to cut back.',
          citationIds: [1, 10, 13],
        },
        {
          id: 'body-and-mind',
          number: '04.',
          question: 'How does it physically affect the body and mental health?',
          paragraphs: [
            'Physically, heavy alcohol or drug use places ongoing stress on the liver, heart, stomach, immune system, and nervous system. It can disrupt deep sleep, raise blood pressure, cause chronic fatigue, and increase long-term risks for heart and liver conditions [9, 11].',
            'Mentally and emotionally, substances can mimic or intensify depression, panic, paranoia, and memory fog. Many people use substances to quiet existing mental health pain, only to find that the comedown leaves their anxiety or sadness even heavier—a pairing doctors call concurrent disorders [11, 12].',
          ],
          keyTakeaway:
            'Long-term substance use tires out the body’s major organs and often makes anxiety, sadness, and poor sleep feel even worse.',
          citationIds: [9, 11, 12],
        },
        {
          id: 'when-to-seek-help',
          number: '05.',
          question: 'When should someone seek help?',
          paragraphs: [
            'A common myth is that someone must lose everything before seeking support. In truth, early conversations with a doctor, counselor, helpline, or treatment centre like New Beginnings lead to gentler, safer recovery [13, 14].',
            'Consider reaching out right away if alcohol or drugs are affecting your sleep, relationships, safety, finances, or emotional peace—or if stopping suddenly causes sweating, shaking, or severe distress, as medical supervision keeps withdrawal safe [1, 13, 14].',
          ],
          keyTakeaway:
            'You do not have to wait for a crisis. The best time to reach out is whenever substance use begins causing worry, stress, or harm.',
          citationIds: [1, 13, 14],
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
      eyebrow: 'Verified Scholarship',
      title: 'APA References & Original Sources',
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
        'Hearing honest voices reminds us that healing happens in community. Read reflections shared by individuals and families, or contribute your own story with full control over privacy.',
      imageAlt: 'Open linen-bound journal beside a warm cup of herbal tea and eucalyptus in soft light',
      filterAll: 'All Stories',
      topics: {
        recovery: 'Personal Recovery',
        family: 'Family & Loved Ones',
        hope: 'Quiet Hope',
        community: 'Community Support',
      },
      anonymousLabel: 'Anonymous',
      moderationBannerTitle: 'Careful Review Before Publishing',
      moderationBannerBody:
        'To protect every visitor’s emotional safety and dignity, all story submissions are reviewed and approved by our coordination team before appearing publicly. You may choose to post anonymously, and explicit consent is required before anything is shared.',
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
      validationError:
        'Please include a title, your story, your name (or choose anonymous), and check the consent box before submitting.',
      submittedSuccessTitle: 'Thank you for trusting us with your voice.',
      submittedSuccessBody:
        'Your story has been placed in our review queue. A team coordinator will carefully review it for safety and publish it once approved.',
      pendingQueueHeading: 'Your Submissions Awaiting Review',
      pendingBadgeText: 'Pending Coordinator Review',
      approveDemoButton: 'Simulate Coordinator Approval',
      approvedNote: 'Approved and published to the Journal below.',
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
        },
        {
          title: 'Suicide Crisis Helpline',
          number: '988',
          note: 'Call or text 988 anytime for free, bilingual emotional crisis support',
        },
        {
          title: 'Health811 Ontario',
          number: '811',
          note: 'Speak confidentially with a registered nurse 24/7 (1-866-797-0000)',
        },
      ],
      newBeginnings: {
        eyebrow: 'Featured Scarborough Partner',
        title: 'New Beginnings Recovery Home',
        subtitle: 'Licensed Residential Addiction & Mental Health Treatment in Scarborough, ON',
        imageAlt: 'Calm sunrise over Lake Ontario along the Scarborough Bluffs shoreline',
        overview:
          'New Beginnings Recovery Home is a CARF-accredited residential treatment centre near the Scarborough Bluffs. They review our educational material for clinical accuracy and provide compassionate, structured care for individuals seeking inpatient recovery.',
        processHeading: 'Their Treatment Process',
        processSteps: [
          {
            step: 'Step 01',
            title: 'Confidential Assessment & Admission',
            detail:
              'Reach out directly by phone or email for an intake conversation. New Beginnings offers timely admissions—often avoiding long public waitlists—to welcome clients safely.',
          },
          {
            step: 'Step 02',
            title: '28-Day Structured Residential Care',
            detail:
              'Clients stay in a calm home-like environment with 24/7 supervision and on-call medical care, stepping away from daily triggers to focus fully on stabilization.',
          },
          {
            step: 'Step 03',
            title: 'Holistic Biopsychosocial Healing',
            detail:
              'An interprofessional team—physicians, addiction counselors, nutritionists, occupational therapists, and family therapists—works together on physical, emotional, social, and spiritual recovery.',
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
      },
      directoryHeading: 'Ontario & National Support Directory',
      directoryCategories: {
        all: 'All Resources',
        helpline: '24/7 Helplines',
        treatment: 'Treatment & Clinics',
        youth: 'Youth & Families',
        research: 'Education & Research',
      },
      visitWebsiteLabel: 'Visit official website',
      availabilityLabel: 'Availability:',
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
        },
      ],
    },
    donate: {
      eyebrow: 'Support the Cause',
      title: 'Help us keep addiction education calm, free, and accessible.',
      intro:
        'As a student-led Ontario initiative, community generosity allows us to print multilingual pamphlets, host school and neighborhood workshops, and expand local outreach.',
      donationTab: 'Make a Donation',
      volunteerTab: 'Volunteer With Us',
      frequencyLabel: 'Contribution Frequency',
      oneTimeLabel: 'One-Time Gift',
      monthlyLabel: 'Monthly Support',
      amountLabel: 'Select Amount (CAD)',
      customAmountPlaceholder: 'Custom CAD',
      donorNameLabel: 'Full Name (or Anonymous)',
      donorEmailLabel: 'Email for Confirmation',
      dedicateLabel: 'Optional message or dedication',
      donateButton: 'Complete Pledge',
      impactHeading: 'How Community Contributions Help',
      impactItems: [
        {
          amount: '$15',
          description: 'Prints 30 multilingual pocket resource guides for Ontario community centres and schools.',
        },
        {
          amount: '$35',
          description: 'Supports translation updates and accessibility tools across English, French, and Spanish.',
        },
        {
          amount: '$75',
          description: 'Helps fund a student-led awareness workshop and Q&A session for families in Scarborough.',
        },
      ],
      donationSuccessTitle: 'Thank you for standing with Ontario families.',
      donationSuccessBody:
        'Your pledge record has been saved! Because The Dopamine Clarity Project is a student-led initiative, our coordinators will follow up via email with official contribution instructions.',
      volunteerHeading: 'Join Our Student & Community Volunteers',
      volunteerIntro:
        'Lend your time to graphic communications, event logistics, translation, or peer outreach across Ontario.',
      volunteerRoleLabel: 'Area of Interest',
      volunteerRoles: [
        'Community Outreach & Family Workshops',
        'Graphic Design & Social Media Clarity',
        'Research, Documentation & Translation (FR/ES)',
        'Events & Logistics Coordination',
      ],
      volunteerAvailabilityLabel: 'Weekly Availability (e.g., 2–4 hours)',
      volunteerMessageLabel: 'Why would you like to get involved?',
      volunteerSubmitButton: 'Submit Volunteer Interest',
      volunteerSuccessTitle: 'We are grateful you want to help.',
      volunteerSuccessBody:
        'Our Outreach & Logistics coordinators will review your interest and reach out from thedopamineclarityproject@gmail.com.',
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
      successTitle: 'Message received with care.',
      successBody:
        'Thank you for reaching out. Your inquiry has been logged for follow-up—for urgent Scarborough treatment questions, please also call New Beginnings at 1-647-482-6308.',
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
      heroImageAlt: 'Lac paisible de l’Ontario au lever du soleil entouré de pins calmes dans la brume matinale',
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
            'Découvrez les six étudiants derrière le projet, notre mission contre la stigmatisation et notre collaboration avec New Beginnings.',
          action: 'Voir l’équipe',
        },
        {
          sectionId: 'education',
          number: '02.',
          title: 'Aperçu éducatif',
          description:
            'Des réponses simples sur le développement de la dépendance, les signes visibles, les effets physiques et mentaux, et quand demander de l’aide.',
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
            'Chaque information éducative est appuyée par des citations APA avec des liens directs vers CAMH, CCSA, NIDA et Santé Canada.',
          action: 'Voir les sources',
        },
        {
          sectionId: 'donate',
          number: '06.',
          title: 'Donner & Bénévolat',
          description:
            'Soutenez nos ateliers de sensibilisation, nos brochures multilingues et nos actions communautaires en faisant un don ou du bénévolat.',
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
        referencesCta: 'Voir les 15 références APA',
        supportEyebrow: '06 · Soutenir et nous joindre',
        supportTitle: 'Soutenez les familles de l’Ontario ou écrivez-nous',
        donateCta: 'Donner ou devenir bénévole',
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
      teamHeading: 'Notre équipe de coordination',
      teamSubheading: 'Six étudiants unis par le service communautaire et la rigueur.',
      communityImageAlt: 'Salle communautaire lumineuse où des personnes partagent une conversation autour d’un thé',
      members: [
        {
          id: 'isla',
          name: 'Isla Mina',
          role: 'Coordinatrice de la sensibilisation et du projet',
          statement:
            'Bonjour, je m’appelle Isla ! Mon objectif est de veiller à ce que les familles disposent des connaissances, des ressources et du soutien nécessaires pour comprendre et combattre la dépendance grâce à l’éducation et à la sensibilisation communautaire.',
        },
        {
          id: 'aleena',
          name: 'Aleena Hijaz',
          role: 'Coordinatrice de la documentation',
          statement:
            'Chargée d’organiser les contenus éducatifs et de maintenir des citations APA exactes et vérifiables.',
        },
        {
          id: 'alyna',
          name: 'Alyna Zita Caldeira',
          role: 'Coordinatrice du design graphique et des communications',
          statement:
            'Conçoit des visuels apaisants et accueillants qui remplacent la peur par la compréhension.',
        },
        {
          id: 'marian',
          name: 'Marian Albert',
          role: 'Coordinatrice du design graphique et des communications',
          statement:
            'Élabore des supports de communication accessibles aidant les familles à s’orienter sereinement.',
        },
        {
          id: 'ashwin',
          name: 'Ashwin Austin-Rogesan',
          role: 'Porte-parole communautaire',
          statement:
            'Porte notre message étudiant dans la communauté pour encourager un dialogue ouvert et respectueux sur le rétablissement.',
        },
        {
          id: 'clark',
          name: 'Clark Kent Soriano',
          role: 'Coordinateur des événements et de la logistique',
          statement:
            'Organise les événements de sensibilisation, les partenariats locaux et l’accueil des bénévoles.',
        },
      ],
    },
    education: {
      eyebrow: 'Aperçu éducatif',
      title: 'Comprendre la dépendance à l’alcool et aux drogues en termes simples.',
      intro:
        'Les termes médicaux peuvent sembler intimidants lorsqu’on cherche simplement de l’aide. Voici des explications claires, sans jargon compliqué, appuyées par des sources scientifiques.',
      plainLanguageNote: 'Cliquez sur un numéro de source (ex. [1]) pour consulter sa référence APA complète.',
      statsHeading: 'Statistiques sur la dépendance au Canada et en Ontario',
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
            'Par peur du jugement, beaucoup cachent leur souffrance. On peut observer un éloignement des proches, des changements de sommeil, des absences au travail ou à l’école, ou le besoin de consommer davantage pour le même effet [1, 10].',
            'Une personne peut aussi essayer plusieurs fois d’arrêter sans y parvenir seule, ou ressentir de l’irritabilité et de l’agitation lorsqu’elle passe un moment sans consommer [1, 13].',
          ],
          keyTakeaway:
            'Les signes courants incluent l’isolement des proches, des changements de sommeil ou d’humeur, une tolérance accrue et la difficulté à réduire sa consommation.',
          citationIds: [1, 10, 13],
        },
        {
          id: 'body-and-mind',
          number: '04.',
          question: 'Comment affecte-t-elle le corps et la santé mentale ?',
          paragraphs: [
            'Sur le plan physique, l’alcool et les drogues sollicitent lourdement le foie, le cœur, l’estomac et le système nerveux, perturbant le sommeil profond et l’énergie quotidienne [9, 11].',
            'Sur le plan mental, ils peuvent amplifier l’anxiété, la dépression et les troubles de concentration. Soigner ensemble le corps et les émotions est essentiel pour retrouver un équilibre durable [11, 12].',
          ],
          keyTakeaway:
            'L’usage prolongé fatigue les organes essentiels et aggrave souvent l’anxiété, la tristesse et les troubles du sommeil.',
          citationIds: [9, 11, 12],
        },
        {
          id: 'when-to-seek-help',
          number: '05.',
          question: 'Quand faut-il demander de l’aide ?',
          paragraphs: [
            'Nul besoin d’attendre une crise grave pour consulter. Parler tôt à un médecin, à une ligne d’aide ou à un centre comme New Beginnings permet un accompagnement plus doux et sécuritaire [13, 14].',
            'Demandez de l’aide dès que la consommation affecte vos relations, votre santé ou votre sérénité—et consultez un professionnel avant d’arrêter brusquement si vous ressentez des tremblements ou un malaise physique [1, 13, 14].',
          ],
          keyTakeaway:
            'Il n’est pas nécessaire d’attendre une crise : le bon moment pour demander de l’aide est dès que la consommation inquiète ou cause du tort.',
          citationIds: [1, 13, 14],
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
      eyebrow: 'Sources vérifiées',
      title: 'Références APA et liens originaux',
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
        'Lire des expériences authentiques aide à se sentir moins seul. Découvrez des récits de rétablissement ou partagez votre vécu en toute confidentialité.',
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
        'Toutes les soumissions sont examinées et approuvées par notre équipe avant d’être publiées. Vous pouvez rester anonyme, et votre consentement explicite est requis.',
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
      validationError:
        'Veuillez remplir le titre, le récit, votre nom (ou choisir l’anonymat) et cocher la case de consentement.',
      submittedSuccessTitle: 'Merci pour votre confiance.',
      submittedSuccessBody:
        'Votre récit a été ajouté à notre file de révision et sera publié après approbation par notre équipe.',
      pendingQueueHeading: 'Vos soumissions en attente de révision',
      pendingBadgeText: 'En attente de révision',
      approveDemoButton: 'Simuler l’approbation de l’équipe',
      approvedNote: 'Approuvé et publié dans le Journal ci-dessous.',
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
        { title: 'Urgences médicales', number: '911', note: 'Intervention d’urgence immédiate 24/7 au Canada' },
        { title: 'Ligne d’aide en cas de crise', number: '988', note: 'Appelez ou textez au 988 gratuitement, en français ou en anglais' },
        { title: 'Santé811 Ontario', number: '811', note: 'Parlez à une infirmière autorisée 24/7 (1-866-797-0000)' },
      ],
      newBeginnings: {
        eyebrow: 'Partenaire à Scarborough',
        title: 'New Beginnings Recovery Home',
        subtitle: 'Centre résidentiel agréé de traitement des dépendances à Scarborough, ON',
        imageAlt: 'Lever de soleil apaisant sur le lac Ontario près des falaises de Scarborough',
        overview:
          'New Beginnings Recovery Home est un centre agréé CARF situé à Scarborough. Ils vérifient nos contenus éducatifs et accompagnent les personnes vers un rétablissement durable.',
        processHeading: 'Leur processus de traitement',
        processSteps: [
          {
            step: 'Étape 01',
            title: 'Évaluation confidentielle et accueil rapide',
            detail: 'Un entretien par téléphone ou courriel permet d’organiser une admission rapide et bienveillante.',
          },
          {
            step: 'Étape 02',
            title: 'Programme résidentiel de 28 jours',
            detail: 'Un cadre paisible avec supervision 24/7 et soins médicaux sur appel pour se stabiliser loin des déclencheurs.',
          },
          {
            step: 'Étape 03',
            title: 'Approche globale biopsychosociale',
            detail: 'Médecins, conseillers, nutritionnistes et thérapeutes familiaux collaborent pour le bien-être physique et mental.',
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
      },
      directoryHeading: 'Répertoire de soutien en Ontario et au Canada',
      directoryCategories: {
        all: 'Toutes',
        helpline: 'Lignes 24/7',
        treatment: 'Traitements & Cliniques',
        youth: 'Jeunes & Familles',
        research: 'Recherche',
      },
      visitWebsiteLabel: 'Visiter le site officiel',
      availabilityLabel: 'Disponibilité :',
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
        },
        {
          id: 'raam',
          name: 'Cliniques RAAM (Accès rapide)',
          category: 'treatment',
          region: 'Ontario',
          description: 'Cliniques sans rendez-vous et sans référence médicale offrant un soutien immédiat pour les troubles liés aux substances.',
          website: 'https://www.metaphi.ca/raam-clinics',
          availability: 'Heures variables selon la ville',
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
        },
        {
          id: 'ccsa',
          name: 'Centre canadien sur les dépendances et l’usage de substances (CCDUS)',
          category: 'research',
          region: 'National',
          description: 'Recommandations nationales fondées sur des données probantes concernant l’alcool et les drogues.',
          website: 'https://www.ccsa.ca/fr',
          availability: 'Bibliothèque publique en ligne',
        },
      ],
    },
    donate: {
      eyebrow: 'Soutenir la cause',
      title: 'Aidez-nous à garder l’éducation gratuite et accessible.',
      intro:
        'Votre soutien permet à notre initiative étudiante d’imprimer des guides multilingues et d’organiser des ateliers pour les familles de l’Ontario.',
      donationTab: 'Faire un don',
      volunteerTab: 'Devenir bénévole',
      frequencyLabel: 'Fréquence',
      oneTimeLabel: 'Don unique',
      monthlyLabel: 'Soutien mensuel',
      amountLabel: 'Montant (CAD)',
      customAmountPlaceholder: 'Autre CAD',
      donorNameLabel: 'Nom complet (ou Anonyme)',
      donorEmailLabel: 'Courriel de confirmation',
      dedicateLabel: 'Message ou dédicace (facultatif)',
      donateButton: 'Confirmer le soutien',
      impactHeading: 'L’impact de votre contribution',
      impactItems: [
        { amount: '15 $', description: 'Permet d’imprimer 30 guides multilingues pour les écoles et centres communautaires.' },
        { amount: '35 $', description: 'Soutient la traduction et l’accessibilité en français, anglais et espagnol.' },
        { amount: '75 $', description: 'Finance un atelier étudiant de sensibilisation pour les familles à Scarborough.' },
      ],
      donationSuccessTitle: 'Merci de soutenir les familles de l’Ontario.',
      donationSuccessBody:
        'Votre promesse de don est enregistrée. Nos coordinateurs vous contacteront par courriel avec les détails pratiques.',
      volunteerHeading: 'Rejoignez nos bénévoles',
      volunteerIntro: 'Participez à la sensibilisation, au design graphique, à la traduction ou à l’organisation d’événements.',
      volunteerRoleLabel: 'Domaine d’intérêt',
      volunteerRoles: [
        'Sensibilisation communautaire et ateliers',
        'Design graphique et communications',
        'Documentation et traduction (FR/ES)',
        'Logistique et événements',
      ],
      volunteerAvailabilityLabel: 'Disponibilité hebdomadaire',
      volunteerMessageLabel: 'Pourquoi souhaitez-vous participer ?',
      volunteerSubmitButton: 'Envoyer ma candidature',
      volunteerSuccessTitle: 'Merci pour votre engagement.',
      volunteerSuccessBody: 'Notre équipe vous répondra bientôt depuis thedopamineclarityproject@gmail.com.',
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
      successTitle: 'Message reçu avec bienveillance.',
      successBody:
        'Merci de nous avoir écrit. Pour une demande urgente concernant Scarborough, appelez également New Beginnings au 1-647-482-6308.',
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
      heroImageAlt: 'Lago sereno de Ontario al amanecer rodeado de pinos tranquilos bajo una neblina suave',
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
            'Conoce a los seis estudiantes detrás del proyecto, nuestra misión para reducir el estigma y nuestra verificación con New Beginnings.',
          action: 'Conocer al equipo',
        },
        {
          sectionId: 'education',
          number: '02.',
          title: 'Resumen Educativo',
          description:
            'Respuestas sencillas sobre cómo se desarrolla la adicción, señales visibles, efectos físicos y mentales, y cuándo buscar ayuda.',
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
            'Cada dato educativo está respaldado por citas en formato APA con enlaces directos a CAMH, CCSA, NIDA y Health Canada.',
          action: 'Revisar fuentes',
        },
        {
          sectionId: 'donate',
          number: '06.',
          title: 'Donar y Voluntariado',
          description:
            'Apoya talleres comunitarios, guías impresas multilingües y alcance juvenil contribuyendo o sumándote como voluntario.',
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
        referencesCta: 'Ver las 15 referencias APA',
        supportEyebrow: '06 · Apoyar y contactar',
        supportTitle: 'Apoya a las familias de Ontario o envíanos un mensaje',
        donateCta: 'Donar o ser voluntario',
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
      teamHeading: 'Nuestro equipo coordinador',
      teamSubheading: 'Seis estudiantes unidos por el servicio comunitario y la investigación responsable.',
      communityImageAlt: 'Sala comunitaria iluminada por el sol donde las personas conversan con calidez tomando té',
      members: [
        {
          id: 'isla',
          name: 'Isla Mina',
          role: 'Coordinadora de Alcance y Proyecto',
          statement:
            '¡Hola, soy Isla! Mi objetivo es asegurar que las familias tengan acceso al conocimiento, los recursos y el apoyo que necesitan para comprender y enfrentar la adicción mediante la educación y el alcance comunitario.',
        },
        {
          id: 'aleena',
          name: 'Aleena Hijaz',
          role: 'Coordinadora de Documentación',
          statement:
            'Dedicada a organizar las guías educativas y verificar cada referencia APA para garantizar información confiable.',
        },
        {
          id: 'alyna',
          name: 'Alyna Zita Caldeira',
          role: 'Coordinadora de Diseño Gráfico y Comunicaciones',
          statement:
            'Diseña mensajes visuales cálidos y serenos que reemplazan el miedo y el estigma por claridad.',
        },
        {
          id: 'marian',
          name: 'Marian Albert',
          role: 'Coordinadora de Diseño Gráfico y Comunicaciones',
          statement:
            'Crea materiales visuales accesibles que ayudan a las familias a encontrar apoyo con tranquilidad.',
        },
        {
          id: 'ashwin',
          name: 'Ashwin Austin-Rogesan',
          role: 'Portavoz Comunitario',
          statement:
            'Representa nuestra misión estudiantil para fomentar conversaciones abiertas y respetuosas sobre la recuperación en Ontario.',
        },
        {
          id: 'clark',
          name: 'Clark Kent Soriano',
          role: 'Coordinador de Eventos y Logística',
          statement:
            'Organiza talleres de concientización, alianzas locales y actividades para voluntarios en la comunidad.',
        },
      ],
    },
    education: {
      eyebrow: 'Resumen Educativo',
      title: 'Comprender la adicción al alcohol y las drogas en palabras sencillas.',
      intro:
        'La terminología médica puede resultar abrumadora cuando solo buscas claridad. Aquí tienes explicaciones simples, humanas y respaldadas por citas verificadas.',
      plainLanguageNote: 'Haz clic en cualquier número de cita (como [1]) para ver la fuente APA completa.',
      statsHeading: 'Estadísticas sobre adicciones en Canadá y Ontario',
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
            'Muchas personas ocultan su lucha por vergüenza. Las señales tempranas incluyen alejarse de la familia, cambios bruscos de energía o sueño, faltar a responsabilidades o necesitar dosis mayores [1, 10].',
            'También es común intentar reducir el consumo varias veces sin lograrlo solo, o sentir irritabilidad y temblores al pasar tiempo sin consumir [1, 13].',
          ],
          keyTakeaway:
            'Las señales frecuentes incluyen alejarse de seres queridos, cambios en el sueño o ánimo, necesitar mayor cantidad y dificultad para reducir el consumo.',
          citationIds: [1, 10, 13],
        },
        {
          id: 'body-and-mind',
          number: '04.',
          question: '¿Cómo afecta físicamente al cuerpo y la salud mental?',
          paragraphs: [
            'Físicamente, sobrecarga el hígado, el corazón, el estómago y el sistema nervioso, causando fatiga crónica y alteración del descanso profundo [9, 11].',
            'Mentalmente, puede empeorar la ansiedad, la depresión y la claridad emocional. Cuidar la salud física y emocional al mismo tiempo acelera una recuperación estable [11, 12].',
          ],
          keyTakeaway:
            'El consumo prolongado desgasta órganos importantes y suele empeorar la ansiedad, la tristeza y los problemas de sueño.',
          citationIds: [9, 11, 12],
        },
        {
          id: 'when-to-seek-help',
          number: '05.',
          question: '¿Cuándo debe buscar ayuda una persona?',
          paragraphs: [
            'Buscar orientación temprana con un médico, línea de apoyo o un centro como New Beginnings hace que el proceso sea más seguro y sereno [13, 14].',
            'Pide apoyo si afecta tu salud, tus relaciones o tu tranquilidad —y consulta a un profesional antes de suspender de golpe si hay síntomas físicos de abstinencia [1, 13, 14].',
          ],
          keyTakeaway:
            'No hace falta esperar una crisis. El mejor momento para pedir ayuda es cuando el consumo empieza a causar preocupación o malestar.',
          citationIds: [1, 13, 14],
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
      eyebrow: 'Fuentes verificadas',
      title: 'Referencias APA y enlaces originales',
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
        'Leer experiencias sinceras nos recuerda que nadie está solo. Explora reflexiones de recuperación o comparte tu propia historia con control total de tu privacidad.',
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
        'Todas las historias enviadas son revisadas y aprobadas por nuestro equipo antes de publicarse. Puedes permanecer en el anonimato y se requiere tu consentimiento explícito.',
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
      validationError:
        'Por favor completa el título, tu historia, tu nombre (o elige anonimato) y marca la casilla de consentimiento.',
      submittedSuccessTitle: 'Gracias por confiar tu historia.',
      submittedSuccessBody:
        'Tu relato entró en nuestra cola de revisión. Un coordinador lo leerá con cuidado y lo publicará tras aprobarlo.',
      pendingQueueHeading: 'Tus envíos en espera de revisión',
      pendingBadgeText: 'Pendiente de revisión',
      approveDemoButton: 'Simular aprobación del equipo',
      approvedNote: 'Aprobado y publicado en el Diario.',
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
        { title: 'Emergencias Médicas', number: '911', note: 'Respuesta de emergencia inmediata las 24 horas en Canadá' },
        { title: 'Línea de Crisis 988', number: '988', note: 'Llama o envía texto al 988 gratis en cualquier momento' },
        { title: 'Health811 Ontario', number: '811', note: 'Habla con una enfermera registrada 24/7 (1-866-797-0000)' },
      ],
      newBeginnings: {
        eyebrow: 'Socio destacado en Scarborough',
        title: 'New Beginnings Recovery Home',
        subtitle: 'Centro residencial acreditado de tratamiento en Scarborough, Ontario',
        imageAlt: 'Amanecer sereno sobre el lago Ontario junto a los acantilados de Scarborough',
        overview:
          'New Beginnings Recovery Home es un centro acreditado por CARF en Scarborough. Revisan nuestra información educativa y ofrecen cuidado residencial cercano y estructurado.',
        processHeading: 'Su proceso de tratamiento',
        processSteps: [
          {
            step: 'Paso 01',
            title: 'Evaluación confidencial e ingreso ágil',
            detail: 'Comunícate por teléfono o correo para una conversación de admisión sin largas listas de espera.',
          },
          {
            step: 'Paso 02',
            title: 'Programa residencial de 28 días',
            detail: 'Estancia tranquila con supervisión 24/7 y atención médica disponible para enfocarse en la recuperación.',
          },
          {
            step: 'Paso 03',
            title: 'Equipo integral biopsicosocial',
            detail: 'Médicos, consejeros, nutricionistas y terapeutas familiares trabajan juntos en tu bienestar físico y emocional.',
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
      },
      directoryHeading: 'Directorio de apoyo en Ontario y Canadá',
      directoryCategories: {
        all: 'Todos',
        helpline: 'Líneas 24/7',
        treatment: 'Tratamiento y Clínicas',
        youth: 'Jóvenes y Familias',
        research: 'Investigación',
      },
      visitWebsiteLabel: 'Visitar sitio oficial',
      availabilityLabel: 'Disponibilidad:',
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
        },
        {
          id: 'raam',
          name: 'Clínicas RAAM (Acceso Rápido)',
          category: 'treatment',
          region: 'Ontario',
          description: 'Clínicas sin cita previa ni referencia médica para atención inmediata en consumo de sustancias.',
          website: 'https://www.metaphi.ca/raam-clinics',
          availability: 'Horarios según la ciudad',
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
        },
        {
          id: 'ccsa',
          name: 'Canadian Centre on Substance Use and Addiction (CCSA)',
          category: 'research',
          region: 'Nacional',
          description: 'Guías nacionales basadas en evidencia sobre salud, alcohol y reducción del estigma.',
          website: 'https://www.ccsa.ca/',
          availability: 'Biblioteca pública en línea',
        },
      ],
    },
    donate: {
      eyebrow: 'Apoya la causa',
      title: 'Ayúdanos a mantener la educación gratuita y accesible.',
      intro:
        'Tu aporte permite a nuestra organización estudiantil imprimir guías multilingües y organizar talleres comunitarios para familias en Ontario.',
      donationTab: 'Hacer una donación',
      volunteerTab: 'Ser voluntario',
      frequencyLabel: 'Frecuencia',
      oneTimeLabel: 'Aporte único',
      monthlyLabel: 'Apoyo mensual',
      amountLabel: 'Selecciona un monto (CAD)',
      customAmountPlaceholder: 'Otro CAD',
      donorNameLabel: 'Nombre completo (o Anónimo)',
      donorEmailLabel: 'Correo de confirmación',
      dedicateLabel: 'Mensaje o dedicatoria opcional',
      donateButton: 'Confirmar aporte',
      impactHeading: 'Cómo ayuda tu contribución',
      impactItems: [
        { amount: '$15', description: 'Imprime 30 guías multilingües para escuelas y centros comunitarios.' },
        { amount: '$35', description: 'Apoya traducciones y accesibilidad en inglés, francés y español.' },
        { amount: '$75', description: 'Financia un taller estudiantil de concientización para familias en Scarborough.' },
      ],
      donationSuccessTitle: 'Gracias por apoyar a las familias de Ontario.',
      donationSuccessBody:
        'Tu intención de aporte quedó registrada. Nuestros coordinadores te escribirán por correo con los pasos siguientes.',
      volunteerHeading: 'Súmate como voluntario',
      volunteerIntro: 'Colabora en alcance comunitario, diseño, traducción o logística de eventos.',
      volunteerRoleLabel: 'Área de interés',
      volunteerRoles: [
        'Alcance comunitario y talleres familiares',
        'Diseño gráfico y comunicaciones',
        'Documentación y traducción (FR/ES)',
        'Eventos y logística',
      ],
      volunteerAvailabilityLabel: 'Disponibilidad semanal',
      volunteerMessageLabel: '¿Por qué te gustaría participar?',
      volunteerSubmitButton: 'Enviar solicitud',
      volunteerSuccessTitle: 'Agradecemos tu entusiasmo por ayudar.',
      volunteerSuccessBody: 'Nuestro equipo te contactará pronto desde thedopamineclarityproject@gmail.com.',
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
      successTitle: 'Mensaje recibido con cuidado.',
      successBody:
        'Gracias por escribirnos. Para consultas urgentes sobre Scarborough, llama también a New Beginnings al 1-647-482-6308.',
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
