# GitHub Pages Deployment Configuration

## Overview

This repository uses GitHub Pages to host the portfolio website with support for PR preview deployments.

## Deployment Methods

### Production Deployment
- **Workflow**: `.github/workflows/deploy-pages.yml`
- **Trigger**: Push to `main` branch or manual dispatch
- **Target**: Root of GitHub Pages site (`https://ramiz4.github.io/gentiana-loki/`)
- **Method**: Deploys to `gh-pages` branch using `peaceiris/actions-gh-pages@4f9cc6602d3f66b9c108549d475ec49e8ef4d45e` (v4.0.0)

### PR Preview Deployment
- **Workflow**: `.github/workflows/pr-preview.yml`
- **Trigger**: Pull request opened, synchronized, reopened, or closed
- **Target**: Subdirectory in GitHub Pages (`https://ramiz4.github.io/gentiana-loki/pr-{number}/`)
- **Method**: Single unified job that handles deployment, cleanup, and forked PR notifications
- **Cleanup**: Automatically removes preview when PR is closed
- **Design**: Uses conditional steps within a single job to avoid showing skipped checks in PR status

## Required GitHub Settings

⚠️ **Important**: For the deployments to work correctly, GitHub Pages must be configured to serve from the `gh-pages` branch.

### Configuration Steps

1. Go to repository **Settings** → **Pages**
2. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **gh-pages** and **/ (root)**
3. Click **Save**

### Why This Configuration Is Required

Both production and PR preview deployments use the `peaceiris/actions-gh-pages` action (pinned to commit SHA `4f9cc6602d3f66b9c108549d475ec49e8ef4d45e` for v4.0.0) which pushes content to the `gh-pages` branch. This approach allows:
- Production content at the root path
- PR previews in subdirectories (`pr-1/`, `pr-2/`, etc.)
- Multiple deployments without conflicts (using `keep_files: true`)

**Production Deployment Strategy**: The production workflow includes a cleanup step that removes stale files at the root while preserving `pr-*` directories. This prevents accumulation of renamed or deleted files while keeping PR previews intact. The `keep_files: true` setting then ensures PR preview subdirectories are preserved when new production content is deployed.

## Security Considerations

The workflows use `peaceiris/actions-gh-pages` pinned to commit SHA `4f9cc6602d3f66b9c108549d475ec49e8ef4d45e` (v4.0.0) instead of a mutable tag. This provides protection against supply chain attacks where a compromised tag could execute malicious code. The commit SHA is immutable and ensures the exact version of the action is used. When updating, verify the new commit SHA corresponds to a legitimate release.

## Troubleshooting

### 404 Errors on PR Preview Links

If PR preview links show 404 errors, verify:
1. **GitHub Pages is configured to use the `gh-pages` branch** (see configuration steps above) - this is the most common cause of 404 errors
2. The `gh-pages` branch exists and has content
3. GitHub Pages is enabled for the repository
4. Wait a few minutes after the workflow completes for GitHub Pages to rebuild and serve the new content

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

Workflow permissions:
- `contents: write` - Required for both workflows to push to the `gh-pages` branch
- `pull-requests: write` - Required only for the PR preview workflow to post comments with preview URLs
