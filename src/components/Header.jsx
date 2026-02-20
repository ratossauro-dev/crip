import React, { useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { Menu, X, Globe } from 'lucide-react'

export default function Header({ currentPage, setCurrentPage, openModal }) {
    const { t, lang, setLang } = useTranslation()
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { key: 'home', label: t('nav.home'), page: 'home' },
        { key: 'about', label: t('nav.about'), action: () => openModal('about') },
        { key: 'faq', label: t('nav.faq'), action: () => openModal('faq') },
        { key: 'support', label: t('nav.support'), page: 'support' },
    ]

    return (
        <header style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
            background: 'rgba(5, 6, 10, 0.85)', backdropFilter: 'blur(16px)',
            borderBottom: '1px solid var(--color-border)'
        }}>
            <div style={{
                maxWidth: 1200, margin: '0 auto', padding: '0 24px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64
            }}>
                {/* Logo */}
                <div
                    onClick={() => setCurrentPage('home')}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}
                >
                    <img src="/logo.png" alt="LilacSwap" style={{ width: 36, height: 36, objectFit: 'contain' }} />
                    <span style={{
                        fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px',
                        background: 'linear-gradient(135deg, #C38BFF, #00D1FF)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        LilacSwap
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                    className="desktop-nav"
                >
                    {navItems.map(item => (
                        <button
                            key={item.key}
                            onClick={() => {
                                if (item.page) setCurrentPage(item.page)
                                else if (item.action) item.action()
                                setMenuOpen(false)
                            }}
                            style={{
                                background: (item.page && currentPage === item.page) ? 'rgba(47, 138, 245, 0.15)' : 'transparent',
                                border: 'none', color: (item.page && currentPage === item.page) ? '#2f8af5' : '#94a3b8',
                                padding: '8px 16px', borderRadius: 8, cursor: 'pointer',
                                fontFamily: 'Outfit', fontSize: 14, fontWeight: 500,
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={e => {
                                if (!(item.page && currentPage === item.page)) e.target.style.color = '#e2e8f0'
                            }}
                            onMouseLeave={e => {
                                if (!(item.page && currentPage === item.page)) e.target.style.color = '#94a3b8'
                            }}
                        >
                            {item.label}
                        </button>
                    ))}

                    {/* Language Toggle */}
                    <button
                        onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
                        style={{
                            background: 'rgba(47, 138, 245, 0.1)', border: '1px solid rgba(47, 138, 245, 0.3)',
                            color: '#2f8af5', padding: '6px 12px', borderRadius: 8,
                            cursor: 'pointer', fontFamily: 'Outfit', fontSize: 13, fontWeight: 500,
                            display: 'flex', alignItems: 'center', gap: 6
                        }}
                    >
                        <Globe size={14} />
                        {lang.toUpperCase()}
                    </button>
                </nav>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        display: 'none', background: 'transparent', border: 'none',
                        color: '#e2e8f0', cursor: 'pointer'
                    }}
                    className="mobile-menu-btn"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {menuOpen && (
                <div style={{
                    background: 'rgba(5, 6, 10, 0.95)', borderTop: '1px solid var(--color-border)',
                    padding: 16, display: 'flex', flexDirection: 'column', gap: 8
                }} className="mobile-nav">
                    {navItems.map(item => (
                        <button
                            key={item.key}
                            onClick={() => {
                                if (item.page) setCurrentPage(item.page)
                                else if (item.action) item.action()
                                setMenuOpen(false)
                            }}
                            style={{
                                background: 'transparent', border: 'none', color: '#e2e8f0',
                                padding: '12px 16px', borderRadius: 8, textAlign: 'left',
                                fontFamily: 'Outfit', fontSize: 16, cursor: 'pointer'
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
                        style={{
                            background: 'rgba(47, 138, 245, 0.1)', border: 'none',
                            color: '#2f8af5', padding: '12px 16px', borderRadius: 8,
                            fontFamily: 'Outfit', fontSize: 16, cursor: 'pointer', textAlign: 'left'
                        }}
                    >
                        <Globe size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />
                        {lang === 'en' ? 'Português' : 'English'}
                    </button>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
        </header>
    )
}
