import React from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { Shield, Zap, Coins } from 'lucide-react'

export default function Features() {
    const { t } = useTranslation()

    const features = [
        { icon: Shield, title: t('features.f1_title'), desc: t('features.f1_desc'), gradient: 'linear-gradient(135deg, #2f8af5, #60a5fa)' },
        { icon: Coins, title: t('features.f2_title'), desc: t('features.f2_desc'), gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)' },
        { icon: Zap, title: t('features.f3_title'), desc: t('features.f3_desc'), gradient: 'linear-gradient(135deg, #14b8a6, #34d399)' },
    ]

    return (
        <section className="features-section" style={{
            maxWidth: 1100, margin: '80px auto', padding: '0 24px',
            textAlign: 'center'
        }}>
            <h2 className="features-title" style={{ fontSize: 36, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
                {t('features.title')} <span className="text-gradient">CryptoSwap</span>?
            </h2>
            <p style={{ fontSize: 16, color: '#94a3b8', maxWidth: 600, margin: '0 auto 48px' }}>
                {t('features.subtitle')}
            </p>

            <div className="features-grid" style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 24
            }}>
                {features.map((f, i) => (
                    <div key={i} className="glass-card glass-card-hover" style={{
                        padding: 32, textAlign: 'left', cursor: 'default',
                        transition: 'all 0.3s ease'
                    }}>
                        <div style={{
                            width: 52, height: 52, borderRadius: 14,
                            background: f.gradient, display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            marginBottom: 20
                        }}>
                            <f.icon size={24} color="#fff" />
                        </div>
                        <h3 style={{ fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: 10 }}>
                            {f.title}
                        </h3>
                        <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.6 }}>
                            {f.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
