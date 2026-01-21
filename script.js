'use strict';

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
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Add keyboard accessibility for hamburger menu
    hamburger.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
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
const texts = [
    'Customer Service Professional',
    'Administration Specialist',
    'Finance & Budget Expert',
    'Multilingual Communicator'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;

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

    setTimeout(type, typingDelay);
}

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
        navbar.style.padding = '1rem 0';
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
