/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/about', destination: '/#profile', permanent: true },
      { source: '/project', destination: '/work', permanent: true },
    ];
  },
};

module.exports = nextConfig;
