/* ─── Page sections ───────────────────────────────────────────────────────
   Fills Open Stage, Gallery, Words, the message from Bevo and the footer
   from content.js. Edit content.js, not this file, to change what shows.
──────────────────────────────────────────────────────────────────────── */

(function () {
  if (!window.BEVO) return;
  const B = BEVO;
  const $ = id => document.getElementById(id);

  // ── Open Stage ────────────────────────────────────────────────────────
  if (B.openStage) {
    if ($('stage-intro-text')) {
      $('stage-intro-text').innerHTML = B.openStage.intro.map(p => `<p>${p}</p>`).join('');
    }
    if ($('stage-steps')) {
      $('stage-steps').innerHTML = B.openStage.steps.map(s => `
        <li class="stage-step">
          <div>
            <h3>${s.title}</h3>
            <p>${s.text}</p>
          </div>
        </li>`).join('');
    }
    if ($('stage-status')) $('stage-status').textContent = B.openStage.status;
  }

  // ── Gallery ───────────────────────────────────────────────────────────
  if ($('gallery-grid') && B.gallery) {
    $('gallery-grid').innerHTML = B.gallery.map(g => `
      <figure class="gallery-item">
        ${g.src
          ? `<div class="gallery-frame"><img src="${g.src}" alt="${g.title}" loading="lazy"></div>`
          : `<div class="gallery-frame is-empty">${g.title}</div>`}
        ${g.src ? `
        <figcaption class="gallery-caption">
          <p class="gallery-title">${g.title}</p>
          ${g.poem ? `<p class="gallery-poem">${g.poem}</p>` : ''}
        </figcaption>` : ''}
      </figure>`).join('');
  }

  // ── Words ─────────────────────────────────────────────────────────────
  if ($('poetry-list') && B.poetry) {
    $('poetry-list').innerHTML = B.poetry.map(p => `
      <article class="poem-item">
        <div>
          <h4 class="poem-title">${p.title}</h4>
          <p class="poem-excerpt">${p.excerpt}</p>
        </div>
        <span class="poem-meta">${p.year}</span>
      </article>`).join('');
  }

  if ($('books-list') && B.books) {
    $('books-list').innerHTML = B.books.map(b => `
      <article class="book-item">
        <p class="book-meta">${[b.genre, b.year].filter(Boolean).join(', ')}</p>
        <h4 class="book-title">${b.title}</h4>
        ${b.desc ? `<p class="book-desc">${b.desc}</p>` : ''}
        ${b.link ? `<a class="book-link" href="${b.link}" target="_blank" rel="noopener">Read</a>` : ''}
      </article>`).join('');
  }

  // ── A message from Bevo ───────────────────────────────────────────────
  if ($('message-body') && B.message) {
    const m = B.message;
    $('message-body').innerHTML = `
      <p class="section-label">A message from Bevo</p>
      <blockquote class="message-quote">“${m.quote}”</blockquote>
      ${m.paragraphs.map(p => `<p class="message-para">${p}</p>`).join('')}
      <p class="message-signoff">${m.signoff}</p>
      <p class="message-close">What is your art?<br><span>This is your art. BEVO.</span></p>`;
  }

  // ── Footer ────────────────────────────────────────────────────────────
  if ($('footer-links')) {
    const s = B.social || {};
    const links = [
      ['Spotify',     s.spotify],
      ['Apple Music', s.apple],
      ['Telegram',    s.telegram],
      ['Whitepaper',  B.site && B.site.whitepaper],
    ].filter(([, url]) => url);
    $('footer-links').innerHTML = links.map(([label, url]) =>
      `<a href="${url}" class="footer-link" target="_blank" rel="noopener">${label}</a>`).join('');
  }
  if ($('footer-year')) $('footer-year').textContent = `© ${new Date().getFullYear()} bevo.art`;
})();
