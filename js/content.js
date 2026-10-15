/* ─── BEVO.ART — Single source of truth for all site content ──────────────── */

window.BEVO = {

  site: {
    name:        'BEVO',
    domain:      'bevo.art',
    tagline:     'Art. Music. Poetry. Token.',
    description: 'Original art, music, poetry and digital NFTs by Bevo.',
    year:        2026,
  },

  about: {
    headline: 'Art is the only honest currency.',
    bio: [
      'I am Bevo — poet, musician, visual artist, and the architect of the BEVO token. My work lives at the intersection of language and image: poems that become paintings, songs that carry stories, stories that bleed into verse.',
      'Since 2021, the BEVO token has been the on-chain vessel for that creative output — born from a 500 BNB presale sellout on DxSale and grown into a community of thousands. v2 is the continuation, rebuilt around my own work.',
      'Based in the Caribbean. Rooted in the spiritual. Reaching everywhere.',
    ],
    social: {
      spotify:    'https://open.spotify.com/artist/',
      apple:      'https://music.apple.com/artist/',
      twitter:    'https://twitter.com/bevoart',
      telegram:   'https://t.me/bevotoken',
    },
  },

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

  gallery: [
    {
      id:          'g1',
      title:       'Ascension',
      poem:        'Rise above the noise / arms wide as the horizon / stone holds the light.',
      src:         'images/art-figure.png',
      placeholder: '#1a1510',
    },
    {
      id:          'g2',
      title:       'Fractured',
      poem:        'The face behind the frame / knows which mirror lies. / Blue hair. Blue truth.',
      src:         'images/art-watercolor.jpg',
      placeholder: '#12181e',
    },
    {
      id:          'g3',
      title:       'Silence Is Not Free',
      poem:        'They covered the mouth / and called it safety. / The art remained.',
      src:         'images/freeart.png',
      placeholder: '#0e0e0e',
    },
    {
      id:          'g4',
      title:       'Classical Frequency',
      poem:        'Even stone has a sense of humor. / Even marble chews gum.',
      src:         'images/art-david.jpg',
      placeholder: '#1a1518',
    },
    {
      id:          'g5',
      title:       'Tribal Memory',
      poem:        'These lines were drawn before language. / They remember what words forgot.',
      src:         'images/tribal-pattern.jpg',
      placeholder: '#0d0d0d',
    },
    {
      id:          'g6',
      title:       'Coming Soon',
      poem:        '',
      src:         '',
      placeholder: '#100e0b',
    },
  ],

  poetry: [
    {
      id:      'p1',
      title:   'Stone and Light',
      year:    '2024',
      lines:   [
        'Rise above the noise',
        'arms wide as the horizon —',
        'stone holds the light.',
      ],
      excerpt: 'Rise above the noise / arms wide as the horizon',
    },
    {
      id:      'p2',
      title:   'Blue Truth',
      year:    '2024',
      lines:   [
        'The face behind the frame',
        'knows which mirror lies.',
        'Blue hair. Blue truth. Blue everything.',
      ],
      excerpt: 'The face behind the frame / knows which mirror lies',
    },
    {
      id:      'p3',
      title:   'The Token and the Song',
      year:    '2023',
      lines:   [
        'They said art had no price.',
        'We gave it a contract address.',
        'Now it lives on-chain, permanent, undeniable.',
      ],
      excerpt: 'They said art had no price. / We gave it a contract address.',
    },
    {
      id:      'p4',
      title:   'Caribbean Frequency',
      year:    '2023',
      lines:   [
        'The island does not hurry.',
        'It arrives exactly when it means to —',
        'salt and certainty.',
      ],
      excerpt: 'The island does not hurry. / It arrives exactly when it means to.',
    },
  ],

  music: {
    spotify: {
      playlistId: 'REPLACE_WITH_SPOTIFY_PLAYLIST_OR_ALBUM_ID',
      label:      'On Spotify',
    },
    apple: {
      albumId: 'REPLACE_WITH_APPLE_MUSIC_ALBUM_ID',
      label:   'On Apple Music',
    },
    tracks: [
      { title: 'Track title here', year: '2024' },
      { title: 'Track title here', year: '2024' },
    ],
  },

  books: [
    {
      id:    'b1',
      title: 'Title of First Book',
      genre: 'Poetry Collection',
      year:  '2024',
      desc:  'A collection of verse tracing the edges of faith, art, and digital existence.',
      link:  '#',
      cover: '',
    },
    {
      id:    'b2',
      title: 'Title of Short Story',
      genre: 'Short Fiction',
      year:  '2023',
      desc:  'A story set in the spaces between intention and outcome.',
      link:  '#',
      cover: '',
    },
    {
      id:    'b3',
      title: 'Coming Soon',
      genre: '',
      year:  '2026',
      desc:  '',
      link:  '#',
      cover: '',
    },
  ],

  token: {
    name:            'BEVO Token',
    symbol:          'BEVO',
    chain:           'Binance Smart Chain',
    standard:        'BEP-20',
    totalSupply:     '5,000,000,000',
    contractAddress: 'REPLACE_WITH_CONTRACT_ADDRESS',
    bscscanUrl:      'https://bscscan.com/token/REPLACE_WITH_CONTRACT_ADDRESS',
    tax: {
      total:     '4%',
      burn:      '1%',
      reflect:   '1%',
      dev:       '1%',
      liquidity: '1%',
    },
    stats: {
      holders:   '2,000+',
      liquidity: 'Locked 5yr',
      burned:    '20%',
      presale:   '500 BNB',
    },
  },

};