import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  },
  // Next.js 15+ uses SWC minification by default
  // Improve performance with React strict mode
  reactStrictMode: true,
  // Enable static optimization where possible
  poweredByHeader: false,
  // Compression for better performance
  compress: true
};

export default nextConfig;
