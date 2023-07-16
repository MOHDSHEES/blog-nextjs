/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
  serverRuntimeConfig: {
    serverTimeout: 10000, // Set the timeout to 10 seconds
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
};
module.exports = nextConfig;
