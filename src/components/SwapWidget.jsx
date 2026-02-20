import React, { useState, useEffect, useMemo } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { ArrowDownUp, Clipboard, ChevronDown, Sparkles, Loader } from 'lucide-react'

export default function SwapWidget({ coins, onCreateOrder, openCurrencyModal }) {
    const { t } = useTranslation()

    const [sendCoin, setSendCoin] = useState(null)
    const [recvCoin, setRecvCoin] = useState(null)
    const [sendAmount, setSendAmount] = useState('0.1')
    const [destAddress, setDestAddress] = useState('')
    const [rateType, setRateType] = useState('fixed')
    const [aiText, setAiText] = useState('')
    const [aiLoading, setAiLoading] = useState(false)

    // Set defaults when coins load
    useEffect(() => {
        if (coins.length > 0 && !sendCoin) {
            setSendCoin(coins.find(c => c.symbol === 'BTC') || coins[0])
            setRecvCoin(coins.find(c => c.symbol === 'ETH' && c.network === 'ERC20') || coins[1])
        }
    }, [coins])

    const fee = rateType === 'fixed' ? 0.01 : 0.005
    const feeLabel = rateType === 'fixed' ? '1%' : '0.5%'

    const recvAmount = useMemo(() => {
        if (!sendCoin?.rateToUSD || !recvCoin?.rateToUSD || !sendAmount) return '0'
        const usdValue = parseFloat(sendAmount) * sendCoin.rateToUSD
        const afterFee = usdValue * (1 - fee)
        const result = afterFee / recvCoin.rateToUSD
        return result > 0 ? result.toFixed(8).replace(/0+$/, '').replace(/\.$/, '') : '0'
    }, [sendCoin, recvCoin, sendAmount, fee])

    const exchangeRate = useMemo(() => {
        if (!sendCoin?.rateToUSD || !recvCoin?.rateToUSD) return ''
        const rate = (sendCoin.rateToUSD / recvCoin.rateToUSD) * (1 - fee)
        return `1 ${sendCoin.symbol} ≈ ${rate.toFixed(6)} ${recvCoin.symbol}`
    }, [sendCoin, recvCoin, fee])

    const swapCoins = () => {
        const tmp = sendCoin
        setSendCoin(recvCoin)
        setRecvCoin(tmp)
    }

    const handleExchange = () => {
        if (!destAddress || destAddress.length < 10) return
        onCreateOrder({
            sendCoin, recvCoin, sendAmount, recvAmount,
            destAddress, rateType, exchangeRate
        })
    }

    const CoinButton = ({ coin, onClick, label }) => (
        <div style={{ marginBottom: 6 }}>
            <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>{label}</span>
            <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                <button
                    onClick={onClick}
                    style={{
                        flex: '0 0 auto', background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)', borderRadius: 12,
                        padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8,
                        cursor: 'pointer', color: '#fff', fontFamily: 'Outfit', fontSize: 15,
                        minWidth: 140, transition: 'border-color 0.2s'
                    }}
                >
                    <div style={{
                        width: 28, height: 28, borderRadius: '50%', background: coin?.color || '#333',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 700, color: '#fff'
                    }}>
                        {coin?.symbol?.slice(0, 2) || '?'}
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>{coin?.symbol || '---'}</div>
                        <div style={{ fontSize: 10, color: '#64748b' }}>{coin?.network || ''}</div>
                    </div>
                    <ChevronDown size={16} color="#64748b" />
                </button>
                {label === t('widget.send') ? (
                    <input
                        type="number"
                        value={sendAmount}
                        onChange={e => setSendAmount(e.target.value)}
                        style={{
                            flex: 1, background: 'var(--color-input)', border: '1px solid var(--color-border)',
                            borderRadius: 12, padding: '10px 14px', color: '#fff',
                            fontFamily: 'Outfit', fontSize: 18, fontWeight: 600, outline: 'none'
                        }}
                        min="0"
                    />
                ) : (
                    <div style={{
                        flex: 1, background: 'var(--color-input)', border: '1px solid var(--color-border)',
                        borderRadius: 12, padding: '10px 14px', color: '#7c3aed',
                        fontFamily: 'Outfit', fontSize: 18, fontWeight: 600,
                        display: 'flex', alignItems: 'center'
                    }}>
                        {recvAmount}
                    </div>
                )}
            </div>
        </div>
    )

    return (
        <div className="glass-card animate-fade-in" style={{
            maxWidth: 460, width: '100%', padding: 28
        }}>
            {/* Rate Toggle */}
            <div style={{
                display: 'flex', gap: 8, marginBottom: 20,
                background: 'var(--color-input)', borderRadius: 12, padding: 4
            }}>
                {['fixed', 'float'].map(type => (
                    <button
                        key={type}
                        onClick={() => setRateType(type)}
                        style={{
                            flex: 1, padding: '10px 0', border: 'none', borderRadius: 10,
                            background: rateType === type ? 'var(--color-primary)' : 'transparent',
                            color: rateType === type ? '#fff' : '#94a3b8',
                            fontFamily: 'Outfit', fontWeight: 600, fontSize: 13, cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        {type === 'fixed' ? `⚡ ${t('widget.fixed_rate')} (${feeLabel})` : `📊 ${t('widget.float_rate')} (${feeLabel})`}
                    </button>
                ))}
            </div>

            {/* Send Section */}
            <CoinButton
                coin={sendCoin}
                onClick={() => openCurrencyModal('send', coins, (c) => setSendCoin(c))}
                label={t('widget.send')}
            />

            {/* Swap Arrow */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
                <button
                    onClick={swapCoins}
                    style={{
                        background: 'linear-gradient(135deg, #2f8af5, #7c3aed)',
                        border: 'none', borderRadius: '50%', width: 40, height: 40,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', transition: 'transform 0.3s'
                    }}
                    onMouseEnter={e => e.target.style.transform = 'rotate(180deg)'}
                    onMouseLeave={e => e.target.style.transform = 'rotate(0deg)'}
                >
                    <ArrowDownUp size={18} color="#fff" />
                </button>
            </div>

            {/* Receive Section */}
            <CoinButton
                coin={recvCoin}
                onClick={() => openCurrencyModal('recv', coins, (c) => setRecvCoin(c))}
                label={t('widget.receive')}
            />

            {/* Exchange Rate */}
            {exchangeRate && (
                <div style={{
                    marginTop: 12, padding: '10px 14px', background: 'var(--color-input)',
                    borderRadius: 10, fontSize: 13, color: '#94a3b8',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <span>{t('widget.exchange_rate')}</span>
                    <span style={{ color: '#7c3aed', fontWeight: 600 }}>{exchangeRate}</span>
                </div>
            )}

            {/* Destination Address */}
            <div style={{ marginTop: 16 }}>
                <label style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>{t('widget.dest_addr')}</label>
                <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                    <input
                        type="text"
                        value={destAddress}
                        onChange={e => setDestAddress(e.target.value)}
                        placeholder={t('widget.placeholder_addr').replace('{coin}', recvCoin?.symbol || '')}
                        className="input-dark"
                        style={{ flex: 1, padding: '12px 14px', fontSize: 14 }}
                    />
                    <button
                        onClick={async () => {
                            try {
                                const text = await navigator.clipboard.readText()
                                setDestAddress(text)
                            } catch { }
                        }}
                        style={{
                            background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                            borderRadius: 12, padding: '0 14px', cursor: 'pointer', color: '#94a3b8'
                        }}
                    >
                        <Clipboard size={16} />
                    </button>
                </div>
            </div>

            {/* Time & Fee */}
            <div style={{
                marginTop: 12, display: 'flex', justifyContent: 'space-between',
                fontSize: 12, color: '#64748b'
            }}>
                <span>⏱ {t('widget.min_time')}</span>
                <span>{t('widget.network_fee')}: {t('widget.included')}</span>
            </div>

            {/* Exchange Button */}
            <button
                className="btn-primary animate-pulse-glow"
                onClick={handleExchange}
                disabled={!destAddress || destAddress.length < 10}
                style={{
                    width: '100%', padding: '16px 0', fontSize: 16,
                    marginTop: 20, letterSpacing: 0.5
                }}
            >
                ⚡ {destAddress.length >= 10 ? t('widget.exchange_now') : t('widget.enter_address')}
            </button>

            {/* AI Analysis Button */}
            <button
                onClick={async () => {
                    if (aiLoading || !sendCoin) return
                    setAiLoading(true)
                    setAiText('')
                    setTimeout(() => {
                        setAiText(`${sendCoin.symbol}/${recvCoin.symbol}: Market looks stable. ${sendCoin.symbol} has shown +2.3% in the last 24h. Good time for a swap with ${rateType} rate. Network fees are low on ${sendCoin.network}.`)
                        setAiLoading(false)
                    }, 2000)
                }}
                style={{
                    width: '100%', padding: '12px 0', marginTop: 10,
                    background: 'transparent', border: '1px solid rgba(124, 58, 237, 0.3)',
                    borderRadius: 12, color: '#7c3aed', fontFamily: 'Outfit',
                    fontSize: 13, fontWeight: 500, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                }}
            >
                {aiLoading ? <Loader size={14} className="animate-spin" /> : <Sparkles size={14} />}
                {aiLoading ? t('widget.ai_analyzing') : t('widget.ai_btn')}
            </button>
            {aiText && (
                <div style={{
                    marginTop: 8, padding: 12, background: 'rgba(124, 58, 237, 0.08)',
                    borderRadius: 10, fontSize: 12, color: '#c4b5fd', lineHeight: 1.5
                }}>
                    {aiText}
                </div>
            )}
        </div>
    )
}
