# Project Context

This is an AirBNB clone using React and Next.js. Will provide images so agent determines workflow for the 3 pages we neeed: Home, Catalog, and Rooms.

## Stack

- Next.js 16 with the App Router
- TypeScript
- Tailwind CSS 4
- React 19
- ESLint

## Package Manager

npm

## Dos

- Use /app for routes, /components for reusable UI, /types for TypeScript interfaces.
- Mobile-first, primary viewport is 375px, then adapt for desktop from 768px and up.
- Each component must have one responsability.
- Navigation across pages must be SPA.
- Work with <Link />.
- All components are defined as const; no class component.

## Don'ts

- Use inline styling.
- Use <a href="..."> for links.
- Use prebuilt components libraries.
- Have components be more than ~80 JSX lines + logic; if so, break it down.