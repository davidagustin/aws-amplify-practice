'use client'

import { Play, Info } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Stranger Things
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded font-semibold hover:bg-opacity-80 transition-all">
              <Play className="w-5 h-5" />
              Play
            </button>
            <button className="flex items-center justify-center gap-2 bg-gray-600 bg-opacity-70 text-white px-8 py-3 rounded font-semibold hover:bg-opacity-50 transition-all">
              <Info className="w-5 h-5" />
              More Info
            </button>
          </div>

          {/* Movie Details */}
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-300">
            <span className="text-green-400 font-semibold">98% Match</span>
            <span>2016</span>
            <span className="border border-gray-500 px-1">TV-MA</span>
            <span>4 Seasons</span>
            <span className="border border-gray-500 px-1">HD</span>
          </div>
        </div>
      </div>
    </div>
  )
} 