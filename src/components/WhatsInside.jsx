import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Gift, FileText, Cpu, BarChart3, Lightbulb, Layers, Video, CheckCircle } from 'lucide-react'

const chapters = [
    { icon: BookOpen, title: 'The RGCCO Framework', desc: 'Complete breakdown of all 5 phases with real examples', tag: 'Core' },
    { icon: Cpu, title: 'AI Tools Mastery', desc: 'The exact AI tools and prompts that generate results', tag: 'AI' },
    { icon: BarChart3, title: 'Conversion Systems', desc: 'Build funnels that convert strangers into buyers', tag: 'Strategy' },
    { icon: Layers, title: 'Automation Playbooks', desc: 'Set-and-forget systems that work while you sleep', tag: 'Automation' },
    { icon: Lightbulb, title: 'Content Creation Engine', desc: '30-day content calendar with AI-generated ideas', tag: 'Content' },
    { icon: FileText, title: 'Swipe Files & Templates', desc: 'Copy-paste templates for emails, ads, and landing pages', tag: 'Templates' },
]

export default function WhatsInside() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="inside" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
                <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px]" />
            </div>

            <div ref={ref} className="container-pad relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/20 bg-gold-400/5 mb-6">
                        <BookOpen className="w-4 h-4 text-gold-400" />
                        <span className="text-sm text-gold-400 font-medium">What You Get</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
                        Everything Inside <span className="gradient-text-gold">The Book</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
                        Over 200 pages of actionable strategies, AI frameworks, templates, and real-world case studies.
                    </p>
                </motion.div>

                {/* Chapters Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
                    {chapters.map((ch, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className="glass-card group hover:border-gold-400/20 transition-all duration-500 hover:scale-[1.02]"
                        >
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-gold-400/10 to-bronze-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <ch.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400" />
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-600 border border-white/5 px-2 py-1 rounded-full">
                                    {ch.tag}
                                </span>
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2">{ch.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{ch.desc}</p>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    )
}
