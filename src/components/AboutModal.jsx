import React from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { X, Globe, Cpu, Lock, Zap } from 'lucide-react'

export default function AboutModal({ onClose }) {
    const { t } = useTranslation()

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
                    <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>{t('about.title')}</h2>
                    <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                        <X size={20} />
                    </button>
                </div>

                <h3 className="text-gradient" style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
                    {t('about.general_title')}
                </h3>
                <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.6, marginBottom: 24 }}>
                    {t('about.general_desc')}
                </p>

                {/* Mission & Tech cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
                    {[{
                        icon: Globe, title: t('about.card_1_title'), desc: t('about.card_1_desc'),
                        bg: 'linear-gradient(135deg, rgba(47,138,245,0.15), rgba(47,138,245,0.05))'
                    }, {
                        icon: Cpu, title: t('about.card_2_title'), desc: t('about.card_2_desc'),
                        bg: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(124,58,237,0.05))'
                    }].map((card, i) => (
                        <div key={i} style={{
                            padding: 20, borderRadius: 14, background: card.bg,
                            border: '1px solid var(--color-border)'
                        }}>
                            <card.icon size={24} color="#2f8af5" style={{ marginBottom: 10 }} />
                            <h4 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{card.title}</h4>
                            <p style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.5 }}>{card.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Values */}
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 12 }}>
                    {t('about.values_title')}
                </h3>
                {[{
                    icon: Lock, title: t('about.val_1_title'), desc: t('about.val_1_desc')
                }, {
                    icon: Zap, title: t('about.val_2_title'), desc: t('about.val_2_desc')
                }].map((val, i) => (
                    <div key={i} style={{
                        display: 'flex', gap: 12, padding: '14px 0',
                        borderBottom: i === 0 ? '1px solid var(--color-border)' : 'none'
                    }}>
                        <val.icon size={20} color="#7c3aed" style={{ flexShrink: 0, marginTop: 2 }} />
                        <div>
                            <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{val.title}</div>
                            <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.5 }}>{val.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
