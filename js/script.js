// Main JavaScript for Crypto Wallet
let isBalanceHidden = false;
let currentTheme = 'dark';

const tokens = [
    { symbol: 'ETH', name: 'Ethereum', balance: '4.872', usd: '12458.32', color: '#627EEA' },
    { symbol: 'BTC', name: 'Bitcoin', balance: '0.184', usd: '11240', color: '#F7931A' },
    { symbol: 'USDT', name: 'Tether', balance: '2450.00', usd: '2450', color: '#26A17B' }
];

function renderTokens() {
    const grid = document.getElementById('tokensGrid');
    if (!grid) return;
    grid.innerHTML = tokens.map(t => `
        <div class="token-card">
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <div style="display:flex;align-items:center;gap:14px;">
                    <div style="width:48px;height:48px;border-radius:50%;background:${t.color};"></div>
                    <div>
                        <div style="font-weight:700;font-size:1.1rem;">${t.symbol}</div>
                        <div style="color:var(--text-light);">${t.name}</div>
                    </div>
                </div>
                <div style="text-align:right;">
                    <div style="font-weight:700;">$${t.usd}</div>
                    <div>${t.balance} ${t.symbol}</div>
                </div>
            </div>
        </div>
    `).join('');
}

function showSection(sec) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(sec + '-section');
    if (target) target.classList.add('active');
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function toggleHideBalance() {
    isBalanceHidden = !isBalanceHidden;
    const el = document.getElementById('balanceAmount');
    el.textContent = isBalanceHidden ? '•••••••' : '$12,458.32';
}

function copyAddress() {
    navigator.clipboard.writeText(document.getElementById('walletAddr').textContent);
    alert('✅ Wallet address copied!');
}

function sendCrypto() {
    const amt = document.getElementById('sendAmount').value;
    if (amt > 0) alert(`✅ Sent ${amt} successfully! (Demo mode)`);
    else alert('Please enter amount');
}

function performSwap() {
    alert('✅ Swap completed! (Demo)');
}

function copyReceiveAddress() {
    copyAddress();
}

// Init
window.onload = function() {
    renderTokens();
    showSection('home');
};