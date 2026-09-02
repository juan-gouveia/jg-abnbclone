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

## What we need

### Home Page (/)

**1 & 2 are anchored on top of site**
1. Top navbar
  - Logo (left), search bar (center), user menu icon
    * Search bar uses useState to store input and filter visible roomsCard in real time
2. Horizontal filter bar (below navbar)
  - Icon + tag: "Beach", "Apartment", "Room", "Mountain"
    * useState stores active category and highlights it
    * Must be a carrousel on small viewport
3. Responsive grid for roomsCard (include 10 for this project)
  - roomsCard must include picture placeholder, title, price per night and rating (stars from 1 to 5)
  - Grid is to be 1 column when viewport = 375px
  - Implement useEffect to simulate data loading while website is building: start with empty list with a load state true, after a small setTimeout (2 seconds) asing data and mark the state as false. Show a loading indicator while data is not available.

### Catalog

1. Heading with search results: number of matches, order controls (ascendant/descendant by price)
  - useState to keep selected order and reorder shown roomsCard accordingly
2. Reuse roomsCard from home page
3. Add a location map (below roomsCard for 375px, to the right on bigger screens)
  - Implement Google Maps API
  - Show each result on the map as a pin using it's coordinates