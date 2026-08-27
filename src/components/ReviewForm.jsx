import { useState } from 'react'
import { Star, Send, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { submitReview } from '../lib/reviews'

export default function ReviewForm({ onClose, onSubmitted }) {
    const [formData, setFormData] = useState({ name: '', role: '', rating: 5, text: '' })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        try {
            await submitReview(formData)
            setSuccess(true)
            setTimeout(() => {
                onSubmitted()
                onClose()
            }, 1500)
        } catch (err) {
            setError('Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                style={{ width: '100%', maxWidth: '480px', background: '#1a120b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden' }}
            >
                {/* Header */}
                <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3 style={{ color: 'white', fontWeight: 700, fontSize: '18px', margin: 0 }}>Write a Review</h3>
                    <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <X className="w-4 h-4 text-gray-400" />
                    </button>
                </div>

                {/* Body */}
                <div style={{ padding: '20px' }}>
                    {success ? (
                        <div style={{ textAlign: 'center', padding: '32px 0' }}>
                            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎉</div>
                            <p style={{ color: '#4ade80', fontWeight: 700, fontSize: '18px' }}>Review submitted!</p>
                            <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '8px' }}>Thank you for your feedback.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '6px' }}>Your Name *</label>
                                <input
                                    type="text" required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '6px' }}>Your Role</label>
                                <input
                                    type="text"
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    placeholder="e.g. Entrepreneur, Freelancer"
                                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                                />
                            </div>

                            {/* Star Rating */}
                            <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '8px' }}>Rating *</label>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star} type="button"
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
                                        >
                                            <Star
                                                className="w-7 h-7"
                                                style={{ color: star <= formData.rating ? '#fce58d' : '#374151' }}
                                                fill={star <= formData.rating ? '#fce58d' : 'none'}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '6px' }}>Your Review *</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.text}
                                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                                    placeholder="Share your experience with the RGCCO Formula..."
                                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }}
                                />
                            </div>

                            {error && <p style={{ color: '#f87171', fontSize: '13px' }}>{error}</p>}

                            <button
                                type="submit" disabled={loading}
                                className="btn-primary"
                                style={{ width: '100%', padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: loading ? 0.7 : 1 }}
                            >
                                <Send className="w-4 h-4" />
                                <span>{loading ? 'Submitting...' : 'Submit Review'}</span>
                            </button>
                        </form>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}
