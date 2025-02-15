/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = {
  ...nextConfig,
  async redirects() {
    return [
      // 3AM Redirects
      {
        source: '/3am',
        destination: 'https://3am.moe/',
        permanent: false,
      },
      {
        source: '/store',
        destination: 'https://store.3am.moe/',
        permanent: false,
      },
      // Social Redirects
      {
        source: '/twitch',
        destination: 'https://www.twitch.tv/COQUI',
        permanent: false,
      },
      {
        source: '/bsky',
        destination: 'https://bsky.app/profile/coqui.bsky.social',
        permanent: false,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@C0QUI',
        permanent: false,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/coqui',
        permanent: false,
      },
      {
        source: '/clips',
        destination: 'https://www.youtube.com/@C0QUI',
        permanent: false,
      },
      {
        source: '/vods',
        destination: 'https://www.youtube.com/@CoquiArchives',
        permanent: false,
      },
      // Support Redirects
      {
        source: '/uwu',
        destination: 'https://uwumarket.us/collections/coqui',
        permanent: false,
      },
      {
        source: '/throne',
        destination: 'https://throne.com/coqui',
        permanent: false,
      },
      {
        source: '/supps',
        destination: 'https://gamersupps.gg/?ref=COQUI',
        permanent: false,
      },
      {
        source: '/kawa', // This is a duplicate redirect for the 3AM store
        destination:
          'https://merch.kawaentertainment.com/en-ca/collections/3am',
        permanent: false,
      },
      // Community Redirects
      {
        source: '/questions',
        destination: 'https://marshmallow-qa.com/coqui_monster',
        permanent: false,
      },
      {
        source: '/minecraft',
        destination:
          'https://discord.com/channels/786373342549770260/1180826995605647441/1248480272488595556',
        permanent: false,
      },
      {
        source: '/cobblemon',
        destination:
          'https://discord.com/channels/786373342549770260/1180826995605647441/1326321954873147453',
        permanent: false,
      },
      // Misc Redirects
      {
        source: '/ref',
        destination:
          'https://drive.google.com/drive/folders/14Iw_VApXjpfCAtxqy7s4HDZPlHvos1TA',
        permanent: false,
      },
      {
        source: '/voice',
        destination:
          'https://www.animenewsnetwork.com/encyclopedia/people.php?id=241362',
        permanent: false,
      },
      {
        source: '/free-cword-pass',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: false,
      },
      {
        source: '/3d-model',
        destination:
          'https://bsky.app/profile/coqui.bsky.social/post/3lf2geztg6k2p',
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache no-store max-age=0 must-revalidate',
          },
        ],
      },
    ];
  },
};
