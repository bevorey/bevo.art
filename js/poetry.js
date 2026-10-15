/* ─── Poetry ─────────────────────────────────────────────────────────────── */

(function () {
  const container = document.getElementById('poetry-list');
  if (!container || !window.BEVO) return;

  container.innerHTML = BEVO.poetry.map(poem => `
    <article class="poem-item">
      <div>
        <h3 class="poem-title">${poem.title}</h3>
        <p class="poem-excerpt">${poem.excerpt}</p>
      </div>
      <span class="poem-meta">${poem.year}</span>
    </article>
  `).join('');
})();
