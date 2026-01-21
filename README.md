# Interactive Modern Resume Website

A stunning, fully interactive portfolio/resume website built with pure HTML, CSS, and JavaScript. Features smooth animations, dark mode, responsive design, and an engaging user experience.

## ✨ Features

- 🎨 **Modern Design** - Beautiful gradient backgrounds and card-based layouts
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent storage
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Interactive Animations** - Typing effects, skill bars, counters, and more
- 📝 **Contact Form** - With validation and success notifications
- 🎯 **Smooth Scrolling** - Navigation with active section highlighting
- 🎭 **Hover Effects** - Interactive cards with 3D tilt effects
- ♿ **Accessible** - Semantic HTML and keyboard navigation

## 🚀 Quick Start

1. Clone the repository
2. Open `index.html` in your browser
3. That's it! No build process required.

## 📝 Customization

### Personal Information
Edit `index.html` to update:
- Name and job titles (line 42, 44)
- About section content (lines 77-85)
- Experience details (lines 110-167)
- Project showcases (lines 183-289)
- Contact information (lines 317-337)

### Styling
Edit `styles.css` to customize:
- Color scheme (lines 8-17 - CSS variables)
- Fonts and typography
- Spacing and layout
- Animation timings

### Functionality
Edit `script.js` to modify:
- Typing animation texts (line 90)
- Form behavior (lines 171-183)
- Animation triggers and effects

## 📂 File Structure

```
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Interactive functionality
└── README.md       # This file
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

## 📄 License

Feel free to use this template for your personal portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.
# gentiana-Loki

This repository includes a best practices GitHub Actions workflow that automatically deploys to GitHub Pages.

## Features

- **Automated Deployment**: Deploys to GitHub Pages on push to main branch
- **Manual Trigger**: Can be manually triggered from the Actions tab
- **Security Best Practices**: 
  - Minimal permissions (least privilege principle)
  - Uses GITHUB_TOKEN with specific permissions
  - OpenID Connect (OIDC) for secure authentication
- **Concurrency Control**: Prevents overlapping deployments
- **Artifact Management**: Proper upload/download of build artifacts
- **Modern Actions**: Uses latest stable versions with SHA pinning capability

## Setup

1. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. The workflow will automatically run on:
   - Every push to the `main` branch
   - Manual trigger from the Actions tab

## Workflow Structure

The workflow consists of two jobs:

1. **Build Job**: 
   - Checks out the repository
   - Sets up GitHub Pages configuration
   - Builds the static site
   - Uploads the artifact

2. **Deploy Job**:
   - Downloads the build artifact
   - Deploys to GitHub Pages
   - Provides the deployment URL

## Best Practices Implemented

- ✅ Explicit permissions declaration
- ✅ Concurrency control to prevent race conditions
- ✅ Separation of build and deploy jobs
- ✅ Use of official GitHub actions
- ✅ Clear job dependencies
- ✅ Environment-specific deployments
- ✅ Comprehensive comments and documentation
