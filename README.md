# StreamFlix - Netflix/Disney+ Style Streaming App

A modern streaming platform built with Next.js 15 and React, featuring a Netflix/Disney+ inspired interface with movie browsing, carousels, and responsive design. This is a frontend application that showcases popular movies with real poster images and robust fallback systems.

## 🌐 Live Demo

**Visit the live application:** [https://main.d1bolbr8do04cv.amplifyapp.com/](https://main.d1bolbr8do04cv.amplifyapp.com/)

The app is deployed on AWS Amplify and features all the functionality described below.

## Features

- 🎬 **Movie Carousels**: Horizontal scrolling carousels for different genres
- 🎭 **Hero Section**: Featured movie with backdrop image and call-to-action buttons
- 🔍 **Navigation**: Fixed navbar with scroll-triggered background
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Netflix-Style UI**: Dark theme with smooth hover effects and animations
- 🖼️ **Real Movie Posters**: Authentic movie posters from reliable sources
- ⚡ **Image Fallback**: Robust fallback system for broken images
- 🎯 **Genre Categories**: Multiple carousels for different movie genres
- 🎥 **Movie Details**: Hover cards with movie information and ratings

## Movie Collection

The app includes a diverse collection of movies across multiple genres:

### Action & Adventure
- **The Dark Knight** (2008) - Action/Crime/Drama
- **Mad Max: Fury Road** (2015) - Action/Adventure/Sci-Fi
- **John Wick** (2014) - Action/Crime/Thriller
- **Mission: Impossible - Fallout** (2018) - Action/Adventure/Thriller
- **The Avengers** (2012) - Action/Adventure/Sci-Fi

### Comedy
- **Superbad** (2007) - Comedy
- **The Hangover** (2009) - Comedy
- **Shaun of the Dead** (2004) - Comedy/Horror
- **The Grand Budapest Hotel** (2014) - Comedy/Drama
- **Bridesmaids** (2011) - Comedy/Romance

### Drama
- **Forrest Gump** (1994) - Drama/Romance
- **The Shawshank Redemption** (1994) - Drama
- **The Green Mile** (1999) - Crime/Drama
- **Schindler's List** (1993) - Biography/Drama/History
- **The Godfather** (1972) - Crime/Drama

### Sci-Fi & Fantasy
- **Inception** (2010) - Action/Adventure/Sci-Fi
- **Interstellar** (2014) - Adventure/Drama/Sci-Fi
- **Blade Runner 2049** (2017) - Action/Drama/Mystery
- **Arrival** (2016) - Drama/Mystery/Sci-Fi
- **The Matrix** (1999) - Action/Sci-Fi

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aws-amplify-practice
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
pnpm start
```

## How It Works

- **Component-Based Architecture**: Modular components for Hero, Navbar, and MovieCarousel
- **Real Movie Data**: Curated movie database with authentic information
- **Image Management**: Real poster images with fallback placeholders
- **Responsive Carousels**: Smooth horizontal scrolling with arrow navigation
- **Hover Effects**: Netflix-style hover animations and information display

## Features in Detail

### 🎬 Movie Carousels
- Horizontal scrolling carousels for each genre
- Arrow navigation with smooth scrolling
- Hover effects with movie details
- Responsive design for all screen sizes

### 🎭 Hero Section
- Full-screen hero with backdrop image
- Gradient overlay for text readability
- Call-to-action buttons (Play, More Info)
- Movie metadata display

### 🔍 Navigation
- Fixed navbar with scroll-triggered background
- Logo and navigation links
- Search, notifications, and user icons
- Smooth transitions and hover effects

### 🖼️ Image System
- Real movie posters from OMDb, TMDB, and Wikimedia
- Automatic fallback to styled placeholders
- No broken images or missing content
- Consistent aspect ratios and styling

### 📱 Responsive Design
- Mobile-first approach
- Adaptive carousel layouts
- Touch-friendly navigation
- Optimized for all devices

## Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: UI library with hooks and TypeScript
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **PostCSS**: CSS processing and optimization

## Project Structure

```
app/
├── components/
│   ├── Hero.tsx              # Hero section component
│   ├── MovieCarousel.tsx     # Movie carousel component
│   └── Navbar.tsx            # Navigation component
├── data/
│   └── movies.ts             # Movie database and utilities
├── globals.css               # Global styles and Tailwind imports
├── layout.tsx                # Root layout component
└── page.tsx                  # Main page component
```

## Key Components

### MovieCarousel
- Horizontal scrolling with arrow navigation
- Image fallback system for broken posters
- Hover effects with movie details
- Responsive design for all screen sizes

### Hero
- Full-screen backdrop with gradient overlay
- Movie information and call-to-action buttons
- Responsive text sizing and positioning

### Navbar
- Fixed positioning with scroll-triggered background
- Navigation links and user interface elements
- Smooth transitions and hover effects

## Deployment

This app is currently deployed on **AWS Amplify** and can be deployed to any static hosting service:

- **AWS Amplify**: ✅ Currently deployed - [Live Demo](https://main.d1bolbr8do04cv.amplifyapp.com/)
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the build folder after building
- **AWS S3 + CloudFront**: Upload the built files to S3
- **GitHub Pages**: Deploy using GitHub Actions

## Contributing

Feel free to contribute by:
- Adding more movies to the database
- Improving the UI/UX design
- Adding new features like search functionality
- Optimizing performance and accessibility

## License

This project is licensed under the MIT-0 License. See the LICENSE file.

---

🎬 **StreamFlix** - Your personal Netflix-style streaming experience!