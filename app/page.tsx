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
      <div style={{ 
        background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Streamflix</h1>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
      minHeight: '100vh',
      color: 'white'
    }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #e50914, #ff6b6b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Streamflix
        </h1>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: 'none',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              width: '200px'
            }}
          />
          
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: 'none',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      </header>

      <main style={{ paddingTop: '80px' }}>
        {/* Featured Section */}
        {!searchQuery && selectedGenre === "All" && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              margin: '0 2rem 1rem 2rem',
              fontWeight: 'bold'
            }}>
              Featured Movies
            </h2>
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              padding: '0 2rem',
              gap: '1rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}>
              {featuredMovies.map(movie => (
                <div
                  key={movie.id}
                  onClick={() => handleMovieClick(movie)}
                  style={{
                    minWidth: '300px',
                    height: '450px',
                    background: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.8)), url(${movie.backdropUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1rem',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.9))'
                  }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{movie.title}</h3>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                      <span>⭐ {movie.rating}</span>
                      <span>{movie.year}</span>
                      <span>{movie.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Movie Grid */}
        <section>
          <h2 style={{ 
            fontSize: '1.5rem', 
            margin: '0 2rem 1rem 2rem',
            fontWeight: 'bold'
          }}>
            {searchQuery ? `Search Results for "${searchQuery}"` : 
             selectedGenre !== "All" ? `${selectedGenre} Movies` : 'All Movies'}
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
            padding: '0 2rem 2rem 2rem'
          }}>
            {filteredMovies.map(movie => (
              <div
                key={movie.id}
                onClick={() => handleMovieClick(movie)}
                style={{
                  background: '#2a2a2a',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ 
                    margin: '0 0 0.5rem 0', 
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    {movie.title}
                  </h3>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    fontSize: '0.8rem', 
                    opacity: 0.7 
                  }}>
                    <span>⭐ {movie.rating}</span>
                    <span>{movie.year}</span>
                  </div>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    opacity: 0.6,
                    marginTop: '0.5rem'
                  }}>
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
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.9)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{
            background: '#1a1a1a',
            borderRadius: '12px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }}>
            <button
              onClick={closeMovieModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 1
              }}
            >
              ×
            </button>
            
            <img
              src={selectedMovie.backdropUrl}
              alt={selectedMovie.title}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px'
              }}
            />
            
            <div style={{ padding: '2rem' }}>
              <h2 style={{ 
                fontSize: '2rem', 
                margin: '0 0 1rem 0',
                fontWeight: 'bold'
              }}>
                {selectedMovie.title}
              </h2>
              
              <div style={{ 
                display: 'flex', 
                gap: '2rem', 
                marginBottom: '1rem',
                fontSize: '0.9rem',
                opacity: 0.8
              }}>
                <span>⭐ {selectedMovie.rating}/10</span>
                <span>{selectedMovie.year}</span>
                <span>{selectedMovie.duration}</span>
                <span>{selectedMovie.genre.join(', ')}</span>
              </div>
              
              <p style={{ 
                marginBottom: '1rem',
                lineHeight: '1.6',
                opacity: 0.9
              }}>
                {selectedMovie.description}
              </p>
              
              <div style={{ marginBottom: '1rem' }}>
                <strong>Director:</strong> {selectedMovie.director}
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <strong>Cast:</strong> {selectedMovie.cast.join(', ')}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {selectedMovie.trailerUrl && (
                  <button
                    onClick={playMovie}
                    style={{
                      padding: '0.75rem 2rem',
                      background: '#e50914',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 'bold'
                    }}
                  >
                    ▶ Watch Trailer
                  </button>
                )}
                <button
                  onClick={closeMovieModal}
                  style={{
                    padding: '0.75rem 2rem',
                    background: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
