const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Pay for Legal Clarity, Not Compute</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sekha runs on your infrastructure. You pay for your own servers. 
            Our pricing covers compliance, support, and the right to keep your code private.
            "We're not renting you software. We're granting you legal rights to own it."
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* AGPL Free */}
          <div className="glass rounded-2xl p-8 reveal border border-white/5 flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">AGPL License</h3>
              <div className="text-4xl font-bold text-sekha-100 mb-1">$0</div>
              <p className="text-gray-500 text-sm">Free Forever</p>
            </div>
            
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-medium">
                Fewer than 50 employees
              </span>
            </div>
            
            <ul className="space-y-3 text-sm text-gray-400 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <span>Full features (REST API, MCP tools, all SDKs)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <span>Unlimited usage (your servers, your cost)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <span>Community support (GitHub/Discord)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                <span className="text-yellow-400/90">Must open-source modifications if distributed</span>
              </li>
            </ul>
            
            <button className="w-full py-3 px-4 border border-white/20 rounded-lg text-white hover:bg-white/5 transition font-medium">
              Deploy Free
            </button>
          </div>
          
          {/* Commercial License */}
          <div className="glass rounded-2xl p-8 reveal border border-sekha-500/30 relative flex flex-col" style={{ transitionDelay: '100ms' }}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Commercial License</h3>
              <div className="text-4xl font-bold text-sekha-100 mb-1">Scale-Based</div>
              <p className="text-gray-500 text-sm">Enterprise & Commercial Use</p>
            </div>
            
            <div className="mb-6 space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-sekha-500/20 text-sekha-100 border border-sekha-500/30 text-xs font-medium mr-2">
                50+ employees
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-medium">
                AI Vendors
              </span>
            </div>
            
            <ul className="space-y-3 text-sm text-gray-400 mb-6 flex-grow">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sekha-100 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <span>No AGPL obligations (keep your code private)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sekha-100 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <span>SLA-backed support & security patches</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sekha-100 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <span>Compliance documentation (HIPAA, SOC2)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sekha-100 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <span>Patent grant & legal indemnification</span>
              </li>
            </ul>
            
            <div className="p-4 rounded-lg bg-black/20 mb-6 space-y-2 text-xs text-gray-400 font-mono">
              <div className="flex justify-between">
                <span>Startup (50-200 emp):</span>
                <span className="text-sekha-100">$5,000/yr</span>
              </div>
              <div className="flex justify-between">
                <span>Business (201-1k emp):</span>
                <span className="text-sekha-100">$25,000/yr</span>
              </div>
              <div className="flex justify-between">
                <span>Enterprise (1k+ emp):</span>
                <span className="text-sekha-100">$100,000/yr</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                <span>AI Vendors:</span>
                <span className="text-purple-400">Revenue share</span>
              </div>
            </div>
            
            <button className="w-full py-3 px-4 bg-sekha-500 rounded-lg text-white hover:bg-sekha-400 transition font-medium">
              Contact Sales
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto reveal">
          <p className="text-sm text-gray-500">
            <strong className="text-gray-400">Why no usage limits?</strong> Since you host Sekha yourself, 
            API calls cost you bandwidth, not us. We price based on organization size and legal complexity, 
            not your infrastructure bill.
          </p>
          <p className="text-xs text-gray-600 mt-4">
            Commercial use is free for teams under 50 employees. When you hit 50 employees or distribute 
            Sekha in a closed-source product, a commercial license is required.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing