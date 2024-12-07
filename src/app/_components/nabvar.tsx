'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-gray-800 hover:bg-gray-200' : 'text-white hover:bg-white/10'
              }`}>
                Home
              </Link>
              <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-gray-800 hover:bg-gray-200' : 'text-white hover:bg-white/10'
              }`}>
                About
              </Link>
              <Link href="/services" className={`px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-gray-800 hover:bg-gray-200' : 'text-white hover:bg-white/10'
              }`}>
                Services
              </Link>
              <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-gray-800 hover:bg-gray-200' : 'text-white hover:bg-white/10'
              }`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

