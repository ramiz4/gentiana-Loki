'use strict';

// ========================================
// Translations
// ========================================
const translations = {
    en: {
        // Navigation
        navHome: 'Home',
        navAbout: 'About',
        navExperience: 'Experience',
        navEducation: 'Education',
        navContact: 'Contact',
        
        // Hero Section
        heroGreeting: "Hello, I'm",
        heroName: 'Gentiana Loki',
        heroDescriptionText: 'Motivated professional with experience in customer service, administration and finance. Strong organizational skills, communication skills and intercultural competence.',
        heroButton1: 'View Education',
        heroButton2: 'Get In Touch',
        heroTyping1: 'Customer Service Professional',
        heroTyping2: 'Administration Specialist',
        heroTyping3: 'Finance & Budget Expert',
        heroTyping4: 'Multilingual Communicator',
        
        // About Section
        aboutTitle: 'About Me',
        aboutSubtitle: 'Get to know me better',
        aboutHeading: 'Professional Profile',
        aboutText1: 'Motivated professional with experience in customer service, administration and finance. Strong organizational skills, communication skills and intercultural competence.',
        aboutText2: 'Goal is to promote customer satisfaction in the position as Junior Customer Advisor, maintain customer relationships and actively contribute to the success of the company.',
        aboutStat1Value: '10+',
        aboutStat1Label: 'Years Experience',
        aboutStat2Value: 'Master',
        aboutStat2Label: 'Banking & Finance',
        aboutStat3Value: '3',
        aboutStat3Label: 'Languages',
        aboutSkillsTitle: 'Key Skills & Competencies',
        aboutSkill1: 'Customer Service & Communication',
        aboutSkill2: 'Organization & Administration',
        aboutSkill3: 'Finance & Budget Management',
        aboutSkill4: 'MS Office (Word, Excel, PowerPoint)',
        aboutSkill5: 'Intercultural Competence',
        
        // Experience Section
        experienceTitle: 'Experience',
        experienceSubtitle: 'My professional journey',
        exp1Date: 'October 2012 - July 2015',
        exp1Title: 'Liaison and Executive Officer',
        exp1Company: 'Kosovo Justice Academy, Prishtina, Kosovo',
        exp1Desc: 'Organized appointments and correspondence for the Director. Planned and conducted meetings, events and external meetings. Interface to partner organizations (e.g. UN Women, USAID, GIZ). From May 2013: Expenditure Officer - budget monitoring, expense verification, documentation.',
        exp1Tag1: 'Administration',
        exp1Tag2: 'Finance',
        exp1Tag3: 'Events',
        exp2Date: 'July 2011 - September 2012',
        exp2Title: 'Executive Assistant',
        exp2Company: 'Kosovo Justice Academy, Prishtina, Kosovo',
        exp2Desc: 'Support with communication measures and press relations. Preparation of reports, briefings and documents. Participation in meetings with local and international stakeholders.',
        exp2Tag1: 'Communication',
        exp2Tag2: 'Documentation',
        exp2Tag3: 'Stakeholder Relations',
        exp3Date: 'September 2009 - February 2011',
        exp3Title: 'Sales Assistant',
        exp3Company: 'Mango/Ardi Co, Prishtina, Kosovo',
        exp3Desc: 'Customer advice and active sales. Design and replenishment of the sales area. Product presentation and customer service.',
        exp3Tag1: 'Customer Service',
        exp3Tag2: 'Sales',
        exp3Tag3: 'Retail',
        exp4Date: 'January 2008 - September 2008',
        exp4Title: 'Office Assistant',
        exp4Company: 'Lila/Lila Commerce, Suhareka, Kosovo',
        exp4Desc: 'Reception of visitors, telephone reception. General secretarial tasks, filing and correspondence.',
        exp4Tag1: 'Office Management',
        exp4Tag2: 'Reception',
        exp4Tag3: 'Administration',
        
        // Education Section
        educationTitle: 'Education & Qualifications',
        educationSubtitle: 'Academic background and certifications',
        edu1Title: 'Master of Arts',
        edu1Desc: 'Banking, Finance and Accounting - Fama University, Prishtina, Kosovo (October 2011 - December 2021)',
        edu1Note: 'Note: Studies were paused due to marriage and relocation from Kosovo to Germany, resuming after settling in the new country.',
        edu1Tag1: 'Banking',
        edu1Tag2: 'Finance',
        edu1Tag3: 'Accounting',
        edu2Title: 'Bachelor of Arts',
        edu2Desc: 'Banking, Finance and Accounting - Fama University, Prishtina, Kosovo (October 2006 - April 2010)',
        edu3Title: 'German Language - TELC',
        edu3Desc: 'Certificates A1 through B2. Fluent in German, demonstrating strong communication abilities.',
        edu3Tag1: 'German A1-B2',
        edu3Tag2: 'TELC Certified',
        edu4Title: 'English Language',
        edu4Desc: 'Pre-Intermediate English - New Age School, Prishtina. Fluent in English for professional communication.',
        edu4Tag1: 'English',
        edu4Tag2: 'Pre-Intermediate',
        edu5Title: 'Expenditure Officer Training',
        edu5Desc: 'Financial sector training from the Ministry of Finance, Prishtina. Specialized in budget monitoring and expense management.',
        edu5Tag1: 'Finance',
        edu5Tag2: 'Budget Management',
        edu6Title: 'High School Diploma (Matura)',
        edu6Desc: 'Secondary education completed at Jeta e Re, Suhareka, Kosovo (September 2003 - August 2006)',
        edu6Tag1: 'Secondary Education',
        edu6Tag2: 'Completed',
        
        // Contact Section
        contactTitle: 'Get In Touch',
        contactSubtitle: "Let's work together",
        contactHeading: "Let's talk about opportunities",
        contactText: "I'm open to discussing new opportunities, collaborations, and how I can contribute my skills to your organization.",
        contactEmail: 'Email',
        contactPhone: 'Phone',
        contactLocation: 'Location',
        contactLocationText: 'Winkelriedstrasse 2, 5430 Wettingen, Aargau, Switzerland',
        
        // Footer
        footerText: '© 2026 Gentiana Loki. All rights reserved.',
        footerContact: 'Contact'
    },
    de: {
        // Navigation
        navHome: 'Startseite',
        navAbout: 'Über mich',
        navExperience: 'Erfahrung',
        navEducation: 'Bildung',
        navContact: 'Kontakt',
        
        // Hero Section
        heroGreeting: 'Hallo, ich bin',
        heroName: 'Gentiana Loki',
        heroDescriptionText: 'Motivierte Fachkraft mit Erfahrung in Kundenservice, Verwaltung und Finanzen. Ausgeprägte organisatorische Fähigkeiten, Kommunikationsfähigkeiten und interkulturelle Kompetenz.',
        heroButton1: 'Bildung ansehen',
        heroButton2: 'Kontakt aufnehmen',
        heroTyping1: 'Kundenservice-Profi',
        heroTyping2: 'Verwaltungsspezialistin',
        heroTyping3: 'Finanz- & Budgetexpertin',
        heroTyping4: 'Mehrsprachige Kommunikatorin',
        
        // About Section
        aboutTitle: 'Über mich',
        aboutSubtitle: 'Lernen Sie mich besser kennen',
        aboutHeading: 'Berufsprofil',
        aboutText1: 'Motivierte Fachkraft mit Erfahrung in Kundenservice, Verwaltung und Finanzen. Ausgeprägte organisatorische Fähigkeiten, Kommunikationsfähigkeiten und interkulturelle Kompetenz.',
        aboutText2: 'Ziel ist es, die Kundenzufriedenheit in der Position als Junior Customer Advisor zu fördern, Kundenbeziehungen zu pflegen und aktiv zum Erfolg des Unternehmens beizutragen.',
        aboutStat1Value: '10+',
        aboutStat1Label: 'Jahre Erfahrung',
        aboutStat2Value: 'Master',
        aboutStat2Label: 'Banking & Finance',
        aboutStat3Value: '3',
        aboutStat3Label: 'Sprachen',
        aboutSkillsTitle: 'Kernkompetenzen',
        aboutSkill1: 'Kundenservice & Kommunikation',
        aboutSkill2: 'Organisation & Verwaltung',
        aboutSkill3: 'Finanzen & Budgetverwaltung',
        aboutSkill4: 'MS Office (Word, Excel, PowerPoint)',
        aboutSkill5: 'Interkulturelle Kompetenz',
        
        // Experience Section
        experienceTitle: 'Berufserfahrung',
        experienceSubtitle: 'Mein beruflicher Werdegang',
        exp1Date: 'Oktober 2012 - Juli 2015',
        exp1Title: 'Verbindungs- und Leitende Angestellte',
        exp1Company: 'Kosovo Justice Academy, Prishtina, Kosovo',
        exp1Desc: 'Organisation von Terminen und Korrespondenz für den Direktor. Planung und Durchführung von Meetings, Veranstaltungen und externen Treffen. Schnittstelle zu Partnerorganisationen (z.B. UN Women, USAID, GIZ). Ab Mai 2013: Ausgabenbeauftragte - Budgetüberwachung, Ausgabenprüfung, Dokumentation.',
        exp1Tag1: 'Verwaltung',
        exp1Tag2: 'Finanzen',
        exp1Tag3: 'Veranstaltungen',
        exp2Date: 'Juli 2011 - September 2012',
        exp2Title: 'Assistentin der Geschäftsleitung',
        exp2Company: 'Kosovo Justice Academy, Prishtina, Kosovo',
        exp2Desc: 'Unterstützung bei Kommunikationsmaßnahmen und Pressearbeit. Erstellung von Berichten, Briefings und Dokumenten. Teilnahme an Meetings mit lokalen und internationalen Stakeholdern.',
        exp2Tag1: 'Kommunikation',
        exp2Tag2: 'Dokumentation',
        exp2Tag3: 'Stakeholder-Beziehungen',
        exp3Date: 'September 2009 - Februar 2011',
        exp3Title: 'Verkaufsassistentin',
        exp3Company: 'Mango/Ardi Co, Prishtina, Kosovo',
        exp3Desc: 'Kundenberatung und aktiver Verkauf. Gestaltung und Auffüllung der Verkaufsfläche. Produktpräsentation und Kundenservice.',
        exp3Tag1: 'Kundenservice',
        exp3Tag2: 'Verkauf',
        exp3Tag3: 'Einzelhandel',
        exp4Date: 'Januar 2008 - September 2008',
        exp4Title: 'Büroassistentin',
        exp4Company: 'Lila/Lila Commerce, Suhareka, Kosovo',
        exp4Desc: 'Empfang von Besuchern, Telefonempfang. Allgemeine Sekretariatsaufgaben, Ablage und Korrespondenz.',
        exp4Tag1: 'Büromanagement',
        exp4Tag2: 'Empfang',
        exp4Tag3: 'Verwaltung',
        
        // Education Section
        educationTitle: 'Bildung & Qualifikationen',
        educationSubtitle: 'Akademischer Hintergrund und Zertifizierungen',
        edu1Title: 'Master of Arts',
        edu1Desc: 'Banking, Finance and Accounting - Fama Universität, Prishtina, Kosovo (Oktober 2011 - Dezember 2021)',
        edu1Note: 'Hinweis: Das Studium wurde aufgrund von Heirat und Umzug von Kosovo nach Deutschland unterbrochen und nach der Eingewöhnung im neuen Land fortgesetzt.',
        edu1Tag1: 'Banking',
        edu1Tag2: 'Finanzen',
        edu1Tag3: 'Buchhaltung',
        edu2Title: 'Bachelor of Arts',
        edu2Desc: 'Banking, Finance and Accounting - Fama Universität, Prishtina, Kosovo (Oktober 2006 - April 2010)',
        edu3Title: 'Deutsche Sprache - TELC',
        edu3Desc: 'Zertifikate A1 bis B2. Fließend in Deutsch mit ausgeprägten Kommunikationsfähigkeiten.',
        edu3Tag1: 'Deutsch A1-B2',
        edu3Tag2: 'TELC Zertifiziert',
        edu4Title: 'Englische Sprache',
        edu4Desc: 'Pre-Intermediate Englisch - New Age School, Prishtina. Fließend in Englisch für professionelle Kommunikation.',
        edu4Tag1: 'Englisch',
        edu4Tag2: 'Pre-Intermediate',
        edu5Title: 'Ausgabenbeauftragte Schulung',
        edu5Desc: 'Finanzsektor-Schulung vom Finanzministerium, Prishtina. Spezialisiert auf Budgetüberwachung und Ausgabenverwaltung.',
        edu5Tag1: 'Finanzen',
        edu5Tag2: 'Budgetverwaltung',
        edu6Title: 'Abitur (Matura)',
        edu6Desc: 'Sekundarschulbildung abgeschlossen an Jeta e Re, Suhareka, Kosovo (September 2003 - August 2006)',
        edu6Tag1: 'Sekundarschulbildung',
        edu6Tag2: 'Abgeschlossen',
        
        // Contact Section
        contactTitle: 'Kontakt aufnehmen',
        contactSubtitle: 'Lassen Sie uns zusammenarbeiten',
        contactHeading: 'Lassen Sie uns über Möglichkeiten sprechen',
        contactText: 'Ich bin offen für Diskussionen über neue Möglichkeiten, Zusammenarbeit und wie ich meine Fähigkeiten in Ihr Unternehmen einbringen kann.',
        contactEmail: 'E-Mail',
        contactPhone: 'Telefon',
        contactLocation: 'Standort',
        contactLocationText: 'Winkelriedstrasse 2, 5430 Wettingen, Aargau, Schweiz',
        
        // Footer
        footerText: '© 2026 Gentiana Loki. Alle Rechte vorbehalten.',
        footerContact: 'Kontakt'
    }
};

// ========================================
// Language Switcher
// ========================================
let currentLanguage = localStorage.getItem('language') || 'en';

function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    const t = translations[lang];
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Navigation - with error handling
    const navHomeLink = document.querySelector('a[href="#home"]');
    if (navHomeLink) navHomeLink.textContent = t.navHome;
    const navAboutLink = document.querySelector('a[href="#about"]');
    if (navAboutLink) navAboutLink.textContent = t.navAbout;
    const navExperienceLink = document.querySelector('a[href="#experience"]');
    if (navExperienceLink) navExperienceLink.textContent = t.navExperience;
    const navEducationLink = document.querySelector('a[href="#education"]');
    if (navEducationLink) navEducationLink.textContent = t.navEducation;
    const navContactLink = document.querySelector('a[href="#contact"]');
    if (navContactLink) navContactLink.textContent = t.navContact;
    
    // Hero Section - using DOM manipulation to avoid XSS
    const heroH1 = document.querySelector('.hero-text h1');
    if (heroH1) {
        heroH1.textContent = t.heroGreeting + ' ';
        const nameSpan = document.createElement('span');
        nameSpan.className = 'highlight';
        nameSpan.textContent = t.heroName;
        heroH1.appendChild(nameSpan);
    }
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) {
        heroDesc.textContent = t.heroDescriptionText;
    }
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons[0]) heroButtons[0].textContent = t.heroButton1;
    if (heroButtons[1]) heroButtons[1].textContent = t.heroButton2;
    
    // Update typing animation texts by reinitializing the array
    texts[0] = t.heroTyping1;
    texts[1] = t.heroTyping2;
    texts[2] = t.heroTyping3;
    texts[3] = t.heroTyping4;
    
    // Restart typing animation with new texts
    restartTypingAnimation();
    
    // About Section
    document.querySelector('#about .section-title').textContent = t.aboutTitle;
    document.querySelector('#about .section-subtitle').textContent = t.aboutSubtitle;
    document.querySelector('.about-text h3').textContent = t.aboutHeading;
    const aboutPs = document.querySelectorAll('.about-text > p');
    if (aboutPs[0]) aboutPs[0].textContent = t.aboutText1;
    if (aboutPs[1]) aboutPs[1].textContent = t.aboutText2;
    
    const stats = document.querySelectorAll('.stat');
    if (stats[0]) stats[0].querySelector('p').textContent = t.aboutStat1Label;
    if (stats[1]) stats[1].querySelector('p').textContent = t.aboutStat2Label;
    if (stats[2]) stats[2].querySelector('p').textContent = t.aboutStat3Label;
    
    document.querySelector('.skills h3').textContent = t.aboutSkillsTitle;
    const skills = document.querySelectorAll('.skill-info span:first-child');
    if (skills[0]) skills[0].textContent = t.aboutSkill1;
    if (skills[1]) skills[1].textContent = t.aboutSkill2;
    if (skills[2]) skills[2].textContent = t.aboutSkill3;
    if (skills[3]) skills[3].textContent = t.aboutSkill4;
    if (skills[4]) skills[4].textContent = t.aboutSkill5;
    
    // Experience Section
    document.querySelector('#experience .section-title').textContent = t.experienceTitle;
    document.querySelector('#experience .section-subtitle').textContent = t.experienceSubtitle;
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    const expData = [
        { date: 'exp1Date', title: 'exp1Title', company: 'exp1Company', desc: 'exp1Desc', tags: ['exp1Tag1', 'exp1Tag2', 'exp1Tag3'] },
        { date: 'exp2Date', title: 'exp2Title', company: 'exp2Company', desc: 'exp2Desc', tags: ['exp2Tag1', 'exp2Tag2', 'exp2Tag3'] },
        { date: 'exp3Date', title: 'exp3Title', company: 'exp3Company', desc: 'exp3Desc', tags: ['exp3Tag1', 'exp3Tag2', 'exp3Tag3'] },
        { date: 'exp4Date', title: 'exp4Title', company: 'exp4Company', desc: 'exp4Desc', tags: ['exp4Tag1', 'exp4Tag2', 'exp4Tag3'] }
    ];
    
    timelineItems.forEach((item, index) => {
        const data = expData[index];
        if (data) {
            item.querySelector('.timeline-date').textContent = t[data.date];
            item.querySelector('h3').textContent = t[data.title];
            item.querySelector('h4').textContent = t[data.company];
            item.querySelector('p').textContent = t[data.desc];
            const tags = item.querySelectorAll('.timeline-tags span');
            tags.forEach((tag, tagIndex) => {
                if (data.tags[tagIndex]) {
                    tag.textContent = t[data.tags[tagIndex]];
                }
            });
        }
    });
    
    // Education Section
    document.querySelector('#education .section-title').textContent = t.educationTitle;
    document.querySelector('#education .section-subtitle').textContent = t.educationSubtitle;
    
    const projectCards = document.querySelectorAll('.project-card');
    const eduData = [
        { title: 'edu1Title', desc: 'edu1Desc', note: 'edu1Note', tags: ['edu1Tag1', 'edu1Tag2', 'edu1Tag3'] },
        { title: 'edu2Title', desc: 'edu2Desc', note: null, tags: ['edu1Tag1', 'edu1Tag2', 'edu1Tag3'] },
        { title: 'edu3Title', desc: 'edu3Desc', note: null, tags: ['edu3Tag1', 'edu3Tag2'] },
        { title: 'edu4Title', desc: 'edu4Desc', note: null, tags: ['edu4Tag1', 'edu4Tag2'] },
        { title: 'edu5Title', desc: 'edu5Desc', note: null, tags: ['edu5Tag1', 'edu5Tag2'] },
        { title: 'edu6Title', desc: 'edu6Desc', note: null, tags: ['edu6Tag1', 'edu6Tag2'] }
    ];
    
    projectCards.forEach((card, index) => {
        const data = eduData[index];
        if (data) {
            card.querySelector('h3').textContent = t[data.title];
            const paragraphs = card.querySelectorAll('.project-content > p');
            paragraphs[0].textContent = t[data.desc];
            if (data.note && paragraphs[1]) {
                // Build <em><small>...</small></em> using DOM APIs to avoid innerHTML
                paragraphs[1].textContent = '';
                const emEl = document.createElement('em');
                const smallEl = document.createElement('small');
                smallEl.textContent = t[data.note];
                emEl.appendChild(smallEl);
                paragraphs[1].appendChild(emEl);
            }
            const tags = card.querySelectorAll('.project-tech span');
            tags.forEach((tag, tagIndex) => {
                if (data.tags[tagIndex]) {
                    tag.textContent = t[data.tags[tagIndex]];
                }
            });
        }
    });
    
    // Contact Section
    document.querySelector('#contact .section-title').textContent = t.contactTitle;
    document.querySelector('#contact .section-subtitle').textContent = t.contactSubtitle;
    document.querySelector('.contact-info h3').textContent = t.contactHeading;
    document.querySelector('.contact-info > p').textContent = t.contactText;
    
    const contactItems = document.querySelectorAll('.contact-item h4');
    if (contactItems[0]) contactItems[0].textContent = t.contactEmail;
    if (contactItems[1]) contactItems[1].textContent = t.contactPhone;
    if (contactItems[2]) contactItems[2].textContent = t.contactLocation;
    
    const locationP = document.querySelector('.contact-item:nth-child(3) p');
    if (locationP) locationP.textContent = t.contactLocationText;
    
    // Footer - with more robust selectors
    const footerTextEl = document.querySelector('.footer-content > p');
    if (footerTextEl) {
        footerTextEl.textContent = t.footerText;
    }
    const footerContactLink = document.querySelector('.footer-links a[href="#contact"]');
    if (footerContactLink) {
        footerContactLink.textContent = t.footerContact;
    }
    
    // Update language toggle button icon
    updateLanguageIcon(lang);
}

function updateLanguageIcon(lang) {
    const langToggle = document.getElementById('languageToggle');
    if (!langToggle) return;
    
    // Update visible language text
    const icon = langToggle.querySelector('.lang-text');
    if (icon) {
        icon.textContent = lang === 'en' ? 'DE' : 'EN';
    }
    
    // Update ARIA label to reflect the target language for screen readers
    const targetLanguageLabel = lang === 'en' ? 'German' : 'English';
    langToggle.setAttribute('aria-label', 'Switch to ' + targetLanguageLabel);
}

// Hide content until language is initialized to prevent flash of default language
document.documentElement.style.visibility = 'hidden';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLanguage);
    
    // Reveal content after language has been applied
    document.documentElement.style.visibility = '';
    
    // Set up language toggle event listener
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'de' : 'en';
            updateLanguage(newLang);
        });
    }
});

// ========================================
// Theme Toggle
// ========================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

if (!themeToggle || !body) {
    console.error('Theme toggle elements not found');
} else {
    // Check for saved theme preference or default to 'light' mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);

    // Update icon based on current theme
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        let theme = body.getAttribute('data-theme');
        
        if (theme === 'light') {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        }
    });
}

// ========================================
// Mobile Navigation
// ========================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (!hamburger || !navLinks) {
    console.error('Mobile navigation elements not found');
} else {
    // Function to update mobile menu position based on navbar height
    function updateMobileMenuPosition() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const navbarHeight = navbar.offsetHeight;
            navLinks.style.top = `${navbarHeight}px`;
            navLinks.style.height = `calc(100vh - ${navbarHeight}px)`;
        }
    }

    // Toggle menu function
    function toggleMenu() {
        // Check if we're about to open the menu
        const isOpening = !navLinks.classList.contains('active');
        
        // Update menu position before adding 'active' class to avoid diagonal slide
        if (isOpening) {
            updateMobileMenuPosition();
        }
        
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);

    // Add keyboard accessibility for hamburger menu
    hamburger.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ========================================
// Smooth Scrolling & Active Nav Link
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// ========================================
// Typing Animation
// ========================================
const typingText = document.querySelector('.typing-text');
// Initialize texts array from translations based on current language
let texts = [];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;
let typingTimeout = null;

function initializeTexts() {
    const t = translations[currentLanguage];
    texts = [
        t.heroTyping1,
        t.heroTyping2,
        t.heroTyping3,
        t.heroTyping4
    ];
}

function type() {
    if (!typingText) {
        console.error('Typing text element not found');
        return;
    }
    
    const currentText = texts[textIndex];

    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 100;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 200;
    }

    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end
        typingDelay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingDelay = 500;
    }

    typingTimeout = setTimeout(type, typingDelay);
}

function restartTypingAnimation() {
    // Clear existing animation
    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }
    // Reset animation state
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typingDelay = 200;
    if (typingText) {
        typingText.textContent = '';
        typingTimeout = setTimeout(type, 1000);
    }
}

// Initialize texts array on load
initializeTexts();

// Start typing animation
if (typingText) {
    setTimeout(type, 1000);
}

// ========================================
// Skill Bar Animation
// ========================================
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible && !bar.classList.contains('animated')) {
            bar.style.width = progress + '%';
            bar.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ========================================
// Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.project-card, .timeline-item, .stat, .contact-item').forEach(el => {
    observer.observe(el);
});

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        
        if (body.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(45, 55, 72, 0.95)';
        }
    } else {
        navbar.style.padding = '0';
        navbar.style.background = '';
    }
});

// ========================================
// Project Card Tilt Effect (Optional Enhancement)
// ========================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========================================
// Parallax Effect for Hero Section
// ========================================
const heroShape = document.querySelector('.hero-shape');

if (heroShape) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroShape.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

// ========================================
// Counter Animation for Stats
// ========================================
const stats = document.querySelectorAll('.stat h4');

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current) + '+';
        }
    }, 30);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const text = entry.target.textContent;
            const number = parseInt(text.replace('+', ''));
            // Only animate if the parsed value is a valid number
            if (!isNaN(number)) {
                animateCounter(entry.target, number);
            }
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => statsObserver.observe(stat));

// ========================================
// Cursor Trail Effect (Optional - Reserved for future enhancement)
// ========================================
// This feature is reserved for future visual cursor trail implementation
// Uncomment and implement rendering when needed

// ========================================
// Initialize on Load
// ========================================
window.addEventListener('load', () => {
    // Add initial animations
    document.querySelectorAll('.hero-text > *').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
    });
});
