/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Optimalizace pro menší bundle a rychlejší načítání
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Optimalizace produkce
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimalizace CSS a package imports
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-slot',
    ],
  },
  // Komprese
  compress: true,
  // Turbopack konfigurace (Next.js 16+)
  turbopack: {},
};

export default nextConfig;



