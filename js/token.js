/* ─── Token ──────────────────────────────────────────────────────────────── */

const BSCSCAN_API_KEY = 'YOUR_BSCSCAN_API_KEY';

async function fetchLiveStats(contractAddress) {
  if (!contractAddress || contractAddress.startsWith('REPLACE')) return null;
  try {
    const res = await fetch(
      `https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${BSCSCAN_API_KEY}`
    );
    const data = await res.json();
    return data.status === '1' ? data : null;
  } catch {
    return null;
  }
}

(async function () {
  const container = document.getElementById('token-block');
  if (!container || !window.BEVO) return;

  const t = BEVO.token;
  const s = t.stats;

  container.innerHTML = `
    <div class="token-block">
      <p class="section-label">On-Chain</p>
      <h2 class="section-title">${t.name}</h2>
      <div class="section-rule"></div>

      <div class="token-stats">
        <div class="token-stat">
          <div class="token-stat-value">${s.holders}</div>
          <div class="token-stat-label">Holders</div>
        </div>
        <div class="token-stat">
          <div class="token-stat-value">${t.totalSupply.split(',')[0]}B</div>
          <div class="token-stat-label">Total Supply</div>
        </div>
        <div class="token-stat">
          <div class="token-stat-value">${s.burned}</div>
          <div class="token-stat-label">Burned on Launch</div>
        </div>
        <div class="token-stat">
          <div class="token-stat-value">${t.tax.total}</div>
          <div class="token-stat-label">Transaction Tax</div>
        </div>
      </div>

      <p style="font-size:var(--text-sm);color:var(--color-text-mid);margin-bottom:var(--space-4);">
        ${t.chain} · ${t.standard} · Liquidity locked 5 years
      </p>

      <div class="token-address">
        <span style="color:var(--color-text-faint);flex-shrink:0;">CA</span>
        <span id="contract-addr">${t.contractAddress}</span>
        <button onclick="navigator.clipboard.writeText('${t.contractAddress}')" style="margin-left:auto;color:var(--color-gold-dim);font-family:var(--font-mono);font-size:var(--text-xs);letter-spacing:0.1em;" aria-label="Copy address">COPY</button>
      </div>

      <div style="margin-top:var(--space-8);display:flex;gap:var(--space-4);flex-wrap:wrap;">
        <a href="${t.bscscanUrl}" target="_blank" rel="noopener" class="btn btn-gold">View on BscScan</a>
        <a href="https://pancakeswap.finance/swap?outputCurrency=${t.contractAddress}" target="_blank" rel="noopener" class="btn btn-ghost">Buy on PancakeSwap</a>
      </div>
    </div>
  `;
})();
