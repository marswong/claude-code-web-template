/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  experimental: {
    lockDistDir: false,
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "tempfile.aiquickdraw.com",
      },
      {
        protocol: "https",
        hostname: "**.e2b.app",
      },
    ],
  },
};

export default nextConfig;
