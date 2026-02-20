import React from 'react'
import { FAKE_TRANSACTIONS } from '../data/coins'
import { ArrowRight } from 'lucide-react'

export default function TransactionsTicker() {
    const items = [...FAKE_TRANSACTIONS, ...FAKE_TRANSACTIONS, ...FAKE_TRANSACTIONS, ...FAKE_TRANSACTIONS]

    return (
        <div style={{
            overflow: 'hidden', borderTop: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)', padding: '12px 0',
            background: 'rgba(19, 21, 36, 0.5)'
        }}>
            <div className="animate-scroll" style={{
                display: 'flex', gap: 24, whiteSpace: 'nowrap', width: 'max-content'
            }}>
                {items.map((tx, i) => (
                    <div key={i} style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        padding: '6px 16px', borderRadius: 8,
                        background: 'rgba(47, 138, 245, 0.05)',
                        fontSize: 13, color: '#94a3b8'
                    }}>
                        <span style={{
                            width: 6, height: 6, borderRadius: '50%',
                            background: tx.status === 'completed' ? '#16a34a' : '#f59e0b',
                            flexShrink: 0
                        }} />
                        <span style={{ color: '#fff', fontWeight: 500 }}>{tx.amount}</span>
                        <span>{tx.from}</span>
                        <ArrowRight size={12} color="#2f8af5" />
                        <span>{tx.to}</span>
                        <span style={{ fontSize: 11, color: '#475569' }}>{tx.time}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
