import React, { useState } from 'react'
import { X, Search } from 'lucide-react'

export default function CurrencyModal({ coins, onSelect, onClose }) {
    const [search, setSearch] = useState('')

    const filtered = coins.filter(c =>
        c.symbol.toLowerCase().includes(search.toLowerCase()) ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.network.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed', inset: 0, zIndex: 200,
                background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 16
            }}
        >
            <div
                onClick={e => e.stopPropagation()}
                className="glass-card animate-fade-in"
                style={{ width: '100%', maxWidth: 420, maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}
            >
                {/* Header */}
                <div style={{
                    padding: '20px 24px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    borderBottom: '1px solid var(--color-border)'
                }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>Select Currency</h3>
                    <button onClick={onClose} style={{
                        background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8'
                    }}>
                        <X size={20} />
                    </button>
                </div>

                {/* Search */}
                <div style={{ padding: '12px 24px' }}>
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        background: 'var(--color-input)', borderRadius: 12, padding: '0 14px',
                        border: '1px solid var(--color-border)'
                    }}>
                        <Search size={16} color="#64748b" />
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search by name or network..."
                            style={{
                                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                                color: '#fff', fontFamily: 'Outfit', fontSize: 14, padding: '12px 0'
                            }}
                            autoFocus
                        />
                    </div>
                </div>

                {/* Coin List */}
                <div style={{ overflow: 'auto', flex: 1, padding: '0 16px 16px' }}>
                    {filtered.map((coin, i) => (
                        <button
                            key={`${coin.symbol}-${coin.network}-${i}`}
                            onClick={() => { onSelect(coin); onClose() }}
                            style={{
                                width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                                padding: '12px 12px', borderRadius: 12, border: 'none',
                                background: 'transparent', cursor: 'pointer', color: '#fff',
                                fontFamily: 'Outfit', transition: 'background 0.15s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(47, 138, 245, 0.08)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                            <div style={{
                                width: 36, height: 36, borderRadius: '50%', background: coin.color,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0
                            }}>
                                {coin.symbol.slice(0, 2)}
                            </div>
                            <div style={{ flex: 1, textAlign: 'left' }}>
                                <div style={{ fontWeight: 600, fontSize: 14 }}>{coin.symbol}</div>
                                <div style={{ fontSize: 11, color: '#64748b' }}>{coin.name}</div>
                            </div>
                            <div style={{
                                background: 'rgba(47, 138, 245, 0.12)', padding: '4px 10px',
                                borderRadius: 6, fontSize: 11, color: '#2f8af5', fontWeight: 500
                            }}>
                                {coin.network}
                            </div>
                            {coin.rateToUSD > 0 && (
                                <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500, minWidth: 60, textAlign: 'right' }}>
                                    ${coin.rateToUSD > 1000 ? (coin.rateToUSD / 1000).toFixed(1) + 'k' : coin.rateToUSD < 0.01 ? coin.rateToUSD.toFixed(6) : coin.rateToUSD.toFixed(2)}
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
