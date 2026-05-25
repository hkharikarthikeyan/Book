import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {

    return (
        <motion.a
            href="https://chat.whatsapp.com/Lvr7Ysm0SdE4rxhfnyL2d7"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-32 right-3 sm:bottom-6 sm:right-6 z-[60] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow group"
            title="Chat on WhatsApp"
        >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />

            {/* Tooltip */}
            <div className="absolute right-full mr-3 px-3 py-1.5 bg-dark-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                <span className="text-xs text-white">Need help? Chat with us</span>
                <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-0 h-0 border-l-4 border-l-dark-800 border-y-4 border-y-transparent" />
            </div>

            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        </motion.a>
    )
}
