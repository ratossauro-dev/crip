import React, { useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { X, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function FaqModal({ onClose }) {
    const { t } = useTranslation()
    const [openIndex, setOpenIndex] = useState(0)

    const questions = [1, 2, 3, 4, 5, 6].map(i => ({
        q: t(`faq.q${i}_q`),
        a: t(`faq.q${i}_a`)
    }))

    return (
        <div onClick={onClose} style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16
        }}>
            <div onClick={e => e.stopPropagation()} className="glass-card animate-fade-in" style={{
                width: '100%', maxWidth: 560, maxHeight: '85vh', overflow: 'auto', padding: 32
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <HelpCircle size={22} color="#2f8af5" />
                        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>{t('faq.title')}</h2>
                    </div>
                    <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                        <X size={20} />
                    </button>
                </div>
                <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 24 }}>{t('faq.subtitle')}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {questions.map((q, i) => (
                        <div key={i} style={{
                            background: 'var(--color-input)', borderRadius: 14,
                            border: '1px solid var(--color-border)', overflow: 'hidden',
                            transition: 'border-color 0.2s',
                            borderColor: openIndex === i ? 'rgba(47, 138, 245, 0.3)' : 'var(--color-border)'
                        }}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                style={{
                                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    padding: '16px 20px', background: 'transparent', border: 'none',
                                    cursor: 'pointer', color: '#fff', fontFamily: 'Outfit',
                                    fontSize: 15, fontWeight: 500, textAlign: 'left', gap: 12
                                }}
                            >
                                <span>{q.q}</span>
                                {openIndex === i ? <ChevronUp size={18} color="#2f8af5" /> : <ChevronDown size={18} color="#64748b" />}
                            </button>
                            {openIndex === i && (
                                <div style={{
                                    padding: '0 20px 16px', fontSize: 14, color: '#94a3b8', lineHeight: 1.6,
                                    animation: 'fadeIn 0.3s ease-out'
                                }}>
                                    {q.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
