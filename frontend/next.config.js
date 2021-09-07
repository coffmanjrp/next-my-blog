const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
  // options: {
  //   remarkPlugins: [],
  //   rehypePlugins: [],
  // },
});

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
