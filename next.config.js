/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["omdbapi.com", "m.media-amazon.com"]
  }

}

module.exports = nextConfig
