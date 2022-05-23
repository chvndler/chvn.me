const { withContentlayer } = require('next-contentlayer');
const withMarkdoc = require('@markdoc/next.js');
/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  // swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['cdn.ady.systems', 'i.scdn.co', 'pbs.twimg.com', 'images.unsplash.com', 'i3.ytimg.com'],
  },
  experimental: {
    urlImports: ['https://cdn.ady.systems/', 'https://cdn.skypack.dev/'],
  },
});

module.exports = withMarkdoc(/* options */)({
  pageExtensions: ['tsx', 'js', 'md'],
});
