# AI Nutrition Assistant

Đồ án tốt nghiệp ai-nutrition-assistant 

## Overview

An AI-powered nutrition assistant web application built with Next.js, designed to help users make better nutrition choices through intelligent recommendations and tracking.

## Features

- 🥗 Smart Meal Planning
- 📊 Nutrition Tracking
- 🤖 AI-Powered Advice
- 📱 Easy to Use Interface

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

This project is optimized for deployment on Vercel:

### Option 1: Deploy via Vercel Dashboard

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Configuration

The project includes a `vercel.json` file with the following configuration:
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Project Structure

```
ai-nutrition-assistant/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel deployment configuration
```

## License

This is a graduation project (Đồ án tốt nghiệp).

