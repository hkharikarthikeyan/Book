import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle, Clock, TrendingDown, Ban, Brain, Target } from 'lucide-react'

function AnimatedCard({ children, delay = 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}

export default function Problem() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const painPoints = [
        {
            icon: Brain,
            title: 'Information Overload',
            description: 'You\'ve watched 100s of YouTube videos, bought courses, read blogs — but you\'re more confused than ever. None of it connects into a real system.',
            color: 'from-red-500/20 to-red-600/5'
        },
        {
            icon: Clock,
            title: 'Wasting Precious Time',
            description: 'Hours spent on social media "strategies" that don\'t convert. You\'re busy, but not productive. Activity without results is just noise.',
            color: 'from-orange-500/20 to-orange-600/5'
        },
        {
            icon: TrendingDown,
            title: 'Declining Results',
            description: 'Your competitors are using AI while you\'re stuck doing everything manually. The gap grows wider every single day.',
            color: 'from-yellow-500/20 to-yellow-600/5'
        },
        {
            icon: Ban,
            title: 'No Repeatable System',
            description: 'Every sale feels random. No funnel, no automation, no predictable revenue. You\'re running a business on hope — not strategy.',
            color: 'from-bronze-500/20 to-bronze-600/5'
        },
    ]

    return (
        <section className="section-padding relative overflow-hidden" id="problem">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px]" />
            </div>

            <div ref={ref} className="container-pad relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-6">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-400 font-medium">The Hard Truth</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
                        Why <span className="text-red-400">97% of Entrepreneurs</span>
                        <br />Fail at Digital Growth
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
                        It's not your fault. The online world is designed to keep you consuming, not converting.
                        But here's what no one tells you...
                    </p>
                </motion.div>

                {/* Pain Points Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {painPoints.map((point, i) => (
                        <AnimatedCard key={i} delay={0.1 * i}>
                            <div className="glass-card h-full group hover:border-red-500/20 transition-all duration-500">
                                <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform`}>
                                    <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{point.title}</h3>
                                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{point.description}</p>
                            </div>
                        </AnimatedCard>
                    ))}
                </div>

                {/* Emotional CTA */}
                <AnimatedCard delay={0.5}>
                    <div className="mt-12 sm:mt-16 text-center glass-card border-red-500/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5" />
                        <div className="relative z-10">
                            <Target className="w-10 h-10 text-red-400 mx-auto mb-4" />
                            <h3 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                                Sound Familiar?
                            </h3>
                            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
                                If you've been nodding along, you're not alone. <span className="text-white font-medium">Thousands of entrepreneurs</span> face
                                these exact same struggles every day. The difference? Some discover a system that actually works.
                                <br /><br />
                                <span className="text-gold-400 font-semibold">That system is the RGCCO Formula ↓</span>
                            </p>
                        </div>
                    </div>
                </AnimatedCard>
            </div>
        </section>
    )
}
