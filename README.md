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