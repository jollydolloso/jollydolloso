import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/jollydolloso' : '',
  assetPrefix: isProd ? '/jollydolloso' : '',
  trailingSlash: true
};

export default nextConfig;
