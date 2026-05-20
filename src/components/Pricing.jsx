import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Shield, Clock, CheckCircle, ArrowRight, Star, Lock } from 'lucide-react'
import CountdownTimer from './CountdownTimer'

const included = [
    'Complete RGCCO Formula Book (200+ pages)',
    'AI Tools Mastery Guide',
    'Ready-to-Deploy Funnel Templates',
    'Private Community (Lifetime Access)',
    'Monthly Updates & New Strategies',
    '30-Day Money-Back Guarantee',
]

export default function Pricing({ onPurchase }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="pricing" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-400/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-bronze-500/5 rounded-full blur-[120px]" />
            </div>

            <div ref={ref} className="container-pad relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/20 bg-gold-400/5 mb-6">
                        <Zap className="w-4 h-4 text-gold-400" />
                        <span className="text-sm text-gold-400 font-medium">Limited Time Offer</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
                        Get The <span className="gradient-text-gold">RGCCO Formula</span> Today
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
                        Join 2,500+ entrepreneurs who transformed their business. Special launch pricing ends soon.
                    </p>
                </motion.div>

                {/* Countdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ marginBottom: '30px' }}
                >
                    <p className="text-center text-red-400 font-medium mb-4 flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4 animate-pulse" />
                        Launch Price Expires In:
                    </p>
                    <CountdownTimer />
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative"
                >
                    {/* Popular Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <div className="px-6 py-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full text-dark-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-gold-400/20">
                            <Star className="w-4 h-4" fill="currentColor" />
                            MOST POPULAR
                        </div>
                    </div>

                    <div className="glass-card border-gold-400/20 relative overflow-hidden">
                        {/* Corner glow */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-bl from-gold-400/10 to-transparent rounded-full blur-[60px]" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-bronze-500/10 to-transparent rounded-full blur-[60px]" />

                        <div className="relative z-10">
                            {/* Title */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Complete RGCCO Formula Package</h3>
                                <p className="text-gray-400">Everything you need to build an AI-powered business</p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-10">
                                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                                    <span className="text-xl sm:text-2xl text-gray-500 line-through font-medium">₹499</span>
                                    <div className="bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded text-xs font-bold text-red-400">
                                        56% OFF
                                    </div>
                                </div>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-sm text-gray-400">₹</span>
                                    <span className="text-5xl sm:text-7xl font-extrabold gradient-text-gold">219</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">One-time payment • Instant digital access</p>
                            </div>

                            {/* Included Items */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
                                {included.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.5 + i * 0.05 }}
                                        className="flex items-start gap-2"
                                    >
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0 mt-0.5" />
                                        <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="text-center">
                                <button
                                        onClick={onPurchase}
                                        className="btn-primary text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-12 w-full sm:w-auto flex items-center justify-center gap-2 mx-auto group"
                                    >
                                        <span>Get Instant Access — ₹219</span>
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </button>

                                <div className="flex items-center justify-center gap-4 mt-6">
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <Lock className="w-3 h-3" />
                                        Secure Payment
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <Shield className="w-3 h-3" />
                                        30-Day Guarantee
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <Zap className="w-3 h-3" />
                                        Instant Access
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Guarantee */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-10 text-center glass-card border-green-500/10"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                            <Shield className="w-7 h-7 text-green-400" />
                        </div>
                        <div className="text-center sm:text-left">
                            <h4 className="font-bold text-white mb-1">30-Day Money-Back Guarantee</h4>
                            <p className="text-sm text-gray-400">
                                If the RGCCO Formula doesn't transform your business approach within 30 days,
                                we'll refund every rupee. No questions asked.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
