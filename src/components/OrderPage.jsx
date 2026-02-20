import React, { useState, useEffect } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { Copy, Mail, AlertTriangle, Check, Clock, ArrowRight } from 'lucide-react'
import crypto from '../services/hmac'

export default function OrderPage({ order, onBack }) {
    const { t } = useTranslation()
    const [copied, setCopied] = useState(false)
    const [depositAddress, setDepositAddress] = useState('')
    const [timeLeft, setTimeLeft] = useState(600)
    const [email, setEmail] = useState('')
    const [emailSent, setEmailSent] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    // Fetch deposit address from backend
    useEffect(() => {
        async function fetchAddress() {
            try {
                const res = await fetch('/api/get-deposit-address', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        coin: order.sendCoin.symbol,
                        network: order.sendCoin.network
                    })
                })
                if (!res.ok) throw new Error('Failed to get address')
                const data = await res.json()

                // SECURITY: Verify HMAC
                const verified = crypto.verifyHmac(data.address, order.sendCoin.symbol, order.sendCoin.network, data.hmac)
                if (!verified) {
                    setError('Security verification failed. Please try again.')
                    setLoading(false)
                    return
                }

                setDepositAddress(data.address)
                setLoading(false)
            } catch (err) {
                // Fallback for development (no server running)
                setDepositAddress('Server not connected - configure backend')
                setLoading(false)
            }
        }
        fetchAddress()
    }, [order])

    // Countdown timer
    useEffect(() => {
        if (timeLeft <= 0) return
        const timer = setInterval(() => setTimeLeft(t => t - 1), 1000)
        return () => clearInterval(timer)
    }, [timeLeft])

    const formatTime = (s) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`

    const copyAddress = () => {
        navigator.clipboard.writeText(depositAddress)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const orderId = `ORD-${Date.now().toString(36).toUpperCase()}`
    const steps = [
        { label: t('order.step_1'), active: true },
        { label: t('order.step_2'), active: false },
        { label: t('order.step_3'), active: false },
        { label: t('order.step_4'), active: false },
    ]

    return (
        <div style={{
            maxWidth: 600, margin: '100px auto 40px', padding: '0 20px',
            animation: 'fadeIn 0.5s ease-out'
        }}>
            {/* Back Button */}
            <button onClick={onBack} style={{
                background: 'transparent', border: 'none', color: '#2f8af5',
                fontFamily: 'Outfit', fontSize: 14, cursor: 'pointer', marginBottom: 20,
                display: 'flex', alignItems: 'center', gap: 6
            }}>
                ← {t('nav.home')}
            </button>

            {/* Progress Steps */}
            <div style={{
                display: 'flex', justifyContent: 'space-between', marginBottom: 30
            }}>
                {steps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
                        <div style={{
                            width: 32, height: 32, borderRadius: '50%',
                            background: step.active ? 'var(--color-primary)' : 'var(--color-surface)',
                            border: step.active ? 'none' : '1px solid var(--color-border)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 13, fontWeight: 600, color: step.active ? '#fff' : '#64748b',
                            flexShrink: 0
                        }}>
                            {i + 1}
                        </div>
                        <span style={{
                            fontSize: 12, color: step.active ? '#fff' : '#64748b', fontWeight: 500,
                            display: i > 1 ? 'none' : 'block'
                        }} className="step-label">
                            {step.label}
                        </span>
                        {i < steps.length - 1 && (
                            <div style={{
                                flex: 1, height: 2, background: 'var(--color-border)',
                                margin: '0 8px', borderRadius: 1
                            }} />
                        )}
                    </div>
                ))}
            </div>

            {/* Order Summary */}
            <div className="glass-card" style={{ padding: 24, marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>{t('order.sent')}</div>
                        <div style={{ fontSize: 24, fontWeight: 700, color: '#fff' }}>
                            {order.sendAmount} <span style={{ color: order.sendCoin.color }}>{order.sendCoin.symbol}</span>
                        </div>
                    </div>
                    <ArrowRight size={24} color="#2f8af5" />
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>{t('order.received')}</div>
                        <div style={{ fontSize: 24, fontWeight: 700, color: '#fff' }}>
                            {order.recvAmount} <span style={{ color: order.recvCoin.color }}>{order.recvCoin.symbol}</span>
                        </div>
                    </div>
                </div>

                <div style={{
                    marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr',
                    gap: 12, fontSize: 13, color: '#94a3b8'
                }}>
                    <div>{t('order.order_id')}: <span style={{ color: '#fff' }}>{orderId}</span></div>
                    <div>{t('order.order_type')}: <span style={{ color: '#fff' }}>{order.rateType === 'fixed' ? '⚡ Fixed' : '📊 Float'}</span></div>
                </div>
            </div>

            {/* Timer */}
            <div className="glass-card" style={{
                padding: 16, marginBottom: 16, textAlign: 'center',
                borderColor: timeLeft < 120 ? 'rgba(239, 68, 68, 0.3)' : 'var(--color-border)'
            }}>
                <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>
                    <Clock size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />
                    {t('order.time_remaining')}
                </div>
                <div style={{
                    fontSize: 32, fontWeight: 700,
                    color: timeLeft < 120 ? '#ef4444' : '#2f8af5',
                    fontVariantNumeric: 'tabular-nums'
                }}>
                    {formatTime(timeLeft)}
                </div>
            </div>

            {/* Deposit Address */}
            <div className="glass-card" style={{ padding: 24, marginBottom: 16 }}>
                <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 16 }}>
                    {t('order.send_instruction').replace('{amount}', order.sendAmount).replace('{coin}', order.sendCoin.symbol)}
                </p>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: 20, color: '#64748b' }}>
                        <div className="animate-spin" style={{
                            width: 24, height: 24, border: '2px solid var(--color-border)',
                            borderTopColor: '#2f8af5', borderRadius: '50%', margin: '0 auto 10px'
                        }} />
                        Loading...
                    </div>
                ) : error ? (
                    <div style={{ padding: 16, background: 'rgba(239,68,68,0.1)', borderRadius: 12, color: '#ef4444', fontSize: 14 }}>
                        ❌ {error}
                    </div>
                ) : (
                    <>
                        <div style={{
                            background: 'var(--color-input)', borderRadius: 12, padding: 16,
                            display: 'flex', alignItems: 'center', gap: 12,
                            border: '1px solid var(--color-border)'
                        }}>
                            <code style={{
                                flex: 1, color: '#2f8af5', fontSize: 13, wordBreak: 'break-all',
                                fontFamily: 'monospace'
                            }}>
                                {depositAddress}
                            </code>
                            <button onClick={copyAddress} style={{
                                background: copied ? '#16a34a' : 'var(--color-surface)',
                                border: '1px solid var(--color-border)', borderRadius: 8,
                                padding: '8px 16px', cursor: 'pointer', color: '#fff',
                                fontFamily: 'Outfit', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6,
                                transition: 'all 0.2s', flexShrink: 0
                            }}>
                                {copied ? <Check size={14} /> : <Copy size={14} />}
                                {copied ? t('order.copied') : t('modal.copy')}
                            </button>
                        </div>

                        {/* QR Code */}
                        <div style={{
                            marginTop: 16, textAlign: 'center', padding: 20,
                            background: '#fff', borderRadius: 12,
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(depositAddress)}`}
                                alt="QR Code"
                                style={{ width: 180, height: 180, borderRadius: 8 }}
                            />
                        </div>
                    </>
                )}

                {/* Warning */}
                <div style={{
                    marginTop: 16, padding: 12, background: 'rgba(245, 158, 11, 0.08)',
                    borderRadius: 10, display: 'flex', gap: 10, alignItems: 'flex-start'
                }}>
                    <AlertTriangle size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div style={{ fontSize: 12, color: '#fbbf24', lineHeight: 1.5 }}>
                        <strong>{t('order.attention')}</strong> {t('order.attention_desc')}
                    </div>
                </div>
            </div>

            {/* Receiving Wallet */}
            <div className="glass-card" style={{ padding: 20, marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: '#94a3b8', marginBottom: 8 }}>
                    {t('order.receiving_wallet').replace('{coin}', order.recvCoin.symbol)}
                </div>
                <code style={{ fontSize: 13, color: '#7c3aed', wordBreak: 'break-all', fontFamily: 'monospace' }}>
                    {order.destAddress}
                </code>
            </div>

            {/* Info Bullets */}
            <div className="glass-card" style={{ padding: 20, marginBottom: 16 }}>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 12 }}>
                    {t('order.need_to_know')}
                </h4>
                {[1, 2, 3].map(i => (
                    <p key={i} style={{ fontSize: 12, color: '#94a3b8', marginBottom: 8, lineHeight: 1.5 }}>
                        • {t(`order.info_${i}`)
                            .replace('{confirmations}', '2')
                            .replace('{network}', order.sendCoin.network)
                            .replace('{coin}', order.sendCoin.symbol)}
                    </p>
                ))}
            </div>

            {/* Email Notifications */}
            <div className="glass-card" style={{ padding: 20 }}>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>
                    <Mail size={16} style={{ verticalAlign: 'middle', marginRight: 8 }} />
                    {t('order.notifications')}
                </h4>
                <p style={{ fontSize: 12, color: '#64748b', marginBottom: 12 }}>{t('order.email_desc')}</p>
                {emailSent ? (
                    <p style={{ fontSize: 13, color: '#16a34a' }}>✅ {t('order.email_success')}</p>
                ) : (
                    <div style={{ display: 'flex', gap: 8 }}>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder={t('order.email_placeholder')}
                            className="input-dark"
                            style={{ flex: 1, padding: '10px 14px', fontSize: 14 }}
                        />
                        <button
                            className="btn-primary"
                            onClick={() => setEmailSent(true)}
                            style={{ padding: '10px 20px', fontSize: 13 }}
                        >
                            {t('order.confirm')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
