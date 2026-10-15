/* ============================================================
   MAIN.JS
   Page-level init. Runs after all other scripts have loaded.
   ============================================================ */

(function () {
  const { about } = window.BEVO;

  // --- Populate About bio ---
  const bioEl = document.getElementById('about-bio-text');
  if (bioEl && about.bio.length) {
    bioEl.innerHTML = about.bio.join('</p><p class="about-bio">');
  }

  // --- Populate About tags ---
  const tagsEl = document.getElementById('about-tags');
  if (tagsEl && about.tags.length) {
    tagsEl.innerHTML = about.tags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join('');
  }

  // --- Scroll reveal (lightweight, no library) ---
  const revealEls = document.querySelectorAll('.section, .token-block, .about-block');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    revealEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
})();
