import { useEffect, useRef } from 'react'

const Architecture = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const archNodes = document.querySelectorAll('.arch-node')
    function handleMouseEnter(this: HTMLElement) {
      this.style.filter = 'brightness(1.3) drop-shadow(0 0 15px rgba(64, 81, 181, 0.6))'
      document.querySelectorAll('.arch-line').forEach(line => {
        (line as HTMLElement).style.opacity = '0.3'
      })
    }
    function handleMouseLeave(this: HTMLElement) {
      this.style.filter = ''
      document.querySelectorAll('.arch-line').forEach(line => {
        (line as HTMLElement).style.opacity = ''
      })
    }
    archNodes.forEach(node => {
      node.addEventListener('mouseenter', handleMouseEnter)
      node.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      archNodes.forEach(node => {
        node.removeEventListener('mouseenter', handleMouseEnter)
        node.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  const ecosystem = [
    { name: 'sekha-controller', purpose: 'Memory orchestration engine', language: 'Rust', status: 'Production' },
    { name: 'sekha-llm-bridge', purpose: 'LLM adapter (REQUIRED)', language: 'Python', status: 'Production' },
    { name: 'sekha-proxy', purpose: 'Transparent capture + Web UI', language: 'Python', status: 'Production' },
    { name: 'sekha-mcp', purpose: 'MCP protocol server', language: 'Python', status: 'Production' },
    { name: 'sekha-python-sdk', purpose: 'Python client library', language: 'Python', status: 'Production' },
    { name: 'sekha-js-sdk', purpose: 'JavaScript/TypeScript SDK', language: 'TypeScript', status: 'Production' },
    { name: 'sekha-cli', purpose: 'Command-line interface', language: 'Python', status: 'Beta' },
    { name: 'sekha-vscode', purpose: 'VS Code extension', language: 'TypeScript', status: 'Beta' },
    { name: 'sekha-obsidian', purpose: 'Obsidian note integration', language: 'TypeScript', status: 'Beta' },
  ]

  return (
    <section id="architecture" className="py-32 relative grid-pattern overflow-hidden">
      <div className="glow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-sekha-500/30 mb-6">
            <span className="text-sm text-sekha-100 font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Universal Memory Architecture</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four-layer system that captures, embeds, stores, and retrieves your AI conversations with semantic precision.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="glass rounded-xl p-6 border-l-4 border-sekha-500 reveal text-center">
            <div className="text-3xl font-bold text-white mb-1">19</div>
            <div className="text-sm text-gray-400">REST Endpoints</div>
          </div>
          <div className="glass rounded-xl p-6 border-l-4 border-purple-500 reveal text-center" style={{ transitionDelay: '100ms' }}>
            <div className="text-3xl font-bold text-white mb-1">7</div>
            <div className="text-sm text-gray-400">MCP Tools</div>
          </div>
          <div className="glass rounded-xl p-6 border-l-4 border-green-500 reveal text-center" style={{ transitionDelay: '200ms' }}>
            <div className="text-3xl font-bold text-white mb-1">80%+</div>
            <div className="text-sm text-gray-400">Test Coverage</div>
          </div>
          <div className="glass rounded-xl p-6 border-l-4 border-blue-500 reveal text-center" style={{ transitionDelay: '300ms' }}>
            <div className="text-3xl font-bold text-white mb-1">&lt;100ms</div>
            <div className="text-sm text-gray-400">Query Latency</div>
          </div>
        </div>

        {/* Animated Architecture Diagram */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] reveal mb-16">
          <svg ref={svgRef} viewBox="0 0 760 500" className="w-full h-full" id="arch-diagram">
            <defs>
              {/* Blue arrow for request flow */}
              <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#4051b5"/>
              </marker>
              {/* Purple arrow for LLM bridge */}
              <marker id="arrowhead-purple" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#805ad5"/>
              </marker>
              {/* Green arrow for response flow */}
              <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#10b981"/>
              </marker>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Layer 1: User/Agent */}
            <g className="arch-node" transform="translate(350, 50)">
              <rect x="0" y="0" width="100" height="60" rx="8" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
              <text x="50" y="25" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">User/Agent</text>
              <text x="50" y="45" textAnchor="middle" fill="#9ca3af" fontSize="10">Chat/Query</text>
            </g>

            {/* Layer 2: Sekha Controller */}
            <g className="arch-node" transform="translate(300, 150)">
              <rect x="0" y="0" width="200" height="80" rx="8" fill="rgba(64, 81, 181, 0.15)" stroke="#4051b5" strokeWidth="2" filter="url(#glow)"/>
              <text x="100" y="25" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">Sekha Controller</text>
              <text x="100" y="45" textAnchor="middle" fill="#94a3b8" fontSize="10">Rust • REST API • MCP Server</text>
              <text x="100" y="62" textAnchor="middle" fill="#a78bfa" fontSize="9">4-Phase Context Assembly</text>
            </g>

            {/* Layer 3: Storage */}
            <g transform="translate(50, 280)">
              <g className="arch-node" transform="translate(0, 0)">
                <rect x="0" y="0" width="140" height="80" rx="8" fill="#1f2937" stroke="#059669" strokeWidth="2"/>
                <text x="70" y="25" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">SQLite</text>
                <text x="70" y="45" textAnchor="middle" fill="#9ca3af" fontSize="9">Conversations</text>
                <text x="70" y="60" textAnchor="middle" fill="#9ca3af" fontSize="9">Metadata • Labels</text>
              </g>

              <g className="arch-node" transform="translate(170, 0)">
                <rect x="0" y="0" width="140" height="80" rx="8" fill="#1f2937" stroke="#7c3aed" strokeWidth="2"/>
                <text x="70" y="25" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">ChromaDB</text>
                <text x="70" y="45" textAnchor="middle" fill="#9ca3af" fontSize="9">Vector Embeddings</text>
                <text x="70" y="60" textAnchor="middle" fill="#9ca3af" fontSize="9">Semantic Search</text>
              </g>

              {/* Redis - positioned better */}
              <g className="arch-node" transform="translate(85, 100)">
                <rect x="0" y="0" width="140" height="60" rx="8" fill="#1f2937" stroke="#dc2626" strokeWidth="2"/>
                <text x="70" y="22" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">Redis</text>
                <text x="70" y="40" textAnchor="middle" fill="#9ca3af" fontSize="9">Task Queue • Cache</text>
              </g>
            </g>

            {/* Layer 4: LLM Bridge */}
            <g className="arch-node" transform="translate(500, 280)">
              <rect x="0" y="0" width="200" height="100" rx="8" fill="rgba(128, 90, 213, 0.15)" stroke="#805ad5" strokeWidth="2" filter="url(#glow)"/>
              <text x="100" y="25" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">LLM Bridge</text>
              <text x="100" y="45" textAnchor="middle" fill="#94a3b8" fontSize="10">Python • LiteLLM • Celery</text>
              <text x="100" y="62" textAnchor="middle" fill="#9ca3af" fontSize="9">Embeddings • Summarization</text>
              <text x="100" y="79" textAnchor="middle" fill="#9ca3af" fontSize="9">Entity Extraction</text>
            </g>

            {/* Layer 5: LLMs - Unified bar design */}
            <g transform="translate(300, 420)">
              <rect x="0" y="0" width="200" height="40" rx="20" fill="#1f2937" stroke="#805ad5" strokeWidth="2" opacity="0.8"/>
              <text x="100" y="25" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">100+ LLMs via LiteLLM</text>
              
              {/* Provider dots */}
              {/* <circle cx="40" cy="20" r="6" fill="#10b981" opacity="0.4"/>
              <circle cx="100" cy="20" r="6" fill="#f59e0b" opacity="0.4"/>
              <circle cx="160" cy="20" r="6" fill="#ef4444" opacity="0.4"/> */}
            </g>

            {/* Connection Lines - Fixed styling */}
            {/* Request flow */}
            <line x1="400" y1="110" x2="400" y2="150" stroke="#4051b5" strokeWidth="2" markerEnd="url(#arrowhead-blue)" className="arch-line" opacity="0.8"/>
            
            {/* To Storage */}
            <line x1="300" y1="210" x2="120" y2="280" stroke="#4051b5" strokeWidth="1.5" opacity="0.6"/>
            <line x1="300" y1="210" x2="260" y2="280" stroke="#4051b5" strokeWidth="1.5" opacity="0.6"/>
            {/* <line x1="360" y1="210" x2="195" y2="340" stroke="#dc2626" strokeWidth="1.5" opacity="0.5"/> */}
            
            {/* To LLM Bridge */}
            <line x1="500" y1="220" x2="550" y2="280" stroke="#805ad5" strokeWidth="2" markerEnd="url(#arrowhead-purple)" className="arch-line" opacity="0.8"/>
            
            {/* To LLMs */}
            <line x1="600" y1="380" x2="450" y2="420" stroke="#805ad5" strokeWidth="2" markerEnd="url(#arrowhead-purple)" className="arch-line" opacity="0.8"/>
            
            {/* Response flow */}
            <line x1="400" y1="420" x2="400" y2="230" stroke="#10b981" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#arrowhead-green)" className="arch-line" opacity="0.6">
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite"/>
            </line>

            {/* Data Packets - Simplified */}
            <circle r="5" fill="#60a5fa" filter="url(#glow)" opacity="0.9">
              <animateMotion dur="2s" repeatCount="indefinite" path="M400,110 L400,150 L320,210 L120,280"/>
            </circle>
            
            <circle r="5" fill="#a78bfa" filter="url(#glow)" opacity="0.9">
              <animateMotion dur="2s" repeatCount="indefinite" begin="0.7s" path="M480,190 L550,280 L600,380 L450,420"/>
            </circle>
            
            <circle r="5" fill="#34d399" filter="url(#glow)" opacity="0.9">
              <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.4s" path="M400,420 L400,100"/>
            </circle>

            {/* Pulse effects using SMIL instead of CSS */}
            <circle cx="400" cy="190" r="25" fill="none" stroke="#4051b5" strokeWidth="2" opacity="0">
              <animate attributeName="r" values="25;45" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="600" cy="330" r="30" fill="none" stroke="#805ad5" strokeWidth="2" opacity="0">
              <animate attributeName="r" values="30;50" dur="2s" begin="1s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;0" dur="2s" begin="1s" repeatCount="indefinite"/>
            </circle>
          </svg>

          {/* Legend - Fixed colors */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#4051b5]"></div>
              <span className="text-gray-400">Request Flow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#805ad5]"></div>
              <span className="text-gray-400">LLM Bridge</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
              <span className="text-gray-400">Response Flow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-gray-500"></div>
              <span className="text-gray-400">Storage</span>
            </div>
          </div>
        </div>

        {/* Ecosystem Table */}
        <div className="reveal">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Ecosystem</h3>
          <div className="glass rounded-2xl overflow-hidden border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left p-4 text-gray-300 font-semibold">Repository</th>
                  <th className="text-left p-4 text-gray-300 font-semibold">Purpose</th>
                  <th className="text-left p-4 text-gray-300 font-semibold">Language</th>
                  <th className="text-left p-4 text-gray-300 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {ecosystem.map((item, index) => (
                  <tr key={item.name} className={index < ecosystem.length - 1 ? 'border-b border-white/5' : ''}>
                    <td className="p-4 font-mono text-sekha-100">{item.name}</td>
                    <td className="p-4 text-gray-400">{item.purpose}</td>
                    <td className="p-4 text-gray-400">{item.language}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium ${
                        item.status === 'Production' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          item.status === 'Production' ? 'bg-green-400' : 'bg-yellow-400'
                        }`}></span>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Architecture