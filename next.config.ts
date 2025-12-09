import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Optional: Change links to standard <a> tags if needed for some static hosts, 
  // but Next.js <Link> works fine with export usually.
  images: {
    unoptimized: true, // Required for static export unless using a custom loader
  },
};

export default nextConfig;
