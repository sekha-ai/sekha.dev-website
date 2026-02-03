import { useState, useEffect, useRef } from 'react'

const useCases = [
  {
    id: 1,
    title: "The Novelist's Consistency Keeper",
    icon: "📝",
    description: "Writing a novel over 18 months. Character details, plot threads, world-building rules scattered across 200 conversations.",
    without: "Wait, did I say her hair was red or auburn in Chapter 3?",
    with: "Your AI instantly recalls every description, motivation, and plot point you've ever discussed."
  },
  {
    id: 2,
    title: "The Investment Thesis Journal",
    icon: "📈",
    description: "You analyze stocks/crypto with AI. Over a year, your AI remembers your thesis from March, your doubt in June, and your validation in September.",
    without: "You repeat mistakes.",
    with: "Your AI shows you patterns in your own decision-making."
  },
  {
    id: 3,
    title: "The PhD Companion",
    icon: "🎓",
    description: "4 years of research. Every dead end, every breakthrough, every supervisor comment cataloged.",
    without: "Scrambling to explain your methodology.",
    with: "When the examiner asks 'Why didn't you pursue X?' your AI retrieves the March 2025 conversation where you discovered the methodological flaw."
  },
  {
    id: 4,
    title: "The Home Build Chronicle",
    icon: "🏠",
    description: "12 months of renovation chaos. Permits, contractor disputes, design decisions, budget overruns.",
    without: "Guesswork and lost emails.",
    with: "When the plumber asks 'Why did we choose PEX over copper?' your AI retrieves the 6-month-old discussion about freeze resistance and cost analysis."
  },
  {
    id: 5,
    title: "The Language Learning Shadow",
    icon: "🗣️",
    description: "Learning Japanese over 2 years. Your AI tutor remembers you struggle with conjugations but excel at vocabulary.",
    without: "Generic lessons every session.",
    with: "Last time we discussed verb stems using the 'tabemasu' example—you asked about exceptions. Ready to review those?"
  },
  {
    id: 6,
    title: "The Rehabilitation Partner",
    icon: "💪",
    description: "6 months of physical therapy. You track exercises, pain levels, progress modifications with your AI.",
    without: "Tell me about your injury every session.",
    with: "Your range of motion has improved 40% since March. Last week you mentioned knee stability concerns—how is that today?"
  },
  {
    id: 7,
    title: "The Startup Pivot Archive",
    icon: "🚀",
    description: "Pivot #3. You're rebuilding auth again. But wait—you already built auth in Pivot #1.",
    without: "Rebuilding from scratch, repeating old mistakes.",
    with: "Your AI remembers why OAuth2 failed last time, what the edge cases were, what the customer actually needed vs. what you built. Pivot without amnesia."
  },
  {
    id: 8,
    title: "The Elder Care Coordination",
    icon: "💙",
    description: "18 months managing an aging parent's healthcare. Symptoms, medications, doctor opinions, insurance battles.",
    without: "Retelling the trauma at every new appointment.",
    with: "When you meet a new specialist, your AI retrieves the complete annotated timeline. Continuity of care."
  }
]

const UseCases = () => {
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Reset scroll reveal when showing more
  useEffect(() => {
    if (showAll && sectionRef.current) {
      const newCards = sectionRef.current.querySelectorAll('.reveal-card.hidden')
      newCards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.remove('hidden')
          card.classList.add('block', 'fade-in-up')
        }, i * 100)
      })
    }
  }, [showAll])

  return (
    <section id="use-cases" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Built for Every Scale</h2>
          <p className="text-xl text-gray-400">From individual researchers to enterprise teams</p>
        </div>
        
        {/* Grid: Always render all, but hide extras with CSS until showAll */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className={`${
                index >= 5 && !showAll ? 'hidden' : 'block'
              } reveal`}
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <div className="group relative h-full">
                <div className="absolute inset-0 gradient-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative glass rounded-2xl p-6 h-full border border-white/5 hover:border-sekha-500/50 transition-colors">
                  <div className="text-3xl mb-4">{useCase.icon}</div>
                  <h3 className="text-lg font-bold mb-3 text-white">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="text-red-400 flex-shrink-0 font-medium">Without:</span>
                      <span className="text-gray-500 italic">{useCase.without}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-green-400 flex-shrink-0 font-medium">With Sekha:</span>
                      <span className="text-gray-300">{useCase.with}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More / Show Less Button */}
        <div className="text-center mt-10 reveal">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 glass text-white rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2 mx-auto"
          >
            {showAll ? (
              <>
                Show Less
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </>
            ) : (
              <>
                Show {useCases.length - 5} More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

export default UseCases