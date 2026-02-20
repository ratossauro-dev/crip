import { useTranslation } from '../i18n/LanguageContext'
import LogoIcon from './LogoIcon'


export default function Footer({ openModal, setCurrentPage }) {
    const { t } = useTranslation()

    return (
        <footer style={{
            borderTop: '1px solid var(--color-border)', padding: '48px 24px 24px',
            marginTop: 'auto', background: 'rgba(5, 6, 10, 0.6)'
        }}>
            <div className="footer-grid" style={{
                maxWidth: 1100, margin: '0 auto',
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 32, marginBottom: 36
            }}>
                {/* Brand */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 12 }}>
                        <LogoIcon size={24} />
                        <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.5px' }}>
                            <span style={{ color: '#ffffff' }}>Lilac</span>
                            <span style={{ color: '#a855f7' }}>Swap</span>
                        </span>
                    </div>
                    <p className="footer-brand-text" style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5, maxWidth: 250 }}>
                        {t('footer.desc')}
                    </p>
                </div>

                {/* About Links */}
                <div>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 12 }}>{t('footer.about_us')}</h4>
                    {[
                        { label: t('footer.our_brand'), action: () => openModal('about') },
                    ].map((link, i) => (
                        <button key={i} onClick={link.action} style={{
                            display: 'block', background: 'transparent', border: 'none',
                            color: '#94a3b8', fontSize: 13, cursor: 'pointer', marginBottom: 8,
                            fontFamily: 'Outfit', padding: 0
                        }}>
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Support Links */}
                <div>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 12 }}>{t('footer.support_center')}</h4>
                    {[
                        { label: 'FAQ', action: () => openModal('faq') },
                        { label: t('footer.support_center'), action: () => setCurrentPage('support') },
                    ].map((link, i) => (
                        <button key={i} onClick={link.action} style={{
                            display: 'block', background: 'transparent', border: 'none',
                            color: '#94a3b8', fontSize: 13, cursor: 'pointer', marginBottom: 8,
                            fontFamily: 'Outfit', padding: 0
                        }}>
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Legal Links */}
                <div>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 12 }}>Legal</h4>
                    {[
                        { label: t('footer.terms'), action: () => openModal('legal') },
                        { label: t('footer.privacy'), action: () => openModal('legal') },
                    ].map((link, i) => (
                        <button key={i} onClick={link.action} style={{
                            display: 'block', background: 'transparent', border: 'none',
                            color: '#94a3b8', fontSize: 13, cursor: 'pointer', marginBottom: 8,
                            fontFamily: 'Outfit', padding: 0
                        }}>
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{
                borderTop: '1px solid var(--color-border)', paddingTop: 20,
                textAlign: 'center', fontSize: 12, color: '#475569'
            }}>
                © {new Date().getFullYear()} LilacSwap. {t('footer.rights')}
            </div>
        </footer>
    )
}
