const Solution = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">The Context Broker</h2>
          <p className="text-xl text-sekha-100">Not storage. Intelligence.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Library Card Concept */}
          <div className="reveal">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">The "Library Card" Concept</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Chatbots dump your conversations into a black hole. Sekha catalogs them—like a library card for every thought you've ever had with AI. Every conversation gets structured metadata:
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 border border-white/10 font-mono text-sm overflow-x-auto">
              <div className="text-gray-500 mb-2">{'{'}</div>
              <div className="pl-4 text-sekha-100">"library_card": {'{'}</div>
              <div className="pl-8 text-gray-300">"label": <span className="text-green-400">"Project:AI-Memory-Controller"</span>,</div>
              <div className="pl-8 text-gray-300">"folder": <span className="text-green-400">"Work/2025-Strategic"</span>,</div>
              <div className="pl-8 text-gray-300">"importance": <span className="text-yellow-400">9</span>,</div>
              <div className="pl-8 text-gray-300">"semantic_tags": [<span className="text-green-400">"architecture"</span>, <span className="text-green-400">"rust"</span>],</div>
              <div className="pl-8 text-gray-300">"session_count": <span className="text-yellow-400">47</span>,</div>
              <div className="pl-8 text-gray-300">"status": <span className="text-green-400">"active"</span></div>
              <div className="pl-4 text-sekha-100">{'}'}</div>
              <div className="text-gray-500">{'}'}</div>
            </div>
            
            <p className="text-gray-400 mt-6 text-sm">
              Not files dumped in a directory. Memory that understands itself.
            </p>
          </div>
          
          {/* 4-Phase Assembly Pipeline */}
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">4-Phase Assembly Pipeline</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              When your AI asks for context, Sekha doesn't dump everything. It runs a 4-phase pipeline:
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl glass border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-sekha-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sekha-100 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Recall</h4>
                  <p className="text-gray-400 text-sm">Pulls 200 semantic matches from ChromaDB + all pinned conversations + recent messages from preferred labels</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-xl glass border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-100 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Rank</h4>
                  <p className="text-gray-400 text-sm">Scores each candidate using importance (50%), recency decay (30%), and label matching (20%)</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-xl glass border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-100 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Assemble</h4>
                  <p className="text-gray-400 text-sm">Greedily packs messages into your token budget (8,000 default, 15% reserved for system prompts)</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-xl glass border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-100 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Enhance</h4>
                  <p className="text-gray-400 text-sm">Injects citation metadata so your AI knows <em>"this came from conversation X in folder Y on date Z"</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technical Simplicity */}
        <div className="mt-16 text-center reveal">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-sekha-500/30">
            <span className="text-2xl font-bold text-sekha-100">Under 15,000</span>
            <span className="text-gray-400">lines of core logic</span>
          </div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Following Wirth's Law: <em className="text-gray-400">"Simplicity is the constraint. A single developer can understand the entire system."</em> No Kubernetes required. SQLite + ChromaDB.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Solution
