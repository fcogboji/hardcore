'use client' // This tells Next.js that this component should run on the client-side

import Link from 'next/link' // Importing the Link component from Next.js for navigation
import { useState, useEffect } from 'react' // Importing React hooks for state and lifecycle methods
import { Menu, X } from 'lucide-react' // Importing icons from lucide-react library (Menu and X icons)

const Navbar = () => { // Defining a functional component called Navbar
  const [isOpen, setIsOpen] = useState(false) // State to track whether the mobile menu is open or closed
  const [isScrolled, setIsScrolled] = useState(false) // State to track whether the user has scrolled down

  useEffect(() => {
    // This function runs after the component mounts (like componentDidMount)
    const handleScroll = () => {
      // Check if the page is scrolled more than 10px from the top
      setIsScrolled(window.scrollY > 10)
    }

    // Add a scroll event listener to the window
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // Empty dependency array means this runs only once when the component mounts

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      {/* Navigation bar with fixed position, white background, and shadow */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Container for the navbar content with spacing and alignment */}

        {/* Logo / Site name that links to the home page */}
        <Link href="/" className="text-2xl font-bold text-blue-600 font-bold">
          HardCore Builders
        </Link>

        {/* Desktop navigation links - only shown on medium screens and up */}
        <div className="hidden md:flex space-x-6">
          <Link href="/contact" className="hover:text-blue-500">Contact</Link> {/* Link to Contact page */}
          <Link href="/projects" className="hover:text-blue-500">Projects</Link> {/* Link to Projects page */}
          <Link href="/about" className="hover:text-blue-500">About</Link> {/* Link to About page */}
          <Link href="/safety" className="hover:text-blue-500">Health &amp; Safety</Link> {/* Link to Health & Safety page */}
        </div>

        {/* Hamburger menu button - shown on small screens */}
        <button
          className={`md:hidden p-2 rounded transition-colors duration-300 ${
            isScrolled ? 'bg-yellow-500' : 'bg-transparent'
          }`}
          onClick={() => setIsOpen(!isOpen)} // Toggle the isOpen state when button is clicked
        >
          {/* Show X icon if menu is open, otherwise show Menu icon */}
          {isOpen ? (
            <X size={24} color={isScrolled ? 'white' : 'black'} /> // Close (X) icon with dynamic color
          ) : (
            <Menu size={24} color={isScrolled ? 'white' : 'black'} /> // Hamburger (Menu) icon with dynamic color
          )}
        </button>
      </div>

      {/* Mobile dropdown menu - only shown when isOpen is true */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800 text-white shadow-md transition-all duration-300">
          {/* Each link closes the menu on click by setting isOpen to false */}
          <Link href="/contact" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/about" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/safety" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Health &amp; Safety</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar // Exporting the Navbar component so it can be used in other parts of the app
