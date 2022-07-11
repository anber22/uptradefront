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
    BASEURL: 'https://276qa.com'
  },
};

module.exports = nextConfig;
