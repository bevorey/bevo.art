/* ============================================================
   BOOKS.JS
   Renders book and story cards from BEVO.books content data.
   ============================================================ */

(function () {
  const { books } = window.BEVO;

  function renderCard(book) {
    const el = document.createElement(book.link && book.link !== '#' ? 'a' : 'div');
    el.className = 'book-card';
    if (book.link && book.link !== '#') {
      el.href = book.link;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    }

    el.innerHTML = `
      <div class="book-cover">
        <img
          src="${book.cover}"
          alt="Cover for ${book.title}"
          onerror="this.style.display='none'"
        />
      </div>
      <div class="book-info">
        <div class="book-type">${book.type}</div>
        <div class="book-title">${book.title}</div>
        ${book.desc ? `<div class="book-desc">${book.desc}</div>` : ''}
      </div>
    `;
    return el;
  }

  const previewGrid = document.getElementById('books-preview-grid');
  if (previewGrid) {
    books.slice(0, 3).forEach(b => previewGrid.appendChild(renderCard(b)));
  }

  const fullGrid = document.getElementById('books-full-grid');
  if (fullGrid) {
    if (books.length === 0) {
      fullGrid.innerHTML = '<p class="empty-state">Books &amp; stories coming soon.</p>';
    } else {
      books.forEach(b => fullGrid.appendChild(renderCard(b)));
    }
  }
})();
