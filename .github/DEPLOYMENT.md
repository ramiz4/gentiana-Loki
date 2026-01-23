# GitHub Pages Deployment Configuration

## Overview

This repository uses GitHub Pages to host the portfolio website with support for PR preview deployments.

## Deployment Methods

### Production Deployment
- **Workflow**: `.github/workflows/deploy-pages.yml`
- **Trigger**: Push to `main` branch or manual dispatch
- **Target**: Root of GitHub Pages site (`https://ramiz4.github.io/gentiana-loki/`)
- **Method**: Deploys to `gh-pages` branch using `peaceiris/actions-gh-pages@v4`

### PR Preview Deployment
- **Workflow**: `.github/workflows/pr-preview.yml`
- **Trigger**: Pull request opened, synchronized, or reopened
- **Target**: Subdirectory in GitHub Pages (`https://ramiz4.github.io/gentiana-loki/pr-{number}/`)
- **Method**: Deploys to `gh-pages` branch in subdirectory using `peaceiris/actions-gh-pages@v4`
- **Cleanup**: Automatically removes preview when PR is closed

## Required GitHub Settings

⚠️ **Important**: For the deployments to work correctly, GitHub Pages must be configured to serve from the `gh-pages` branch.

### Configuration Steps

1. Go to repository **Settings** → **Pages**
2. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **gh-pages** and **/ (root)**
3. Click **Save**

### Why This Configuration Is Required

Both production and PR preview deployments use the `peaceiris/actions-gh-pages@v4` action which pushes content to the `gh-pages` branch. This approach allows:
- Production content at the root path
- PR previews in subdirectories (`pr-1/`, `pr-2/`, etc.)
- Multiple deployments without conflicts (using `keep_files: true`)

## Troubleshooting

### 404 Errors on PR Preview Links

If PR preview links show 404 errors, verify:
1. GitHub Pages is configured to use the `gh-pages` branch (see above)
2. The `gh-pages` branch exists and has content
3. GitHub Pages is enabled for the repository

### Check Deployment Status

- View workflow runs in **Actions** tab
- Check if the `gh-pages` branch exists: `git ls-remote --heads origin gh-pages`
- Verify GitHub Pages status in **Settings** → **Pages**

## Architecture

```
gh-pages branch structure:
├── index.html          (production site)
├── styles.css          (production site)
├── script.js           (production site)
├── cv-de-*.pdf         (production site)
├── pr-1/               (PR #1 preview)
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── pr-2/               (PR #2 preview)
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── ...
```

## Permissions

Both workflows require:
- `contents: write` - To push to the `gh-pages` branch
- `pull-requests: write` - To post comments with preview URLs (PR preview only)
