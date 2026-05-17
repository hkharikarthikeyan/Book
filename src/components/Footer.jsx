import { Sparkles, Heart } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gold-400 to-bronze-500 flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-dark-950" />
                            </div>
                            <span className="text-lg font-bold gradient-text">RGCCO</span>
                        </a>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The proven framework to build AI-powered businesses that generate leads, convert customers, and automate growth.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Formula', 'What\'s Inside', 'Results', 'Pricing', 'FAQ'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(/['\s]/g, '')}`} className="text-sm text-gray-500 hover:text-white transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Connect</h4>
                        <ul className="space-y-3">
                            {['Twitter / X', 'Instagram', 'LinkedIn', 'YouTube'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} RGCCO Formula. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600 flex items-center gap-1">
                        Made with <Heart className="w-3 h-3 text-red-400" fill="currentColor" /> for entrepreneurs
                    </p>
                </div>
            </div>
        </footer>
    )
}
