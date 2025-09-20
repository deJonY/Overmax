/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static file serving for locales
  async rewrites() {
    return [
      {
        source: "/locales/:path*",
        destination: "/locales/:path*",
      },
    ];
  },
  // Optimize images
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
