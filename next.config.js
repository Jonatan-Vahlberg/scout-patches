/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.scouterna.se',
          },
        ],
      },
}

module.exports = nextConfig
