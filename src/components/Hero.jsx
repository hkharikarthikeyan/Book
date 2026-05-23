import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, TrendingUp, Star, Users } from 'lucide-react'

export default function Hero({ onPurchase }) {
    return (
        <section style={{ paddingTop: '70px' }} className="relative min-h-screen flex items-center justify-center overflow-hidden pb-12 sm:pb-20">
            {/* Background Effects - hidden on mobile for performance */}
            <div className="absolute inset-0 hidden sm:block">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-bronze-600/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold-400/10 rounded-full blur-[128px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[128px]" />
            </div>

            {/* Grid Pattern - hidden on mobile */}
            <div className="absolute inset-0 opacity-[0.02] hidden sm:block" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container-pad relative z-10 max-w-7xl mx-auto py-8 sm:py-20 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gold-400/30 bg-gold-400/5 mb-4 sm:mb-6"
                        >
                            <Star className="w-4 h-4 text-gold-400" fill="currentColor" />
                            <span className="text-xs sm:text-sm text-gold-400 font-medium">Over 50+ Copies Sold</span>
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-4 sm:mb-6">
                            <span className="text-white">Stop Guessing.</span>
                            <br />
                            <span className="gradient-text">Start Converting</span>
                            <br />
                            <span className="text-white">With AI.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base sm:text-xl text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                            The <span className="text-white font-semibold">RGCCO Formula</span> is the proven 5-step framework
                            that transforms overwhelmed entrepreneurs into conversion machines — powered by AI, automation, and
                            battle-tested strategy.
                        </p>

                        {/* Benefits */}
                        <div className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
                            {[
                                { icon: Zap, text: 'Build AI systems that sell for you 24/7' },
                                { icon: TrendingUp, text: '10x your conversions in 90 days' },
                                { icon: Shield, text: 'No tech skills required — step-by-step system' },
                                { icon: Users, text: 'Join our WhatsApp community', link: 'https://chat.whatsapp.com/Lvr7Ysm0SdE4rxhfnyL2d7' },
                            ].map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400/20 to-bronze-500/20 flex items-center justify-center shrink-0">
                                        <benefit.icon className="w-4 h-4 text-gold-400" />
                                    </div>
                                    {benefit.link ? (
                                        <a href={benefit.link} target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm sm:text-base font-medium hover:text-green-300 transition-colors underline underline-offset-2">
                                            {benefit.text} →
                                        </a>
                                    ) : (
                                        <span className="text-gray-300 text-sm sm:text-base">{benefit.text}</span>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                        >
                            <button onClick={onPurchase} className="btn-primary text-base sm:text-lg py-3 sm:py-4 px-8 sm:px-10 flex items-center gap-2 group w-full sm:w-auto justify-center">
                                    <span>Get Instant Access</span>
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </button>
                            <span className="text-sm text-gray-500">
                                ⚡ Instant digital delivery • 30-day guarantee
                            </span>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-10 pt-6 sm:pt-10 border-t border-white/5"
                        >
                            {[
                                { icon: Shield, label: 'Secure Payment' },
                                { icon: Zap, label: 'Instant Access' },
                                { icon: Star, label: '4.9/5 Rating' },
                            ].map((badge, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                    <badge.icon className="w-4 h-4 text-gray-600" />
                                    {badge.label}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - Book Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -10 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                        className="relative flex justify-center"
                    >
                        {/* Glow behind book */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-bronze-500/30 to-gold-400/20 rounded-full blur-[80px]" />

                        {/* Book mockup */}
                        <div className="relative group">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                style={{ willChange: 'transform' }}
                                className="relative">
                                {/* Book */}
                                <div className="relative w-48 sm:w-80 lg:w-96 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-bronze-500/20 border border-white/10 group-hover:shadow-bronze-500/30 transition-shadow duration-500 bg-white mx-auto">
                                    <img 
                                        src="/book-cover.png" 
                                        alt="Talk to AI - Master Communication" 
                                        loading="eager"
                                        decoding="async"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Spine effect */}
                                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                                </div>

                                {/* Floating badges - hidden on mobile */}
                                <motion.div
                                    animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                    className="hidden sm:flex absolute -top-4 -right-4 glass-card p-3 items-center gap-2"
                                >
                                    <div className="flex -space-x-2">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-dark-800 bg-gradient-to-br from-bronze-400 to-gold-400" />
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white">50+</p>
                                        <p className="text-[10px] text-gray-400">Readers</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 6, 0], rotate: [0, -3, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                    className="hidden sm:flex absolute -bottom-4 -left-4 glass-card p-3 items-center gap-2"
                                >
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 text-gold-400" fill="currentColor" />
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-white">4.9/5</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Social Proof Counter */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-12 sm:mt-24 grid grid-cols-3 gap-2.5 sm:gap-8 max-w-3xl mx-auto"
                >
                    {[
                        { number: '50+', label: 'Books Sold' },
                        { number: '98%', label: 'Success Rate' },
                        { number: '4.9★', label: 'Average Rating' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center glass-card p-3 sm:p-6">
                            <p className="text-xl sm:text-3xl font-extrabold gradient-text-gold">{stat.number}</p>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
