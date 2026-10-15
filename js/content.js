/* ============================================================
   CONTENT.JS
   Edit this file to update ALL content across the site.
   This is your single source of truth — no need to touch HTML.
   ============================================================ */

const BEVO = {

  // --- Site meta ---
  site: {
    name: 'BEVO',
    domain: 'bevo.art',
    tagline: 'Where poems become worlds',
    description: 'AI-generated visuals born from original poetry. Music, books, stories, and NFTs on Binance Smart Chain.',
  },

  // --- About / Bio ---
  about: {
    name: 'BEVO',
    role: 'Poet · Visual Artist · Musician · Storyteller',
    bio: [
      'A creative mind working at the intersection of language and image. Using AI as a brush, original poems become visual worlds — strange, intimate, and uncompromising.',
      'Music released on Spotify and Apple Music. Short stories and books in progress. BEVO NFT Art Token is the digital extension of this practice — a way to collect, own, and inhabit the work.',
    ],
    tags: ['AI Art', 'Poetry', 'Music', 'Short Stories', 'NFT', 'BSC', 'bevo.art'],
    portrait: '../assets/images/portrait.jpg', // relative path from pages/
  },

  // --- Gallery ---
  // Add your artwork here. src = path to image file.
  gallery: [
    {
      id: 'g01',
      title: 'Untitled I',
      poem: 'Orbit',
      src: '../assets/art/g01.jpg',
      placeholder: 'orbit',
    },
    {
      id: 'g02',
      title: 'Untitled II',
      poem: 'Fracture',
      src: '../assets/art/g02.jpg',
      placeholder: 'fracture',
    },
    {
      id: 'g03',
      title: 'Untitled III',
      poem: 'Still Water',
      src: '../assets/art/g03.jpg',
      placeholder: 'still-water',
    },
    {
      id: 'g04',
      title: 'Untitled IV',
      poem: 'Ascent',
      src: '../assets/art/g04.jpg',
      placeholder: 'ascent',
    },
    {
      id: 'g05',
      title: 'Untitled V',
      poem: 'Concentric',
      src: '../assets/art/g05.jpg',
      placeholder: 'concentric',
    },
    // Add more: { id, title, poem, src }
  ],

  // --- Poetry ---
  poetry: [
    {
      id: 'p01',
      title: 'The Unsaid',
      excerpt: [
        'I have learned to speak',
        'in the language of absence—',
        'each silence a word',
        'I could not find before.',
      ],
      full: [], // add full poem lines here
    },
    {
      id: 'p02',
      title: 'After Hours',
      excerpt: [
        'The night arrives',
        'not as a thief',
        'but as a mirror',
        'showing what the day refused.',
      ],
      full: [],
    },
    // Add more poems: { id, title, excerpt: [], full: [] }
  ],

  // --- Music ---
  // Paste your Spotify & Apple Music artist/album URLs here.
  music: {
    spotify: {
      artistUrl: 'https://open.spotify.com/artist/YOUR_ID',
      // For embed: use the embed URL format
      embedUrl: 'https://open.spotify.com/embed/artist/YOUR_ID',
      albumTitle: 'Your Album Title',
    },
    appleMusic: {
      artistUrl: 'https://music.apple.com/us/artist/YOUR_ID',
      embedUrl: 'https://embed.music.apple.com/us/artist/YOUR_ID',
      albumTitle: 'Your Album Title',
    },
  },

  // --- Books & Stories ---
  books: [
    {
      id: 'b01',
      title: 'Title Coming Soon',
      type: 'Short Stories',
      desc: '',
      cover: '../assets/images/book-01.jpg',
      link: '#',
    },
    {
      id: 'b02',
      title: 'Title Coming Soon',
      type: 'Poetry Collection',
      desc: '',
      cover: '../assets/images/book-02.jpg',
      link: '#',
    },
    {
      id: 'b03',
      title: 'Title Coming Soon',
      type: 'Novel / Story',
      desc: '',
      cover: '../assets/images/book-03.jpg',
      link: '#',
    },
    // Add more: { id, title, type, desc, cover, link }
  ],

  // --- BEVO Token ---
  token: {
    symbol: 'BEVO',
    network: 'Binance Smart Chain',
    contractAddress: '', // paste your BSC contract address here
    bscscanUrl: '', // auto-built in token.js once address is set
    pancakeswapUrl: '', // add your PancakeSwap pool URL
    stats: [
      { label: 'Token Symbol', value: 'BEVO' },
      { label: 'Network',      value: 'BSC' },
      { label: 'Token Type',   value: 'NFT' },
      { label: 'Category',     value: 'Art' },
      // These get replaced by live data in token.js:
      // { label: 'Price',     value: '—' },
      // { label: 'Holders',   value: '—' },
    ],
  },

};

// Make available globally
window.BEVO = BEVO;
