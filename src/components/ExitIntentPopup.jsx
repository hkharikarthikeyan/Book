import { motion } from 'framer-motion'
import { X, Gift, ArrowRight, Clock } from 'lucide-react'

export default function ExitIntentPopup({ onClose, onPurchase }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: '16px', position: 'fixed', inset: 0, zIndex: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 30 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg bg-dark-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
                {/* Top Accent */}
                <div className="h-1 bg-gradient-to-r from-gold-400 via-bronze-500 to-gold-400" />

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
                >
                    <X className="w-4 h-4 text-gray-400" />
                </button>

                <div className="p-5 sm:p-8 text-center">
                    {/* Icon */}
                    <motion.div
                        animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400/20 to-bronze-500/20 flex items-center justify-center mx-auto mb-6"
                    >
                        <Gift className="w-8 h-8 text-gold-400" />
                    </motion.div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                        Wait! Don't Leave Empty-Handed 🎁
                    </h3>
                    <p className="text-gray-400 mb-6 max-w-sm mx-auto">
                        As a special offer, get the <span className="text-white font-medium">RGCCO Formula</span> at our
                        <span className="text-gold-400 font-bold"> lowest price ever</span> — but only if you act now.
                    </p>

                    {/* Special Price */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px 24px', marginBottom: '24px' }}>
                        <span style={{ color: '#6b7280', textDecoration: 'line-through', fontSize: '18px' }}>₹499</span>
                        <ArrowRight className="w-4 h-4 text-gray-600" />
                        <span className="gradient-text-gold" style={{ fontSize: '24px', fontWeight: 800 }}>₹219</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-red-400 mb-6">
                        <Clock className="w-4 h-4 animate-pulse" />
                        <span>This offer expires when you close this page</span>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => { onPurchase(); onClose() }}
                        className="btn-primary text-lg py-4 px-10 w-full sm:w-auto group"
                    >
                        <span className="flex items-center justify-center gap-2">
                            Claim Your Copy Now
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </button>

                    <button
                        onClick={onClose}
                        className="block mx-auto mt-4 text-sm text-gray-600 hover:text-gray-400 transition-colors"
                    >
                        No thanks, I don't want to grow my business
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}
