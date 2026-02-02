const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-16 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Manifesto */}
        <div className="text-center mb-16 reveal">
          <h3 className="text-2xl font-bold mb-8 text-white">The Beliefs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="glass rounded-xl p-6">
              <p className="text-gray-400 text-sm">Your conversations are your intellectual property</p>
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-gray-400 text-sm">Memory should be sovereign, not rented</p>
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-gray-400 text-sm">Simplicity is a feature, not a compromise</p>
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-gray-400 text-sm">No single company should own your cognitive history</p>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-sekha-500/30">
            <p className="text-2xl font-light text-sekha-100 mb-2">
              Sekha (sḫꜣw): Memory is the record of you.
            </p>
            <p className="text-gray-500">
              Built for important things that actually need to be completed.
            </p>
          </div>
        </div>
        
        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Sekha</span>
              <span className="text-sekha-100 text-lg">𓋴𓆼𓄿𓀁𓆑</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Universal memory layer for AI conversations. Built for important things that actually need to be completed.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a 
                  href="https://docs.sekha.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/sekha-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/orgs/sekha-ai/packages" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Docker Images
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/sekha-ai/sekha-controller/releases" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a 
                  href="https://discord.gg/gZb7U9deKH" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/sekha_ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/sekha-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Discussions
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Technical Footer */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              © 2026 Sekha Project. AGPL-3.0 Licensed.
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-600">
              <span>Under 15,000 lines</span>
              <span>•</span>
              <span>AGPL-3.0</span>
              <span>•</span>
              <span>Self-hosted</span>
              <span>•</span>
              <span>No telemetry</span>
              <span>•</span>
              <span>SQLite + ChromaDB</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a 
                href="https://www.gnu.org/licenses/agpl-3.0.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                License
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
