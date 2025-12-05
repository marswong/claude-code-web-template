/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
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
    ],
  },
};

export default nextConfig;
