import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // static export: `next build` writes the site to out/ for Firebase Hosting
  output: "export",
  images: { unoptimized: true },
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
