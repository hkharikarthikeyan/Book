import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import WhatsInside from './components/WhatsInside'
import Transformation from './components/Transformation'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import ExitIntentPopup from './components/ExitIntentPopup'
import StickyCTA from './components/StickyCTA'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [exitShown, setExitShown] = useState(false)

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !exitShown) {
        setShowExitPopup(true)
        setExitShown(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [exitShown])

  const handlePurchase = () => {
    window.open('https://payhip.com/b/mix4B', '_blank')
  }

  return (
    <div className="noise-overlay relative pb-16 sm:pb-0">
      <Navbar onPurchase={handlePurchase} />
      <Hero onPurchase={handlePurchase} />
      <Problem />
      <WhatsInside />
      <Transformation />
      <Testimonials />
      <Pricing onPurchase={handlePurchase} />
      <FAQ />

      <StickyCTA onPurchase={handlePurchase} />
      <WhatsAppButton />

      <AnimatePresence>
        {showExitPopup && (
          <ExitIntentPopup
            onClose={() => setShowExitPopup(false)}
            onPurchase={handlePurchase}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
