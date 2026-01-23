'use strict';

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
    typeText();
});

// ========================================
// Mobile Menu Toggle
// ========================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
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
// Language Toggle (Placeholder)
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
        
        // In a real implementation, this would update all text content
        // For now, this is a placeholder for the language switching functionality
        console.log('Language switched to:', currentLanguage);
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

window.addEventListener('scroll', updateActiveNav);

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

window.addEventListener('scroll', animateSkills);
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

window.addEventListener('scroll', updateNavbar);

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
