# Saif Ali — Full Stack Developer

A responsive, accessible personal portfolio built with React, TypeScript, and Vite. It introduces Saif, highlights the portfolio project, outlines the development toolkit, and provides a contact form that can be connected to Formspree.

**Developed as part of the Full Stack Development Internship Program at Auspify Technologies.**

## Features

- Responsive layouts for mobile, tablet, and desktop
- Sticky navigation with an accessible mobile menu
- Intro, about, project, skills, and contact sections
- Reduced-motion support and visible keyboard focus states
- Contact form with validation, loading, success, and error feedback
- Optional Formspree integration through an environment variable
- No fabricated project links or placeholder email address

## Tech stack

- React 18
- TypeScript
- Vite
- CSS

## Requirements

- Node.js 18 or later
- npm

## Run locally

```bash
git clone https://github.com/Saif-Ali-109/auspify-personal-portfolio.git
cd auspify-personal-portfolio
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Configure the contact form

The form uses Formspree as an optional message endpoint.

1. Create a form in Formspree and copy its endpoint.
2. For local development, copy `.env.example` to `.env.local`.
3. Set `VITE_FORMSPREE_ENDPOINT` to your real endpoint.
4. Restart the Vite development server.

For deployment, add the same variable in your hosting provider's project environment settings, then redeploy. Do not commit private keys or credentials. If the endpoint is not configured, the form explains how to reach out rather than pretending to send a message.

## Personalize before publishing

Review the copy in `src/App.tsx`. Add only verified project links, professional profiles, and contact details. Update the location or availability statement if it changes. Avoid publishing private personal information.

## Deploy

This is a standard Vite static application and can be hosted on Vercel, Netlify, or another static host.

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `18+` |

## Internship submission

- Repository: https://github.com/Saif-Ali-109/auspify-personal-portfolio
- Project: Personal Portfolio Website
- Program: Full Stack Development Internship — Auspify Technologies
