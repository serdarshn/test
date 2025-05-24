/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PORT: '3001'
  },
  serverRuntimeConfig: {
    port: 3001
  },
  publicRuntimeConfig: {
    port: 3001
  }
}

module.exports = nextConfig
