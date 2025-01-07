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
      {
        source: '/ref',
        destination:
          'https://drive.google.com/drive/folders/14Iw_VApXjpfCAtxqy7s4HDZPlHvos1TA',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/voice',
        destination:
          'https://www.animenewsnetwork.com/encyclopedia/people.php?id=241362',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/questions',
        destination: 'https://marshmallow-qa.com/coqui_monster',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/uwu',
        destination: 'https://uwumarket.us/collections/coqui',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/throne',
        destination: 'https://throne.com/coqui',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/supps',
        destination: 'https://gamersupps.gg/?ref=COQUI',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/free-cword-pass',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/minecraft',
        destination:
          'https://discord.com/channels/786373342549770260/1180826995605647441/1248480272488595556',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/cobblemon',
        destination:
          'https://discord.com/channels/786373342549770260/1180826995605647441/1326321954873147453',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/coqui',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/3d-model',
        destination:
          'https://bsky.app/profile/coqui.bsky.social/post/3lf2geztg6k2p',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/3am',
        destination: 'https://3am.moe/',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/store',
        destination: 'https://store.3am.moe/',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/twitch',
        destination: 'https://www.twitch.tv/COQUI',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
      {
        source: '/bsky',
        destination: 'https://bsky.app/profile/coqui.bsky.social',
        permanent: false,
        headers: {
          'Cache-Control': 'no-cache no-store max-age=0 must-revalidate',
        },
      },
    ];
  },
};
