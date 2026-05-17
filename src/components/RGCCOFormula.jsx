import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Search, Magnet, Repeat, BarChart3, Rocket, ArrowRight } from 'lucide-react'

const steps = [
    {
        letter: 'R',
        title: 'Research & Identify',
        subtitle: 'Find Your Perfect Audience',
        description: 'Use AI-powered research tools to identify your exact ideal customer profile, their deepest desires, biggest fears, and buying triggers. No more guessing — only data-driven precision.',
        icon: Search,
        color: 'from-blue-500 to-cyan-400',
        bgColor: 'from-blue-500/20 to-cyan-400/5',
        features: ['AI audience research', 'Competitor analysis', 'Market gap identification'],
    },
    {
        letter: 'G',
        title: 'Generate & Create',
        subtitle: 'Build Irresistible Offers',
        description: 'Create AI-enhanced content, offers, and lead magnets that speak directly to your audience\'s soul. Generate high-converting copy, visuals, and funnels in minutes — not months.',
        icon: Magnet,
        color: 'from-bronze-500 to-pink-400',
        bgColor: 'from-bronze-500/20 to-pink-400/5',
        features: ['AI content generation', 'Offer stack creation', 'Lead magnet design'],
    },
    {
        letter: 'C',
        title: 'Connect & Engage',
        subtitle: 'Build Deep Relationships',
        description: 'Deploy automated engagement systems that nurture leads with personalized messaging. Build trust at scale using AI-driven email sequences, chatbots, and social proof loops.',
        icon: Repeat,
        color: 'from-gold-400 to-orange-400',
        bgColor: 'from-gold-400/20 to-orange-400/5',
        features: ['Automated nurture sequences', 'AI chatbot engagement', 'Social proof systems'],
    },
    {
        letter: 'C',
        title: 'Convert & Sell',
        subtitle: 'Turn Leads Into Buyers',
        description: 'Implement proven conversion frameworks powered by AI — from persuasive sales pages to intelligent upsells. Every touchpoint is optimized for maximum revenue.',
        icon: BarChart3,
        color: 'from-green-400 to-emerald-400',
        bgColor: 'from-green-400/20 to-emerald-400/5',
        features: ['High-converting funnels', 'AI-optimized pricing', 'Smart upsell sequences'],
    },
    {
        letter: 'O',
        title: 'Optimize & Scale',
        subtitle: 'Automate Your Growth',
        description: 'Set up AI analytics and automation to continuously optimize every step. Scale what works, eliminate what doesn\'t — and watch your business grow on autopilot.',
        icon: Rocket,
        color: 'from-gold-400 to-bronze-500',
        bgColor: 'from-gold-400/20 to-bronze-500/5',
        features: ['AI analytics dashboard', 'Growth automation', 'Continuous optimization'],
    },
]

function StepCard({ step, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group"
        >
            <div className={`glass-card transition-all duration-500 ${isHovered ? 'border-white/15 scale-[1.02]' : ''}`}>
                <div className="flex flex-col sm:flex-row gap-6">
                    {/* Step Number & Icon */}
                    <div className="shrink-0">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.bgColor} flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500`}>
                            <span className={`text-2xl sm:text-3xl font-extrabold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                                {step.letter}
                            </span>
                            <motion.div
                                animate={isHovered ? { scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] } : {}}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0`}
                            />
                        </div>
                        <div className="hidden sm:flex justify-center mt-2">
                            <span className="text-xs text-gray-600 font-mono">Step {index + 1}/5</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <step.icon className={`w-5 h-5 bg-gradient-to-br ${step.color} bg-clip-text`} style={{ color: index === 0 ? '#60a5fa' : index === 1 ? '#c084fc' : index === 2 ? '#f6d365' : index === 3 ? '#4ade80' : '#f6d365' }} />
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{step.subtitle}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">{step.description}</p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                            {step.features.map((feature, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className={`inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-gray-400`}
                                >
                                    <ArrowRight className="w-3 h-3" />
                                    {feature}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
                <div className="hidden sm:flex justify-center py-2">
                    <div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent" />
                </div>
            )}
        </motion.div>
    )
}

export default function RGCCOFormula() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="formula" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze-500/20 to-transparent" />
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-bronze-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[120px]" />
            </div>

            <div ref={ref} className="container-pad relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-bronze-500/20 bg-bronze-500/5 mb-6">
                        <Rocket className="w-4 h-4 text-bronze-400" />
                        <span className="text-sm text-bronze-400 font-medium">The Framework</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
                        The <span className="gradient-text">RGCCO Formula</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
                        Five proven steps that transform any business into an AI-powered conversion machine.
                        Each step builds on the last — creating an unstoppable growth engine.
                    </p>

                    {/* RGCCO Letters */}
                    <div className="flex justify-center gap-1.5 sm:gap-4 mt-6 sm:mt-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className={`w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                            >
                                <span className="text-lg sm:text-2xl font-extrabold text-dark-950">{step.letter}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Steps */}
                <div className="space-y-4">
                    {steps.map((step, i) => (
                        <StepCard key={i} step={step} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
