/* ============================================================
   POETRY.JS
   Renders poem cards from BEVO.poetry content data.
   ============================================================ */

(function () {
  const { poetry } = window.BEVO;

  function renderCard(poem) {
    const el = document.createElement('div');
    el.className = 'poem-card';
    el.innerHTML = `
      <p class="poem-text">${poem.excerpt.join('<br>')}</p>
      <div class="poem-title">— From "${poem.title}"</div>
    `;
    return el;
  }

  // Homepage preview — first 2
  const previewGrid = document.getElementById('poetry-preview-grid');
  if (previewGrid) {
    poetry.slice(0, 2).forEach(p => previewGrid.appendChild(renderCard(p)));
  }

  // Full poetry page
  const fullGrid = document.getElementById('poetry-full-grid');
  if (fullGrid) {
    if (poetry.length === 0) {
      fullGrid.innerHTML = '<p class="empty-state">Poems coming soon.</p>';
    } else {
      poetry.forEach(p => fullGrid.appendChild(renderCard(p)));
    }
  }
})();
