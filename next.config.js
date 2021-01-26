/* eslint-disable @typescript-eslint/no-var-requires */
// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting
const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer(
  withPreact({
    webpack(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });

      return config;
    },
    poweredByHeader: false,
  })
);

module.exports = nextConfig;
