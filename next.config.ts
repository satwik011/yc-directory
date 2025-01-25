import type { NextConfig } from "next";

export const experimental_ppr= true

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG:true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    ppr: 'incremental',
    
  },
  devIndicators:{
      appIsrStatus: true,
      buildActivity: true,
      buildActivityPosition: 'bottom-right'

  }
};

export default nextConfig;
