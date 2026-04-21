import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // This tells Turbopack to stop looking at the C:\Users\bb folder
    // and start looking only inside your ParisWebFX folder.
    turbopack: {
      root: __dirname,
    },
  },
};

export default nextConfig;