/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static1.srcdn.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'static1.cbrimages.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'i.kinja-img.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'static.dc.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'fortressofinsights.files.wordpress.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};
