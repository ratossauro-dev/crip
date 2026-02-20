import React, { useState, useEffect } from 'react'
import { useTranslation } from './i18n/LanguageContext'
import { fetchPrices } from './services/prices'
import Header from './components/Header'
import SwapWidget from './components/SwapWidget'
import CurrencyModal from './components/CurrencyModal'
import OrderPage from './components/OrderPage'
import TransactionsTicker from './components/TransactionsTicker'
import Features from './components/Features'
import FaqModal from './components/FaqModal'
import AboutModal from './components/AboutModal'
import LegalModal from './components/LegalModal'
import SupportPage from './components/SupportPage'
import Footer from './components/Footer'
import { TrendingUp, Users, Headphones } from 'lucide-react'

export default function App() {
    const { t } = useTranslation()

    const [coins, setCoins] = useState([])
    const [currentPage, setCurrentPage] = useState('home')
    const [activeModal, setActiveModal] = useState(null)
    const [currencyModalConfig, setCurrencyModalConfig] = useState(null)
    const [order, setOrder] = useState(null)

    // Fetch prices
    useEffect(() => {
        fetchPrices().then(setCoins)
        const interval = setInterval(() => fetchPrices().then(setCoins), 5 * 60 * 1000)
        return () => clearInterval(interval)
    }, [])

    const openCurrencyModal = (type, coins, onSelect) => {
        setCurrencyModalConfig({ type, coins, onSelect })
    }

    const handleCreateOrder = (orderData) => {
        setOrder(orderData)
        setCurrentPage('order')
    }

    // Render page
    const renderPage = () => {
        if (currentPage === 'order' && order) {
            return <OrderPage order={order} onBack={() => { setCurrentPage('home'); setOrder(null) }} />
        }

        if (currentPage === 'support') {
            return <SupportPage />
        }

        // Home page
        return (
            <>
                {/* Hero Section */}
                <section className="hero-section" style={{
                    minHeight: '100vh', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexDirection: 'column',
                    padding: '100px 24px 40px', position: 'relative'
                }}>
                    {/* Floating orb decorations */}
                    <div style={{
                        position: 'absolute', width: 300, height: 300, borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(47,138,245,0.08) 0%, transparent 70%)',
                        top: '10%', left: '5%', pointerEvents: 'none'
                    }} className="animate-float floating-orb" />
                    <div style={{
                        position: 'absolute', width: 250, height: 250, borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
                        bottom: '15%', right: '8%', pointerEvents: 'none',
                        animationDelay: '3s'
                    }} className="animate-float floating-orb" />

                    <div className="hero-content" style={{
                        display: 'flex', alignItems: 'center', gap: 60,
                        maxWidth: 1100, width: '100%', flexWrap: 'wrap', justifyContent: 'center'
                    }}>
                        {/* Left text */}
                        <div style={{ flex: '1 1 400px', maxWidth: 500 }} className="animate-fade-in hero-text">
                            <h1 className="hero-title" style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.1, color: '#fff', marginBottom: 20 }}>
                                {t('hero.title_1')}<br />
                                <span className="text-gradient">{t('hero.title_2')}</span><br />
                                {t('hero.title_3')}
                            </h1>
                            <p className="hero-subtitle" style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.6, marginBottom: 32, maxWidth: 420 }}>
                                {t('hero.subtitle')}
                            </p>

                            {/* Stats */}
                            <div className="hero-stats" style={{ display: 'flex', gap: 24 }}>
                                {[
                                    { icon: TrendingUp, value: '20+', label: t('hero.stat_currencies') },
                                    { icon: Users, value: '100%', label: t('hero.stat_automatic') },
                                    { icon: Headphones, value: '24/7', label: t('hero.stat_support') },
                                ].map((stat, i) => (
                                    <div key={i} style={{ textAlign: 'center' }}>
                                        <stat.icon size={20} color="#2f8af5" style={{ marginBottom: 4 }} />
                                        <div className="hero-stat-value" style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>{stat.value}</div>
                                        <div style={{ fontSize: 11, color: '#64748b' }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Swap Widget */}
                        <div style={{ flex: '0 1 auto' }}>
                            <SwapWidget
                                coins={coins}
                                onCreateOrder={handleCreateOrder}
                                openCurrencyModal={openCurrencyModal}
                            />
                        </div>
                    </div>
                </section>

                {/* Transactions Ticker */}
                <TransactionsTicker />

                {/* Features */}
                <Features />

                {/* FAQ Inline Section */}
                <section className="faq-section" style={{
                    maxWidth: 700, margin: '0 auto 80px', padding: '0 24px', textAlign: 'center'
                }}>
                    <h2 className="faq-title" style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                        {t('faq.title')}
                    </h2>
                    <p style={{ fontSize: 15, color: '#94a3b8', marginBottom: 32 }}>{t('faq.subtitle')}</p>
                    <FaqInline />
                </section>
            </>
        )
    }

    return (
        <>
            <Header
                currentPage={currentPage}
                setCurrentPage={(p) => { setCurrentPage(p); setOrder(null) }}
                openModal={setActiveModal}
            />

            <main style={{ flex: 1 }}>
                {renderPage()}
            </main>

            <Footer openModal={setActiveModal} setCurrentPage={setCurrentPage} />

            {/* Modals */}
            {activeModal === 'faq' && <FaqModal onClose={() => setActiveModal(null)} />}
            {activeModal === 'about' && <AboutModal onClose={() => setActiveModal(null)} />}
            {activeModal === 'legal' && <LegalModal onClose={() => setActiveModal(null)} />}

            {/* Currency Selection Modal */}
            {currencyModalConfig && (
                <CurrencyModal
                    coins={currencyModalConfig.coins}
                    onSelect={(c) => { currencyModalConfig.onSelect(c); setCurrencyModalConfig(null) }}
                    onClose={() => setCurrencyModalConfig(null)}
                />
            )}
        </>
    )
}

// Inline FAQ accordion for homepage
function FaqInline() {
    const { t } = useTranslation()
    const [openIndex, setOpenIndex] = useState(-1)

    const questions = [1, 2, 3, 4, 5, 6].map(i => ({
        q: t(`faq.q${i}_q`),
        a: t(`faq.q${i}_a`)
    }))

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'left' }}>
            {questions.map((q, i) => (
                <div key={i} style={{
                    background: 'var(--color-input)', borderRadius: 14,
                    border: '1px solid var(--color-border)', overflow: 'hidden',
                    borderColor: openIndex === i ? 'rgba(47, 138, 245, 0.3)' : 'var(--color-border)',
                    transition: 'border-color 0.2s'
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
                        <span style={{ color: '#2f8af5', fontSize: 18, flexShrink: 0 }}>
                            {openIndex === i ? '−' : '+'}
                        </span>
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
    )
}
