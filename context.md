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

### Room Page

1. /rooms/[id]
2. useEffect to load room data when component is mounted, using the id from the URL
  - Sim fetching with setTimeout and show loading state while data isn't fully loaded
3. Picture gallery (max 5 elements) at top
  - useState stores current visible picture index's, use previous/next buttons to move through the array of pictures
  - Include a bottom-right overlay on the image with a counter of pictures #/#
4. Heading for the room: title, rating, number of reviews and location
5. Host information row: avatar picture, host's name and years as host
  - Create new hostCard interface for this and create 3 instances so we have options for the Room Page
6. Add an "Amenities" section: grid with pairs using icon + tag
7. Floating reservation card (anchored bottom) that includes: price for night, guests counter, CTA button
  - useState for guest counter with min 1 and max 4
  - Optional: use date picker lib to add check-in and check-out dates and then calculate total price for nights chosen