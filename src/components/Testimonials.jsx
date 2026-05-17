import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Digital Marketing Consultant',
        avatar: 'PS',
        color: 'from-bronze-400 to-pink-400',
        rating: 5,
        result: '3x Revenue in 60 Days',
        text: 'The RGCCO Formula completely transformed my business. I went from randomly posting on social media to having a fully automated AI-powered funnel that generates leads 24/7. My revenue tripled in just two months!',
    },
    {
        name: 'Rahul Patel',
        role: 'E-commerce Founder',
        avatar: 'RP',
        color: 'from-blue-400 to-cyan-400',
        rating: 5,
        result: '10x ROAS on Ads',
        text: 'I was burning money on ads before this book. The AI optimization strategies taught me how to reduce my cost per acquisition by 80% while scaling to 6 figures. This book paid for itself 1000x over.',
    },
    {
        name: 'Ananya Singh',
        role: 'Course Creator',
        avatar: 'AS',
        color: 'from-gold-400 to-orange-400',
        rating: 5,
        result: '₹15L in First Launch',
        text: 'My first course launch using the RGCCO system generated ₹15 lakhs. The step-by-step templates made it so easy — I just followed the framework and the results spoke for themselves.',
    },
    {
        name: 'Vikram Mehta',
        role: 'SaaS Startup CEO',
        avatar: 'VM',
        color: 'from-green-400 to-emerald-400',
        rating: 5,
        result: '500+ Signups in 7 Days',
        text: 'We went from 0 to 500+ paid signups in our first week using the RGCCO Formula. The AI-powered content strategy and conversion optimization techniques are genius. A must-read for any founder.',
    },
    {
        name: 'Meera Joshi',
        role: 'Freelance Designer',
        avatar: 'MJ',
        color: 'from-pink-400 to-rose-400',
        rating: 5,
        result: 'Fully Booked in 30 Days',
        text: 'As a freelancer, I struggled to find clients consistently. After applying the RGCCO Formula, I had a waiting list within a month. The automation chapter alone is worth 100x the price.',
    },
    {
        name: 'Arjun Reddy',
        role: 'Agency Owner',
        avatar: 'AR',
        color: 'from-indigo-400 to-violet-400',
        rating: 5,
        result: 'Scaled to ₹50L/month',
        text: 'This book gave my agency the exact system we needed to scale. The RGCCO Formula isn\'t theory — it\'s a battle-tested playbook. We 5x\'d our monthly revenue in under 90 days.',
    },
]

function TestimonialCard({ t }) {
    return (
        <div className="glass-card h-full hover:border-bronze-500/20 transition-all duration-500 group relative">
            <Quote className="absolute top-5 right-5 sm:top-8 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 text-bronze-500/10" />

            <div className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4 sm:mb-6">
                <span className="text-xs font-bold text-green-400">✦ {t.result}</span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm line-clamp-4 sm:line-clamp-none">"{t.text}"</p>

            <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-white/5">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs sm:text-sm font-bold text-dark-950 shrink-0`}>
                    {t.avatar}
                </div>
                <div className="min-w-0">
                    <p className="font-semibold text-white text-sm truncate">{t.name}</p>
                    <p className="text-xs text-gray-500 truncate">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5 shrink-0">
                    {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 text-gold-400" fill="currentColor" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function Testimonials() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [current, setCurrent] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    // Responsive: listen for resize
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const itemsPerView = isMobile ? 1 : 2
    const maxIndex = Math.max(0, testimonials.length - itemsPerView)

    // Reset current if it exceeds new maxIndex on resize
    useEffect(() => {
        if (current > maxIndex) setCurrent(maxIndex)
    }, [maxIndex, current])

    useEffect(() => {
        if (!autoplay) return
        const timer = setInterval(() => {
            setCurrent(prev => prev >= maxIndex ? 0 : prev + 1)
        }, 4000)
        return () => clearInterval(timer)
    }, [autoplay, maxIndex])

    const goNext = useCallback(() => setCurrent(prev => Math.min(maxIndex, prev + 1)), [maxIndex])
    const goPrev = useCallback(() => setCurrent(prev => Math.max(0, prev - 1)), [])

    // Touch/swipe support for mobile
    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
    const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX }
    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current
        if (Math.abs(diff) > 50) {
            if (diff > 0) goNext()
            else goPrev()
        }
    }

    const slideWidth = 100 / itemsPerView
    const gapPx = isMobile ? 12 : 24
    const offsetPercent = current * slideWidth
    const offsetGap = current * gapPx

    return (
        <section id="testimonials" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze-500/20 to-transparent" />
                <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-bronze-500/5 rounded-full blur-[120px]" />
            </div>

            <div ref={ref} className="container-pad relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-bronze-500/20 bg-bronze-500/5 mb-4 sm:mb-6">
                        <Star className="w-4 h-4 text-bronze-400" fill="currentColor" />
                        <span className="text-sm text-bronze-400 font-medium">Real Results</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
                        What Our <span className="gradient-text">Readers Say</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
                        Join thousands of entrepreneurs who've transformed their business with the RGCCO Formula.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div
                    className="relative"
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            style={{ gap: `${gapPx}px` }}
                            animate={{ x: `calc(-${offsetPercent}% - ${offsetGap}px)` }}
                            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                        >
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className="shrink-0"
                                    style={{ width: `calc(${slideWidth}% - ${gapPx * (itemsPerView - 1) / itemsPerView}px)` }}
                                >
                                    <TestimonialCard t={t} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                        <button
                            onClick={goPrev}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-30"
                            disabled={current === 0}
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>

                        <div className="flex gap-1.5 sm:gap-2">
                            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 sm:w-8 bg-gradient-to-r from-gold-400 to-bronze-500' : 'w-2 bg-white/20'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goNext}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-30"
                            disabled={current >= maxIndex}
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
