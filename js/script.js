// Modern Mobile Wallet JavaScript
const tokens = [
    {
        symbol: 'ETH',
        name: 'Ethereum',
        amount: '0.01923 ETH',
        value: '$37.42',
        change: '+2.18',
        icon: '⟠'
    },
    {
        symbol: 'USDC',
        name: 'USD Coin',
        amount: '4.8732 USDC',
        value: '$4.87',
        change: '-0.09',
        icon: '$'
    },
    {
        symbol: 'SOL',
        name: 'Solana',
        amount: '0.3284 SOL',
        value: '$6.13',
        change: '+0.45',
        icon: '◎'
    }
];

function renderTokens() {
    const container = document.getElementById('tokensList');
    if (!container) return;

    container.innerHTML = tokens.map(token => `
        <div class="token-item">
            <div class="token-left">
                <div class="token-icon" style="background: linear-gradient(45deg, #6366f1, #a855f7); color: white;">
                    ${token.icon}
                </div>
                <div>
                    <div style="font-weight: 600;">${token.symbol}</div>
                    <div style="font-size: 13px; opacity: 0.7;">${token.amount}</div>
                </div>
            </div>
            <div style="text-align: right;">
                <div style="font-weight: 600;">${token.value}</div>
                <div style="font-size: 13px; color: ${token.change.includes('+') ? '#22c55e' : '#ef4444'};">
                    ${token.change}
                </div>
            </div>
        </div>
    `).join('');
}

function showFeature(type) {
    let msg = '';
    switch(type) {
        case 'send':
            msg = 'Transfer feature - Enter amount and address';
            break;
        case 'swap':
            msg = 'Exchange feature activated!';
            break;
        case 'buy':
            msg = 'Purchase crypto coming soon!';
            break;
        default:
            msg = 'Feature activated (Demo)';
    }
    alert(msg);
}

function switchTab(n) {
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.classList.toggle('active', index === n);
    });
}

// Initialize
window.onload = function() {
    renderTokens();

    // Hide balance functionality
    const balanceEl = document.getElementById('balanceAmount');
    let hidden = false;
    balanceEl.addEventListener('click', () => {
        hidden = !hidden;
        balanceEl.textContent = hidden ? '••••••' : '$58.75';
    });
};