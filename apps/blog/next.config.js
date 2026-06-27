/** @type {import('next').NextConfig} */
const isExport = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isExport ? '/blog' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
