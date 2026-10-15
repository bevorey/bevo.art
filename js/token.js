/* ─── Token section ───────────────────────────────────────────────────────
   Renders from BEVO.token in content.js (figures match whitepaper v2.3).
   Until contractAddress is filled in, the section says "pending deployment"
   and shows no buy buttons. Paste the address at launch and the BscScan
   and PancakeSwap buttons appear on their own.
──────────────────────────────────────────────────────────────────────── */

(function () {
  const el = document.getElementById('token-block');
  if (!el || !window.BEVO || !BEVO.token) return;

  const t = BEVO.token;
  const wp = BEVO.site && BEVO.site.whitepaper;
  const tg = BEVO.social && BEVO.social.telegram;
  const ca = (t.contractAddress || '').trim();

  const actions = ca
    ? `<a href="https://pancakeswap.finance/swap?outputCurrency=${ca}&chain=bsc" target="_blank" rel="noopener" class="btn btn-gold">Buy on PancakeSwap</a>
       <a href="https://bscscan.com/token/${ca}" target="_blank" rel="noopener" class="btn btn-ghost">View on BscScan</a>`
    : `${wp ? `<a href="${wp}" target="_blank" rel="noopener" class="btn btn-gold">Read the whitepaper</a>` : ''}
       ${tg ? `<a href="${tg}" target="_blank" rel="noopener" class="btn btn-ghost">Join Telegram</a>` : ''}`;

  el.innerHTML = `
    <div class="section-header">
      <p class="section-label">The engine underneath</p>
      <h2 class="section-title">${t.symbol}</h2>
      <div class="section-rule"></div>
      <p class="token-lead">A fixed-supply, zero-tax ${t.standard} token on ${t.chain}, traded on ${t.dex}.</p>
      <p class="token-motto">Clean by design. Deflationary by discipline.</p>
    </div>

    <div class="token-stats">
      ${t.stats.map(s => `
        <div class="token-stat">
          <div class="token-stat-value">${s.value}</div>
          <div class="token-stat-label">${s.label}</div>
        </div>`).join('')}
    </div>

    <div class="token-grid">
      <div>
        <h3 class="token-subhead">Distribution</h3>
        <table class="dist-table">
          <thead>
            <tr><th>Allocation</th><th class="num">Tokens</th><th class="num">Share</th><th class="purpose">Purpose</th></tr>
          </thead>
          <tbody>
            ${t.distribution.map(d => `
              <tr>
                <td>${d.label}</td>
                <td class="num">${d.tokens}</td>
                <td class="num">${d.pct}</td>
                <td class="purpose">${d.purpose}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>

      <div class="token-side">
        <div class="token-note">
          <h3>For V1 holders</h3>
          <p>${t.v1Note}</p>
        </div>

        <div class="token-contract">
          <span>Contract</span>
          <span id="token-ca">${ca || 'Pending deployment'}</span>
          ${ca ? `<button type="button" class="token-copy" id="token-copy">Copy</button>` : ''}
        </div>

        <div class="token-actions">${actions}</div>
      </div>
    </div>

    <div class="roadmap">
      ${t.roadmap.map(r => `
        <div class="roadmap-phase">
          <h3>${r.phase}</h3>
          <ul>${r.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>`;

  const copy = document.getElementById('token-copy');
  if (copy) {
    copy.addEventListener('click', () => {
      navigator.clipboard.writeText(ca).then(() => {
        copy.textContent = 'Copied';
        setTimeout(() => (copy.textContent = 'Copy'), 2000);
      });
    });
  }
})();
