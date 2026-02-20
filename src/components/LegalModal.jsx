import React, { useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { X, FileText, Shield, AlertTriangle } from 'lucide-react'

export default function LegalModal({ onClose }) {
    const { t } = useTranslation()
    const [activeTab, setActiveTab] = useState('terms')

    const tabs = [
        { key: 'terms', label: t('legal.terms'), icon: FileText },
        { key: 'privacy', label: t('legal.privacy'), icon: Shield },
        { key: 'risk', label: t('legal.risk'), icon: AlertTriangle },
    ]

    return (
        <div onClick={onClose} style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16
        }}>
            <div onClick={e => e.stopPropagation()} className="glass-card animate-fade-in" style={{
                width: '100%', maxWidth: 560, maxHeight: '85vh', overflow: 'auto', padding: 32
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>{t('legal.title')}</h2>
                    <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                        <X size={20} />
                    </button>
                </div>

                <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
                    {tabs.map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            style={{
                                flex: 1, padding: '10px 8px', borderRadius: 10, border: 'none',
                                background: activeTab === tab.key ? 'var(--color-primary)' : 'var(--color-input)',
                                color: activeTab === tab.key ? '#fff' : '#94a3b8',
                                fontFamily: 'Outfit', fontSize: 12, fontWeight: 500, cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                                transition: 'all 0.2s'
                            }}
                        >
                            <tab.icon size={14} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div
                    style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={{ __html: t(`legal.${activeTab}_content`) }}
                />
            </div>
        </div>
    )
}
