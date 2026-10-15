/* ============================================================
   MUSIC.JS
   Renders Spotify & Apple Music cards and iFrame embeds.
   Paste your URLs into content.js to activate.
   ============================================================ */

(function () {
  const { music } = window.BEVO;

  // --- Spotify SVG icon ---
  const spotifyIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="rgba(200,180,140,0.4)" stroke-width="0.5"/>
      <path d="M7 15.5 C9.5 14 13.5 13.8 16 15" stroke="rgba(200,180,140,0.7)" stroke-width="1" stroke-linecap="round"/>
      <path d="M6.5 12.5 C9.5 10.5 14.5 10.2 17.5 12" stroke="rgba(200,180,140,0.5)" stroke-width="1" stroke-linecap="round"/>
      <path d="M6 9.5 C9.5 7 15 6.8 18.5 9" stroke="rgba(200,180,140,0.35)" stroke-width="1" stroke-linecap="round"/>
    </svg>
  `;

  // --- Apple Music SVG icon ---
  const appleIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="rgba(200,180,140,0.4)" stroke-width="0.5" fill="none"/>
      <path d="M15 8H10V15.5" stroke="rgba(200,180,140,0.6)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 8H15V12H10" stroke="rgba(200,180,140,0.6)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="9" cy="15.5" r="1.5" stroke="rgba(200,180,140,0.6)" stroke-width="0.8" fill="none"/>
    </svg>
  `;

  function renderCard(platform, icon, title, subtext, url) {
    const el = document.createElement('a');
    el.className = 'music-card';
    el.href = url || '#';
    if (url && url !== '#') {
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    }
    el.innerHTML = `
      <div class="music-icon">${icon}</div>
      <div class="music-meta">
        <div class="music-platform">${platform}</div>
        <div class="music-title">${title || 'Coming soon'}</div>
        <div class="music-sub">${subtext}</div>
      </div>
    `;
    return el;
  }

  function renderEmbed(embedUrl, title) {
    if (!embedUrl || embedUrl.includes('YOUR_ID')) return null;
    const wrapper = document.createElement('div');
    wrapper.className = 'music-embed-wrapper';
    wrapper.innerHTML = `
      <iframe
        src="${embedUrl}"
        height="152"
        frameborder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="${title} embed"
      ></iframe>
    `;
    return wrapper;
  }

  function render(containerId, embedContainerId, limit) {
    const cards = document.getElementById(containerId);
    if (!cards) return;

    const spotifyCard = renderCard(
      'Spotify',
      spotifyIcon,
      music.spotify.albumTitle,
      'Streaming now',
      music.spotify.artistUrl
    );

    const appleCard = renderCard(
      'Apple Music',
      appleIcon,
      music.appleMusic.albumTitle,
      'Available on Apple Music',
      music.appleMusic.artistUrl
    );

    cards.appendChild(spotifyCard);
    cards.appendChild(appleCard);

    // Embeds (full music page only)
    const embedContainer = document.getElementById(embedContainerId);
    if (embedContainer) {
      const spotifyEmbed = renderEmbed(music.spotify.embedUrl, 'Spotify');
      const appleEmbed   = renderEmbed(music.appleMusic.embedUrl, 'Apple Music');
      if (spotifyEmbed) embedContainer.appendChild(spotifyEmbed);
      if (appleEmbed)   embedContainer.appendChild(appleEmbed);

      if (!spotifyEmbed && !appleEmbed) {
        embedContainer.innerHTML = `
          <div class="music-embed-wrapper">
            <p style="font-family:var(--font-display);font-style:italic;color:var(--color-text-faint);font-size:0.9rem;">
              Spotify &amp; Apple Music embeds will appear here once your artist URLs are added to content.js
            </p>
          </div>
        `;
      }
    }
  }

  render('music-preview-cards', null);
  render('music-full-cards', 'music-embeds');
})();
