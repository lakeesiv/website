/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "s3.us-west-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
