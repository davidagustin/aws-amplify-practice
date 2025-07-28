'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { genreCategories, Movie } from '../data/movies'

interface MovieCarouselProps {
  title: string
  category: string
}

export default function MovieCarousel({ title, category }: MovieCarouselProps) {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const movies = genreCategories[category as keyof typeof genreCategories] || []

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Initialize arrow visibility on mount
  useEffect(() => {
    handleScroll()
  }, [movies])

  // Fallback handler: set the src directly to the placeholder
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, title: string) => {
    const placeholder = `https://placehold.co/350x525/1a1a1a/ffffff?text=${encodeURIComponent(title)}`
    if (e.currentTarget.src !== placeholder) {
      e.currentTarget.src = placeholder
    }
  }

  if (movies.length === 0) {
    return null
  }

  return (
    <div className="relative group">
      <h2 className="text-xl font-semibold mb-4 px-4 md:px-8 lg:px-16">{title}</h2>
      
      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}
        
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
        
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex space-x-2 overflow-x-auto scrollbar-hide pb-4 px-4 md:px-8 lg:px-16"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card flex-shrink-0 w-40 sm:w-48 h-56 sm:h-72 relative cursor-pointer"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover rounded"
                onError={e => handleImageError(e, movie.title)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-semibold text-sm mb-1">{movie.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span className="border border-gray-500 px-1">{movie.rating}</span>
                    <span>•</span>
                    <span>{movie.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-green-400 mt-1">
                    <span>{movie.matchPercentage}% Match</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 