/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          'node:crypto': require.resolve('crypto-browserify'),
          'node:stream': require.resolve('stream-browserify'),
        },
        fallback: {
          crypto: require.resolve('crypto-browserify'),
          stream: require.resolve('stream-browserify'),
          buffer: require.resolve('buffer/'),
        },
      };
      return config;
    },
  };
  
  module.exports = nextConfig;
  