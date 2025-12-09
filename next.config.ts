import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // IMPORTANT: If you are deploying to a custom domain or user.github.io, leave basePath empty.
  // If deploying to user.github.io/repo-name, set basePath to '/repo-name'.
  // Example: basePath: '/air-purifier-site',
};

export default nextConfig;
