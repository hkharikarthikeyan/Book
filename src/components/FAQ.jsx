import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
    {
        q: 'What exactly is the RGCCO Formula?',
        a: 'The RGCCO Formula is a proven 5-step framework: Research, Generate, Connect, Convert, and Optimize. It teaches you how to leverage AI tools and automation to build a business system that generates leads, converts customers, and scales on autopilot.'
    },
    {
        q: 'Is this book suitable for beginners?',
        a: 'Absolutely! The RGCCO Formula is designed to be beginner-friendly. Every step is explained in plain language with screenshots, templates, and examples. You don\'t need any technical skills or prior AI experience.'
    },
    {
        q: 'What format is the book delivered in?',
        a: 'The book is delivered as a premium digital PDF that you can read on any device — phone, tablet, or laptop. You also get access to companion video content and downloadable templates.'
    },
    {
        q: 'How long before I see results?',
        a: 'Most readers start seeing tangible results within 2-4 weeks of implementation. Some have reported their first AI-generated leads within just 3 days. Results vary based on your niche and effort level.'
    },
    {
        q: 'Is there a money-back guarantee?',
        a: 'Yes! We offer a 30-day no-questions-asked money-back guarantee. If you feel the RGCCO Formula hasn\'t provided value, simply email us and we\'ll refund 100% of your purchase.'
    },
    {
        q: 'What AI tools do I need? Are they expensive?',
        a: 'We cover free and paid AI tools in the book. You can get started with completely free tools, and our guide includes budget-friendly alternatives for every recommendation. Most readers spend less than ₹500/month on tools.'
    },
    {
        q: 'Can this work for my specific industry?',
        a: 'The RGCCO Formula is industry-agnostic. Our readers include e-commerce sellers, coaches, SaaS founders, freelancers, agencies, course creators, and more. The principles apply to any business that wants to grow online.'
    },
    {
        q: 'How is this different from other marketing books?',
        a: 'Unlike generic marketing books, RGCCO is built specifically for the AI era. It doesn\'t just teach theory — it gives you exact playbooks, templates, prompts, and step-by-step systems you can implement immediately.'
    },
]

function FAQItem({ faq, index }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`glass-card overflow-hidden transition-all duration-300 ${isOpen ? 'border-bronze-500/20' : ''}`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
            >
                <span className="font-semibold text-white text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-bronze-400' : ''}`}
                />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-400 text-sm sm:text-base leading-relaxed">
                    {faq.a}
                </p>
            </motion.div>
        </motion.div>
    )
}

export default function FAQ() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="faq" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>

            <div ref={ref} className="container-pad relative z-10 max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] mb-6">
                        <HelpCircle className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400 font-medium">Got Questions?</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        Everything you need to know before getting your copy.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} faq={faq} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
