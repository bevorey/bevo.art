/* ============================================================
   GALLERY.JS
   Renders gallery grids from BEVO.gallery content data.
   Works on both homepage preview and full gallery page.
   ============================================================ */

(function () {
  const { gallery } = window.BEVO;

  // --- Render a single gallery item ---
  function renderItem(item) {
    const el = document.createElement('div');
    el.className = 'gallery-item';
    el.setAttribute('data-id', item.id);

    // Try to load the real image; fall back to SVG placeholder
    el.innerHTML = `
      <img
        src="${item.src}"
        alt="${item.title} — from the poem ${item.poem}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
      />
      <div class="gallery-placeholder" style="display:none;">
        ${placeholderSVG(item.placeholder)}
      </div>
      <div class="gallery-caption">${item.title} — from the poem "${item.poem}"</div>
    `;

    return el;
  }

  // --- Minimal SVG placeholders (used before art is uploaded) ---
  function placeholderSVG(type) {
    const colors = {
      orbit:       ['rgba(200,150,80,0.15)',  'rgba(200,160,90,0.3)'],
      fracture:    ['rgba(140,100,180,0.15)', 'rgba(140,100,180,0.3)'],
      'still-water':['rgba(60,140,100,0.15)', 'rgba(60,160,110,0.3)'],
      ascent:      ['rgba(200,100,60,0.12)',  'rgba(200,120,70,0.3)'],
      concentric:  ['rgba(80,80,200,0.1)',    'rgba(100,100,200,0.3)'],
    };
    const [fill, stroke] = colors[type] || ['rgba(200,180,140,0.1)', 'rgba(200,180,140,0.2)'];

    return `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
        <rect width="200" height="200" fill="var(--color-bg-elevated)"/>
        <circle cx="100" cy="100" r="55" fill="none" stroke="${stroke}" stroke-width="0.5"/>
        <circle cx="100" cy="100" r="30" fill="${fill}" stroke="${stroke}" stroke-width="0.5"/>
        <circle cx="100" cy="100" r="6" fill="${stroke}"/>
      </svg>
    `;
  }

  // --- Render homepage preview (first 5 + "View all" tile) ---
  function renderPreview() {
    const grid = document.getElementById('gallery-preview-grid');
    if (!grid) return;

    const preview = gallery.slice(0, 5);
    preview.forEach(item => grid.appendChild(renderItem(item)));

    // "View all" tile
    const more = document.createElement('div');
    more.className = 'gallery-item';
    more.style.cssText = 'display:flex;align-items:center;justify-content:center;background:var(--color-bg-surface);cursor:pointer;';
    more.innerHTML = `
      <div style="text-align:center;">
        <div style="font-family:var(--font-mono);font-size:var(--text-xs);letter-spacing:var(--tracking-wide);color:var(--color-gold-muted);text-transform:uppercase;margin-bottom:0.5rem;">More works</div>
        <div style="font-family:var(--font-display);font-size:1.4rem;font-style:italic;color:var(--color-gold-muted);">View all →</div>
      </div>
    `;
    more.addEventListener('click', () => { window.location.href = 'pages/gallery.html'; });
    grid.appendChild(more);
  }

  // --- Render full gallery page ---
  function renderFull() {
    const grid = document.getElementById('gallery-full-grid');
    if (!grid) return;
    gallery.forEach(item => grid.appendChild(renderItem(item)));
  }

  renderPreview();
  renderFull();
})();
