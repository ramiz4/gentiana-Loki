'use strict';

// ========================================
// Language Translations
// ========================================
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.education': 'Education',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.greeting': "Hello, I'm",
        'hero.typing.1': 'Customer Service Professional',
        'hero.typing.2': 'Administration Specialist',
        'hero.typing.3': 'Finance & Budget Expert',
        'hero.typing.4': 'Multilingual Communicator',
        'hero.description': 'Motivated professional with experience in customer service, administration and finance. Strong organizational skills, communication skills and intercultural competence.',
        'hero.btn.education': 'View Education',
        'hero.btn.contact': 'Get In Touch',
        
        // About Section
        'about.title': 'About Me',
        'about.subtitle': 'Get to know me better',
        'about.profile.title': 'Professional Profile',
        'about.profile.text1': 'Motivated professional with experience in customer service, administration and finance. Strong organizational skills, communication skills and intercultural competence.',
        'about.profile.text2': 'Goal is to promote customer satisfaction in the position as Junior Customer Advisor, maintain customer relationships and actively contribute to the success of the company.',
        'about.skills.title': 'Key Skills & Competencies',
        'about.skill.customer': 'Customer Service & Communication',
        'about.skill.organization': 'Organization & Administration',
        'about.skill.finance': 'Finance & Budget Management',
        'about.skill.office': 'MS Office (Word, Excel, PowerPoint)',
        'about.skill.intercultural': 'Intercultural Competence',
        'about.stats.years': 'Years Experience',
        'about.stats.banking': 'Banking & Finance',
        'about.stats.languages': 'Languages',
        
        // Experience Section
        'experience.title': 'Experience',
        'experience.subtitle': 'My professional journey',
        'experience.job1.date': 'October 2012 - July 2015',
        'experience.job1.title': 'Liaison and Executive Officer',
        'experience.job1.company': 'Kosovo Justice Academy, Prishtina, Kosovo',
        'experience.job1.description': 'Organized appointments and correspondence for the Director. Planned and conducted meetings, events and external meetings. Interface to partner organizations (e.g. UN Women, USAID, GIZ). From May 2013: Expenditure Officer - budget monitoring, expense verification, documentation.',
        'experience.job1.tag1': 'Administration',
        'experience.job1.tag2': 'Finance',
        'experience.job1.tag3': 'Events',
        'experience.job2.date': 'July 2011 - September 2012',
        'experience.job2.title': 'Executive Assistant',
        'experience.job2.company': 'Kosovo Justice Academy, Prishtina, Kosovo',
        'experience.job2.description': 'Support with communication measures and press relations. Preparation of reports, briefings and documents. Participation in meetings with local and international stakeholders.',
        'experience.job2.tag1': 'Communication',
        'experience.job2.tag2': 'Documentation',
        'experience.job2.tag3': 'Stakeholder Relations',
        'experience.job3.date': 'September 2009 - February 2011',
        'experience.job3.title': 'Sales Assistant',
        'experience.job3.company': 'Mango/Ardi Co, Prishtina, Kosovo',
        'experience.job3.description': 'Customer advice and active sales. Design and replenishment of the sales area. Product presentation and customer service.',
        'experience.job3.tag1': 'Customer Service',
        'experience.job3.tag2': 'Sales',
        'experience.job3.tag3': 'Retail',
        'experience.job4.date': 'January 2008 - September 2008',
        'experience.job4.title': 'Office Assistant',
        'experience.job4.company': 'Lila/Lila Commerce, Suhareka, Kosovo',
        'experience.job4.description': 'Reception of visitors, telephone reception. General secretarial tasks, filing and correspondence.',
        'experience.job4.tag1': 'Office Management',
        'experience.job4.tag2': 'Reception',
        'experience.job4.tag3': 'Administration',
        
        // Education Section
        'education.title': 'Education & Qualifications',
        'education.subtitle': 'Academic background and certifications',
        'education.item1.title': 'Master of Arts',
        'education.item1.description': 'Banking, Finance and Accounting - Fama University, Prishtina, Kosovo (October 2011 - December 2021)',
        'education.item1.note': 'Studies were paused due to marriage and relocation from Kosovo to Germany, resuming after settling in the new country.',
        'education.item1.tag1': 'Banking',
        'education.item1.tag2': 'Finance',
        'education.item1.tag3': 'Accounting',
        'education.item2.title': 'Bachelor of Arts',
        'education.item2.description': 'Banking, Finance and Accounting - Fama University, Prishtina, Kosovo (October 2006 - April 2010)',
        'education.item2.tag1': 'Banking',
        'education.item2.tag2': 'Finance',
        'education.item2.tag3': 'Accounting',
        'education.item3.title': 'German Language - TELC',
        'education.item3.description': 'Certificates A1 through B2. Fluent in German, demonstrating strong communication abilities.',
        'education.item3.tag1': 'German A1-B2',
        'education.item3.tag2': 'TELC Certified',
        'education.item4.title': 'English Language',
        'education.item4.description': 'Pre-Intermediate English - New Age School, Prishtina. Fluent in English for professional communication.',
        'education.item4.tag1': 'English',
        'education.item4.tag2': 'Pre-Intermediate',
        'education.item5.title': 'Expenditure Officer Training',
        'education.item5.description': 'Financial sector training from the Ministry of Finance, Prishtina. Specialized in budget monitoring and expense management.',
        'education.item5.tag1': 'Finance',
        'education.item5.tag2': 'Budget Management',
        'education.item6.title': 'High School Diploma (Matura)',
        'education.item6.description': 'Secondary education completed at Jeta e Re, Suhareka, Kosovo (September 2003 - August 2006)',
        'education.item6.tag1': 'Secondary Education',
        'education.item6.tag2': 'Completed',
        
        // Contact Section
        'contact.title': 'Get In Touch',
        'contact.subtitle': "Let's work together",
        'contact.heading': "Let's talk about opportunities",
        'contact.description': "I'm open to discussing new opportunities, collaborations, and how I can contribute my skills to your organization.",
        'contact.email.label': 'Email',
        'contact.phone.label': 'Phone',
        'contact.location.label': 'Location',
        
        // Footer
        'footer.rights': '© 2026 Gentiana Loki. All rights reserved.',
        'footer.contact': 'Contact',
        
        // Accessibility
        'aria.skip': 'Skip to main content',
        'aria.languageToggle': 'Switch to German',
        'aria.themeToggle': 'Toggle dark mode',
        'aria.mobileMenu': 'Toggle mobile menu',
        'aria.email': 'Send email',
        'aria.phone': 'Call phone',
        'aria.linkedin': 'LinkedIn profile',
        'aria.contact': 'Contact information'
    },
    de: {
        // Navigation
        'nav.home': 'Startseite',
        'nav.about': 'Über mich',
        'nav.experience': 'Erfahrung',
        'nav.education': 'Bildung',
        'nav.contact': 'Kontakt',
        
        // Hero Section
        'hero.greeting': 'Hallo, ich bin',
        'hero.typing.1': 'Kundenservice-Profi',
        'hero.typing.2': 'Verwaltungsspezialistin',
        'hero.typing.3': 'Finanz- & Budgetexpertin',
        'hero.typing.4': 'Mehrsprachige Kommunikatorin',
        'hero.description': 'Motivierte Fachkraft mit Erfahrung im Kundenservice, in der Verwaltung und im Finanzwesen. Starke organisatorische Fähigkeiten, Kommunikationsfähigkeiten und interkulturelle Kompetenz.',
        'hero.btn.education': 'Bildung ansehen',
        'hero.btn.contact': 'Kontakt aufnehmen',
        
        // About Section
        'about.title': 'Über mich',
        'about.subtitle': 'Lernen Sie mich besser kennen',
        'about.profile.title': 'Berufsprofil',
        'about.profile.text1': 'Motivierte Fachkraft mit Erfahrung im Kundenservice, in der Verwaltung und im Finanzwesen. Starke organisatorische Fähigkeiten, Kommunikationsfähigkeiten und interkulturelle Kompetenz.',
        'about.profile.text2': 'Ziel ist es, die Kundenzufriedenheit in der Position als Junior Customer Advisor zu fördern, Kundenbeziehungen zu pflegen und aktiv zum Erfolg des Unternehmens beizutragen.',
        'about.skills.title': 'Schlüsselkompetenzen',
        'about.skill.customer': 'Kundenservice & Kommunikation',
        'about.skill.organization': 'Organisation & Verwaltung',
        'about.skill.finance': 'Finanz- & Budgetverwaltung',
        'about.skill.office': 'MS Office (Word, Excel, PowerPoint)',
        'about.skill.intercultural': 'Interkulturelle Kompetenz',
        'about.stats.years': 'Jahre Erfahrung',
        'about.stats.banking': 'Banking & Finanzen',
        'about.stats.languages': 'Sprachen',
        
        // Experience Section
        'experience.title': 'Erfahrung',
        'experience.subtitle': 'Meine berufliche Laufbahn',
        'experience.job1.date': 'Oktober 2012 - Juli 2015',
        'experience.job1.title': 'Liaison- und Führungskraft',
        'experience.job1.company': 'Kosovo Justice Academy, Prishtina, Kosovo',
        'experience.job1.description': 'Organisation von Terminen und Korrespondenz für den Direktor. Planung und Durchführung von Meetings, Veranstaltungen und externen Treffen. Schnittstelle zu Partnerorganisationen (z.B. UN Women, USAID, GIZ). Ab Mai 2013: Ausgabenbeauftragte - Budgetüberwachung, Ausgabenprüfung, Dokumentation.',
        'experience.job1.tag1': 'Verwaltung',
        'experience.job1.tag2': 'Finanzen',
        'experience.job1.tag3': 'Veranstaltungen',
        'experience.job2.date': 'Juli 2011 - September 2012',
        'experience.job2.title': 'Führungsassistentin',
        'experience.job2.company': 'Kosovo Justice Academy, Prishtina, Kosovo',
        'experience.job2.description': 'Unterstützung bei Kommunikationsmaßnahmen und Pressearbeit. Erstellung von Berichten, Briefings und Dokumenten. Teilnahme an Meetings mit lokalen und internationalen Stakeholdern.',
        'experience.job2.tag1': 'Kommunikation',
        'experience.job2.tag2': 'Dokumentation',
        'experience.job2.tag3': 'Stakeholder-Beziehungen',
        'experience.job3.date': 'September 2009 - Februar 2011',
        'experience.job3.title': 'Verkaufsassistentin',
        'experience.job3.company': 'Mango/Ardi Co, Prishtina, Kosovo',
        'experience.job3.description': 'Kundenberatung und aktiver Verkauf. Gestaltung und Nachfüllung des Verkaufsbereichs. Produktpräsentation und Kundenservice.',
        'experience.job3.tag1': 'Kundenservice',
        'experience.job3.tag2': 'Verkauf',
        'experience.job3.tag3': 'Einzelhandel',
        'experience.job4.date': 'Januar 2008 - September 2008',
        'experience.job4.title': 'Büroassistentin',
        'experience.job4.company': 'Lila/Lila Commerce, Suhareka, Kosovo',
        'experience.job4.description': 'Empfang von Besuchern, Telefonzentrale. Allgemeine Sekretariatsaufgaben, Ablage und Korrespondenz.',
        'experience.job4.tag1': 'Büromanagement',
        'experience.job4.tag2': 'Empfang',
        'experience.job4.tag3': 'Verwaltung',
        
        // Education Section
        'education.title': 'Bildung & Qualifikationen',
        'education.subtitle': 'Akademischer Hintergrund und Zertifizierungen',
        'education.item1.title': 'Master of Arts',
        'education.item1.description': 'Banking, Finanz- und Rechnungswesen - Fama Universität, Prishtina, Kosovo (Oktober 2011 - Dezember 2021)',
        'education.item1.note': 'Das Studium wurde aufgrund von Heirat und Umzug von Kosovo nach Deutschland unterbrochen und nach der Eingewöhnung im neuen Land wieder aufgenommen.',
        'education.item1.tag1': 'Banking',
        'education.item1.tag2': 'Finanzen',
        'education.item1.tag3': 'Rechnungswesen',
        'education.item2.title': 'Bachelor of Arts',
        'education.item2.description': 'Banking, Finanz- und Rechnungswesen - Fama Universität, Prishtina, Kosovo (Oktober 2006 - April 2010)',
        'education.item2.tag1': 'Banking',
        'education.item2.tag2': 'Finanzen',
        'education.item2.tag3': 'Rechnungswesen',
        'education.item3.title': 'Deutschkurs - TELC',
        'education.item3.description': 'Zertifikate A1 bis B2. Fließend in Deutsch, mit starken Kommunikationsfähigkeiten.',
        'education.item3.tag1': 'Deutsch A1-B2',
        'education.item3.tag2': 'TELC-zertifiziert',
        'education.item4.title': 'Englischkurs',
        'education.item4.description': 'Pre-Intermediate Englisch - New Age School, Prishtina. Fließend in Englisch für professionelle Kommunikation.',
        'education.item4.tag1': 'Englisch',
        'education.item4.tag2': 'Pre-Intermediate',
        'education.item5.title': 'Ausgabenbeauftragte-Schulung',
        'education.item5.description': 'Finanzsektor-Schulung vom Finanzministerium, Prishtina. Spezialisiert auf Budgetüberwachung und Ausgabenverwaltung.',
        'education.item5.tag1': 'Finanzen',
        'education.item5.tag2': 'Budgetverwaltung',
        'education.item6.title': 'Abitur (Matura)',
        'education.item6.description': 'Sekundärbildung abgeschlossen an der Jeta e Re, Suhareka, Kosovo (September 2003 - August 2006)',
        'education.item6.tag1': 'Sekundärbildung',
        'education.item6.tag2': 'Abgeschlossen',
        
        // Contact Section
        'contact.title': 'Kontakt aufnehmen',
        'contact.subtitle': 'Lassen Sie uns zusammenarbeiten',
        'contact.heading': 'Lassen Sie uns über Möglichkeiten sprechen',
        'contact.description': 'Ich bin offen für Gespräche über neue Möglichkeiten, Zusammenarbeit und wie ich meine Fähigkeiten in Ihre Organisation einbringen kann.',
        'contact.email.label': 'E-Mail',
        'contact.phone.label': 'Telefon',
        'contact.location.label': 'Standort',
        
        // Footer
        'footer.rights': '© 2026 Gentiana Loki. Alle Rechte vorbehalten.',
        'footer.contact': 'Kontakt',
        
        // Accessibility
        'aria.skip': 'Zum Hauptinhalt springen',
        'aria.languageToggle': 'Zu Englisch wechseln',
        'aria.themeToggle': 'Dunkelmodus umschalten',
        'aria.mobileMenu': 'Mobilmenü umschalten',
        'aria.email': 'E-Mail senden',
        'aria.phone': 'Telefon anrufen',
        'aria.linkedin': 'LinkedIn-Profil',
        'aria.contact': 'Kontaktinformationen'
    }
};

// Update typing animation texts based on language
function updateTypingTexts(lang) {
    texts[0] = translations[lang]['hero.typing.1'];
    texts[1] = translations[lang]['hero.typing.2'];
    texts[2] = translations[lang]['hero.typing.3'];
    texts[3] = translations[lang]['hero.typing.4'];
}

// Update page content based on selected language
function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update aria-label attributes
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        if (translations[lang][key]) {
            element.setAttribute('aria-label', translations[lang][key]);
        }
    });
    
    // Update typing animation texts
    updateTypingTexts(lang);
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
}

// ========================================
// Typing Animation for Hero Section
// ========================================
const texts = [
    'Customer Service Professional',
    'Administration Specialist', 
    'Finance & Budget Expert',
    'Multilingual Communicator'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language content
    const currentLang = localStorage.getItem('language') || 'en';
    updateContent(currentLang);
    
    // Start typing animation
    typeText();
});

// ========================================
// Mobile Menu Toggle
// ========================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && mobileMenu) {
    // Ensure mobile menu is initially closed
    mobileMenu.classList.add('-translate-x-full');
    hamburger.setAttribute('aria-expanded', 'false');
    
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('-translate-x-full');
        hamburger.setAttribute('aria-expanded', !mobileMenu.classList.contains('-translate-x-full'));
    });
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const isMenuOpen = !mobileMenu.classList.contains('-translate-x-full');
        const isClickInsideMenu = mobileMenu.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);
        
        if (isMenuOpen && !isClickInsideMenu && !isClickOnHamburger) {
            mobileMenu.classList.add('-translate-x-full');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

// ========================================
// Dark Mode Toggle
// ========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    html.classList.add('dark');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) icon.classList.replace('fa-moon', 'fa-sun');
        themeToggle.setAttribute('aria-label', 'Toggle light mode');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const icon = themeToggle.querySelector('i');
        
        if (html.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            if (icon) icon.classList.replace('fa-moon', 'fa-sun');
            themeToggle.setAttribute('aria-label', 'Toggle light mode');
        } else {
            localStorage.setItem('theme', 'light');
            if (icon) icon.classList.replace('fa-sun', 'fa-moon');
            themeToggle.setAttribute('aria-label', 'Toggle dark mode');
        }
    });
}

// ========================================
// Language Toggle
// ========================================
const languageToggle = document.getElementById('languageToggle');
let currentLanguage = localStorage.getItem('language') || 'en';

if (languageToggle) {
    // Update button text based on current language
    const langText = languageToggle.querySelector('.lang-text');
    if (langText) {
        langText.textContent = currentLanguage === 'en' ? 'DE' : 'EN';
    }
    
    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
        localStorage.setItem('language', currentLanguage);
        
        if (langText) {
            langText.textContent = currentLanguage === 'en' ? 'DE' : 'EN';
        }
        
        // Update aria-label
        languageToggle.setAttribute('aria-label', 
            currentLanguage === 'en' ? 'Switch to German' : 'Switch to English'
        );
        
        // Update page content
        updateContent(currentLanguage);
    });
}

// ========================================
// Active Navigation Link on Scroll
// ========================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// ========================================
// Skill Progress Bar Animation on Scroll
// ========================================
const skillBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;

function animateSkills() {
    const skillsSection = document.getElementById('about');
    if (!skillsSection) return;
    
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    
    if (skillsPosition < screenPosition && !skillsAnimated) {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 200);
        });
        skillsAnimated = true;
    }
}

// ========================================
// Navbar Background on Scroll
// ========================================
const navbar = document.querySelector('nav');

function updateNavbar() {
    if (window.scrollY > 50) {
        navbar?.classList.add('shadow-xl');
    } else {
        navbar?.classList.remove('shadow-xl');
    }
}

// ========================================
// Consolidated Scroll Handler with Throttling
// ========================================
let scrollTicking = false;

function handleScroll() {
    if (!scrollTicking) {
        window.requestAnimationFrame(() => {
            updateActiveNav();
            animateSkills();
            updateNavbar();
            scrollTicking = false;
        });
        scrollTicking = true;
    }
}

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('load', animateSkills);

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80; // Navbar height
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// Intersection Observer for Fade-in Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.stat, .backdrop-blur-xl');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
