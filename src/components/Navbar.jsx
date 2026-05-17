import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onPurchase }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { label: 'Inside', href: '#inside' },
        { label: 'Results', href: '#transformation' },
        { label: 'Reviews', href: '#testimonials' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-[#0f0a06]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl'
                    : 'bg-gradient-to-b from-[#0f0a06]/90 to-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20 w-full">
                    <div />

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-bronze-500 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden sm:block">
                        <button onClick={onPurchase} className="btn-primary text-sm py-2.5 px-6">
                            <span>Get Access</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-white p-2"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="lg:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/5 pb-6"
                >
                    <div className="px-6 pt-4 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="block text-gray-300 hover:text-white py-2 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-3">
                            <button onClick={() => { onPurchase(); setMenuOpen(false) }} className="btn-primary text-sm py-2.5 px-6 w-full">
                                <span>Get Access</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}
