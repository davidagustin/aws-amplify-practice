'use client'

import { useState, useEffect } from 'react'
import { Search, Bell, User } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-2xl font-bold">STREAMFLIX</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">New & Popular</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a>
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" />
          <Bell className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" />
          <User className="w-8 h-8 text-white cursor-pointer hover:text-gray-300 transition-colors" />
        </div>
      </div>
    </nav>
  )
} 