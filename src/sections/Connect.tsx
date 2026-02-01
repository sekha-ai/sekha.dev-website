const Connect = () => {
  return (
    <section id="connect" className="py-32 relative grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Use Your Tools. Keep Your Memory.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: For Developers */}
          <div className="glass rounded-2xl p-8 reveal border border-white/5 hover:border-sekha-500/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">For Developers</h3>
            <p className="text-blue-400 text-sm mb-4">REST API + SDKs</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Direct integration with our Python and JavaScript SDKs. Full programmable control over memory operations. 19 endpoints, async/sync clients, comprehensive error handling.
            </p>
          </div>
          
          {/* Column 2: For Claude Desktop Users */}
          <div className="glass rounded-2xl p-8 reveal border border-white/5 hover:border-purple-500/30 transition-colors" style={{ transitionDelay: '100ms' }}>
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">For Claude Desktop Users</h3>
            <p className="text-purple-400 text-sm mb-4">MCP Server (7 Tools)</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Native integration via Model Context Protocol. Claude Desktop recognizes Sekha as a memory extension. Tools: <code className="text-purple-300">memory_query</code>, <code className="text-purple-300">memory_store</code>, <code className="text-purple-300">memory_list_labels</code>, etc.
            </p>
          </div>
          
          {/* Column 3: For Everyone Else - Highlighted */}
          <div className="glass rounded-2xl p-8 reveal border-2 border-sekha-500/50 relative" style={{ transitionDelay: '200ms' }}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="px-3 py-1 bg-sekha-500 text-white text-xs font-semibold rounded-full">Easiest</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-sekha-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-sekha-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">For Everyone Else</h3>
            <p className="text-sekha-100 text-sm mb-4">Transparent Proxy Mode</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Any OpenAI-compatible app. Just change your API endpoint to <code className="text-sekha-100 bg-white/5 px-1 rounded">http://localhost:8080</code>.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sekha automatically captures and retrieves context transparently. Includes <strong className="text-white">Web UI Dashboard</strong> for browsing history without writing code.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connect
