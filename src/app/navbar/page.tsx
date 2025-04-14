'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="text-2xl font-bold text-blue-600 font-bold">
          HardCore Builders
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          <Link href="/projects" className="hover:text-blue-500">Projects</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/safety" className="hover:text-blue-500">Health &amp; Safety</Link>
        </div>

        {/* Hamburger Icon with scroll-based gold background and icon color */}
        <button
          className={`md:hidden p-2 rounded transition-colors duration-300 ${
            isScrolled ? 'bg-yellow-500' : 'bg-transparent'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} color={isScrolled ? 'white' : 'black'} />
          ) : (
            <Menu size={24} color={isScrolled ? 'white' : 'black'} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800 text-white shadow-md transition-all duration-300">
          <Link href="/contact" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/about" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/safety" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Health &amp; Safety</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
