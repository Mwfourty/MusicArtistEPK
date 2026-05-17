# WoWo EPK Frontend

This repository contains the frontend for the WoWo Mndau electronic press kit (EPK), built with React, Vite, and Tailwind CSS.

## Project structure

- `src/`
  - `App.jsx` — main app entry component
  - `main.jsx` — React bootstrap and favicon injection
  - `index.css` — global styles
  - `pages/` — page sections like `Cover`, `About`, `Experience`, `Discography`, `Gallery`, `Videos`, `Booking`
  - `components/` — reusable UI pieces
  - `assets/` — static assets for the app
    - `gallery/` — gallery images
    - `images/` — brand and cover images
    - `videos/` — video assets
    - `favicon/` — favicon source image
  - `data/artist.js` — application content and metadata

## Requirements

- Node.js 18+ is recommended
- npm or compatible package manager

## Setup

From the `frontend/` folder:

```bash
npm install
```

## Development

Start the local Vite dev server:

```bash
npm run dev
```

Open the URL shown in the terminal to preview the app.

## Build

To build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Notes

- The favicon is loaded from `src/assets/favicon/MEEKMUSIC-tr.png`.
- The booking page renders social buttons and the artist logo from `src/assets/images/meekmusic-logo.png`.
- `src/pages/Gallery.jsx` displays gallery images from `src/assets/gallery/`.
