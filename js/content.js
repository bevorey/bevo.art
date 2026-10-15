/* ─── BEVO.ART — Single source of truth for all site content ──────────────── */

window.BEVO = {

  site: {
    name:        'BEVO',
    domain:      'bevo.art',
    description: 'BEVO is a launchpad for music, art and writing. It begins with the work of Bevo Rey and opens its stage to everyone.',
    whitepaper:  'docs/BEVO_Whitepaper_v2.3.pdf',
  },

  social: {
    spotify:  'https://open.spotify.com/artist/4mF9PGVr6woqdnAS30mKvW',
    apple:    'https://music.apple.com/us/artist/bevo-rey/6781925906',
    telegram: 'https://t.me/bevotoken',   // confirm this is the right group
    twitter:  'https://twitter.com/bevoart', // confirm this is the right handle
  },

  // ── Hero slideshow ────────────────────────────────────────────────────────
  hero: {
    interval: 7000,   // how long each image stays up, in ms
    slides: [
      // type: 'image' or 'video'
      // position: which part of the image stays in frame (CSS object-position)
      // dim: 0 = black, 1 = full brightness (default 0.5)
      { type: 'image', src: 'images/freeart.png',        title: 'Silence Is Not Free', position: 'center 40%' },
      { type: 'image', src: 'images/art-watercolor.jpg', title: 'Fractured',           position: 'center 35%', dim: 0.45 },
      { type: 'image', src: 'images/tribal-pattern.jpg', title: 'Tribal Memory',       dim: 0.3 },

      // Video: drop an .mp4 into /videos and uncomment.
      // It plays once, then moves on. Add duration: 12000 to cut a long clip short.
      // { type: 'video', src: 'videos/hero-loop.mp4', poster: 'images/freeart.png', title: 'Title' },
    ],
  },

  // ── Featured Artists (spotlight after the hero) ───────────────────────────
  // One entry per artist, shown in order. Each artist has up to three works,
  // shown side by side: type 'music', 'art' or 'writing'.
  //   music:   spotifyEmbed (optional player) or cover/links for a simple card
  //   art:     src (image), caption
  //   writing: excerpt, link
  // sample: true shows a "Sample" tag. Remove sample artists before launch.
  featured: [
    {
      id:      'bevo-rey',
      name:    'Bevo Rey',
      avatar:  'images/bevo-logo-silver.png',
      mediums: ['Music', 'Art', 'Writing'],
      bio:     'Musician, poet and digital artist, and the founder of BEVO. Every image and song starts as words.',
      links: [
        { label: 'Spotify',     url: 'https://open.spotify.com/artist/4mF9PGVr6woqdnAS30mKvW' },
        { label: 'Apple Music', url: 'https://music.apple.com/us/artist/bevo-rey/6781925906' },
      ],
      works: [
        {
          type:         'music',
          title:        '35',
          meta:         'Single, 2026',
          spotifyEmbed: 'https://open.spotify.com/embed/artist/4mF9PGVr6woqdnAS30mKvW?utm_source=generator&theme=0',
          appleUrl:     'https://music.apple.com/us/album/35-single/6782352168',
        },
        {
          type:    'art',
          title:   'Silence Is Not Free',
          src:     'images/freeart.png',
          caption: 'They covered the mouth and called it safety. The art remained.',
        },
        {
          type:    'writing',
          title:   'Stone and Light',   // PLACEHOLDER: swap in a real poem
          excerpt: 'Rise above the noise / arms wide as the horizon / stone holds the light.',
          link:    '',
        },
      ],
    },

    // ── Sample artists: placeholders to show the layout. Not real people. ──
    {
      id:      'sample-music',
      sample:  true,
      name:    'Kairo Wynter',
      avatar:  'images/tribal-pattern.jpg',
      mediums: ['Music', 'Video'],
      bio:     'Producer and singer working between dancehall rhythms and ambient sound.',
      links:   [],
      works: [
        { type: 'music', title: 'Low Tide', meta: 'Single, 2026', cover: 'images/tribal-pattern.jpg', listenUrl: '' },
        { type: 'writing', title: 'Low Tide (lyric)', excerpt: 'The water pulls back slow / like it knows I have to go.', link: '' },
      ],
    },
    {
      id:      'sample-art',
      sample:  true,
      name:    'Selah Moss',
      avatar:  'images/art-watercolor.jpg',
      mediums: ['Art'],
      bio:     'Watercolour and ink portraits, broken into planes and rebuilt.',
      links:   [],
      works: [
        { type: 'art', title: 'Fractured', src: 'images/art-watercolor.jpg', caption: 'Watercolour and ink on paper.' },
        { type: 'art', title: 'Classical Frequency', src: 'images/art-david.jpg', caption: 'Digital collage.' },
      ],
    },
    {
      id:      'sample-writing',
      sample:  true,
      name:    'Theo Vance',
      avatar:  'images/art-figure.png',
      mediums: ['Writing'],
      bio:     'Short fiction and prose poems about islands, faith and leaving home.',
      links:   [],
      works: [
        { type: 'writing', title: 'Salt Letters', excerpt: 'My mother wrote to the sea every Sunday. It never wrote back, but it kept the letters.', link: '' },
        { type: 'writing', title: 'Harbour Hymn', excerpt: 'We sang to the boats as if they could hear us, and some of them came home.', link: '' },
      ],
    },
  ],

  // ── Open Stage ────────────────────────────────────────────────────────────
  openStage: {
    intro: [
      'BEVO was never meant to stop with me. In 2021, artists from all over sent us their work, and that door opens again.',
      'Anyone can submit music, video, digital art and writing they’ve created. Featured works are put on display and promoted on BEVO, and songs can eventually be added to a BEVO album. BEVO holders help decide who is featured next.',
    ],
    steps: [
      { title: 'Submit your work',       text: 'Send a song, video, artwork or piece of writing you created.' },
      { title: 'Get featured',           text: 'Selected work is put on display and promoted on BEVO.' },
      { title: 'Holders vote',           text: '$BEVO holders help decide who is featured next.' },
      { title: 'Become a BEVO Artist',   text: 'Featured artists join the roster and the Featured Artists spotlight. Songs can land on a BEVO album.' },
    ],
    status: 'Submissions open in Phase 3 of the roadmap. Join the list and you’ll hear first.',
  },

  // ── Gallery ───────────────────────────────────────────────────────────────
  // Every image has a literary root: `poem` is the line it grew from.
  // PLACEHOLDER LINES: replace each `poem` with your own words.
  gallery: [
    {
      id:    'g1',
      title: 'Silence Is Not Free',
      poem:  'They covered the mouth and called it safety. The art remained.',
      src:   'images/freeart.png',
    },
    {
      id:    'g2',
      title: 'Fractured',
      poem:  'The face behind the frame knows which mirror lies.',
      src:   'images/art-watercolor.jpg',
    },
    {
      id:    'g3',
      title: 'Ascension',
      poem:  'Arms wide as the horizon. Stone holds the light.',
      src:   'images/art-figure.png',
    },
    {
      id:    'g4',
      title: 'Classical Frequency',
      poem:  'Even marble chews gum.',
      src:   'images/art-david.jpg',
    },
    {
      id:    'g5',
      title: 'Tribal Memory',
      poem:  'These lines were drawn before language.',
      src:   'images/tribal-pattern.jpg',
    },
    {
      id:    'g6',
      title: 'Next piece in progress',
      poem:  '',
      src:   '',
    },
  ],

  // ── Words: poetry & prose ─────────────────────────────────────────────────
  // PLACEHOLDERS: replace with your real poems and books.
  poetry: [
    { id: 'p1', title: 'Stone and Light',       year: '2024', excerpt: 'Rise above the noise / arms wide as the horizon' },
    { id: 'p2', title: 'Blue Truth',            year: '2024', excerpt: 'The face behind the frame / knows which mirror lies' },
    { id: 'p3', title: 'The Token and the Song',year: '2023', excerpt: 'They said art had no price. / We gave it a contract address.' },
    { id: 'p4', title: 'Caribbean Frequency',   year: '2023', excerpt: 'The island does not hurry. / It arrives exactly when it means to.' },
  ],

  books: [
    { id: 'b1', title: 'Title of first book', genre: 'Poetry collection', year: '2024', desc: 'One line on what the book is about.', link: '' },
    { id: 'b2', title: 'Title of short story', genre: 'Short fiction',   year: '2023', desc: 'One line on what the story is about.', link: '' },
  ],

  // ── Token (whitepaper v2.3) ───────────────────────────────────────────────
  token: {
    name:            'BEVO NFT ART TOKEN',
    symbol:          '$BEVO',
    chain:           'Binance Smart Chain',
    standard:        'BEP-20',
    dex:             'PancakeSwap V3',
    contractAddress: '',   // paste the address here at launch; buy buttons appear automatically
    stats: [
      { value: '5B',  label: 'Fixed supply, no minting' },
      { value: '0%',  label: 'Transfer tax' },
      { value: '20%', label: 'Burned at launch' },
      { value: '2:1', label: 'V1 holder airdrop' },
    ],
    distribution: [
      { label: 'Launch burn',       tokens: '1,000,000,000', pct: '20%', purpose: 'Immediate deflationary signal' },
      { label: 'Public presale',    tokens: '1,500,000,000', pct: '30%', purpose: 'Community distribution' },
      { label: 'Liquidity pool',    tokens: '1,000,000,000', pct: '20%', purpose: 'PancakeSwap V3 initial LP' },
      { label: 'Treasury',          tokens: '750,000,000',   pct: '15%', purpose: 'Burns, airdrops, LP deepening' },
      { label: 'V1 holder airdrop', tokens: '500,000,000',   pct: '10%', purpose: '2:1 claim for V1 holders' },
      { label: 'Development',       tokens: '250,000,000',   pct: '5%',  purpose: 'Ongoing creative and tech work' },
    ],
    v1Note: 'Every verified V1 holder can claim in V2: 2 V1 BEVO = 1 V2 BEVO. The snapshot is taken at the time of the January 2023 exploit. Claim details are announced at launch, and nothing is needed from you before then.',
    roadmap: [
      { phase: 'Phase 1', items: ['V2 contract deployed on BSC', 'PancakeSwap V3 pool launched', '20% launch burn on-chain', 'V1 holder snapshot published'] },
      { phase: 'Phase 2', items: ['V1 2:1 airdrop claim portal', 'NFT minting begins on bevo.art', 'Independent audit published'] },
      { phase: 'Phase 3', items: ['First treasury burn', 'First holder airdrop', 'Open submissions return', 'Holder voting on featured work'] },
      { phase: 'Phase 4', items: ['Ongoing NFT drops, burns and LP deepening', 'BEVO Artists roster', 'First BEVO album'] },
    ],
  },

  // ── A message from Bevo (from the whitepaper, in Bevo's words) ────────────
  message: {
    quote: 'Art does not begin with a canvas. It begins with a thought.',
    paragraphs: [
      'That same paintbrush is now in everyone’s hands. Endless AI artwork is crowding every channel, and in that noise it is hard for real art to be discovered. That is where BEVO comes in — an art platform that curates art based on the people who create and consume it.',
      'The original BEVO Token launched in 2021 with a singular ambition: to become the de facto art token on the Binance Smart Chain. It sold out a 500 BNB presale on DxSale and proved that a community trusted in art as a store of value.',
      'BEVO is the ultimate creative outlet for us. Music, poems, digital art, books and stories — everything is AI powered, and all of it is anchored to a single token on the Binance Smart Chain.',
    ],
    signoff: 'This is my new message.',
  },

};