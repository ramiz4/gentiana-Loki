# Gentiana Loki - Interactive Modern Resume Website

A stunning, fully interactive portfolio/resume website built with pure HTML, CSS, and JavaScript. Features smooth animations, dark mode, responsive design, and an engaging user experience.

## ✨ Features

- 🎨 **Modern Design** - Beautiful gradient backgrounds and card-based layouts
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent storage
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Interactive Animations** - Typing effects, skill bars, counters, and more
- 🎯 **Smooth Scrolling** - Navigation with active section highlighting
- 🎭 **Hover Effects** - Interactive cards with 3D tilt effects
- ♿ **Accessible** - Semantic HTML, ARIA labels, and keyboard navigation
- 🔒 **Secure** - SRI for external resources, no unsafe practices

## 🚀 Quick Start

1. Clone the repository
2. Open `index.html` in your browser
3. That's it! No build process required.

## 📝 Customization

### Personal Information
Edit `index.html` to update:
- Name and job titles
- About section content
- Experience details
- Education and qualifications
- Contact information

### Styling
Edit `styles.css` to customize:
- Color scheme (CSS variables in `:root`)
- Fonts and typography
- Spacing and layout
- Animation timings

### Functionality
Edit `script.js` to modify:
- Typing animation texts
- Animation triggers and effects

## 📂 File Structure

```
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Interactive functionality
├── README.md       # This file
└── .github/
    └── workflows/
        └── deploy-pages.yml  # GitHub Actions workflow
```

## 🎨 Color Scheme

The default theme uses a purple-blue gradient:
- Primary: `#667eea`
- Secondary: `#764ba2`
- Accent: `#f093fb`

Change these in the CSS `:root` variables to customize the color scheme.

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🚀 Deployment

This repository includes a best practices GitHub Actions workflow that automatically deploys to GitHub Pages.

### Features

- **Automated Deployment**: Deploys to GitHub Pages on push to main branch
- **Manual Trigger**: Can be manually triggered from the Actions tab
- **Security Best Practices**: 
  - Minimal permissions (least privilege principle)
  - Uses GITHUB_TOKEN with specific permissions
  - OpenID Connect (OIDC) for secure authentication
- **Concurrency Control**: Prevents overlapping deployments

### Setup

1. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. The workflow will automatically run on:
   - Every push to the `main` branch
   - Manual trigger from the Actions tab

## 📄 License

Feel free to use this template for your personal portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.
