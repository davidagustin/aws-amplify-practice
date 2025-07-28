import Hero from './components/Hero'
import MovieCarousel from './components/MovieCarousel'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <div className="space-y-4 pb-16">
        <MovieCarousel title="Trending Now" category="trending" />
        <MovieCarousel title="Popular on StreamFlix" category="popular" />
        <MovieCarousel title="New Releases" category="new" />
        <MovieCarousel title="Action & Adventure" category="action" />
        <MovieCarousel title="Comedies" category="comedy" />
        <MovieCarousel title="Dramas" category="drama" />
        <MovieCarousel title="Sci-Fi & Fantasy" category="scifi" />
        <MovieCarousel title="Horror" category="horror" />
        <MovieCarousel title="Romance" category="romance" />
        <MovieCarousel title="Thrillers" category="thriller" />
        <MovieCarousel title="Animation" category="animation" />
        <MovieCarousel title="Crime & Mystery" category="crime" />
        <MovieCarousel title="Adventure" category="adventure" />
        <MovieCarousel title="Mystery & Suspense" category="mystery" />
        <MovieCarousel title="Family Friendly" category="family" />
      </div>
    </main>
  )
} 