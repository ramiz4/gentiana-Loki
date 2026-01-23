# GitHub Copilot Custom Instructions for Gentiana Loki Portfolio

## Project Overview
This is a personal portfolio and resume website for Gentiana Loki, showcasing professional experience, education, and qualifications. The site is built with vanilla HTML, CSS, and JavaScript, and deployed via GitHub Pages.

## Technology Stack
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS variables, gradients, and animations
- **Vanilla JavaScript**: No frameworks, pure JavaScript for interactivity
- **GitHub Pages**: Static site hosting via workflow automation

## Code Review Focus Areas

### 1. Accessibility (♿ High Priority)
- **ENSURE** every interactive element has an accessible name, preferring native/visible labels and only using `aria-label`/`aria-labelledby` when needed (for example, icon-only controls)
- **VERIFY** keyboard navigation works for all interactive components
- **CHECK** that all images have appropriate `alt` attributes
- **ENSURE** color contrast ratios meet WCAG 2.1 AA standards
- **VALIDATE** skip-to-main-content links are functioning
- **CONFIRM** form elements have associated labels
- **TEST** that focus indicators are visible and clear
- **VERIFY** semantic HTML5 elements are used appropriately (`<nav>`, `<section>`, `<article>`, `<footer>`)

### 2. Security (🔒 High Priority)
- **VERIFY** Subresource Integrity (SRI) for all external resources (CDN scripts, stylesheets)
- **CHECK** that external links use `rel="noopener noreferrer"` when appropriate
- **ENSURE** no inline event handlers (`onclick`, `onload`, etc.)
- **VALIDATE** no `eval()` or unsafe JavaScript patterns
- **CONFIRM** CSP (Content Security Policy) compliance if headers are configured
- **CHECK** for XSS vulnerabilities in dynamic content rendering

### 3. Performance (⚡ Medium Priority)
- **MINIMIZE** CSS and JavaScript file sizes where possible
- **OPTIMIZE** images and media assets
- **ENSURE** lazy loading for images below the fold
- **VERIFY** critical CSS is loaded first
- **CHECK** that animations use `transform` and `opacity` for better performance
- **VALIDATE** no layout thrashing in JavaScript
- **MONITOR** bundle sizes and page load times

### 4. Responsive Design (📱 High Priority)
- **TEST** all breakpoints: mobile (< 480px), tablet (< 968px), desktop
- **VERIFY** touch targets are at least 44x44px for mobile
- **ENSURE** text is readable without zooming
- **CHECK** that horizontal scrolling is not required
- **VALIDATE** viewport meta tag is correctly configured
- **CONFIRM** flexible layouts adapt smoothly between breakpoints

### 5. Code Quality & Maintainability
- **FOLLOW** existing code style and formatting patterns
- **USE** consistent naming conventions (kebab-case for CSS, camelCase for JavaScript)
- **ENSURE** code is well-organized and modular
- **ADD** comments only when necessary to explain complex logic
- **KEEP** functions small and focused on a single responsibility
- **AVOID** code duplication (DRY principle)

## Coding Standards

### HTML Guidelines
- Use semantic HTML5 elements
- Maintain proper document structure and hierarchy
- Include meta tags for SEO and social sharing
- Keep inline styles to an absolute minimum
- Ensure all interactive elements are keyboard accessible

### CSS Guidelines
- **Use CSS Variables** for theming (already established in `:root`)
- **Follow kebab-case** naming convention for classes (e.g., `nav-links`, `hero-content`, `btn-primary`)
- **Mobile-first** approach for responsive design
- **Prefer flexbox and grid** over floats and positioning hacks
- **Use transitions** for smooth state changes
- **Keep specificity low** to avoid cascading issues
- **Group related styles** with clear section comments

### JavaScript Guidelines
- **Use strict mode** (`'use strict';` already in place)
- **Prefer const** for variables that don't change, use `let` otherwise
- **Avoid var** declarations
- **Use template literals** for string interpolation
- **Handle errors gracefully** with try-catch blocks
- **Add event listeners** using `addEventListener`, not inline handlers
- **Debounce** scroll and resize event handlers
- **Clean up** event listeners when elements are removed

## Dark/Light Theme Support
- All new features MUST support both dark and light themes
- Use CSS variables for colors (e.g., `var(--text-color)`)
- Test theme switching to ensure smooth transitions
- Respect `prefers-color-scheme` media query if adding auto-detection

## Internationalization (i18n)
- The site supports English and German languages
- All user-facing text should be added to the `translations` object in `script.js`
- Maintain parallel translation entries for both `en` and `de` keys
- Ensure language toggle updates all content dynamically

## Animation & Interactivity
- Use CSS animations for simple effects (preferred over JavaScript)
- Respect `prefers-reduced-motion` media query for accessibility
- Keep animations subtle and purposeful
- Avoid animations that could trigger seizures (rapid flashing)
- Test performance on lower-end devices

## Browser Compatibility
- Support modern browsers (last 2 versions)
- Chrome, Firefox, Safari, Edge
- Graceful degradation for older browsers
- Test on both desktop and mobile browsers

## Git & Deployment Guidelines
- The site auto-deploys to GitHub Pages on push to `main` branch
- Ensure all required files (index.html, styles.css, script.js) are present
- Test locally before pushing to main
- Keep commit messages clear and descriptive
- Avoid committing build artifacts or temporary files

## Review Checklist for Pull Requests
When reviewing code changes, always verify:
- [ ] Code follows existing style and conventions
- [ ] Accessibility features are maintained or improved
- [ ] Security best practices are followed
- [ ] Responsive design works across all breakpoints
- [ ] Both dark and light themes are supported
- [ ] Language switching works for new content
- [ ] No console errors or warnings
- [ ] Performance is not negatively impacted
- [ ] Code is well-documented if complex
- [ ] Manual testing has been performed

## Common Pitfalls to Avoid
- ❌ Breaking existing accessibility features
- ❌ Adding external dependencies without SRI
- ❌ Hardcoding colors instead of using CSS variables
- ❌ Creating non-responsive layouts
- ❌ Ignoring keyboard navigation
- ❌ Adding text without translations
- ❌ Using inefficient DOM manipulation
- ❌ Creating memory leaks with event listeners
- ❌ Adding layout-thrashing JavaScript
- ❌ Breaking the dark/light theme toggle

## Suggested Improvements Priority
1. **Critical**: Security vulnerabilities, accessibility issues, broken functionality
2. **High**: Performance improvements, responsive design fixes, UX enhancements
3. **Medium**: Code refactoring, documentation improvements, minor styling tweaks
4. **Low**: Nice-to-have features, cosmetic changes

## Testing Recommendations
- Test on multiple browsers and devices
- Validate HTML using W3C Validator
- Check CSS with CSS Validator
- Run Lighthouse audits for performance, accessibility, SEO
- Test keyboard navigation thoroughly
- Verify screen reader compatibility
- Test dark/light theme switching
- Test language switching between English and German
- Verify all links and navigation work correctly

## Questions to Ask During Review
1. Does this change maintain or improve accessibility?
2. Is this change secure and free from vulnerabilities?
3. Does this work on mobile devices?
4. Does this support both themes (dark/light)?
5. Is this change internationalized (if user-facing)?
6. Is the performance impact acceptable?
7. Does this follow the existing code patterns?
8. Is this the simplest solution that could work?

---

Remember: This is a portfolio site that represents a professional. Every detail matters for making a strong impression. Prioritize accessibility, security, and user experience in all reviews and suggestions.
