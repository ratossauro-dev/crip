import React, { useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { Send, Upload, CheckCircle, Headphones } from 'lucide-react'

export default function SupportPage() {
    const { t } = useTranslation()
    const [sent, setSent] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', phone: '', desc: '' })

    if (sent) {
        return (
            <div style={{ maxWidth: 500, margin: '120px auto 60px', padding: '0 24px', textAlign: 'center' }}>
                <div className="glass-card animate-fade-in" style={{ padding: 48 }}>
                    <CheckCircle size={56} color="#16a34a" style={{ margin: '0 auto 20px' }} />
                    <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{t('support.success_title')}</h2>
                    <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 24 }}>{t('support.success_desc')}</p>
                    <button className="btn-primary" onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', desc: '' }) }}
                        style={{ padding: '12px 32px', fontSize: 14 }}>
                        {t('support.send_another')}
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div style={{ maxWidth: 560, margin: '120px auto 60px', padding: '0 24px' }} className="animate-fade-in">
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
                <Headphones size={40} color="#2f8af5" style={{ marginBottom: 12 }} />
                <h1 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{t('support.title')}</h1>
                <p style={{ fontSize: 15, color: '#94a3b8' }}>{t('support.subtitle')}</p>
            </div>

            <div className="glass-card" style={{ padding: 32 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                        <label style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>{t('support.label_name')}</label>
                        <input
                            type="text" value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            placeholder={t('support.placeholder_name')}
                            className="input-dark"
                            style={{ width: '100%', padding: '12px 14px', fontSize: 14, marginTop: 6 }}
                        />
                    </div>
                    <div>
                        <label style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>{t('support.label_email')}</label>
                        <input
                            type="email" value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            placeholder={t('support.placeholder_email')}
                            className="input-dark"
                            style={{ width: '100%', padding: '12px 14px', fontSize: 14, marginTop: 6 }}
                        />
                    </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                    <label style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>{t('support.label_phone')}</label>
                    <input
                        type="tel" value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder={t('support.placeholder_phone')}
                        className="input-dark"
                        style={{ width: '100%', padding: '12px 14px', fontSize: 14, marginTop: 6 }}
                    />
                </div>

                <div style={{ marginBottom: 16 }}>
                    <label style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>{t('support.label_desc')}</label>
                    <textarea
                        value={form.desc}
                        onChange={e => setForm({ ...form, desc: e.target.value })}
                        placeholder={t('support.placeholder_desc')}
                        className="input-dark"
                        rows={5}
                        style={{ width: '100%', padding: '12px 14px', fontSize: 14, marginTop: 6, resize: 'vertical' }}
                    />
                </div>

                <div style={{ marginBottom: 24 }}>
                    <label style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>{t('support.label_file')}</label>
                    <div style={{
                        marginTop: 6, border: '2px dashed var(--color-border)', borderRadius: 12,
                        padding: 24, textAlign: 'center', cursor: 'pointer', color: '#64748b',
                        fontSize: 13, transition: 'border-color 0.2s'
                    }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(47,138,245,0.4)'}
                        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
                    >
                        <Upload size={24} style={{ margin: '0 auto 8px', display: 'block' }} />
                        {t('support.upload_hint')}
                    </div>
                </div>

                <button className="btn-primary" onClick={() => setSent(true)}
                    style={{ width: '100%', padding: '14px 0', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <Send size={16} />
                    {t('support.submit')}
                </button>
            </div>
        </div>
    )
}
