import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import Connect from './sections/Connect'
import Architecture from './sections/Architecture'
import UseCases from './sections/UseCases'
import WhyOpen from './sections/WhyOpen'
import Pricing from './sections/Pricing'
import CTA from './sections/CTA'
import Footer from './sections/Footer'
import './App.css'
import ComparisonSection from './sections/ComparisonSection'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    
    reveals.forEach((reveal, index) => {
      gsap.fromTo(reveal, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: reveal,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: (index % 4) * 0.1
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={mainRef} className="min-h-screen bg-[#0a0a0f]">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <ComparisonSection />
        <Solution />
        <Connect />
        <Architecture />
        <UseCases />
        <WhyOpen />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
