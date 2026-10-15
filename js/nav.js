/* ============================================================
   NAV.JS
   Mobile hamburger toggle + active link detection.
   ============================================================ */

(function () {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });

    // Close menu when a link is clicked (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Highlight the active nav link based on current page
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && currentPath.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
})();
