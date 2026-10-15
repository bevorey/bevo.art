/* ─── BEVO Artist sign-up ─────────────────────────────────────────────────
   Sends the form to Netlify Forms without leaving the page.
   Entries appear in your Netlify dashboard under Forms → bevo-artists,
   where you can also turn on email notifications.
──────────────────────────────────────────────────────────────────────── */

(function () {
  const form = document.getElementById('artist-form');
  const msg  = document.getElementById('form-message');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending';
    msg.className = 'form-message';
    msg.textContent = '';

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(res.status);

      form.reset();
      msg.classList.add('is-success');
      msg.textContent = 'You’re on the list. We’ll be in touch when submissions open.';
      btn.textContent = 'Joined';
    } catch {
      msg.textContent = 'That didn’t send. Check your connection and try again.';
      btn.disabled = false;
      btn.textContent = 'Join the list';
    }
  });
})();
