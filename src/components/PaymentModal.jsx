import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, CreditCard, Smartphone, Lock, CheckCircle, Loader2, Shield } from 'lucide-react'

const paymentMethods = [
    { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, desc: 'Visa, Mastercard, Amex' },
    { id: 'upi', label: 'UPI Payment', icon: Smartphone, desc: 'GPay, PhonePe, Paytm' },
    { id: 'paypal', label: 'PayPal', icon: CreditCard, desc: 'Pay with PayPal' },
]

const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
}

const labelStyle = {
    display: 'block',
    fontSize: '12px',
    color: '#9ca3af',
    marginBottom: '6px',
}

export default function PaymentModal({ onClose, onSuccess }) {
    const [step, setStep] = useState('select')
    const [method, setMethod] = useState('card')
    const [formData, setFormData] = useState({
        email: '', name: '', cardNumber: '', expiry: '', cvv: '', upiId: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setStep('processing')
        setTimeout(() => {
            setStep('success')
            setTimeout(() => onSuccess(), 2000)
        }, 2500)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: '16px', position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '440px',
                    background: '#1a120b',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                    overflow: 'hidden',
                    maxHeight: '95vh',
                    overflowY: 'auto',
                }}
            >
                {/* Header */}
                <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'white', margin: 0 }}>
                            {step === 'success' ? '🎉 Payment Successful!' : 'Secure Checkout'}
                        </h3>
                        <p style={{ fontSize: '13px', color: '#6b7280', margin: '2px 0 0' }}>RGCCO Formula Book — ₹219</p>
                    </div>
                    <button
                        onClick={onClose}
                        style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                    >
                        <X className="w-4 h-4 text-gray-400" />
                    </button>
                </div>

                {/* Body */}
                <div style={{ padding: '20px' }}>
                    {step === 'select' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '16px' }}>Choose your payment method:</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                                {paymentMethods.map((pm) => (
                                    <button
                                        key={pm.id}
                                        onClick={() => setMethod(pm.id)}
                                        style={{
                                            width: '100%', display: 'flex', alignItems: 'center', gap: '16px',
                                            padding: '14px', borderRadius: '12px', textAlign: 'left', cursor: 'pointer',
                                            border: method === pm.id ? '1px solid rgba(252,229,141,0.3)' : '1px solid rgba(255,255,255,0.05)',
                                            background: method === pm.id ? 'rgba(252,229,141,0.05)' : 'rgba(255,255,255,0.02)',
                                        }}
                                    >
                                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: method === pm.id ? 'rgba(252,229,141,0.1)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <pm.icon style={{ width: '20px', height: '20px', color: method === pm.id ? '#fce58d' : '#9ca3af' }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ fontWeight: 600, color: 'white', fontSize: '14px', margin: 0 }}>{pm.label}</p>
                                            <p style={{ fontSize: '12px', color: '#6b7280', margin: '2px 0 0' }}>{pm.desc}</p>
                                        </div>
                                        {method === pm.id && <CheckCircle style={{ width: '20px', height: '20px', color: '#fce58d', flexShrink: 0 }} />}
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setStep('form')} className="btn-primary" style={{ width: '100%', padding: '14px' }}>
                                <span>Continue</span>
                            </button>
                        </motion.div>
                    )}

                    {step === 'form' && (
                        <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                                <label style={labelStyle}>Full Name</label>
                                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={inputStyle} placeholder="John Doe" />
                            </div>
                            <div>
                                <label style={labelStyle}>Email Address</label>
                                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle} placeholder="john@example.com" />
                            </div>

                            {method === 'card' && (
                                <>
                                    <div>
                                        <label style={labelStyle}>Card Number</label>
                                        <input type="text" required maxLength={19} value={formData.cardNumber}
                                            onChange={(e) => {
                                                const v = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim()
                                                setFormData({ ...formData, cardNumber: v })
                                            }}
                                            style={{ ...inputStyle, fontFamily: 'monospace' }} placeholder="4242 4242 4242 4242" />
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <div>
                                            <label style={labelStyle}>Expiry</label>
                                            <input type="text" required maxLength={5} value={formData.expiry}
                                                onChange={(e) => {
                                                    let v = e.target.value.replace(/\D/g, '')
                                                    if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2)
                                                    setFormData({ ...formData, expiry: v })
                                                }}
                                                style={{ ...inputStyle, fontFamily: 'monospace' }} placeholder="MM/YY" />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>CVV</label>
                                            <input type="text" required maxLength={4} value={formData.cvv}
                                                onChange={(e) => setFormData({ ...formData, cvv: e.target.value.replace(/\D/g, '') })}
                                                style={{ ...inputStyle, fontFamily: 'monospace' }} placeholder="123" />
                                        </div>
                                    </div>
                                </>
                            )}

                            {method === 'upi' && (
                                <div>
                                    <label style={labelStyle}>UPI ID</label>
                                    <input type="text" required value={formData.upiId} onChange={(e) => setFormData({ ...formData, upiId: e.target.value })} style={inputStyle} placeholder="yourname@upi" />
                                </div>
                            )}

                            {method === 'paypal' && (
                                <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.1)', textAlign: 'center' }}>
                                    <p style={{ fontSize: '13px', color: '#9ca3af' }}>You'll be redirected to PayPal to complete payment.</p>
                                </div>
                            )}

                            {/* Order Summary */}
                            <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                                    <span style={{ color: '#9ca3af' }}>RGCCO Formula Book</span>
                                    <span style={{ color: '#d1d5db' }}>₹219</span>
                                </div>

                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                                    <span style={{ color: 'white' }}>Total</span>
                                    <span className="gradient-text-gold" style={{ fontSize: '18px' }}>₹219</span>
                                </div>
                            </div>

                            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <Lock className="w-4 h-4" />
                                <span>Pay ₹219 Securely</span>
                            </button>

                            <p style={{ textAlign: 'center', fontSize: '12px', color: '#4b5563', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                <Shield className="w-3 h-3" /> 256-bit SSL encrypted • 100% secure
                            </p>
                        </motion.form>
                    )}

                    {step === 'processing' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '48px 0' }}>
                            <Loader2 className="w-12 h-12 text-gold-400 mx-auto mb-4 animate-spin" />
                            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>Processing Payment...</h3>
                            <p style={{ fontSize: '14px', color: '#9ca3af' }}>Please wait while we securely process your payment.</p>
                        </motion.div>
                    )}

                    {step === 'success' && (
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '48px 0' }}>
                            <motion.div
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                                style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}
                            >
                                <CheckCircle className="w-10 h-10 text-green-400" />
                            </motion.div>
                            <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>Payment Successful! 🎉</h3>
                            <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '8px' }}>Your book is ready to download.</p>
                            <p style={{ fontSize: '12px', color: '#6b7280' }}>A confirmation email has been sent to your inbox.</p>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}
