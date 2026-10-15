/* ============================================================
   TOKEN.JS
   Renders BEVO token stats.
   Optionally fetches live data from BSCScan API.

   To enable live data:
   1. Get a free API key from https://bscscan.com/apis
   2. Set BSCSCAN_API_KEY below
   3. Set your contract address in content.js → BEVO.token.contractAddress
   ============================================================ */

const BSCSCAN_API_KEY = ''; // <- paste your BSCScan API key here

(function () {
  const { token } = window.BEVO;

  // Build BSCScan URL from contract address
  if (token.contractAddress) {
    const bscscanEl = document.getElementById('bscscan-link');
    const url = `https://bscscan.com/token/${token.contractAddress}`;
    if (bscscanEl) bscscanEl.href = url;
  }

  // --- Render static stats from content.js ---
  function renderStats(stats) {
    const grid = document.getElementById('token-stats-grid');
    if (!grid) return;

    grid.innerHTML = '';
    stats.forEach(({ label, value }) => {
      const stat = document.createElement('div');
      stat.className = 'token-stat';
      stat.innerHTML = `
        <div class="token-stat-val">${value}</div>
        <div class="token-stat-label">${label}</div>
      `;
      grid.appendChild(stat);
    });
  }

  renderStats(token.stats);

  // --- Fetch live stats from BSCScan (optional) ---
  async function fetchLiveStats() {
    if (!token.contractAddress || !BSCSCAN_API_KEY) return;

    try {
      // Token supply
      const supplyRes = await fetch(
        `https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=${token.contractAddress}&apikey=${BSCSCAN_API_KEY}`
      );
      const supplyData = await supplyRes.json();

      // Token holder count
      const holdersRes = await fetch(
        `https://api.bscscan.com/api?module=token&action=tokenholderlist&contractaddress=${token.contractAddress}&page=1&offset=1&apikey=${BSCSCAN_API_KEY}`
      );

      const liveStats = [
        ...token.stats,
        {
          label: 'Total Supply',
          value: supplyData.result
            ? Number(supplyData.result).toLocaleString()
            : '—',
        },
      ];

      renderStats(liveStats);
    } catch (err) {
      console.warn('BSCScan fetch failed:', err);
      // Fall back to static stats — already rendered
    }
  }

  fetchLiveStats();
})();
