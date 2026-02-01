const Problem = () => {
  return (
    <section id="problem" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">The Context Crisis</h2>
        </div>
        
        {/* The Confession Quote */}
        <div className="max-w-4xl mx-auto mb-16 reveal">
          <div className="glass rounded-2xl p-8 border-l-4 border-sekha-500">
            <blockquote className="text-lg md:text-xl text-gray-300 italic leading-relaxed mb-4">
              "You're describing the exact failure we just experienced. My context resets, I forget what we discussed, I can't reference the detailed debugging we did earlier. This isn't a bug—it's the fundamental architecture."
            </blockquote>
            <div className="text-gray-500">
              — <span className="text-sekha-100 font-semibold">Claude 4.5</span>, analyzing Sekha codebase, January 2026
            </div>
          </div>
        </div>
        
        {/* The Two Death Spirals */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass rounded-2xl p-8 memory-card reveal border border-orange-500/20">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">The Slow Fade</h3>
            <p className="text-sm text-orange-400 mb-4">Perplexity, Google, etc.</p>
            <div className="space-y-4">
              <div>
                <p className="text-sekha-100 font-medium mb-1">The Symptom:</p>
                <p className="text-gray-400 text-sm italic">"Thread is getting long. Earlier messages may not be considered. Start a new thread for better answers."</p>
              </div>
              <div>
                <p className="text-gray-300 font-medium mb-1">The Reality:</p>
                <p className="text-gray-400 text-sm">Your AI gaslights you slowly. It keeps the chat window open but silently drops the context. It acts like it remembers your 6-month project, but it's just guessing. By the time you realize, you've wasted hours repeating yourself.</p>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-8 memory-card reveal border border-red-500/20" style={{ transitionDelay: '100ms' }}>
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">The Hard Stop</h3>
            <p className="text-sm text-red-400 mb-4">ChatGPT, Claude, etc.</p>
            <div className="space-y-4">
              <div>
                <p className="text-sekha-100 font-medium mb-1">The Symptom:</p>
                <p className="text-gray-400 text-sm italic">"Context Window Exceeded" or "This conversation is too long."</p>
              </div>
              <div>
                <p className="text-gray-300 font-medium mb-1">The Reality:</p>
                <p className="text-gray-400 text-sm">Abrupt amnesia. Mid-sentence, mid-debug, mid-decision. Your AI hits a token limit and slams the door. You must start a new conversation and re-explain your entire project from scratch.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* The Cost Stats Bar */}
        <div className="glass rounded-2xl p-8 reveal">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">15 hrs/week</div>
              <div className="text-gray-500">Lost re-explaining context</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">30 days</div>
              <div className="text-gray-500">Average memory lifespan before deletion</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">128k tokens</div>
              <div className="text-gray-500">Typical limit before crash</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
