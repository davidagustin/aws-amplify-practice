# Streamflix - Netflix/Disney+ Style Streaming App

A modern streaming platform built with Next.js and React, featuring a Netflix/Disney+ inspired interface with movie browsing, search, and filtering capabilities. This is a purely frontend application that showcases popular movies with IMDB data.

## Features

- 🎬 **Movie Browsing**: Browse through a curated collection of popular movies
- 🔍 **Search & Filter**: Search movies by title/description and filter by genre
- ⭐ **Featured Content**: Highlighted featured movies with beautiful backdrop images
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎭 **Movie Details**: Detailed movie information with cast, director, and ratings
- 🎥 **Trailer Integration**: Watch movie trailers directly from YouTube
- 🎨 **Modern UI**: Netflix-inspired dark theme with smooth animations
- 📊 **IMDB Data**: Real movie data including ratings, cast, and descriptions
- ⚡ **Static Export**: Optimized for static hosting and fast loading

## Movie Collection

The app includes a curated selection of classic and popular movies:

- **Inception** (2010) - Sci-Fi/Action/Thriller
- **The Dark Knight** (2008) - Action/Crime/Drama  
- **Interstellar** (2014) - Adventure/Drama/Sci-Fi
- **The Shawshank Redemption** (1994) - Drama
- **Pulp Fiction** (1994) - Crime/Drama
- **The Matrix** (1999) - Action/Sci-Fi
- **Forrest Gump** (1994) - Drama/Romance
- **Fight Club** (1999) - Drama
- **The Lord of the Rings** (2001) - Action/Adventure/Drama
- **The Godfather** (1972) - Crime/Drama
- **Goodfellas** (1990) - Biography/Crime/Drama
- **The Silence of the Lambs** (1991) - Crime/Drama/Thriller

## Getting Started

### Prerequisites

- Node.js 20 or higher
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

- **Static Data**: All movie data is stored locally in the application
- **IMDB Integration**: Movie posters and data sourced from IMDB
- **Client-Side Rendering**: Fast, responsive interface with no server dependencies
- **Search & Filter**: Real-time filtering and search functionality
- **Modal Interface**: Detailed movie information in elegant modal windows

## Features in Detail

### 🎬 Movie Browsing
- Grid layout with movie posters
- Hover effects and smooth animations
- Movie ratings, year, and genre display

### 🔍 Search & Filter
- Real-time search by movie title or description
- Genre-based filtering
- Combined search and filter functionality

### ⭐ Featured Section
- Hero-style featured movies with backdrop images
- Horizontal scrolling carousel
- Prominent display of top-rated content

### 📱 Responsive Design
- Mobile-first approach
- Adaptive grid layouts
- Touch-friendly interface

### 🎭 Movie Details
- Comprehensive movie information
- Cast and director details
- IMDB ratings and movie metadata
- Direct trailer links to YouTube

## Deployment

This app can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `out` folder after building
- **AWS S3 + CloudFront**: Upload the built files to S3
- **GitHub Pages**: Deploy using GitHub Actions

## Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: UI library with hooks
- **TypeScript**: Type safety and better development experience
- **CSS-in-JS**: Inline styles for component-based styling
- **Static Export**: Optimized for static hosting

## Project Structure

```
app/
├── data/
│   └── movies.ts          # Movie database and utilities
├── page.tsx               # Main streaming app component
└── app.css               # Global styles
```

## Contributing

Feel free to contribute by:
- Adding more movies to the database
- Improving the UI/UX design
- Adding new features like user ratings or watchlists
- Optimizing performance

## License

This project is licensed under the MIT-0 License. See the LICENSE file.

---

🎬 **Streamflix** - Your personal Netflix-style streaming experience!