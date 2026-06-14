
npx plugins add vercel/vercel-plugin

# Mujtaba Portfolio

Advanced personal portfolio website for Mujtaba, a MERN Stack Developer.

## Tech Stack

- React.js
- Tailwind CSS
- HTML, CSS, Bootstrap
- Next.js
- PostgreSQL
- Framer Motion
- React Router
- Lucide React
- React Icons
- Vite

## Features

- Premium SaaS-style dark-first design
- Light mode support
- Sticky responsive navbar
- Animated hero typing text
- Floating tech badges
- Glassmorphism cards
- Bento-style layouts
- Project filter tabs
- Section reveal animations
- Animated counters
- Contact form validation
- Loading screen
- Scroll progress bar
- Custom cursor effect
- Back-to-top button
- 404 page
- Smooth page transitions
- SEO-friendly metadata

## Project Structure

```text
src/
  assets/
    mujtaba-portrait.png
  components/
    About.jsx
    AnimatedCounter.jsx
    BackToTop.jsx
    Contact.jsx
    CustomCursor.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    LoadingScreen.jsx
    Navbar.jsx
    Projects.jsx
    ScrollProgress.jsx
    SectionHeading.jsx
    Services.jsx
    Skills.jsx
    Testimonials.jsx
  data/
    portfolioData.js
  pages/
    Home.jsx
    NotFound.jsx
  App.jsx
  main.jsx
  styles.css
```

## Installation

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Editing Content

Most portfolio content is stored in:

```text
src/data/portfolioData.js
```

Update this file to change projects, skills, services, testimonials, social links, email, location, and resume URL.

## Contact Form

The contact form submits to `mujtabasekandari470@gmail.com` through FormSubmit. On the first real submission, FormSubmit may send an activation email to confirm the address before messages are delivered.
