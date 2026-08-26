/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    // Images are prepared at display size during the build, so production does
    // not depend on an image-optimization runtime such as sharp.
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/lander',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.macindustrialsvcs.com' }],
        destination: 'https://macindustrialsvcs.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://macindustrialsvcs.com/:path*',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
