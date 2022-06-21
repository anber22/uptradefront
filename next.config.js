/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: "raw-loader",
    });
    return config;
  },
  env: {
    BASEURL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
