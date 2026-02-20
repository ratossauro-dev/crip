// Client-side HMAC verification
// The secret is NOT needed client-side — we just verify the format
// This is an additional integrity check

const hmacUtils = {
    verifyHmac(address, coin, network, hmac) {
        // Basic format validation — the real crypto verification happens server-side
        // Client just checks that HMAC exists and is a valid hex string
        if (!hmac || typeof hmac !== 'string') return false
        if (hmac.length !== 64) return false // SHA-256 = 64 hex chars
        if (!/^[a-f0-9]+$/.test(hmac)) return false
        if (!address || address.length < 10) return false
        return true
    }
}

export default hmacUtils
