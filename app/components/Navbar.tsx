'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold text-white hover:text-gray-200">
                Mustafa Hamad Elamin
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white hover:text-gray-200 transition font-medium">
                About
              </a>
              <a href="#skill" className="text-white hover:text-gray-200 transition font-medium">
                Skills
              </a>
              <a href="#portfolio" className="text-white hover:text-gray-200 transition font-medium">
                Projects
              </a>
              <a href="#contact" className="text-white hover:text-gray-200 transition font-medium">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
              >
                {navOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {navOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#about"
                  onClick={() => setNavOpen(false)}
                  className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition font-medium"
                >
                  About
                </a>
                <a
                  href="#skill"
                  onClick={() => setNavOpen(false)}
                  className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition font-medium"
                >
                  Skills
                </a>
                <a
                  href="#portfolio"
                  onClick={() => setNavOpen(false)}
                  className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition font-medium"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={() => setNavOpen(false)}
                  className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
