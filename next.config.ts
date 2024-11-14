import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // need to be test on CI but not on building of the app
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Static website output
  output: 'export',
};

export default nextConfig;
