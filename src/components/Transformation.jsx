import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Check, ArrowRight } from 'lucide-react'

const beforeItems = [
    'Confused by too many strategies',
    'Posting content with zero engagement',
    'No system or repeatable process',
    'Spending money on ads that don\'t convert',
    'Stuck at the same revenue for months',
    'Working 12+ hours with no results',
]

const afterItems = [
    'Crystal-clear AI-powered strategy',
    'Content that attracts & converts automatically',
    'Proven RGCCO system running on autopilot',
    'AI-optimized campaigns with 10x ROAS',
    'Predictable, growing revenue every month',
    'Working smarter — 4 hours with 10x results',
]

export default function Transformation() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="transformation" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
                <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
            </div>

            <div ref={ref} className="container-pad relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 mb-6">
                        <ArrowRight className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400 font-medium">Your Transformation</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
                        Before vs. <span className="text-green-400">After</span> The Book
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
                        See the real transformation that happens when you apply the RGCCO Formula to your business.
                    </p>
                </motion.div>

                {/* Before / After Grid */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                    {/* BEFORE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="glass-card border-red-500/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500" />
                        <div className="absolute top-0 right-0 bg-gradient-to-bl from-red-500/5 to-transparent w-40 h-40" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                                    <X className="w-5 h-5 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Before RGCCO</h3>
                                    <p className="text-sm text-red-400">Struggling & overwhelmed</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {beforeItems.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.08 }}
                                        className="flex items-start gap-3 group"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <X className="w-3 h-3 text-red-400" />
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* AFTER */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="glass-card border-green-500/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-400" />
                        <div className="absolute top-0 right-0 bg-gradient-to-bl from-green-500/5 to-transparent w-40 h-40" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                                    <Check className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">After RGCCO</h3>
                                    <p className="text-sm text-green-400">Confident & automated</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {afterItems.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.08 }}
                                        className="flex items-start gap-3 group"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-green-400" />
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <p className="text-xl text-white font-semibold mb-2">
                        Which version of yourself do you choose?
                    </p>
                    <p className="text-gray-400">
                        The RGCCO Formula makes the "After" your <span className="text-green-400 font-medium">new reality</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
