import { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StickyCTA from './components/StickyCTA'
import WhatsAppButton from './components/WhatsAppButton'

const Problem = lazy(() => import('./components/Problem'))
const WhatsInside = lazy(() => import('./components/WhatsInside'))
const Transformation = lazy(() => import('./components/Transformation'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Pricing = lazy(() => import('./components/Pricing'))
const FAQ = lazy(() => import('./components/FAQ'))
const ExitIntentPopup = lazy(() => import('./components/ExitIntentPopup'))

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
      <Suspense fallback={null}>
        <Problem />
        <WhatsInside />
        <Transformation />
        <Testimonials />
        <Pricing onPurchase={handlePurchase} />
        <FAQ />
      </Suspense>

      <StickyCTA onPurchase={handlePurchase} />
      <WhatsAppButton />

      <AnimatePresence>
        {showExitPopup && (
          <Suspense fallback={null}>
            <ExitIntentPopup
              onClose={() => setShowExitPopup(false)}
              onPurchase={handlePurchase}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
