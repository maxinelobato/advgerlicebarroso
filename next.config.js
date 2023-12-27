/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60
  },
  swcMinify: false,
};
