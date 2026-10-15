/* ─── Featured Artists spotlight ──────────────────────────────────────────
   Renders BEVO.featured from content.js as a swipeable row of slides.
   Swipe on touch screens, scroll sideways on trackpads, or use the arrows,
   the artist names, or the left/right keys. It never moves on its own,
   so nobody gets cut off mid-song.
──────────────────────────────────────────────────────────────────────── */

(function () {
  const track = document.getElementById('spot-track');
  if (!track || !window.BEVO || !BEVO.featured || !BEVO.featured.length) return;

  const artists  = BEVO.featured;
  const prevBtn  = document.getElementById('spot-prev');
  const nextBtn  = document.getElementById('spot-next');
  const countEl  = document.getElementById('spot-count');
  const namesEl  = document.getElementById('spot-names');
  const controls = document.getElementById('spot-controls');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pad = n => String(n).padStart(2, '0');
  const LABEL = { music: 'Music', art: 'Art', writing: 'Writing' };

  // ── Work boxes ────────────────────────────────────────────────────────
  function workBox(w, artist) {
    const label = `<p class="work-label">${LABEL[w.type] || w.type}</p>`;

    if (w.type === 'music') {
      const links = [
        w.appleUrl  && `<a href="${w.appleUrl}" target="_blank" rel="noopener">Apple Music</a>`,
        w.listenUrl && `<a href="${w.listenUrl}" target="_blank" rel="noopener">Listen</a>`,
      ].filter(Boolean).join('');

      if (w.spotifyEmbed) {
        return `
          <div class="work-box work-music">
            ${label}
            <div class="work-head">
              <h4 class="work-title">${w.title}</h4>
              ${w.meta ? `<span class="work-meta">${w.meta}</span>` : ''}
            </div>
            <iframe class="work-player" src="${w.spotifyEmbed}" height="152" loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="${w.title} by ${artist.name} on Spotify"></iframe>
            ${links ? `<div class="work-links">${links}</div>` : ''}
          </div>`;
      }
      return `
        <div class="work-box work-music">
          ${label}
          <div class="work-track">
            ${w.cover ? `<img class="work-cover" src="${w.cover}" alt="" loading="lazy">` : '<div class="work-cover"></div>'}
            <div>
              <h4 class="work-title">${w.title}</h4>
              ${w.meta ? `<span class="work-meta">${w.meta}</span>` : ''}
            </div>
          </div>
          ${links ? `<div class="work-links">${links}</div>` : ''}
        </div>`;
    }

    if (w.type === 'art') {
      return `
        <figure class="work-box work-art">
          ${label}
          <div class="work-image"><img src="${w.src}" alt="${w.title}" loading="lazy"></div>
          <figcaption>
            <h4 class="work-title">${w.title}</h4>
            ${w.caption ? `<p class="work-caption">${w.caption}</p>` : ''}
          </figcaption>
        </figure>`;
    }

    if (w.type === 'writing') {
      return `
        <div class="work-box work-writing">
          ${label}
          <h4 class="work-title">${w.title}</h4>
          <blockquote class="work-excerpt">${w.excerpt}</blockquote>
          ${w.link ? `<div class="work-links"><a href="${w.link}" target="_blank" rel="noopener">Read</a></div>` : ''}
        </div>`;
    }
    return '';
  }

  // ── Slides ────────────────────────────────────────────────────────────
  track.innerHTML = artists.map((a, i) => `
    <article class="spot-slide" id="spot-${a.id}" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${artists.length}: ${a.name}">
      <div class="spot-id">
        <img class="spot-avatar" src="${a.avatar}" alt="" loading="${i === 0 ? 'eager' : 'lazy'}">
        ${a.sample ? '<span class="spot-sample">Sample</span>' : ''}
        <h3 class="spot-name">${a.name}</h3>
        <p class="spot-mediums">${a.mediums.join(', ')}</p>
        <p class="spot-bio">${a.bio}</p>
        ${a.links && a.links.length ? `
          <div class="spot-links">
            ${a.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
          </div>` : ''}
      </div>
      <div class="spot-works spot-works-${Math.min(a.works.length, 3)}">
        ${a.works.map(w => workBox(w, a)).join('')}
      </div>
    </article>`).join('');

  const slides = [...track.querySelectorAll('.spot-slide')];

  // ── Navigation ────────────────────────────────────────────────────────
  if (namesEl && slides.length > 1) {
    namesEl.innerHTML = artists.map((a, i) =>
      `<button type="button" class="spot-name-btn" data-i="${i}">${a.name}</button>`).join('');
    namesEl.querySelectorAll('button').forEach(b =>
      b.addEventListener('click', () => go(+b.dataset.i)));
  }

  if (slides.length < 2 && controls) controls.hidden = true;

  let current = 0;

  // Size the track to the slide in view, so short slides don't leave a gap
  function fitHeight() {
    track.style.height = slides[current].offsetHeight + 'px';
  }

  function go(i) {
    const n = Math.max(0, Math.min(slides.length - 1, i));
    track.scrollTo({ left: slides[n].offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function update() {
    // whichever slide's left edge is closest to the track's scroll position
    let best = 0, dist = Infinity;
    slides.forEach((s, i) => {
      const d = Math.abs(s.offsetLeft - track.scrollLeft);
      if (d < dist) { dist = d; best = i; }
    });
    current = best;
    fitHeight();

    if (countEl) countEl.textContent = `${pad(current + 1)} / ${pad(slides.length)}`;
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === slides.length - 1;
    if (namesEl) namesEl.querySelectorAll('button').forEach((b, i) => {
      b.classList.toggle('is-active', i === current);
      b.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
  }

  let raf = 0;
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(update);
  }, { passive: true });

  prevBtn && prevBtn.addEventListener('click', () => go(current - 1));
  nextBtn && nextBtn.addEventListener('click', () => go(current + 1));

  track.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(current + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(current - 1); }
  });

  window.addEventListener('resize', () => { fitHeight(); go(current); });
  window.addEventListener('load', fitHeight);
  update();
})();