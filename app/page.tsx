"use client";

import { useState, useEffect } from "react";
import { movies, getFeaturedMovies, getMoviesByGenre, getAllGenres, type Movie } from "./data/movies";
import "./../app/app.css";

export default function StreamflixApp() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [isClient, setIsClient] = useState(false);

  // Check if we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter movies based on search and genre
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         movie.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "All" || movie.genre.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  const featuredMovies = getFeaturedMovies();
  const genres = ["All", ...getAllGenres()];

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieModal = () => {
    setSelectedMovie(null);
  };

  const playMovie = () => {
    if (selectedMovie?.trailerUrl) {
      window.open(selectedMovie.trailerUrl, '_blank');
    }
  };

  // Don't render anything until we're on the client side
  if (!isClient) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <h1 className="loading-title">Streamflix</h1>
          <div className="loading-spinner">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-logo">Streamflix</h1>
          
          <div className="header-controls">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="genre-select"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main className="app-main">
        {/* Featured Section */}
        {!searchQuery && selectedGenre === "All" && (
          <section className="featured-section">
            <h2 className="section-title">Featured Movies</h2>
            <div className="featured-carousel">
              {featuredMovies.map(movie => (
                <div
                  key={movie.id}
                  onClick={() => handleMovieClick(movie)}
                  className="featured-card"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.8)), url(${movie.backdropUrl})`
                  }}
                >
                  <div className="featured-content">
                    <h3 className="featured-title">{movie.title}</h3>
                    <div className="featured-meta">
                      <span className="rating">⭐ {movie.rating}</span>
                      <span className="year">{movie.year}</span>
                      <span className="duration">{movie.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Movie Grid */}
        <section className="movies-section">
          <h2 className="section-title">
            {searchQuery ? `Search Results for "${searchQuery}"` : 
             selectedGenre !== "All" ? `${selectedGenre} Movies` : 'All Movies'}
          </h2>
          
          <div className="movies-grid">
            {filteredMovies.map(movie => (
              <div
                key={movie.id}
                onClick={() => handleMovieClick(movie)}
                className="movie-card"
              >
                <div className="movie-poster">
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="poster-image"
                  />
                  <div className="movie-overlay">
                    <div className="play-button">▶</div>
                  </div>
                </div>
                <div className="movie-info">
                  <h3 className="movie-title">{movie.title}</h3>
                  <div className="movie-meta">
                    <span className="movie-rating">⭐ {movie.rating}</span>
                    <span className="movie-year">{movie.year}</span>
                  </div>
                  <div className="movie-genres">
                    {movie.genre.join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Movie Modal */}
      {selectedMovie && (
        <div className="modal-overlay" onClick={closeMovieModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeMovieModal}>×</button>
            
            <div className="modal-header">
              <img
                src={selectedMovie.backdropUrl}
                alt={selectedMovie.title}
                className="modal-backdrop"
              />
            </div>
            
            <div className="modal-body">
              <h2 className="modal-title">{selectedMovie.title}</h2>
              
              <div className="modal-meta">
                <span className="modal-rating">⭐ {selectedMovie.rating}/10</span>
                <span className="modal-year">{selectedMovie.year}</span>
                <span className="modal-duration">{selectedMovie.duration}</span>
                <span className="modal-genres">{selectedMovie.genre.join(', ')}</span>
              </div>
              
              <p className="modal-description">{selectedMovie.description}</p>
              
              <div className="modal-details">
                <div className="detail-item">
                  <strong>Director:</strong> {selectedMovie.director}
                </div>
                <div className="detail-item">
                  <strong>Cast:</strong> {selectedMovie.cast.join(', ')}
                </div>
              </div>
              
              <div className="modal-actions">
                {selectedMovie.trailerUrl && (
                  <button onClick={playMovie} className="play-trailer-btn">
                    ▶ Watch Trailer
                  </button>
                )}
                <button onClick={closeMovieModal} className="close-btn">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .loading-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .loading-content {
          text-align: center;
        }

        .loading-title {
          font-size: 3rem;
          font-weight: bold;
          background: linear-gradient(45deg, #e50914, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .loading-spinner {
          font-size: 1.2rem;
          opacity: 0.8;
        }

        .app-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: linear-gradient(to bottom, rgba(0,0,0,0.9), transparent);
          padding: 1rem 0;
          backdrop-filter: blur(10px);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .app-logo {
          font-size: 2rem;
          font-weight: bold;
          background: linear-gradient(45deg, #e50914, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .header-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .search-input {
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          border: none;
          background: rgba(255,255,255,0.1);
          color: white;
          width: 250px;
          font-size: 1rem;
          backdrop-filter: blur(10px);
        }

        .search-input::placeholder {
          color: rgba(255,255,255,0.7);
        }

        .genre-select {
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          border: none;
          background: rgba(255,255,255,0.1);
          color: white;
          cursor: pointer;
          font-size: 1rem;
          backdrop-filter: blur(10px);
        }

        .app-main {
          padding-top: 100px;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 2rem;
          padding-right: 2rem;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: bold;
          margin: 2rem 0 1.5rem 0;
          color: white;
        }

        .featured-section {
          margin-bottom: 3rem;
        }

        .featured-carousel {
          display: flex;
          overflow-x: auto;
          gap: 1.5rem;
          padding: 1rem 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .featured-carousel::-webkit-scrollbar {
          display: none;
        }

        .featured-card {
          min-width: 350px;
          height: 500px;
          background-size: cover;
          background-position: center;
          border-radius: 12px;
          cursor: pointer;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }

        .featured-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5);
        }

        .featured-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          border-radius: 0 0 12px 12px;
        }

        .featured-title {
          margin: 0 0 0.5rem 0;
          font-size: 1.4rem;
          font-weight: bold;
        }

        .featured-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .movies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.5rem;
          padding-bottom: 3rem;
        }

        .movie-card {
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .movie-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }

        .movie-poster {
          position: relative;
          overflow: hidden;
        }

        .poster-image {
          width: 100%;
          height: 320px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .movie-card:hover .poster-image {
          transform: scale(1.1);
        }

        .movie-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .movie-card:hover .movie-overlay {
          opacity: 1;
        }

        .play-button {
          width: 60px;
          height: 60px;
          background: rgba(229, 9, 20, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          backdrop-filter: blur(10px);
        }

        .movie-info {
          padding: 1rem;
        }

        .movie-title {
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
          font-weight: bold;
          line-height: 1.3;
        }

        .movie-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          opacity: 0.8;
          margin-bottom: 0.5rem;
        }

        .movie-genres {
          font-size: 0.75rem;
          opacity: 0.6;
          line-height: 1.3;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.95);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .modal-content {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 16px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow: auto;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255,255,255,0.2);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 1;
          backdrop-filter: blur(10px);
          transition: background 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(255,255,255,0.3);
        }

        .modal-header {
          position: relative;
        }

        .modal-backdrop {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 16px 16px 0 0;
        }

        .modal-body {
          padding: 2rem;
        }

        .modal-title {
          font-size: 2.5rem;
          margin: 0 0 1rem 0;
          font-weight: bold;
          background: linear-gradient(45deg, #e50914, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .modal-meta {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.5rem;
          font-size: 1rem;
          opacity: 0.9;
          flex-wrap: wrap;
        }

        .modal-description {
          margin-bottom: 1.5rem;
          line-height: 1.7;
          opacity: 0.9;
          font-size: 1.1rem;
        }

        .modal-details {
          margin-bottom: 2rem;
        }

        .detail-item {
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .play-trailer-btn {
          padding: 1rem 2rem;
          background: linear-gradient(45deg, #e50914, #ff6b6b);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          transition: transform 0.3s ease;
        }

        .play-trailer-btn:hover {
          transform: scale(1.05);
        }

        .close-btn {
          padding: 1rem 2rem;
          background: rgba(255,255,255,0.2);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          backdrop-filter: blur(10px);
          transition: background 0.3s ease;
        }

        .close-btn:hover {
          background: rgba(255,255,255,0.3);
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 1rem;
          }

          .header-controls {
            width: 100%;
            justify-content: center;
          }

          .search-input {
            width: 200px;
          }

          .app-main {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .movies-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 1rem;
          }

          .featured-card {
            min-width: 280px;
            height: 400px;
          }

          .modal-content {
            margin: 1rem;
            max-height: 95vh;
          }

          .modal-title {
            font-size: 1.8rem;
          }

          .modal-meta {
            gap: 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
