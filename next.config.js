/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    appDir: true
  }
}
