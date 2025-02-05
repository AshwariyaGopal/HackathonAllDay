import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint checks during builds
  },
  images: {
    domains: ['cdn.sanity.io'], // Add cdn.sanity.io here
  },
  
};

export default nextConfig;
