# bevo.art — Project Structure

## Quick start

1. Drag the entire folder into [Netlify Drop](https://app.netlify.com/drop) to deploy instantly.
2. Connect your custom domain `bevo.art` in Netlify → Site settings → Domain management.

---

## File structure

```
bevo-art/
├── index.html              ← Homepage
├── netlify.toml            ← Netlify config (redirects, headers, cache)
│
├── pages/
│   ├── gallery.html
│   ├── poetry.html
│   ├── music.html
│   ├── books.html
│   ├── token.html
│   └── about.html
│
├── css/
│   ├── reset.css           ← Browser normalisation
│   ├── tokens.css          ← ALL colours, fonts, spacing ← edit here first
│   ├── layout.css          ← Nav, hero, sections, footer, responsive
│   ├── components.css      ← Buttons, tags, badges, empty states
│   └── sections.css        ← Gallery, poetry, music, books, token, about grids
│
├── js/
│   ├── content.js          ← YOUR CONTENT — edit this to update the whole site
│   ├── nav.js              ← Mobile hamburger + active link
│   ├── gallery.js          ← Renders art grid
│   ├── poetry.js           ← Renders poem cards
│   ├── music.js            ← Renders music cards + Spotify/Apple embeds
│   ├── books.js            ← Renders book cards
│   ├── token.js            ← Renders token stats + optional BSCScan live data
│   └── main.js             ← About bio, tags, scroll reveal
│
└── assets/
    ├── images/
    │   └── portrait.jpg    ← Your photo (replace this)
    └── art/
        ├── g01.jpg         ← Gallery pieces (named g01–gNN)
        ├── g02.jpg
        └── ...
```

---

## How to update content

**Everything lives in `js/content.js`.**

### Add artwork
```js
gallery: [
  {
    id: 'g06',
    title: 'My New Piece',
    poem: 'Name of the poem it came from',
    src: '../assets/art/g06.jpg',
  },
]
```
Drop the image in `assets/art/` and add an entry. Done.

### Add a poem
```js
poetry: [
  {
    id: 'p03',
    title: 'New Poem Title',
    excerpt: [
      'Line one of the poem,',
      'line two,',
      'line three.',
    ],
    full: [], // optional — add all lines here for the full poem page
  },
]
```

### Connect your music
```js
music: {
  spotify: {
    artistUrl: 'https://open.spotify.com/artist/YOURID',
    embedUrl:  'https://open.spotify.com/embed/artist/YOURID',
    albumTitle: 'Your Album Name',
  },
  appleMusic: {
    artistUrl: 'https://music.apple.com/us/artist/YOURID',
    embedUrl:  'https://embed.music.apple.com/us/artist/YOURID',
    albumTitle: 'Your Album Name',
  },
}
```

### Add BEVO token contract
```js
token: {
  contractAddress: '0xYOURCONTRACTADDRESS',
  pancakeswapUrl:  'https://pancakeswap.finance/swap?outputCurrency=0xYOURCONTRACTADDRESS',
}
```
The BSCScan link and "How to buy" section auto-populate.

### Enable live BSCScan data
In `js/token.js`, set:
```js
const BSCSCAN_API_KEY = 'YOUR_FREE_API_KEY';
```
Get a free key at https://bscscan.com/apis

---

## Customising the look

Edit `css/tokens.css` to change colours, fonts, or spacing globally.
The main accent colour is `--color-gold: #c8b48c` — change this one value to re-theme the entire site.

---

## Deploying to Netlify

### Option A — Drag & drop (easiest)
Go to https://app.netlify.com/drop and drag the `bevo-art` folder.

### Option B — Git (recommended for ongoing updates)
1. Push this folder to a GitHub repo
2. Connect the repo in Netlify
3. Every push auto-deploys

---

## Pretty URLs (via netlify.toml)

After deploying, your pages are accessible at:
- `bevo.art/gallery`
- `bevo.art/poetry`
- `bevo.art/music`
- `bevo.art/books`
- `bevo.art/token`
- `bevo.art/about`
