'use client'

import { useEffect, useRef, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navSolid, setNavSolid] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleScroll() {
      const heroHeight = heroRef.current?.offsetHeight ?? 0
      const scrollThreshold = heroHeight - 72
      setNavSolid(window.scrollY >= scrollThreshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div ref={heroRef} className="w-full h-screen relative">
      {/* Background with brightness filter */}
      <div
        className="absolute inset-0 w-full h-screen bg-cover bg-center brightness-50"
        style={{
          backgroundImage: 'url(/bacgroundpic.jpg)',
        }}
      />

      {/* Content */}
      <header className="fixed top-0 left-0 right-0 z-30">
        <nav className={`transition-colors duration-300 ${navSolid ? 'bg-green-700/95 shadow-lg' : 'bg-transparent'}`}>
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
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
                >
                  {mobileMenuOpen ? (
                    <XMarkIcon className="w-6 h-6" />
                  ) : (
                    <Bars3Icon className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#skill"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition font-medium"
                  >
                    Skills
                  </a>
                  <a
                    href="#portfolio"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
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

      {/* Hero Content */}
      <div className="relative z-20 w-full pt-24 pb-20 flex flex-col items-center justify-center h-full">
        <div className="text-center max-w-2xl px-4">
          {/* Profile Image */}
          <div className="mb-12 mt-24 flex justify-center">
            <img
              src="./MustafaH.jpg"
              alt="Mustafa Hamad ElAmin"
              className="w-64 h-64 rounded-full shadow-2xl object-cover"
            />
          </div>

          {/* Title and Subtitle */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Mustafa Hamad ElAmin
          </h1>
          <p className="text-lg md:text-2xl text-white mb-10 font-semibold tracking-wide">
            FRONT-END WEB DEVELOPMENT
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#contact"
              className="px-10 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition shadow-lg"
            >
              Hire Me
            </a>
            <a
              href="/Mustafa_Hamad_CV.pdf"
              className="px-10 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition shadow-lg"
            >
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center flex-wrap pt-0 -mt-2">
            <a
              href="https://www.linkedin.com/in/mustafa-elamin-688b24171/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gray-500/80 hover:bg-gray-600 flex items-center justify-center text-white transition shadow-lg"
              title="LinkedIn"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://github.com/mu21stafa23"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gray-500/80 hover:bg-gray-600 flex items-center justify-center text-white transition shadow-lg"
              title="GitHub"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.545 2.914 1.209.092-.94.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="mailto:Mu21stafa23@gmail.com"
              className="w-14 h-14 rounded-full bg-gray-500/80 hover:bg-gray-600 flex items-center justify-center text-white transition shadow-lg"
              title="Email"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href="https://wa.me/+971509711552"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gray-500/80 hover:bg-gray-600 flex items-center justify-center text-white transition shadow-lg"
              title="WhatsApp"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.486-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.903 1.235c-1.523.79-2.823 2.016-3.622 3.465C3.076 9.464 2.881 11.01 2.881 12.622c0 4.985 4.039 9.024 9.022 9.024h4.765c4.983 0 9.023-4.039 9.023-9.024 0-4.985-4.04-9.023-9.023-9.023zm4.564 18.040c-2.379.737-4.97.706-7.244-.152-6.514-2.468-10.881-9.041-8.412-15.554 2.468-6.513 9.041-10.88 15.554-8.412 6.514 2.468 10.88 9.041 8.412 15.554-.739 1.944-1.86 3.615-3.237 4.957-1.007.991-2.15 1.842-3.398 2.464z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
