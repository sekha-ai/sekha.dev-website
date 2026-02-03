const WhyOpen = () => {
  return (
    <section id="open" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Your Data,<br />Your Intellectual Property</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We believe your conversations are your intellectual property. That's why Sekha is open-source, self-hosted, and local-first by design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 text-left reveal">
          <div className="glass rounded-2xl p-8 border-l-4 border-sekha-500">
            <h3 className="text-2xl font-bold mb-4 text-white">User-Controlled by Design</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sekha-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <span>Self-hosted on your infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sekha-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <span>No telemetry or phone-home</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sekha-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <span>GDPR & HIPAA compliant architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sekha-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                <span>Full data portability (JSON/Markdown export)</span>
              </li>
            </ul>
          </div>
          
          <div className="glass rounded-2xl p-8 border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold mb-4 text-white">vs. Vendor Lock-in</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400">Data Ownership</span>
                <div className="flex gap-4 text-sm">
                  <span className="text-green-400 font-semibold">You</span>
                  <span className="text-red-400">Them</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400">Retention Period</span>
                <div className="flex gap-4 text-sm">
                  <span className="text-green-400 font-semibold">Forever</span>
                  <span className="text-red-400">30 days</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-400">Audit Trails</span>
                <div className="flex gap-4 text-sm">
                  <span className="text-green-400 font-semibold">10 years</span>
                  <span className="text-red-400">None</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400">Token Cost Reduction</span>
                <div className="flex gap-4 text-sm">
                  <span className="text-green-400 font-semibold">80%</span>
                  <span className="text-red-400">0%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyOpen
