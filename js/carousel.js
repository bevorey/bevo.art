/* ─── Hero carousel ───────────────────────────────────────────────────────
   Slides come from BEVO.hero.slides in content.js.
   Images advance on a timer. Videos play once and advance when they end,
   or after `duration` ms if set (looping until then).
   Respects prefers-reduced-motion: starts paused, no autoplay.
──────────────────────────────────────────────────────────────────────── */

(function () {
  const stage    = document.getElementById('hero-carousel');
  const controls = document.getElementById('hero-controls');
  if (!stage || !window.BEVO || !BEVO.hero) return;

  const slides   = BEVO.hero.slides || [];
  const interval = BEVO.hero.interval || 7000;
  if (!slides.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = -1;
  let timer   = null;
  let paused  = reduceMotion;
  let bars = [], caption = null, pauseBtn = null;

  // ── Build slides ──────────────────────────────────────────────────────
  const items = slides.map((s, idx) => {
    const el = document.createElement('div');
    el.className = 'hero-slide';
    if (s.position)    el.style.setProperty('--pos', s.position);
    if (s.dim != null) el.style.setProperty('--dim', s.dim);

    const isVideo = s.type === 'video';
    let media;

    if (isVideo) {
      media = document.createElement('video');
      media.muted = true;
      media.playsInline = true;
      media.setAttribute('muted', '');
      media.setAttribute('playsinline', '');
      media.preload = 'none';
      media.loop = slides.length === 1 || !!s.duration;
      if (s.poster) media.poster = s.poster;

      media.addEventListener('ended', () => {
        if (idx === current && !paused) go(current + 1);
      });
      media.addEventListener('timeupdate', () => {
        if (idx !== current || s.duration || !media.duration || !bars[idx]) return;
        bars[idx].querySelector('.hero-dot-fill').style.transform =
          `scaleX(${media.currentTime / media.duration})`;
      });
    } else {
      media = document.createElement('img');
      media.alt = '';
      media.decoding = 'async';
    }

    media.className = 'hero-slide-media';
    media.dataset.src = s.src;
    el.appendChild(media);
    stage.appendChild(el);
    return { el, media, slide: s, isVideo };
  });

  // ── Controls ──────────────────────────────────────────────────────────
  if (controls && items.length > 1) {
    controls.innerHTML = `
      <button type="button" class="hero-pause"></button>
      <div class="hero-dots">
        ${items.map((it, i) => `
          <button type="button" class="hero-dot" aria-label="Show ${it.slide.title || 'slide ' + (i + 1)}">
            <span class="hero-dot-fill"></span>
          </button>`).join('')}
      </div>
      <p class="hero-caption"></p>`;

    pauseBtn = controls.querySelector('.hero-pause');
    caption  = controls.querySelector('.hero-caption');
    bars     = [...controls.querySelectorAll('.hero-dot')];

    bars.forEach((b, i) => b.addEventListener('click', () => go(i)));
    pauseBtn.addEventListener('click', () => setPaused(!paused));
  }

  // ── Core ──────────────────────────────────────────────────────────────
  function load(it) {
    if (it.media.dataset.src) {
      it.media.src = it.media.dataset.src;
      delete it.media.dataset.src;
    }
  }

  function go(n) {
    const next = ((n % items.length) + items.length) % items.length;
    if (next === current) return;

    const prev = items[current];
    current = next;
    const it = items[current];

    load(it);
    load(items[(current + 1) % items.length]); // warm up the next slide

    it.el.classList.add('is-active');
    if (prev) {
      prev.el.classList.remove('is-active');
      if (prev.isVideo) {
        setTimeout(() => { if (items[current] !== prev) prev.media.pause(); }, 1500);
      }
    }

    if (it.isVideo) {
      it.media.currentTime = 0;
      // If the browser blocks autoplay, fall back to a timer
      if (!paused) it.media.play().catch(() => advanceLater(interval));
    }

    render();
    schedule();
  }

  function advanceLater(ms) {
    clearTimeout(timer);
    timer = setTimeout(() => go(current + 1), ms);
  }

  function schedule() {
    clearTimeout(timer);
    if (paused || items.length < 2) return;
    const it = items[current];
    if (it.isVideo && !it.slide.duration) return; // 'ended' advances it
    advanceLater(it.slide.duration || interval);
  }

  function setPaused(p) {
    paused = p;
    const it = items[current];
    if (it.isVideo) p ? it.media.pause() : it.media.play().catch(() => {});
    render();
    if (!p) restartBar();
    schedule();
  }

  function restartBar() {
    const bar = bars[current];
    if (!bar || !bar.classList.contains('is-timed')) return;
    bar.classList.remove('is-timed');
    void bar.offsetWidth; // restart the CSS animation
    bar.classList.add('is-timed');
  }

  function render() {
    if (!bars.length) return;
    const it = items[current];

    bars.forEach((b, i) => {
      b.classList.toggle('is-active', i === current);
      b.setAttribute('aria-current', i === current ? 'true' : 'false');
      b.querySelector('.hero-dot-fill').style.transform = '';
    });

    const bar = bars[current];
    bar.classList.toggle('is-timed', !(it.isVideo && !it.slide.duration));
    bar.style.setProperty('--dur', (it.slide.duration || interval) + 'ms');

    caption.textContent = [it.slide.title, it.slide.meta].filter(Boolean).join(', ');
    pauseBtn.textContent = paused ? 'Play' : 'Pause';
    pauseBtn.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
    controls.classList.toggle('is-paused', paused);
  }

  // Stop everything while the tab is hidden
  document.addEventListener('visibilitychange', () => {
    const it = items[current];
    if (document.hidden) {
      clearTimeout(timer);
      if (it.isVideo) it.media.pause();
    } else if (!paused) {
      if (it.isVideo) it.media.play().catch(() => {});
      restartBar();
      schedule();
    }
  });

  go(0);
})();
