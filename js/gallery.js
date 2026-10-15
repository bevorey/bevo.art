/* ─── Gallery ────────────────────────────────────────────────────────────── */

(function () {
  const container = document.getElementById('gallery-grid');
  if (!container || !window.BEVO) return;

  const items = BEVO.gallery;

  container.innerHTML = items.map(item => `
    <article class="gallery-item card" data-id="${item.id}">
      ${item.src
        ? `<img class="gallery-item-img" src="${item.src}" alt="${item.title}" loading="lazy">`
        : `<div class="gallery-item-img" style="background:${item.placeholder};width:100%;height:100%;"></div>`
      }
      <div class="gallery-item-overlay">
        <span class="gallery-item-title">${item.title}</span>
      </div>
    </article>
  `).join('');
})();
