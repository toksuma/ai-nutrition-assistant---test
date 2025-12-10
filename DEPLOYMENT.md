# Deployment Guide for Vercel

This document provides step-by-step instructions for deploying the AI Nutrition Assistant to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (free tier is sufficient) - Sign up at [vercel.com](https://vercel.com)
- Your code pushed to a GitHub repository

## Method 1: Deploy via Vercel Dashboard (Recommended for beginners)

### Step 1: Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com) and log in
2. Click on "Add New..." → "Project"
3. If this is your first time, you'll be asked to connect your GitHub account
4. Click "Continue with GitHub" and authorize Vercel

### Step 2: Import Your Repository

1. Find your repository `ai-nutrition-assistant---test` in the list
2. Click "Import" next to it
3. Vercel will automatically detect that it's a Next.js project

### Step 3: Configure Project Settings

Vercel will auto-detect the settings, but verify:

- **Framework Preset:** Next.js
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

### Step 4: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually takes 1-2 minutes)
3. Once deployed, you'll get a URL like: `https://your-project-name.vercel.app`

### Step 5: View Your Deployed Site

1. Click on the provided URL to view your live site
2. Share this URL with anyone to show your project!

## Method 2: Deploy via Vercel CLI (For advanced users)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy from your project directory

```bash
# Navigate to your project
cd /path/to/ai-nutrition-assistant---test

# Deploy to production
vercel --prod
```

The CLI will guide you through the setup process and provide a deployment URL.

## Environment Variables (Optional)

If your project needs environment variables:

1. Go to your project in Vercel Dashboard
2. Click on "Settings" → "Environment Variables"
3. Add your variables (e.g., API keys)
4. Redeploy for changes to take effect

## Custom Domain (Optional)

To use a custom domain:

1. Go to your project in Vercel Dashboard
2. Click on "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Automatic Deployments

After initial setup:

- Every push to your `main` branch triggers a production deployment
- Every push to other branches creates a preview deployment
- Pull requests automatically get preview URLs

## Troubleshooting

### Build Fails

- Check the build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify the build works locally with `npm run build`

### Page Not Loading

- Check if the deployment completed successfully
- Look for errors in the Vercel Dashboard logs
- Ensure `vercel.json` configuration is correct

## Monitoring and Analytics

Vercel provides:

- **Analytics:** View page load times and visitor stats
- **Logs:** Real-time function logs
- **Speed Insights:** Performance metrics

Access these in your project dashboard.

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## Security Notes

- Never commit `.env` files or secrets
- Use Vercel's Environment Variables for sensitive data
- Keep dependencies updated regularly
- Monitor security advisories

---

**Last Updated:** December 2024
