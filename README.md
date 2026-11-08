# Saif Ali — Personal Portfolio

A responsive personal portfolio built with React, TypeScript, and Vite. The interface includes an introduction, about section, selected projects, skills, and a contact form.

**Developed as part of the Full Stack Development Internship Program at Auspify Technologies.**

## Features

- Responsive layout for mobile, tablet, and desktop
- Single-page navigation with mobile menu
- About, work, skills, and contact sections
- Project cards and social profile links
- Accessible form labels and status messages
- Optional Formspree contact-form integration
- Reduced-motion support

## Tech stack

- React 18
- TypeScript
- Vite
- CSS

## Run locally

1. Install Node.js (18 or later).
2. Clone this repository.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Create a production build:

   ```bash
   npm run build
   ```

## Configure the contact form

The form uses an optional Formspree endpoint. Create a form with Formspree, copy its endpoint, and add it as `VITE_FORMSPREE_ENDPOINT` in your deployment provider's environment variables. For local use, copy `.env.example` to `.env` and add the endpoint. Restart the dev server after changing environment variables.

Without an endpoint, the form displays setup guidance instead of pretending that a message was delivered.

## Personalize before publishing

Review the project descriptions and links in `src/App.tsx`. Replace placeholder project destinations, the example email address, and social links with verified details before sharing the site publicly. Do not publish private contact information.

## Deploy

This is a standard Vite application and can be deployed to Vercel, Netlify, or any static host that supports Vite.

- Build command: `npm run build`
- Output directory: `dist`

For Vercel, import this GitHub repository and keep the detected Vite settings. For Netlify, use the build command and publish directory above.

## Internship submission

- Repository: https://github.com/Saif-Ali-109/auspify-personal-portfolio
- Project: Personal Portfolio Website
- Program: Full Stack Development Internship — Auspify Technologies