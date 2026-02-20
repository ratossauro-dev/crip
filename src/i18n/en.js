const en = {
    nav: { home: 'Home', about: 'About', faq: 'FAQ', support: 'Support' },
    hero: {
        title_1: 'Lightning',
        title_2: 'Cryptocurrency',
        title_3: 'Exchange',
        subtitle: 'Swap cryptocurrencies at the best rates with no registration required. Fast, secure and fully automated.',
        stat_currencies: 'Currencies', stat_automatic: 'Automatic', stat_support: 'Support'
    },
    widget: {
        send: 'You Send', receive: 'You Receive',
        fixed_rate: 'Fixed Rate', float_rate: 'Float Rate',
        dest_addr: 'Destination Address', placeholder_addr: 'Enter your {coin} address',
        exchange_rate: 'Exchange Rate', network_fee: 'Network Fee', included: 'included',
        exchange_now: 'Exchange Now', enter_address: 'Enter wallet address',
        min_time: '~2-15 min', valid_addr_error: 'Address seems too short',
        ai_btn: 'AI Market Analysis', ai_analyzing: 'Analyzing...'
    },
    features: {
        title: 'Why choose', subtitle: 'A reliable exchange platform built for speed, privacy and the best possible rates.',
        f1_title: 'Bulletproof Security', f1_desc: 'Non-custodial service. We never store your private keys or funds. Every transaction is processed in real-time.',
        f2_title: 'Lowest Fees', f2_desc: 'Our fixed rate has only 1% fee, and the floating rate is just 0.5%. No hidden charges, ever.',
        f3_title: 'Lightning Speed', f3_desc: 'Most exchanges complete in under 15 minutes. Our automated system processes swaps 24/7 without delays.'
    },
    faq: {
        title: 'Frequently Asked Questions', subtitle: 'Got questions? We have answers.',
        q1_q: 'How do I make an exchange?', q1_a: 'Select the currencies, enter the amount and your destination wallet address, then click Exchange Now. You will receive a deposit address — send the exact amount shown and receive your coins.',
        q2_q: 'Why should I trust this platform?', q2_a: 'We are a non-custodial exchange. We never hold your funds. The swap process is fully automated — once the blockchain confirms your deposit, the exchange is processed instantly.',
        q3_q: 'Are there any hidden fees?', q3_a: 'No. The rate shown at the time of exchange includes all fees. You send exactly the amount of crypto shown and receive exactly the value requested.',
        q4_q: 'What is the minimum transaction amount?', q4_a: 'The minimum varies by cryptocurrency but is generally very low. Check the swap widget for exact minimums for each pair.',
        q5_q: 'How long does an exchange take?', q5_a: 'Most swaps complete in 2-15 minutes, depending on the cryptocurrency and blockchain congestion. Faster networks like Solana or TRON are nearly instant.',
        q6_q: 'Which cryptocurrencies are supported?', q6_a: 'We support 20+ cryptocurrencies including BTC, ETH, USDT, USDC, BNB, SOL, XMR, DOGE, TRX, MATIC, SHIB, TON, XLM and more across multiple networks.'
    },
    order: {
        sent: 'You Send', received: 'You Receive', order_id: 'Order ID', time_remaining: 'Time Remaining',
        order_type: 'Order Type', creation_time: 'Created At',
        send_instruction: 'Send exactly {amount} {coin} to the address below',
        copied: 'Copied!', attention: 'Important:', attention_desc: 'Send the exact amount displayed. Sending a different amount may cause delays.',
        receiving_wallet: 'Your {coin} Receiving Wallet', need_to_know: 'What you need to know',
        info_1: 'Your transaction requires {confirmations} blockchain confirmations on the {network} network before processing.',
        info_2: 'Send only {coin} to this address. Sending other tokens will result in permanent loss.',
        info_3: 'The exchange rate is locked for the duration of the countdown timer.',
        notifications: 'Email Notifications', email_desc: 'Get notified when your order status changes.',
        email_placeholder: 'your@email.com', confirm: 'Subscribe', email_success: 'You will be notified of status updates.',
        step_1: 'Awaiting Deposit', step_2: 'Confirming', step_3: 'Exchanging', step_4: 'Sending'
    },
    support: {
        title: 'Support Center', subtitle: 'Fill out the form below to report issues or ask questions.',
        label_name: 'Your Name', label_email: 'Your Email', label_phone: 'Phone', label_desc: 'Description', label_file: 'Attachment (Optional)',
        placeholder_name: 'John Doe', placeholder_email: 'john@example.com', placeholder_phone: '+1 555 000 0000',
        placeholder_desc: 'Describe your issue in detail...',
        upload_hint: 'Click to upload or drag file', submit: 'Submit Request', sending: 'Sending...',
        success_title: 'Message received!', success_desc: 'Our support team will review your request and get back to you soon.',
        send_another: 'Send Another Message'
    },
    about: {
        title: 'About Us',
        general_title: 'Who We Are', general_desc: 'We are a non-custodial cryptocurrency exchange platform dedicated to providing fast, secure, and private trading services. Our fully automated system processes thousands of transactions daily.',
        card_1_title: 'Our Mission', card_1_desc: 'To make cryptocurrency exchange accessible, fast and secure for everyone around the world.',
        card_2_title: 'Our Technology', card_2_desc: 'Built on cutting-edge infrastructure with real-time price feeds and multi-blockchain support.',
        values_title: 'Our Values',
        val_1_title: 'Privacy First', val_1_desc: 'No registration, no KYC for standard trades. Your privacy is our priority.',
        val_2_title: 'Speed & Reliability', val_2_desc: '24/7 automated processing ensures your trades execute without delays.'
    },
    legal: {
        title: 'Legal', subtitle: 'Legal documentation',
        terms: 'Terms of Service', privacy: 'Privacy Policy', risk: 'Risk Disclosure',
        terms_content: '<h4>1. Acceptance of Terms</h4><p>By using our services, you accept these terms. You must be at least 18 years old.</p><h4>2. Non-Custodial</h4><p>We do not store your funds or private keys. The exchange is fully automated.</p><h4>3. Limitation of Liability</h4><p>We are not liable for losses caused by blockchain network failures, incorrect addresses, or market volatility.</p>',
        privacy_content: '<h4>1. Data Collection</h4><p>We do not require registration. We collect minimal transaction data only for service delivery.</p><h4>2. Cookies</h4><p>We use cookies for language preferences only.</p><h4>3. Security</h4><p>We implement industry-standard security measures.</p>',
        risk_content: '<h4>1. Volatility</h4><p>Cryptocurrency values can fluctuate significantly.</p><h4>2. Irreversibility</h4><p>Blockchain transactions are generally irreversible. Ensure addresses are correct.</p><h4>3. Regulatory</h4><p>Regulatory changes may affect cryptocurrency use and value.</p>'
    },
    footer: {
        desc: 'Fast, secure and private cryptocurrency exchange. No registration required.',
        about_us: 'About Us', our_brand: 'Our Brand', support_center: 'Support Center',
        terms: 'Terms of Service', privacy: 'Privacy Policy', rights: 'All rights reserved.'
    },
    modal: { copy: 'Copy', scan_qr: 'Scan QR Code' }
}

export default en
