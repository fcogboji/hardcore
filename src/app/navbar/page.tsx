'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
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

        {/* Hamburger Icon */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
            <Link href="/contact" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="about" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/projects" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/health-safety" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Health &amp; Safety</Link>
    
        </div>
      )}
    </nav>
  )
}

export default Navbar
