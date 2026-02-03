import { useEffect, useRef } from 'react'

const Hero = () => {
  const typingRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typingElement = typingRef.current
    if (typingElement) {
      const interval = setInterval(() => {
        typingElement.style.animation = 'none'
        setTimeout(() => {
          typingElement.style.animation = ''
        }, 10)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [])

  const scrollToArchitecture = () => {
    const element = document.getElementById('architecture')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden grid-pattern">
      <div className="glow top-0 left-1/4 animate-pulse-slow"></div>
      <div className="glow bottom-0 right-1/4 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 reveal" style={{ transitionDelay: '100ms' }}>
            <span className="text-white">Sekha</span>{' '}
            <span className="text-sekha-100">𓋴𓆼𓄿𓀁𓆑</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 reveal" style={{ transitionDelay: '150ms' }}>
            <span className="gradient-text">The Context Broker for AI</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-2 max-w-2xl mx-auto leading-relaxed reveal" style={{ transitionDelay: '200ms' }}>
            Your AI shouldn't forget the important things. Neither should you.
          </p>
          
          <p className="text-lg text-sekha-100 mb-8 reveal" style={{ transitionDelay: '250ms' }}>
            Built for forever memory, not 30-day threads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 reveal" style={{ transitionDelay: '300ms' }}>
            <a 
              href="https://github.com/sekha-ai/sekha-docker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
            >
              Deploy Free
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <button 
              onClick={scrollToArchitecture}
              className="px-8 py-4 glass text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
              </svg>
              See How It Works
            </button>
          </div>
          
          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 reveal" style={{ transitionDelay: '350ms' }}>
            <span>19 REST Endpoints</span>
            <span className="text-gray-700">•</span>
            <span>7 MCP Tools</span>
            <span className="text-gray-700">•</span>
            <span>80%+ Test Coverage</span>
            <span className="text-gray-700">•</span>
            <span>AGPL-3.0</span>
            <span className="text-gray-700">•</span>
            <span>Free Forever for Individuals</span>
          </div>
          
          {/* Animated Demo Visualization */}
          <div className="mt-16 relative reveal" style={{ transitionDelay: '400ms' }}>
            <div className="glass rounded-2xl p-1 border border-white/10 shadow-2xl max-w-3xl mx-auto">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-500 font-mono">sekha-controller --interactive</div>
                </div>
                <div className="p-6 font-mono text-sm text-left space-y-3">
                  <div className="flex gap-4 text-gray-500">
                    <span className="w-12 text-right">14:32</span>
                    <span>Searching across 847 conversations...</span>
                  </div>
                  <div className="flex gap-4 text-sekha-100">
                    <span className="w-12 text-right">14:32</span>
                    <span ref={typingRef} className="typing-cursor">Found 3 relevant context blocks from 6 months ago</span>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-white/5 border-l-2 border-sekha-500">
                    <p className="text-gray-300 italic">"The authentication flow we discussed last March used OAuth 2.0 with PKCE. You preferred the implementation in..."</p>
                    <div className="mt-2 flex gap-2 flex-wrap">
                      <span className="px-2 py-1 rounded bg-sekha-500/20 text-sekha-100 text-xs">#auth</span>
                      <span className="px-2 py-1 rounded bg-sekha-500/20 text-sekha-100 text-xs">#march-2025</span>
                      <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-100 text-xs">Importance: High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 glass rounded-lg p-4 animate-float border border-sekha-500/30 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold">AI</div>
                <div>
                  <div className="text-xs text-gray-400">Context Retrieved</div>
                  <div className="text-sm font-semibold text-white">847 conversations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
