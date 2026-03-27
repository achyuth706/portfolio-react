import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
<div className="w-full px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="font-heading font-bold text-lg text-white tracking-tight">
          Achyutha<span className="text-accent"> Sushanth</span> Ariga
        </span>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {['experience', 'projects', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="font-mono text-sm text-gray-400 hover:text-accent transition-colors capitalize"
            >
              {section}
            </button>
          ))}
        </div>

        {/* Open to work badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs text-accent whitespace-nowrap">Open to work</span>
        </div>
      </div>
    </nav>
  )
}
