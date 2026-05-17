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
import PaymentModal from './components/PaymentModal'
import ExitIntentPopup from './components/ExitIntentPopup'
import StickyCTA from './components/StickyCTA'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [hasPurchased, setHasPurchased] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [exitShown, setExitShown] = useState(false)

  // Check localStorage for previous purchase
  useEffect(() => {
    const purchased = localStorage.getItem('rgcco_purchased')
    if (purchased === 'true') {
      setHasPurchased(true)
    }
  }, [])

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !exitShown && !hasPurchased) {
        setShowExitPopup(true)
        setExitShown(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [exitShown, hasPurchased])

  const handlePurchase = () => {
    setShowPaymentModal(true)
  }

  const handlePaymentSuccess = () => {
    setHasPurchased(true)
    localStorage.setItem('rgcco_purchased', 'true')
    setShowPaymentModal(false)
  }

  const handleDownload = () => {
    // Simulate secure download - replace with real download URL
    const link = document.createElement('a')
    link.href = '#'
    link.download = 'RGCCO-Formula-Book.pdf'
    alert('🎉 Download started! In production, this would download the actual PDF from a secure server.')
  }

  return (
    <div className="noise-overlay relative pb-16 sm:pb-0">
      <Navbar hasPurchased={hasPurchased} onPurchase={handlePurchase} onDownload={handleDownload} />
      <Hero hasPurchased={hasPurchased} onPurchase={handlePurchase} onDownload={handleDownload} />
      <Problem />
      <WhatsInside />
      <Transformation />
      <Testimonials />
      <Pricing hasPurchased={hasPurchased} onPurchase={handlePurchase} onDownload={handleDownload} />
      <FAQ />

      <StickyCTA hasPurchased={hasPurchased} onPurchase={handlePurchase} onDownload={handleDownload} />
      <WhatsAppButton />

      <AnimatePresence>
        {showPaymentModal && (
          <PaymentModal
            onClose={() => setShowPaymentModal(false)}
            onSuccess={handlePaymentSuccess}
          />
        )}
      </AnimatePresence>

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
