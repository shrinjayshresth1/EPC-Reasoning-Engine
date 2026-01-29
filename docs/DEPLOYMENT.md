# Deployment Guide

## Overview

This guide covers deploying the EPC Management System to various hosting platforms.

## Table of Contents

- [Build Process](#build-process)
- [Environment Configuration](#environment-configuration)
- [Deployment Platforms](#deployment-platforms)
- [CI/CD Pipeline](#cicd-pipeline)
- [Post-Deployment](#post-deployment)

## Build Process

### Production Build

Create an optimized production build:

```bash
npm run build
```

This command:
1. Bundles all JavaScript files
2. Minifies and optimizes code
3. Processes CSS and assets
4. Generates source maps (optional)
5. Creates a `dist/` directory with production files

### Build Output

```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other-assets]
├── index.html
└── vite.svg
```

### Build Configuration

Edit `vite.config.js` for custom build settings:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
```

## Environment Configuration

### Environment Variables

Create `.env` file (not committed to git):

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=EPC Management System
VITE_ENABLE_ANALYTICS=true
```

Access in code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Environment Files

- `.env` - Default environment variables
- `.env.local` - Local overrides (gitignored)
- `.env.production` - Production-specific variables
- `.env.development` - Development-specific variables

## Deployment Platforms

### Vercel

#### Quick Deploy

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

#### Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### Environment Variables

Set in Vercel dashboard:
- Settings → Environment Variables
- Add variables for production, preview, development

### Netlify

#### Deploy Steps

1. Connect repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

3. Add environment variables in dashboard

#### Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### GitHub Pages

#### Setup

1. Install gh-pages package:
   ```bash
   npm install -D gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://username.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/repo-name/',
     // ... other config
   });
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### AWS S3 + CloudFront

#### S3 Setup

1. Create S3 bucket
2. Enable static website hosting
3. Set bucket policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::your-bucket/*"
  }]
}
```

#### Upload Files

```bash
aws s3 sync dist/ s3://your-bucket --delete
```

#### CloudFront Setup

1. Create CloudFront distribution
2. Set origin to S3 bucket
3. Configure custom error responses (404 → /index.html)
4. Add SSL certificate

### Docker

#### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Build and Run

```bash
# Build image
docker build -t epc-management .

# Run container
docker run -p 8080:80 epc-management
```

#### Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### GitLab CI/CD

Create `.gitlab-ci.yml`:

```yaml
stages:
  - build
  - deploy

build:
  stage: build
  image: node:18
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/
  only:
    - main

deploy:
  stage: deploy
  image: alpine:latest
  script:
    - apk add --no-cache curl
    - curl -X POST $DEPLOY_WEBHOOK_URL
  only:
    - main
  dependencies:
    - build
```

## Post-Deployment

### Verification Checklist

- [ ] Application loads correctly
- [ ] All routes work
- [ ] Theme toggle functions
- [ ] No console errors
- [ ] Performance metrics acceptable
- [ ] SSL certificate valid
- [ ] Environment variables set
- [ ] Analytics tracking active

### Performance Monitoring

#### Google Lighthouse

```bash
npm install -g lighthouse
lighthouse https://your-site.com --view
```

Target Scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

#### Web Vitals

Monitor in production:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

### Rollback Strategy

#### Quick Rollback

```bash
# Vercel
vercel rollback

# Netlify
netlify deploy --prod --dir=dist

# Manual
git revert HEAD
npm run build
# Redeploy
```

### Monitoring and Logs

#### Error Tracking

Integrate Sentry:

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: import.meta.env.MODE,
});
```

#### Analytics

Google Analytics:

```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Troubleshooting

### Common Issues

**Build fails**
- Clear node_modules and reinstall
- Check Node.js version compatibility
- Verify environment variables

**404 on refresh**
- Configure server redirects
- Ensure SPA routing setup correct

**Assets not loading**
- Check base path configuration
- Verify CORS settings
- Check CDN configuration

### Support

For deployment issues:
- Check platform documentation
- Review build logs
- Contact platform support

---

**Last Updated**: January 30, 2026
