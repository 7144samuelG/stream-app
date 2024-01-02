/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "utfs.io",
      ],
    },
      experimental: {
    esmExternals: false,
  },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig