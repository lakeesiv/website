/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  images: {
    remotePatterns: [
      {
        hostname: "s3.us-west-2.amazonaws.com",
      },
      {
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
