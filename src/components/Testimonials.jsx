import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote, PenLine } from 'lucide-react'
import ReviewForm from './ReviewForm'
import { fetchReviews as loadReviews } from '../lib/reviews'

const avatarColors = [
    'from-bronze-400 to-pink-400', 'from-blue-400 to-cyan-400',
    'from-gold-400 to-orange-400', 'from-green-400 to-emerald-400',
    'from-pink-400 to-rose-400', 'from-indigo-400 to-violet-400',
]

function getAvatar(name) {
    return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

function TestimonialCard({ t, index }) {
    return (
        <div className="glass-card h-full hover:border-bronze-500/20 transition-all duration-500 relative">
            <Quote className="absolute top-5 right-5 w-8 h-8 text-bronze-500/10" />
            <p className="text-gray-300 leading-relaxed mb-4 text-sm">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-xs font-bold text-dark-950 shrink-0`}>
                    {getAvatar(t.name)}
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
    const [showForm, setShowForm] = useState(false)
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const fetchReviews = useCallback(async () => {
        try {
            setReviews(await loadReviews())
        } catch {
            setReviews([])
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => { fetchReviews() }, [fetchReviews])

    const itemsPerView = isMobile ? 1 : 2
    const maxIndex = Math.max(0, reviews.length - itemsPerView)

    useEffect(() => { setCurrent(0) }, [reviews.length])

    useEffect(() => {
        if (!autoplay || reviews.length === 0) return
        const timer = setInterval(() => {
            setCurrent(prev => prev >= maxIndex ? 0 : prev + 1)
        }, 4000)
        return () => clearInterval(timer)
    }, [autoplay, maxIndex, reviews.length])

    const goNext = useCallback(() => setCurrent(prev => Math.min(maxIndex, prev + 1)), [maxIndex])
    const goPrev = useCallback(() => setCurrent(prev => Math.max(0, prev - 1)), [])

    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
    const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX }
    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current
        if (Math.abs(diff) > 50) { diff > 0 ? goNext() : goPrev() }
    }

    const slideWidth = 100 / itemsPerView
    const gapPx = isMobile ? 12 : 24
    const offsetPercent = current * slideWidth
    const offsetGap = current * gapPx

    return (
        <section id="testimonials" className="section-padding relative overflow-hidden">
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
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-bronze-500/20 bg-bronze-500/5 mb-4">
                        <Star className="w-4 h-4 text-bronze-400" fill="currentColor" />
                        <span className="text-sm text-bronze-400 font-medium">Real Results</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                        What Our <span className="gradient-text">Readers Say</span>
                    </h2>
                    <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed px-4 mb-6">
                        Real reviews from real readers. No fake testimonials.
                    </p>
                    <button
                        onClick={() => setShowForm(true)}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px', border: '1px solid rgba(252,229,141,0.3)', background: 'rgba(252,229,141,0.05)', color: '#fce58d', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
                    >
                        <PenLine className="w-4 h-4" />
                        Write a Review
                    </button>
                </motion.div>

                {/* Reviews Content */}
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '40px 0', color: '#9ca3af', fontSize: '15px' }}>
                        Loading reviews...
                    </div>
                ) : reviews.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                        <p style={{ color: '#9ca3af', fontSize: '16px' }}>No reviews yet. Be the first to share your experience!</p>
                    </div>
                ) : (
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
                                {reviews.map((t, i) => (
                                    <div key={t.id || i} className="shrink-0" style={{ width: `calc(${slideWidth}% - ${gapPx * (itemsPerView - 1) / itemsPerView}px)` }}>
                                        <TestimonialCard t={t} index={i} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {reviews.length > itemsPerView && (
                            <div className="flex items-center justify-center gap-3 mt-6">
                                <button onClick={goPrev} disabled={current === 0}
                                    className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-30">
                                    <ChevronLeft className="w-4 h-4 text-white" />
                                </button>
                                <div className="flex gap-1.5">
                                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                                        <button key={i} onClick={() => setCurrent(i)}
                                            style={{ height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'all 0.3s', width: i === current ? '24px' : '8px', background: i === current ? '#fce58d' : 'rgba(255,255,255,0.2)' }}
                                        />
                                    ))}
                                </div>
                                <button onClick={goNext} disabled={current >= maxIndex}
                                    className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-30">
                                    <ChevronRight className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <AnimatePresence>
                {showForm && (
                    <ReviewForm
                        onClose={() => setShowForm(false)}
                        onSubmitted={fetchReviews}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}
