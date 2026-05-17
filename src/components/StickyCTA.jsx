import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, X } from 'lucide-react'

export default function StickyCTA({ onPurchase }) {
    const [visible, setVisible] = useState(false)
    const [dismissed, setDismissed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 600)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (dismissed) return null

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="fixed bottom-0 left-0 right-0 z-40 bg-dark-900/95 backdrop-blur-xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] pb-[env(safe-area-inset-bottom)]"
                >
                    <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-3 sm:gap-4">
                        <div className="hidden sm:block">
                            <p className="text-sm font-semibold text-white">RGCCO Formula — Limited Time: <span className="gradient-text-gold">₹219</span></p>
                            <p className="text-xs text-gray-500">Instant digital access • 30-day guarantee</p>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button
                                    onClick={onPurchase}
                                    className="btn-primary text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-6 flex items-center gap-2 w-full sm:w-auto justify-center group"
                                >
                                    <span>Get Access — ₹219</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            <button
                                onClick={() => setDismissed(true)}
                                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors shrink-0"
                            >
                                <X className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
