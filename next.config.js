/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/projects',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com'],
    unoptimized: true
  }
}

module.exports = nextConfig
