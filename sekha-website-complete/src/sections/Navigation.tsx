import { useState, useEffect } from 'react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav 
      className={`fixed w-full z-50 glass border-b border-white/5 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : ''
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Sekha</span>
            <span className="text-sekha-100 text-lg hidden sm:inline">𓋴𓆼𓄿𓀁𓆑</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('problem')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Problem
            </button>
            <button 
              onClick={() => scrollToSection('architecture')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Architecture
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection('open')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Why Open?
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://docs.sekha.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors"
            >
              Docs
            </a>
            <a 
              href="https://github.com/sekha-ai/sekha-docker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
            >
              Deploy Free
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
