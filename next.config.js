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
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/ref',
        destination:
          'https://drive.google.com/drive/folders/14Iw_VApXjpfCAtxqy7s4HDZPlHvos1TA',
        permanent: true,
      },
      {
        source: '/voice',
        destination:
          'https://www.animenewsnetwork.com/encyclopedia/people.php?id=241362',
        permanent: true,
      },
      {
        source: '/questions',
        destination: 'https://marshmallow-qa.com/coqui_monster',
        permanent: true,
      },
      {
        source: '/uwu',
        destination: 'https://uwumarket.us/collections/coqui',
        permanent: true,
      },
      {
        source: '/throne',
        destination: 'https://throne.com/coqui',
        permanent: true,
      },
      {
        source: '/supps',
        destination: 'https://gamersupps.gg/?ref=COQUI',
        permanent: true,
      },
      {
        source: '/humble',
        destination:
          'https://www.humblebundle.com/?partner=coqui&charity=78175',
        permanent: true,
      },
      {
        source: '/free-cword-pass',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: true,
      },
    ];
  },
};
