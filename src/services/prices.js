import { COINS } from '../data/coins'

export async function fetchPrices() {
    try {
        const [binanceRes, geckoRes] = await Promise.all([
            fetch('https://api.binance.com/api/v3/ticker/price').catch(() => null),
            fetch('https://api.coingecko.com/api/v3/simple/price?ids=monero,the-open-network&vs_currencies=usd').catch(() => null)
        ])

        const rates = {}

        if (binanceRes?.ok) {
            const data = await binanceRes.json()
            data.forEach(t => {
                if (t.symbol.endsWith('USDT')) {
                    rates[t.symbol.replace('USDT', '')] = parseFloat(t.price)
                }
            })
        }

        if (geckoRes?.ok) {
            try {
                const g = await geckoRes.json()
                if (g.monero?.usd) rates.XMR = g.monero.usd
                if (g['the-open-network']?.usd) rates.TON = g['the-open-network'].usd
            } catch { /* ignore */ }
        }

        // Fallbacks
        if (!rates.BTC) rates.BTC = 65000
        if (!rates.XMR) rates.XMR = 165
        if (!rates.USDT) rates.USDT = 1
        if (!rates.USDC) rates.USDC = 1

        return COINS.map(c => {
            let rate = rates[c.symbol] || 0
            if ((c.symbol === 'USDT' || c.symbol === 'USDC') && rate === 0) rate = 1
            return { ...c, rateToUSD: rate }
        })
    } catch (err) {
        console.error('Price fetch error:', err)
        return COINS.map(c => ({ ...c, rateToUSD: 0 }))
    }
}
