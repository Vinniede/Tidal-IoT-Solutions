import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Keep local `/public` assets on their original URLs. This avoids depending
    // on the `/_next/image` server route, which is unavailable on static hosts
    // and is commonly blocked by production proxies/CDNs.
    unoptimized: true,
    qualities: [70, 75, 85, 100],
  },
};

export default nextConfig;
