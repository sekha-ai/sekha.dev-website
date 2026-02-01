const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Pricing That Scales With You</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Personal Use */}
          <div className="glass rounded-2xl p-8 reveal border border-white/5">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Personal Use</h3>
              <div className="text-4xl font-bold text-sekha-100 mb-1">€0 / $0 / ¥0</div>
              <p className="text-gray-500 text-sm">Forever</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                Full Features
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                All Integrations
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                Unlimited Conversations
              </li>
            </ul>
          </div>
          
          {/* Teams */}
          <div className="glass rounded-2xl p-8 reveal border border-sekha-500/30 relative" style={{ transitionDelay: '100ms' }}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="px-3 py-1 bg-sekha-500 text-white text-xs font-semibold rounded-full">&lt; 50 employees</span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Teams</h3>
              <div className="text-4xl font-bold text-sekha-100 mb-1">€0 / $0 / ¥0</div>
              <p className="text-gray-500 text-sm">Forever</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                Full Features
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                All Integrations
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                Shared Team Memory
              </li>
            </ul>
          </div>
          
          {/* Enterprise */}
          <div className="glass rounded-2xl p-8 reveal border border-white/5" style={{ transitionDelay: '200ms' }}>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-sekha-100 mb-1">Contact Us</div>
              <p className="text-gray-500 text-sm">50+ employees</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                SLA & Support
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                Audit & Compliance
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                Custom Terms
              </li>
            </ul>
          </div>
        </div>
        
        <p className="text-center text-gray-500 mt-8 reveal">
          Start free, scale when you grow. Commercial use is free for teams under 50 employees.
        </p>
      </div>
    </section>
  )
}

export default Pricing
